import { Link } from "@inertiajs/react";
import {
    ArrowUpRightIcon,
    PhotoIcon,
    XMarkIcon,
    GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    featured_image?: string | null;
    tags?: string;
    skills?: { id: number; name: string }[];
    status?: string;
    demo_url?: string;
    github_url?: string;
    [key: string]: any;
}

interface ProjectCardProps {
    project: Project;
    index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const defaultImage = "/images/project-placeholder.jpg";

    let skillsList: any[] = [];
    if (project.skills && project.skills.length > 0) {
        skillsList = project.skills.slice(0, 4);
    } else if (project.tags) {
        skillsList = project.tags
            .split(",")
            .slice(0, 4)
            .map((t) => ({ id: t.trim(), name: t.trim() }));
    }

    const imageUrl = project.featured_image
        ? `/storage/${project.featured_image}`
        : defaultImage;

    return (
        <>
            <article
                className="group relative flex flex-col justify-between h-full rounded-2xl bg-white dark:bg-zinc-900/70 border border-slate-200/80 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
                style={{ animationDelay: `${index * 0.08}s` }}
            >
                {/* Browser window top bar mockup */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100/70 dark:bg-zinc-900/90 border-b border-slate-200/70 dark:border-white/[0.06]">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 dark:bg-red-500/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 dark:bg-amber-500/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 dark:bg-emerald-500/60" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-zinc-500 truncate max-w-[180px]">
                        {project.slug}.app
                    </span>
                    <div className="w-8" />
                </div>

                {/* Preview Image container */}
                <div
                    className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-100 dark:bg-zinc-950/60 cursor-pointer group/img"
                    onClick={() => setIsImageModalOpen(true)}
                >
                    {project.featured_image ? (
                        <img
                            src={imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-out"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = defaultImage;
                            }}
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 dark:text-zinc-600 gap-2">
                            <PhotoIcon className="w-10 h-10" />
                            <span className="text-xs font-mono">No Preview</span>
                        </div>
                    )}

                    {/* Subtle hover overlay */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <span className="text-xs font-medium text-white px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                            Expand Preview
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow p-5 sm:p-6">
                    {/* Tags */}
                    {skillsList.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-3.5">
                            {skillsList.map((skill: any) => (
                                <span
                                    key={skill.id || skill.name}
                                    className="px-2.5 py-0.5 text-[11px] font-mono font-medium rounded-md bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-zinc-300 border border-slate-200/60 dark:border-white/[0.06]"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                        <Link href={`/portofolio/${project.slug}`}>
                            {project.title}
                        </Link>
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mb-5 line-clamp-2 leading-relaxed">
                        {project.description}
                    </p>

                    {/* Action Bar */}
                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
                        <Link
                            href={`/portofolio/${project.slug}`}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                        >
                            <span>Case Study</span>
                            <ArrowUpRightIcon className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>

                        <div className="flex items-center gap-2">
                            {project.github_url && (
                                <a
                                    href={project.github_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1.5 rounded-lg text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors"
                                    title="View Source on GitHub"
                                >
                                    <FaGithub className="w-4 h-4" />
                                </a>
                            )}
                            {project.demo_url && (
                                <a
                                    href={project.demo_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1.5 rounded-lg text-slate-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors"
                                    title="View Live Demo"
                                >
                                    <GlobeAltIcon className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </article>

            {/* Lightbox Image Modal */}
            {isImageModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
                    onClick={() => setIsImageModalOpen(false)}
                >
                    <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center">
                        <button
                            className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsImageModalOpen(false);
                            }}
                        >
                            <XMarkIcon className="w-5 h-5" />
                        </button>
                        <img
                            src={imageUrl}
                            alt={project.title}
                            className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
