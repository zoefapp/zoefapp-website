import React, { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";
interface StepContextType {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepContext = createContext<StepContextType | undefined>(undefined);

export function StepProvider({ children }: { children: ReactNode }) {
    const [currentStep, setCurrentStep] = useState(1);

    return <StepContext.Provider value={{ currentStep, setCurrentStep }}>{children}</StepContext.Provider>;
}

export function useStepContext(): StepContextType {
    const context = useContext(StepContext);
    if (context === undefined) {
        throw new Error("useStepContext must be used within a StepProvider");
    }
    return context;
}
