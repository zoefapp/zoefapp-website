import React, { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";
interface StepContextType {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    steps: typeof steps;
}

const StepContext = createContext<StepContextType | undefined>(undefined);
const steps = [
    {
        id: 1,
        title: "Ticket Upload",
        fields: ["ticket", "ticketSchema"],
    },
    {
        id: 2,
        title: "Your Journey",
        fields: ["plannedRoute"],
    },
    {
        id: 3,
        title: "What Happened",
        fields: ["whatHappened"],
    },
    {
        id: 4,
        title: "Additional Costs",
        fields: ["additionalCosts"],
    },
    {
        id: 5,
        title: "Personal Information",
        fields: ["passenger", "additionalInformation", "payment"],
    },
];

export function StepProvider({ children }: { children: ReactNode }) {
    const [currentStep, setCurrentStep] = useState(1);
    return <StepContext.Provider value={{ currentStep, setCurrentStep, steps }}>{children}</StepContext.Provider>;
}

export function useStepContext(): StepContextType {
    const context = useContext(StepContext);
    if (context === undefined) {
        throw new Error("useStepContext must be used within a StepProvider");
    }
    return context;
}
