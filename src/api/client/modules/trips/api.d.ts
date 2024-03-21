import { z } from "zod";
import { ActualTrip } from "./model/actual_trip";
export declare const FromRouteCommand: z.ZodObject<{
    departureStation: z.ZodUnion<[z.ZodEffects<z.ZodString, import("../stations/domain/stations").IStationReference, string>, z.ZodType<import("../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../stations/domain/stations").IStationReference>]>;
    destinationStation: z.ZodUnion<[z.ZodEffects<z.ZodString, import("../stations/domain/stations").IStationReference, string>, z.ZodType<import("../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../stations/domain/stations").IStationReference>]>;
    departureTime: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
        toDate(): Date;
    }, z.ZodTypeDef, {
        toDate(): Date;
    }>, Date, {
        toDate(): Date;
    }>]>, string | Date, string | Date | {
        toDate(): Date;
    }>, Date, string | Date | {
        toDate(): Date;
    }>;
}, "strip", z.ZodTypeAny, {
    departureStation: import("../stations/domain/stations").IStationReference;
    destinationStation: import("../stations/domain/stations").IStationReference;
    departureTime: Date;
}, {
    departureStation: (string | import("../stations/domain/stations").IStationReference) & (string | import("../stations/domain/stations").IStationReference | undefined);
    destinationStation: (string | import("../stations/domain/stations").IStationReference) & (string | import("../stations/domain/stations").IStationReference | undefined);
    departureTime: (string | Date | {
        toDate(): Date;
    }) & (string | Date | {
        toDate(): Date;
    } | undefined);
}>;
export type FromRouteCommand = z.input<typeof FromRouteCommand>;
type TripFromRouteV1 = (cmd: FromRouteCommand) => Promise<ActualTrip[]>;
export interface TripApi {
    tripFromRouteV1: TripFromRouteV1;
}
export {};
