"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { useRouter, usePathname } from "next/navigation";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-50%" },
};

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState("");

  const pathname = usePathname();

  const router = useRouter();

  function handleClick(name) {
    if (current !== name) {
      // Close the current menu
      setIsOpen(false);

      // Wait for the closing animation to complete before updating the content
      setTimeout(() => {
        setCurrent(name);
        // Re-open the menu with the new content
        setIsOpen(true);
      }, 200); // The timeout should match the animation duration
    }

    router.push(`/panel/${name}`);
  }

  return (
    <div className="-mt-1 select-none">
      <div className="relative z-20  bg-neutral-800 grid grid-cols-4 gap-2 p-2">
        <div
          className="bg-white text-center col-span-1 py-4 cursor-pointer"
          onClick={() => handleClick("articles")}
        >
          Articles
        </div>

        <div
          className="bg-white text-center col-span-1 py-4 cursor-pointer"
          onClick={() => handleClick("users")}
        >
          Users
        </div>
      </div>

      <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
        <div className="relative z-10 bg-white grid grid-cols-2 gap-2 p-2 text-white font-bold">
          <Link
            href={`/panel/${current}`}
            className={`${
              pathname == `/panel/${current}`
                ? "bg-neutral-800 text-white"
                : " bg-white text-neutral-800"
            } border-neutral-800 border-2 text-center py-2 uppercase hover:bg-neutral-800 hover:text-white transition-all duration-100 ease-linear`}
          >
            All
          </Link>
          <Link
            href={`/panel/${current}/new`}
            className={`${
              pathname == `/panel/${current}/new`
                ? "bg-neutral-800 text-white"
                : " bg-white text-neutral-800"
            } border-neutral-800 border-2 text-center py-2 uppercase hover:bg-neutral-800 hover:text-white transition-all duration-100 ease-linear`}
          >
            New
          </Link>
        </div>
      </motion.nav>

      <div className="max-w-6xl w-full mx-auto min-h-[70vh]">{children}</div>
    </div>
  );
}
