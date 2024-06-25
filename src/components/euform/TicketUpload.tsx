import React, { useRef, useState } from "react";
import { ImageDown } from "lucide-react";
import { useStepContext } from "./context/useStepContext";
import { useFormContext } from "react-hook-form";
const TicketUpload = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputData, setInputData] = useState<File>();
    const [error, setError] = useState<string | null>(null);
    const { currentStep } = useStepContext();
    const onInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setInputData(event.target.files[0]);
        }
    };

    const { register } = useFormContext();

    const onDropHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        console.log("data transfer", event.dataTransfer.files);
        if (event.dataTransfer.files) {
            if (
                event.dataTransfer.files[0].type === "image/jpeg" ||
                event.dataTransfer.files[0].type === "image/png" ||
                event.dataTransfer.files[0].type === "image/gif"
            ) {
                setInputData(event.dataTransfer.files[0]);
            } else {
                errorHandler("Please select an image file");
            }
        }
    };

    const errorHandler = (param: string) => {
        setError(param);
        setTimeout(() => {
            setError(null);
        }, 3000);
    };

    return (
        currentStep === 1 && (
            <section
                onDrop={onDropHandler}
                onDragOver={(event) => event.preventDefault()}
                className="flex flex-col justify-center items-center gap-4 border-2 bg-skin-gradient/50 hover:bg-skin-gradient/70 m-1 px-8 py-16 border-black/50 hover:border-black border-dashed rounded-md w-full transition-colors duration-200"
            >
                <ImageDown size={100} strokeWidth={1.2} />
                <input
                    className="hidden"
                    {...register("ticket")}
                    type="file"
                    onChange={onInputHandler}
                    ref={inputRef}
                />
                <span>
                    <b onClick={() => inputRef.current?.click()} className="hover:underline cursor-pointer">
                        Choose a file
                    </b>{" "}
                    or <b>drag it here</b>
                </span>
                <p className="text-slate-800 text-xs leading-5">PNG, JPG, GIF up to 10MB</p>
                {inputData?.name && <p className="text-sm">{inputData.name}</p>}
                {error && <p className="font-semibold text-red-500 text-sm animate-in fade-in">{error}</p>}
            </section>
        )
    );
};

export default TicketUpload;
