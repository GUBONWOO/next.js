import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import styles from '../app/layout.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className={styles.header}>
          <h1>Demo Note App</h1>
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
