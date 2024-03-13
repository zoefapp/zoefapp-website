
import { getCollection, z } from "astro:content";
import { useRoutes } from "./utils";
import type { Blog } from "~/lib/blog";

interface BlogContentEntry {
    id: string;
    body: string;
    render: () => Promise<any>;
    slug: string;
    data: Blog;
}

interface Translation {
    language: string,
    title: string,
    href: string
}
export interface BlogEntry extends BlogContentEntry {
    translations: Translation[]
}

interface Paths {
    params: { slug: string };
    props: {
        blog?: BlogEntry,
        tag?: string
    };
}

export async function getBlogPaths(lang: string): Promise<Paths[]> {
    const blogEntries: BlogContentEntry[] = await getCollection("blog")

    let allTags = [...(new Set(blogEntries.flatMap(e => e.data.tags)))]

    let tagPages = allTags
        .map((tag) => ({
            params: { slug: `@${tag}` },
            props: { tag }
        }))

    let blogPages = blogEntries.filter(e => e.id.endsWith(`.${lang}.md`)).map((entry) => ({
        params: { slug: entry.slug.substring(0, entry.slug.length - lang.length) },
        props: {
            blog: {
                ...entry,

                // find translations 
                translations: blogEntries
                    .filter((translation) =>
                        translation.data.translationCode == entry.data.translationCode &&
                        translation.slug != entry.slug,
                    )
                    .map((translation) => {
                        let blogLang = translation.id.split(".")[1]
                        return {
                            language: blogLang,
                            title: translation.data.title,
                            href: useRoutes(blogLang)(`blog`)(translation.slug),
                        };
                    }),
            },
        },
    }));

    console.log(blogPages);

    return [
        ...blogPages,
        ...tagPages
    ]

}