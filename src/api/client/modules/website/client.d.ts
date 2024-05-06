import { ClientHttpService } from "../../lib/client";
import { NewsletterSignupBody, WebsiteApi } from "./api";
export declare class HttpWebsiteClient implements WebsiteApi {
    private baseUrl;
    private httpService;
    constructor(baseUrl: string, httpService: ClientHttpService);
    signupNewsletter(cmd: NewsletterSignupBody): Promise<void>;
}
