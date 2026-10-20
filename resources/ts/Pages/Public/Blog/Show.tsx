import PublicLayout from "@/Layouts/PublicLayout";
import { Link, Head } from "@inertiajs/react";
import {
    ArrowLeftIcon,
    ClockIcon,
    EyeIcon,
    CalendarIcon,
} from "@heroicons/react/24/outline";
import DOMPurify from "dompurify";
import { BlogPost } from "@/types";
import BlogCard from "@/Components/Public/UI/BlogCard";

interface BlogShowProps {
    post: BlogPost;
    relatedPosts: BlogPost[];
}

export default function BlogShow({ post, relatedPosts = [] }: BlogShowProps) {
    const displayDate = post.published_at || post.created_at;
    const formattedDate = new Date(displayDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const words = (post.content || "").replace(/<[^>]+>/g, "").split(/\s+/).length;
    const readTime = Math.max(1, Math.ceil(words / 200));

    return (
        <PublicLayout title={post.meta_title || post.title}>
            <Head>
                {post.meta_description && (
                    <meta name="description" content={post.meta_description} />
                )}
            </Head>

            <div className="w-full pb-24">
                {/* Header / Hero */}
                <section className="relative overflow-hidden pt-6 pb-12 md:pt-10 md:pb-16 border-b border-slate-200/80 dark:border-white/[0.08] bg-white dark:bg-zinc-950">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/[0.08] blur-[120px] rounded-full pointer-events-none -z-10" />

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Top Bar: Back & Category */}
                        <div className="flex items-center justify-between gap-4 mb-8">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white group transition-colors"
                            >
                                <ArrowLeftIcon className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
                                <span>Back to Journal</span>
                            </Link>

                            {post.category && (
                                <Link
                                    href={`/blog/category/${post.category.slug}`}
                                    className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                                >
                                    #{post.category.name}
                                </Link>
                            )}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2] mb-6">
                            {post.title}
                        </h1>

                        {/* Meta information */}
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-500 dark:text-zinc-400 pt-2 border-t border-slate-100 dark:border-white/[0.06]">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">
                                    {(post.user?.name || "U").charAt(0)}
                                </div>
                                <span className="font-sans font-medium text-slate-700 dark:text-zinc-300">
                                    {post.user?.name || "Moh. Bahrul Ulum"}
                                </span>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <CalendarIcon className="w-3.5 h-3.5" />
                                <span>{formattedDate}</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <ClockIcon className="w-3.5 h-3.5" />
                                <span>{readTime} min read</span>
                            </div>

                            {post.views !== undefined && (
                                <div className="flex items-center gap-1.5">
                                    <EyeIcon className="w-3.5 h-3.5" />
                                    <span>{post.views.toLocaleString()} views</span>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Main Content Area */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                    {/* Featured Image */}
                    {post.featured_image && (
                        <div className="mb-12 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/[0.08] shadow-xl bg-slate-100 dark:bg-zinc-900">
                            <img
                                src={`/storage/${post.featured_image}`}
                                alt={post.title}
                                className="w-full h-auto max-h-[500px] object-cover"
                            />
                        </div>
                    )}

                    {/* Article Body */}
                    <article className="prose prose-slate dark:prose-invert max-w-none text-base sm:text-lg leading-relaxed mb-14">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(post.content),
                            }}
                        />
                    </article>

                    {/* Tags Cloud */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="pt-8 pb-10 border-t border-slate-200/80 dark:border-white/[0.08]">
                            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-500 mb-3 font-semibold">
                                Related Topics
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <Link
                                        key={tag.id}
                                        href={`/blog/tag/${tag.slug}`}
                                        className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-zinc-300 border border-slate-200/60 dark:border-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/[0.1] transition-colors"
                                    >
                                        #{tag.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Related Articles */}
                    {relatedPosts && relatedPosts.length > 0 && (
                        <div className="pt-12 border-t border-slate-200/80 dark:border-white/[0.08]">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                                    Related Articles
                                </h3>
                                <Link
                                    href="/blog"
                                    className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    All Articles →
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {relatedPosts.map((relatedPost, index) => (
                                    <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}
