import { z } from "zod";
export declare const ActualTripEligibility: z.ZodObject<{
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
    departureStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../stations/domain/stations").IStationReference, string>, z.ZodType<import("../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../stations/domain/stations").IStationReference>]>>>;
    destinationStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../stations/domain/stations").IStationReference, string>, z.ZodType<import("../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../stations/domain/stations").IStationReference>]>>>;
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
        departureStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../stations/domain/stations").IStationReference, string>, z.ZodType<import("../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../stations/domain/stations").IStationReference>]>>>;
        destinationStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../stations/domain/stations").IStationReference, string>, z.ZodType<import("../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../stations/domain/stations").IStationReference>]>>>;
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
            station: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../stations/domain/stations").IStationReference, string>, z.ZodType<import("../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../stations/domain/stations").IStationReference>]>>>;
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
            station: import("../stations/domain/stations").IStationReference | null;
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
            station?: string | import("../stations/domain/stations").IStationReference | null | undefined;
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
        departureStation: import("../stations/domain/stations").IStationReference | null;
        destinationStation: import("../stations/domain/stations").IStationReference | null;
        trainNumber: string | null;
        stops: {
            station: import("../stations/domain/stations").IStationReference | null;
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
        departureStation?: string | import("../stations/domain/stations").IStationReference | null | undefined;
        destinationStation?: string | import("../stations/domain/stations").IStationReference | null | undefined;
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
            station?: string | import("../stations/domain/stations").IStationReference | null | undefined;
            plannedArrivalTime?: string | Date | {
                toDate(): Date;
            } | null | undefined;
            plannedDepartureTime?: string | Date | {
                toDate(): Date;
            } | null | undefined;
            track?: string | null | undefined;
        }[] | undefined;
    }>, "many">>;
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
    exitStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../stations/domain/stations").IStationReference, string>, z.ZodType<import("../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../stations/domain/stations").IStationReference>]>>>;
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
    eligible: z.ZodEnum<["probably", "unlikely", "undetermined"]>;
    appliedLegislation: z.ZodString;
    reason: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    plannedArrivalTime: Date | null;
    plannedDepartureTime: Date | null;
    departureStation: import("../stations/domain/stations").IStationReference | null;
    destinationStation: import("../stations/domain/stations").IStationReference | null;
    legs: {
        plannedArrivalTime: Date | null;
        plannedDepartureTime: Date | null;
        departureStation: import("../stations/domain/stations").IStationReference | null;
        destinationStation: import("../stations/domain/stations").IStationReference | null;
        trainNumber: string | null;
        stops: {
            station: import("../stations/domain/stations").IStationReference | null;
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
    exitStation: import("../stations/domain/stations").IStationReference | null;
    exitTime: Date | null;
    eligible: "probably" | "unlikely" | "undetermined";
    appliedLegislation: string;
    reason?: string | undefined;
}, {
    eligible: "probably" | "unlikely" | "undetermined";
    appliedLegislation: string;
    plannedArrivalTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    plannedDepartureTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    departureStation?: string | import("../stations/domain/stations").IStationReference | null | undefined;
    destinationStation?: string | import("../stations/domain/stations").IStationReference | null | undefined;
    legs?: {
        plannedArrivalTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        plannedDepartureTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        departureStation?: string | import("../stations/domain/stations").IStationReference | null | undefined;
        destinationStation?: string | import("../stations/domain/stations").IStationReference | null | undefined;
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
            station?: string | import("../stations/domain/stations").IStationReference | null | undefined;
            plannedArrivalTime?: string | Date | {
                toDate(): Date;
            } | null | undefined;
            plannedDepartureTime?: string | Date | {
                toDate(): Date;
            } | null | undefined;
            track?: string | null | undefined;
        }[] | undefined;
    }[] | undefined;
    actualArrivalTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    actualDepartureTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    exitStation?: string | import("../stations/domain/stations").IStationReference | null | undefined;
    exitTime?: string | Date | {
        toDate(): Date;
    } | null | undefined;
    reason?: string | undefined;
}>;
export type ActualTripEligibility = z.infer<typeof ActualTripEligibility>;
export declare const EligiblityCheck: z.ZodObject<{
    departure: z.ZodUnion<[z.ZodEffects<z.ZodString, import("../stations/domain/stations").IStationReference, string>, z.ZodType<import("../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../stations/domain/stations").IStationReference>]>;
    destination: z.ZodUnion<[z.ZodEffects<z.ZodString, import("../stations/domain/stations").IStationReference, string>, z.ZodType<import("../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../stations/domain/stations").IStationReference>]>;
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
    departureTime: Date;
    departure: import("../stations/domain/stations").IStationReference;
    destination: import("../stations/domain/stations").IStationReference;
}, {
    departureTime: (string | Date | {
        toDate(): Date;
    }) & (string | Date | {
        toDate(): Date;
    } | undefined);
    departure: (string | import("../stations/domain/stations").IStationReference) & (string | import("../stations/domain/stations").IStationReference | undefined);
    destination: (string | import("../stations/domain/stations").IStationReference) & (string | import("../stations/domain/stations").IStationReference | undefined);
}>;
export type EligiblityCheck = z.infer<typeof EligiblityCheck>;
export declare const Eligibilty: z.ZodObject<{
    outcome: z.ZodEnum<["probably", "maybe", "probably_not", "undetermined"]>;
    reasonCode: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    outcome: "probably" | "undetermined" | "maybe" | "probably_not";
    reasonCode?: string | undefined;
}, {
    outcome: "probably" | "undetermined" | "maybe" | "probably_not";
    reasonCode?: string | undefined;
}>;
export type Eligibilty = z.infer<typeof Eligibilty>;
export declare const RouteEligibilty: z.ZodObject<{
    route: z.ZodObject<{
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
        departureStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../stations/domain/stations").IStationReference, string>, z.ZodType<import("../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../stations/domain/stations").IStationReference>]>>>;
        destinationStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../stations/domain/stations").IStationReference, string>, z.ZodType<import("../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../stations/domain/stations").IStationReference>]>>>;
        exitStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../stations/domain/stations").IStationReference, string>, z.ZodType<import("../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../stations/domain/stations").IStationReference>]>>>;
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
            departureStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../stations/domain/stations").IStationReference, string>, z.ZodType<import("../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../stations/domain/stations").IStationReference>]>>>;
            destinationStation: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../stations/domain/stations").IStationReference, string>, z.ZodType<import("../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../stations/domain/stations").IStationReference>]>>>;
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
                station: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, import("../stations/domain/stations").IStationReference, string>, z.ZodType<import("../stations/domain/stations").IStationReference, z.ZodTypeDef, import("../stations/domain/stations").IStationReference>]>>>;
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
                station: import("../stations/domain/stations").IStationReference | null;
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
                station?: string | import("../stations/domain/stations").IStationReference | null | undefined;
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
            departureStation: import("../stations/domain/stations").IStationReference | null;
            destinationStation: import("../stations/domain/stations").IStationReference | null;
            trainNumber: string | null;
            stops: {
                station: import("../stations/domain/stations").IStationReference | null;
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
            departureStation?: string | import("../stations/domain/stations").IStationReference | null | undefined;
            destinationStation?: string | import("../stations/domain/stations").IStationReference | null | undefined;
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
                station?: string | import("../stations/domain/stations").IStationReference | null | undefined;
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
        departureStation: import("../stations/domain/stations").IStationReference | null;
        destinationStation: import("../stations/domain/stations").IStationReference | null;
        legs: {
            plannedArrivalTime: Date | null;
            plannedDepartureTime: Date | null;
            departureStation: import("../stations/domain/stations").IStationReference | null;
            destinationStation: import("../stations/domain/stations").IStationReference | null;
            trainNumber: string | null;
            stops: {
                station: import("../stations/domain/stations").IStationReference | null;
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
        exitStation: import("../stations/domain/stations").IStationReference | null;
        exitTime: Date | null;
    }, {
        plannedArrivalTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        plannedDepartureTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        departureStation?: string | import("../stations/domain/stations").IStationReference | null | undefined;
        destinationStation?: string | import("../stations/domain/stations").IStationReference | null | undefined;
        exitStation?: string | import("../stations/domain/stations").IStationReference | null | undefined;
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
            departureStation?: string | import("../stations/domain/stations").IStationReference | null | undefined;
            destinationStation?: string | import("../stations/domain/stations").IStationReference | null | undefined;
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
                station?: string | import("../stations/domain/stations").IStationReference | null | undefined;
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
    eligible: z.ZodObject<{
        outcome: z.ZodEnum<["probably", "maybe", "probably_not", "undetermined"]>;
        reasonCode: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        outcome: "probably" | "undetermined" | "maybe" | "probably_not";
        reasonCode?: string | undefined;
    }, {
        outcome: "probably" | "undetermined" | "maybe" | "probably_not";
        reasonCode?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    eligible: {
        outcome: "probably" | "undetermined" | "maybe" | "probably_not";
        reasonCode?: string | undefined;
    };
    route: {
        plannedArrivalTime: Date | null;
        plannedDepartureTime: Date | null;
        departureStation: import("../stations/domain/stations").IStationReference | null;
        destinationStation: import("../stations/domain/stations").IStationReference | null;
        legs: {
            plannedArrivalTime: Date | null;
            plannedDepartureTime: Date | null;
            departureStation: import("../stations/domain/stations").IStationReference | null;
            destinationStation: import("../stations/domain/stations").IStationReference | null;
            trainNumber: string | null;
            stops: {
                station: import("../stations/domain/stations").IStationReference | null;
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
        exitStation: import("../stations/domain/stations").IStationReference | null;
        exitTime: Date | null;
    };
}, {
    eligible: {
        outcome: "probably" | "undetermined" | "maybe" | "probably_not";
        reasonCode?: string | undefined;
    };
    route: {
        plannedArrivalTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        plannedDepartureTime?: string | Date | {
            toDate(): Date;
        } | null | undefined;
        departureStation?: string | import("../stations/domain/stations").IStationReference | null | undefined;
        destinationStation?: string | import("../stations/domain/stations").IStationReference | null | undefined;
        exitStation?: string | import("../stations/domain/stations").IStationReference | null | undefined;
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
            departureStation?: string | import("../stations/domain/stations").IStationReference | null | undefined;
            destinationStation?: string | import("../stations/domain/stations").IStationReference | null | undefined;
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
                station?: string | import("../stations/domain/stations").IStationReference | null | undefined;
                plannedArrivalTime?: string | Date | {
                    toDate(): Date;
                } | null | undefined;
                plannedDepartureTime?: string | Date | {
                    toDate(): Date;
                } | null | undefined;
                track?: string | null | undefined;
            }[] | undefined;
        }[] | undefined;
    };
}>;
export type RouteEligibilty = z.infer<typeof RouteEligibilty>;
