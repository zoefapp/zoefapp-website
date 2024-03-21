import { z } from "zod";
export declare const ActualIntermediaryStop: z.ZodObject<{
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
    actualArrivalTime: z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
        toDate(): Date;
    }, z.ZodTypeDef, {
        toDate(): Date;
    }>, Date, {
        toDate(): Date;
    }>]>, string | Date, string | Date | {
        toDate(): Date;
    }>, Date, string | Date | {
        toDate(): Date;
    }>>;
    actualDepartureTime: z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
        toDate(): Date;
    }, z.ZodTypeDef, {
        toDate(): Date;
    }>, Date, {
        toDate(): Date;
    }>]>, string | Date, string | Date | {
        toDate(): Date;
    }>, Date, string | Date | {
        toDate(): Date;
    }>>;
    cancelled: z.ZodNullable<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    station: import("../../stations/domain/stations").IStationReference | null;
    plannedArrivalTime: Date | null;
    plannedDepartureTime: Date | null;
    track: string | null;
    actualArrivalTime: Date | null;
    actualDepartureTime: Date | null;
    cancelled: boolean | null;
}, {
    actualArrivalTime: ((string | Date | {
        toDate(): Date;
    }) & (string | Date | {
        toDate(): Date;
    } | undefined)) | null;
    actualDepartureTime: ((string | Date | {
        toDate(): Date;
    }) & (string | Date | {
        toDate(): Date;
    } | undefined)) | null;
    cancelled: boolean | null;
    station?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
    plannedArrivalTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    plannedDepartureTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    track?: string | null | undefined;
}>;
export type ActualIntermediaryStop = z.infer<typeof ActualIntermediaryStop>;
export declare const ActualLeg: z.ZodObject<{
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
    departureStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../../stations/domain/stations").IStationReference, string>, z.ZodType<import("../../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../../stations/domain/stations").IStationReference>]>>>;
    destinationStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../../stations/domain/stations").IStationReference, string>, z.ZodType<import("../../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../../stations/domain/stations").IStationReference>]>>>;
    trainNumber: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    actualDepartureTime: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
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
    actualArrivalTime: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
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
    transferPossible: z.ZodDefault<z.ZodEnum<["probably", "no", "unknown", "n/a"]>>;
    cancelled: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
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
        actualArrivalTime: z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
            toDate(): Date;
        }, z.ZodTypeDef, {
            toDate(): Date;
        }>, Date, {
            toDate(): Date;
        }>]>, string | Date, string | Date | {
            toDate(): Date;
        }>, Date, string | Date | {
            toDate(): Date;
        }>>;
        actualDepartureTime: z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
            toDate(): Date;
        }, z.ZodTypeDef, {
            toDate(): Date;
        }>, Date, {
            toDate(): Date;
        }>]>, string | Date, string | Date | {
            toDate(): Date;
        }>, Date, string | Date | {
            toDate(): Date;
        }>>;
        cancelled: z.ZodNullable<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        station: import("../../stations/domain/stations").IStationReference | null;
        plannedArrivalTime: Date | null;
        plannedDepartureTime: Date | null;
        track: string | null;
        actualArrivalTime: Date | null;
        actualDepartureTime: Date | null;
        cancelled: boolean | null;
    }, {
        actualArrivalTime: ((string | Date | {
            toDate(): Date;
        }) & (string | Date | {
            toDate(): Date;
        } | undefined)) | null;
        actualDepartureTime: ((string | Date | {
            toDate(): Date;
        }) & (string | Date | {
            toDate(): Date;
        } | undefined)) | null;
        cancelled: boolean | null;
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
        actualArrivalTime: Date | null;
        actualDepartureTime: Date | null;
        cancelled: boolean | null;
    }[];
    actualArrivalTime: Date | null;
    actualDepartureTime: Date | null;
    cancelled: boolean | null;
    transferPossible: "unknown" | "probably" | "no" | "n/a";
}, {
    plannedArrivalTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    plannedDepartureTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    departureStation?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
    destinationStation?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
    trainNumber?: string | null | undefined;
    actualDepartureTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    actualArrivalTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    transferPossible?: "unknown" | "probably" | "no" | "n/a" | undefined;
    cancelled?: boolean | null | undefined;
    stops?: {
        actualArrivalTime: ((string | Date | {
            toDate(): Date;
        }) & (string | Date | {
            toDate(): Date;
        } | undefined)) | null;
        actualDepartureTime: ((string | Date | {
            toDate(): Date;
        }) & (string | Date | {
            toDate(): Date;
        } | undefined)) | null;
        cancelled: boolean | null;
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
export type ActualLeg = z.infer<typeof ActualLeg>;
export declare const ActualTrip: z.ZodObject<{
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
    departureStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../../stations/domain/stations").IStationReference, string>, z.ZodType<import("../../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../../stations/domain/stations").IStationReference>]>>>;
    destinationStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../../stations/domain/stations").IStationReference, string>, z.ZodType<import("../../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../../stations/domain/stations").IStationReference>]>>>;
    exitStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../../stations/domain/stations").IStationReference, string>, z.ZodType<import("../../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../../stations/domain/stations").IStationReference>]>>>;
    exitTime: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
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
    actualDepartureTime: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
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
    actualArrivalTime: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
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
        departureStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../../stations/domain/stations").IStationReference, string>, z.ZodType<import("../../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../../stations/domain/stations").IStationReference>]>>>;
        destinationStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../../stations/domain/stations").IStationReference, string>, z.ZodType<import("../../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../../stations/domain/stations").IStationReference>]>>>;
        trainNumber: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        actualDepartureTime: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
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
        actualArrivalTime: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
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
        transferPossible: z.ZodDefault<z.ZodEnum<["probably", "no", "unknown", "n/a"]>>;
        cancelled: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
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
            actualArrivalTime: z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
                toDate(): Date;
            }, z.ZodTypeDef, {
                toDate(): Date;
            }>, Date, {
                toDate(): Date;
            }>]>, string | Date, string | Date | {
                toDate(): Date;
            }>, Date, string | Date | {
                toDate(): Date;
            }>>;
            actualDepartureTime: z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<{
                toDate(): Date;
            }, z.ZodTypeDef, {
                toDate(): Date;
            }>, Date, {
                toDate(): Date;
            }>]>, string | Date, string | Date | {
                toDate(): Date;
            }>, Date, string | Date | {
                toDate(): Date;
            }>>;
            cancelled: z.ZodNullable<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            station: import("../../stations/domain/stations").IStationReference | null;
            plannedArrivalTime: Date | null;
            plannedDepartureTime: Date | null;
            track: string | null;
            actualArrivalTime: Date | null;
            actualDepartureTime: Date | null;
            cancelled: boolean | null;
        }, {
            actualArrivalTime: ((string | Date | {
                toDate(): Date;
            }) & (string | Date | {
                toDate(): Date;
            } | undefined)) | null;
            actualDepartureTime: ((string | Date | {
                toDate(): Date;
            }) & (string | Date | {
                toDate(): Date;
            } | undefined)) | null;
            cancelled: boolean | null;
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
            actualArrivalTime: Date | null;
            actualDepartureTime: Date | null;
            cancelled: boolean | null;
        }[];
        actualArrivalTime: Date | null;
        actualDepartureTime: Date | null;
        cancelled: boolean | null;
        transferPossible: "unknown" | "probably" | "no" | "n/a";
    }, {
        plannedArrivalTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        plannedDepartureTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        departureStation?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
        destinationStation?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
        trainNumber?: string | null | undefined;
        actualDepartureTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        actualArrivalTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        transferPossible?: "unknown" | "probably" | "no" | "n/a" | undefined;
        cancelled?: boolean | null | undefined;
        stops?: {
            actualArrivalTime: ((string | Date | {
                toDate(): Date;
            }) & (string | Date | {
                toDate(): Date;
            } | undefined)) | null;
            actualDepartureTime: ((string | Date | {
                toDate(): Date;
            }) & (string | Date | {
                toDate(): Date;
            } | undefined)) | null;
            cancelled: boolean | null;
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
            actualArrivalTime: Date | null;
            actualDepartureTime: Date | null;
            cancelled: boolean | null;
        }[];
        actualArrivalTime: Date | null;
        actualDepartureTime: Date | null;
        cancelled: boolean | null;
        transferPossible: "unknown" | "probably" | "no" | "n/a";
    }[];
    actualArrivalTime: Date | null;
    actualDepartureTime: Date | null;
    exitStation: import("../../stations/domain/stations").IStationReference | null;
    exitTime: Date | null;
}, {
    plannedArrivalTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    plannedDepartureTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    departureStation?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
    destinationStation?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
    exitStation?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
    exitTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    actualDepartureTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    actualArrivalTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    legs?: {
        plannedArrivalTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        plannedDepartureTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        departureStation?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
        destinationStation?: string | import("../../stations/domain/stations").IStationReference | null | undefined;
        trainNumber?: string | null | undefined;
        actualDepartureTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        actualArrivalTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        transferPossible?: "unknown" | "probably" | "no" | "n/a" | undefined;
        cancelled?: boolean | null | undefined;
        stops?: {
            actualArrivalTime: ((string | Date | {
                toDate(): Date;
            }) & (string | Date | {
                toDate(): Date;
            } | undefined)) | null;
            actualDepartureTime: ((string | Date | {
                toDate(): Date;
            }) & (string | Date | {
                toDate(): Date;
            } | undefined)) | null;
            cancelled: boolean | null;
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
export type ActualTrip = z.infer<typeof ActualTrip>;
