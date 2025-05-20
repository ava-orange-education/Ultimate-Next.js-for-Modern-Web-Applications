import Link from 'next/link'

export default function ChapterTwoIndex() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Chapter 2: File-Based Routing</h1>
      <nav className="flex flex-wrap gap-4 mt-6">
        <Link href="/chapters/chapter-02/about" className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded text-blue-800">About</Link>
        <Link href="/chapters/chapter-02/product/123" className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded text-blue-800">Product (123)</Link>
        <Link href="/chapters/chapter-02/blog/javascript/react/hooks" className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded text-blue-800">Blog (Catch-All)</Link>
        <Link href="/chapters/chapter-02/blog" className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded text-blue-800">Blog (Optional)</Link>
        <Link href="/chapters/chapter-02/dashboard/settings" className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded text-blue-800">Dashboard</Link>
        <Link href="/chapters/chapter-02/nav-test" className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded text-blue-800">Nav Link Test</Link>
        <Link href="/chapters/chapter-02/go-to-about" className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded text-blue-800">Programmatic Nav</Link>
      </nav>
    </div>
  )
}
