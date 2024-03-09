
import { getCollection, z } from "astro:content";
import type { Blog } from "~/content/config";
import { useRoutes } from "./utils";

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
        blog: BlogEntry;
    };
}

export async function getBlogPaths(lang: string): Promise<Paths[]> {
    console.log(lang)
    const blogEntries: BlogContentEntry[] = await getCollection("blog")
    return blogEntries.filter(e => e.data.language == lang).map((entry) => ({
        params: { slug: entry.slug },
        props: {
            blog: {
                ...entry,
                translations: blogEntries
                    .filter(
                        (e) =>
                            e.data.translationCode == entry.data.translationCode &&
                            e.slug != entry.slug,
                    )
                    .map((e) => {
                        return {
                            language: e.data.language,
                            title: e.data.title,
                            href: useRoutes(e.data.language)(`blog`)(e.slug),
                        };
                    }),
            },
        },
    }));
}