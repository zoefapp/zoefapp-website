import { z } from "zod";
import { NewsletterSignup } from "./usecase/newsletter-signup";
export const NewsletterSignupBody = z.object({
    email: z.string(),
    newsletter: NewsletterSignup,
});
