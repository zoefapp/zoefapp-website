import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import RSelect from "../ui/RSelect";
import { potentialOutcomesMetadata } from "~/lib/euform-schema";
import RLabel from "../ui/RLabel";
import ErrorMessage from "./ErrorMessage";
const PotentialOutcomesDropdown = () => {
    const { control, reset, getValues } = useFormContext();
    const WhatHappenedReasonState = useWatch({
        control,
        name: "whatHappened.reason",
    });

    useEffect(() => {
        const currentValues = getValues();
        const reasonValue = currentValues.whatHappened?.reason;

        const valuesWithClearedWhatHappened = {
            ...currentValues,
            whatHappened: {
                reason: reasonValue,
            },
        };

        // Reset the form with the new values
        reset(valuesWithClearedWhatHappened);
    }, [WhatHappenedReasonState]);

    return (
        <div className="grid gap-2">
            <Controller
                name="whatHappened.reason"
                defaultValue={"Select what happened"}
                control={control}
                render={({ field, fieldState: { error } }) => (
                    <div className="grid gap-1">
                        <RLabel htmlFor="whatHappened.reason">What Happened?</RLabel>
                        <RSelect
                            {...field}
                            id="whatHappened.reason"
                            className={error ? "ring-1 ring-red-500 outline-none" : ""}
                        >
                            <option disabled>Select what happened</option>
                            {Object.entries(potentialOutcomesMetadata).map(([value, message]) => (
                                <option key={value} value={value}>
                                    {message}
                                </option>
                            ))}
                        </RSelect>
                        {error && <ErrorMessage />}
                    </div>
                )}
            />
        </div>
    );
};

export default PotentialOutcomesDropdown;
