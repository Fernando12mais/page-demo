import Header from '@/components/molecules/header';
import './globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import Footer from '@/components/molecules/footer';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Clarifion',
  description: 'The best way to buy',
  icons: '/clarifion-logo.png',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={manrope.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
