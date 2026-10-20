import PublicLayout from "@/Layouts/PublicLayout";
import { Link, router } from "@inertiajs/react";
import {
    ArrowLeftIcon,
    FolderIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    SparklesIcon,
} from "@heroicons/react/24/outline";
import { BlogPost, Category, PaginatedData } from "@/types";
import BlogCard from "@/Components/Public/UI/BlogCard";
import SectionHero from "@/Components/Public/UI/SectionHero";

interface BlogCategoryProps {
    category: Category;
    posts: PaginatedData<BlogPost>;
}

export default function BlogCategory({ category, posts }: BlogCategoryProps) {
    const handlePageChange = (page: number) => {
        router.get(`/blog/category/${category.slug}?page=${page}`);
    };

    return (
        <PublicLayout title={`Category: ${category.name}`}>
            <div className="w-full pb-24">
                {/* Back button */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white group transition-colors"
                    >
                        <ArrowLeftIcon className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
                        <span>All Journal Articles</span>
                    </Link>
                </div>

                {/* Hero Header */}
                <SectionHero
                    badgeText={`${posts.total} ${posts.total === 1 ? "Article" : "Articles"}`}
                    badgeIcon={<FolderIcon className="w-4 h-4" />}
                    title="Category:"
                    gradientWord={category.name}
                    subtitle={category.description || `Collection of articles discussing ${category.name}.`}
                />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {posts.data.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                                {posts.data.map((post, index) => (
                                    <BlogCard key={post.id} post={post} index={index} />
                                ))}
                            </div>

                            {/* Pagination */}
                            {posts.last_page > 1 && (
                                <div className="flex justify-center items-center gap-2 pt-6">
                                    <button
                                        onClick={() => handlePageChange(posts.current_page - 1)}
                                        disabled={posts.current_page === 1}
                                        className="p-2 rounded-xl font-medium bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/[0.08] hover:bg-slate-50 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                        aria-label="Previous page"
                                    >
                                        <ChevronLeftIcon className="w-4 h-4" />
                                    </button>

                                    {Array.from({ length: posts.last_page }, (_, i) => i + 1)
                                        .filter(
                                            (page) =>
                                                page === 1 ||
                                                page === posts.last_page ||
                                                Math.abs(page - posts.current_page) <= 1
                                        )
                                        .map((page, idx, array) => {
                                            const prev = array[idx - 1];
                                            return (
                                                <div key={page} className="flex items-center gap-2">
                                                    {prev && page - prev > 1 && (
                                                        <span className="text-slate-400 dark:text-zinc-600 px-1 font-mono text-xs">
                                                            ...
                                                        </span>
                                                    )}
                                                    <button
                                                        onClick={() => handlePageChange(page)}
                                                        className={`w-9 h-9 rounded-xl text-xs font-mono font-medium transition-all ${
                                                            page === posts.current_page
                                                                ? "bg-slate-900 text-white dark:bg-white dark:text-zinc-950 font-bold shadow-sm"
                                                                : "bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/[0.08] hover:bg-slate-50 dark:hover:bg-zinc-800"
                                                        }`}
                                                    >
                                                        {page}
                                                    </button>
                                                </div>
                                            );
                                        })}

                                    <button
                                        onClick={() => handlePageChange(posts.current_page + 1)}
                                        disabled={posts.current_page === posts.last_page}
                                        className="p-2 rounded-xl font-medium bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/[0.08] hover:bg-slate-50 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                        aria-label="Next page"
                                    >
                                        <ChevronRightIcon className="w-4 h-4" />
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-20 border border-dashed border-slate-200 dark:border-white/10 rounded-2xl bg-white dark:bg-zinc-900/40">
                            <SparklesIcon className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                            <p className="text-slate-600 dark:text-zinc-400 font-mono text-sm mb-4">
                                No articles in this category yet.
                            </p>
                            <Link
                                href="/blog"
                                className="px-4 py-2 rounded-full text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-slate-800 dark:hover:bg-zinc-100 transition-colors"
                            >
                                Browse All Articles
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}
