'use client'
import { useEffect, useState } from 'react'
import { BackToChapterHome } from '../BackToChapterHome'

export default function CSRPage() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(setData)
  }, [])

  return (
    <div>
      <BackToChapterHome />
      <h1 className="text-xl font-bold">CSR Example</h1>
      <pre>{data ? JSON.stringify(data, null, 2) : 'Loading...'}</pre>
    </div>
  )
}
