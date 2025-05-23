export async function getAllCarSlugs() {
  return ["tesla-model-3", "bmw-x5"];
}

export async function getCarBySlug(slug: string) {
  return {
    id: slug,
    name: slug.replace("-", " "),
    images: ["/placeholder.jpg"],
    specs: { range: 300, topSpeed: 150 },
  };
}