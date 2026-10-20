import React, { ButtonHTMLAttributes } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    icon?: React.ReactNode;
    fullWidth?: boolean;
}

export default function GradientButton({
    children,
    icon = <PaperAirplaneIcon className="w-4 h-4 mr-2" />,
    fullWidth = true,
    className = "",
    disabled,
    ...props
}: GradientButtonProps) {
    return (
        <button
            disabled={disabled}
            className={`
                relative inline-flex items-center justify-center px-6 py-3 
                bg-slate-900 dark:bg-white text-white dark:text-zinc-950
                hover:bg-slate-800 dark:hover:bg-zinc-100
                text-xs sm:text-sm font-semibold rounded-full
                shadow-sm hover:shadow
                transition-all duration-200 
                disabled:opacity-60 disabled:cursor-not-allowed
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
