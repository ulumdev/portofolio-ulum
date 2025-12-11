// import PublicLayout from '@/Layouts/PublicLayout';
// import { Link, router } from '@inertiajs/react';
// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// import { Project, Skill } from '@/types';
// import { useState } from 'react';

// interface PortofolioIndexProps {
//   projects: Project[];
//   skills: Skill[];
//   selectedSkill?: string;
// }

// export default function PortofolioIndex({ projects, skills, selectedSkill }: PortofolioIndexProps) {
//   const [filter, setFilter] = useState(selectedSkill || 'all');

//   const handleFilterChange = (skillName: string) => {
//     setFilter(skillName);
//     if (skillName === 'all') {
//       router.get('/portofolio');
//     } else {
//       router.get(`/portofolio?skill=${skillName}`);
//     }
//   };

//   // Group skills by category
//   const skillsByCategory = skills.reduce((acc, skill) => {
//     if (! acc[skill.category]) {
//       acc[skill.category] = [];
//     }
//     acc[skill.category].push(skill);
//     return acc;
//   }, {} as Record<string, Skill[]>);

//   return (
//     <PublicLayout title="Portofolio">
//       {/* Header */}
//       <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">My Portofolio</h1>
//           <p className="text-xl text-primary-100">
//             Explore my projects and technical work
//           </p>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Filter Section */}
//         <div className="mb-8">
//           <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Technology</h3>
//           <div className="flex flex-wrap gap-2">
//             <button
//               onClick={() => handleFilterChange('all')}
//               className={`px-4 py-2 rounded-lg font-medium transition-colors ${
//                 filter === 'all'
//                   ? 'bg-primary-600 text-white'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               All Projects
//             </button>
//             {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
//               <div key={category} className="flex flex-wrap gap-2">
//                 {categorySkills.map((skill) => (
//                   <button
//                     key={skill.id}
//                     onClick={() => handleFilterChange(skill.name)}
//                     className={`px-4 py-2 rounded-lg font-medium transition-colors ${
//                       filter === skill.name
//                         ? 'bg-primary-600 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {skill.name}
//                   </button>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Projects Grid */}
//         {projects.length > 0 ?  (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project) => (
//               <Link
//                 key={project.id}
//                 href={`/portofolio/${project.slug}`}
//                 className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//               >
//                 {project.featured_image ? (
//                   <div className="relative h-56 overflow-hidden">
//                     <img
//                       src={`/storage/${project.featured_image}`}
//                       alt={project.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                     />
//                     <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
//                   </div>
//                 ) : (
//                   <div className="h-56 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
//                     <span className="text-white text-5xl font-bold">
//                       {project.title.charAt(0)}
//                     </span>
//                   </div>
//                 )}
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4 line-clamp-3">
//                     {project.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {project.skills.map((skill) => (
//                       <span
//                         key={skill.id}
//                         className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full"
//                       >
//                         {skill. name}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-16">
//             <MagnifyingGlassIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//             <p className="text-xl text-gray-500">No projects found with this filter.</p>
//             <button
//               onClick={() => handleFilterChange('all')}
//               className="mt-4 text-primary-600 hover:text-primary-800 font-semibold"
//             >
//               View All Projects
//             </button>
//           </div>
//         )}
//       </div>
//     </PublicLayout>
//   );
// }

import PublicLayout from "@/Layouts/PublicLayout";
import { Link, router } from "@inertiajs/react";
import {
    MagnifyingGlassIcon,
    FunnelIcon,
    ChevronDownIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { Project, Skill, PaginatedData } from "@/types";
import { useState } from "react";

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
            {/* Hero Header */}
            <section className="relative bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 dark:from-primary-900 dark:via-purple-900 dark:to-pink-900 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float"></div>
                    <div
                        className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float"
                        style={{ animationDelay: "1s" }}
                    ></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <div className="inline-block mb-4 animate-fade-in-up">
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
                            My Work
                        </span>
                    </div>
                    <h1
                        className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up"
                        style={{ animationDelay: "0.1s" }}
                    >
                        Portofolio
                    </h1>
                    <p
                        className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up"
                        style={{ animationDelay: "0.2s" }}
                    >
                        Explore my projects showcasing expertise across various
                        technologies and domains
                    </p>
                </div>
            </section>

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
                                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                            filter === "all"
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
                            className={`p-6 ${
                                showMobileFilters ? "block" : "hidden lg:block"
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
                                                    className={`w-4 h-4 ml-2 flex-shrink-0 transition-transform duration-300 ${
                                                        expandedCategories[
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
                                                                        className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                                                                            filter ===
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
                                <article
                                    key={project.id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 transform hover:-translate-y-3 h-full flex flex-col animate-fade-in-up"
                                    style={{
                                        animationDelay: `${index * 0.05}s`,
                                    }}
                                >
                                    {/* Project Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        {project.featured_image ? (
                                            <>
                                                <img
                                                    src={`/storage/${project.featured_image}`}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            </>
                                        ) : (
                                            <div className="h-full bg-gradient-to-br from-primary-400 via-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
                                                <div className="absolute inset-0 bg-black/10"></div>
                                                <span className="text-white text-6xl font-bold relative z-10 group-hover:scale-110 transition-transform duration-500">
                                                    {project.title.charAt(0)}
                                                </span>
                                            </div>
                                        )}

                                        {/* Status Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 bg-white dark:bg-gray-900 rounded-full text-xs font-semibold text-gray-900 dark:text-white shadow-lg">
                                                {project.status === "published"
                                                    ? "✨ Published"
                                                    : "🚧 Draft"}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        {/* Title - Clickable */}
                                        <Link
                                            href={`/portofolio/${project.slug}`}
                                            className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors line-clamp-2 block"
                                        >
                                            {project.title}
                                        </Link>

                                        {/* Description */}
                                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-1">
                                            {project.description}
                                        </p>

                                        {/* Skills Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.skills
                                                .slice(0, 3)
                                                .map((skill) => (
                                                    <span
                                                        key={skill.id}
                                                        className="px-3 py-1.5 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-400 rounded-lg"
                                                    >
                                                        {skill.name}
                                                    </span>
                                                ))}
                                            {project.skills.length > 3 && (
                                                <span className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg">
                                                    +{project.skills.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        {/* View Details Button - Clickable */}
                                        <Link
                                            href={`/portofolio/${project.slug}`}
                                            className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-primary-600 dark:bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors group/btn"
                                        >
                                            View Details
                                            <svg
                                                className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </article>
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
                                                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                                    page ===
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
        </PublicLayout>
    );
}
