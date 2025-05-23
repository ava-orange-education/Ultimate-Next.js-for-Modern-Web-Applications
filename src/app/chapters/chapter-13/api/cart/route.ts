export async function POST(request: Request) {
  const { productId, quantity } = await request.json();
  return new Response(JSON.stringify({ message: "Item added", productId, quantity }));
}

export async function DELETE(request: Request) {
  const { productId } = await request.json();
  return new Response(JSON.stringify({ message: "Item removed", productId }));
}