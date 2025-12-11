import ExperienceCard from "@/Components/Public/ExperienceCard";
import PublicLayout from "@/Layouts/PublicLayout";
import { Experience, Settings, Skill } from "@/types";
import {
    SparklesIcon,
    LightBulbIcon,
    CodeBracketIcon,
    RocketLaunchIcon,
    HeartIcon,
} from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

interface AboutProps {
    settings: Settings;
    skills: Skill[];
    experiences: Experience[];
}

export default function About({ settings, skills, experiences }: AboutProps) {
    const stats = [
        { value: "5+", label: "Years Experience" },
        { value: "50+", label: "Projects Completed" },
        { value: "30+", label: "Happy Clients" },
        { value: "100%", label: "Satisfaction" },
    ];

    const socialLinks = [
        {
            name: "GitHub",
            icon: FaGithub,
            url: settings.github_url,
            color: "hover:bg-gray-900 hover:text-white",
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            url: settings.linkedin_url,
            color: "hover:bg-blue-600 hover:text-white",
        },
        {
            name: "Twitter",
            icon: FaTwitter,
            url: settings.twitter_url,
            color: "hover:bg-blue-400 hover:text-white",
        },
        {
            name: "Email",
            icon: FaEnvelope,
            url: settings.email ? `mailto:${settings.email}` : null,
            color: "hover:bg-red-500 hover:text-white",
        },
    ];

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

    // Helper function to get proficiency badge style
    const getProficiencyBadge = (proficiency: string) => {
        const levels = {
            beginner: {
                bg: "bg-blue-100 dark:bg-blue-900/30",
                text: "text-blue-800 dark:text-blue-400",
                border: "border-blue-300 dark:border-blue-700",
                label: "Beginner",
            },
            intermediate: {
                bg: "bg-green-100 dark:bg-green-900/30",
                text: "text-green-800 dark:text-green-400",
                border: "border-green-300 dark:border-green-700",
                label: "Intermediate",
            },
            advanced: {
                bg: "bg-purple-100 dark:bg-purple-900/30",
                text: "text-purple-800 dark:text-purple-400",
                border: "border-purple-300 dark:border-purple-700",
                label: "Advanced",
            },
            expert: {
                bg: "bg-orange-100 dark:bg-orange-900/30",
                text: "text-orange-800 dark:text-orange-400",
                border: "border-orange-300 dark:border-orange-700",
                label: "Expert",
            },
        };

        return (
            levels[proficiency.toLowerCase() as keyof typeof levels] ||
            levels.beginner
        );
    };

    return (
        <PublicLayout title="About">
            {/* Hero Header */}
            <section className="relative bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 dark:from-primary-900 dark:via-purple-900 dark:to-pink-900 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float"></div>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float"
                        style={{ animationDelay: "1.5s" }}
                    ></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in-up border border-white/30">
                        <SparklesIcon className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">
                            Get to know me
                        </span>
                    </div>
                    <h1
                        className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up"
                        style={{ animationDelay: "0.1s" }}
                    >
                        About Me
                    </h1>
                    <p
                        className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up"
                        style={{ animationDelay: "0.2s" }}
                    >
                        Passionate developer crafting digital experiences with
                        code and creativity
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                    {/* Profile Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 animate-fade-in-up">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                                {/* Profile Image */}
                                <div className="relative">
                                    {settings.profile_photo ? (
                                        <img
                                            src={`/storage/${settings.profile_photo}`}
                                            alt="Profile"
                                            className="w-full h-auto"
                                        />
                                    ) : (
                                        <div className="w-full h-80 bg-gradient-to-br from-primary-400 via-purple-500 to-pink-500 flex items-center justify-center">
                                            <span className="text-white text-8xl font-bold">
                                                U
                                            </span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>

                                {/* Profile Info */}
                                <div className="p-6 -mt-20 relative z-10">
                                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            {settings.site_name || "Your Name"}
                                        </h2>
                                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                                            Full Stack Developer
                                        </p>

                                        {/* Social Links */}
                                        <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                            {socialLinks.map((social) => {
                                                const Icon = social.icon;
                                                if (!social.url) return null;
                                                return (
                                                    <a
                                                        key={social.name}
                                                        href={social.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-all duration-300 transform hover:scale-110`}
                                                        aria-label={social.name}
                                                    >
                                                        <Icon className="w-5 h-5" />
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Introduction */}
                        <div
                            className="animate-fade-in-up"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                        <LightBulbIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                        Who Am I?
                                    </h2>
                                </div>
                                <div className="prose prose-lg dark:prose-invert max-w-none">
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                        {settings.site_description ||
                                            "I'm a passionate Full Stack Developer with expertise in building modern web applications. I love creating elegant solutions to complex problems and continuously learning new technologies."}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                        With years of experience in web
                                        development, I've worked on various
                                        projects ranging from small business
                                        websites to large-scale applications. My
                                        focus is on writing clean, maintainable
                                        code and creating intuitive user
                                        experiences.
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        When I'm not coding, you can find me
                                        exploring new technologies, contributing
                                        to open-source projects, or sharing my
                                        knowledge through blog posts and
                                        tutorials.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up"
                            style={{ animationDelay: "0.2s" }}
                        >
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center transform hover:scale-105 transition-all duration-300"
                                >
                                    <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Values/Principles */}
                        <div
                            className="animate-fade-in-up"
                            style={{ animationDelay: "0.3s" }}
                        >
                            <div className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-primary-200 dark:border-gray-700">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                    What I Believe In
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        {
                                            icon: CodeBracketIcon,
                                            title: "Clean Code",
                                            description:
                                                "Writing maintainable and scalable solutions",
                                        },
                                        {
                                            icon: RocketLaunchIcon,
                                            title: "Innovation",
                                            description:
                                                "Always exploring cutting-edge technologies",
                                        },
                                        {
                                            icon: HeartIcon,
                                            title: "Passion",
                                            description:
                                                "Loving what I do and doing what I love",
                                        },
                                    ].map((value, index) => (
                                        <div
                                            key={index}
                                            className="text-center group"
                                        >
                                            <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-4 group-hover:scale-110 transition-transform">
                                                <value.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                                            </div>
                                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                                {value.title}
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                                {value.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Work Experience Section - Add this before Skills Section */}
                {experiences.length > 0 && (
                    <div
                        className="mb-16 animate-fade-in-up"
                        style={{ animationDelay: "0.5s" }}
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Work Experience
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg">
                                My professional journey and career highlights
                            </p>
                        </div>

                        <div className="space-y-6">
                            {experiences.map((experience, index) => (
                                <ExperienceCard
                                    key={experience.id}
                                    experience={experience}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Skills Section */}
                <div
                    className="animate-fade-in-up"
                    style={{ animationDelay: "0.4s" }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Technical Skills
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                            Technologies and tools I work with
                        </p>
                    </div>

                    <div className="space-y-8">
                        {sortedCategories.map(
                            ([category, categorySkills], categoryIndex) => (
                                <div
                                    key={category}
                                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-up"
                                    style={{
                                        animationDelay: `${
                                            0.5 + categoryIndex * 0.1
                                        }s`,
                                    }}
                                >
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                        <span className="w-2 h-8 bg-gradient-to-b from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 rounded-full mr-4"></span>
                                        {category}
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {categorySkills.map((skill) => {
                                            const badge = getProficiencyBadge(
                                                skill.proficiency
                                            );
                                            return (
                                                <div
                                                    key={skill.id}
                                                    className="group bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300"
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                                            {skill.name}
                                                        </span>
                                                        <span
                                                            className={`px-3 py-1 text-xs font-medium rounded-full border ${badge.bg} ${badge.text} ${badge.border}`}
                                                        >
                                                            {badge.label}
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )
                        )}
                    </div>

                    {/* <div className="space-y-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
              <div
                key={category}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${0.5 + categoryIndex * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="w-2 h-8 bg-gradient-to-b from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 rounded-full mr-4"></span>
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categorySkills.map((skill) => {
                    const badge = getProficiencyBadge(skill.proficiency);
                    return (
                      <div
                        key={skill.id}
                        className="group bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className={`px-3 py-1 text-xs font-medium rounded-full border ${badge.bg} ${badge.text} ${badge.border}`}>
                            {badge.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div> */}
                </div>
            </div>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 dark:from-primary-900 dark:via-purple-900 dark:to-pink-900 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <h3 className="text-4xl font-bold text-white mb-6">
                        Let's Create Something Amazing Together
                    </h3>
                    <p className="text-xl text-white/90 mb-8">
                        Ready to start your next project? Let's talk!
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-white text-primary-600 dark:text-primary-700 font-semibold rounded-xl hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                        Get In Touch
                        <RocketLaunchIcon className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </section>
        </PublicLayout>
    );
}
