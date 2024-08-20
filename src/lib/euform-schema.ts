import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

/*
 * TICKET RESPONSE SCHEMA
 */

// Define the schema for a leg in the route
const legSchema = z.object({
    departureStation: z.string().regex(/^uic:[0-9]+$|^zsid:[0-9]+$/),
    departureTime: z.string().datetime(),
    arrivalStation: z.string().regex(/^uic:[0-9]+$|^zsid:[0-9]+$/),
    arrivalTime: z.string().datetime(),
    trainNumber: z.string(),
    reservedSeats: z.array(z.string()),
});

// Define the schema for the route
const routeSchema = z.object({
    legs: z.array(legSchema).min(1),
});

// Define the main schema
const ticketSchema = z.object({
    ticketId: z.string(),
    externalTicketReference: z.string().trim().min(1, { message: "Please enter a valid ticket reference" }),
    createdOn: z.string().datetime(),
    ticketIssuer: z.string().trim().min(1, { message: "Please enter a valid ticket issuer" }),
    departureStation: z
        .string({ message: "Please enter a departure station" })
        .trim()
        .regex(/^uic:[0-9]+$|^zsid:[0-9]+$/, {
            message: "Please enter a valid departure station",
        }),
    arrivalStation: z
        .string({ message: "Please enter a arrival station" })
        .trim()
        .regex(/^uic:[0-9]+$|^zsid:[0-9]+$/, {
            message: "Please enter a valid arrival station",
        }),
    route: routeSchema.optional(),
    bookingCode: z.string().optional(),
    type: z.enum(["single", "seatreservation", "multiple"]),
    price: z
        .string()
        .regex(/^EUR|CHF:[0-9]+$/)
        .optional(),
    numberOfTravelers: z
        .string()
        .transform((value) => parseInt(value))
        .refine((value) => value > 0, {
            message: "Please enter a valid amount",
        }),
    firstName: z.string().trim().min(1, { message: "Please enter your first name" }),
    lastName: z.string().trim().min(1, { message: "Please enter your first name" }),
    fileId: z.string().optional(),
});

export const ticketTypes = ticketSchema.shape.type._def.values;

/*
 * POTENTIAL OUTCOMES
 */

// Main schema
export const potentialOutcomesSchema = z.union(
    [
        z.literal("neverLeft"),
        z.literal("missedFirstTrainLate"),
        z.literal("arrivedLessThan1hr"),
        z.literal("arrivedMoreThan1hr"),
        z.literal("notCompletedReturnedHome"),
        z.literal("notCompletedStayedOvernight"),
        z.literal("notCompletedDifferentTransport"),
        z.literal("SomethingElse"),
    ],
    {
        message: "Please select a valid option",
    }
);

// Define the metadata to use in a component while mapping
export const potentialOutcomesMetadata = {
    neverLeft: "I never left",
    missedFirstTrainLate: "I missed the first train (late)",
    arrivedLessThan1hr: "I arrived in less than 1 hour",
    arrivedMoreThan1hr: "I arrived in more than 1 hour",
    notCompletedReturnedHome: "I did not complete and returned home",
    notCompletedStayedOvernight: "I did not complete and stayed overnight",
    notCompletedDifferentTransport: "I did not complete and took different transport",
    SomethingElse: "Something else",
};

/*
 * WHAT WOULD YOU LIKE TO DO
 */

export const whatWouldYouLikeToDo = z.enum(["refund", "compensation"], {
    message: "Please select a valid option",
});

export const whatWouldYouLikeToDoMetadata = {
    refund: "I want my money refunded",
    compensation: "I want to apply for compensation",
};
/*
 * WHICH LEG CAUSED THE PROBLEM
 */

export const whichLegCausedTheProblem = z.string().refine((value) => value !== "Which leg caused the problem?", {
    message: "Please select which leg caused the problem",
});

/*
 * WHAT EXACTLY HAPPENED
 */

// Main schema for what exactly happened
export const whatExactlyHappened = z.enum(["trainDidNotLeave", "youMissedTheConnection", "stranded", "delayedArrival"]);

// Define the metadata to use in a component while mapping
export const whatExactlyHappenedMetadata = {
    trainDidNotLeave: "The train did not leave",
    youMissedTheConnection: "You missed the connection",
    stranded: "Stranded",
    delayedArrival: "Delayed arrival",
};

/*
 * REASON: NEVER LEFT SELECTED
 */

const neverLeft = z.object({
    reason: z.literal(potentialOutcomesSchema.options[0].value),
    whatWouldYouLikeToDo: whatWouldYouLikeToDo,
});

/*
 * ADDITIONAL COSTS
 */
const additionalCostsSchema = z
    .array(
        z
            .object({
                amount: z
                    .string()
                    .transform((value) => parseInt(value))
                    .refine((value) => value > 0, {
                        message: "Please enter a valid amount",
                    }),
                currency: z.enum(["EUR", "CHF"]),
                receiptId: z.string().min(1),
                type: z.enum(["accommodation", "food", "transport", "other"]),
                description: z.string().trim().min(20),
            })
            .nullable()
    )
    .optional();

export const additionalCostTypes = ["Accommodation", "Food", "Transport", "Other"];

/*
 * REASON:

 * ARRIVED MORE THAN 1 HOUR LATE
 * NOT COMPLETED THE JOURNEY AND RETURNED HOME
 * NOT COMPLETED THE JOURNEY AND STAYED OVERNIGHT
 * NOT COMPLETED THE JOURNEY AND TOOK DIFFERENT TRANSPORT
 * 
 * SELECTED
 */

const similarReasons = (reason: string) =>
    z.object({
        reason: z.literal(reason),
        whichLegCausedTheProblem: whichLegCausedTheProblem,
        whatExactlyHappened: whatExactlyHappened,
        whatWouldYouLikeToDo: whatWouldYouLikeToDo,
    });

const arrivedMoreThan1hr = similarReasons(potentialOutcomesSchema.options[3].value);
const notCompletedReturnedHome = similarReasons(potentialOutcomesSchema.options[4].value);
const notCompletedStayedOvernight = similarReasons(potentialOutcomesSchema.options[5].value);
const notCompletedDifferentTransport = similarReasons(potentialOutcomesSchema.options[6].value);

/*
 * REASON: OTHER SELECTED
 */

/*
 * REASON:
 *
 * MISSED FIRST TRAIN BECAUSE I WAS LATE
 * ARRIVED LESS THAN 1 HOUR LATE
 *
 * SELECTED
 */

const notEligible = (reason: string) =>
    z.object(
        { reason: z.literal(reason), notEligible: z.boolean() },
        {
            message: "You are not eligible.",
        }
    );

const arrivedLessThan1hr = notEligible(potentialOutcomesSchema.options[1].value);
const missedFirstTrainLate = notEligible(potentialOutcomesSchema.options[2].value);

const somethingElse = z.object({
    reason: z.literal(potentialOutcomesSchema.options[7].value),
    detailedExplanation: z.string().min(10, { message: "Please provide a detailed explanation" }),
    whatWouldYouLikeToDo: whatWouldYouLikeToDo,
});

/*
 * PERSONAL INFORMATION SCHEMA
 */

const passenger = z.object({
    firstName: z
        .string({ message: "Please enter your first name" })
        .trim()
        .min(1, { message: "Please enter your first name" }),
    lastName: z
        .string({ message: "Please enter your last name" })
        .trim()
        .min(1, { message: "Please enter your last name" }),
    email: z
        .string()
        .email({ message: "Please enter a valid email" })
        .optional()
        .or(z.literal("").transform(() => undefined)),
    phoneNumber: z
        .string()
        .trim()
        .min(10, { message: "Please enter a valid phone number" })
        .max(25, { message: "Please enter a valid phone number" })
        .optional()
        .or(z.literal("").transform(() => undefined)),
    houseNumber: z
        .string()
        .min(1, { message: "Please enter your house number" })
        .optional()
        .or(z.literal("").transform(() => undefined)),
    postalCode: z
        .string()
        .min(5, { message: "Please enter a valid postal code" })
        .max(5, { message: "Please enter a valid postal code" })
        .optional()
        .or(z.literal("").transform(() => undefined)),
    streetName: z
        .string()
        .min(1, { message: "Please enter a street name" })
        .optional()
        .or(z.literal("").transform(() => undefined)),
    city: z
        .string()
        .min(1, { message: "Please enter a city" })
        .optional()
        .or(z.literal("").transform(() => undefined)),
    countryCode: z
        .string()
        .min(3, { message: "Please enter a country code" })
        .max(3, { message: "Please enter a country code" })
        .regex(/^[A-Z]{3}$/, { message: "Please enter a valid country code" })
        .optional()
        .or(z.literal("").transform(() => undefined)),
});

/*
 * PAYMENT SCHEMA
 */

const payment = z.object({
    iban: z
        .string()
        .trim()
        .min(1, { message: "Please enter your IBAN" })
        .max(34, { message: "Please enter a valid IBAN" })
        .regex(/^[A-Z]{2}[0-9]{2}[A-Z0-9]{11,34}$/, { message: "Please enter a valid IBAN" }),
    accountHolder: z
        .string()
        .trim()
        .min(1, { message: "Please enter your account holder" })
        .max(100, { message: "Please enter a valid account holder" }),
});

/*
 * FORM SCHEMA
 */

export const schema = z.object({
    ticket: z
        .any()
        .refine((file) => file instanceof File, { message: "Image is required." })
        .refine((file) => file?.size <= MAX_FILE_SIZE, {
            message: `Maximum file size is ${MAX_FILE_SIZE / 1000000} MB`,
        })
        .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), {
            message: `Only ${ACCEPTED_IMAGE_TYPES.join(", ")} are allowed`,
        }),
    ticketSchema,
    plannedRoute: z.object({
        legs: z
            .array(
                z.object({
                    departureStation: z.string().min(1, { message: "Please enter a departure station" }),
                    departureTime: z.string().min(1, { message: "Please enter a departure time" }),
                    arrivalStation: z.string().min(1, { message: "Please enter an arrival station" }),
                    arrivalTime: z.string().min(1, { message: "Please enter an arrival time" }),
                    trainNumber: z.string().min(1, { message: "Please enter a train number" }),
                    reservedSeats: z.array(z.string().min(1, { message: "Please enter a seat number" })).min(1),
                })
            )
            .min(1, { message: "Please enter at least one leg" }),
    }),
    whatHappened: z.discriminatedUnion("reason", [
        neverLeft,
        missedFirstTrainLate,
        arrivedLessThan1hr,
        arrivedMoreThan1hr,
        notCompletedReturnedHome,
        notCompletedStayedOvernight,
        notCompletedDifferentTransport,
        somethingElse,
    ]),
    additionalCosts: additionalCostsSchema,
    passenger,
    payment,
    additionalInformation: z
        .string({ message: "Please provide additional information" })
        .trim()
        .min(20, { message: "Please provide more information" }),
});

export type FormValues = z.infer<typeof schema>;
