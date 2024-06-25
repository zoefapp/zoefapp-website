import EUFormProgress from "./EUFormProgress";
import EUFormStepButtons from "./EUFormStepButtons";
const EUFormControls = ({ children }: { children: React.ReactNode }) => {
    // example, not permanent
    const steps = [
        {
            id: 1,
            title: "Ticket Upload",
        },
        {
            id: 2,
            title: "Your Journey",
        },
        {
            id: 3,
            title: "What Happened",
        },
    ];

    return (
        <section className="flex flex-col items-center gap-8 w-full">
            <EUFormProgress steps={steps} />
            {children}
            <EUFormStepButtons steps={steps} />
        </section>
    );
};

export default EUFormControls;
