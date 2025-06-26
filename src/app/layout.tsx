import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import '@lib/fontawesome'; // Import FontAwesome configuration
import { SITE_TITLE } from '@/app/common/constants';
import { SWRConfig } from 'swr';

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
        <SWRConfig value={{
        // Optional: add config here (e.g., revalidateOnFocus: false)
        }}>
          <div className="flex flex-col min-h-screen">
            {children}
          </div>
        </SWRConfig>
      </body>
    </html>
  );
}
