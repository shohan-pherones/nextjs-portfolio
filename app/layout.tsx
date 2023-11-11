import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Bai_Jamjuree } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Md. Shohanur Rahman | Portfolio',
  description: 'Developer portfolio website of Md. Shohanur Rahman.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          baiJamjuree.className,
          'overflow-x-hidden bg-light text-dark'
        )}
      >
        <Toaster position='top-center' reverseOrder={false} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
