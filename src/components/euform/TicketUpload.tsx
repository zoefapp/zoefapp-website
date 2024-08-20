import { useStepContext } from "./context/useStepContext";
import RDragAndDropFileInput from "./RDragAndDropFileInput";
const TicketUpload = () => {
    const { currentStep } = useStepContext();

    return currentStep === 1 && <RDragAndDropFileInput />;
};

export default TicketUpload;
