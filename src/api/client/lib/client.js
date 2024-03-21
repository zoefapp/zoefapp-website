export class ClientFetchHttpService {
    defaultOptions;
    constructor(defaultOptions) {
        this.defaultOptions = defaultOptions;
    }
    async request(req, options) {
        return fetch(req, { ...this.defaultOptions, ...options });
    }
}
//# sourceMappingURL=client.js.map