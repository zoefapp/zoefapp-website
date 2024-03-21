import { z } from "zod";
export declare abstract class IStationReference {
    readonly reference: string;
    constructor(reference: string);
    toJSON(): string;
    toString(): string;
    equals(other?: IStationReference | null): boolean;
}
export declare class NSStationReference extends IStationReference {
    readonly nsStationReference: string;
    constructor(nsStationReference: string);
    static tryMatch(str: string): NSStationReference | null;
}
export declare class OpenAIStationReference extends IStationReference {
    readonly country: string;
    readonly stationName: string;
    constructor(country: string, stationName: string);
    static tryMatch(str: string): OpenAIStationReference | null;
}
export declare class TrainlineStationReference extends IStationReference {
    readonly code: string;
    constructor(code: string);
    static tryMatch(str: string): TrainlineStationReference | null;
}
export declare class BeNeRailStationReference extends IStationReference {
    readonly code: string;
    constructor(code: string);
    static tryMatch(str: string): BeNeRailStationReference | null;
}
export declare class UicStationReference extends IStationReference {
    readonly code: string;
    constructor(code: string);
    static tryMatch(str: string): UicStationReference | null;
}
export declare const StationReference: z.ZodUnion<[z.ZodEffects<z.ZodString, IStationReference, string>, z.ZodType<IStationReference, z.ZodTypeDef, IStationReference>]>;
export type StationReference = z.infer<typeof StationReference>;
export declare const Station: z.ZodObject<{
    ref: z.ZodUnion<[z.ZodEffects<z.ZodString, IStationReference, string>, z.ZodType<IStationReference, z.ZodTypeDef, IStationReference>]>;
    country: z.ZodString;
    uicCode: z.ZodOptional<z.ZodString>;
    longName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    country: string;
    ref: IStationReference;
    longName: string;
    uicCode?: string | undefined;
}, {
    country: string;
    ref: (string | IStationReference) & (string | IStationReference | undefined);
    longName: string;
    uicCode?: string | undefined;
}>;
export type Station = z.infer<typeof Station>;
export interface StationRepository {
    findStationById(ref: string): Promise<Station>;
}
export interface StationSearchService {
    findStation(ref: string): Promise<Station | null>;
    findStations(ref: string): Promise<Station[]>;
}
