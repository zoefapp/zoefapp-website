import { z } from "astro/zod";

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