import { Link } from "@inertiajs/react";
import { ArrowTopRightOnSquareIcon, PhotoIcon, XMarkIcon } from "@heroicons/react/24/outline";
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
        skillsList = project.skills.slice(0, 3);
    } else if (project.tags) {
        skillsList = project.tags.split(",").slice(0, 3).map(t => ({ id: t.trim(), name: t.trim() }));
    }

    const imageUrl = project.featured_image ? `/storage/${project.featured_image}` : defaultImage;

    return (
        <>
            <article
                className="group relative flex flex-col justify-between h-full rounded-[2rem] bg-white dark:bg-[#18181b]/50 backdrop-blur-xl border border-slate-200 dark:border-white/5 overflow-hidden hover:border-slate-300 dark:hover:border-white/20 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
                style={{ animationDelay: `${index * 0.1}s` }}
            >
                {/* Image Section - Click to Open Modal */}
                <div 
                    className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden p-2 cursor-pointer"
                    onClick={() => setIsImageModalOpen(true)}
                >
                    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-100 dark:border-white/5">
                        {project.featured_image ? (
                            <img
                                src={imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = defaultImage;
                                }}
                            />
                        ) : (
                            <div className="w-full h-full bg-slate-100 dark:bg-[#09090b] flex items-center justify-center text-slate-400 dark:text-gray-700">
                                <PhotoIcon className="w-12 h-12 sm:w-16 sm:h-16" />
                            </div>
                        )}
                        {/* Dark Overlay Gradient on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                View Image
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow p-6 sm:p-8 pt-4">
                    {skillsList.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
                            {skillsList.map((skill: any) => (
                                <span
                                    key={skill.id}
                                    className="px-3 py-1 text-[10px] sm:text-xs font-semibold bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 border border-slate-200 dark:border-white/10 rounded-full backdrop-blur-sm"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    )}

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        <Link href={`/portofolio/${project.slug}`}>
                            {project.title}
                        </Link>
                    </h3>

                    <p className="text-slate-600 dark:text-gray-400 mb-6 sm:mb-8 line-clamp-3 text-sm leading-relaxed font-light">
                        {project.description}
                    </p>

                    <div className="mt-auto pt-5 sm:pt-6 border-t border-slate-100 dark:border-white/5">
                        <Link
                            href={`/portofolio/${project.slug}`}
                            className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-white/70 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors"
                        >
                            View Project
                            <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </article>

            {/* Image Modal */}
            {isImageModalOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
                    onClick={() => setIsImageModalOpen(false)}
                >
                    <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center">
                        <button 
                            className="absolute -top-12 right-0 sm:-right-12 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsImageModalOpen(false);
                            }}
                        >
                            <XMarkIcon className="w-6 h-6" />
                        </button>
                        <img
                            src={imageUrl}
                            alt={project.title}
                            className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()} 
                        />
                    </div>
                </div>
            )}
        </>
    );
}
