'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
   const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!username || !password) {
      setError('Both username and password are required.')
      return
    }
    setLoading(true)
    const res = await signIn('credentials', {
      redirect: false,
      username,
      password,
    })
    setLoading(false)
    if (res?.error) {
      setError('Invalid credentials')
    } else {
      router.replace('/chapters/chapter-05')
      router.refresh()
    }
  }

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h1 className="text-xl font-bold mb-4 text-center">Login</h1>
      <form onSubmit={handleLogin} className="space-y-2">
        <input type="text" placeholder="Username" className="w-full border px-3 py-2 rounded" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full border px-3 py-2 rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="w-full bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 disabled:opacity-60" disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </div>
  )
}
