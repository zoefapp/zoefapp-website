import EUFormControls from "./EUFormControls";
import TicketUpload from "./TicketUpload";
import { StepProvider } from "./context/useStepContext";
import { FormProviderContext } from "./context/useFormContext";
const EUForm = () => {
    return (
        <FormProviderContext>
            <StepProvider>
                <EUFormControls>
                    <TicketUpload />
                </EUFormControls>
            </StepProvider>
        </FormProviderContext>
    );
};

export default EUForm;
