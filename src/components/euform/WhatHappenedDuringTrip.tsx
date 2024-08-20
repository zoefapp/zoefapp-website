import { useFormContext, Controller } from "react-hook-form";
import { whatExactlyHappenedMetadata } from "~/lib/euform-schema";
import RSelect from "../ui/RSelect";
import RLabel from "../ui/RLabel";
import ErrorMessage from "./ErrorMessage";
const WhatHappenedDuringTrip = () => {
    const { control } = useFormContext();

    return (
        <div>
            <Controller
                name="whatHappened.whatExactlyHappened"
                defaultValue={"What exactly happened?"}
                control={control}
                render={({ field, fieldState: { error } }) => (
                    <div className="grid gap-1">
                        <RLabel htmlFor="whatHappened.whatExactlyHappened">What exactly happened?</RLabel>
                        <RSelect {...field} id="whatHappened.whatExactlyHappened">
                            <option disabled>What exactly happened?</option>
                            {Object.entries(whatExactlyHappenedMetadata).map(([value, message]) => (
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

export default WhatHappenedDuringTrip;
