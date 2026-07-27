
// interface BlogShowProps {
//   post: BlogPost;
//   relatedPosts: BlogPost[];
// }



//           <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>








import PublicLayout from '@/Layouts/PublicLayout';
import { Link } from '@inertiajs/react';
import {
  ArrowLeftIcon,
  ClockIcon,
  EyeIcon,
  CalendarIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import DOMPurify from 'dompurify';
import { BlogPost } from '@/types';
import BlogCard from '@/Components/Public/UI/BlogCard';

interface BlogShowProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogShow({ post, relatedPosts }: BlogShowProps) {
  return (
    <PublicLayout title={post.title}>
      <div className="w-full">
        {/* Hero Header */}
        <section className="relative bg-white dark:bg-slate-900 text-slate-900 dark:text-white pt-24 pb-16 overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="flex items-center justify-between mb-8 animate-fade-in-up">
              <Link
                href="/blog"
                className="inline-flex items-center text-white/80 hover:text-white group transition-colors"
              >
                <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>

              <Link
                href={`/blog/category/${post.category.slug}`}
                className="inline-block px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white text-sm font-medium rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                style={{ animationDelay: '0.1s' }}
              >
                {post.category.name}
              </Link>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in-up text-slate-900 dark:text-white" style={{ animationDelay: '0.2s' }}>
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-white/80 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center">
                <UserIcon className="w-5 h-5 mr-2" />
                <span>{(post as any).user?.name || "Moh. Bahrul 'Ulum"}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2" />
                <span>
                  {new Date(post.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-5 h-5 mr-2" />
                <span>{Math.ceil(post.content.length / 1000)} min read</span>
              </div>
              {post.views !== undefined && (
                <div className="flex items-center">
                  <EyeIcon className="w-5 h-5 mr-2" />
                  <span>{post.views.toLocaleString()} views</span>
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Featured Image */}
          {post.featured_image && (
            <div className="mb-12 animate-fade-in-up">
              <div className="rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl border border-slate-200 dark:border-slate-800">
                <img
                  src={`/storage/${post.featured_image}`}
                  alt={post.title}
                  className="w-full h-auto hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          )}

          {/* Share & Actions */}
          {/* <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-200 dark:border-slate-800 animate-fade-in-up">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              <HeartIcon className="w-5 h-5 text-red-500" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">Like</span>
            </button>
            <button 
              onClick={handleShare}
              className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              <ShareIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">Share</span>
            </button>
          </div>
        </div> */}

          {/* Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none mb-12 animate-fade-in-up">
            <div
              className="text-slate-800 dark:text-slate-300 leading-relaxed text-lg marker:text-slate-500"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
            />
          </article>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mb-12 pb-12 border-b border-slate-200 dark:border-slate-800 animate-fade-in-up">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                    <Link
                      key={tag.id}
                      href={`/blog/tag/${tag.slug}`}
                      className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all font-medium border border-blue-200 dark:border-blue-800 transform hover:scale-105"
                    >
                    #{tag.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Posts */}
          {relatedPosts && relatedPosts.length > 0 && (
            <div className="animate-fade-in-up">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                <span className="w-2 h-8 bg-blue-600 dark:bg-blue-500 rounded-full mr-4"></span>
                Related Articles
              </h3>
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