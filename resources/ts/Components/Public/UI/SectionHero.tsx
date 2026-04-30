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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pt-20 pb-16">
            {badgeText && (
                <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full mb-6 border border-primary-500/30">
                    {badgeIcon && <span className="mr-2 text-primary-400">{badgeIcon}</span>}
                    <span className="text-sm font-medium text-primary-300">
                        {badgeText}
                    </span>
                </div>
            )}
            <h1
                className="text-5xl md:text-6xl font-extrabold mb-6"
                style={{ animationDelay: "0.1s" }}
            >
                {title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary-400">
                    {gradientWord}
                </span>
            </h1>
            {subtitle && (
                <p
                    className="text-xl text-slate-400 max-w-3xl mx-auto"
                    style={{ animationDelay: "0.2s" }}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
