const users = [{ id: '1', name: 'John', email: 'john@example.com' }];

export async function GET(_: Request, context: { params: { id: string } }) {
  const user = users.find(u => u.id === context?.params?.id); // no parseInt
  if (user) {
    return Response.json(user);
  } else {
    return Response.json({ message: 'User not found' }, { status: 404 });
  }
}
