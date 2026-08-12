import { Link, usePage } from '@inertiajs/react';
import {
  HomeIcon,
  FolderIcon,
  DocumentTextIcon,
  TagIcon,
  ChatBubbleLeftRightIcon,
  WrenchScrewdriverIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  BriefcaseIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import { PageProps } from '@/types';

interface NavItem {
  name: string;
  href: string;
  icon: any;
  active?: boolean;
}

export default function Sidebar() {
  const { url } = usePage();
  const { auth } = usePage<PageProps>().props;

  const navigation: NavItem[] = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon },
    { name: 'Projects', href: '/admin/projects', icon: FolderIcon },
    { name: 'Blog Posts', href: '/admin/blog', icon: DocumentTextIcon },
    { name: 'Experiences', href: '/admin/experiences', icon: BriefcaseIcon },
    { name: 'Educations', href: '/admin/educations', icon: AcademicCapIcon },
    { name: 'Categories', href: '/admin/categories', icon: TagIcon },
    { name: 'Tags', href: '/admin/tags', icon: TagIcon },
    { name: 'Skills', href: '/admin/skills', icon: WrenchScrewdriverIcon },
    { name: 'Messages', href: '/admin/messages', icon: ChatBubbleLeftRightIcon },
    { name: 'Settings', href: '/admin/settings', icon: Cog6ToothIcon },
  ];

  const isActive = (href: string) => {
    return url. startsWith(href);
  };

  return (
    <div className="flex flex-col w-64 bg-gray-900 min-h-screen">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 px-4 bg-gray-800">
        <Link href="/" className="text-xl font-bold text-white">
          Portfolio Admin
        </Link>
      </div>

      {/* User Info */}
      <div className="px-4 py-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-semibold">
            {auth. user?. name. charAt(0). toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">
              {auth.user?.name}
            </p>
            <p className="text-xs text-gray-400 truncate">{auth.user?.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
                ${
                  active
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }
              `}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-gray-700">
        <Link
          href="/logout"
          method="post"
          as="button"
          className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5 mr-3" />
          Logout
        </Link>
      </div>
    </div>
  );
}
