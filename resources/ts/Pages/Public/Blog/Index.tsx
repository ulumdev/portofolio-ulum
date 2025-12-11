// import PublicLayout from '@/Layouts/PublicLayout';
// import { Link, router, useForm } from '@inertiajs/react';
// import { MagnifyingGlassIcon, ClockIcon } from '@heroicons/react/24/outline';
// import { BlogPost, Category, PaginatedData } from '@/types';
// import { FormEventHandler } from 'react';
// import Input from '@/Components/Common/Input';
// import Button from '@/Components/Common/Button';

// interface BlogIndexProps {
//   posts: PaginatedData<BlogPost>;
//   categories: Category[];
//   filters: {
//     search?: string;
//   };
// }

// export default function BlogIndex({ posts, categories, filters }: BlogIndexProps) {
//   const { data, setData, get } = useForm({
//     search: filters.search || '',
//   });

//   const handleSearch: FormEventHandler = (e) => {
//     e.preventDefault();
//     get('/blog', { preserveState: true });
//   };

//   return (
//     <PublicLayout title="Blog">
//       {/* Header */}
//       <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
//           <p className="text-xl text-white/90">
//             Articles, tutorials, and thoughts on web development
//           </p>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Sidebar */}
//           <aside className="lg:col-span-1">
//             {/* Search */}
//             <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Search</h3>
//               <form onSubmit={handleSearch} className="space-y-2">
//                 <Input
//                   value={data.search}
//                   onChange={(e) => setData('search', e.target.value)}
//                   placeholder="Search articles..."
//                 />
//                 <Button type="submit" className="w-full">
//                   <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
//                   Search
//                 </Button>
//               </form>
//             </div>

//             {/* Categories */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link
//                     href="/blog"
//                     className="flex items-center justify-between text-gray-700 hover:text-primary-600 py-2"
//                   >
//                     <span>All Posts</span>
//                     <span className="px-2 py-1 text-xs bg-gray-100 rounded-full">
//                       {posts.total}
//                     </span>
//                   </Link>
//                 </li>
//                 {categories.map((category) => (
//                   <li key={category.id}>
//                     <Link
//                       href={`/blog/category/${category.slug}`}
//                       className="flex items-center justify-between text-gray-700 hover:text-primary-600 py-2"
//                     >
//                       <span>{category.name}</span>
//                       <span className="px-2 py-1 text-xs bg-gray-100 rounded-full">
//                         {category.blog_posts_count || 0}
//                       </span>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </aside>

//           {/* Posts Grid */}
//           <div className="lg:col-span-3">
//             {posts.data.length > 0 ? (
//               <>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//                   {posts.data.map((post) => (
//                     <Link
//                       key={post.id}
//                       href={`/blog/${post.slug}`}
//                       className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
//                     >
//                       {post.featured_image ? (
//                         <div className="relative h-48 overflow-hidden">
//                           <img
//                             src={`/storage/${post.featured_image}`}
//                             alt={post.title}
//                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                           />
//                         </div>
//                       ) : (
//                         <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
//                           <span className="text-white text-5xl font-bold">
//                             {post.title.charAt(0)}
//                           </span>
//                         </div>
//                       )}
//                       <div className="p-6">
//                         <div className="flex items-center text-sm text-gray-500 mb-2">
//                           <span className="text-primary-600 font-medium">
//                             {post.category.name}
//                           </span>
//                           <span className="mx-2">•</span>
//                           <span>{new Date(post.created_at).toLocaleDateString()}</span>
//                           <span className="mx-2">•</span>
//                           <div className="flex items-center">
//                             <ClockIcon className="w-4 h-4 mr-1" />
//                             <span>{Math.ceil(post.content.length / 1000)} min read</span>
//                           </div>
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
//                           {post.title}
//                         </h3>
//                         <p className="text-gray-600 line-clamp-3 mb-4">
//                           {post. excerpt}
//                         </p>
//                         <div className="flex flex-wrap gap-2">
//                           {post.tags.slice(0, 3).map((tag) => (
//                             <span
//                               key={tag. id}
//                               className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
//                             >
//                               {tag.name}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>

//                 {/* Pagination */}
//                 {posts.last_page > 1 && (
//                   <div className="flex justify-center space-x-2">
//                     {Array.from({ length: posts.last_page }, (_, i) => i + 1).map((page) => (
//                       <button
//                         key={page}
//                         onClick={() => router.get(`/blog?page=${page}&search=${data.search}`)}
//                         className={`px-4 py-2 rounded-lg font-medium transition-colors ${
//                           page === posts.current_page
//                             ? 'bg-primary-600 text-white'
//                             : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }`}
//                       >
//                         {page}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </>
//             ) : (
//               <div className="text-center py-16 bg-white rounded-lg shadow-md">
//                 <MagnifyingGlassIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//                 <p className="text-xl text-gray-500">No blog posts found. </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </PublicLayout>
//   );
// }

// import PublicLayout from '@/Layouts/PublicLayout';
// import { Link, router, useForm } from '@inertiajs/react';
// import {
//   MagnifyingGlassIcon,
//   ClockIcon,
//   EyeIcon,
//   CalendarIcon,
//   SparklesIcon
// } from '@heroicons/react/24/outline';
// import { BlogPost, Category, PaginatedData } from '@/types';
// import { FormEventHandler } from 'react';
// import Input from '@/Components/Common/Input';
// import Button from '@/Components/Common/Button';

// interface BlogIndexProps {
//   posts: PaginatedData<BlogPost>;
//   categories: Category[];
//   filters: {
//     search?: string;
//   };
// }

// export default function BlogIndex({ posts, categories, filters }: BlogIndexProps) {
//   const { data, setData, get } = useForm({
//     search: filters.search || '',
//   });

//   const handleSearch: FormEventHandler = (e) => {
//     e.preventDefault();
//     get('/blog', { preserveState: true });
//   };

//   return (
//     <PublicLayout title="Blog">
//       {/* Hero Header */}
//       <section className="relative bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 dark:from-green-900 dark:via-teal-900 dark:to-blue-900 text-white py-20 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float"></div>
//           <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1. 5s' }}></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
//           <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in-up border border-white/30">
//             <SparklesIcon className="w-4 h-4 mr-2" />
//             <span className="text-sm font-medium">Thoughts & Insights</span>
//           </div>
//           <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
//             Blog
//           </h1>
//           <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
//             Articles, tutorials, and thoughts on web development, design, and technology
//           </p>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
//           {/* Sidebar */}
//           <aside className="lg:col-span-1">
//             <div className="sticky top-24 space-y-6">
//               {/* Search */}
//               <div className="animate-fade-in-up bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
//                 <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
//                   <MagnifyingGlassIcon className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
//                   Search Articles
//                 </h3>
//                 <form onSubmit={handleSearch} className="space-y-3">
//                   <Input
//                     value={data.search}
//                     onChange={(e) => setData('search', e.target.value)}
//                     placeholder="Search..."
//                     className="w-full"
//                   />
//                   <Button type="submit" className="w-full">
//                     Search
//                   </Button>
//                 </form>
//               </div>

//               {/* Categories */}
//               <div className="animate-fade-in-up bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
//                 <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
//                   Categories
//                 </h3>
//                 <ul className="space-y-2">
//                   <li>
//                     <Link
//                       href="/blog"
//                       className="group flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 py-2 px-3 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all"
//                     >
//                       <span className="font-medium">All Posts</span>
//                       <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full group-hover:bg-primary-100 dark:group-hover:bg-primary-900/40 group-hover:text-primary-800 dark:group-hover:text-primary-400 transition-colors">
//                         {posts.total}
//                       </span>
//                     </Link>
//                   </li>
//                   {categories.map((category) => (
//                     <li key={category. id}>
//                       <Link
//                         href={`/blog/category/${category.slug}`}
//                         className="group flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 py-2 px-3 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all"
//                       >
//                         <span className="font-medium">{category.name}</span>
//                         <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full group-hover:bg-primary-100 dark:group-hover:bg-primary-900/40 group-hover:text-primary-800 dark:group-hover:text-primary-400 transition-colors">
//                           {category.blog_posts_count || 0}
//                         </span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Popular Tags */}
//               <div className="animate-fade-in-up bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-primary-200 dark:border-gray-700">
//                 <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
//                   Popular Tags
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   {['React', 'Laravel', 'TypeScript', 'Tailwind', 'JavaScript', 'PHP']. map((tag) => (
//                     <span
//                       key={tag}
//                       className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-800 dark:hover:text-primary-400 cursor-pointer transition-colors border border-gray-200 dark:border-gray-700"
//                     >
//                       #{tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </aside>

//           {/* Posts Grid */}
//           <div className="lg:col-span-3">
//             {posts.data.length > 0 ? (
//               <>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//                   {posts.data.map((post, index) => (
//                     <Link
//                       key={post.id}
//                       href={`/blog/${post.slug}`}
//                       className="group animate-fade-in-up"
//                       style={{ animationDelay: `${index * 0.05}s` }}
//                     >
//                       <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2 h-full flex flex-col">
//                         {/* Post Image */}
//                         <div className="relative h-56 overflow-hidden">
//                           {post.featured_image ?  (
//                             <>
//                               <img
//                                 src={`/storage/${post.featured_image}`}
//                                 alt={post.title}
//                                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                               />
//                               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                             </>
//                           ) : (
//                             <div className="h-full bg-gradient-to-br from-green-400 via-teal-500 to-blue-500 flex items-center justify-center relative overflow-hidden">
//                               <div className="absolute inset-0 bg-black/10"></div>
//                               <span className="text-white text-6xl font-bold relative z-10">
//                                 {post.title. charAt(0)}
//                               </span>
//                             </div>
//                           )}

//                           {/* Category Badge */}
//                           <div className="absolute top-4 left-4">
//                             <Link
//                               href={`/blog/category/${post.category.slug}`}
//                               className="px-3 py-1 bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400 rounded-full text-xs font-semibold shadow-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors"
//                               onClick={(e) => e.stopPropagation()}
//                             >
//                               {post.category.name}
//                             </Link>
//                           </div>
//                         </div>

//                         {/* Post Content */}
//                         <div className="p-6 flex-1 flex flex-col">
//                           {/* Meta */}
//                           <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
//                             <div className="flex items-center">
//                               <CalendarIcon className="w-4 h-4 mr-1" />
//                               <span>{new Date(post. created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
//                             </div>
//                             <div className="flex items-center">
//                               <ClockIcon className="w-4 h-4 mr-1" />
//                               <span>{Math.ceil(post.content.length / 1000)} min read</span>
//                             </div>
//                             <div className="flex items-center">
//                               <EyeIcon className="w-4 h-4 mr-1" />
//                               <span>{post.views}</span>
//                             </div>
//                           </div>

//                           {/* Title */}
//                           <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
//                             {post.title}
//                           </h3>

//                           {/* Excerpt */}
//                           <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 flex-1">
//                             {post. excerpt}
//                           </p>

//                           {/* Tags */}
//                           <div className="flex flex-wrap gap-2 mb-4">
//                             {post.tags.slice(0, 3).map((tag) => (
//                               <span
//                                 key={tag. id}
//                                 className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
//                               >
//                                 #{tag.name}
//                               </span>
//                             ))}
//                           </div>

//                           {/* Read More */}
//                           <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-800 dark:group-hover:text-primary-300">
//                             Read More
//                             <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                             </svg>
//                           </div>
//                         </div>
//                       </article>
//                     </Link>
//                   ))}
//                 </div>

//                 {/* Pagination */}
//                 {posts.last_page > 1 && (
//                   <div className="flex justify-center items-center space-x-2 animate-fade-in-up">
//                     {/* Previous Button */}
//                     <button
//                       onClick={() => router. get(`/blog?page=${posts.current_page - 1}&search=${data.search}`)}
//                       disabled={posts.current_page === 1}
//                       className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                     >
//                       Previous
//                     </button>

//                     {/* Page Numbers */}
//                     {Array.from({ length: Math.min(5, posts.last_page) }, (_, i) => {
//                       const page = i + 1;
//                       return (
//                         <button
//                           key={page}
//                           onClick={() => router.get(`/blog?page=${page}&search=${data.search}`)}
//                           className={`px-4 py-2 rounded-lg font-medium transition-all ${
//                             page === posts.current_page
//                               ? 'bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 text-white shadow-lg scale-110'
//                               : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
//                           }`}
//                         >
//                           {page}
//                         </button>
//                       );
//                     })}

//                     {posts.last_page > 5 && (
//                       <>
//                         <span className="text-gray-500 dark:text-gray-400">...</span>
//                         <button
//                           onClick={() => router.get(`/blog? page=${posts.last_page}&search=${data.search}`)}
//                           className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
//                         >
//                           {posts.last_page}
//                         </button>
//                       </>
//                     )}

//                     {/* Next Button */}
//                     <button
//                       onClick={() => router.get(`/blog?page=${posts.current_page + 1}&search=${data.search}`)}
//                       disabled={posts.current_page === posts.last_page}
//                       className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                     >
//                       Next
//                     </button>
//                   </div>
//                 )}
//               </>
//             ) : (
//               <div className="text-center py-20 animate-fade-in-up bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
//                 <div className="inline-block p-8 bg-gray-100 dark:bg-gray-900 rounded-full mb-6">
//                   <MagnifyingGlassIcon className="w-16 h-16 text-gray-400 dark:text-gray-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
//                   No blog posts found
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400 mb-6">
//                   {filters.search ? 'Try adjusting your search terms' : 'Check back later for new content'}
//                 </p>
//                 {filters.search && (
//                   <button
//                     onClick={() => {
//                       setData('search', '');
//                       router.get('/blog');
//                     }}
//                     className="px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors font-medium"
//                   >
//                     Clear Search
//                   </button>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </PublicLayout>
//   );
// }

import PublicLayout from "@/Layouts/PublicLayout";
import { Link, router, useForm } from "@inertiajs/react";
import {
    MagnifyingGlassIcon,
    ClockIcon,
    EyeIcon,
    CalendarIcon,
    SparklesIcon,
} from "@heroicons/react/24/outline";
import { BlogPost, Category, PaginatedData } from "@/types";
import { FormEventHandler } from "react";
import Input from "@/Components/Common/Input";
import Button from "@/Components/Common/Button";

interface BlogIndexProps {
    posts: PaginatedData<BlogPost>;
    categories: Category[];
    filters: {
        search?: string;
    };
}

export default function BlogIndex({
    posts,
    categories,
    filters,
}: BlogIndexProps) {
    const { data, setData, get } = useForm({
        search: filters.search || "",
    });

    const handleSearch: FormEventHandler = (e) => {
        e.preventDefault();
        get("/blog", { preserveState: true });
    };

    return (
        <PublicLayout title="Blog">
            {/* Hero Header */}
            <section className="relative bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 dark:from-green-900 dark:via-teal-900 dark:to-blue-900 text-white py-20 overflow-hidden">
            {/* <section className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 dark:from-purple-900 dark:via-pink-900 dark:to-red-900 text-white py-20 overflow-hidden"> */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float"></div>
                    <div
                        className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float"
                        style={{ animationDelay: "1. 5s" }}
                    ></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in-up border border-white/30">
                        <SparklesIcon className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">
                            Thoughts & Insights
                        </span>
                    </div>
                    <h1
                        className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up"
                        style={{ animationDelay: "0.1s" }}
                    >
                        Blog
                    </h1>
                    <p
                        className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up"
                        style={{ animationDelay: "0.2s" }}
                    >
                        Articles, tutorials, and thoughts on web development,
                        design, and technology
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            {/* Search */}
                            <div className="animate-fade-in-up bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                    <MagnifyingGlassIcon className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
                                    Search Articles
                                </h3>
                                <form
                                    onSubmit={handleSearch}
                                    className="space-y-3"
                                >
                                    <Input
                                        value={data.search}
                                        onChange={(e) =>
                                            setData("search", e.target.value)
                                        }
                                        placeholder="Search..."
                                        className="w-full"
                                    />
                                    <Button type="submit" className="w-full">
                                        Search
                                    </Button>
                                </form>
                            </div>

                            {/* Categories */}
                            <div className="animate-fade-in-up bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                                    Categories
                                </h3>
                                <ul className="space-y-2 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                                    <li>
                                        <Link
                                            href="/blog"
                                            className="group flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 py-2 px-3 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all"
                                        >
                                            <span className="font-medium">
                                                All Posts
                                            </span>
                                            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full group-hover:bg-primary-100 dark:group-hover:bg-primary-900/40 group-hover:text-primary-800 dark:group-hover:text-primary-400 transition-colors">
                                                {posts.total}
                                            </span>
                                        </Link>
                                    </li>
                                    {categories.map((category) => (
                                        <li key={category.id}>
                                            <Link
                                                href={`/blog/category/${category.slug}`}
                                                className="group flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 py-2 px-3 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all"
                                            >
                                                <span className="font-medium">
                                                    {category.name}
                                                </span>
                                                <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full group-hover:bg-primary-100 dark:group-hover:bg-primary-900/40 group-hover:text-primary-800 dark:group-hover:text-primary-400 transition-colors">
                                                    {category.blog_posts_count ||
                                                        0}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Popular Tags */}
                            <div className="animate-fade-in-up bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-primary-200 dark:border-gray-700">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                                    Popular Tags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "React",
                                        "Laravel",
                                        "TypeScript",
                                        "Tailwind",
                                        "JavaScript",
                                        "PHP",
                                    ].map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-800 dark:hover:text-primary-400 cursor-pointer transition-colors border border-gray-200 dark:border-gray-700"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Posts Grid */}
                    <div className="lg:col-span-3">
                        {posts.data.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                    {posts.data.map((post, index) => (
                                        <article
                                            key={post.id}
                                            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 transform hover:-translate-y-3 h-full flex flex-col animate-fade-in-up"
                                            style={{
                                                animationDelay: `${
                                                    index * 0.05
                                                }s`,
                                            }}
                                        >
                                            {/* Post Image */}
                                            <div className="relative h-56 overflow-hidden">
                                                {post.featured_image ? (
                                                    <>
                                                        <img
                                                            src={`/storage/${post.featured_image}`}
                                                            alt={post.title}
                                                            className="w-full h-full object-cover transition-transform duration-700"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                                    </>
                                                ) : (
                                                    <div className="h-full bg-gradient-to-br from-green-400 via-teal-500 to-blue-500 flex items-center justify-center relative overflow-hidden">
                                                        <div className="absolute inset-0 bg-black/10"></div>
                                                        <span className="text-white text-6xl font-bold relative z-10">
                                                            {post.title.charAt(
                                                                0
                                                            )}
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Category Badge - Clickable */}
                                                <div className="absolute top-4 left-4">
                                                    <Link
                                                        href={`/blog/category/${post.category.slug}`}
                                                        className="inline-block px-3 py-1 bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400 rounded-full text-xs font-semibold shadow-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors"
                                                    >
                                                        {post.category.name}
                                                    </Link>
                                                </div>
                                            </div>

                                            {/* Post Content */}
                                            <div className="p-6 flex-1 flex flex-col">
                                                {/* Meta */}
                                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
                                                    <div className="flex items-center">
                                                        <CalendarIcon className="w-4 h-4 mr-1" />
                                                        <span>
                                                            {new Date(
                                                                post.created_at
                                                            ).toLocaleDateString(
                                                                "en-US",
                                                                {
                                                                    month: "short",
                                                                    day: "numeric",
                                                                    year: "numeric",
                                                                }
                                                            )}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <ClockIcon className="w-4 h-4 mr-1" />
                                                        <span>
                                                            {Math.ceil(
                                                                post.content
                                                                    .length /
                                                                    1000
                                                            )}{" "}
                                                            min read
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <EyeIcon className="w-4 h-4 mr-1" />
                                                        <span>
                                                            {post.views || 0}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Title - Clickable */}
                                                <Link
                                                    href={`/blog/${post.slug}`}
                                                    className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors line-clamp-2 block"
                                                >
                                                    {post.title}
                                                </Link>

                                                {/* Excerpt */}
                                                <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 flex-1">
                                                    {(() => {
                                                        const text =
                                                            post.excerpt ||
                                                            post.content.substring(
                                                                0,
                                                                150
                                                            ) + "...";
                                                        const parser =
                                                            new DOMParser();
                                                        const doc =
                                                            parser.parseFromString(
                                                                text,
                                                                "text/html"
                                                            );
                                                        return (
                                                            doc.body
                                                                .textContent ||
                                                            ""
                                                        );
                                                    })()}
                                                </p>

                                                {/* Tags - Clickable */}
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {post.tags
                                                        .slice(0, 3)
                                                        .map((tag) => (
                                                            <Link
                                                                key={tag.id}
                                                                href={`/blog/tag/${tag.slug}`}
                                                                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                                                            >
                                                                #{tag.name}
                                                            </Link>
                                                        ))}
                                                </div>

                                                {/* Read More - Clickable */}
                                                <Link
                                                    href={`/blog/${post.slug}`}
                                                    className="flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800 dark:hover:text-primary-300 group"
                                                >
                                                    Read More
                                                    <svg
                                                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M9 5l7 7-7 7"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </article>
                                    ))}
                                </div>

                                {/* Pagination */}
                                {posts.last_page > 1 && (
                                    <div className="flex justify-center items-center space-x-2 animate-fade-in-up">
                                        {/* Previous Button */}
                                        <button
                                            onClick={() =>
                                                router.get(
                                                    `/blog?page=${
                                                        posts.current_page - 1
                                                    }&search=${data.search}`
                                                )
                                            }
                                            disabled={posts.current_page === 1}
                                            className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            Previous
                                        </button>

                                        {/* Page Numbers */}
                                        {(() => {
                                            const maxVisible = 5;
                                            const pages = [];
                                            let startPage = Math.max(
                                                1,
                                                posts.current_page -
                                                    Math.floor(maxVisible / 2)
                                            );
                                            let endPage = Math.min(
                                                posts.last_page,
                                                startPage + maxVisible - 1
                                            );

                                            if (
                                                endPage - startPage + 1 <
                                                maxVisible
                                            ) {
                                                startPage = Math.max(
                                                    1,
                                                    endPage - maxVisible + 1
                                                );
                                            }

                                            // First page
                                            if (startPage > 1) {
                                                pages.push(
                                                    <button
                                                        key={1}
                                                        onClick={() =>
                                                            router.get(
                                                                `/blog?page=1&search=${data.search}`
                                                            )
                                                        }
                                                        className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                                    >
                                                        1
                                                    </button>
                                                );
                                                if (startPage > 2) {
                                                    pages.push(
                                                        <span
                                                            key="dots-start"
                                                            className="text-gray-500 dark:text-gray-400"
                                                        >
                                                            ...
                                                        </span>
                                                    );
                                                }
                                            }

                                            // Page range
                                            for (
                                                let page = startPage;
                                                page <= endPage;
                                                page++
                                            ) {
                                                pages.push(
                                                    <button
                                                        key={page}
                                                        onClick={() =>
                                                            router.get(
                                                                `/blog?page=${page}&search=${data.search}`
                                                            )
                                                        }
                                                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                                            page ===
                                                            posts.current_page
                                                                ? "bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 text-white shadow-lg scale-110"
                                                                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                                                        }`}
                                                    >
                                                        {page}
                                                    </button>
                                                );
                                            }

                                            // Last page
                                            if (endPage < posts.last_page) {
                                                if (
                                                    endPage <
                                                    posts.last_page - 1
                                                ) {
                                                    pages.push(
                                                        <span
                                                            key="dots-end"
                                                            className="text-gray-500 dark:text-gray-400"
                                                        >
                                                            ...
                                                        </span>
                                                    );
                                                }
                                                pages.push(
                                                    <button
                                                        key={posts.last_page}
                                                        onClick={() =>
                                                            router.get(
                                                                `/blog?page=${posts.last_page}&search=${data.search}`
                                                            )
                                                        }
                                                        className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                                    >
                                                        {posts.last_page}
                                                    </button>
                                                );
                                            }

                                            return pages;
                                        })()}

                                        {/* Next Button */}
                                        <button
                                            onClick={() =>
                                                router.get(
                                                    `/blog?page=${
                                                        posts.current_page + 1
                                                    }&search=${data.search}`
                                                )
                                            }
                                            disabled={
                                                posts.current_page ===
                                                posts.last_page
                                            }
                                            className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            Next
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-20 animate-fade-in-up bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                                <div className="inline-block p-8 bg-gray-100 dark:bg-gray-900 rounded-full mb-6">
                                    <MagnifyingGlassIcon className="w-16 h-16 text-gray-400 dark:text-gray-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    No blog posts found
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    {filters.search
                                        ? "Try adjusting your search terms"
                                        : "Check back later for new content"}
                                </p>
                                {filters.search && (
                                    <button
                                        onClick={() => {
                                            setData("search", "");
                                            router.get("/blog");
                                        }}
                                        className="px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors font-medium"
                                    >
                                        Clear Search
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
