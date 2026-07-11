import { Link } from "@inertiajs/react";
import { ClockIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

// Helper for formatting dates and excerpt
import { getExcerpt } from "@/utils/htmlToText";

interface BlogPost {
    id: number;
    title: string;
    slug: string;
    excerpt?: string;
    content: string;
    published_at?: string;
    created_at?: string;
    category?: {
        name: string;
        slug: string;
    };
    author?: {
        name: string;
    };
    [key: string]: any;
}

interface BlogCardProps {
    post: BlogPost;
    index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
    const formatDate = (dateString?: string) => {
        if (!dateString) return "-";
        return new Date(dateString).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    const displayDate = post.published_at || post.created_at;

    return (
        <article
            className="group relative flex flex-col justify-between p-6 sm:p-8 bg-white dark:bg-[#18181b]/50 backdrop-blur-xl rounded-[2rem] border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10">
                <div className="flex items-center text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-500 mb-5 sm:mb-6 gap-3 sm:gap-4 uppercase tracking-widest">
                    <time dateTime={displayDate || ""} className="flex items-center">
                        <ClockIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" />
                        {formatDate(displayDate)}
                    </time>
                    {post.category && (
                        <div className="flex items-center">
                            <span className="w-1 h-1 bg-slate-300 dark:bg-white/20 rounded-full mr-3 sm:mr-4"></span>
                            <Link
                                href={`/blog/category/${post.category.slug}`}
                                className="text-blue-600 dark:text-blue-400/80 hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
                            >
                                {post.category.name}
                            </Link>
                        </div>
                    )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-3">
                    <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {post.title}
                    </Link>
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 line-clamp-3 text-sm leading-relaxed font-light">
                    {post.excerpt || getExcerpt(post.content)}
                </p>
            </div>

            <div className="relative z-10 pt-5 sm:pt-6 border-t border-slate-100 dark:border-white/5 mt-auto flex items-center justify-between">
                <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-900 flex items-center justify-center text-slate-700 dark:text-white text-xs sm:text-sm font-bold mr-3 border border-slate-100 dark:border-white/10 shadow-inner">
                        {post.author?.name ? post.author.name.charAt(0).toUpperCase() : "U"}
                    </div>
                    <div>
                        <span className="block text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {post.author?.name || "Moh. Bahrul 'Ulum"}
                        </span>
                        <span className="block text-[10px] sm:text-xs text-slate-500 dark:text-slate-500 font-medium tracking-wide">
                            Author
                        </span>
                    </div>
                </div>

                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 dark:text-slate-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black group-hover:border-transparent transition-all duration-300">
                    <ArrowRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
            </div>
        </article>
    );
}
