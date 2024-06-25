import React, { useRef, useState } from "react";
import { ImageDown, SpaceIcon } from "lucide-react";
const TicketUpload = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputData, setInputData] = useState<File>();
    const onInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setInputData(event.target.files[0]);
        }
    };

    const onDropHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        console.log("data transfer", event.dataTransfer.files);
        if (event.dataTransfer.files) {
            setInputData(event.dataTransfer.files[0]);
        }
    };

    return (
        <section
            onDrop={onDropHandler}
            onDragOver={(event) => event.preventDefault()}
            onClick={() => inputRef.current?.click()}
            className="flex flex-col justify-center items-center gap-4 p-8 border border-black/50 hover:border-black border-dashed rounded-md transition-colors duration-200 cursor-pointer aspect-[4/1]"
        >
            <ImageDown size={100} strokeWidth={1.2} />
            <input ref={inputRef} onInput={onInputHandler} type="file" name="ticket" id="ticket" className="hidden" />
            <span>
                <b>Upload your ticket</b> or <b>drag it here</b>
            </span>
            <p className="text-gray-600 text-xs leading-5">PNG, JPG, GIF up to 10MB</p>
            <p className="text-sm">{inputData?.name ? inputData.name : "No Ticket Chosen Yet"}</p>
        </section>
    );
};

export default TicketUpload;
