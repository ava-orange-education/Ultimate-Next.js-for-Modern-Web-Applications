'use client'
import { useSession } from 'next-auth/react'

export default function ProtectedPage() {
  const { data: session, status } = useSession()
  if (status === 'loading') return <p className="p-4">Loading...</p>
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🔒 Protected Page</h1>
      <p className="mb-2">Only signed-in users can see this.</p>
      <div className="bg-gray-100 p-4 rounded">
        <pre className="text-sm">{JSON.stringify(session, null, 2)}</pre>
      </div>
    </div>
  )
}
