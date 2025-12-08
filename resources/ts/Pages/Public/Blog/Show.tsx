import PublicLayout from '@/Layouts/PublicLayout';
import { Link } from '@inertiajs/react';
import { ArrowLeftIcon, ClockIcon, EyeIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { BlogPost } from '@/types';

interface BlogShowProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogShow({ post, relatedPosts }: BlogShowProps) {
  return (
    <PublicLayout title={post.title}>
      {/* Header */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-300 hover:text-primary-200 mb-6"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>

          {/* Category */}
          <Link
            href={`/blog/category/${post.category.slug}`}
            className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-4 hover:bg-primary-700"
          >
            {post. category.name}
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-gray-300">
            <div className="flex items-center">
              <CalendarIcon className="w-5 h-5 mr-2" />
              {new Date(post.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <div className="flex items-center">
              <ClockIcon className="w-5 h-5 mr-2" />
              {Math.ceil(post.content.length / 1000)} min read
            </div>
            <div className="flex items-center">
              <EyeIcon className="w-5 h-5 mr-2" />
              {post.views.toLocaleString()} views
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Image */}
        {post. featured_image && (
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <img
              src={`/storage/${post.featured_image}`}
              alt={post.title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
            {post.content}
          </div>
        </article>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mb-12 pb-12 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag.id}
                  href={`/blog/tag/${tag.slug}`}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-primary-100 hover:text-primary-800 transition-colors"
                >
                  #{tag.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost. slug}`}
                  className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {relatedPost.featured_image ?  (
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={`/storage/${relatedPost.featured_image}`}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="h-40 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                      <span className="text-white text-3xl font-bold">
                        {relatedPost.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {new Date(relatedPost.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </PublicLayout>
  );
}
