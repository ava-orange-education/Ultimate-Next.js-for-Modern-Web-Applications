const users: { id: number; name: string; email: string }[] = [{ id: 1, name: 'John', email: 'john@example.com' }];

export async function GET() {
  return Response.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newUser = { id: users.length + 1, ...body };
  users.push(newUser);
  return Response.json(newUser, { status: 201 });
}
