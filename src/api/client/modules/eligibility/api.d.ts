import { EligiblityCheck, RouteEligibilty } from "./model";
export interface EligibilityApi {
    determineEligibility: (check: EligiblityCheck) => Promise<RouteEligibilty[]>;
}
