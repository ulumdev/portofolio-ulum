import PublicLayout from '@/Layouts/PublicLayout';
import { Link, router } from '@inertiajs/react';
import { ArrowLeftIcon, ClockIcon } from '@heroicons/react/24/outline';
import { BlogPost, Category, PaginatedData } from '@/types';

interface BlogCategoryProps {
  category: Category;
  posts: PaginatedData<BlogPost>;
}

export default function BlogCategory({ category, posts }: BlogCategoryProps) {
  return (
    <PublicLayout title={`${category.name} - Blog`}>
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-white/80 hover:text-white mb-6"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to All Posts
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
          {category.description && (
            <p className="text-xl text-white/90">{category.description}</p>
          )}
          <p className="text-white/80 mt-2">{posts.total} articles</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {posts.data.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {posts.data.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {post.featured_image ? (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={`/storage/${post. featured_image}`}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                      <span className="text-white text-5xl font-bold">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{new Date(post.created_at). toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        <span>{Math.ceil(post.content.length / 1000)} min read</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {post. excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag. id}
                          className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {posts.last_page > 1 && (
              <div className="flex justify-center space-x-2">
                {Array.from({ length: posts.last_page }, (_, i) => i + 1). map((page) => (
                  <button
                    key={page}
                    onClick={() => router.get(`/blog/category/${category.slug}?page=${page}`)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      page === posts.current_page
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-md">
            <p className="text-xl text-gray-500">No posts in this category yet.</p>
          </div>
        )}
      </div>
    </PublicLayout>
  );
}
