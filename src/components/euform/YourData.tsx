import { useFormContext, useWatch } from "react-hook-form";
import { useStepContext } from "./context/useStepContext";
import RInput from "~/components/ui/RInput";
const YourData = () => {
    const { currentStep } = useStepContext();
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const fields = useWatch({
        name: "plannedRoute.legs",
    });

    return (
        currentStep === 4 && (
            <div>
                <select name="" id="" defaultValue={"Select your departure station"}>
                    <option value="Select your departure station" disabled>Select your departure station</option>
                    <option value="test">test</option>
                    <option value="test2">test2</option>
                    <option value="test3">test3</option>
                </select>
            </div>
        )
    );
};

export default YourData;

