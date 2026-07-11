
// interface BlogCategoryProps {
//   category: Category;
//   posts: PaginatedData<BlogPost>;
// }




import PublicLayout from "@/Layouts/PublicLayout";
import { Link, router } from "@inertiajs/react";
import {
    ArrowLeftIcon,
    FolderIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { BlogPost, Category, PaginatedData } from "@/types";
import BlogCard from "@/Components/Public/UI/BlogCard";
import SectionHero from "@/Components/Public/UI/SectionHero";

interface BlogCategoryProps {
    category: Category;
    posts: PaginatedData<BlogPost>;
}

export default function BlogCategory({ category, posts }: BlogCategoryProps) {
    return (
        <PublicLayout title={`Category: ${category.name}`}>
            <div className="w-full">
                {/* Navigation */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 z-10 relative">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white group transition-colors animate-fade-in-up"
                    >
                        <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to All Posts
                    </Link>
                </div>
                {/* Hero Header */}
                <SectionHero
                    title="Category:"
                    gradientWord={category.name}
                    subtitle={category.description}
                    badgeText={`${posts.total} ${posts.total === 1 ? "article" : "articles"}`}
                    badgeIcon={<FolderIcon className="w-4 h-4" />}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {posts.data.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {posts.data.map((post, index) => (


                                    //       {/* Title */}
                                    //       <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 flex-1">
                                    //         {post.title}
                                    //       </h3>

                                    //       {/* Excerpt */}
                                    //       <p className="text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
                                    //         {post.excerpt}
                                    //       </p>

                                    <BlogCard key={post.id} post={post} index={index} />
                                ))}
                            </div>

                            {/* Pagination */}
                            {posts.last_page > 1 && (
                                <div className="flex justify-center items-center space-x-2 animate-fade-in-up">
                                    <button
                                        onClick={() =>
                                            router.get(
                                                `/blog/category/${category.slug
                                                }?page=${posts.current_page - 1}`
                                            )
                                        }
                                        disabled={posts.current_page === 1}
                                        className="p-2 rounded-lg font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        <ChevronLeftIcon className="w-5 h-5" />
                                    </button>

                                    {Array.from(
                                        { length: Math.min(5, posts.last_page) },
                                        (_, i) => i + 1
                                    ).map((page) => (
                                        <button
                                            key={page}
                                            onClick={() =>
                                                router.get(
                                                    `/blog/category/${category.slug}?page=${page}`
                                                )
                                            }
                                            className={`px-4 py-2 rounded-lg font-medium transition-all ${page === posts.current_page
                                                ? "bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white shadow-lg scale-110"
                                                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() =>
                                            router.get(
                                                `/blog/category/${category.slug
                                                }?page=${posts.current_page + 1}`
                                            )
                                        }
                                        disabled={
                                            posts.current_page === posts.last_page
                                        }
                                        className="p-2 rounded-lg font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        <ChevronRightIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 animate-fade-in-up">
                            <div className="inline-block p-8 bg-slate-100 dark:bg-slate-900 rounded-full mb-6">
                                <FolderIcon className="w-16 h-16 text-slate-400 dark:text-slate-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                No posts in this category yet
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                Check back later for new content
                            </p>
                            <Link
                                href="/blog"
                                className="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium"
                            >
                                Browse All Posts
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}
