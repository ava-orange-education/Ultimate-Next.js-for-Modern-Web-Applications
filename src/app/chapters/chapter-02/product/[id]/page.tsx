import { BackToChapterHome } from '../../BackToChapterHome';

export default async function ProductPage({ params }: { params: { id: string } }) {
    const { id } = await params;
  return (
    <div>
      <BackToChapterHome />
      <h1>Product ID: {id}</h1>
    </div>
  )
}