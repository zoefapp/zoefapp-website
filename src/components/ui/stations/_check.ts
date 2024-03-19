import { z } from "astro/zod";

export const CheckClaimForm = z.object({
    departure: z.string(),
    arrival: z.string(),
    date: z.coerce.date(),
})
export type CheckClaimForm = z.infer<typeof CheckClaimForm>