'use client'
import { useRouter } from 'next/navigation'
import { BackToChapterHome } from '../BackToChapterHome'

export default function GoToAbout() {
  const router = useRouter()

  return (
    <div>
      <BackToChapterHome />
      <h1>Programmatic Navigation</h1>
      <button
        onClick={() => router.push('/chapters/chapter-02/about')}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Go to About Page
      </button>
    </div>
  )
}
