"use client";

import Link from "next/link";
import { useState } from "react";
import SignInModal from "../auth/Signin";
import AuthOption from "../auth/AuthOption";

export default function UserNavbar() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen ] = useState(false);

  return (
    <>
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
              <Link href="/" className="text-[#a73f3c] hover:text-[#e6c200]">
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
            <AuthOption setIsOpen={setIsOpen}/>
          </div>
        </div>
      </nav>
    </div>
      
      {
        isOpen && <SignInModal isOpen={isOpen} setIsOpen={setIsOpen}/>
      }
    </>
  );
}
