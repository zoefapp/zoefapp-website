import React from "react";
import { useController, useWatch, type Control } from "react-hook-form";
import RButton from "../ui/RButton";
import RInput from "../ui/RInput";
import InputErrorMessage from "./InputErrorMessage";
import { CircleHelp } from "lucide-react";
import type { FormValues } from "~/lib/euform-schema";

/*
 * we need this:
 * dropdown for depoarture station
 * datepicker for departure time
 * dropdown for arrival station
 * datepicker for arrival time
 * input for train number
 */

type Props = {
    control: Control;
    index: number;
    remove: (index: number) => void;
    update: (index: number, data: any) => void;
};

const SingleTrainTrip = ({ control, index, remove, update }: Props) => {
    const totalNumberOfLegs: FormValues["plannedRoute"]["legs"] = useWatch({ name: "plannedRoute.legs", control });

    const {
        field: departureStationField,
        fieldState: { error: departureStationError },
    } = useController({
        name:
            index > 0 ? `plannedRoute.legs.${index - 1}.arrivalStation` : `plannedRoute.legs.${index}.departureStation`,
        control,
    });

    const {
        field: departureTimeField,
        fieldState: { error: departureTimeError },
    } = useController({
        name: `plannedRoute.legs.${index}.departureTime`,
        control,
    });

    const {
        field: arrivalStationField,
        fieldState: { error: arrivalStationError },
    } = useController({
        name: `plannedRoute.legs.${index}.arrivalStation`,
        control,
    });

    const {
        field: arrivalTimeField,
        fieldState: { error: arrivalTimeError },
    } = useController({
        name: `plannedRoute.legs.${index}.arrivalTime`,
        control,
    });

    const {
        field: trainNumber,
        fieldState: { error: trainNumberError },
    } = useController({
        name: `plannedRoute.legs.${index}.trainNumber`,
        control,
    });

    const {
        field: reservedSeats,
        fieldState: { error: reservedSeatsError },
    } = useController({
        name: `plannedRoute.legs.${index}.reservedSeats`,
        control,
    });

    return (
        <fieldset className="flex flex-col gap-1 border bg-white shadow-md shadow-slate-300 p-4 rounded-md">
            <aside className="flex items-center justify-between h-10">
                <p className="text-md font-semibold">Leg {index + 1}</p>
            </aside>

            <aside className="flex flex-col items-start gap-2">
                <section className="flex items-start gap-4 border-b border-skin-secondary pb-4">
                    <InputWrapper>
                        <InputTitle title="Departure Station" />
                        <RInput
                            disabled={index > 0}
                            error={departureStationError}
                            {...departureStationField}
                            placeholder="Departure Station"
                        />
                        <InputErrorMessage message={departureStationError?.message} />
                    </InputWrapper>
                    <InputWrapper>
                        <InputTitle title="Departure Time" />
                        <RInput {...departureTimeField} error={departureTimeError} placeholder="Departure Time" />
                        <InputErrorMessage message={departureTimeError?.message} />
                    </InputWrapper>
                </section>
                <section className="flex items-start gap-4 border-b border-skin-secondary pb-4">
                    <InputWrapper>
                        <InputTitle title="Arrival Station" />
                        <RInput
                            {...arrivalStationField}
                            onBlur={(e) => {
                                const value = e.target.value;

                                const currentLegData = totalNumberOfLegs[index];
                                update(index, { ...currentLegData, arrivalStation: value });

                                const nextLegData = totalNumberOfLegs[index + 1];
                                if (index + 1 !== totalNumberOfLegs.length) {
                                    update(index + 1, { ...nextLegData, departureStation: value });
                                }
                            }}
                            error={arrivalStationError}
                            placeholder="Arrival Station"
                        />
                        <InputErrorMessage message={arrivalStationError?.message} />
                    </InputWrapper>
                    <InputWrapper>
                        <InputTitle title="Arrival Time" />
                        <RInput {...arrivalTimeField} error={arrivalTimeError} placeholder="Arrival Time" />
                        <InputErrorMessage message={arrivalTimeError?.message} />
                    </InputWrapper>
                </section>
                <section className="flex w-full gap-2 ">
                    <InputWrapper>
                        <InputTitle title="Train Number" />
                        <RInput {...trainNumber} error={trainNumberError} placeholder="Train Number" />
                        <InputErrorMessage message={trainNumberError?.message} />
                    </InputWrapper>
                    <InputWrapper>
                        <InputTitle title="Reserved Seat/s" />
                        <RInput {...reservedSeats} onBlur={(e) => update(index, { ...totalNumberOfLegs[index], reservedSeats: e.target.value.split(",") })} error={reservedSeatsError} placeholder="A1, A2, A3 etc." />
                        <InputErrorMessage message={reservedSeatsError?.message} />
                    </InputWrapper>
                </section>
                <RButton
                    type="button"
                    disabled={!(totalNumberOfLegs.length > 1)}
                    className="bg-red-300 hover:bg-red-500 hover:text-white py-2 font-semibold border border-red-500 w-full justify-center"
                    onClick={() => remove(index)}
                >
                    <span className="text-sm">Remove</span>
                </RButton>
            </aside>
        </fieldset>
    );
};

export default SingleTrainTrip;

const InputWrapper = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex flex-col w-full">{children}</div>;
};

const InputTitle = ({ title }: { title: string }) => {
    return (
        <div className="flex items-center gap-1 mb-1">
            <p className="text-sm font-semibold">{title}</p>
            <CircleHelp size={14} className="opacity-70" />
        </div>
    );
};
