import { z } from "zod";
export declare const IntermediaryStop: z.ZodObject<{
    station: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../../stations/domain/stations").IStationReference, string>, z.ZodType<import("../../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../../stations/domain/stations").IStationReference>]>>>;
    plannedArrivalTime: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
        toDate(): Date;
    }, z.ZodTypeDef, {
        toDate(): Date;
    }>, Date, {
        toDate(): Date;
    }>]>, string | Date, string | Date | {
        toDate(): Date;
    }>, Date, string | Date | {
        toDate(): Date;
    }>>>;
    plannedDepartureTime: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
        toDate(): Date;
    }, z.ZodTypeDef, {
        toDate(): Date;
    }>, Date, {
        toDate(): Date;
    }>]>, string | Date, string | Date | {
        toDate(): Date;
    }>, Date, string | Date | {
        toDate(): Date;
    }>>>;
    track: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    station: import("../../stations/domain/stations").IStationReference | null;
    plannedArrivalTime: Date | null;
    plannedDepartureTime: Date | null;
    track: string | null;
}, {
    station?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
    plannedArrivalTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    plannedDepartureTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    track?: string | null | undefined;
}>;
export type IntermediaryStop = z.infer<typeof IntermediaryStop>;
export declare const RouteLeg: z.ZodObject<{
    departureStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../../stations/domain/stations").IStationReference, string>, z.ZodType<import("../../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../../stations/domain/stations").IStationReference>]>>>;
    plannedDepartureTime: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
        toDate(): Date;
    }, z.ZodTypeDef, {
        toDate(): Date;
    }>, Date, {
        toDate(): Date;
    }>]>, string | Date, string | Date | {
        toDate(): Date;
    }>, Date, string | Date | {
        toDate(): Date;
    }>>>;
    destinationStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../../stations/domain/stations").IStationReference, string>, z.ZodType<import("../../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../../stations/domain/stations").IStationReference>]>>>;
    plannedArrivalTime: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
        toDate(): Date;
    }, z.ZodTypeDef, {
        toDate(): Date;
    }>, Date, {
        toDate(): Date;
    }>]>, string | Date, string | Date | {
        toDate(): Date;
    }>, Date, string | Date | {
        toDate(): Date;
    }>>>;
    trainNumber: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    stops: z.ZodDefault<z.ZodArray<z.ZodObject<{
        station: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../../stations/domain/stations").IStationReference, string>, z.ZodType<import("../../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../../stations/domain/stations").IStationReference>]>>>;
        plannedArrivalTime: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
            toDate(): Date;
        }, z.ZodTypeDef, {
            toDate(): Date;
        }>, Date, {
            toDate(): Date;
        }>]>, string | Date, string | Date | {
            toDate(): Date;
        }>, Date, string | Date | {
            toDate(): Date;
        }>>>;
        plannedDepartureTime: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
            toDate(): Date;
        }, z.ZodTypeDef, {
            toDate(): Date;
        }>, Date, {
            toDate(): Date;
        }>]>, string | Date, string | Date | {
            toDate(): Date;
        }>, Date, string | Date | {
            toDate(): Date;
        }>>>;
        track: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        station: import("../../stations/domain/stations").IStationReference | null;
        plannedArrivalTime: Date | null;
        plannedDepartureTime: Date | null;
        track: string | null;
    }, {
        station?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
        plannedArrivalTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        plannedDepartureTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        track?: string | null | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    plannedArrivalTime: Date | null;
    plannedDepartureTime: Date | null;
    departureStation: import("../../stations/domain/stations").IStationReference | null;
    destinationStation: import("../../stations/domain/stations").IStationReference | null;
    trainNumber: string | null;
    stops: {
        station: import("../../stations/domain/stations").IStationReference | null;
        plannedArrivalTime: Date | null;
        plannedDepartureTime: Date | null;
        track: string | null;
    }[];
}, {
    departureStation?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
    plannedDepartureTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    destinationStation?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
    plannedArrivalTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    trainNumber?: string | null | undefined;
    stops?: {
        station?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
        plannedArrivalTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        plannedDepartureTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        track?: string | null | undefined;
    }[] | undefined;
}>;
export type RouteLeg = z.infer<typeof RouteLeg>;
export declare const TripRoute: z.ZodObject<{
    departureStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../../stations/domain/stations").IStationReference, string>, z.ZodType<import("../../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../../stations/domain/stations").IStationReference>]>>>;
    destinationStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../../stations/domain/stations").IStationReference, string>, z.ZodType<import("../../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../../stations/domain/stations").IStationReference>]>>>;
    plannedDepartureTime: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
        toDate(): Date;
    }, z.ZodTypeDef, {
        toDate(): Date;
    }>, Date, {
        toDate(): Date;
    }>]>, string | Date, string | Date | {
        toDate(): Date;
    }>, Date, string | Date | {
        toDate(): Date;
    }>>>;
    plannedArrivalTime: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
        toDate(): Date;
    }, z.ZodTypeDef, {
        toDate(): Date;
    }>, Date, {
        toDate(): Date;
    }>]>, string | Date, string | Date | {
        toDate(): Date;
    }>, Date, string | Date | {
        toDate(): Date;
    }>>>;
    legs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        departureStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../../stations/domain/stations").IStationReference, string>, z.ZodType<import("../../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../../stations/domain/stations").IStationReference>]>>>;
        plannedDepartureTime: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
            toDate(): Date;
        }, z.ZodTypeDef, {
            toDate(): Date;
        }>, Date, {
            toDate(): Date;
        }>]>, string | Date, string | Date | {
            toDate(): Date;
        }>, Date, string | Date | {
            toDate(): Date;
        }>>>;
        destinationStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../../stations/domain/stations").IStationReference, string>, z.ZodType<import("../../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../../stations/domain/stations").IStationReference>]>>>;
        plannedArrivalTime: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
            toDate(): Date;
        }, z.ZodTypeDef, {
            toDate(): Date;
        }>, Date, {
            toDate(): Date;
        }>]>, string | Date, string | Date | {
            toDate(): Date;
        }>, Date, string | Date | {
            toDate(): Date;
        }>>>;
        trainNumber: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        stops: z.ZodDefault<z.ZodArray<z.ZodObject<{
            station: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../../stations/domain/stations").IStationReference, string>, z.ZodType<import("../../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../../stations/domain/stations").IStationReference>]>>>;
            plannedArrivalTime: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
                toDate(): Date;
            }, z.ZodTypeDef, {
                toDate(): Date;
            }>, Date, {
                toDate(): Date;
            }>]>, string | Date, string | Date | {
                toDate(): Date;
            }>, Date, string | Date | {
                toDate(): Date;
            }>>>;
            plannedDepartureTime: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
                toDate(): Date;
            }, z.ZodTypeDef, {
                toDate(): Date;
            }>, Date, {
                toDate(): Date;
            }>]>, string | Date, string | Date | {
                toDate(): Date;
            }>, Date, string | Date | {
                toDate(): Date;
            }>>>;
            track: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            station: import("../../stations/domain/stations").IStationReference | null;
            plannedArrivalTime: Date | null;
            plannedDepartureTime: Date | null;
            track: string | null;
        }, {
            station?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
            plannedArrivalTime?: string | Date | {
                toDate(): Date;
            } | null | undefined;
            plannedDepartureTime?: string | Date | {
                toDate(): Date;
            } | null | undefined;
            track?: string | null | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        plannedArrivalTime: Date | null;
        plannedDepartureTime: Date | null;
        departureStation: import("../../stations/domain/stations").IStationReference | null;
        destinationStation: import("../../stations/domain/stations").IStationReference | null;
        trainNumber: string | null;
        stops: {
            station: import("../../stations/domain/stations").IStationReference | null;
            plannedArrivalTime: Date | null;
            plannedDepartureTime: Date | null;
            track: string | null;
        }[];
    }, {
        departureStation?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
        plannedDepartureTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        destinationStation?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
        plannedArrivalTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        trainNumber?: string | null | undefined;
        stops?: {
            station?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
            plannedArrivalTime?: string | Date | {
                toDate(): Date;
            } | null | undefined;
            plannedDepartureTime?: string | Date | {
                toDate(): Date;
            } | null | undefined;
            track?: string | null | undefined;
        }[] | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    plannedArrivalTime: Date | null;
    plannedDepartureTime: Date | null;
    departureStation: import("../../stations/domain/stations").IStationReference | null;
    destinationStation: import("../../stations/domain/stations").IStationReference | null;
    legs: {
        plannedArrivalTime: Date | null;
        plannedDepartureTime: Date | null;
        departureStation: import("../../stations/domain/stations").IStationReference | null;
        destinationStation: import("../../stations/domain/stations").IStationReference | null;
        trainNumber: string | null;
        stops: {
            station: import("../../stations/domain/stations").IStationReference | null;
            plannedArrivalTime: Date | null;
            plannedDepartureTime: Date | null;
            track: string | null;
        }[];
    }[];
}, {
    departureStation?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
    destinationStation?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
    plannedDepartureTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    plannedArrivalTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    legs?: {
        departureStation?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
        plannedDepartureTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        destinationStation?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
        plannedArrivalTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        trainNumber?: string | null | undefined;
        stops?: {
            station?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
            plannedArrivalTime?: string | Date | {
                toDate(): Date;
            } | null | undefined;
            plannedDepartureTime?: string | Date | {
                toDate(): Date;
            } | null | undefined;
            track?: string | null | undefined;
        }[] | undefined;
    }[] | undefined;
}>;
export type TripRoute = z.infer<typeof TripRoute>;
