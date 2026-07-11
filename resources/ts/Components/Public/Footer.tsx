import { Link, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import {
  EnvelopeIcon,
  MapPinIcon,
  HeartIcon
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
    { name: 'GitHub', icon: FaGithub, url: settings.github_url || '#' },
    { name: 'LinkedIn', icon: FaLinkedin, url: settings.linkedin_url || '#' },
    { name: 'Twitter', icon: FaTwitter, url: settings.twitter_url || '#' },
    { name: 'Instagram', icon: FaInstagram, url: settings.instagram_url || '#' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portofolio', href: '/portofolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-white dark:bg-[#09090b] border-t border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>
      <div className="hidden dark:block absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
          {/* About Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
                {settings.site_name || 'Portofolio'}
              </span>
            </Link>
            <p className="text-slate-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-md font-light text-base sm:text-lg">
              {settings.site_tagline || 'Crafting beautiful digital experiences with robust backend architectures.'}
            </p>
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-transparent transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg dark:hover:shadow-[0_10px_20px_-10px_rgba(255,255,255,0.2)]"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-widest mb-5 sm:mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 inline-flex items-center text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-widest mb-5 sm:mb-6">
              Contact
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start text-slate-600 dark:text-gray-400 text-sm sm:text-base">
                <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-3 mt-0.5 text-blue-600 dark:text-blue-400" />
                <a
                  href={`mailto:${settings.email || 'hello@example.com'}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {settings.email || 'hello@example.com'}
                </a>
              </li>
              <li className="flex items-start text-slate-600 dark:text-gray-400 text-sm sm:text-base">
                <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-3 mt-0.5 text-blue-600 dark:text-blue-400" />
                <span>{settings.address || 'Your City, Country'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-white/5 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 dark:text-gray-500 text-xs sm:text-sm flex items-center text-center sm:text-left">
              © {currentYear} {settings.site_name}. Built with
              <HeartIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 mx-1.5 text-rose-500 animate-pulse" />
              and <span className="ml-1 text-slate-700 dark:text-white font-medium">Laravel</span>.
            </p>
            <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <Link
                href={settings.privacy_policy_url || '#'}
                className="text-slate-500 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href={settings.terms_of_service_url || '#'}
                className="text-slate-500 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
