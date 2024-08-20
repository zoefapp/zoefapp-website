import type { ButtonHTMLAttributes } from "react";
import { cn } from "~/lib/utils";

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
    className?: string;
    children: React.ReactNode;
}
const RButton = ({ className, children, ...props }: Props) => {
    return (
        <button
            className={cn(
                "flex items-center gap-2 border-gray-300 bg-white hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 px-4 py-1.5 border rounded-md font-semibold text-skin-base duration-200 disabled:cursor-not-allowed trasition-colors",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default RButton;
