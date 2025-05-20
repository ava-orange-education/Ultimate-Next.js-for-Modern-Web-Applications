import Link from 'next/link'
import { BackToChapterHome } from '../BackToChapterHome'

export default function NavTest() {
  return (
    <div>
      <BackToChapterHome />
      <h1>Navigation Test</h1>
      <Link href="/chapters/chapter-02/about" className="text-blue-600 underline">
        Go to About
      </Link>
    </div>
  )
}
