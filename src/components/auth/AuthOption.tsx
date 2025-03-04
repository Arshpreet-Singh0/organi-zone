"use client"
import { signOut, useSession } from 'next-auth/react';
import React, { Suspense } from 'react';

const AuthOptionContent = ({ setIsOpen } : {
    setIsOpen : (s:boolean)=>void
}) => {
  const { data: session} = useSession();

  return (
    <div>
      {session ? (
        <div className="flex items-center space-x-4">
          <span className="font-bold text-gray-700">hey, {session.user?.name}</span>
          <button
            onClick={() => signOut()}
            className="px-6 py-3 bg-red-500 hover:bg-red-700 text-white font-bold rounded-xl text-lg"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
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
        </button>
      )}
    </div>
  );
};

const AuthOption = ({ setIsOpen } : {
    setIsOpen : (s:boolean)=>void
}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthOptionContent setIsOpen={setIsOpen} />
    </Suspense>
  );
};

export default AuthOption;
