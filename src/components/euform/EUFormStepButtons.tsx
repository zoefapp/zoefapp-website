import RButton from "../ui/RButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useStepContext } from "./context/useStepContext";
import { useFormContext } from "react-hook-form";
import type { FormValues } from "~/lib/euform-schema";
type Inputs = keyof FormValues;
const EUFormStepButtons = () => {
    const { currentStep, setCurrentStep, steps } = useStepContext();
    const { trigger } = useFormContext();
    const nextHandler = async () => {
        const totalSteps = steps.length;
        const fields = steps[currentStep - 1].fields;
        console.log(fields)
        const isValid = await trigger(fields as Inputs[], { shouldFocus: true });
        console.log(isValid)
        if (!isValid) return;
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevHandler = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };
    return (
        <section className="flex justify-end items-center gap-2 w-full">
            <aside className="flex items-center gap-2">
                <RButton title="Back" onClick={prevHandler} disabled={currentStep === 1}>
                    <ChevronLeft size={16} />
                    Previous
                </RButton>

                <RButton title="Next" onClick={nextHandler} disabled={currentStep === steps.length}>
                    Next
                    <ChevronRight size={16} />
                </RButton>
            </aside>
            <RButton title="Submit" type="submit">
                Submit
            </RButton>
        </section>
    );
};

export default EUFormStepButtons;
