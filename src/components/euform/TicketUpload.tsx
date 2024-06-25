import React, { useRef, useState } from "react";
import { ImageDown, SpaceIcon } from "lucide-react";
const TicketUpload = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputData, setInputData] = useState<File>();
    const [error, setError] = useState<string | null>(null);
    const onInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setInputData(event.target.files[0]);
        }
    };

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
        <section
            onDrop={onDropHandler}
            onDragOver={(event) => event.preventDefault()}
            className="flex flex-col justify-center items-center gap-4 border-2 m-1 p-8 border-black/50 hover:border-black border-dashed rounded-md transition-colors duration-200 aspect-[4/1]"
        >
            <ImageDown size={100} strokeWidth={1.2} />
            <input
                ref={inputRef}
                onInput={onInputHandler}
                type="file"
                accept="image/*"
                name="ticket"
                id="ticket"
                className="hidden"
            />
            <span>
                <b onClick={() => inputRef.current?.click()} className="hover:underline cursor-pointer">
                    Choose a file
                </b>{" "}
                or <b>drag it here</b>
            </span>
            <p className="text-gray-600 text-xs leading-5">PNG, JPG, GIF up to 10MB</p>
            {inputData?.name && <p className="text-sm">{inputData.name}</p>}
            {error && <p className="font-semibold text-red-500 text-sm animate-in fade-in">{error}</p>}
        </section>
    );
};

export default TicketUpload;
