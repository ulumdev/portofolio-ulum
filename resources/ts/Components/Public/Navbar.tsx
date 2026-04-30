import { Link, usePage } from '@inertiajs/react';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { PageProps } from '@/types';
import ThemeToggle from '@/Components/Common/ThemeToggle';
import { Fragment } from 'react';

export default function Navbar() {
  const { url, props } = usePage<PageProps>();
  const { auth, settings } = props;

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portofolio', href: '/portofolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return url === href;
    return url.startsWith(href);
  };

  return (
    <Disclosure as="nav" className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md sticky top-0 z-50 transition-colors duration-200">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo - Left Side */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center group">
                  {/* <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                    <span className="text-white font-bold text-xl">
                      {settings?.site_name?.charAt(0) || 'U'}
                    </span>
                  </div> */}
                  <span className="ml-0 text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
                    {settings?.site_name || 'Portofolio'}
                  </span>
                </Link>
              </div>

              {/* Desktop Navigation - Center */}
              <div className="hidden sm:flex sm:items-center sm:justify-center flex-1">
                <div className="flex space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200 ${isActive(item.href)
                        ? 'border-primary-500 text-gray-900 dark:text-white'
                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-300'
                        }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Side - Actions */}
              <div className="hidden sm:flex sm:items-center sm:space-x-4 flex-shrink-0">
                <ThemeToggle />

                {/* {auth.user ? (
                  <div className="flex items-center space-x-4">
                    {auth.user.role === 'admin' && (
                      <Link
                        href="/admin/dashboard"
                        className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors"
                      >
                        Admin
                      </Link>
                    )}
                    <Link
                      href="/logout"
                      method="post"
                      as="button"
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors"
                    >
                      Logout
                    </Link>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Login
                  </Link>
                )} */}
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center sm:hidden space-x-2">
                <ThemeToggle />
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
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
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Disclosure.Panel className="sm:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
              <div className="pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    href={item.href}
                    className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors ${isActive(item.href)
                      ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-500 text-primary-700 dark:text-primary-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-300'
                      }`}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              {auth.user && (
                <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-800">
                  <div className="space-y-1">
                    {auth.user.role === 'admin' && (
                      <Disclosure.Button
                        as={Link}
                        href="/admin/dashboard"
                        className="block px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        Admin Dashboard
                      </Disclosure.Button>
                    )}
                    <Disclosure.Button
                      as={Link}
                      href="/logout"
                      method="post"
                      className="block px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      Logout
                    </Disclosure.Button>
                  </div>
                </div>
              )}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
