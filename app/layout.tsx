import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Hind_Siliguri } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const hindSiliguri = Hind_Siliguri({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Tyler Akin | Developer Portfolio',
  description: 'A development portfolio site by Tyler Akin, a software engineer from Louisville, Kentucky.'
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${hindSiliguri.className} flex min-h-screen flex-col bg-slate-950 text-slate-100`}
      >
        {/* <Header /> */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;

