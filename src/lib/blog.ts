import { z } from "astro/zod";
import { getCollection, type CollectionEntry } from "astro:content";
import type { SupportedLanguages } from "~/i18n/constants";
import { useRoutes } from "~/i18n/utils";
import createSlug from "./createSlug";

export type BlogContentEntry = CollectionEntry<"blog">

export const BlogSchema = z.object({
    id: z.string(),
    title: z.string(),
    author: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    headerImage: z.string().optional(),
    metaDescription: z.string().optional(),
    metaCanonical: z.string().optional(),
    metaOgTitle: z.string().optional(),
    metaOgDescription: z.string().optional(),
    metaOgImage: z.string().optional(),
})
export type Blog = z.infer<typeof BlogSchema>;



interface Paths {
    params: { slug: string };
    props: {
        blog?: BlogContentEntry,
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
        let contentSlug = getContentSlug(entry, lang)
        let pathSlug = getPathSlug(contentSlug, entry)
        return {
            params: { slug: pathSlug },
            props: {
                blog: entry
            },
        }
    });

    return [
        ...blogPages,
        ...tagPages
    ]

}



/*
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
*/

function getPathSlug(contentSlug: string, entry: BlogContentEntry) {
    return contentSlug.split('/')[0] + '/' + createSlug(entry.data.title);
}

function getContentSlug(entry: BlogContentEntry, lang: string) {
    return entry.slug.substring(0, entry.slug.length - lang.length);
}


export async function getRecentBlogs(language: SupportedLanguages, limit: number): Promise<BlogContentEntry[]> {
    let result = await getCollection("blog", entry => {
        return entry.id.endsWith(`.${language}.md`)
    })
    return result
        .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
        .slice(0, limit)
}

export function getBlogUrl(language: SupportedLanguages, entry: BlogContentEntry) {
    let slug = getPathSlug(getContentSlug(entry, language), entry)
    return useRoutes(language)('blog')(slug)
}
