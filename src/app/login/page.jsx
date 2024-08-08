"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    axios.get("/api/session").then((response) => {
      if (response.data) {
        setLoggedIn(true);
        router.push("/");
      }
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await axios
      .post("/api/login", {
        email: formData.get("email"),
        password: formData.get("password"),
      })
      .then((response) => {
        if (response.status === 200) {
          router.push("/");
        } else {
          router.push("/login");
        }
      });
  };

  return (
    <>
      {loggedIn ? (
        <div>You are already logged in</div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 min-h-[68vh]">
          <h1 className="text-3xl font-bold mb-6">Login</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              className="border-2 border-neutral-800 rounded-lg p-2"
              name="email"
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              className="border-2 border-neutral-800 rounded-lg p-2"
              placeholder="Password"
              required
            />
            <button
              type="submit"
              className="w-full text-center border-2 bg-neutral-800 text-white font-bold uppercase border-neutral-800 rounded-lg p-2 transition-all duration-100 ease-linear hover:bg-transparent hover:text-neutral-800"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </>
  );
}
