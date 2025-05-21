import { BackToChapterHome } from '../BackToChapterHome'

export const revalidate = 10

async function getProducts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

export default async function ISRPage() {
  const products = await getProducts()

  return (
    <div>
      <BackToChapterHome />
      <h1 className="text-xl font-bold">ISR Example</h1>
      <ul className="list-disc pl-6">
        {products.slice(0, 5).map((product:{id: number, title:string}) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  )
}
