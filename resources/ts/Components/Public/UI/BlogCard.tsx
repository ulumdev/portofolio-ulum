import { Link } from "@inertiajs/react";
import { ClockIcon } from "@heroicons/react/24/outline";

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
            className="group flex flex-col justify-between p-6 bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-700/50 hover:border-blue-500/30 transform hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div>
                <div className="flex items-center text-sm text-slate-400 mb-4 gap-4">
                    <time dateTime={displayDate || ""} className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1.5 text-slate-500" />
                        {formatDate(displayDate)}
                    </time>
                    {post.category && (
                        <div className="flex items-center">
                            <span className="w-1 h-1 bg-slate-600 rounded-full mr-3"></span>
                            <Link
                                href={`/blog/category/${post.category.slug}`}
                                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                            >
                                {post.category.name}
                            </Link>
                        </div>
                    )}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                </h3>

                <p className="text-slate-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt || getExcerpt(post.content)}
                </p>
            </div>

            <div className="pt-5 border-t border-slate-700 mt-auto flex items-center justify-between">
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-white text-xs font-bold mr-3 border-2 border-slate-700">
                        {post.author?.name ? post.author.name.charAt(0).toUpperCase() : "U"}
                    </div>
                    <div>
                        <span className="block text-sm font-medium text-slate-300">
                            {post.author?.name || "Moh. Bahrul 'Ulum"}
                        </span>
                        <span className="block text-xs text-slate-500">
                            Author
                        </span>
                    </div>
                </div>

                <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center group/link"
                >
                    Read More
                    <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>
        </article>
    );
}
