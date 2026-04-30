import React from "react";

interface StyledCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function StyledCard({ children, className = "" }: StyledCardProps) {
    return (
        <div
            className={`bg-slate-800 rounded-xl border border-slate-700 shadow-xl overflow-hidden ${className}`}
        >
            {children}
        </div>
    );
}
