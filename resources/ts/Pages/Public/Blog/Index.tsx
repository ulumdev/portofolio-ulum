import { useState, FormEventHandler } from "react";
import PublicLayout from "@/Layouts/PublicLayout";
import { router, usePage } from "@inertiajs/react";
import {
    MagnifyingGlassIcon,
    SparklesIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    BookOpenIcon,
} from "@heroicons/react/24/outline";
import { BlogPost, PaginatedData, PageProps } from "@/types";
import SectionHero from "@/Components/Public/UI/SectionHero";
import BlogCard from "@/Components/Public/UI/BlogCard";

interface BlogIndexProps {
    posts: PaginatedData<BlogPost>;
    filters?: {
        search?: string;
    };
}

export default function BlogIndex({
    posts,
    filters = {},
}: BlogIndexProps) {
    const { settings } = usePage<PageProps>().props;
    const [searchQuery, setSearchQuery] = useState(filters.search || "");

    const handleSearch: FormEventHandler = (e) => {
        e.preventDefault();
        router.get(
            "/blog",
            searchQuery ? { search: searchQuery } : {},
            { preserveState: true, preserveScroll: true }
        );
    };

    const handlePageChange = (page: number) => {
        const params: Record<string, string> = { page: page.toString() };
        if (filters.search) {
            params.search = filters.search;
        }
        router.get("/blog", params);
    };

    return (
        <PublicLayout title="Blog">
            <div className="w-full pb-24">
                {/* Hero */}
                <SectionHero
                    badgeText="Engineering Journal"
                    badgeIcon={<BookOpenIcon className="w-4 h-4" />}
                    title={settings.blog_hero_title || "Thoughts &"}
                    gradientWord={settings.blog_hero_gradient || "Insights"}
                    subtitle={
                        settings.blog_hero_subtitle ||
                        "Technical deep dives, architectural decisions, practical tutorials, and software engineering insights."
                    }
                />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Search Bar (Clean without category filters) */}
                    <div className="flex justify-center mb-12">
                        <form onSubmit={handleSearch} className="relative w-full max-w-md">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search articles by title or keyword..."
                                className="w-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/[0.08] focus:border-blue-500 dark:focus:border-blue-400 rounded-full pl-11 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm transition-all"
                            />
                            <MagnifyingGlassIcon className="w-4 h-4 text-slate-400 dark:text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
                        </form>
                    </div>

                    {/* Posts Grid */}
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
                            <p className="text-slate-600 dark:text-zinc-400 font-mono text-sm">
                                No articles found.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}
