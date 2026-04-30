import React from "react";

interface BadgeProps {
    text: string;
    icon?: React.ReactNode;
    colorScheme?: "blue" | "green" | "purple" | "slate";
}

export default function Badge({ text, icon, colorScheme = "blue" }: BadgeProps) {
    const colorStyles = {
        blue: "bg-blue-900/40 border-blue-500/30 text-blue-400",
        green: "bg-emerald-900/40 border-emerald-500/30 text-emerald-400",
        purple: "bg-purple-900/40 border-purple-500/30 text-purple-400",
        slate: "bg-slate-800/60 border-slate-700/50 text-slate-300",
    };

    return (
        <div
            className={`inline-flex items-center px-4 py-1. 5 rounded-full border mb-6 ${colorStyles[colorScheme]}`}
        >
            {icon && <span className="mr-2">{icon}</span>}
            <span className="text-sm font-semibold tracking-wider uppercase">
                {text}
            </span>
        </div>
    );
}
