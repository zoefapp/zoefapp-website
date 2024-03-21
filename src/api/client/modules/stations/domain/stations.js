import { z } from "zod";
export class IStationReference {
    reference;
    constructor(reference) {
        this.reference = reference;
    }
    toJSON() {
        return this.reference;
    }
    toString() {
        return this.reference;
    }
    equals(other) {
        return this.reference === other?.reference;
    }
}
export class NSStationReference extends IStationReference {
    nsStationReference;
    constructor(nsStationReference) {
        super("nl:ns:" + nsStationReference);
        this.nsStationReference = nsStationReference;
    }
    static tryMatch(str) {
        let matches = str.match(/^nl:ns:([0-9]+)$/);
        if (matches) {
            return new NSStationReference(matches[1]);
        }
        return null;
    }
}
export class OpenAIStationReference extends IStationReference {
    country;
    stationName;
    constructor(country, stationName) {
        super(`oai:${country}:${stationName}`);
        this.country = country;
        this.stationName = stationName;
    }
    static tryMatch(str) {
        let matches = str.match(/^oai:(?<country>[a-z]{2,3}):(?<name>[^:]+)$/i);
        if (matches && matches.groups?.country && matches.groups?.name) {
            return new OpenAIStationReference(matches.groups?.country, matches.groups?.name);
        }
        return null;
    }
}
export class TrainlineStationReference extends IStationReference {
    code;
    constructor(code) {
        super("tl:" + code);
        this.code = code;
    }
    static tryMatch(str) {
        let matches = str.match(/^tl:([0-9]+)$/);
        if (matches) {
            return new TrainlineStationReference(matches[1]);
        }
        return null;
    }
}
export class BeNeRailStationReference extends IStationReference {
    code;
    constructor(code) {
        super("bnr:" + code);
        this.code = code;
    }
    static tryMatch(str) {
        let matches = str.match(/^bnr:([0-9A-Z]+)$/);
        if (matches) {
            return new BeNeRailStationReference(matches[1]);
        }
        return null;
    }
}
export class UicStationReference extends IStationReference {
    code;
    constructor(code) {
        super("uic:" + code);
        this.code = code;
    }
    static tryMatch(str) {
        let matches = str.match(/^uic:([0-9A-Z]+)$/);
        if (matches) {
            return new UicStationReference(matches[1]);
        }
        return null;
    }
}
class StationReferenceFactory {
    static createFromString(str) {
        let trials = [
            NSStationReference.tryMatch,
            OpenAIStationReference.tryMatch,
            TrainlineStationReference.tryMatch,
            BeNeRailStationReference.tryMatch
        ];
        for (let trial of trials) {
            let result = trial(str);
            if (result) {
                return result;
            }
        }
        throw new Error('Invalid station reference (reference=' + str + ')');
    }
}
const StringStationReference = z.string().transform((value, errors) => {
    try {
        return StationReferenceFactory.createFromString(value);
    }
    catch (e) {
        errors.addIssue({
            code: 'custom',
            message: `invalid station reference: ${value}`
        });
        return z.NEVER;
    }
});
export const StationReference = z.union([StringStationReference, z.instanceof(IStationReference)]);
export const Station = z.object({
    ref: StationReference,
    country: z.string(),
    uicCode: z.string().optional(),
    longName: z.string(),
});
//# sourceMappingURL=stations.js.map