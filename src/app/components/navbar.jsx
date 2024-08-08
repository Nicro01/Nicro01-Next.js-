"use client";

import { useEffect, useState } from "react";
import useAuth from "../controller/useAuth";
import Link from "next/link";

export default function Navbar() {
  const isLoggedIn = useAuth();

  return (
    <header className="border-b-4 border-neutral-800">
      <nav className="poppins flex select-none items-center justify-between p-8 max-sm:flex-col max-sm:gap-5 sm:mx-auto sm:max-w-[95%]">
        <a draggable="false" href="/">
          <span className="text-4xl righteous">Nicro01</span>
        </a>
        <div className="flex items-center gap-6 text-lg max-sm:flex-col max-sm:px-4">
          <div className="items-center gap-6 text-center max-sm:grid max-sm:grid-cols-3 sm:flex">
            <Link href="/" className="button-shadow  rounded-lg px-3 py-1">
              Home
            </Link>
            <Link href="/blog" className="button-shadow  rounded-lg px-3 py-1">
              Blog
            </Link>

            <Link href="/about" className="button-shadow  rounded-lg px-3 py-1">
              About
            </Link>

            {isLoggedIn ? (
              <Link
                href="/panel"
                className="button-shadow rounded-lg px-3 py-1"
              >
                Panel
              </Link>
            ) : (
              <Link
                href="/login"
                className="button-shadow  rounded-lg px-3 py-1"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
