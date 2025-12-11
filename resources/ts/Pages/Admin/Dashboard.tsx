import AdminLayout from '@/Layouts/AdminLayout';
import StatCard from '@/Components/Admin/StatCard';
import { Link } from '@inertiajs/react';
import {
  FolderIcon,
  DocumentTextIcon,
  EyeIcon,
  EnvelopeIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import { BlogPost, ContactMessage } from '@/types';

interface DashboardStats {
  total_projects: number;
  published_projects: number;
  total_posts: number;
  published_posts: number;
  total_views: number;
  total_messages: number;
  unread_messages: number;
}

interface DashboardProps {
  stats: DashboardStats;
  recentPosts: BlogPost[];
  recentMessages: ContactMessage[];
}

export default function Dashboard({ stats, recentPosts, recentMessages }: DashboardProps) {
  return (
    <AdminLayout title="Dashboard">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Projects"
          value={stats.total_projects}
          subtitle={`${stats.published_projects} Published`}
          icon={<FolderIcon className="w-full h-full" />}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
        />
        <StatCard
          title="Total Blog Posts"
          value={stats. total_posts}
          subtitle={`${stats.published_posts} Published`}
          icon={<DocumentTextIcon className="w-full h-full" />}
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
        />
        <StatCard
          title="Total Views"
          value={stats.total_views. toLocaleString()}
          subtitle="Blog Post Views"
          icon={<EyeIcon className="w-full h-full" />}
          iconBgColor="bg-purple-100"
          iconColor="text-purple-600"
        />
        <StatCard
          title="Messages"
          value={stats.total_messages}
          subtitle={`${stats.unread_messages} Unread`}
          icon={<EnvelopeIcon className="w-full h-full" />}
          iconBgColor="bg-orange-100"
          iconColor="text-orange-600"
        />
      </div>

      {/* Recent Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Blog Posts */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Recent Blog Posts</h3>
            <Link
              href="/admin/blog"
              className="text-primary-600 hover:text-primary-800 text-sm font-medium"
            >
              View All
            </Link>
          </div>
          <div className="p-6">
            {recentPosts.length > 0 ? (
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex items-start space-x-4 pb-4 border-b border-gray-100 last:border-0"
                  >
                    {post.featured_image ?  (
                      <img
                        src={`/storage/${post.featured_image}`}
                        alt={post.title}
                        className="w-16 h-16 rounded object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-gray-500 font-bold">
                          {post.title.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/admin/blog/${post.id}/edit`}
                        className="text-gray-800 font-medium hover:text-primary-600 block truncate"
                      >
                        {post.title}
                      </Link>
                      <p className="text-sm text-gray-500 mt-1">
                        {post. category. name} • {new Date(post.created_at). toLocaleDateString()}
                      </p>
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded mt-1 ${
                          post.status === 'published'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {post.status. charAt(0).toUpperCase() + post.status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">No blog posts yet. </p>
            )}
          </div>
        </div>

        {/* Recent Messages */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Recent Messages</h3>
            <Link
              href="/admin/messages"
              className="text-primary-600 hover:text-primary-800 text-sm font-medium"
            >
              View All
            </Link>
          </div>
          <div className="p-6">
            {recentMessages.length > 0 ? (
              <div className="space-y-4">
                {recentMessages.map((message) => (
                  <div key={message.id} className="pb-4 border-b border-gray-100 last:border-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-primary-600 font-bold">
                            {message.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <Link
                            href={`/admin/messages/${message.id}`}
                            className="text-gray-800 font-medium hover:text-primary-600"
                          >
                            {message. name}
                          </Link>
                          <p className="text-sm text-gray-500">{message.email}</p>
                        </div>
                      </div>
                      {! message.is_read && (
                        <span className="bg-red-500 w-2 h-2 rounded-full"></span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 ml-13 truncate">{message.message}</p>
                    <p className="text-xs text-gray-500 ml-13 mt-1">
                      {new Date(message. created_at).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">No messages yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/admin/projects/create"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition group"
        >
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition">
              <PlusIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h4 className="font-semibold text-gray-800">New Project</h4>
              <p className="text-sm text-gray-500">Add a new project</p>
            </div>
          </div>
        </Link>

        <Link
          href="/admin/blog/create"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition group"
        >
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition">
              <PlusIcon className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h4 className="font-semibold text-gray-800">New Blog Post</h4>
              <p className="text-sm text-gray-500">Write a new article</p>
            </div>
          </div>
        </Link>

        <Link
          href="/admin/settings"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition group"
        >
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition">
              <PlusIcon className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h4 className="font-semibold text-gray-800">Settings</h4>
              <p className="text-sm text-gray-500">Manage site settings</p>
            </div>
          </div>
        </Link>
      </div>
    </AdminLayout>
  );
}
