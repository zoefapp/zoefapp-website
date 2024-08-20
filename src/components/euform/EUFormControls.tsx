import { useFormContext, useWatch } from "react-hook-form";
import EUFormProgress from "./EUFormProgress";
import EUFormStepButtons from "./EUFormStepButtons";
import { useState } from "react";
const EUFormControls = ({ children }: { children: React.ReactNode }) => {
    


    // for test purposes
    const [isOpen, setIsOpen] = useState(false);
    
    const {
        control,
        formState: { errors },
    } = useFormContext();
    const formState = useWatch({
        control,
    });

    return (
        <section className="flex flex-col items-center gap-8 w-full">
            <div className="fixed bg-slate-900 text-slate-100 text-xs w-full max-w-md overflow-hidden left-5 top-5 p-1 z-50">
                <button type="button" onClick={() => setIsOpen(!isOpen)}>Toggle Debug Menu</button>
                {isOpen && (
                    <div className="overflow-y-auto h-[90vh]">
                        <p className="text-xs font-semibold">Log for Debugging</p>
                        <p className="text-amber-500 text-lg font-semibold">Form Data</p>
                        <pre>{JSON.stringify(formState && formState, null, 2)}</pre>
                        <p className="text-amber-500 text-lg font-semibold">Errors</p>
                        <pre>{JSON.stringify(errors, null, 2)}</pre>
                    </div>
                )}
            </div>
            <EUFormProgress />
            {children}
            <EUFormStepButtons />
        </section>
    );
};

export default EUFormControls;
