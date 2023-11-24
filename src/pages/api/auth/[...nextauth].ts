import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma";

export const authOptions: AuthOptions = {
  providers: [
    Google({
      clientId:
        "218246328120-v5idnq7u97a0jm5tcdmuju4ncq3bhln2.apps.googleusercontent.com" as string,
      clientSecret: "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",
    }),
    Github({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  pages: {
    signIn: "/sign-in",
  },
  adapter: PrismaAdapter(prisma!),
  callbacks: {
    async session({ session, user }) {
      return {
        ...session,
        user,
      };
    },
  },
};

export default NextAuth(authOptions);
