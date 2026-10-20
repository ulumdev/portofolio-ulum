import { useState } from "react";
import PublicLayout from "@/Layouts/PublicLayout";
import { Experience, Settings, Skill, Education } from "@/types";
import DOMPurify from "dompurify";
import {
    MapPinIcon,
    CodeBracketIcon,
    ArrowTopRightOnSquareIcon,
    DocumentArrowDownIcon,
    ServerStackIcon,
    WrenchScrewdriverIcon,
    CommandLineIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    SparklesIcon,
    UserIcon,
    PhoneIcon,
    EnvelopeIcon,
    StarIcon,
} from "@heroicons/react/24/outline";

interface AboutProps {
    settings: Settings;
    skills: Skill[];
    experiences: Experience[];
    educations: Education[];
    stats?: {
        years_experience: string;
        projects_count: number;
        skills_count: number;
        experiences_count: number;
    };
}

export default function About({ settings, skills, experiences, educations, stats }: AboutProps) {
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

    const toggleCategory = (category: string) => {
        setExpandedCategories((prev) => ({ ...prev, [category]: !prev[category] }));
    };

    // Group skills by category
    const skillsByCategory = (skills || []).reduce((acc: Record<string, Skill[]>, skill: Skill) => {
        const cat = skill.category || "General";
        if (!acc[cat]) {
            acc[cat] = [];
        }
        acc[cat].push(skill);
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

    const employmentTypeColors: Record<string, string> = {
        "full-time": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
        "part-time": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
        contract: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
        freelance: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
        internship: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    };

    const getCategoryStyle = (category: string) => {
        const lowerCat = category.toLowerCase();
        if (lowerCat.includes("front")) {
            return {
                bg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
                dot: "bg-blue-500",
                icon: <CodeBracketIcon className="w-4 h-4" />,
            };
        }
        if (lowerCat.includes("back") || lowerCat.includes("database")) {
            return {
                bg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
                dot: "bg-emerald-500",
                icon: <ServerStackIcon className="w-4 h-4" />,
            };
        }
        if (lowerCat.includes("tool") || lowerCat.includes("devops")) {
            return {
                bg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
                dot: "bg-amber-500",
                icon: <WrenchScrewdriverIcon className="w-4 h-4" />,
            };
        }
        return {
            bg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
            dot: "bg-indigo-500",
            icon: <CommandLineIcon className="w-4 h-4" />,
        };
    };

    return (
        <PublicLayout title="About">
            <div className="w-full pb-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-10 sm:pb-16 space-y-20">
                    {/* SECTION 1: Bento Profile & Story */}
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        {/* Profile Photo Card */}
                        <div className="lg:col-span-5">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/30 to-indigo-600/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500" />
                                <div className="relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-zinc-900 border border-slate-200/80 dark:border-white/[0.08] shadow-xl">
                                    {settings.profile_photo ? (
                                        <img
                                            src={`/storage/${settings.profile_photo}`}
                                            alt={settings.site_name || "Profile"}
                                            className="w-full h-auto aspect-[4/5] object-cover object-top hover:scale-105 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full aspect-[4/5] bg-gradient-to-br from-slate-200 to-slate-300 dark:from-zinc-800 dark:to-zinc-900 flex flex-col items-center justify-center text-slate-400 dark:text-zinc-600">
                                            <UserIcon className="w-20 h-20 mb-2" />
                                            <span className="text-xs font-mono">Profile Photo</span>
                                        </div>
                                    )}

                                    {/* Bottom overlay pill */}
                                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border border-slate-200/80 dark:border-white/[0.08] flex items-center justify-between text-xs">
                                        <div className="flex items-center gap-2">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                            </span>
                                            <span className="font-mono text-slate-700 dark:text-zinc-300 font-medium">
                                                {settings.about_hire_status || settings.contact_freelance_status || "Available for hire"}
                                            </span>
                                        </div>
                                        {settings.address && (
                                            <span className="text-slate-500 dark:text-zinc-500 flex items-center gap-1 font-mono">
                                                <MapPinIcon className="w-3.5 h-3.5" />
                                                {settings.address}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Story & Biography */}
                        <div className="lg:col-span-7 space-y-5">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20">
                                <SparklesIcon className="w-3.5 h-3.5" />
                                <span>Software Engineer &amp; Solution Architect</span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                                {settings.about_hero_title || "I build digital experiences that matter."}
                            </h1>

                            <div className="prose prose-slate dark:prose-invert max-w-none text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed font-normal space-y-4">
                                <p>
                                    {settings.bio ||
                                        settings.site_description ||
                                        "I'm a Full Stack Engineer dedicated to designing and building reliable web systems. With deep expertise in Laravel and React, I turn business logic and technical specifications into clean, scalable, and maintainable software."}
                                </p>
                            </div>

                            {/* Impact Numbers Mini Bar (Synchronized with Database CRUD) */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.06]">
                                    <div className="text-base sm:text-lg font-bold font-mono text-slate-900 dark:text-white">
                                        {stats?.years_experience || settings.years_experience || "3+"}
                                    </div>
                                    <div className="text-[11px] font-mono text-slate-500 dark:text-zinc-500">
                                        Years Experience
                                    </div>
                                </div>
                                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.06]">
                                    <div className="text-base sm:text-lg font-bold font-mono text-slate-900 dark:text-white">
                                        {stats?.projects_count ?? (settings.projects_completed || "7")}
                                    </div>
                                    <div className="text-[11px] font-mono text-slate-500 dark:text-zinc-500">
                                        Projects Built
                                    </div>
                                </div>
                                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.06]">
                                    <div className="text-base sm:text-lg font-bold font-mono text-blue-600 dark:text-blue-400">
                                        {stats?.skills_count ? `${stats.skills_count}+` : `${skills.length}+`}
                                    </div>
                                    <div className="text-[11px] font-mono text-slate-500 dark:text-zinc-500">
                                        Tech Skills
                                    </div>
                                </div>
                                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.06]">
                                    <div className="text-base sm:text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400">
                                        {stats?.experiences_count ?? experiences.length}
                                    </div>
                                    <div className="text-[11px] font-mono text-slate-500 dark:text-zinc-500">
                                        Career Milestones
                                    </div>
                                </div>
                            </div>

                            {/* Action Row */}
                            <div className="pt-2 flex flex-wrap items-center gap-3">
                                {settings.cv_file && (
                                    <a
                                        href={`/storage/${settings.cv_file}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-slate-800 dark:hover:bg-zinc-100 transition-colors shadow-sm"
                                    >
                                        <DocumentArrowDownIcon className="w-4 h-4" />
                                        <span>Download CV</span>
                                    </a>
                                )}

                                {settings.email && (
                                    <a
                                        href={`mailto:${settings.email}`}
                                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20 transition-colors"
                                    >
                                        <EnvelopeIcon className="w-4 h-4" />
                                        <span>Contact Me</span>
                                    </a>
                                )}

                                {settings.phone && (
                                    <a
                                        href={`tel:${settings.phone}`}
                                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-white/[0.1] transition-colors"
                                    >
                                        <PhoneIcon className="w-4 h-4" />
                                        <span>{settings.phone}</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* SECTION 2: Professional Experience Timeline (All CRUD Fields) */}
                    {experiences && experiences.length > 0 && (
                        <section className="pt-8 border-t border-slate-200/80 dark:border-white/[0.08]">
                            <div className="mb-10">
                                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-1 block">
                                    Career Journey
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                                    <BriefcaseIcon className="w-6 h-6 text-blue-500" />
                                    <span>Work Experience</span>
                                </h2>
                            </div>

                            <div className="space-y-6">
                                {experiences.map((exp) => (
                                    <div
                                        key={exp.id}
                                        className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900/70 border border-slate-200/80 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200 shadow-sm"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                                            <div className="flex items-start gap-3.5">
                                                {exp.company_logo ? (
                                                    <img
                                                        src={`/storage/${exp.company_logo}`}
                                                        alt={exp.company}
                                                        className="w-10 h-10 rounded-xl object-contain bg-slate-50 dark:bg-zinc-800 border border-slate-200/60 dark:border-white/[0.06] p-1 shrink-0"
                                                    />
                                                ) : (
                                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex items-center justify-center shrink-0">
                                                        <BriefcaseIcon className="w-5 h-5" />
                                                    </div>
                                                )}
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                                                            {exp.position}
                                                        </h3>
                                                        {exp.is_featured && (
                                                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium text-amber-700 dark:text-amber-300 bg-amber-500/10 border border-amber-500/20">
                                                                <StarIcon className="w-3 h-3 text-amber-500 fill-amber-500" />
                                                                Featured
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="flex flex-wrap items-center gap-x-2 text-xs font-mono mt-0.5 text-slate-600 dark:text-zinc-400">
                                                        {exp.company_url ? (
                                                            <a
                                                                href={exp.company_url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center gap-1"
                                                            >
                                                                <span>{exp.company}</span>
                                                                <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                                                            </a>
                                                        ) : (
                                                            <span className="font-semibold text-slate-800 dark:text-zinc-200">
                                                                {exp.company}
                                                            </span>
                                                        )}
                                                        {exp.location && (
                                                            <>
                                                                <span>•</span>
                                                                <span className="inline-flex items-center gap-1">
                                                                    <MapPinIcon className="w-3 h-3 text-slate-400" />
                                                                    {exp.location}
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                                                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-zinc-400">
                                                    {exp.date_range}
                                                    {exp.duration && (
                                                        <span className="ml-1.5 text-slate-400 dark:text-zinc-500">
                                                            ({exp.duration})
                                                        </span>
                                                    )}
                                                </span>
                                                {exp.employment_type && (
                                                    <span
                                                        className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border ${
                                                            employmentTypeColors[exp.employment_type] ||
                                                            "bg-slate-100 text-slate-600 border-slate-200"
                                                        }`}
                                                    >
                                                        {exp.employment_type.replace("-", " ").toUpperCase()}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        {exp.description && (
                                            <div
                                                className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal mb-3"
                                                dangerouslySetInnerHTML={{
                                                    __html: DOMPurify.sanitize(exp.description),
                                                }}
                                            />
                                        )}

                                        {/* Responsibilities list */}
                                        {exp.responsibilities && exp.responsibilities.length > 0 && (
                                            <div className="mt-2 space-y-1.5">
                                                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-500 font-semibold block">
                                                    Key Responsibilities &amp; Impact:
                                                </span>
                                                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                                                    {exp.responsibilities.map((r, i) => (
                                                        <li key={i}>{r}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Tech Tags */}
                                        {exp.technologies && exp.technologies.length > 0 && (
                                            <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                                                {exp.technologies.map((t, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-zinc-400 border border-slate-200/60 dark:border-white/[0.06]"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* SECTION 3: Technical Skills Matrix (With Proficiency Badges) */}
                    <section className="pt-8 border-t border-slate-200/80 dark:border-white/[0.08]">
                        <div className="mb-10">
                            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-1 block">
                                Capabilities &amp; Arsenal
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                                <CodeBracketIcon className="w-6 h-6 text-blue-500" />
                                <span>Technical Skills</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sortedCategories.map(([category, catSkills]) => {
                                const isExpanded = expandedCategories[category];
                                const maxVisible = 6;
                                const showExpandButton = catSkills.length > maxVisible;
                                const visibleSkills = isExpanded ? catSkills : catSkills.slice(0, maxVisible);
                                const style = getCategoryStyle(category);

                                return (
                                    <div
                                        key={category}
                                        className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-slate-200/80 dark:border-white/[0.08] shadow-sm flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center gap-2.5 mb-5">
                                                <div
                                                    className={`w-8 h-8 rounded-lg flex items-center justify-center border ${style.bg}`}
                                                >
                                                    {style.icon}
                                                </div>
                                                <h3 className="text-sm font-bold text-slate-900 dark:text-white font-mono uppercase tracking-wider">
                                                    {category}
                                                </h3>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {visibleSkills.map((skill: Skill) => (
                                                    <span
                                                        key={skill.id}
                                                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-zinc-300 border border-slate-200/60 dark:border-white/[0.06] hover:border-slate-300 dark:hover:border-white/20 transition-colors"
                                                    >
                                                        <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                                                        <span className="font-medium">{skill.name}</span>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {showExpandButton && (
                                            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/[0.06]">
                                                <button
                                                    onClick={() => toggleCategory(category)}
                                                    className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline"
                                                >
                                                    {isExpanded ? "Show less" : `+${catSkills.length - maxVisible} more`}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* SECTION 4: Education (All Fields: Degree, GPA/Grade, Activities, Description) */}
                    {educations && educations.length > 0 && (
                        <section className="pt-8 border-t border-slate-200/80 dark:border-white/[0.08]">
                            <div className="mb-10">
                                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-1 block">
                                    Background
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                                    <AcademicCapIcon className="w-6 h-6 text-blue-500" />
                                    <span>Education &amp; Academics</span>
                                </h2>
                            </div>

                            <div className="space-y-6">
                                {educations.map((edu) => (
                                    <div
                                        key={edu.id}
                                        className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-slate-200/80 dark:border-white/[0.08] shadow-sm space-y-4"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                                            <div className="flex items-start gap-3.5">
                                                {edu.institution_logo ? (
                                                    <img
                                                        src={`/storage/${edu.institution_logo}`}
                                                        alt={edu.institution}
                                                        className="w-10 h-10 rounded-xl object-contain bg-slate-50 dark:bg-zinc-800 border border-slate-200/60 dark:border-white/[0.06] p-1 shrink-0"
                                                    />
                                                ) : (
                                                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 flex items-center justify-center shrink-0">
                                                        <AcademicCapIcon className="w-5 h-5" />
                                                    </div>
                                                )}
                                                <div>
                                                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                                                        {edu.degree}{" "}
                                                        {edu.field_of_study && (
                                                            <span className="font-normal text-slate-500 dark:text-zinc-400">
                                                                in {edu.field_of_study}
                                                            </span>
                                                        )}
                                                    </h3>
                                                    <div className="text-xs font-mono text-slate-600 dark:text-zinc-400 mt-0.5 flex flex-wrap items-center gap-x-2">
                                                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                                                            {edu.institution}
                                                        </span>
                                                        {edu.location && (
                                                            <>
                                                                <span>•</span>
                                                                <span className="inline-flex items-center gap-1">
                                                                    <MapPinIcon className="w-3 h-3 text-slate-400" />
                                                                    {edu.location}
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                                                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-zinc-400">
                                                    {edu.date_range}
                                                </span>
                                                {edu.grade && (
                                                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                                        Grade: {edu.grade}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        {edu.description && (
                                            <div
                                                className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal pt-1"
                                                dangerouslySetInnerHTML={{
                                                    __html: DOMPurify.sanitize(edu.description),
                                                }}
                                            />
                                        )}

                                        {/* Activities & Societies */}
                                        {edu.activities && (
                                            <div className="pt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                                                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-500 font-semibold block mb-1">
                                                    Activities &amp; Societies:
                                                </span>
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: DOMPurify.sanitize(edu.activities),
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}
