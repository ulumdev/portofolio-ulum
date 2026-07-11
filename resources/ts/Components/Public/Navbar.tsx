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
    <div className="fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-4 bg-gradient-to-b from-white via-white/80 dark:from-[#09090b] dark:via-[#09090b]/80 to-transparent pointer-events-none transition-colors duration-300">
      <Disclosure as="nav" className="mx-auto max-w-5xl bg-white/80 dark:bg-[#18181b]/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-full shadow-lg dark:shadow-2xl pointer-events-auto transition-all duration-300">
        {({ open }) => (
          <>
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-14">
                {/* Logo - Left Side */}
                <div className="flex-shrink-0">
                  <Link href="/" className="flex items-center group">
                    <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 drop-shadow-sm">
                      {settings?.site_name || 'Portofolio'}
                    </span>
                  </Link>
                </div>

                {/* Desktop Navigation - Center */}
                <div className="hidden md:flex md:items-center md:space-x-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full ${isActive(item.href)
                          ? 'text-white bg-blue-600 dark:bg-white/10'
                          : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                        }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Right Side - Actions */}
                <div className="hidden md:flex md:items-center md:space-x-4 flex-shrink-0">
                  <ThemeToggle />
                </div>

                {/* Mobile menu button */}
                <div className="flex items-center md:hidden space-x-2">
                  <ThemeToggle />
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-full text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors focus:outline-none">
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
              enterFrom="opacity-0 -translate-y-2 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 -translate-y-2 scale-95"
            >
              <Disclosure.Panel className="md:hidden absolute top-16 left-0 w-full px-4">
                <div className="bg-white/95 dark:bg-[#18181b]/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-4 shadow-xl dark:shadow-2xl space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      href={item.href}
                      className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${isActive(item.href)
                          ? 'bg-blue-50 dark:bg-white/10 text-blue-700 dark:text-white'
                          : 'text-slate-600 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                        }`}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                  {auth.user && (
                    <div className="pt-2 mt-2 border-t border-slate-200 dark:border-white/10">
                      {auth.user.role === 'admin' && (
                        <Disclosure.Button
                          as={Link}
                          href="/admin/dashboard"
                          className="block px-4 py-3 rounded-xl text-base font-semibold text-blue-600 dark:text-blue-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                        >
                          Admin Dashboard
                        </Disclosure.Button>
                      )}
                      <Disclosure.Button
                        as={Link}
                        href="/logout"
                        method="post"
                        className="block px-4 py-3 rounded-xl text-base font-semibold text-red-500 dark:text-red-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                      >
                        Logout
                      </Disclosure.Button>
                    </div>
                  )}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
