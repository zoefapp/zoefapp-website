import { z } from "astro/zod";
import { getCollection } from "astro:content";
import type { SupportedLanguages } from "~/i18n/constants";

export const BlogSchema = z.object({
    title: z.string(),
    author: z.string(),
    translationCode: z.string().optional(),
    date: z.date(),
    language: z.enum(['nl', 'en']), // todo: use SUPPORTED_LANGUAGE˜S
    tags: z.array(z.string()),
})
export type Blog = z.infer<typeof BlogSchema>;

export async function getRecentBlogs(language: SupportedLanguages, limit: number): Promise<Blog[]> {
    let result = await getCollection("blog", entry => {
        return entry.data.language === language
    })
    return result
        .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
        .slice(0, limit)
        .map(e => e.data)
}
