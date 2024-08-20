import React from "react";
import { useFormContext, useWatch } from "react-hook-form";

const NotEligibleMessage = () => {
    const { control } = useFormContext();
    const WhatHappenedReasonState = useWatch({
        control,
        name: "whatHappened.reason",
    });

    return (
        (WhatHappenedReasonState === "arrivedLessThan1hr" || WhatHappenedReasonState === "missedFirstTrainLate") && (
            <h2 className="text-lg font-semibold text-red-500 text-center py-2">You are not eligible.</h2>
        )
    );
};

export default NotEligibleMessage;
