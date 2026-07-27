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

  return (
    <ThemeProvider>
      <Head>
        <title>{title}</title>
        <meta name="description" content={(settings as any).site_description || 'Portofolio'} />
        <meta property="og:title" content={`${title} - ${(settings as any).site_name || 'Portofolio'}`} />
        <meta property="og:description" content={(settings as any).site_description || 'Portofolio'} />
      </Head>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-gray-300 transition-colors duration-300 selection:bg-cyan-500/30 selection:text-cyan-900 dark:selection:text-cyan-200">
        <Navbar />
        <main className="flex-1 mt-20">{children}</main>
        <Footer />
      </div>
      <ScrollToTop />
      <ToastContainer />
    </ThemeProvider>
  );
}
