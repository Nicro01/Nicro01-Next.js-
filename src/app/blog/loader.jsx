"use client";

import { hourglass } from "ldrs";
import { motion } from "framer-motion";

hourglass.register();

export default function Loader() {
  return (
    <motion.div
      animate={{ scale: 1.0 }}
      initial={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 100, duration: 50 }}
    >
      <div className="col-span-1 button-shadow break-words flex items-center justify-center h-80 rounded-lg border border-gray-200 bg-white p-6 shadow-md">
        <l-hourglass
          size="60"
          bg-opacity="0.1"
          speed="1.75"
          color="black"
        ></l-hourglass>
      </div>
    </motion.div>
  );
}
