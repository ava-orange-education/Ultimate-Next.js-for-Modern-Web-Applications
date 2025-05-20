
import Link from 'next/link'

export function BackToChapterHome() {
  return (
    <div className="mb-6">
      <Link href="/chapters/chapter-02" className="text-sm text-blue-600 underline">
        Back to Chapter 2 Home
      </Link>
    </div>
  )
}
