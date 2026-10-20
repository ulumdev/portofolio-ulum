import PublicLayout from "@/Layouts/PublicLayout";
import { router, usePage } from "@inertiajs/react";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    SparklesIcon,
    FolderIcon,
} from "@heroicons/react/24/outline";
import { Project, PaginatedData, PageProps } from "@/types";
import ProjectCard from "@/Components/Public/UI/ProjectCard";
import SectionHero from "@/Components/Public/UI/SectionHero";

interface PortofolioIndexProps {
    projects: PaginatedData<Project>;
}

export default function PortofolioIndex({ projects }: PortofolioIndexProps) {
    const { settings } = usePage<PageProps>().props;

    const handlePageChange = (page: number) => {
        router.get(`/portofolio?page=${page}`);
    };

    return (
        <PublicLayout title="Portfolio">
            <div className="w-full pb-24">
                {/* Header / Hero Section */}
                <SectionHero
                    badgeText="Engineering Archive"
                    badgeIcon={<FolderIcon className="w-4 h-4" />}
                    title={settings.portfolio_hero_title || "Selected Software"}
                    gradientWord={settings.portfolio_hero_gradient || "Projects"}
                    subtitle={
                        settings.portfolio_hero_subtitle ||
                        "Explore full-stack web applications, backend services, and APIs built with scalability, security, and performance."
                    }
                />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Projects Grid */}
                    {projects.data.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                                {projects.data.map((project, index) => (
                                    <ProjectCard key={project.id} project={project} index={index} />
                                ))}
                            </div>

                            {/* Pagination */}
                            {projects.last_page > 1 && (
                                <div className="flex justify-center items-center gap-2 pt-6">
                                    <button
                                        onClick={() => handlePageChange(projects.current_page - 1)}
                                        disabled={projects.current_page === 1}
                                        className="p-2 rounded-xl font-medium bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/[0.08] hover:bg-slate-50 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                        aria-label="Previous page"
                                    >
                                        <ChevronLeftIcon className="w-4 h-4" />
                                    </button>

                                    {Array.from({ length: projects.last_page }, (_, i) => i + 1)
                                        .filter(
                                            (page) =>
                                                page === 1 ||
                                                page === projects.last_page ||
                                                Math.abs(page - projects.current_page) <= 1
                                        )
                                        .map((page, idx, array) => {
                                            const prev = array[idx - 1];
                                            return (
                                                <div key={page} className="flex items-center gap-2">
                                                    {prev && page - prev > 1 && (
                                                        <span className="text-slate-400 dark:text-zinc-600 px-1 font-mono text-xs">
                                                            ...
                                                        </span>
                                                    )}
                                                    <button
                                                        onClick={() => handlePageChange(page)}
                                                        className={`w-9 h-9 rounded-xl text-xs font-mono font-medium transition-all ${
                                                            page === projects.current_page
                                                                ? "bg-slate-900 text-white dark:bg-white dark:text-zinc-950 font-bold shadow-sm"
                                                                : "bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/[0.08] hover:bg-slate-50 dark:hover:bg-zinc-800"
                                                        }`}
                                                    >
                                                        {page}
                                                    </button>
                                                </div>
                                            );
                                        })}

                                    <button
                                        onClick={() => handlePageChange(projects.current_page + 1)}
                                        disabled={projects.current_page === projects.last_page}
                                        className="p-2 rounded-xl font-medium bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/[0.08] hover:bg-slate-50 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                        aria-label="Next page"
                                    >
                                        <ChevronRightIcon className="w-4 h-4" />
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-20 border border-dashed border-slate-200 dark:border-white/10 rounded-2xl bg-white dark:bg-zinc-900/40">
                            <SparklesIcon className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                            <p className="text-slate-600 dark:text-zinc-400 font-mono text-sm">
                                No projects published yet.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}
