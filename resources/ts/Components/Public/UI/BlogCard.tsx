import { Link } from "@inertiajs/react";
import { ClockIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
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
    user?: {
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

    // Calculate approximate read time
    const words = (post.content || "").replace(/<[^>]+>/g, "").split(/\s+/).length;
    const readTime = Math.max(1, Math.ceil(words / 200));

    const displayDate = post.published_at || post.created_at;

    return (
        <article
            className="group relative flex flex-col justify-between p-6 sm:p-7 bg-white dark:bg-zinc-900/70 border border-slate-200/80 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
            style={{ animationDelay: `${index * 0.08}s` }}
        >
            <div className="relative z-10 flex flex-col flex-grow">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-zinc-500 mb-3.5">
                    <time dateTime={displayDate || ""} className="flex items-center gap-1.5">
                        <ClockIcon className="w-3.5 h-3.5" />
                        <span>{formatDate(displayDate)}</span>
                    </time>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-zinc-400">
                        {readTime} min read
                    </span>
                </div>

                {/* Category Pill */}
                {post.category && (
                    <div className="mb-2.5">
                        <Link
                            href={`/blog/category/${post.category.slug}`}
                            className="inline-block text-[11px] font-mono font-medium text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            #{post.category.name}
                        </Link>
                    </div>
                )}

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 line-clamp-3 leading-relaxed mb-6 font-normal">
                    {post.excerpt || getExcerpt(post.content)}
                </p>
            </div>

            {/* Author & Read More Bar */}
            <div className="relative z-10 pt-4 border-t border-slate-100 dark:border-white/[0.06] mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                        {post.user?.name ? post.user.name.charAt(0).toUpperCase() : "U"}
                    </div>
                    <span className="text-xs font-medium text-slate-700 dark:text-zinc-300">
                        {post.user?.name || "Moh. Bahrul Ulum"}
                    </span>
                </div>

                <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                >
                    <span>Read Article</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
            </div>
        </article>
    );
}
