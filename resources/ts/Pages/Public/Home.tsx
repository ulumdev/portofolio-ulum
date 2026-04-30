import PublicLayout from "@/Layouts/PublicLayout";
import { Link, usePage } from "@inertiajs/react";
import {
    DocumentTextIcon,
    CodeBracketIcon,
    ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { Project, BlogPost, PageProps } from "@/types";

// Custom UI Components
import SectionHero from "@/Components/Public/UI/SectionHero";
import ProjectCard from "@/Components/Public/UI/ProjectCard";
import BlogCard from "@/Components/Public/UI/BlogCard";

interface HomeProps {
    featuredProjects: Project[];
    latestPosts: BlogPost[];
}

export default function Home({ featuredProjects, latestPosts }: HomeProps) {
    const { settings } = usePage<PageProps>().props;

    return (
        <PublicLayout title="Home">
            <div className="bg-slate-900 min-h-screen text-slate-300 font-sans">
                {/* Hero Section */}
                <SectionHero
                    title="Hi, I'm Moh. Bahrul 'Ulum"
                    gradientWord="Full Stack Developer"
                    subtitle="Crafting beautiful digital experiences with robust backend architectures. Focused on creating user-centric solutions."
                    badgeText="AVAILABLE FOR NEW PROJECTS"
                    badgeIcon={
                        <span className="relative flex h-3 w-3 mr-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </span>
                    }
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20 relative z-10">
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/portofolio"
                            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <CodeBracketIcon className="w-5 h-5 mr-2" />
                            View My Work
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-3 bg-slate-800 text-white border border-slate-700 hover:border-slate-500 font-medium rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Get In Touch
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {[
                            {
                                label: "Projects",
                                value: (settings?.projects_completed || featuredProjects.length) + "+",
                            },
                            {
                                label: "Blog Posts",
                                value: latestPosts.length + "+",
                            },
                            { label: "Years Exp", value: (settings?.years_experience || "5") + "+" },
                            { label: "Happy Clients", value: (settings?.happy_clients || "20") + "+" },
                        ].map((stat, index) => (
                            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Featured Projects Section */}
                <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Section Header */}
                        <div className="text-center mb-16 animate-fade-in-up">
                            <div className="inline-flex items-center justify-center mb-4">
                                <CodeBracketIcon className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-2" />
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                                    Featured Projects
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                                Showcasing my recent work and side projects
                            </p>
                        </div>

                        {featuredProjects.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {featuredProjects.map((project, index) => (
                                        <ProjectCard key={project.id} project={project} index={index} />
                                    ))}
                                </div>

                                {/* View All Button */}
                                <div className="text-center mt-12">
                                    <Link
                                        href="/portofolio"
                                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-lg group transition-colors"
                                    >
                                        View All Projects
                                        <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <p className="text-center text-slate-500 pb-10">
                                No projects yet.
                            </p>
                        )}
                    </div>
                </section>

                {/* Latest Blog Posts Section */}
                <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Section Header */}
                        <div className="text-center mb-16 animate-fade-in-up">
                            <div className="inline-flex items-center justify-center mb-4">
                                <DocumentTextIcon className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-2" />
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                                    Latest Articles
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                                Thoughts, tutorials, and insights on web development
                            </p>
                        </div>

                        {latestPosts.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {latestPosts.map((post, index) => (
                                        <BlogCard key={post.id} post={post} index={index} />
                                    ))}
                                </div>

                                {/* View All Button */}
                                <div className="text-center mt-12">
                                    <Link
                                        href="/blog"
                                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-lg group transition-colors"
                                    >
                                        View All Articles
                                        <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <p className="text-center text-slate-500 pb-10">
                                No blog posts yet.
                            </p>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 relative overflow-hidden bg-slate-900 border-t border-slate-800">
                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Let's Work Together
                        </h2>
                        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                            Have a project in mind? Let's discuss how I can help
                            bring your ideas to life with clean code and modern design.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Get In Touch
                            <ArrowRightIcon className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
