
import { getCollection, z } from "astro:content";
import { useRoutes } from "./utils";
import type { Blog } from "~/lib/blog";
import createSlug from "~/lib/createSlug";

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

    let blogPages = blogEntries.filter(e => e.id.endsWith(`.${lang}.md`)).map((entry) => {
        let contentSlug = entry.slug.substring(0, entry.slug.length - lang.length)
        let pathSlug = contentSlug.split('/')[0] + '/' + createSlug(entry.data.title)
        return {
            params: { slug: pathSlug },
            props: {
                blog: {
                    ...entry,
                    // TODO this can be done much more efficient
                    translations: blogEntries
                        .filter((otherEntry) => {
                            let translationSlug = otherEntry.slug.substring(0, otherEntry.slug.length - lang.length)
                            return otherEntry.data.id == entry.data.id && entry.id != otherEntry.id && translationSlug == contentSlug
                        })
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
        }
    });

    return [
        ...blogPages,
        ...tagPages
    ]

}