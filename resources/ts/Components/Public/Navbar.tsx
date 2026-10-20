import { Link, usePage } from '@inertiajs/react';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { PageProps } from '@/types';
import ThemeToggle from '@/Components/Common/ThemeToggle';
import { Fragment } from 'react';

export default function Navbar() {
  const { url, props } = usePage<PageProps>();
  const { auth, settings } = props;

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portofolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return url === href;
    return url.startsWith(href);
  };

  const hireStatus = settings?.about_hire_status || settings?.contact_freelance_status || 'Available for work';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 pb-3 pointer-events-none">
      <Disclosure
        as="nav"
        className="mx-auto max-w-5xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.08] rounded-2xl sm:rounded-full shadow-sm dark:shadow-[0_8px_30px_rgb(0,0,0,0.35)] pointer-events-auto transition-all duration-300"
      >
        {({ open }) => (
          <>
            <div className="px-4 sm:px-6">
              <div className="flex justify-between items-center h-14">
                {/* Brand / Logo & Avatar */}
                <div className="flex items-center space-x-3">
                  <Link href="/" className="flex items-center space-x-2.5 group">
                    {settings?.profile_photo ? (
                      <img
                        src={`/storage/${settings.profile_photo}`}
                        alt={settings?.site_name || 'Avatar'}
                        className="w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-white/10 group-hover:scale-105 transition-transform duration-200 shadow-sm"
                      />
                    ) : (
                      <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform duration-200">
                        {(settings?.site_name || 'U').charAt(0)}
                      </span>
                    )}
                    <span className="font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base">
                      {settings?.site_name || 'Moh. Bahrul Ulum'}
                    </span>
                  </Link>

                  {/* Status Indicator */}
                  <div className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    <span>{hireStatus}</span>
                  </div>
                </div>

                {/* Desktop Nav Items */}
                <div className="hidden md:flex md:items-center md:space-x-1">
                  {navigation.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 rounded-full ${
                          active
                            ? 'bg-slate-900 text-white dark:bg-white dark:text-zinc-950 shadow-sm'
                            : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06]'
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>

                {/* Right Side: Admin + Theme Toggle + CTA */}
                <div className="hidden md:flex md:items-center md:space-x-2.5">
                  {auth?.user?.role === 'admin' && (
                    <Link
                      href="/admin/dashboard"
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                    >
                      Dashboard
                    </Link>
                  )}

                  <ThemeToggle />

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-slate-800 dark:hover:bg-zinc-100 transition-colors shadow-sm"
                  >
                    <span>Let's Talk</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Mobile Hamburger & Theme Toggle */}
                <div className="flex items-center md:hidden space-x-2">
                  <ThemeToggle />
                  <Disclosure.Button className="p-2 rounded-xl text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors focus:outline-none">
                    {open ? (
                      <XMarkIcon className="block h-5 w-5" />
                    ) : (
                      <Bars3Icon className="block h-5 w-5" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Mobile Dropdown Panel */}
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-2 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 -translate-y-2 scale-95"
            >
              <Disclosure.Panel className="md:hidden border-t border-slate-200/80 dark:border-white/[0.08] p-3 space-y-1 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl rounded-b-2xl">
                {navigation.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      href={item.href}
                      className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        active
                          ? 'bg-slate-900 text-white dark:bg-white dark:text-zinc-950'
                          : 'text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-white/[0.06] hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Disclosure.Button>
                  );
                })}

                {auth?.user && (
                  <div className="pt-2 mt-2 border-t border-slate-200/60 dark:border-white/[0.08] space-y-1">
                    {auth.user.role === 'admin' && (
                      <Disclosure.Button
                        as={Link}
                        href="/admin/dashboard"
                        className="block px-3.5 py-2 rounded-xl text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30"
                      >
                        Admin Dashboard
                      </Disclosure.Button>
                    )}
                    <Disclosure.Button
                      as={Link}
                      href="/logout"
                      method="post"
                      className="block px-3.5 py-2 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
                    >
                      Logout
                    </Disclosure.Button>
                  </div>
                )}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </header>
  );
}
