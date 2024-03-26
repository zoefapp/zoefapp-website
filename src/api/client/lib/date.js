import { zonedTimeToUtc } from "date-fns-tz";
import { z } from "zod";
// for firebase Timestamp
export const ToDateMethodType = z.custom((val) => {
    if (val !== null && typeof val === 'object' && val.constructor.name === 'Timestamp' && typeof val.toDate === 'function') {
        return true;
    }
    return false;
}).transform((val) => {
    return val.toDate();
});
export const UtcDate = z.union([
    z.string(),
    z.date(),
    ToDateMethodType
])
    .refine((date) => {
    if (date instanceof Date) {
        return !isNaN(date);
    }
    if (typeof date == 'string') {
        return date != '';
    }
    return false;
})
    .transform((date, ctx) => {
    if (date instanceof Date) {
        return date;
    }
    if (typeof date == 'string') {
        let result;
        if (!date) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Invalid date",
            });
            return z.NEVER;
        }
        else if (date.indexOf("Z") > 0) {
            result = new Date(date);
        }
        else if (date.indexOf("+") > 0) {
            result = new Date(date);
        }
        else {
            // missing timezone info. assuming NL
            result = zonedTimeToUtc(date, 'Europe/Amsterdam');
        }
        if (isNaN(result)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Invalid date",
            });
            // This is a special symbol you can use to
            // return early from the transform function.
            // It has type `never` so it does not affect the
            // inferred return type.
            return z.NEVER;
        }
        return result;
    }
    throw new Error("Invalid date type argument");
});
