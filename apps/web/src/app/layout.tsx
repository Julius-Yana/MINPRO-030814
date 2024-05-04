import type { Metadata } from 'next';
import { Viaoda_Libre } from 'next/font/google';
import './globals.css';
import Container from '@/components/Container';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const inter = Viaoda_Libre({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'kitatiketin',
  description: 'tiketin impianmu',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <Navbar />
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
