import { Link, usePage } from '@inertiajs/react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { PageProps } from '@/types';

export default function Navbar() {
  const { url, props } = usePage<PageProps>();
  const { auth, settings } = props;

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portofolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return url === href;
    return url.startsWith(href);
  };

  return (
    <Disclosure as="nav" className="bg-white shadow-md sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0 flex items-center">
                  <span className="text-2xl font-bold text-primary-600">
                    {settings.site_name}
                  </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item. href}
                      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? 'border-primary-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Side */}
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {auth.user ? (
                  <div className="flex items-center space-x-4">
                    {auth.user.role === 'admin' && (
                      <Link
                        href="/admin/dashboard"
                        className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium"
                      >
                        Admin
                      </Link>
                    )}
                    <Link
                      href="/logout"
                      method="post"
                      as="button"
                      className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium"
                    >
                      Logout
                    </Link>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium"
                  >
                    Login
                  </Link>
                )}
              </div>

              {/* Mobile menu button */}
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure. Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    isActive(item.href)
                      ? 'bg-primary-50 border-primary-500 text-primary-700'
                      : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            {auth.user && (
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="space-y-1">
                  {auth.user.role === 'admin' && (
                    <Disclosure.Button
                      as={Link}
                      href="/admin/dashboard"
                      className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                    >
                      Admin Dashboard
                    </Disclosure.Button>
                  )}
                  <Disclosure.Button
                    as={Link}
                    href="/logout"
                    method="post"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Logout
                  </Disclosure.Button>
                </div>
              </div>
            )}
          </Disclosure. Panel>
        </>
      )}
    </Disclosure>
  );
}
