import { z } from "zod";
export const NewsletterSignup = z.enum(['NEWSLETTER', 'EMPLOYEE', 'TICKETVENDOR']);
export const NewsletterSignupBody = z.object({
    email: z.string(),
    newsletter: NewsletterSignup,
});
