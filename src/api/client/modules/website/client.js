export class HttpWebsiteClient {
    baseUrl;
    httpService;
    constructor(baseUrl, httpService) {
        this.baseUrl = baseUrl;
        this.httpService = httpService;
    }
    async signupNewsletter(cmd) {
        let result = await this.httpService.request(this.baseUrl + "/website-newslettersignup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-zoef-internal": "obscurity",
            },
            body: JSON.stringify(cmd),
        });
        if (result.status !== 200) {
            throw new Error("Failed to signup newsletter: " + result.status);
        }
    }
}
