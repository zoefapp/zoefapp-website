import { z } from "astro/zod";
import { getCollection, type CollectionEntry } from "astro:content";
import { type SupportedLanguages } from "~/i18n/constants";

export const TestimonialRelevance = z.enum(['passenger', 'ticketvendor', 'employer']);
export type TestimonialRelevance = z.infer<typeof TestimonialRelevance>;

export type TestimonialContentEntry = CollectionEntry<"testimonial">

export const TestimonialSchema = z.object({
    person: z.string(),
    avatar: z.string().optional(),
    company: z.string().optional(),
    stars: z.number(),
    compensation: z.number().optional(),
    date: z.date(),
    testimonial: z.string(),
    homepageOrder: z.number().optional(),
    relevantFor: z.array(TestimonialRelevance).default([])
})
export type Testimonial = z.infer<typeof TestimonialSchema>;

export async function getTestimonials(relevance: TestimonialRelevance, language: SupportedLanguages): Promise<TestimonialContentEntry[]> {
    let result = await getCollection("testimonial", entry => {
        return entry.id.startsWith(`${language}/`) && entry.data.relevantFor.includes(relevance)
    })
    return result
}