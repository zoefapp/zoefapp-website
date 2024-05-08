import { z } from "zod";
export declare const NewsletterSignup: z.ZodEnum<["NEWSLETTER", "EMPLOYEE", "TICKETVENDOR"]>;
export type NewsletterSignup = z.infer<typeof NewsletterSignup>;
export declare const NewsletterSignupBody: z.ZodObject<{
    email: z.ZodString;
    newsletter: z.ZodEnum<["NEWSLETTER", "EMPLOYEE", "TICKETVENDOR"]>;
}, "strip", z.ZodTypeAny, {
    email: string;
    newsletter: "NEWSLETTER" | "EMPLOYEE" | "TICKETVENDOR";
}, {
    email: string;
    newsletter: "NEWSLETTER" | "EMPLOYEE" | "TICKETVENDOR";
}>;
export type NewsletterSignupBody = z.infer<typeof NewsletterSignupBody>;
export interface WebsiteApi {
    signupNewsletter: (signup: NewsletterSignupBody) => Promise<void>;
}
