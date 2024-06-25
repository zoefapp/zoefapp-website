import EUFormProgress from "./EUFormProgress";
import EUFormStepButtons from "./EUFormStepButtons";
const EUFormControls = ({ children }: { children: React.ReactNode }) => {
    // example, not permanent

    return (
        <section className="flex flex-col items-center gap-8 w-full">
            <EUFormProgress />
            {children}
            <EUFormStepButtons />
        </section>
    );
};

export default EUFormControls;
