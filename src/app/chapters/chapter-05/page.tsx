'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function ChapterFivePage() {
  const { data: session } = useSession()
  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">Chapter 5: Authentication & Authorization</h1>
      <p className="text-lg text-center">
        {session
          ? `Signed in as ${session.user?.name || session.user?.email}`
          : 'You are not signed in.'}
      </p>
      <div className="text-center space-x-2">
        <Link href="/chapters/chapter-05/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Login</Link>
        <Link href="/chapters/chapter-05/protected" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Protected</Link>
      </div>
    </div>
  )
}
