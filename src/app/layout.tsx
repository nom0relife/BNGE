import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import '@lib/fontawesome'; // Import FontAwesome configuration
import { SITE_TITLE } from '@/app/common/constants';

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: 'A Next.js application for movie details',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
