import { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/db";
import GoogleProvider from "next-auth/providers/google";

export const authOptions : AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user }): Promise<string | boolean> {
      if (!user) {
        return "/auth"; // Redirect to /auth on login error
      }
      return true; // Proceed with login
    },
    async redirect({ baseUrl }: { url: string; baseUrl: string }): Promise<string> {
      return `${baseUrl}/`;
    },
  },
};