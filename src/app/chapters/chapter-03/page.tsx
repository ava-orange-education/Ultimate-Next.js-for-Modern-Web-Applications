import Link from 'next/link'

export default function ChapterThreeIndex() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-6">Chapter 3: Rendering Strategies in Next.js</h1>
        <nav className="flex flex-col gap-3">
          <Link href="/chapters/chapter-03/ssr" className="text-blue-600 underline">Server-Side Rendering (SSR)</Link>
          <Link href="/chapters/chapter-03/ssg" className="text-blue-600 underline">Static Site Generation (SSG)</Link>
          <Link href="/chapters/chapter-03/isr" className="text-blue-600 underline">Incremental Static Regeneration (ISR)</Link>
          <Link href="/chapters/chapter-03/csr" className="text-blue-600 underline">Client-Side Rendering (CSR)</Link>
        </nav>
      </div>
    </div>
  )
}
