import React from "react";

interface StyledCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function StyledCard({ children, className = "" }: StyledCardProps) {
    return (
        <div
            className={`bg-white dark:bg-zinc-900/70 rounded-2xl border border-slate-200/80 dark:border-white/[0.08] shadow-sm overflow-hidden transition-all duration-300 ${className}`}
        >
            {children}
        </div>
    );
}
