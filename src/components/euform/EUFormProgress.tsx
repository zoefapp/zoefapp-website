import { CircleHelp } from "lucide-react";
import { useStepContext } from "./context/useStepContext";
const EUFormProgress = () => {
    const { currentStep, steps } = useStepContext();

    const helpInformation = [
        {
            id: 1,
            information: "Please upload your ticket.",
        },
        {
            id: 2,
            information: "Please give us your planned journey.",
        },
        {
            id: 3,
            information: "Please describe what happened.",
        },
    ];
    
    return (
        <section className="flex xl:flex-row flex-col items-center gap-2 w-full">
            {steps.map(({ id, title }) => (
                <aside
                    key={id + title.trim()}
                    className={`flex items-center border shadow-md bg-white gap-2 py-2 px-6 rounded-md w-full transition-colors duration-200 ${
                        currentStep === id ? "border-slate-500" : ""
                    } ${currentStep > id ? "opacity-70" : ""}`}
                >
                    <p className="flex justify-center items-center bg-skin-secondary p-2 rounded-full font-semibold text-white leading-none size-8">
                        {id}
                    </p>
                    <p className="font-semibold">{title}</p>
                    {/* {currentStep == id && (
                        <div className="relative group flex flex-col gap-2">
                            <CircleHelp
                                size={18}
                                className="text-skin-secondary group-hover:text-skin-base cursor-pointer"
                            />
                            <div className="px-6 py-2 bg-skin-gradient rounded-md animate-in hidden group-hover:block absolute top-6 right-[-100px] w-96">
                                <p className="text-center text-sm">
                                    {helpInformation[id - 1].information}
                                </p>
                            </div>
                        </div>
                    )} */}
                </aside>
            ))}
        </section>
    );
};

export default EUFormProgress;
