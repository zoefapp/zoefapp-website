export class HttpEligibilityClient {
    baseUrl;
    httpService;
    constructor(baseUrl, httpService) {
        this.baseUrl = baseUrl;
        this.httpService = httpService;
    }
    async determineEligibility(cmd) {
        let result = await this.httpService.request(this.baseUrl + '/eligibility-ondeparture', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cmd)
        });
        return result.json();
    }
}
