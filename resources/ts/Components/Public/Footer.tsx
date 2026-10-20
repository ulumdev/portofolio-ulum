import { Link, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

export default function Footer() {
  const { settings } = usePage<PageProps>().props;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: settings.github_url },
    { name: 'LinkedIn', icon: FaLinkedin, url: settings.linkedin_url },
    { name: 'Twitter', icon: FaTwitter, url: settings.twitter_url },
    { name: 'Instagram', icon: FaInstagram, url: settings.instagram_url },
  ].filter((s) => s.url && s.url !== '#');

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portofolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-white/[0.08] transition-colors duration-300 overflow-hidden">
      {/* Background glow & dots */}
      <div className="absolute inset-0 bg-dots-light dark:bg-dots-dark opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-blue-500/[0.06] blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-white/[0.08]">
          {/* Brand & bio */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-flex items-center space-x-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {settings?.site_name || "Moh. Bahrul 'Ulum"}
              </span>
            </Link>

            <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-md leading-relaxed font-normal">
              {settings.site_tagline ||
                settings.site_description ||
                'Full Stack Engineer dedicated to building robust, accessible, and high-performance digital products.'}
            </p>

            {/* Social pills */}
            {socialLinks.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-zinc-300 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 border border-slate-200/80 dark:border-white/[0.06] transition-all duration-200"
                      aria-label={social.name}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white font-mono">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact & Details from Settings */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white font-mono">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
              {settings.email && (
                <a
                  href={`mailto:${settings.email}`}
                  className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <EnvelopeIcon className="w-4 h-4 text-slate-400 group-hover:text-blue-500 shrink-0" />
                  <span className="truncate">{settings.email}</span>
                </a>
              )}
              {settings.phone && (
                <a
                  href={`tel:${settings.phone}`}
                  className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <PhoneIcon className="w-4 h-4 text-slate-400 group-hover:text-blue-500 shrink-0" />
                  <span>{settings.phone}</span>
                </a>
              )}
              {settings.address && (
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{settings.address}</span>
                </div>
              )}
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                <span>Send a direct message</span>
                <ArrowUpRightIcon className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-zinc-500">
          <p>
            © {currentYear} {settings.site_name || 'Moh. Bahrul Ulum'}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {settings.privacy_policy_url && (
              <a
                href={settings.privacy_policy_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Privacy Policy
              </a>
            )}
            {settings.terms_of_service_url && (
              <a
                href={settings.terms_of_service_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Terms of Service
              </a>
            )}
            <span className="font-mono text-[11px] text-slate-400 dark:text-zinc-600">
              Laravel &amp; React Inertia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
