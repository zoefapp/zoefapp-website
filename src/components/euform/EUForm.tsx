import EUFormControls from "./EUFormControls";
import TicketUpload from "./TicketUpload";
import { StepProvider } from "./context/useStepContext";
import { FormProviderContext } from "./context/useFormContext";
import YourData from "./YourData";
import PlannedJourney from "./PlannedJourney";
import WhatHappened from "./WhatHappened";
import AdditionalCosts from "./AdditionalCosts";
import PersonalInformation from "./PersonalInformation";

const EUForm = () => {
    return (
        <FormProviderContext>
            <StepProvider>
                <EUFormControls>
                    <TicketUpload />
                    <PlannedJourney />
                    <WhatHappened />
                    <AdditionalCosts />
                    <PersonalInformation />
                </EUFormControls>
            </StepProvider>
        </FormProviderContext>
    );
};

export default EUForm;
