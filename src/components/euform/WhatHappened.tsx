import { useFormContext, useWatch } from "react-hook-form";
import { useStepContext } from "./context/useStepContext";
import NotEligibleMessage from "./NotEligibleMessage";
import PotentialOutcomesDropdown from "./PotentialOutcomesDropdown";
import WhichLegCausedTheProblem from "./WhichLegCausedTheProblem";
import WhatWouldYouLikeToDo from "./WhatWouldYouLikeToDo";
import type { potentialOutcomesSchema } from "~/lib/euform-schema";
import type { z } from "zod";
import DetailedExplanation from "./DetailedExplanation";
import AdditionalCosts from "./AdditionalCosts";
import { useEffect } from "react";
import WhatHappenedDuringTrip from "./WhatHappenedDuringTrip";
const WhatHappened = () => {
    const { currentStep } = useStepContext();
    const {
        control,
        resetField,
        formState: { errors },
    } = useFormContext();

    const WhatHappenedReasonState = useWatch({
        control,
        name: "whatHappened.reason",
    });

    useEffect(() => {
        resetField("whatHappened.whatWouldYouLikeToDo");
    }, [WhatHappenedReasonState]);

    type Reason = z.infer<typeof potentialOutcomesSchema>;
    const reason: Reason = useWatch({
        control,
        name: "whatHappened.reason",
    });
    return (
        currentStep === 3 && (
            <div className="flex flex-col gap-4 w-full max-w-md">
                <PotentialOutcomesDropdown />
                {reason === "neverLeft" ? (
                    <WhatWouldYouLikeToDo />
                ) : reason === "arrivedLessThan1hr" || reason === "missedFirstTrainLate" ? (
                    <NotEligibleMessage />
                ) : reason === "SomethingElse" ? (
                    <>
                        <DetailedExplanation />
                        <WhatWouldYouLikeToDo />
                    </>
                ) : reason === "arrivedMoreThan1hr" ||
                  reason === "notCompletedReturnedHome" ||
                  reason === "notCompletedStayedOvernight" ||
                  reason === "notCompletedDifferentTransport" ? (
                    <>
                        <WhichLegCausedTheProblem />
                        <WhatHappenedDuringTrip />
                        <WhatWouldYouLikeToDo />
                    </>
                ) : null}
            </div>
        )
    );
};

export default WhatHappened;
