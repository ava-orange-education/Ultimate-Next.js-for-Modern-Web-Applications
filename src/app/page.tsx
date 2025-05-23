'use client'

import { useRouter } from 'next/navigation';
import { Card } from '../components/ui/card';

const chapters = [
  { title: 'Getting Started with Next.js', path: '/chapters/chapter-01' },
  { title: 'Next.js File-Based Routing', path: '/chapters/chapter-02' },
  { title: 'Rendering Strategies in Next.js', path: '/chapters/chapter-03' },
  { title: 'API Routes in Next.js', path: '/chapters/chapter-04' },
  { title: 'Authentication and Authorization', path: '/chapters/chapter-05' },
  { title: 'Next.js Data Fetching', path: '/chapters/chapter-06' },
  { title: 'Styling in Next.js', path: '/chapters/chapter-07' },
  { title: 'State Management in Next.js', path: '/chapters/chapter-08' },
  { title: 'Performance Optimization in Next.js 15', path: '/chapters/chapter-09' },
  { title: 'Unit Testing and Integration Testing', path: '/chapters/chapter-10' },
  { title: 'Deploying Next.js Applications - on', path: '/chapters/chapter-11' },
  { title: 'Advanced Features in Next.js 15', path: '/chapters/chapter-12/en' },
  { title: 'Real-World Projects with Next.js', path: '/chapters/chapter-13' },
]

export default function ChaptersPage() {
  const router = useRouter()

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Chapter List: Ultimate Next.js for Building Modern Web Applications</h1>
      <ul className="space-y-4">
        {chapters.map((chapter, index) => (
          <Card
            key={index}
            className="p-4 cursor-pointer hover:bg-gray-100 transition rounded-lg shadow"
            onClick={() => router.push(chapter.path)}
          >
            <span className="text-lg font-medium">
              {index + 1}. {chapter.title}
            </span>
          </Card>
        ))}
      </ul>
    </div>
  )
}
