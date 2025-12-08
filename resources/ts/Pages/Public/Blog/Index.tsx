import PublicLayout from '@/Layouts/PublicLayout';
import { Link, router, useForm } from '@inertiajs/react';
import { MagnifyingGlassIcon, ClockIcon } from '@heroicons/react/24/outline';
import { BlogPost, Category, PaginatedData } from '@/types';
import { FormEventHandler } from 'react';
import Input from '@/Components/Common/Input';
import Button from '@/Components/Common/Button';

interface BlogIndexProps {
  posts: PaginatedData<BlogPost>;
  categories: Category[];
  filters: {
    search?: string;
  };
}

export default function BlogIndex({ posts, categories, filters }: BlogIndexProps) {
  const { data, setData, get } = useForm({
    search: filters.search || '',
  });

  const handleSearch: FormEventHandler = (e) => {
    e.preventDefault();
    get('/blog', { preserveState: true });
  };

  return (
    <PublicLayout title="Blog">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-white/90">
            Articles, tutorials, and thoughts on web development
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Search */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Search</h3>
              <form onSubmit={handleSearch} className="space-y-2">
                <Input
                  value={data.search}
                  onChange={(e) => setData('search', e.target.value)}
                  placeholder="Search articles..."
                />
                <Button type="submit" className="w-full">
                  <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </form>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/blog"
                    className="flex items-center justify-between text-gray-700 hover:text-primary-600 py-2"
                  >
                    <span>All Posts</span>
                    <span className="px-2 py-1 text-xs bg-gray-100 rounded-full">
                      {posts.total}
                    </span>
                  </Link>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link
                      href={`/blog/category/${category.slug}`}
                      className="flex items-center justify-between text-gray-700 hover:text-primary-600 py-2"
                    >
                      <span>{category.name}</span>
                      <span className="px-2 py-1 text-xs bg-gray-100 rounded-full">
                        {category.blog_posts_count || 0}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Posts Grid */}
          <div className="lg:col-span-3">
            {posts.data.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {posts.data.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      {post.featured_image ? (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={`/storage/${post.featured_image}`}
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
                          <span className="text-primary-600 font-medium">
                            {post.category.name}
                          </span>
                          <span className="mx-2">•</span>
                          <span>{new Date(post.created_at).toLocaleDateString()}</span>
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
                    {Array.from({ length: posts.last_page }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => router.get(`/blog?page=${page}&search=${data.search}`)}
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
                <MagnifyingGlassIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-500">No blog posts found. </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
