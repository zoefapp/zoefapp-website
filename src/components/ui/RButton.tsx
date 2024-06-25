import type { ButtonHTMLAttributes } from "react";
const RButton = ({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) => {
    return (
        <button
            type="button"
            {...props}
            className="flex items-center gap-2 border-gray-300 bg-white hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 px-4 py-1.5 border rounded-md font-semibold text-skin-base duration-200 disabled:cursor-not-allowed trasition-colors"
        >
            {children}
        </button>
    );
};

export default RButton;
