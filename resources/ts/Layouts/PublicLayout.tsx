import { ReactNode } from 'react';
import Navbar from '@/Components/Public/Navbar';
import Footer from '@/Components/Public/Footer';
import ToastContainer from '@/Components/Common/ToastContainer';
import ScrollToTop from '@/Components/Common/ScrollToTop';
import { Head, usePage } from '@inertiajs/react';
import { ThemeProvider } from '@/Contexts/ThemeContext';
import { PageProps } from '@/types';

interface PublicLayoutProps {
  title: string;
  children: ReactNode;
}

export default function PublicLayout({ title, children }: PublicLayoutProps) {
  const { settings } = usePage<PageProps>().props;
  const siteName =
    settings?.site_name && settings.site_name !== 'Laravel'
      ? settings.site_name
      : 'Moh. Bahrul Ulum';

  return (
    <ThemeProvider>
      <Head>
        <title>{title ? `${title} — ${siteName}` : siteName}</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta name="description" content={settings?.site_description || 'Full Stack Engineer Portfolio'} />
        <meta property="og:title" content={`${title} — ${siteName}`} />
        <meta property="og:description" content={settings?.site_description || 'Full Stack Engineer Portfolio'} />
      </Head>
      <div className="min-h-screen flex flex-col bg-slate-50/60 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 transition-colors duration-300 font-sans selection:bg-blue-500/20 selection:text-blue-900 dark:selection:text-blue-200">
        <Navbar />
        <main className="flex-1 pt-16 sm:pt-20">{children}</main>
        <Footer />
      </div>
      <ScrollToTop />
      <ToastContainer />
    </ThemeProvider>
  );
}
