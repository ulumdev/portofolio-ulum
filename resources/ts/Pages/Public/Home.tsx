import { useState } from "react";
import PublicLayout from "@/Layouts/PublicLayout";
import { Link, usePage } from "@inertiajs/react";
import {
    ArrowRightIcon,
    ArrowUpRightIcon,
    DocumentArrowDownIcon,
    EnvelopeIcon,
    CheckIcon,
    CommandLineIcon,
    CodeBracketIcon,
    CpuChipIcon,
    SparklesIcon,
} from "@heroicons/react/24/outline";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
} from "react-icons/fa";
import {
    SiLaravel,
    SiPhp,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiMysql,
    SiPostgresql,
    SiRedis,
    SiDocker,
    SiGit,
    SiNodedotjs,
    SiLinux,
} from "react-icons/si";
import { Project, BlogPost, Skill, PageProps } from "@/types";
import ProjectCard from "@/Components/Public/UI/ProjectCard";
import BlogCard from "@/Components/Public/UI/BlogCard";

interface HomeProps {
    featuredProjects: Project[];
    latestPosts: BlogPost[];
    skills?: Skill[];
}

export default function Home({ featuredProjects, latestPosts, skills = [] }: HomeProps) {
    const { settings } = usePage<PageProps>().props;
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [activeTab, setActiveTab] = useState<"code" | "terminal">("code");

    const email = settings.email || "ulumdev@gmail.com";
    const hireStatus = settings.about_hire_status || settings.contact_freelance_status || "Available for full-time & freelance projects";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    // Default icon map
    const defaultTechList = [
        { name: "Laravel", icon: SiLaravel, color: "hover:text-[#FF2D20]" },
        { name: "PHP", icon: SiPhp, color: "hover:text-[#777BB4]" },
        { name: "React", icon: SiReact, color: "hover:text-[#61DAFB]" },
        { name: "TypeScript", icon: SiTypescript, color: "hover:text-[#3178C6]" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-[#06B6D4]" },
        { name: "MySQL", icon: SiMysql, color: "hover:text-[#4479A1]" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "hover:text-[#4169E1]" },
        { name: "Redis", icon: SiRedis, color: "hover:text-[#DC382D]" },
        { name: "Docker", icon: SiDocker, color: "hover:text-[#2496ED]" },
        { name: "Node.js", icon: SiNodedotjs, color: "hover:text-[#5FA04E]" },
        { name: "Git", icon: SiGit, color: "hover:text-[#F05032]" },
        { name: "Linux", icon: SiLinux, color: "hover:text-[#FCC624]" },
    ];

    // Merge skills from DB if available
    const displayTechList = skills.length > 0
        ? skills.map(s => {
            const matched = defaultTechList.find(d => d.name.toLowerCase() === s.name.toLowerCase());
            return {
                name: s.name,
                icon: matched ? matched.icon : CodeBracketIcon,
                color: matched ? matched.color : "hover:text-blue-500",
            };
        })
        : defaultTechList;

    return (
        <PublicLayout title="Home">
            <div className="w-full">
                {/* 1. HERO SECTION */}
                <section className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24">
                    {/* Background Subtle Mesh & Dots */}
                    <div className="absolute inset-0 bg-dots-light dark:bg-dots-dark opacity-35 pointer-events-none" />
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            {/* Left Column: Bio & Value Proposition */}
                            <div className="lg:col-span-7 space-y-6">
                                {/* Live Availability Badge from Settings */}
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 shadow-sm animate-fade-in">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span>{hireStatus}</span>
                                </div>

                                {/* Main Headline from Settings */}
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] animate-fade-in-up">
                                    {settings.home_hero_title || "Crafting scalable backend systems &"}{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-400">
                                        {settings.home_hero_gradient || "modern web apps."}
                                    </span>
                                </h1>

                                {/* Subtitle from Settings */}
                                <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed font-normal max-w-xl animate-fade-in-up">
                                    {settings.home_hero_subtitle ||
                                        settings.site_description ||
                                        "Hi, I'm Moh. Bahrul 'Ulum. A Full Stack Software Engineer focused on building resilient backend architectures with Laravel and modern, reactive interfaces with React & TypeScript."}
                                </p>

                                {/* CTAs & Email Copy */}
                                <div className="flex flex-wrap items-center gap-3 pt-2">
                                    <Link
                                        href="/portofolio"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-slate-800 dark:hover:bg-zinc-100 transition-all duration-200 shadow-sm hover:shadow"
                                    >
                                        <span>Explore Work</span>
                                        <ArrowRightIcon className="w-4 h-4" />
                                    </Link>

                                    {/* Copy Email Button */}
                                    <button
                                        onClick={handleCopyEmail}
                                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-white dark:bg-zinc-900/80 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200 shadow-sm"
                                        title="Click to copy email address"
                                    >
                                        {copiedEmail ? (
                                            <>
                                                <CheckIcon className="w-4 h-4 text-emerald-500" />
                                                <span className="text-emerald-600 dark:text-emerald-400 font-mono">Email Copied!</span>
                                            </>
                                        ) : (
                                            <>
                                                <EnvelopeIcon className="w-4 h-4 text-slate-400" />
                                                <span className="font-mono text-xs">{email}</span>
                                            </>
                                        )}
                                    </button>

                                    {/* CV Download from Settings */}
                                    {settings.cv_file && (
                                        <a
                                            href={`/storage/${settings.cv_file}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-white/[0.1] transition-colors"
                                        >
                                            <DocumentArrowDownIcon className="w-4 h-4" />
                                            <span>CV</span>
                                        </a>
                                    )}
                                </div>

                                {/* Social Links Bar from Settings */}
                                <div className="flex items-center gap-3 pt-2 text-slate-500 dark:text-zinc-500">
                                    <span className="text-xs font-mono">Connect:</span>
                                    {settings.github_url && (
                                        <a
                                            href={settings.github_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors"
                                            aria-label="GitHub Profile"
                                        >
                                            <FaGithub className="w-4 h-4" />
                                        </a>
                                    )}
                                    {settings.linkedin_url && (
                                        <a
                                            href={settings.linkedin_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors"
                                            aria-label="LinkedIn Profile"
                                        >
                                            <FaLinkedin className="w-4 h-4" />
                                        </a>
                                    )}
                                    {settings.twitter_url && (
                                        <a
                                            href={settings.twitter_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors"
                                            aria-label="Twitter Profile"
                                        >
                                            <FaTwitter className="w-4 h-4" />
                                        </a>
                                    )}
                                    {settings.instagram_url && (
                                        <a
                                            href={settings.instagram_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors"
                                            aria-label="Instagram Profile"
                                        >
                                            <FaInstagram className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Right Column: Interactive Code & Terminal Showcase */}
                            <div className="lg:col-span-5 animate-fade-in">
                                <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
                                    {/* Terminal Header */}
                                    <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800/80">
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                        </div>

                                        {/* Tabs */}
                                        <div className="flex items-center gap-1 bg-slate-950/70 p-0.5 rounded-lg border border-slate-800">
                                            <button
                                                onClick={() => setActiveTab("code")}
                                                className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] transition-colors ${
                                                    activeTab === "code"
                                                        ? "bg-slate-800 text-white font-medium"
                                                        : "text-slate-400 hover:text-white"
                                                }`}
                                            >
                                                <CodeBracketIcon className="w-3 h-3" />
                                                <span>profile.ts</span>
                                            </button>
                                            <button
                                                onClick={() => setActiveTab("terminal")}
                                                className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] transition-colors ${
                                                    activeTab === "terminal"
                                                        ? "bg-slate-800 text-white font-medium"
                                                        : "text-slate-400 hover:text-white"
                                                }`}
                                            >
                                                <CommandLineIcon className="w-3 h-3" />
                                                <span>artisan.sh</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Code Content */}
                                    <div className="p-4 sm:p-5 text-slate-300 leading-relaxed overflow-x-auto min-h-[260px]">
                                        {activeTab === "code" ? (
                                            <pre className="text-[12px] leading-6">
                                                <span className="text-violet-400">const</span>{" "}
                                                <span className="text-blue-400">engineer</span>:{" "}
                                                <span className="text-amber-300">SoftwareEngineer</span> = {"{\n"}
                                                {"  "}name: <span className="text-emerald-300">"{settings.site_name || "Moh. Bahrul 'Ulum"}"</span>,{"\n"}
                                                {"  "}role: <span className="text-emerald-300">"{settings.home_hero_gradient || "Full Stack Developer"}"</span>,{"\n"}
                                                {"  "}location: <span className="text-emerald-300">"{settings.address || "Indonesia"}"</span>,{"\n"}
                                                {"  "}readyForHire: <span className="text-amber-400">true</span>,{"\n"}
                                                {"  "}stack: [
                                                {"\n"}    <span className="text-emerald-300">"Laravel"</span>,{" "}
                                                <span className="text-emerald-300">"PHP"</span>,{" "}
                                                <span className="text-emerald-300">"React"</span>,{" "}
                                                <span className="text-emerald-300">"TypeScript"</span>,
                                                {"\n"}    <span className="text-emerald-300">"MySQL"</span>,{" "}
                                                <span className="text-emerald-300">"Redis"</span>,{" "}
                                                <span className="text-emerald-300">"Docker"</span>,
                                                {"\n"}  ],{"\n"}
                                                {"};"}
                                            </pre>
                                        ) : (
                                            <div className="text-[12px] space-y-2">
                                                <p className="text-slate-500">
                                                    $ php artisan about:engineer
                                                </p>
                                                <p className="text-emerald-400 font-semibold">
                                                    ✓ Status: {hireStatus}
                                                </p>
                                                <div className="pt-1 text-slate-400 space-y-1">
                                                    <p>• Architecture: Clean &amp; Domain-Driven</p>
                                                    <p>• Test Coverage: Unit &amp; Integration</p>
                                                    <p>• API Standard: RESTful &amp; Inertia Protocol</p>
                                                    <p>• DB Optimization: Indexed &amp; Cached</p>
                                                </div>
                                                <p className="pt-2 text-slate-500 flex items-center gap-1">
                                                    <span>$</span>
                                                    <span className="w-2 h-4 bg-emerald-400 animate-pulse inline-block" />
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. STATS & IMPACT METRICS BAR (Configured via Admin Settings) */}
                <section className="border-y border-slate-200/80 dark:border-white/[0.08] bg-slate-50/70 dark:bg-zinc-950/60 py-8">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div>
                                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
                                    {settings.years_experience || "3+"}
                                </div>
                                <div className="text-xs text-slate-500 dark:text-zinc-500 mt-1 uppercase tracking-wider font-mono">
                                    Years Experience
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
                                    {settings.projects_completed || "15+"}
                                </div>
                                <div className="text-xs text-slate-500 dark:text-zinc-500 mt-1 uppercase tracking-wider font-mono">
                                    Projects Completed
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono">
                                    {settings.happy_clients || "100%"}
                                </div>
                                <div className="text-xs text-slate-500 dark:text-zinc-500 mt-1 uppercase tracking-wider font-mono">
                                    {settings.happy_clients ? "Happy Clients" : "Quality Standard"}
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                                    24/7
                                </div>
                                <div className="text-xs text-slate-500 dark:text-zinc-500 mt-1 uppercase tracking-wider font-mono">
                                    Passion For Code
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. TECH STACK SEAMLESS MARQUEE (Dynamic from Admin Skills + Fallbacks) */}
                <section className="py-10 bg-white dark:bg-zinc-950 overflow-hidden border-b border-slate-200/80 dark:border-white/[0.08]">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
                        <span className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-zinc-500">
                            Technologies &amp; Tools I Excel In
                        </span>
                    </div>

                    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
                        <div className="flex w-max space-x-6 sm:space-x-8 animate-marquee hover:[animation-play-state:paused]">
                            {[...displayTechList, ...displayTechList].map((tech, i) => {
                                const Icon = tech.icon;
                                return (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-white/[0.06] text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-all duration-200 group cursor-default"
                                    >
                                        <Icon className={`w-5 h-5 transition-colors duration-200 ${tech.color}`} />
                                        <span className="text-xs sm:text-sm font-medium font-mono">{tech.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* 4. FEATURED PROJECTS SECTION */}
                <section className="py-20 md:py-24 bg-slate-50/50 dark:bg-zinc-950/40 relative">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Section Header */}
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                            <div>
                                <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-2">
                                    <SparklesIcon className="w-4 h-4" />
                                    <span>Selected Engineering Work</span>
                                </div>
                                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                                    Featured Projects
                                </h2>
                                <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 mt-2 max-w-lg font-normal">
                                    Production-ready web applications, systems, and APIs designed with scalability and user experience in mind.
                                </p>
                            </div>

                            <Link
                                href="/portofolio"
                                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                            >
                                <span>View All Projects</span>
                                <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Projects Grid */}
                        {featuredProjects.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                {featuredProjects.map((project, index) => (
                                    <ProjectCard key={project.id} project={project} index={index} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 border border-dashed border-slate-200 dark:border-white/10 rounded-2xl bg-white dark:bg-zinc-900/40">
                                <p className="text-slate-500 dark:text-zinc-500 font-mono text-sm">No projects published yet.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* 5. CORE ARCHITECTURAL STRENGTHS */}
                <section className="py-20 bg-white dark:bg-zinc-950 border-t border-slate-200/80 dark:border-white/[0.08]">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">
                                Engineering Value
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
                                How I Build &amp; Solve Problems
                            </h2>
                            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 mt-3 font-normal">
                                Bridging the gap between robust server-side architecture and delightful user interactions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 border border-blue-500/20">
                                    <CpuChipIcon className="w-5 h-5" />
                                </div>
                                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                                    Clean Architecture &amp; Scalability
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                                    Building structured controllers, reusable service classes, domain logic, and clean Eloquent relationships that remain maintainable as the codebase scales.
                                </p>
                            </div>

                            <div className="p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300">
                                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-5 border border-indigo-500/20">
                                    <CodeBracketIcon className="w-5 h-5" />
                                </div>
                                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                                    Reactive &amp; Accessible Frontend
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                                    Crafting snappy single-page experience using React &amp; Inertia.js without the overhead of maintaining disconnected API boundaries for internal apps.
                                </p>
                            </div>

                            <div className="p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5 border border-emerald-500/20">
                                    <CommandLineIcon className="w-5 h-5" />
                                </div>
                                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                                    Performance &amp; Reliability
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                                    Eager loading to prevent N+1 queries, Redis caching, robust validation, and containerized deployment with Docker for seamless environments.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. LATEST INSIGHTS / BLOG */}
                <section className="py-20 bg-slate-50/50 dark:bg-zinc-950/40 relative border-t border-slate-200/80 dark:border-white/[0.08]">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                            <div>
                                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-2 block">
                                    Writing &amp; Knowledge Sharing
                                </span>
                                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                                    Latest Articles
                                </h2>
                                <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 mt-2 max-w-lg font-normal">
                                    Technical articles, software engineering reflections, and practical tutorials.
                                </p>
                            </div>

                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                            >
                                <span>Read All Articles</span>
                                <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {latestPosts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                {latestPosts.map((post, index) => (
                                    <BlogCard key={post.id} post={post} index={index} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 border border-dashed border-slate-200 dark:border-white/10 rounded-2xl bg-white dark:bg-zinc-900/40">
                                <p className="text-slate-500 dark:text-zinc-500 font-mono text-sm">No articles published yet.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* 7. HIGH-CONVERTING CTA BANNER BEFORE FOOTER */}
                <section className="py-20 bg-white dark:bg-zinc-950 border-t border-slate-200/80 dark:border-white/[0.08]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-zinc-950 text-white overflow-hidden shadow-2xl border border-slate-800">
                            <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

                            <div className="relative z-10 space-y-5">
                                <span className="inline-block text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-blue-300 border border-white/10 uppercase tracking-wider">
                                    Let's collaborate
                                </span>
                                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                                    Have a project in mind or an open role?
                                </h3>
                                <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
                                    Whether you need a dedicated Full Stack Engineer for your team or want to discuss a new software product, my inbox is always open.
                                </p>
                                <div className="pt-3 flex flex-wrap justify-center gap-3">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white text-zinc-950 hover:bg-slate-100 transition-colors shadow-sm"
                                    >
                                        <span>Start a Conversation</span>
                                        <ArrowUpRightIcon className="w-4 h-4" />
                                    </Link>
                                    <a
                                        href={`mailto:${email}`}
                                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium bg-white/10 text-white hover:bg-white/20 border border-white/10 transition-colors"
                                    >
                                        <EnvelopeIcon className="w-4 h-4" />
                                        <span className="font-mono">Direct Email</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
