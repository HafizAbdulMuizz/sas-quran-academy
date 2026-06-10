"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {

  const router = useRouter();

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {

    if (
      password ===
      process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {

      localStorage.setItem(
        "adminLoggedIn",
        "true"
      );

      toast.success(
        "Login Successful"
      );

      router.push("/admin");

    } else {

      toast.error(
        "Wrong Password"
      );

    }

  };

  return (

    <div className="min-h-screen bg-[#F8F5EE] flex justify-center items-center">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-green-900 text-center">

          Admin Login

        </h1>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>
            setPassword(
              e.target.value
            )
          }
          className="
          w-full
          mt-8
          p-4
          border-2
          border-green-200
          rounded-xl
          text-gray-900
          "
        />

        <button
          onClick={handleLogin}
          className="
          w-full
          mt-6
          bg-green-900
          text-white
          py-4
          rounded-xl
          hover:bg-green-800
          "
        >
          Login
        </button>

      </div>

    </div>

  );

}