"use client";

import { useSession } from "next-auth/react";
import UserNavbar from "./nav/UserNavbar";
import AdminNavbar from "./nav/AdminNavbar";

export default function Navbar() {
  const { data: session} = useSession();
  return (
    <>
    {
      session && session?.user?.role=="admin" ? (
        <AdminNavbar /> ) : (
          <UserNavbar />
        )
    }
    </>
  );
}
