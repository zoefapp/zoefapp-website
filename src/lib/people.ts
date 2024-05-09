import { z } from "astro/zod";
import { getCollection, type CollectionEntry } from "astro:content";

export type PeopleContentEntry = CollectionEntry<"people">;

export const PeopleSchema = z.object({
    name: z.string(),
    title: z.string(),
    order: z.number().optional(),
    photo: z.string().optional(),
    country: z.string().optional(),
    countryIcon: z.string().optional(),
    socials: z.array(
        z.object({
            url: z.string(),
            icon: z.string(),
            label: z.string().optional(),
        })
    ),
});
export type Employee = z.infer<typeof PeopleSchema>;

export async function getPeople(): Promise<PeopleContentEntry[]> {
    return (await getCollection("people")).sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
}
