import React, { ButtonHTMLAttributes } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    icon?: React.ReactNode;
    fullWidth?: boolean;
}

export default function GradientButton({
    children,
    icon = <PaperAirplaneIcon className="w-5 h-5 mr-2" />,
    fullWidth = true,
    className = "",
    disabled,
    ...props
}: GradientButtonProps) {
    return (
        <button
            disabled={disabled}
            className={`
                relative inline-flex items-center justify-center px-8 py-3 
                bg-gradient-to-r from-blue-500 to-indigo-600 
                hover:from-blue-600 hover:to-indigo-700 
                text-white font-medium rounded-lg 
                shadow-lg shadow-blue-500/30 
                transition-all duration-300 transform 
                disabled:opacity-70 disabled:cursor-not-allowed
                ${fullWidth ? "w-full" : ""}
                ${className}
            `}
            {...props}
        >
            {icon}
            {children}
        </button>
    );
}
