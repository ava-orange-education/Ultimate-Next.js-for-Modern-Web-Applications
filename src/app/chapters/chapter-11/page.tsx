type Post = {
  id: number;
  title: string;
  body: string;
};

async function fetchMockPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
    cache: 'no-store', // Ensures fresh data every request (SSR)
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}

export default async function Chapter11Page() {
  const posts = await fetchMockPosts();
  const serverTime = new Date().toISOString();

  return (
    <main className="p-6 font-sans">
      <h1 className="text-2xl font-bold">Chapter 11: SSR with Mock API</h1>
      <p className="mt-2">🕒 Server Time: <strong>{serverTime}</strong></p>

      <ul className="mt-6 space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded shadow">
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
