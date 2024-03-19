import { z } from "astro/zod";

export const CheckClaimForm = z.object({
    departure: z.string().min(3),
    arrival: z.string().min(3),
    date: z.coerce.date(),
})
export type CheckClaimForm = z.infer<typeof CheckClaimForm>