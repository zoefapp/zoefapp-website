export interface ClientHttpService {
    request(req: any, options?: any): Promise<any>;
}
export declare class ClientFetchHttpService implements ClientHttpService {
    private defaultOptions?;
    constructor(defaultOptions?: any);
    request(req: any, options?: any): Promise<any>;
}
