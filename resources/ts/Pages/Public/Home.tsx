// import PublicLayout from '@/Layouts/PublicLayout';
// import { Link } from '@inertiajs/react';
// import { ArrowRightIcon, CodeBracketIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
// import { Project, BlogPost } from '@/types';

// interface HomeProps {
//   featuredProjects: Project[];
//   latestPosts: BlogPost[];
// }

// export default function Home({ featuredProjects, latestPosts }: HomeProps) {
//   return (
//     <PublicLayout title="Home">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
//         <div className="absolute inset-0 bg-black opacity-10"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
//               Hi, I'm <span className="text-primary-200">Your Name</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
//               Full Stack Developer & Designer crafting beautiful digital experiences
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 href="/portofolio"
//                 className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
//               >
//                 View My Work
//                 <ArrowRightIcon className="ml-2 w-5 h-5" />
//               </Link>
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
//               >
//                 Get In Touch
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Projects */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <div className="flex items-center justify-center mb-4">
//               <CodeBracketIcon className="w-8 h-8 text-primary-600 mr-2" />
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//                 Featured Projects
//               </h2>
//             </div>
//             <p className="text-gray-600 text-lg">
//               Some of my recent work
//             </p>
//           </div>

//           {featuredProjects.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {featuredProjects.map((project) => (
//                 <Link
//                   key={project.id}
//                   href={`/portofolio/${project.slug}`}
//                   className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
//                 >
//                   {project.featured_image ?  (
//                     <div className="relative h-48 overflow-hidden">
//                       <img
//                         src={`/storage/${project.featured_image}`}
//                         alt={project.title}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                       />
//                     </div>
//                   ) : (
//                     <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
//                       <span className="text-white text-4xl font-bold">
//                         {project.title.charAt(0)}
//                       </span>
//                     </div>
//                   )}
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
//                       {project.title}
//                     </h3>
//                     <p className="text-gray-600 mb-4 line-clamp-2">
//                       {project.description}
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       {project.skills.slice(0, 3).map((skill) => (
//                         <span
//                           key={skill. id}
//                           className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full"
//                         >
//                           {skill.name}
//                         </span>
//                       ))}
//                       {project.skills.length > 3 && (
//                         <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
//                           +{project.skills.length - 3}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-gray-500">No projects yet. </p>
//           )}

//           <div className="text-center mt-12">
//             <Link
//               href="/portofolio"
//               className="inline-flex items-center text-primary-600 hover:text-primary-800 font-semibold"
//             >
//               View All Projects
//               <ArrowRightIcon className="ml-2 w-5 h-5" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Latest Blog Posts */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <div className="flex items-center justify-center mb-4">
//               <DocumentTextIcon className="w-8 h-8 text-primary-600 mr-2" />
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//                 Latest Articles
//               </h2>
//             </div>
//             <p className="text-gray-600 text-lg">
//               Thoughts, tutorials, and insights
//             </p>
//           </div>

//           {latestPosts.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {latestPosts.map((post) => (
//                 <Link
//                   key={post.id}
//                   href={`/blog/${post.slug}`}
//                   className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
//                 >
//                   {post.featured_image ? (
//                     <div className="relative h-48 overflow-hidden">
//                       <img
//                         src={`/storage/${post.featured_image}`}
//                         alt={post.title}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                       />
//                     </div>
//                   ) : (
//                     <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
//                       <span className="text-white text-4xl font-bold">
//                         {post.title.charAt(0)}
//                       </span>
//                     </div>
//                   )}
//                   <div className="p-6">
//                     <div className="flex items-center text-sm text-gray-500 mb-2">
//                       <span className="text-primary-600 font-medium">
//                         {post.category. name}
//                       </span>
//                       <span className="mx-2">•</span>
//                       <span>{new Date(post.created_at).toLocaleDateString()}</span>
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
//                       {post.title}
//                     </h3>
//                     <p className="text-gray-600 line-clamp-3">
//                       {post.excerpt}
//                     </p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-gray-500">No blog posts yet.</p>
//           )}

//           <div className="text-center mt-12">
//             <Link
//               href="/blog"
//               className="inline-flex items-center text-primary-600 hover:text-primary-800 font-semibold"
//             >
//               View All Articles
//               <ArrowRightIcon className="ml-2 w-5 h-5" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gray-900 text-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Let's Work Together
//           </h2>
//           <p className="text-xl text-gray-300 mb-8">
//             Have a project in mind? Let's discuss how I can help bring your ideas to life.
//           </p>
//           <Link
//             href="/contact"
//             className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
//           >
//             Get In Touch
//             <ArrowRightIcon className="ml-2 w-5 h-5" />
//           </Link>
//         </div>
//       </section>
//     </PublicLayout>
//   );
// }

import PublicLayout from "@/Layouts/PublicLayout";
import { Link } from "@inertiajs/react";
import {
    ArrowRightIcon,
    CodeBracketIcon,
    DocumentTextIcon,
    SparklesIcon,
    RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { Project, BlogPost } from "@/types";

interface HomeProps {
    featuredProjects: Project[];
    latestPosts: BlogPost[];
}

export default function Home({ featuredProjects, latestPosts }: HomeProps) {
    return (
        <PublicLayout title="Home">
            {/* Hero Section with Glassmorphism */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-300 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-float"></div>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-float"
                        style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                        className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-float"
                        style={{ animationDelay: "2s" }}
                    ></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full mb-6 animate-fade-in-up border border-primary-200 dark:border-primary-800">
                        <SparklesIcon className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Welcome to my portfolio
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1
                        className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <span className="text-gray-900 dark:text-white">
                            Hi, I'm{" "}
                        </span>
                        <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 dark:from-primary-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                            Your Name
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
                        style={{ animationDelay: "0.2s" }}
                    >
                        Full Stack Developer & Designer crafting beautiful
                        digital experiences with modern technologies
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
                        style={{ animationDelay: "0.3s" }}
                    >
                        <Link
                            href="/portofolio"
                            className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 dark:from-primary-500 dark:to-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                        >
                            <RocketLaunchIcon className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                            View My Work
                            <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Get In Touch
                        </Link>
                    </div>

                    {/* Stats */}
                    <div
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up"
                        style={{ animationDelay: "0.4s" }}
                    >
                        {[
                            {
                                label: "Projects",
                                value: featuredProjects.length + "+",
                            },
                            {
                                label: "Blog Posts",
                                value: latestPosts.length + "+",
                            },
                            { label: "Years Exp", value: "5+" },
                            { label: "Happy Clients", value: "20+" },
                        ].map((stat, index) => (
                            <div key={index} className="group">
                                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 transform group-hover:scale-105">
                                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

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
                                    <article
                                        key={project.id}
                                        className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 transform hover:-translate-y-3 animate-fade-in-up"
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
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
                                        </div>

                                        {/* Project Info */}
                                        <div className="p-6">
                                            {/* Title - Clickable */}
                                            <Link
                                                href={`/portofolio/${project.slug}`}
                                                className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors line-clamp-1 block"
                                            >
                                                {project.title}
                                            </Link>

                                            {/* Description */}
                                            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                                {project.description}
                                            </p>

                                            {/* Skills Tags */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.skills
                                                    .slice(0, 3)
                                                    .map((skill) => (
                                                        <span
                                                            key={skill.id}
                                                            className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-400 rounded-full"
                                                        >
                                                            {skill.name}
                                                        </span>
                                                    ))}
                                                {project.skills.length > 3 && (
                                                    <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
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
                                                <ArrowRightIcon className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* View All Button */}
                            <div className="text-center mt-12 animate-fade-in-up">
                                <Link
                                    href="/portofolio"
                                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-semibold text-lg group"
                                >
                                    View All Projects
                                    <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </>
                    ) : (
                        <p className="text-center text-gray-500 dark:text-gray-400">
                            No projects yet.{" "}
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
                                    <article
                                        key={post.id}
                                        className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 transform hover:-translate-y-3 h-full flex flex-col animate-fade-in-up"
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                        }}
                                    >
                                        {/* Post Image */}
                                        <div className="relative h-52 overflow-hidden">
                                            {post.featured_image ? (
                                                <>
                                                    <img
                                                        src={`/storage/${post.featured_image}`}
                                                        alt={post.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                </>
                                            ) : (
                                                <div className="h-full bg-gradient-to-br from-green-400 via-blue-500 to-purple-500 flex items-center justify-center relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-black/10"></div>
                                                    <span className="text-white text-6xl font-bold relative z-10 group-hover:scale-110 transition-transform duration-500">
                                                        {post.title.charAt(0)}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Post Content */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            {/* Meta */}
                                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-400 rounded-full text-xs font-medium">
                                                    {post.category.name}
                                                </span>
                                                <span className="mx-2">•</span>
                                                <span>
                                                    {new Date(
                                                        post.created_at
                                                    ).toLocaleDateString()}
                                                </span>
                                            </div>

                                            {/* Title - Clickable */}
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors line-clamp-2 block"
                                            >
                                                {post.title}
                                            </Link>

                                            {/* Excerpt */}
                                            <p className="text-gray-600 dark:text-gray-400 line-clamp-3 flex-1 mb-4">
                                                {post.excerpt}
                                            </p>

                                            {/* Read More Button - Clickable */}
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-primary-600 dark:bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors group/btn"
                                            >
                                                Read Article
                                                <ArrowRightIcon className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* View All Button */}
                            <div className="text-center mt-12 animate-fade-in-up">
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-semibold text-lg group"
                                >
                                    View All Articles
                                    <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </>
                    ) : (
                        <p className="text-center text-gray-500 dark:text-gray-400">
                            No blog posts yet.
                        </p>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 dark:from-primary-900 dark:via-purple-900 dark:to-pink-900"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
                        Let's Work Together
                    </h2>
                    <p
                        className="text-xl text-white/90 mb-8 animate-fade-in-up"
                        style={{ animationDelay: "0.1s" }}
                    >
                        Have a project in mind? Let's discuss how I can help
                        bring your ideas to life.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                        style={{ animationDelay: "0.2s" }}
                    >
                        Get In Touch
                        <ArrowRightIcon className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </PublicLayout>
    );
}
