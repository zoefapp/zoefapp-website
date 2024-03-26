import { z } from "zod";
import { StationReference } from "../../stations/domain/stations";
import { UtcDate } from "../../../lib/date";
export const IntermediaryStop = z.object({
    station: StationReference.nullable().default(null),
    plannedArrivalTime: UtcDate.nullable().default(null),
    plannedDepartureTime: UtcDate.nullable().default(null),
    track: z.string().nullable().default(null),
});
export const RouteLeg = z.object({
    departureStation: StationReference.nullable().default(null),
    plannedDepartureTime: UtcDate.nullable().default(null),
    destinationStation: StationReference.nullable().default(null),
    plannedArrivalTime: UtcDate.nullable().default(null),
    trainNumber: z.string().nullable().default(null),
    stops: z.array(IntermediaryStop).default([]),
});
// De treinreis die de reiziger wilde afleggen
export const TripRoute = z.object({
    departureStation: StationReference.nullable().default(null),
    destinationStation: StationReference.nullable().default(null),
    plannedDepartureTime: UtcDate.nullable().default(null),
    plannedArrivalTime: UtcDate.nullable().default(null),
    legs: z.array(RouteLeg).default([]),
});
