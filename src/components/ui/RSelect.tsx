import { forwardRef } from "react";
import type { ReactNode, SelectHTMLAttributes } from "react";
import { cn } from "~/lib/utils";

interface RSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "className" | "ref"> {
    className?: string;
    children: ReactNode;
}

const RSelect = forwardRef<HTMLSelectElement, RSelectProps>(({ children, className, ...rest }, ref) => {
    return (
        <select ref={ref} className={cn("border rounded-md px-2 h-[38px] py-1 w-full", className)} {...rest}>
            {children}
        </select>
    );
});

RSelect.displayName = "RSelect";

export default RSelect;
