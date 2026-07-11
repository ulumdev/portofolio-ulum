import { useState } from "react";
import PublicLayout from "@/Layouts/PublicLayout";
import { Experience, Settings, Skill } from "@/types";
import DOMPurify from "dompurify";
import {
    SparklesIcon,
    MapPinIcon,
    CheckCircleIcon,
    CodeBracketIcon,
    ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

interface AboutProps {
    settings: Settings;
    skills: Skill[];
    experiences: Experience[];
}

export default function About({ settings, skills, experiences }: AboutProps) {
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

    const toggleCategory = (category: string) => {
        setExpandedCategories((prev) => ({ ...prev, [category]: !prev[category] }));
    };

    // Group skills by category
    const skillsByCategory = skills.reduce((acc: Record<string, Skill[]>, skill: Skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});

    // Sort categories: "Other" always at the end
    const sortedCategories = Object.entries(skillsByCategory).sort(
        ([categoryA], [categoryB]) => {
            if (categoryA.toLowerCase() === "other") return 1;
            if (categoryB.toLowerCase() === "other") return -1;
            return categoryA.localeCompare(categoryB);
        }
    );

    // Timeline helpers
    const employmentTypeColors: Record<string, string> = {
        "full-time": "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 border border-blue-200 dark:border-blue-800",
        "part-time": "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-800",
        contract: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 border border-purple-200 dark:border-purple-800",
        freelance: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400 border border-orange-200 dark:border-orange-800",
        internship: "bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-400 border border-pink-200 dark:border-pink-800",
    };

    return (
        <PublicLayout title="About">
            <div className="w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-20 space-y-16">

                    {/* SECTION 1: Hero & Profile */}
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-4 lg:col-start-1 animate-fade-in-up">
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none border-4 border-white dark:border-slate-800">
                                {settings.profile_photo ? (
                                    <img
                                        src={`/storage/${settings.profile_photo}`}
                                        alt={settings.site_name || "Profile"}
                                        className="w-full h-auto aspect-[3/4] object-cover"
                                    />
                                ) : (
                                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                                        <span className="text-slate-400 dark:text-slate-500 text-8xl font-bold">U</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="lg:col-span-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
                                I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">digital experiences</span> that matter.
                            </h1>

                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-3xl">
                                {settings.site_description || "I'm a Fullstack Developer and UX Enthusiast. With years of experience, I specialize in building robust web applications that bridge the gap between technical complexity and intuitive design."}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="inline-flex items-center px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm">
                                    <MapPinIcon className="w-5 h-5 text-blue-500 mr-2.5" />
                                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Mojokerto, Indonesia</span>
                                </div>
                                <div className="inline-flex items-center px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm">
                                    <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2.5" />
                                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Available for hire</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 2: Experience Timeline */}
                    {experiences.length > 0 && (
                        <section className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                            <div className="flex items-center mb-16 relative">
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900 px-6 z-10 mx-auto">
                                    Experience
                                </h2>
                                <div className="absolute left-0 right-0 top-1/2 h-px bg-slate-200 dark:bg-slate-800 -z-0"></div>
                            </div>

                            <div className="max-w-4xl mx-auto">
                                <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 md:ml-0 space-y-12">
                                    {experiences.map((exp) => (
                                        <div key={exp.id} className="relative pl-8 md:pl-12 group">
                                            {/* Timeline Node */}
                                            <div className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center border-4 border-slate-50 dark:border-slate-900 transition-colors duration-300 ${exp.is_current ? 'bg-blue-500' : 'bg-slate-300 dark:bg-slate-600 group-hover:bg-blue-400'}`}>
                                                <div className={`w-2 h-2 rounded-full ${exp.is_current ? 'bg-white' : 'bg-slate-50 dark:bg-slate-900'}`}></div>
                                            </div>

                                            {/* Card Content */}
                                            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 transition-shadow hover:shadow-md">
                                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                                    <div>
                                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                                                            {exp.position}
                                                        </h3>
                                                        {exp.company_url ? (
                                                            <a href={exp.company_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
                                                                {exp.company}
                                                                <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 ml-1" />
                                                            </a>
                                                        ) : (
                                                            <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                                                        )}
                                                    </div>

                                                    <div className="shrink-0">
                                                        {exp.is_current ? (
                                                            <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
                                                                PRESENT
                                                            </span>
                                                        ) : (
                                                            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                                                                {new Date(exp.start_date).getFullYear()} — {exp.end_date ? new Date(exp.end_date).getFullYear() : 'Present'}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Description mapped from bullet points or string */}
                                                <div className="prose prose-sm dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 mb-6 marker:text-blue-500">
                                                    <div
                                                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(exp.description) }}
                                                    />
                                                </div>

                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-2">
                                                    <span className={`px-2.5 py-1 text-xs font-medium rounded-md ${employmentTypeColors[exp.employment_type] || 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                                                        {exp.employment_type.replace('-', ' ').toUpperCase()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* SECTION 3: Technical Skills */}
                    <section className="animate-fade-in-up pb-16" style={{ animationDelay: "0.3s" }}>
                        <div className="flex items-center mb-12 relative">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900 pr-6 z-10">
                                Technical Skills
                            </h2>
                            <div className="absolute left-0 right-0 top-1/2 h-px bg-slate-200 dark:bg-slate-800 -z-0"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {sortedCategories.map(([category, catSkills]) => {
                                const isExpanded = expandedCategories[category];
                                const maxVisible = 5;
                                const showExpandButton = catSkills.length > maxVisible;
                                const visibleSkills = isExpanded ? catSkills : catSkills.slice(0, maxVisible);

                                return (
                                    <div key={category} className="bg-transparent">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                                <CodeBracketIcon className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category}</h3>
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            {visibleSkills.map((skill: Skill) => (
                                                <div key={skill.id} className="inline-flex items-center px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-slate-600 transition-all">
                                                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{skill.name}</span>
                                                </div>
                                            ))}

                                            {showExpandButton && (
                                                <button
                                                    onClick={() => toggleCategory(category)}
                                                    className="inline-flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-800/50 border border-transparent dark:border-slate-700/50 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors cursor-pointer"
                                                >
                                                    {isExpanded ? 'Show less' : `+${catSkills.length - maxVisible} more`}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </div>
            </div>
        </PublicLayout>
    );
}
