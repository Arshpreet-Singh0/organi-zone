import { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/db";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }
      
        // Check if the admin exists in the database
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        console.log(user);
        
      
        if (!user || user.role !== "admin" || !user.password) {
          throw new Error("Unauthorized: Only admins can log in.");
        }
      
        // Compare password
        const passwordMatch = await bcrypt.compare(credentials.password, user.password);
        if (!passwordMatch) {
          throw new Error("Invalid credentials");
        }
      
        // Return only the fields that NextAuth expects
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role, // Ensure role is included
          image: user.image,
        };
      }
      
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || "user";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        // @ts-ignore
        session.user.role = token.role;
      }
      return session;
    },
    async signIn({ user }) {
      return user ? true : "/auth";
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/`;
    },
  },
  session: {
    strategy: "jwt",
  },
};
