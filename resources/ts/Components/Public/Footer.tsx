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
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="ml-0 text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
                {settings.site_name}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              {settings.site_tagline || 'Full Stack Developer & Designer crafting beautiful digital experiences'}
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-600 dark:bg-primary-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-600 dark:text-gray-400">
                <EnvelopeIcon className="w-5 h-5 mr-3 mt-0.5 text-primary-600 dark:text-primary-400" />
                <a
                  href={`mailto:${settings.email || 'hello@example.com'}`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {settings.email || 'hello@example.com'}
                </a>
              </li>
              <li className="flex items-start text-gray-600 dark:text-gray-400">
                <MapPinIcon className="w-5 h-5 mr-3 mt-0.5 text-primary-600 dark:text-primary-400" />
                <span>{settings.address || 'Your City, Country'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
              ©{currentYear} {settings.site_name}. Made with
              <HeartIcon className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
              Laravel & React.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href={settings.privacy_policy_url || '#'}
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href={settings.terms_of_service_url || '#'}
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
