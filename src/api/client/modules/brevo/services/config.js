import { defineSecret, defineString } from "firebase-functions/params";
export const BREVO_ENDPOINT = defineString('BREVO_ENDPOINT', {
    default: 'https://api.sendinblue.com/v3',
    description: 'Sendinblue API endpoint, change for testing purposes.',
    input: {
        select: {
            options: [
                { label: 'Dump', value: "https://webhook.site/de337fd1-c664-48d9-b6a0-96cee1a299d3" },
                { label: "Production", value: "https://api.sendinblue.com/v3" }
            ]
        }
    }
});
export const BREVO_API_KEY = defineSecret('BREVO_API_KEY');
