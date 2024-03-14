import { z } from "astro/zod";
import { getCollection } from "astro:content";
import { SUPPORTED_LANGUAGES, type SupportedLanguages } from "~/i18n/constants";

export const TestimonialRelevance = z.enum(['passenger', 'ticketvendor', 'employer']);
export type TestimonialRelevance = z.infer<typeof TestimonialRelevance>;


export const TestimonialSchema = z.object({
    person: z.string(),
    avatar: z.string(),
    company: z.string(),
    stars: z.number(),
    date: z.date(),
    testimonial: z.string(),
    homepageOrder: z.number().optional(),
    relevantFor: z.array(TestimonialRelevance).default(['passenger', 'ticketvendor', 'employer'])
})
export type Testimonial = z.infer<typeof TestimonialSchema>;


export async function getTestimonials(relevance: TestimonialRelevance, language: SupportedLanguages): Promise<Testimonial[]> {
    let result = await getCollection("testimonial", entry => {
        return entry.id.startsWith(`${language}/`) && entry.data.relevantFor.includes(relevance)
    })
    return result.map(e => e.data)
}