"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { sustainabilityData } from "./sustainabilityData"; // import from file

export default function Sustainability() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative bg-neutral-50 dark:bg-neutral-950 py-20 px-4 overflow-hidden">

      {/* 🔥 Auto Scrolling Text Container */}
      <motion.div
        className="overflow-hidden mx-auto w-full sm:w-11/12 md:w-4/5 lg:w-3/4 max-w-5xl space-y-12"
        style={{ maxHeight: "700px" }}
        animate={{ y: isPaused ? 0 : ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 40, // scroll speed
          ease: "linear",
        }}
      >
        {sustainabilityData.concat(sustainabilityData).map((item, idx) => (
          <div key={idx} className="space-y-4 text-left md:text-left">
            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              {item.title}
            </h3>
            {/* Text */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </motion.div>

      {/* 🔥 Control Button */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition text-sm sm:text-base"
        >
          {isPaused ? "▶ Resume" : "⏸ Pause"}
        </button>
      </div>
    </section>
  );
}