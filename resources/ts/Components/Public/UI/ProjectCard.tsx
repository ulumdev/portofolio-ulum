import { Link } from "@inertiajs/react";
import { ArrowTopRightOnSquareIcon, PhotoIcon } from "@heroicons/react/24/outline";

interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    featured_image?: string | null;
    tags?: string;
    skills?: { id: number; name: string }[];
    status?: string;
    [key: string]: any; // Allow other properties
}

interface ProjectCardProps {
    project: Project;
    index?: number; // Optional index for staggered animation delays
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
    const defaultImage = "/images/project-placeholder.jpg";

    let skillsList: any[] = [];
    if (project.skills && project.skills.length > 0) {
        skillsList = project.skills.slice(0, 3);
    } else if (project.tags) {
        skillsList = project.tags.split(",").slice(0, 3).map(t => ({ id: t.trim(), name: t.trim() }));
    }

    return (
        <article
            className="group rounded-2xl overflow-hidden bg-slate-800 shadow-xl border border-slate-700/50 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 transform hover:-translate-y-2"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="relative h-48 md:h-56 overflow-hidden">
                {project.featured_image ? (
                    <img
                        src={`/storage/${project.featured_image}`}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = defaultImage;
                        }}
                    />
                ) : (
                    <div className="w-full h-full bg-slate-900 flex items-center justify-center text-slate-600">
                        <PhotoIcon className="w-16 h-16" />
                    </div>
                )}
                {/* Status Badge */}
                {/* {project.status && (
                    <div className="absolute top-4 right-4 z-20">
                        <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-xs font-semibold text-white shadow-lg border border-slate-700">
                            {project.status === "published"
                                ? "✨ Published"
                                : "🚧 Draft"}
                        </span>
                    </div>
                )} */}
                {/* Overlay Gradient on hover */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                        href={`/portofolio/${project.slug}`}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full shadow-lg transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                        View Project
                    </Link>
                </div>
            </div>

            <div className="p-6">
                {/* Skills */}
                {skillsList.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {skillsList.map((skill: any) => (
                            <span
                                key={skill.id}
                                className="px-3 py-1 text-xs font-semibold bg-blue-900/30 text-blue-400 border border-blue-500/20 rounded-full"
                            >
                                {skill.name}
                            </span>
                        ))}
                        {project.skills && project.skills.length > 3 && (
                            <span className="px-3 py-1 text-xs font-semibold bg-slate-800 text-slate-400 border border-slate-700/50 rounded-full">
                                +{project.skills.length - 3}
                            </span>
                        )}
                    </div>
                )}

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    <Link href={`/portofolio/${project.slug}`}>
                        {project.title}
                    </Link>
                </h3>

                <p className="text-slate-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                    {project.description}
                </p>

                <div className="pt-4 border-t border-slate-700 flex justify-between items-center">
                    <Link
                        href={`/portofolio/${project.slug}`}
                        className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        Read Case Study
                        <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1. 5" />
                    </Link>
                </div>
            </div>
        </article>
    );
}
