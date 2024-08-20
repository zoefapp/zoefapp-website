import { forwardRef } from "react";
import type { LabelHTMLAttributes, ReactNode } from "react";
import { cn } from "~/lib/utils";
interface RLabelProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "className"> {
    className?: string;
    children: ReactNode;
}

const RLabel = forwardRef<HTMLLabelElement, RLabelProps>(({ children, className, ...rest }, ref) => {
    return (
        <label ref={ref} className={cn("text-sm font-semibold truncate", className)} {...rest}>
            {children}
        </label>
    );
});

RLabel.displayName = "RLabel";

export default RLabel;
