import { z } from "zod";
import { StationReference } from "../stations/domain/stations";
import { UtcDate } from "~/lib/date";
export const FromRouteCommand = z.object({
    departureStation: StationReference,
    destinationStation: StationReference,
    departureTime: UtcDate
});
//# sourceMappingURL=api.js.map