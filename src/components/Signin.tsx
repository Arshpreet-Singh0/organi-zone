"use client"

import { signIn } from "next-auth/react";


export default function Home() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <SignInButton />
    </div>
  );
}

function SignInButton() {
  return (
    <>
    <button onClick={() => signIn("google")}>
      Sign in with Google
    </button>
    <Dashboard ></Dashboard>
    <LogoutButton/>
    </>
  );
}

import { useSession } from "next-auth/react";

function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div>
      {session ? (
        <p>Welcome, {session.user?.name}!</p>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

import { signOut } from "next-auth/react";

function LogoutButton() {
  return (
    <button onClick={() => signOut()} className="px-4 py-2 bg-red-500 text-white rounded">
      Logout
    </button>
  );
}

