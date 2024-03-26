import { ClientHttpService } from "../../lib/client";
import { EligibilityApi } from "./api";
import { RouteEligibilty, EligiblityCheck } from "./model";
export declare class HttpEligibilityClient implements EligibilityApi {
    private baseUrl;
    private httpService;
    constructor(baseUrl: string, httpService: ClientHttpService);
    determineEligibility(cmd: EligiblityCheck): Promise<RouteEligibilty[]>;
}
