import Link from 'next/link';
import type { ReactNode } from 'react';
import messages from './lib/messages';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: 'en' | 'fr' };
}) {
  
  const { locale } = await params;
  
  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col font-sans">
        <header className="p-4 shadow">
          <nav className="space-x-4">
            <Link href={`/chapters/chapter-12/${locale}`}>
              {messages[locale]?.home}
            </Link>
            <Link href={`/chapters/chapter-12/${locale}/about`}>
              {messages[locale]?.about}
            </Link>
          </nav>
        </header>
        <main className="flex-grow p-8">{children}</main>
      </body>
    </html>
  );
}
