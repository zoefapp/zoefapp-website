import { z } from "zod";
import { ActualTrip } from "../trips/model/actual_trip";
import { StationReference } from "../stations/domain/stations";
import { UtcDate } from "../../lib/date";
// overwegen om in plaats van een array, een linkedlist te maken?
// { from: A, to: B, next: { from: B, to: C, next: null } }
export const ActualTripEligibility = ActualTrip.extend({
    eligible: z.enum(['probably', 'unlikely', 'undetermined']),
    appliedLegislation: z.string(), // EU / NL
    reason: z.string().optional(),
});
export const EligiblityCheck = z.object({
    departure: StationReference,
    destination: StationReference,
    departureTime: UtcDate
});
const EligibiltyOutcome = z.enum([
    'probably', // when we know quite sure
    'maybe',
    'probably_not',
    'undetermined'
]);
// for now the eligibility is for the whole trip, but we will have to split it up in parts later on
export const Eligibilty = z.object({
    outcome: EligibiltyOutcome,
    reasonCode: z.string().optional()
});
export const RouteEligibilty = z.object({
    route: ActualTrip,
    eligible: Eligibilty
});
