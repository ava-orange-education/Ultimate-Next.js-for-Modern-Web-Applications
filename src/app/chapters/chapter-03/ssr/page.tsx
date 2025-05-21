import { BackToChapterHome } from '../BackToChapterHome'

export const dynamic = 'force-dynamic'

export default async function SSRPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const data = await res.json()

  return (
    <div>
      <BackToChapterHome />
      <h1 className="text-xl font-bold">SSR Example</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
