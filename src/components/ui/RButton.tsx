import type { ButtonHTMLAttributes } from "react";
const RButton = ({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) => {
    return (
        <button
            type="button"
            {...props}
            className="border-gray-300 bg-white hover:bg-gray-100 active:bg-gray-200 px-4 py-1.5 border rounded-md font-semibold text-skin-base duration-200 trasition-colors"
        >
            {children}
        </button>
    );
};

export default RButton;
