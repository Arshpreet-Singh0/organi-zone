import { DefaultUser } from "next-auth";

// Extend the default User type to include `role`
declare module "next-auth" {
  interface User extends DefaultUser {
    role?: string; // Allow role to be optional
  }

  interface Session {
    user: User & {
      role?: string;
    };
  }

  interface JWT {
    role?: string;
  }
}
