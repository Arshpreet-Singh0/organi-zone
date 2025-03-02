"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = async(e : React.FormEvent)=>{
    e.preventDefault();
    console.log(setEmail);
    
    const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
  
      if (result?.error) {
        toast.error("Invalid credentials. Please try again.");
      } else {
        toast.success('Login Success');
        router.push('/admin')
      }
  }

  return (
    <div className="w-full h-[500px] flex justify-center items-center">
      <form onSubmit={handleSignIn}>
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">Admin Sign In</h2>


          <input
            type="email"
            placeholder="Email"
            className="w-80 p-3 mb-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-80 p-3 mb-4 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="w-80 p-3 bg-[#a73f3c] text-white rounded"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
