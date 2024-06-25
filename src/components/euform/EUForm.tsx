import { useState } from "react";
import EUFormControls from "./EUFormControls";

const EUForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    return (
        <form className="w-full bg-skin-gradient text-skin-base p-8 rounded-md my-8">
            {currentStep === 1 && <h1>Hello there</h1>}
            <EUFormControls />
        </form>
    );
};

export default EUForm;