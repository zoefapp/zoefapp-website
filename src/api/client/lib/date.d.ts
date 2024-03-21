import { z } from "zod";
type IToDateMethod = {
    toDate(): Date;
};
export declare const ToDateMethodType: z.ZodEffects<z.ZodType<IToDateMethod, z.ZodTypeDef, IToDateMethod>, Date, IToDateMethod>;
export type ToDateMethod = z.infer<typeof ToDateMethodType>;
export declare const UtcDate: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodEffects<z.ZodType<IToDateMethod, z.ZodTypeDef, IToDateMethod>, Date, IToDateMethod>]>, string | Date, string | Date | IToDateMethod>, Date, string | Date | IToDateMethod>;
export {};
