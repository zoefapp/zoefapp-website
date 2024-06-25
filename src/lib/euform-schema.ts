import { z } from "zod";

export const schema = z.object({
    ticket: z.string().min(1, { message: "Please enter a ticket" }),
    title: z.string().min(1, { message: "Please enter a title" }),
});

export type FormValues = z.infer<typeof schema>;
