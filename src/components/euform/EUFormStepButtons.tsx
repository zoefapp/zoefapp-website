import React from "react";
import RButton from "../ui/RButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useStepContext } from "./context/useStepContext";

const EUFormStepButtons = ({steps}: {steps: {id: number, title: string}[]}) => {
    const { currentStep, setCurrentStep } = useStepContext();

    const nextHandler = () => {
        const totalSteps = steps.length;

        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    }

    const prevHandler = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    }
    return (
        <section className="flex items-center gap-2">
            <RButton title="Previous" onClick={prevHandler}>
                <ChevronLeft size={20} />
            </RButton>
            <RButton title="Next" onClick={nextHandler}>
                <ChevronRight size={20} />
            </RButton>
            <RButton title="Submit">Submit</RButton>
        </section>
    );
};

export default EUFormStepButtons;
