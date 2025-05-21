const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
];

export const resolvers = {
  Query: {
    users: () => users,
    user: (_: unknown, { id }: { id: string }) => users.find(u => u.id === id),
  },
  Mutation: {
    createUser: (_: unknown, { name, email }: { name: string; email: string }) => {
      const newUser = { id: String(users.length + 1), name, email };
      users.push(newUser);
      return newUser;
    },
    updateUser: (_: unknown, { id, name, email }: { id: string; name?: string; email?: string }) => {
      const user = users.find(u => u.id === id);
      if (!user) throw new Error('User not found');
      if (name) user.name = name;
      if (email) user.email = email;
      return user;
    },
    deleteUser: (_: unknown, { id }: { id: string }) => {
      const index = users.findIndex(u => u.id === id);
      if (index === -1) throw new Error('User not found');
      const deleted = users.splice(index, 1)[0];
      return deleted;
    },
  },
};
