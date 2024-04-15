import { z } from "astro/zod";
import { getEntry, type CollectionEntry } from "astro:content";
import type { SupportedLanguage } from "~/i18n/constants";

export type PageContentEntry = CollectionEntry<"pages">

export const PageProps = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    keywords: z.string().optional(),
    author: z.string().optional(),
    ogTitle: z.string().optional(),
    ogType: z.string().optional(),
    ogUrl: z.string().optional(),
    ogImage: z.string().optional(),
})
export type PageProps = z.infer<typeof PageProps>

export async function getPageProps(lang: SupportedLanguage, pageContentId: string): Promise<PageProps> {
    return getEntry('pages', `${lang}/${pageContentId}`).then(entry => entry!!.data)
}
export async function getPageContent(lang: SupportedLanguage, pageContentId: string): Promise<PageContentEntry> {
    return getEntry('pages', `${lang}/${pageContentId}`).then(entry => entry!!)
}