// import PublicLayout from '@/Layouts/PublicLayout';
// import { Link, router } from '@inertiajs/react';
// import { ArrowLeftIcon, HashtagIcon } from '@heroicons/react/24/outline';
// import { BlogPost, Tag, PaginatedData } from '@/types';

// interface BlogTagProps {
//   tag: Tag;
//   posts: PaginatedData<BlogPost>;
// }

// export default function BlogTag({ tag, posts }: BlogTagProps) {
//   return (
//     <PublicLayout title={`#${tag.name} - Blog`}>
//       {/* Header */}
//       <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Link
//             href="/blog"
//             className="inline-flex items-center text-white/80 hover:text-white mb-6"
//           >
//             <ArrowLeftIcon className="w-5 h-5 mr-2" />
//             Back to All Posts
//           </Link>
//           <div className="flex items-center mb-4">
//             <HashtagIcon className="w-10 h-10 mr-3" />
//             <h1 className="text-4xl md:text-5xl font-bold">{tag.name}</h1>
//           </div>
//           <p className="text-white/80">{posts.total} articles tagged with #{tag.name}</p>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {posts. data.length > 0 ?  (
//           <>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
//               {posts.data. map((post) => (
//                 <Link
//                   key={post.id}
//                   href={`/blog/${post.slug}`}
//                   className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
//                 >
//                   {post. featured_image ? (
//                     <div className="relative h-48 overflow-hidden">
//                       <img
//                         src={`/storage/${post.featured_image}`}
//                         alt={post.title}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                       />
//                     </div>
//                   ) : (
//                     <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
//                       <span className="text-white text-5xl font-bold">
//                         {post.title. charAt(0)}
//                       </span>
//                     </div>
//                   )}
//                   <div className="p-6">
//                     <div className="flex items-center text-sm text-gray-500 mb-2">
//                       <span className="text-primary-600 font-medium">
//                         {post.category.name}
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

//             {/* Pagination */}
//             {posts.last_page > 1 && (
//               <div className="flex justify-center space-x-2">
//                 {Array.from({ length: posts.last_page }, (_, i) => i + 1). map((page) => (
//                   <button
//                     key={page}
//                     onClick={() => router.get(`/blog/tag/${tag.slug}?page=${page}`)}
//                     className={`px-4 py-2 rounded-lg font-medium transition-colors ${
//                       page === posts.current_page
//                         ? 'bg-primary-600 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {page}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </>
//         ) : (
//           <div className="text-center py-16 bg-white rounded-lg shadow-md">
//             <p className="text-xl text-gray-500">No posts with this tag yet.</p>
//           </div>
//         )}
//       </div>
//     </PublicLayout>
//   );
// }

import PublicLayout from "@/Layouts/PublicLayout";
import { Link, router } from "@inertiajs/react";
import {
    ArrowLeftIcon,
    ClockIcon,
    CalendarIcon,
    HashtagIcon,
    EyeIcon,
} from "@heroicons/react/24/outline";
import { BlogPost, Tag, PaginatedData } from "@/types";

interface BlogTagProps {
    tag: Tag;
    posts: PaginatedData<BlogPost>;
}

export default function BlogTag({ tag, posts }: BlogTagProps) {
    return (
        <PublicLayout title={`#${tag.name} - Blog`}>
            {/* Hero Header */}
            <section className="relative bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 dark:from-green-900 dark:via-teal-900 dark:to-blue-900 text-white py-20 overflow-hidden">
                {/* <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 text-white py-20 overflow-hidden"> */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float"></div>
                    <div
                        className="absolute bottom-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float"
                        style={{ animationDelay: "2s" }}
                    ></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-white/80 hover:text-white mb-8 group transition-colors animate-fade-in-up"
                    >
                        <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to All Posts
                    </Link>

                    <div className="text-center">
                        <div
                            className="inline-flex items-center justify-center mb-6 animate-fade-in-up"
                            style={{ animationDelay: "0. 1s" }}
                        >
                            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
                                <HashtagIcon className="w-12 h-12" />
                            </div>
                        </div>

                        <h1
                            className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up"
                            style={{ animationDelay: "0.2s" }}
                        >
                            #{tag.name}
                        </h1>
                        <div
                            className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30 animate-fade-in-up"
                            style={{ animationDelay: "0.3s" }}
                        >
                            {posts.total}{" "}
                            {posts.total === 1 ? "article" : "articles"} tagged
                            with #{tag.name}
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {posts.data.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {posts.data.map((post, index) => (
                                // <Link
                                //   key={post.id}
                                //   href={`/blog/${post. slug}`}
                                //   className="group animate-fade-in-up"
                                //   style={{ animationDelay: `${index * 0.05}s` }}
                                // >
                                //   <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2 h-full flex flex-col">
                                //     {/* Post Image */}
                                //     <div className="relative h-52 overflow-hidden">
                                //       {post.featured_image ? (
                                //         <>
                                //           <img
                                //             src={`/storage/${post.featured_image}`}
                                //             alt={post.title}
                                //             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                //           />
                                //           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                //         </>
                                //       ) : (
                                //         <div className="h-full bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
                                //           <div className="absolute inset-0 bg-black/10"></div>
                                //           <span className="text-white text-6xl font-bold relative z-10">
                                //             {post.title. charAt(0)}
                                //           </span>
                                //         </div>
                                //       )}

                                //       {/* Category Badge */}
                                //       <div className="absolute top-4 left-4">
                                //         <span className="px-3 py-1 bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400 rounded-full text-xs font-semibold shadow-lg">
                                //           {post.category.name}
                                //         </span>
                                //       </div>
                                //     </div>

                                //     {/* Post Content */}
                                //     <div className="p-6 flex-1 flex flex-col">
                                //       {/* Meta */}
                                //       <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
                                //         <div className="flex items-center">
                                //           <CalendarIcon className="w-4 h-4 mr-1" />
                                //           <span>{new Date(post. created_at).toLocaleDateString()}</span>
                                //         </div>
                                //         <div className="flex items-center">
                                //           <ClockIcon className="w-4 h-4 mr-1" />
                                //           <span>{Math.ceil(post.content.length / 1000)} min</span>
                                //         </div>
                                //       </div>

                                //       {/* Title */}
                                //       <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2 flex-1">
                                //         {post.title}
                                //       </h3>

                                //       {/* Excerpt */}
                                //       <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                                //         {post.excerpt}
                                //       </p>
                                //     </div>
                                //   </article>
                                // </Link>

                                <article
                                    key={post.id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 transform hover:-translate-y-3 h-full flex flex-col animate-fade-in-up"
                                    style={{
                                        animationDelay: `${index * 0.05}s`,
                                    }}
                                >
                                    {/* Post Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        {post.featured_image ? (
                                            <>
                                                <img
                                                    src={`/storage/${post.featured_image}`}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                            </>
                                        ) : (
                                            <div className="h-full bg-gradient-to-br from-green-400 via-teal-500 to-blue-500 flex items-center justify-center relative overflow-hidden">
                                                <div className="absolute inset-0 bg-black/10"></div>
                                                <span className="text-white text-6xl font-bold relative z-10">
                                                    {post.title.charAt(0)}
                                                </span>
                                            </div>
                                        )}

                                        {/* Category Badge - Clickable */}
                                        <div className="absolute top-4 left-4">
                                            <Link
                                                href={`/blog/category/${post.category.slug}`}
                                                className="inline-block px-3 py-1 bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400 rounded-full text-xs font-semibold shadow-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors"
                                            >
                                                {post.category.name}
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Post Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        {/* Meta */}
                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
                                            <div className="flex items-center">
                                                <CalendarIcon className="w-4 h-4 mr-1" />
                                                <span>
                                                    {new Date(
                                                        post.created_at
                                                    ).toLocaleDateString(
                                                        "en-US",
                                                        {
                                                            month: "short",
                                                            day: "numeric",
                                                            year: "numeric",
                                                        }
                                                    )}
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <ClockIcon className="w-4 h-4 mr-1" />
                                                <span>
                                                    {Math.ceil(
                                                        post.content.length /
                                                            1000
                                                    )}{" "}
                                                    min read
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <EyeIcon className="w-4 h-4 mr-1" />
                                                <span>{post.views || 0}</span>
                                            </div>
                                        </div>

                                        {/* Title - Clickable */}
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors line-clamp-2 block"
                                        >
                                            {post.title}
                                        </Link>

                                        {/* Excerpt */}
                                        <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 flex-1">
                                            {(() => {
                                                const text =
                                                    post.excerpt ||
                                                    post.content.substring(
                                                        0,
                                                        150
                                                    ) + "...";
                                                const parser = new DOMParser();
                                                const doc =
                                                    parser.parseFromString(
                                                        text,
                                                        "text/html"
                                                    );
                                                return (
                                                    doc.body.textContent || ""
                                                );
                                            })()}
                                        </p>

                                        {/* Tags - Clickable */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags
                                                .slice(0, 3)
                                                .map((tag) => (
                                                    <Link
                                                        key={tag.id}
                                                        href={`/blog/tag/${tag.slug}`}
                                                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                                                    >
                                                        #{tag.name}
                                                    </Link>
                                                ))}
                                        </div>

                                        {/* Read More - Clickable */}
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800 dark:hover:text-primary-300 group"
                                        >
                                            Read More
                                            <svg
                                                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
                        {posts.last_page > 1 && (
                            <div className="flex justify-center items-center space-x-2 animate-fade-in-up">
                                <button
                                    onClick={() =>
                                        router.get(
                                            `/blog/tag/${tag.slug}?page=${
                                                posts.current_page - 1
                                            }`
                                        )
                                    }
                                    disabled={posts.current_page === 1}
                                    className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    Previous
                                </button>

                                {Array.from(
                                    { length: Math.min(5, posts.last_page) },
                                    (_, i) => i + 1
                                ).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() =>
                                            router.get(
                                                `/blog/tag/${tag.slug}?page=${page}`
                                            )
                                        }
                                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                            page === posts.current_page
                                                ? "bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-500 dark:to-pink-500 text-white shadow-lg scale-110"
                                                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                                        }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    onClick={() =>
                                        router.get(
                                            `/blog/tag/${tag.slug}? page=${
                                                posts.current_page + 1
                                            }`
                                        )
                                    }
                                    disabled={
                                        posts.current_page === posts.last_page
                                    }
                                    className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-up">
                        <div className="inline-block p-8 bg-gray-100 dark:bg-gray-900 rounded-full mb-6">
                            <HashtagIcon className="w-16 h-16 text-gray-400 dark:text-gray-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            No posts with this tag yet
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Explore other tags or browse all posts
                        </p>
                        <Link
                            href="/blog"
                            className="inline-flex items-center px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors font-medium"
                        >
                            Browse All Posts
                        </Link>
                    </div>
                )}
            </div>
        </PublicLayout>
    );
}
