import { z } from "zod";
import { UtcDate } from "../../../lib/date";
import { StationReference } from "../../stations/domain/stations";
import { IntermediaryStop, RouteLeg, TripRoute } from "~/modules/trips/model/route";
export const ActualIntermediaryStop = IntermediaryStop.extend({
    actualArrivalTime: UtcDate.nullable(),
    actualDepartureTime: UtcDate.nullable(),
    cancelled: z.boolean().nullable(),
});
export const ActualLeg = RouteLeg.extend({
    actualDepartureTime: UtcDate.nullable().default(null),
    actualArrivalTime: UtcDate.nullable().default(null),
    transferPossible: z.enum(['probably', 'no', 'unknown', 'n/a']).default('n/a'),
    cancelled: z.boolean().nullable().default(null),
    stops: z.array(ActualIntermediaryStop).default([]),
});
export const ActualTrip = TripRoute.extend({
    exitStation: StationReference.nullable().default(null), // can be filled by the user if the exit station is not the destination
    exitTime: UtcDate.nullable().default(null), // can be filled by the user if the exit time is not the arrival time
    actualDepartureTime: UtcDate.nullable().default(null),
    actualArrivalTime: UtcDate.nullable().default(null),
    legs: z.array(ActualLeg).default([]),
});
//# sourceMappingURL=actual_trip.js.map