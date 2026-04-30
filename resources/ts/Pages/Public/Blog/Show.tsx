
// interface BlogShowProps {
//   post: BlogPost;
//   relatedPosts: BlogPost[];
// }



//           <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>








import PublicLayout from '@/Layouts/PublicLayout';
import { Link, useForm } from '@inertiajs/react';
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
  const { data, setData, post: submit, processing, errors, reset } = useForm({
    email: '',
  });

  const handleSubscribe: React.FormEventHandler = (e) => {
    e.preventDefault();
    submit('/subscribe', {
      preserveScroll: true,
      onSuccess: () => reset('email'),
    });
  };

  return (
    <PublicLayout title={post.title}>
      <div className="dark bg-slate-900 min-h-screen text-slate-300 font-sans">
        {/* Hero Header */}
        <section className="relative bg-slate-900 text-white pt-24 pb-16 overflow-hidden border-b border-slate-800">
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
                className="inline-block px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white text-sm font-medium rounded-full hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
                style={{ animationDelay: '0.1s' }}
              >
                {post.category.name}
              </Link>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-white/80 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center">
                <UserIcon className="w-5 h-5 mr-2" />
                <span>Admin</span>
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
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                <img
                  src={`/storage/${post.featured_image}`}
                  alt={post.title}
                  className="w-full h-auto hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          )}

          {/* Share & Actions */}
          {/* <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200 dark:border-gray-800 animate-fade-in-up">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <HeartIcon className="w-5 h-5 text-red-500" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Like</span>
            </button>
            <button 
              onClick={handleShare}
              className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <ShareIcon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Share</span>
            </button>
          </div>
        </div> */}

          {/* Content */}
          <article className="prose prose-lg prose-invert max-w-none mb-12 animate-fade-in-up">
            <div
              className="text-slate-300 leading-relaxed text-lg marker:text-slate-500"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
            />
          </article>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mb-12 pb-12 border-b border-gray-200 dark:border-gray-800 animate-fade-in-up">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <Link
                    key={tag.id}
                    href={`/blog/tag/${tag.slug}`}
                    className="px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-800 dark:text-primary-400 rounded-lg hover:from-primary-200 hover:to-purple-200 dark:hover:from-primary-900/50 dark:hover:to-purple-900/50 transition-all font-medium border border-primary-200 dark:border-primary-800 transform hover:scale-105"
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
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="w-2 h-8 bg-blue-500 rounded-full mr-4"></span>
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

        {/* Newsletter CTA */}
        <section className="bg-slate-900 border-t border-slate-800 py-24 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Want more content like this?
            </h3>
            <p className="text-xl text-slate-400 mb-8">
              Subscribe to get notified about new posts
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <div className="flex-1 text-left relative">
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-3 rounded-lg text-white bg-slate-800 border-2 border-slate-700 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
                {errors.email && (
                  <div className="absolute top-full text-center w-full mt-1 text-sm text-red-400">
                    {errors.email}
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={processing}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-75 shadow-lg shadow-blue-500/30"
              >
                {processing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}