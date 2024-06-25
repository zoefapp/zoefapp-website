import { useStepContext } from "./context/useStepContext";
const EUFormProgress = () => {
    const { currentStep, steps } = useStepContext();
    return (
        <section className="flex md:flex-row flex-col items-center gap-2 w-full">
            {steps.map(({ id, title }) => (
                <aside
                    key={id+title.trim()}
                    className={`flex items-center border shadow-md bg-white gap-2 py-2 px-6 rounded-md w-full transition-colors duration-200 ${
                        currentStep === id ? "border-slate-500" : "border-slate-100"
                    } ${currentStep > id ? "opacity-70" : ""}`}
                >
                    <p className="flex justify-center items-center bg-skin-secondary p-2 rounded-full font-semibold text-white leading-none size-10">
                        {id}
                    </p>
                    <p className="mx-auto font-bold font-mulish">{title}</p>
                </aside>
            ))}
        </section>
    );
};

export default EUFormProgress;
