export class HttpTripClient {
    baseUrl;
    httpService;
    constructor(baseUrl, httpService) {
        this.baseUrl = baseUrl;
        this.httpService = httpService;
    }
    async tripFromRouteV1(cmd) {
        let result = await this.httpService.request(this.baseUrl + '/trips-fromRouteV1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cmd)
        });
        console.log(JSON.stringify(cmd))
        return result.json();
    }
}
//# sourceMappingURL=client.js.map