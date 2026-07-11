import PublicLayout from "@/Layouts/PublicLayout";
import { Link, usePage } from "@inertiajs/react";
import {
    CodeBracketIcon,
    ArrowRightIcon,
    UserIcon,
    BriefcaseIcon,
    DocumentArrowDownIcon,
    EnvelopeIcon,
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
            <div className="w-full">
                
                {/* Hero Section */}
                <SectionHero
                    title="Hi, I'm Moh. Bahrul 'Ulum"
                    gradientWord="Full Stack Developer"
                    subtitle="Crafting beautiful digital experiences with robust backend architectures. Focused on creating user-centric solutions that perform at scale."
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-24 md:pb-32 relative z-10">
                    {/* Floating Dock Menu */}
                    <div className="inline-flex items-center p-2 bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-full shadow-lg dark:shadow-[0_0_30px_rgba(255,255,255,0.05)] border border-slate-200 dark:border-white/10 gap-1 sm:gap-2 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                        
                        {/* 1. About */}
                        <Link
                            href="/about"
                            className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300"
                            title="About Me"
                        >
                            <UserIcon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-white transition-colors" />
                            
                            {/* Tooltip */}
                            <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 text-[10px] sm:text-xs font-semibold text-white bg-slate-800 dark:bg-black px-3 py-1.5 rounded-md pointer-events-none transition-all duration-300 whitespace-nowrap">
                                About Me
                            </span>
                        </Link>
                        
                        {/* 2. Projects */}
                        <Link
                            href="/portofolio"
                            className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300"
                            title="Portofolio"
                        >
                            <BriefcaseIcon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-white transition-colors" />
                            <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 text-[10px] sm:text-xs font-semibold text-white bg-slate-800 dark:bg-black px-3 py-1.5 rounded-md pointer-events-none transition-all duration-300 whitespace-nowrap">
                                Projects
                            </span>
                        </Link>

                        {/* Divider */}
                        <div className="w-px h-8 bg-slate-200 dark:bg-white/10 mx-1"></div>

                        {/* 3. Download CV */}
                        <a
                            href={(settings as any).cv_file ? `/storage/${(settings as any).cv_file}` : "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300"
                            title="Download CV"
                            onClick={(e) => {
                                if (!(settings as any).cv_file) {
                                    e.preventDefault();
                                    alert("CV belum tersedia. Nanti bisa diupload via dashboard Admin.");
                                }
                            }}
                        >
                            <DocumentArrowDownIcon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-white transition-colors" />
                            <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 text-[10px] sm:text-xs font-semibold text-white bg-slate-800 dark:bg-black px-3 py-1.5 rounded-md pointer-events-none transition-all duration-300 whitespace-nowrap">
                                Download CV
                            </span>
                        </a>

                        {/* 4. Contact */}
                        <Link
                            href="/contact"
                            className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300"
                            title="Contact Me"
                        >
                            <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-white transition-colors" />
                            <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 text-[10px] sm:text-xs font-semibold text-white bg-slate-800 dark:bg-black px-3 py-1.5 rounded-md pointer-events-none transition-all duration-300 whitespace-nowrap">
                                Contact
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Featured Projects Section */}
                <section className="py-20 md:py-24 bg-white dark:bg-[#09090b] relative transition-colors duration-300">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4 md:gap-6">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-3 md:mb-4">
                                    Selected Work
                                </h2>
                                <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg max-w-xl">
                                    A collection of my recent projects, showcasing my expertise in building full-stack applications.
                                </p>
                            </div>
                            <Link
                                href="/portofolio"
                                className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-white/70 hover:text-blue-700 dark:hover:text-white transition-colors group"
                            >
                                Explore All
                                <div className="ml-2 w-8 h-8 rounded-full bg-blue-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-white/10 transition-colors">
                                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        </div>

                        {featuredProjects.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {featuredProjects.map((project, index) => (
                                    <ProjectCard key={project.id} project={project} index={index} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 md:py-20 border border-slate-200 dark:border-white/5 rounded-3xl bg-slate-50 dark:bg-white/[0.02]">
                                <p className="text-slate-500 dark:text-gray-500 font-medium">No projects published yet.</p>
                            </div>
                        )}
                    </div>
                </section>

                <section className="py-16 md:py-20 bg-slate-50 dark:bg-[#0c0c0e] relative transition-colors duration-300">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4 md:gap-6">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-3 md:mb-4">
                                    Latest Insights
                                </h2>
                                <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg max-w-xl">
                                    Thoughts, tutorials, and deep dives into modern web development and software engineering.
                                </p>
                            </div>
                            <Link
                                href="/blog"
                                className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-white/70 hover:text-blue-700 dark:hover:text-white transition-colors group"
                            >
                                Read Articles
                                <div className="ml-2 w-8 h-8 rounded-full bg-blue-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-white/10 transition-colors">
                                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        </div>

                        {latestPosts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {latestPosts.map((post, index) => (
                                    <BlogCard key={post.id} post={post} index={index} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 md:py-16 border border-slate-200 dark:border-white/5 rounded-3xl bg-white dark:bg-white/[0.02]">
                                <p className="text-slate-500 dark:text-gray-500 font-medium">No articles published yet.</p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}

