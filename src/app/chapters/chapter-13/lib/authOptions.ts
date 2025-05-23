// lib/authOptions.ts
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      // Set user role on initial login
      if (account && user) {
        token.role = "admin"; // Replace with actual logic or DB lookup
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.role) {
        session.user.image = token.role as string;
      }
      return session;
    },
  },
};
