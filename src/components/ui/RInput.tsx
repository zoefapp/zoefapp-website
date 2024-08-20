import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import type { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { cn } from "~/lib/utils";

export interface RInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "children" | "ref" | "className"> {
    className?: string;
    error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}
const RInput = forwardRef<HTMLInputElement, RInputProps>((props, ref) => {
    const { className, error, ...rest } = props;
    return <input ref={ref} className={cn("w-full border rounded-md px-4 py-1.5 disabled:bg-white disabled:cursor-not-allowed", className, { "border-red-500": error })} {...rest} />;
});


export default RInput;

