import PublicLayout from "@/Layouts/PublicLayout";
import { Link } from "@inertiajs/react";
import {
    ArrowLeftIcon,
    GlobeAltIcon,
    CalendarIcon,
    TagIcon,
    SparklesIcon,
    ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { FaGithub } from "react-icons/fa";
import DOMPurify from "dompurify";
import { Project } from "@/types";
import ProjectCard from "@/Components/Public/UI/ProjectCard";

interface PortofolioShowProps {
    project: Project;
    relatedProjects?: Project[];
}

export default function PortofolioShow({ project, relatedProjects = [] }: PortofolioShowProps) {
    const formattedDate = new Date(project.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const skillsList = project.skills || [];

    return (
        <PublicLayout title={project.title}>
            <div className="w-full pb-24">
                {/* 1. HERO HEADER */}
                <section className="relative overflow-hidden pt-6 pb-12 md:pt-10 md:pb-16 border-b border-slate-200/80 dark:border-white/[0.08] bg-white dark:bg-zinc-950">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/[0.08] blur-[120px] rounded-full pointer-events-none -z-10" />

                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Back Link */}
                        <Link
                            href="/portofolio"
                            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white mb-6 group transition-colors"
                        >
                            <ArrowLeftIcon className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
                            <span>Back to Portfolio</span>
                        </Link>

                        {/* Status & Date */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                {project.status === "published" ? "Live Project" : "In Development"}
                            </span>
                            <span className="text-xs font-mono text-slate-400 dark:text-zinc-500 flex items-center gap-1">
                                <CalendarIcon className="w-3.5 h-3.5" />
                                {formattedDate}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                            {project.title}
                        </h1>

                        {/* Subtitle / Excerpt */}
                        {project.description && (
                            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-3xl leading-relaxed font-normal">
                                {project.description}
                            </p>
                        )}

                        {/* Action Buttons */}
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            {project.demo_url && (
                                <a
                                    href={project.demo_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-slate-800 dark:hover:bg-zinc-100 transition-colors shadow-sm"
                                >
                                    <GlobeAltIcon className="w-4 h-4" />
                                    <span>Live Preview</span>
                                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                                </a>
                            )}
                            {project.github_url && (
                                <a
                                    href={project.github_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20 transition-colors"
                                >
                                    <FaGithub className="w-4 h-4" />
                                    <span>Source Code</span>
                                </a>
                            )}
                        </div>
                    </div>
                </section>

                {/* 2. MAIN SHOWCASE & CASE STUDY CONTENT */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                    {/* Featured Mockup Frame */}
                    {project.featured_image && (
                        <div className="mb-12 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/[0.08] bg-slate-100 dark:bg-zinc-900 shadow-xl">
                            {/* Browser Header Bar */}
                            <div className="flex items-center justify-between px-4 py-3 bg-slate-100/90 dark:bg-zinc-900/90 border-b border-slate-200/70 dark:border-white/[0.06]">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-3 h-3 rounded-full bg-red-400/80" />
                                    <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                                    <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                                </div>
                                <span className="text-xs font-mono text-slate-400 dark:text-zinc-500">
                                    {project.slug}.app
                                </span>
                                <div className="w-8" />
                            </div>

                            <img
                                src={`/storage/${project.featured_image}`}
                                alt={project.title}
                                className="w-full h-auto object-cover max-h-[550px]"
                            />
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        {/* Left Side: Long-form Case Study */}
                        <div className="lg:col-span-8">
                            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900/70 border border-slate-200/80 dark:border-white/[0.08] shadow-sm">
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                    <SparklesIcon className="w-5 h-5 text-blue-500" />
                                    <span>Project Overview &amp; Architecture</span>
                                </h2>

                                <div className="prose prose-slate dark:prose-invert max-w-none text-sm sm:text-base leading-relaxed">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(project.content || project.description),
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Sidebar Meta & Tech Breakdown */}
                        <div className="lg:col-span-4 space-y-6">
                            {/* Tech Stack Box */}
                            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-slate-200/80 dark:border-white/[0.08] shadow-sm">
                                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold mb-4 flex items-center gap-2">
                                    <TagIcon className="w-4 h-4 text-blue-500" />
                                    <span>Technologies Applied</span>
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {skillsList.length > 0 ? (
                                        skillsList.map((skill) => (
                                            <span
                                                key={skill.id}
                                                className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-zinc-300 border border-slate-200/60 dark:border-white/[0.06]"
                                            >
                                                {skill.name}
                                            </span>
                                        ))
                                    ) : (
                                        <span className="text-xs text-slate-400 dark:text-zinc-500 font-mono">
                                            Full Stack Web Technologies
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Contact Box */}
                            <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-lg space-y-3">
                                <h4 className="text-base font-bold">Need a similar product?</h4>
                                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                                    I build custom full-stack solutions tailored to business and architectural requirements.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-white text-zinc-950 hover:bg-slate-100 transition-colors"
                                >
                                    <span>Let's Discuss</span>
                                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* 3. RELATED PROJECTS */}
                    {relatedProjects.length > 0 && (
                        <div className="mt-20 pt-12 border-t border-slate-200/80 dark:border-white/[0.08]">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                                    More Selected Projects
                                </h3>
                                <Link
                                    href="/portofolio"
                                    className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    View Archive →
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedProjects.map((p, idx) => (
                                    <ProjectCard key={p.id} project={p} index={idx} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}
