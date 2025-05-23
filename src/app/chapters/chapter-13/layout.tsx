import './globals.css';

export const metadata = {
  title: 'Next.js Real-World App',
  description: 'Built with the App Router and modern Next.js 15+ features.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>
          <header>
            <h1>🚗 Car Commerce + Blog Platform</h1>
          </header>
          <section>{children}</section>
        </main>
      </body>
    </html>
  );
}