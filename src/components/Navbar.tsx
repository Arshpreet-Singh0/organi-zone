"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-100 w-full border-gray-100 shadow-lg shadow-gray-400 px-8 md:px-auto custom-font">
        <div className="container mx-auto flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-[#FFD700]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8 text-gray-700 font-bold text-xl">
            <li>
              <Link href="#" className="text-[#a73f3c] hover:text-[#e6c200]">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#e6c200]">
                Search
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#e6c200]">
                Explore
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#e6c200]">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#e6c200]">
                Contact
              </Link>
            </li>
          </ul>

          {/* Search Bar & Auth Section */}
          <div className="flex items-center space-x-6">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 pr-5 py-3 text-lg border border-gray-400 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#FFD700]"
              />
              <svg
                className="w-6 h-6 absolute left-4 top-3 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3.5a7.5 7.5 0 006.15 13.15z"
                />
              </svg>
            </div>

            {/* Authentication Section */}
            {session ? (
              <div className="flex items-center space-x-4">
                {/* Profile Image */}

                {/* User Name */}
                <span className="font-bold text-gray-700">
                  hey, {session.user?.name}
                </span>
                {/* Logout Button */}
                <button
                  onClick={() => signOut()}
                  className="px-6 py-3 bg-red-500 hover:bg-red-700 text-white font-bold rounded-xl text-lg"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href={"/auth"}
                // onClick={() => }
                className="px-6 py-3 bg-[#FFD700] hover:bg-[#e6c200] text-black font-bold rounded-xl flex items-center gap-3 text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
