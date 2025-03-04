"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "loading" && (!session || session.user.role !== "admin")) {
      router.push("/");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <p>Loading...</p>; // Show a loading state while checking session
  }

  return <>{children}</>;
}
