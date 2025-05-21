import { BackToChapterHome } from '../BackToChapterHome'

export const revalidate = 0

async function getStaticData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

export default async function SSGPage() {
  const posts = await getStaticData()

  return (
    <div>
      <BackToChapterHome />
      <h1 className="text-xl font-bold">SSG Example</h1>
      <ul className="list-disc pl-6">
        {posts.slice(0, 5).map((post:{id: number, title:string}) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
