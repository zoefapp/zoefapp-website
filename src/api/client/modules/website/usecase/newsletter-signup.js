import { z } from "zod";
export const NewsletterSignup = z.enum(['NEWSLETTER', 'EMPLOYEE', 'TICKETVENDOR']);
export class NewsletterSignupUseCase {
    brevoContactsService;
    constructor(brevoContactsService) {
        this.brevoContactsService = brevoContactsService;
    }
    async execute(email, newsletter) {
        await this.brevoContactsService.upsertContact(email, {
            lists: [
                this.getNewsletterId(newsletter)
            ]
        });
    }
    getNewsletterId(newsletter) {
        switch (newsletter) {
            case 'NEWSLETTER':
                return 25;
            case 'EMPLOYEE':
                return 23;
            case 'TICKETVENDOR':
                return 24;
        }
    }
}
