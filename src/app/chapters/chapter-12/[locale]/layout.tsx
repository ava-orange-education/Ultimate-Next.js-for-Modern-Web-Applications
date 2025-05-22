import '@/app/globals.css';
import type { ReactNode } from 'react';
import messages from '../lib/messages';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: 'en' | 'fr' };
}) {
  const { locale } = await params
  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col font-sans">
        <header className="p-4 shadow">
          <nav className="space-x-4">
            <a href={`/${locale}`}>{messages[locale]?.home}</a>
            <a href={`/${locale}/about`}>{messages[locale]?.about}</a>
          </nav>
        </header>
        <main className="flex-grow p-8">{children}</main>
      </body>
    </html>
  );
}