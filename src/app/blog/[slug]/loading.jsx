"use client";

import { hourglass } from "ldrs";

hourglass.register();

export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <l-hourglass
        size="60"
        bg-opacity="0.1"
        speed="1.75"
        color="black"
      ></l-hourglass>
    </div>
  );
}
