"use client";

import { signIn } from "next-auth/react";

export default function SignInModal({isOpen, setIsOpen} : {
  isOpen : boolean;
  setIsOpen : (state:boolean)=>void
}) {

  return (
    isOpen && (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 flex justify-center items-center flex-col">
          <h2 className="text-lg font-semibold mb-4">Sign In</h2>
          <p className="mb-4">Continue with Google to proceed.</p>
          <button
            className="w-80 flex gap-2 p-4 font-medium md:text-lg rounded-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer bg-gradient-to-b bg-[#A73F3C] text-white justify-center items-center"
            onClick={async () => {
              await signIn("google");
              setIsOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              fill="currentColor"
              className="size-6 md:size-8 text-white"
            >
              <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
            </svg>
            Continue with Google
          </button>
          <button
            className="w-80 mt-2 p-4 rounded-lg bg-gray-300 hover:bg-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    )
  );
}