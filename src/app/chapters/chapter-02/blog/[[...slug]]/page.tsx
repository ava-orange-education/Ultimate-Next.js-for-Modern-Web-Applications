import { BackToChapterHome } from '../../BackToChapterHome';

export default async function BlogOptional({ params }: { params: { slug?: string[] } }) {
   const { slug } = await params;
  return (
    <div>
      <BackToChapterHome />
      <h1>Optional Catch-All Blog</h1>
      <p>{slug ? slug.join(' / ') : 'All Blog Posts'}</p>
    </div>
  )
}
