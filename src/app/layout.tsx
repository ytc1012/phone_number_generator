import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Phone Number Generator',
  description: 'Generate phone numbers for different countries',
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'LZKRYoj4lIFR3ik1Y8_LpDGE2SfUkqcc-Kj5TTdJzO8',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}