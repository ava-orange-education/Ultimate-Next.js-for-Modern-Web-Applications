import { getAllPosts } from "../lib/cmsClient";

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <ul>
      {posts.map(post => (
        <li key={post.slug}><a href={`/blog/${post.slug}`}>{post.title}</a></li>
      ))}
    </ul>
  );
}