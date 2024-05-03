import { z } from "astro/zod";
import { getCollection } from "astro:content";
import type { SupportedLanguages } from "~/i18n/constants";

export const FaqRelevance = z.enum(['passenger', 'ticketvendor', 'employer']);
export type FaqRelevance = z.infer<typeof FaqRelevance>;

export const FaqSchema = z.object({
    question: z.string(),
    answer: z.string(),
    homepageOrder: z.number().optional(),
    relevantFor: z.array(FaqRelevance).default([])
})
export type FAQ = z.infer<typeof FaqSchema>;


export async function getFaqs(relevance: FaqRelevance, language: SupportedLanguages): Promise<FAQ[]> {
    let result = await getCollection("faq", entry => {
        return entry.id.startsWith(`${language}/`) && entry.data.relevantFor.includes(relevance)
    })
    return result.map(e => e.data)
}
