
import Link from 'next/link'

export function BackToChapterHome() {
  return (
    <div className="mb-6">
      <Link href="/chapters/chapter-03" className="text-sm text-blue-600 underline">
        Back to Chapter 3 Home
      </Link>
    </div>
  )
}
