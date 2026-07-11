import { ReactNode } from 'react';
import Navbar from '@/Components/Public/Navbar';
import Footer from '@/Components/Public/Footer';
import ToastContainer from '@/Components/Common/ToastContainer';
import ScrollToTop from '@/Components/Common/ScrollToTop';
import { Head } from '@inertiajs/react';
import { ThemeProvider } from '@/Contexts/ThemeContext';

interface PublicLayoutProps {
  title: string;
  children: ReactNode;
}

export default function PublicLayout({ title, children }: PublicLayoutProps) {
  return (
    <ThemeProvider>
      <Head title={title} />
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
