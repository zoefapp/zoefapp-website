import React, { useEffect, useRef, useState } from "react";
import { useFormContext, Controller, useWatch, useFieldArray } from "react-hook-form";
import RInput from "../ui/RInput";
import RLabel from "../ui/RLabel";
import { cn } from "~/lib/utils";
import RSelect from "../ui/RSelect";
import ErrorMessage from "./ErrorMessage";
import { additionalCostTypes } from "~/lib/euform-schema";
import { useStepContext } from "./context/useStepContext";
import RButton from "../ui/RButton";
import { ListPlus, Minus, Plus, PlusCircle, PlusSquare } from "lucide-react";
const AdditionalCosts = () => {
    const [hasAdditionalCosts, setHasAdditionalCosts] = React.useState(false);
    const { currentStep } = useStepContext();
    const { register, getValues, reset, setValue, control } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        name: "additionalCosts",
        control,
    });

    const emptyAdditionalCost = {
        type: "",
        description: "",
        currency: "",
        amount: 0,
        receiptId: "",
    };

    useEffect(() => {
        const currentValues = getValues();
        delete currentValues.additionalCosts;
        // Reset the form with the new values
        reset(currentValues);
    }, [hasAdditionalCosts]);

    return (
        currentStep === 4 && (
            <section className="flex flex-col items-center gap-2 w-full">
                <aside className="flex items-center justify-between lg:w-1/3 gap-2 pb-4 border-b">
                    <h2 className="font-semibold w-full">Did you have additional costs?</h2>
                    <RButton
                        type="button"
                        data-value={hasAdditionalCosts}
                        className="data-[value=true]:bg-skin-gradient data-[value=true]:border-skin-secondary"
                        onClick={() => setHasAdditionalCosts(true)}
                    >
                        Yes
                    </RButton>
                    <RButton
                        type="button"
                        data-value={hasAdditionalCosts}
                        className="data-[value=false]:bg-skin-gradient data-[value=false]:border-skin-secondary"
                        onClick={() => {
                            setHasAdditionalCosts(false);
                        }}
                    >
                        No
                    </RButton>
                </aside>

                <section
                    className={cn(
                        "grid gap-2",
                        fields.length === 0
                            ? "lg:grid-cols-1"
                            : fields.length === 1
                            ? "lg:grid-cols-2 xl:grid-cols-2"
                            : "lg:grid-cols-2 xl:grid-cols-3"
                    )}
                >
                    {hasAdditionalCosts &&
                        fields.map((field, index) => (
                            <section
                                key={index}
                                className="flex flex-col animate-in fade-in duration-300 gap-2 bg-white border p-4 rounded-md"
                            >
                                <aside className="flex items-center">
                                    <div className="w-3/5">
                                        <RLabel htmlFor="amount">Amount</RLabel>
                                        <RInput
                                            placeholder="Amount"
                                            type="number"
                                            id="amount"
                                            className="rounded-r-none"
                                            {...register(`additionalCosts.${index}.amount`, {
                                                onChange: (event) => {
                                                    const { value } = event.target;
                                                    if (value) {
                                                        // transform the string to number
                                                        setValue(`additionalCosts.${index}.amount`, Number(value));
                                                    }
                                                },
                                            })}
                                        />
                                    </div>
                                    <div className="w-2/5">
                                        <RLabel htmlFor="currency">Currency</RLabel>
                                        <RSelect
                                            id="currency"
                                            defaultValue="EUR"
                                            {...register(`additionalCosts.${index}.currency`)}
                                            className="rounded-l-none border-l-0"
                                        >
                                            <option value="EUR">EUR</option>
                                            <option value="USD">USD</option>
                                            <option value="RUB">RUB</option>
                                        </RSelect>
                                    </div>
                                </aside>
                                <aside className="flex items-center">
                                    <div className="w-3/5">
                                        <RLabel htmlFor="receipt">Receipt</RLabel>
                                        <ReceiptFileInput id="receipt" index={index} />
                                    </div>
                                    <div className="w-2/5">
                                        <RLabel htmlFor="type">Type</RLabel>
                                        <RSelect
                                            id="type"
                                            className="w-full rounded-l-none border-l-0"
                                            defaultValue={"Accomodation"}
                                            {...register(`additionalCosts.${index}.type`)}
                                        >
                                            {additionalCostTypes.map((item) => (
                                                <option key={item} value={item.toLowerCase()}>
                                                    {item}
                                                </option>
                                            ))}
                                        </RSelect>
                                    </div>
                                </aside>
                                <div className="flex flex-col">
                                    <RLabel htmlFor="description">Description</RLabel>
                                    <textarea
                                        {...register(`additionalCosts.${index}.description`)}
                                        id="description"
                                        placeholder="Please explain the cost"
                                        className="border rounded-md p-2 resize-none"
                                        rows={7}
                                    ></textarea>
                                </div>
                                <div className="border-b my-auto"></div>
                                <RButton
                                    onClick={() => remove(index)}
                                    className="justify-center border-red-500 hover:bg-red-700 hover:text-white"
                                    type="button"
                                >
                                    Remove
                                </RButton>
                            </section>
                        ))}
                    {hasAdditionalCosts && (
                        <div
                            data-length={fields.length}
                            className="flex aspect-square w-[450px]  items-center justify-center border rounded-md bg-white"
                        >
                            <RButton type="button" onClick={() => append(emptyAdditionalCost)}>
                                <Plus />
                            </RButton>
                        </div>
                    )}
                </section>
            </section>
        )
    );
};

export default AdditionalCosts;

type Props = {
    index: number;
    id: string;
};
const ReceiptFileInput = ({ index, id }: Props) => {
    const [receiptFile, setReceiptFile] = useState<File | null>(null);
    const [error, setError] = useState<boolean>(false);
    const fileRef = useRef<HTMLInputElement | null>(null);

    const { setValue } = useFormContext();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReceiptFile(e.target.files?.[0] || null);
    };

    useEffect(() => {
        if (receiptFile) {
            // post req. to api/files with receiptFile
            setValue(`additionalCosts.${index}.receiptId`, receiptFile.name);
        }
    }, [receiptFile]);

    return (
        <>
            <RInput
                type="file"
                ref={fileRef}
                id={id}
                accept={"image/*"}
                max={1}
                className="sr-only peer"
                onChange={(e) => handleChange(e)}
            />
            <div
                onClick={() => fileRef.current?.click()}
                className={cn(
                    "flex items-center peer-focus:border-2 peer-focus:border-black peer-focus:rounded-r-sm cursor-pointer justify-center w-full h-[38px] border rounded-l-md truncate",
                    error && "border-red-500"
                )}
            >
                <p className="truncate px-6 text-sm font-semibold">
                    {receiptFile ? receiptFile.name : "Upload Receipt"}
                </p>
            </div>
        </>
    );
};
