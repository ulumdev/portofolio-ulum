import { ReactNode } from 'react';
import Navbar from '@/Components/Public/Navbar';
import Footer from '@/Components/Public/Footer';
import ToastContainer from '@/Components/Common/ToastContainer';
import { Head } from '@inertiajs/react';

interface PublicLayoutProps {
  title: string;
  children: ReactNode;
}

export default function PublicLayout({ title, children }: PublicLayoutProps) {
  return (
    <>
      <Head title={title} />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}
