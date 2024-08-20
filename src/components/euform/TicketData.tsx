import { useFormContext, useWatch, useController } from "react-hook-form";
import { cn } from "~/lib/utils";
import RInput from "../ui/RInput";
import RLabel from "../ui/RLabel";
import { useEffect } from "react";
import InputErrorMessage from "./InputErrorMessage";
import RSelect from "../ui/RSelect";
import { ticketTypes } from "~/lib/euform-schema";
const TicketData = ({ loading }: { loading: boolean }) => {
    const { control } = useFormContext();

    const ticketResponseData = useWatch({
        name: "ticketSchema",
        control,
    });

    // const {
    //     field: departureTimeField,
    //     fieldState: { error: departureTimeError },
    // } = useController({
    //     name: `plannedRoute.legs.${index}.departureTime`,
    //     control,
    // });

    const {
        field: externalTicketReferenceField,
        fieldState: { error: externalTicketReferenceError },
    } = useController({
        name: "ticketSchema.externalTicketReference",
        control,
        defaultValue: "",
    });

    const {
        field: createdOnField,
        fieldState: { error: createdOnError },
    } = useController({
        name: "ticketSchema.createdOn",
        control,
        defaultValue: new Date().toISOString().slice(0, 16),
    });

    const {
        field: ticketIssuerField,
        fieldState: { error: ticketIssuerError },
    } = useController({
        name: "ticketSchema.ticketIssuer",
        control,
        defaultValue: "",
    });

    const {
        field: typeField,
        fieldState: { error: typeError },
    } = useController({
        name: "ticketSchema.type",
        control,
    });

    const {
        field: departureStationField,
        fieldState: { error: departureStationError },
    } = useController({
        name: "ticketSchema.departureStation",
        control,
        defaultValue: "",
    });

    const {
        field: arrivalStationField,
        fieldState: { error: arrivalStationError },
    } = useController({
        name: "ticketSchema.arrivalStation",
        control,
        defaultValue: "",
    });

    const {
        field: firstNameField,
        fieldState: { error: firstNameError },
    } = useController({
        name: "ticketSchema.firstName",
        control,
        defaultValue: "",
    });
    const {
        field: lastNameField,
        fieldState: { error: lastNameError },
    } = useController({
        name: "ticketSchema.lastName",
        control,
        defaultValue: "",
    });
    const {
        field: numberOfTravelersField,
        fieldState: { error: numberOfTravelersError },
    } = useController({
        name: "ticketSchema.numberOfTravelers",
        control,
        defaultValue: "",
    });

    return (
        <section
            className={cn(
                "flex flex-col gap-2 overflow-hidden bg-white rounded-md max-w-full transition-all duration-700",
                ticketResponseData && !loading ? "w-full p-4 border" : "w-0 h-0"
            )}
        >
            <h1 className="text-xl font-semibold">Ticket Information</h1>
            <aside className="flex flex-col xl:flex-row items-start gap-2">
                <div className="w-full">
                    <RLabel htmlFor="firstName">First Name</RLabel>
                    <RInput placeholder="First Name" id="firstName" error={firstNameError} {...firstNameField} />
                    <InputErrorMessage message={firstNameError?.message} />
                </div>
                <div className="w-full">
                    <RLabel htmlFor="lastName">Last Name</RLabel>
                    <RInput placeholder="Last Name" id="lastName" error={lastNameError} {...lastNameField} />
                    <InputErrorMessage message={lastNameError?.message} />
                </div>
            </aside>
            <aside className="flex flex-col xl:flex-row items-start gap-2">
                <div className="w-full">
                    <RLabel htmlFor="departureStation">Departure Station</RLabel>
                    <RInput
                        placeholder="Departure Station"
                        id="departureStation"
                        error={departureStationError}
                        {...departureStationField}
                    />
                    <InputErrorMessage message={departureStationError?.message} />
                </div>
                <div className="w-full">
                    <RLabel htmlFor="arrivalStation">Arrival Station</RLabel>
                    <RInput
                        placeholder="Arrival Station"
                        id="arrivalStation"
                        error={arrivalStationError}
                        {...arrivalStationField}
                    />
                    <InputErrorMessage message={arrivalStationError?.message} />
                </div>
            </aside>
            <aside className="flex flex-col xl:flex-row items-start gap-2">
                <div className="w-full">
                    <RLabel htmlFor="externalTicketReference">External Ticket Reference</RLabel>
                    <RInput
                        placeholder="External Ticket Reference"
                        id="externalTicketReference"
                        error={externalTicketReferenceError}
                        {...externalTicketReferenceField}
                    />
                    <InputErrorMessage message={externalTicketReferenceError?.message} />
                </div>
                <div className="w-full">
                    <RLabel htmlFor="createdOn">Ticket Date</RLabel>
                    <RInput
                        error={createdOnError}
                        {...createdOnField}
                        placeholder="Ticket Date"
                        id="createdOn"
                        type="datetime-local"
                        value={new Date(createdOnField.value).toISOString().slice(0, 16)}
                        onChange={(e) => {
                            const localDate = new Date(e.target.value).toISOString();
                            createdOnField.onChange(localDate);
                        }}
                    />
                    <InputErrorMessage message={createdOnError?.message} />
                </div>
            </aside>
            <aside className="flex flex-col xl:flex-row items-start gap-2">
                <div className="w-full lg:w-2/4">
                    <RLabel htmlFor="ticketIssuer">Ticket Issuer</RLabel>
                    <RInput
                        placeholder="Ticket Issuer"
                        id="ticketIssuer"
                        error={ticketIssuerError}
                        {...ticketIssuerField}
                    />
                    <InputErrorMessage message={ticketIssuerError?.message} />
                </div>
                <section className="flex gap-2 w-full lg:w-2/4">
                    <div className="w-full">
                        <RLabel htmlFor="type">Ticket Type</RLabel>
                        <RSelect className="capitalize" id="type" {...typeField}>
                            {ticketTypes.map((type) => (
                                <option className="capitalize" key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </RSelect>
                        <InputErrorMessage message={typeError?.message} />
                    </div>
                    <div className="w-full">
                        <RLabel htmlFor="numberOfTravelers">Number of Travelers</RLabel>
                        <RInput
                            placeholder="Number of Travelers"
                            type="number"
                            min={1}
                            id="numberOfTravelers"
                            error={numberOfTravelersError}
                            {...numberOfTravelersField}
                        />
                        <InputErrorMessage message={numberOfTravelersError?.message} />
                    </div>
                </section>
            </aside>
        </section>
    );
};

export default TicketData;
