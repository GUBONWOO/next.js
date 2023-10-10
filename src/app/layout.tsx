import './globals.css';
import type { Metadata } from 'next';
import { Inter, Nanum_Gothic, Open_Sans } from 'next/font/google';
import styles from '../app/layout.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });
const sans = Open_Sans({ subsets: ['latin'] });
const gothic = Nanum_Gothic({
  weight: '700',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '멋진 제품 사이트',
  description: '멋진 제품사이트 입니다',
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={sans.className}>
      <body className={inter.className}>
        <header className={styles.header}>
          <h1 className={gothic.className}>Demo Note App</h1>
          <nav className={styles.nav}>
            <Link href='/products'>Products</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/about'>About</Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
