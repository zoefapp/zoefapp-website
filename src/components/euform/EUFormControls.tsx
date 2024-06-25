import RButton from "../ui/RButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
const EUFormControls = () => {
    return (
        <section className="flex gap-2 items-center">
            <RButton title="Previous">
                <ChevronLeft size={20} />
            </RButton>
            <RButton title="Next">
                <ChevronRight size={20} />
            </RButton>
            <RButton title="Submit">Submit</RButton>
        </section>
    );
};

export default EUFormControls;
