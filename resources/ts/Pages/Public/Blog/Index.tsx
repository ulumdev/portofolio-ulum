

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
//                           <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
//                             {post.title}
//                           </h3>

//                           {/* Excerpt */}
//                           <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 flex-1">
//                             {post. excerpt}
//                           </p>







import PublicLayout from "@/Layouts/PublicLayout";
import { router, useForm } from "@inertiajs/react";
import { SparklesIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { BlogPost, Category, PaginatedData } from "@/types";
import SectionHero from "@/Components/Public/UI/SectionHero";

// Import Custom Components
import BlogSidebar from "@/Components/Public/UI/BlogSidebar";
import BlogCard from "@/Components/Public/UI/BlogCard";

interface BlogIndexProps {
    posts: PaginatedData<BlogPost>;
    categories: Category[];
    filters: {
        search?: string;
    };
}

export default function BlogIndex({
    posts,
    categories,
    filters,
}: BlogIndexProps) {
    // State with useForm for simpler submission
    const { data, setData } = useForm({
        search: filters.search || "",
    });

    // Dummy tags because backend doesn't provide them dynamically yet
    const dummyTags: any[] = [
        { id: 1, name: "React", slug: "react" },
        { id: 2, name: "Laravel", slug: "laravel" },
        { id: 3, name: "TypeScript", slug: "typescript" },
        { id: 4, name: "Tailwind", slug: "tailwind" },
        { id: 5, name: "JavaScript", slug: "javascript" },
        { id: 6, name: "PHP", slug: "php" },
    ];

    return (
        <PublicLayout title="Blog">
            <div className="dark bg-slate-900 min-h-screen text-slate-300 font-sans">
                {/* Hero Header */}
                <SectionHero
                    title="Thoughts &"
                    gradientWord="Insights"
                    subtitle="Articles, tutorials, and thoughts on web development, design, and technology"
                    badgeText="Blog"
                    badgeIcon={<SparklesIcon className="w-4 h-4" />}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Sidebar */}
                        <BlogSidebar
                            categories={categories}
                            popularTags={dummyTags}
                            totalPosts={posts.total}
                            currentSearch={filters.search}
                        />

                        {/* Posts Grid */}
                        <div className="lg:col-span-3">
                            {posts.data.length > 0 ? (
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
                                                        `/blog?page=${posts.current_page - 1
                                                        }&search=${data.search}`
                                                    )
                                                }
                                                disabled={posts.current_page === 1}
                                                className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                            >
                                                Previous
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
                                                                    `/blog?page=1&search=${data.search}`
                                                                )
                                                            }
                                                            className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                                        >
                                                            1
                                                        </button>
                                                    );
                                                    if (startPage > 2) {
                                                        pages.push(
                                                            <span
                                                                key="dots-start"
                                                                className="text-gray-500 dark:text-gray-400"
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
                                                                    `/blog?page=${page}&search=${data.search}`
                                                                )
                                                            }
                                                            className={`px-4 py-2 rounded-lg font-medium transition-all ${page ===
                                                                posts.current_page
                                                                ? "bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 text-white shadow-lg scale-110"
                                                                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
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
                                                                className="text-gray-500 dark:text-gray-400"
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
                                                                    `/blog?page=${posts.last_page}&search=${data.search}`
                                                                )
                                                            }
                                                            className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
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
                                                        `/blog?page=${posts.current_page + 1
                                                        }&search=${data.search}`
                                                    )
                                                }
                                                disabled={
                                                    posts.current_page ===
                                                    posts.last_page
                                                }
                                                className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                            >
                                                Next
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="text-center py-20 animate-fade-in-up bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                                    <div className="inline-block p-8 bg-gray-100 dark:bg-gray-900 rounded-full mb-6">
                                        <MagnifyingGlassIcon className="w-16 h-16 text-gray-400 dark:text-gray-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        No blog posts found
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                                        {filters.search
                                            ? "Try adjusting your search terms"
                                            : "Check back later for new content"}
                                    </p>
                                    {filters.search && (
                                        <button
                                            onClick={() => {
                                                setData("search", "");
                                                router.get("/blog");
                                            }}
                                            className="px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors font-medium"
                                        >
                                            Clear Search
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div >
            </div>
        </PublicLayout >
    );
}
