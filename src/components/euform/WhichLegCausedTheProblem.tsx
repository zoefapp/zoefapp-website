import { useFieldArray, useFormContext, useWatch, Controller } from "react-hook-form";
import type { FormValues } from "~/lib/euform-schema";
import RSelect from "../ui/RSelect";
import RLabel from "../ui/RLabel";
import ErrorMessage from "./ErrorMessage";
const WhichLegCausedTheProblem = () => {
    const { control } = useFormContext();

    const LegsArray: FormValues["plannedRoute"]["legs"] = useWatch({
        control,
        name: "plannedRoute.legs",
    });

    return (
        <Controller
            name="whatHappened.whichLegCausedTheProblem"
            defaultValue="Which leg caused the problem?"
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div className="grid gap-1">
                    <RLabel htmlFor="whatHappened.whichLegCausedTheProblem">Which leg caused the problem?</RLabel>
                    <RSelect {...field} id="whatHappened.whichLegCausedTheProblem">
                        <option disabled>Which leg caused the problem?</option>
                        {LegsArray?.map((leg, index) => (
                            <option key={index} value={index}>
                                {leg.departureStation} - {leg.arrivalStation}
                            </option>
                        ))}
                    </RSelect>
                    {error && <ErrorMessage />}
                </div>
            )}
        />
    );
};

export default WhichLegCausedTheProblem;
