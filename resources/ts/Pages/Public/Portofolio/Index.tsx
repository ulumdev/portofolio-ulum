

// export default function PortofolioIndex({ projects, skills, selectedSkill }: PortofolioIndexProps) {
//   const [filter, setFilter] = useState(selectedSkill || 'all');






import PublicLayout from "@/Layouts/PublicLayout";
import { router } from "@inertiajs/react";
import {
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    SparklesIcon,
} from "@heroicons/react/24/outline";
import { Project, Skill, PaginatedData } from "@/types";
import { useState } from "react";
import ProjectCard from "@/Components/Public/UI/ProjectCard";
import SectionHero from "@/Components/Public/UI/SectionHero";

interface PortofolioIndexProps {
    projects: PaginatedData<Project>;
    skills: Skill[];
    selectedSkill?: string;
    filters: {
        skill?: string;
    };
}

export default function PortofolioIndex({
    projects,
    skills,
    selectedSkill,
}: PortofolioIndexProps) {
    const [filter, setFilter] = useState(selectedSkill || "all");
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [expandedCategories, setExpandedCategories] = useState<
        Record<string, boolean>
    >({});

    const handleFilterChange = (skillName: string) => {
        setFilter(skillName);
        setShowMobileFilters(false);
        if (skillName === "all") {
            router.get("/portofolio");
        } else {
            router.get(`/portofolio?skill=${skillName}`);
        }
    };

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams();
        if (filter !== "all") {
            params.append("skill", filter);
        }
        params.append("page", page.toString());
        router.get(`/portofolio?${params.toString()}`);
    };

    const toggleCategory = (category: string) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    // Group skills by category
    const skillsByCategory = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, Skill[]>);

    // Sort categories: "Other" always at the end
    const sortedCategories = Object.entries(skillsByCategory).sort(
        ([categoryA], [categoryB]) => {
            if (categoryA.toLowerCase() === "other") return 1;
            if (categoryB.toLowerCase() === "other") return -1;
            return categoryA.localeCompare(categoryB);
        }
    );

    return (
        <PublicLayout title="Portofolio">
            <div className="w-full">
                {/* Header / Hero Section */}
                <SectionHero
                    title="Explore My"
                    gradientWord="Portofolio"
                    subtitle="Showcasing expertise across various technologies and domains"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Projects Grid */}
                    {projects.data.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {projects.data.map((project, index) => (
                                    <ProjectCard key={project.id} project={project} index={index} />
                                ))}
                            </div>

                            {/* Pagination */}
                            {projects.last_page > 1 && (
                                <div className="flex justify-center items-center space-x-2 animate-fade-in-up">
                                    {/* Previous Button */}
                                    <button
                                        onClick={() =>
                                            handlePageChange(
                                                projects.current_page - 1
                                            )
                                        }
                                        disabled={projects.current_page === 1}
                                        className="p-2 rounded-lg font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        <ChevronLeftIcon className="w-5 h-5" />
                                    </button>

                                    {/* Page Numbers */}
                                    {(() => {
                                        const maxVisible = 5;
                                        const pages = [];
                                        let startPage = Math.max(
                                            1,
                                            projects.current_page -
                                            Math.floor(maxVisible / 2)
                                        );
                                        let endPage = Math.min(
                                            projects.last_page,
                                            startPage + maxVisible - 1
                                        );

                                        if (endPage - startPage + 1 < maxVisible) {
                                            startPage = Math.max(
                                                1,
                                                endPage - maxVisible + 1
                                            );
                                        }

                                        // First page
                                        if (startPage > 1) {
                                            pages.push(
                                                <button
                                                    key={1}
                                                    onClick={() =>
                                                        handlePageChange(1)
                                                    }
                                                    className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                                                >
                                                    1
                                                </button>
                                            );
                                            if (startPage > 2) {
                                                pages.push(
                                                    <span
                                                        key="dots-start"
                                                        className="text-slate-500 dark:text-slate-400"
                                                    >
                                                        ...
                                                    </span>
                                                );
                                            }
                                        }

                                        // Page range
                                        for (
                                            let page = startPage;
                                            page <= endPage;
                                            page++
                                        ) {
                                            pages.push(
                                                <button
                                                    key={page}
                                                    onClick={() =>
                                                        handlePageChange(page)
                                                    }
                                                    className={`px-4 py-2 rounded-lg font-medium transition-all ${page ===
                                                        projects.current_page
                                                        ? "bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white shadow-lg scale-110"
                                                        : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                                                        }`}
                                                >
                                                    {page}
                                                </button>
                                            );
                                        }

                                        // Last page
                                        if (endPage < projects.last_page) {
                                            if (endPage < projects.last_page - 1) {
                                                pages.push(
                                                    <span
                                                        key="dots-end"
                                                        className="text-slate-500 dark:text-slate-400"
                                                    >
                                                        ...
                                                    </span>
                                                );
                                            }
                                            pages.push(
                                                <button
                                                    key={projects.last_page}
                                                    onClick={() =>
                                                        handlePageChange(
                                                            projects.last_page
                                                        )
                                                    }
                                                    className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                                                >
                                                    {projects.last_page}
                                                </button>
                                            );
                                        }

                                        return pages;
                                    })()}

                                    {/* Next Button */}
                                    <button
                                        onClick={() =>
                                            handlePageChange(
                                                projects.current_page + 1
                                            )
                                        }
                                        disabled={
                                            projects.current_page ===
                                            projects.last_page
                                        }
                                        className="p-2 rounded-lg font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        <ChevronRightIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-20 animate-fade-in-up border border-slate-200 dark:border-white/5 rounded-3xl bg-slate-50 dark:bg-white/[0.02]">
                            <p className="text-slate-500 dark:text-gray-500 font-medium">No projects published yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}
