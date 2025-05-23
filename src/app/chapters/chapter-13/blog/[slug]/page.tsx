import { getAllPostSlugs, getPostBySlug } from "../../lib/cmsClient";

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug:unknown) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </article>
  );
}

export const revalidate = 60;