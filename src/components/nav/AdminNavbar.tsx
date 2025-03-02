
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function AdminNavbar() {
  return (
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

        {/* Admin Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-bold text-xl">
          <li>
            <Link href="/admin" className="text-[#a73f3c] hover:text-[#e6c200]">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/admin/orders" className="hover:text-[#e6c200]">
              Manage orders
            </Link>
          </li>
          {/* <li>
            <Link href="/admin/products" className="hover:text-[#e6c200]">
              Manage Products
            </Link>
          </li> */}
          <li>
            <Link href="/admin/reports" className="hover:text-[#e6c200]">
              Create Account
            </Link>
          </li>
        </ul>

        {/* Logout Button */}
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
