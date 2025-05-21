'use client'
import { useState } from 'react'

const apiList = [
  {
    title: 'GET /chapters/chapter-04/api/hello',
    description: 'Basic test endpoint returning a welcome message.',
    path: '/chapters/chapter-04/api/hello',
  },
  {
    title: 'GET /chapters/chapter-04/api/users',
    description: 'Returns a list of all users from the in-memory store.',
    path: '/chapters/chapter-04/api/users',
  },
  {
    title: 'GET /chapters/chapter-04/api/users/1',
    description: 'Returns user with ID 1 if found.',
    path: '/chapters/chapter-04/api/users/1',
  },
  {
    title: 'GET /chapters/chapter-04/api/search?q=test',
    description: 'Returns the query string passed to `q`.',
    path: '/chapters/chapter-04/api/search?q=test',
  },
  {
    title: 'POST /chapters/chapter-04/api/graphql',
    description: 'GraphQL query to return all users.',
    path: '/chapters/chapter-04/api/graphql',
    isGraphql: true,
    query: `{
      users {
        id
        name
        email
      }
    }`,
  },
]

export default function ChapterFourIndex() {
  const [response, setResponse] = useState<string | null>(null)

  async function callApi(path: string, isGraphql = false, query?: string) {
    let res
    if (isGraphql && query) {
      res = await fetch(path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-apollo-operation-name': 'GetUsers'
        },
        body: JSON.stringify({ query })
      })
    } else {
      res = await fetch(path)
    }
    const data = await res.json()
    setResponse(JSON.stringify(data, null, 2))
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Chapter 4: API Routes in Next.js (REST + GraphQL)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {apiList.map((api, idx) => (
            <div key={idx} className="border rounded p-4 bg-white shadow">
              <h2 className="font-semibold text-lg mb-1">{api.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{api.description}</p>
              <button
                onClick={() => callApi(api.path, api.isGraphql, api.query)}
                className={
                  api.isGraphql
                    ? 'bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded'
                    : 'bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded'
                }
              >
                Try It
              </button>
            </div>
          ))}
        </div>

        <div>
          {response && (
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg whitespace-pre-wrap text-sm">
              <h3 className="text-white font-semibold mb-2">API Response:</h3>
              <pre>{response}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
