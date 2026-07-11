

// export default function PortofolioIndex({ projects, skills, selectedSkill }: PortofolioIndexProps) {
//   const [filter, setFilter] = useState(selectedSkill || 'all');






import PublicLayout from "@/Layouts/PublicLayout";
import { router } from "@inertiajs/react";
import {
    MagnifyingGlassIcon,
    FunnelIcon,
    ChevronDownIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { Project, Skill, PaginatedData } from "@/types";
import { useState } from "react";
import ProjectCard from "@/Components/Public/UI/ProjectCard";
import SectionHero from "@/Components/Public/UI/SectionHero";
import { SparklesIcon } from "@heroicons/react/24/outline";

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
                    {/* Filters Section */}
                    <div className="mb-12 animate-fade-in-up">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                            {/* Filter Header */}
                            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <FunnelIcon className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                            Filter by Technology
                                        </h3>
                                        {/* <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                                        {projects.total} projects
                                    </span> */}
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        {/* {filter !== "all" && (
                                        <button
                                            onClick={() =>
                                                handleFilterChange("all")
                                            }
                                            className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium flex items-center"
                                        >
                                            <XMarkIcon className="w-4 h-4 mr-1" />
                                            Clear Filter
                                        </button>
                                    )} */}
                                        {/* Mobile Filter Toggle */}
                                        <button
                                            onClick={() =>
                                                setShowMobileFilters(
                                                    !showMobileFilters
                                                )
                                            }
                                            className="lg:hidden px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-400 rounded-lg text-sm font-medium"
                                        >
                                            {showMobileFilters ? "Hide" : "Show"}{" "}
                                            Filters
                                        </button>
                                    </div>
                                    {/* All Projects Button */}
                                    <div className="mb-0">
                                        <button
                                            onClick={() => handleFilterChange("all")}
                                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${filter === "all"
                                                ? "bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 text-white shadow-lg"
                                                : "bg-gray-100 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                                                }`}
                                        >
                                            All Projects ({filter === "all" ? projects.total : projects.data.length})
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Filter Content */}
                            <div
                                className={`p-6 ${showMobileFilters ? "block" : "hidden lg:block"
                                    }`}
                            >
                                {/* All Projects Button */}
                                {/* <div className="mb-6">
                                <button
                                    onClick={() => handleFilterChange("all")}
                                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                        filter === "all"
                                            ? "bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 text-white shadow-lg"
                                            : "bg-gray-100 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                                    }`}
                                >
                                    All Projects ({projects.total})
                                </button>
                            </div> */}

                                {/* Horizontal Categories with Dropdowns */}
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                    {sortedCategories.map(
                                        ([category, categorySkills]) => (
                                            <div
                                                key={category}
                                                className="relative z-10"
                                            >
                                                {/* Category Dropdown Button */}
                                                <button
                                                    onClick={() =>
                                                        toggleCategory(category)
                                                    }
                                                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-900/50 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-between group border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-700"
                                                >
                                                    <span className="truncate">
                                                        {category}
                                                    </span>
                                                    <ChevronDownIcon
                                                        className={`w-4 h-4 ml-2 flex-shrink-0 transition-transform duration-300 ${expandedCategories[
                                                            category
                                                        ]
                                                            ? "rotate-180"
                                                            : ""
                                                            }`}
                                                    />
                                                </button>

                                                {/* Dropdown Content */}
                                                {expandedCategories[category] && (
                                                    <>
                                                        {/* Backdrop to close dropdown */}
                                                        <div
                                                            className="fixed inset-0 z-40"
                                                            onClick={() =>
                                                                setExpandedCategories(
                                                                    {}
                                                                )
                                                            }
                                                        />

                                                        {/* Dropdown Menu */}
                                                        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 max-h-64 overflow-y-auto">
                                                            <div className="p-2 space-y-1">
                                                                {categorySkills.map(
                                                                    (skill) => (
                                                                        <button
                                                                            key={
                                                                                skill.id
                                                                            }
                                                                            onClick={() => {
                                                                                handleFilterChange(
                                                                                    skill.name
                                                                                );
                                                                                setExpandedCategories(
                                                                                    {}
                                                                                );
                                                                            }}
                                                                            className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${filter ===
                                                                                skill.name
                                                                                ? "bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-400"
                                                                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                                                }`}
                                                                        >
                                                                            {
                                                                                skill.name
                                                                            }
                                                                        </button>
                                                                    )
                                                                )}
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Active Filter Badge */}
                        {filter !== "all" && (
                            <div className="mt-6">
                                <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-400 rounded-lg border border-primary-300 dark:border-primary-700">
                                    <span className="text-sm font-medium">
                                        Filtered by: {filter}
                                    </span>
                                    <button
                                        onClick={() => handleFilterChange("all")}
                                        className="ml-3 text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300"
                                    >
                                        <XMarkIcon className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

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
                                        className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        Previous
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
                                                    className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                                >
                                                    1
                                                </button>
                                            );
                                            if (startPage > 2) {
                                                pages.push(
                                                    <span
                                                        key="dots-start"
                                                        className="text-gray-500 dark:text-gray-400"
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
                                                        ? "bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 text-white shadow-lg scale-110"
                                                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
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
                                                        className="text-gray-500 dark:text-gray-400"
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
                                                    className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
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
                                        className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-20 animate-fade-in-up">
                            <div className="inline-block p-8 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
                                <MagnifyingGlassIcon className="w-16 h-16 text-gray-400 dark:text-gray-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                No projects found
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                No projects match your current filter selection
                            </p>
                            <button
                                onClick={() => handleFilterChange("all")}
                                className="px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors font-medium"
                            >
                                View All Projects
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}
