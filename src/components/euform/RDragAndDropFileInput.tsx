import { useCallback, useState } from "react";
import Dropzone from "react-dropzone-esm";
import { Controller, useWatch } from "react-hook-form";
import { cn } from "~/lib/utils";
import { useStepContext } from "./context/useStepContext";
import { useFormContext } from "react-hook-form";
import { CloudUpload, LoaderCircle } from "lucide-react";
import TicketData from "./TicketData";
const RDragAndDropFileInput = () => {
    const [loading, setLoading] = useState(false);
    const { currentStep } = useStepContext();
    const { control, setValue, trigger } = useFormContext();

    const onDrop = useCallback(
        async (acceptedFiles: File[]) => {
            if (acceptedFiles.length > 0) {
                const isValid = await trigger("ticket", { shouldFocus: true });
                if (isValid) {
                    /*
                     *
                     * backend  mimic
                     * post api/files => post api/ticket
                     *
                     */

                    setLoading(true);
                    await new Promise((resolve) => setTimeout(resolve, 2000));

                    // example data from api/tickets endpoint
                    const exampleData = {
                        ticketId: "12345",
                        externalTicketReference: "EXT-67890",
                        createdOn: "2024-08-07T14:30:00Z",
                        ticketIssuer: "TrainCo",
                        departureStation: "uic:1234",
                        arrivalStation: "zsid:5678",
                        route: {
                            legs: [
                                {
                                    departureStation: "uic:1234",
                                    departureTime: "2024-08-07T15:00:00Z",
                                    arrivalStation: "uic:5678",
                                    arrivalTime: "2024-08-07T16:00:00Z",
                                    trainNumber: "DE123",
                                    reservedSeats: ["1A", "1B"],
                                },
                                {
                                    departureStation: "uic:5678",
                                    departureTime: "2024-08-07T16:30:00Z",
                                    arrivalStation: "uic:9101",
                                    arrivalTime: "2024-08-07T18:00:00Z",
                                    trainNumber: "DE456",
                                    reservedSeats: ["2A", "2B"],
                                },
                                {
                                    departureStation: "uic:9101",
                                    departureTime: "2024-08-07T18:30:00Z",
                                    arrivalStation: "zsid:5678",
                                    arrivalTime: "2024-08-07T20:00:00Z",
                                    trainNumber: "DE789",
                                    reservedSeats: ["3A", "3B"],
                                },
                            ],
                        },
                        bookingCode: "BOOK-ABC123",
                        type: "single",
                        price: "EUR:100",
                        numberOfTravelers: "1",
                        firstName: "John",
                        lastName: "Doe",
                        fileId: "file-12345",
                    };

                    setValue("ticketSchema", exampleData, {
                        shouldDirty: true,
                        shouldTouch: true,
                        shouldValidate: true,
                    });

                    console.log(await trigger("ticketSchema", { shouldFocus: true }));
                    setValue("plannedRoute.legs", exampleData.route.legs);
                    setLoading(false);
                }
            }
        },
        [setValue]
    );

    return (
        currentStep == 1 && (
            <section className="flex flex-col xl:flex-row w-full gap-2">
                <Controller
                    control={control}
                    name="ticket"
                    rules={{ value: true, required: "Ticket is required" }}
                    render={({ field: { onChange, onBlur }, fieldState: { error } }) => (
                        <Dropzone onDrop={onDrop} accept={{ "image/*": [] }}>
                            {({ getRootProps, getInputProps, isDragActive, acceptedFiles }) => (
                                <section className="relative w-full">
                                    <div
                                        className={cn(
                                            "absolute rounded-md hidden flex-col items-center animate-in fade-in justify-center transition-colors duration-500 z-10 inset-1 pointer-events-none",
                                            loading && "flex backdrop-blur-sm "
                                        )}
                                    >
                                        <LoaderCircle
                                            size={96}
                                            strokeWidth={1}
                                            className="text-skin-secondary animate-spin"
                                        />

                                        <p className="text-lg font-semibold">Loading</p>
                                    </div>
                                    <div
                                        className={cn(
                                            "flex flex-col cursor-pointer gap-4 items-center justify-center border-2 border-dashed border-skin-secondary rounded-md w-full h-full min-h-96 p-8 bg-skin-gradient/50",
                                            isDragActive && "border-slate-300"
                                        )}
                                        {...getRootProps()}
                                    >
                                        <input
                                            {...getInputProps({
                                                onChange: (event) => {
                                                    const files = event.target.files;
                                                    if (files && files.length > 0) {
                                                        onChange(files[0]);
                                                    }
                                                },
                                                onBlur,
                                            })}
                                        />
                                        <CloudUpload size={96} strokeWidth={1} className="text-skin-secondary" />
                                        <p className="text-lg font-semibold">Choose a file or drag it here</p>
                                        <div className="flex flex-col items-center gap-1">
                                            <p className="text-xs">Supported formats: .jpg, .jpeg, .png</p>
                                            <p className="text-xs">Max file size: 5MB</p>
                                        </div>
                                        {acceptedFiles[0] && <p>{acceptedFiles[0].name}</p>}
                                        {error && (
                                            <p className="bg-red-100 text-red-500 rounded-md animate-in fade-in font-semibold px-3 py-1">
                                                {error.message as string}
                                            </p>
                                        )}
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    )}
                />
                <TicketData loading={loading} />
            </section>
        )
    );
};

export default RDragAndDropFileInput;
