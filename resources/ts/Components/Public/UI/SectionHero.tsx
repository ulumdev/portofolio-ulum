import React from "react";

interface SectionHeroProps {
    title: string;
    gradientWord: string;
    subtitle?: string;
    badgeText?: string;
    badgeIcon?: React.ReactNode;
}

export default function SectionHero({
    title,
    gradientWord,
    subtitle,
    badgeText,
    badgeIcon,
}: SectionHeroProps) {
    return (
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pt-12 pb-12 md:pt-16 md:pb-16">
            {/* Background Glow Effects (Dark Mode Only) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] hidden dark:block bg-gradient-to-r from-blue-500/20 via-blue-600/20 to-indigo-500/20 blur-[120px] rounded-full pointer-events-none -z-10" />

            {badgeText && (
                <div className="animate-fade-in-up inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 bg-white/80 dark:bg-[#0f1115]/80 backdrop-blur-md rounded-full mb-8 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:border-slate-300 dark:hover:border-white/10 transition-colors duration-300">
                    {badgeIcon && (
                        <span className="mr-3 flex items-center justify-center">
                            {badgeIcon}
                        </span>
                    )}
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-700 dark:text-gray-300 uppercase">
                        {badgeText}
                    </span>
                </div>
            )}
            
            <h1
                className="animate-fade-in-up text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-8 tracking-tight text-slate-900 dark:text-white drop-shadow-sm"
                style={{ animationDelay: "0.1s", animationFillMode: "both" }}
            >
                {title}{" "}
                <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:via-blue-500 dark:to-indigo-500">
                    {gradientWord}
                </span>
            </h1>
            
            {subtitle && (
                <p
                    className="animate-fade-in-up text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto font-light leading-relaxed px-2"
                    style={{ animationDelay: "0.2s", animationFillMode: "both" }}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
