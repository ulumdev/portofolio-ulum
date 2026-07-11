import React from "react";

interface StyledCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function StyledCard({ children, className = "" }: StyledCardProps) {
    return (
        <div
            className={`bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-xl overflow-hidden transition-colors duration-300 ${className}`}
        >
            {children}
        </div>
    );
}
