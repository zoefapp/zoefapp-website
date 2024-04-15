import { z } from "astro/zod";


export const NewsletterType = z.enum(['website', 'employer', 'ticketvendor'])