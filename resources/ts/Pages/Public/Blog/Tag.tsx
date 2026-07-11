
// interface BlogTagProps {
//   tag: Tag;
//   posts: PaginatedData<BlogPost>;
// }




import PublicLayout from "@/Layouts/PublicLayout";
import { Link, router } from "@inertiajs/react";
import {
    ArrowLeftIcon,
    HashtagIcon,
} from "@heroicons/react/24/outline";
import { BlogPost, Tag, PaginatedData } from "@/types";
import BlogCard from "@/Components/Public/UI/BlogCard";
import SectionHero from "@/Components/Public/UI/SectionHero";

interface BlogTagProps {
    tag: Tag;
    posts: PaginatedData<BlogPost>;
}

export default function BlogTag({ tag, posts }: BlogTagProps) {
    return (
        <PublicLayout title={`Tag: ${tag.name}`}>
            <div className="w-full">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 z-20">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-slate-400 hover:text-white mb-2 group transition-colors animate-fade-in-up"
                    >
                        <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to All Posts
                    </Link>
                </div>
                {/* Hero Header */}
                <SectionHero
                    title="Tag:"
                    gradientWord={`#${tag.name}`}
                    badgeText={`${posts.total} ${posts.total === 1 ? "article" : "articles"}`}
                    badgeIcon={<HashtagIcon className="w-4 h-4" />}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                                    <button
                                        onClick={() =>
                                            router.get(
                                                `/blog/tag/${tag.slug}?page=${posts.current_page - 1
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
                                            className={`px-4 py-2 rounded-lg font-medium transition-all ${page === posts.current_page
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
                                                `/blog/tag/${tag.slug}? page=${posts.current_page + 1
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
            </div>
        </PublicLayout>
    );
}
