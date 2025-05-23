export async function getAllPostSlugs() {
  return ["intro-to-evs", "maintenance-tips"];
}

export async function getAllPosts() {
  return [
    { slug: "intro-to-evs", title: "Intro to EVs" },
    { slug: "maintenance-tips", title: "Maintenance Tips" }
  ];
}

export async function getPostBySlug(slug: string) {
  return {
    title: slug.replace("-", " "),
    body: "This is a sample blog post for " + slug,
  };
}