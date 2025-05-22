import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Demo Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = { id: 'demo-user', name: 'Demo User', email: 'demo@example.com' }
        if (credentials?.username === 'Admin' && credentials?.password === 'Admin@12345') {
          return user
        }
        return null
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user)
        { token.user = user}
      return token
    },
    async session({ session, token }) {
      if (token?.user) session.user = token.user
      return session
    },
  },
  pages: {
    signIn: '/chapters/chapter-05/login',
    error: '/chapters/chapter-05/login', 
  },
})

export { handler as GET, handler as POST }
