import { z } from "zod";
import { BrevoContactsService } from "../../../modules/brevo/services/brevo_contacts";
export declare const NewsletterSignup: z.ZodEnum<["NEWSLETTER", "EMPLOYEE", "TICKETVENDOR"]>;
export type NewsletterSignup = z.infer<typeof NewsletterSignup>;
export declare class NewsletterSignupUseCase {
    private brevoContactsService;
    constructor(brevoContactsService: BrevoContactsService);
    execute(email: string, newsletter: NewsletterSignup): Promise<void>;
    private getNewsletterId;
}
