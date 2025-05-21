// app/chapters/chapter-06/page.tsx
'use client'

import axios from 'axios';
import { useState } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default function ChapterSix() {
  const [response, setResponse] = useState<string | null>(null)
  const [name, setName] = useState('')

  const handleAddUser = async () => {
    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/users', { name })
      setResponse(`User ${res.data.name} added successfully!`)
    } catch (err: unknown) {
      setResponse('Error adding user.'+err)
    }
  }

  const { data, error, isLoading, mutate } = useSWR(
    'https://jsonplaceholder.typicode.com/users',
    fetcher
  )

  const refreshData = () => mutate()

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Chapter 6: Data Fetching with Fetch, Axios, and SWR</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">API Examples</h2>
          <button
            onClick={refreshData}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Refresh Users (SWR)
          </button>

          <input
            type="text"
            placeholder="Enter name"
            className="border rounded px-2 py-1 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={handleAddUser}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Add User (Axios POST)
          </button>

          {response && <div className="text-sm text-blue-600">{response}</div>}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Users List</h2>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error loading users: {error.message}</p>}
          <ul className="list-disc pl-6 space-y-1">
            {data &&
              data.map((user: {id: number,name: string}) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}