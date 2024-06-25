import type { ButtonHTMLAttributes } from "react";
const RButton = ({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) => {
    return (
        <button type="button" {...props} className="border rounded-md bg-skin-secondary px-4 py-1.5 text-black font-semibold ">
            {children}
        </button>
    );
};

export default RButton;
