import { useStepContext } from "./context/useStepContext";
import { useFormContext, useWatch } from "react-hook-form";
import SingleTrainTrip from "./SingleTrainTrip";
import { cn } from "~/lib/utils";
import RButton from "../ui/RButton";
import { useFieldArray } from "react-hook-form";
import { ChevronDown, ChevronRight, MapPin } from "lucide-react";
import type { FormValues } from "~/lib/euform-schema";

const emptyLeg = {
    departureStation: "",
    departureTime: "",
    arrivalStation: "",
    arrivalTime: "",
    trainNumber: "",
};

const PlannedJourney = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    const { currentStep } = useStepContext();

    const fieldsState: FormValues["plannedRoute"]["legs"] = useWatch({
        control,
        name: "plannedRoute.legs",
    });

    const { fields, append, remove, update } = useFieldArray({
        control,
        name: "plannedRoute.legs",
    });

    const addNewLeg = () => {
        const fieldsLength = fieldsState.length;
        const previousLeg = fieldsState[fieldsLength - 1];
        append({ ...emptyLeg, departureStation: previousLeg?.arrivalStation });
    };

    const gridCols = fields.length === 1 ? "lg:grid-cols-1" : fields.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
    const width = fields.length === 1 ? "lg:w-1/3" : fields.length === 2 ? "lg:w-2/3" : "lg:w-full";

    return (
        currentStep === 2 && (
            <section className="flex flex-col gap-4 w-full">
                <Breadcrumb />
                {/* Experimental Breadcrumbs */}
                {/* <div className="flex items-center gap-2">
                    {fieldsState.map((field, index) => (
                        <div className="flex items-center gap-2" key={index}>
                            <p>{field.departureStation}</p>
                            <ChevronRight />
                            {index === fieldsState.length - 1 && <p>{field.arrivalStation}</p>}
                        </div>
                    ))}
                </div> */}
                <aside className={cn("grid grid-cols-1 w-full gap-4 mx-auto", gridCols, width)}>
                    {fields.map((field, index) => (
                        <SingleTrainTrip key={field.id} index={index} control={control} remove={remove} update={update} />
                    ))}
                </aside>
                <RButton type="button" className="ml-auto" onClick={addNewLeg}>
                    Add Leg
                </RButton>
                {errors.plannedRoute && <p>{errors.plannedRoute.message as string}</p>}
            </section>
        )
    );
};

export default PlannedJourney;

const Breadcrumb = () => {
    const { control } = useFormContext();

    const legs = useWatch({
        control,
        name: "plannedRoute.legs",
    });

    if (!legs || legs.length === 0) {
        return null;
    }

    return (
        <nav aria-label="Breadcrumb" className="mx-auto">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                {legs.map((leg: typeof emptyLeg, index: number) => (
                    <li key={index} className="flex items-center">
                        {index === 0 ? (
                            <MapPin size={16} className="mx-1 text-green-500" />
                        ) : (
                            <ChevronRight size={16} className="mx-1 text-gray-400" />
                        )}
                        <span className={index === 0 ? "font-semibold text-green-600" : ""}>
                            {leg.departureStation || `Station ${index + 1}`}
                        </span>
                        {index === legs.length - 1 && (
                            <>
                                <ChevronRight size={16} className="mx-1 text-gray-400" />
                                <MapPin size={16} className="mr-1 text-blue-500" />
                                <span className="font-semibold text-blue-600">
                                    {leg.arrivalStation || "Destination"}
                                </span>
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};
