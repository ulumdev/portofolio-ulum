// import PublicLayout from '@/Layouts/PublicLayout';
// import { Link } from '@inertiajs/react';
// import { ArrowLeftIcon, ClockIcon, EyeIcon, CalendarIcon } from '@heroicons/react/24/outline';
// import { BlogPost } from '@/types';

// interface BlogShowProps {
//   post: BlogPost;
//   relatedPosts: BlogPost[];
// }

// export default function BlogShow({ post, relatedPosts }: BlogShowProps) {
//   return (
//     <PublicLayout title={post.title}>
//       {/* Header */}
//       <section className="bg-gray-900 text-white py-12">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Link
//             href="/blog"
//             className="inline-flex items-center text-primary-300 hover:text-primary-200 mb-6"
//           >
//             <ArrowLeftIcon className="w-5 h-5 mr-2" />
//             Back to Blog
//           </Link>

//           {/* Category */}
//           <Link
//             href={`/blog/category/${post.category.slug}`}
//             className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-4 hover:bg-primary-700"
//           >
//             {post. category.name}
//           </Link>

//           <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

//           {/* Meta Info */}
//           <div className="flex flex-wrap items-center gap-4 text-gray-300">
//             <div className="flex items-center">
//               <CalendarIcon className="w-5 h-5 mr-2" />
//               {new Date(post.created_at).toLocaleDateString('en-US', {
//                 year: 'numeric',
//                 month: 'long',
//                 day: 'numeric',
//               })}
//             </div>
//             <div className="flex items-center">
//               <ClockIcon className="w-5 h-5 mr-2" />
//               {Math.ceil(post.content.length / 1000)} min read
//             </div>
//             <div className="flex items-center">
//               <EyeIcon className="w-5 h-5 mr-2" />
//               {post.views.toLocaleString()} views
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Featured Image */}
//         {post. featured_image && (
//           <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
//             <img
//               src={`/storage/${post.featured_image}`}
//               alt={post.title}
//               className="w-full h-auto"
//             />
//           </div>
//         )}

//         {/* Content */}
//         <article className="prose prose-lg max-w-none mb-12">
//           <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
//             {post.content}
//           </div>
//         </article>

//         {/* Tags */}
//         {post.tags.length > 0 && (
//           <div className="mb-12 pb-12 border-b border-gray-200">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
//             <div className="flex flex-wrap gap-2">
//               {post.tags.map((tag) => (
//                 <Link
//                   key={tag.id}
//                   href={`/blog/tag/${tag.slug}`}
//                   className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-primary-100 hover:text-primary-800 transition-colors"
//                 >
//                   #{tag.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Related Posts */}
//         {relatedPosts.length > 0 && (
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {relatedPosts.map((relatedPost) => (
//                 <Link
//                   key={relatedPost.id}
//                   href={`/blog/${relatedPost. slug}`}
//                   className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
//                 >
//                   {relatedPost.featured_image ?  (
//                     <div className="relative h-40 overflow-hidden">
//                       <img
//                         src={`/storage/${relatedPost.featured_image}`}
//                         alt={relatedPost.title}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                       />
//                     </div>
//                   ) : (
//                     <div className="h-40 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
//                       <span className="text-white text-3xl font-bold">
//                         {relatedPost.title.charAt(0)}
//                       </span>
//                     </div>
//                   )}
//                   <div className="p-4">
//                     <h4 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
//                       {relatedPost.title}
//                     </h4>
//                     <p className="text-sm text-gray-500">
//                       {new Date(relatedPost.created_at).toLocaleDateString()}
//                     </p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </PublicLayout>
//   );
// }



import PublicLayout from '@/Layouts/PublicLayout';
import { Link } from '@inertiajs/react';
import { 
  ArrowLeftIcon, 
  ClockIcon, 
  EyeIcon, 
  CalendarIcon,
  UserIcon,
//   ShareIcon,
//   HeartIcon 
} from '@heroicons/react/24/outline';
import { BlogPost } from '@/types';

interface BlogShowProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogShow({ post, relatedPosts }: BlogShowProps) {
//   const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: post.title,
//         text: post.excerpt,
//         url: shareUrl,
//       });
//     }
//   };

  return (
    <PublicLayout title={post.title}>
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white py-16 overflow-hidden">
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
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
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
        <article className="prose prose-lg dark:prose-invert max-w-none mb-12 animate-fade-in-up">
          <div 
            className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
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
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 rounded-full mr-4"></span>
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2 transition-all duration-300 h-full">
                    {relatedPost.featured_image ? (
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={`/storage/${relatedPost.featured_image}`}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="h-44 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                        <span className="text-white text-4xl font-bold">
                          {relatedPost.title.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="p-5">
                      <span className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                        {relatedPost.category.name}
                      </span>
                      <h4 className="font-bold text-gray-900 dark:text-white mt-2 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(relatedPost.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-900 dark:to-purple-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Want more content like this?
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to get notified about new posts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg flex-1 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-2 border-white dark:border-gray-700 focus:outline-none focus:border-white"
            />
            <button className="px-8 py-3 bg-white text-primary-600 dark:text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );    
}