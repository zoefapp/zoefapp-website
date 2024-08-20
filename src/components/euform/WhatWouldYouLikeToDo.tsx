import { Controller, useFormContext } from "react-hook-form";
import { whatWouldYouLikeToDoMetadata } from "~/lib/euform-schema";
import RSelect from "../ui/RSelect";
import RLabel from "../ui/RLabel";
import ErrorMessage from "./ErrorMessage";
const WhatWouldYouLikeToDo = () => {
    const { control } = useFormContext();

    return (
        <div>
            <Controller
                name="whatHappened.whatWouldYouLikeToDo"
                defaultValue={"What would you like to do?"}
                control={control}
                render={({ field, fieldState: { error } }) => (
                    <div className="grid gap-1">
                        <RLabel htmlFor="whatHappened.whatWouldYouLikeToDo">What would you like to do?</RLabel>
                        <RSelect {...field} id="whatHappened.whatWouldYouLikeToDo">
                            <option disabled>What would you like to do?</option>
                            {Object.entries(whatWouldYouLikeToDoMetadata).map(([value, message]) => (
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

export default WhatWouldYouLikeToDo;
