import { useStepContext } from "./context/useStepContext";
const EUFormProgress = ({ steps }: { steps: { id: number; title: string }[] }) => {
    const { currentStep } = useStepContext();
    return (
        <section className="flex items-center gap-2 w-full">
            {steps.map(({ id, title }) => (
                <aside
                    className={`flex items-center border shadow-md bg-white gap-2 py-2 px-6 rounded-md w-full ${
                        currentStep === id ? "border-skin-base" : "border-white"
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
