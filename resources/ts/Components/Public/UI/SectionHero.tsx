import React from "react";

interface SectionHeroProps {
    title: string;
    gradientWord: string;
    subtitle?: string;
    badgeText?: string;
    badgeIcon?: React.ReactNode;
    children?: React.ReactNode;
}

export default function SectionHero({
    title,
    gradientWord,
    subtitle,
    badgeText,
    badgeIcon,
    children,
}: SectionHeroProps) {
    return (
        <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-12 sm:pt-14 sm:pb-16 overflow-hidden">
            {/* Ambient Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-transparent blur-[90px] rounded-full pointer-events-none -z-10" />

            {/* Badge Pill */}
            {badgeText && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-slate-200/80 dark:border-white/[0.08] shadow-sm mb-6 animate-fade-in-up">
                    {badgeIcon && <span className="text-blue-500">{badgeIcon}</span>}
                    <span>{badgeText}</span>
                </div>
            )}

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] animate-fade-in-up">
                {title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-400">
                    {gradientWord}
                </span>
            </h1>

            {/* Subtitle */}
            {subtitle && (
                <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed animate-fade-in-up">
                    {subtitle}
                </p>
            )}

            {children && <div className="mt-8">{children}</div>}
        </div>
    );
}
