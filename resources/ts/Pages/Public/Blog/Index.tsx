

// export default function BlogIndex({ posts, categories, filters }: BlogIndexProps) {
//   const { data, setData, get } = useForm({
//     search: filters.search || '',
//   });

//   const handleSearch: FormEventHandler = (e) => {
//     e.preventDefault();
//     get('/blog', { preserveState: true });
//   };








// export default function BlogIndex({ posts, categories, filters }: BlogIndexProps) {
//   const { data, setData, get } = useForm({
//     search: filters.search || '',
//   });

//   const handleSearch: FormEventHandler = (e) => {
//     e.preventDefault();
//     get('/blog', { preserveState: true });
//   };









//                           {/* Title */}
//                           <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
//                             {post.title}
//                           </h3>

//                           {/* Excerpt */}
//                           <p className="text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 flex-1">
//                             {post. excerpt}
//                           </p>







import PublicLayout from "@/Layouts/PublicLayout";
import { router } from "@inertiajs/react";
import { SparklesIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { BlogPost, PaginatedData, PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import SectionHero from "@/Components/Public/UI/SectionHero";
import BlogCard from "@/Components/Public/UI/BlogCard";

interface BlogIndexProps {
    posts: PaginatedData<BlogPost>;
}

export default function BlogIndex({ posts }: BlogIndexProps) {

    return (
        <PublicLayout title="Blog">
            <div className="w-full">
                {/* Header / Hero Section */}
                <SectionHero
                    title={(usePage<PageProps>().props.settings as any).blog_hero_title || "Thoughts &"}
                    gradientWord={(usePage<PageProps>().props.settings as any).blog_hero_gradient || "Insights"}
                    subtitle={(usePage<PageProps>().props.settings as any).blog_hero_subtitle || "Articles, tutorials, and thoughts on web development, design, and technology"}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div>
                        {/* Posts Grid */}
                        <div>
                            {posts.data.length > 0 ? (
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                        {posts.data.map((post, index) => (
                                            <BlogCard key={post.id} post={post} index={index} />
                                        ))}
                                    </div>

                                    {/* Pagination */}
                                    {posts.last_page > 1 && (
                                        <div className="flex justify-center items-center space-x-2 animate-fade-in-up">
                                            {/* Previous Button */}
                                            <button
                                                onClick={() =>
                                                    router.get(
                                                        `/blog?page=${posts.current_page - 1}`
                                                    )
                                                }
                                                disabled={posts.current_page === 1}
                                                className="p-2 rounded-lg font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                            >
                                                <ChevronLeftIcon className="w-5 h-5" />
                                            </button>

                                            {/* Page Numbers */}
                                            {(() => {
                                                const maxVisible = 5;
                                                const pages = [];
                                                let startPage = Math.max(
                                                    1,
                                                    posts.current_page -
                                                    Math.floor(maxVisible / 2)
                                                );
                                                let endPage = Math.min(
                                                    posts.last_page,
                                                    startPage + maxVisible - 1
                                                );

                                                if (
                                                    endPage - startPage + 1 <
                                                    maxVisible
                                                ) {
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
                                                                router.get(
                                                                    `/blog?page=1`
                                                                )
                                                            }
                                                            className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                                                        >
                                                            1
                                                        </button>
                                                    );
                                                    if (startPage > 2) {
                                                        pages.push(
                                                            <span
                                                                key="dots-start"
                                                                className="text-slate-500 dark:text-slate-400"
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
                                                                router.get(
                                                                    `/blog?page=${page}`
                                                                )
                                                            }
                                                            className={`px-4 py-2 rounded-lg font-medium transition-all ${page ===
                                                                posts.current_page
                                                                ? "bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white shadow-lg scale-110"
                                                                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                                                                }`}
                                                        >
                                                            {page}
                                                        </button>
                                                    );
                                                }

                                                // Last page
                                                if (endPage < posts.last_page) {
                                                    if (
                                                        endPage <
                                                        posts.last_page - 1
                                                    ) {
                                                        pages.push(
                                                            <span
                                                                key="dots-end"
                                                                className="text-slate-500 dark:text-slate-400"
                                                            >
                                                                ...
                                                            </span>
                                                        );
                                                    }
                                                    pages.push(
                                                        <button
                                                            key={posts.last_page}
                                                            onClick={() =>
                                                                router.get(
                                                                    `/blog?page=${posts.last_page}`
                                                                )
                                                            }
                                                            className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                                                        >
                                                            {posts.last_page}
                                                        </button>
                                                    );
                                                }

                                                return pages;
                                            })()}

                                            {/* Next Button */}
                                            <button
                                                onClick={() =>
                                                    router.get(
                                                        `/blog?page=${posts.current_page + 1}`
                                                    )
                                                }
                                                disabled={
                                                    posts.current_page ===
                                                    posts.last_page
                                                }
                                                className="p-2 rounded-lg font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                            >
                                                <ChevronRightIcon className="w-5 h-5" />
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="text-center py-20 animate-fade-in-up bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
                                    <div className="inline-block p-8 bg-slate-100 dark:bg-slate-900 rounded-full mb-6">
                                        <SparklesIcon className="w-16 h-16 text-slate-400 dark:text-slate-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                        No blog posts found
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                                        Check back later for new content
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div >
            </div>
        </PublicLayout >
    );
}
