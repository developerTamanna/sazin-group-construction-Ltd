"use client";
import { motion } from "framer-motion";

export default function HeroLeadership() {
  const firstWord = "Leadership";
  const secondWord = "Profiles";

  // Animation variant
  const letterAnimation = {
    hidden: { y: -50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 80,
      },
    }),
  };

  return (
    <div className="relative h-[30vh] flex items-center justify-start bg-red-600 overflow-hidden">
      {/* Right side red diagonal */}
      <div className="absolute top-0 right-0 h-full w-[20%] bg-black transform -skew-x-12 origin-top-right"></div>

      {/* Title on left center */}
      <div className="relative z-10 pl-40">
        <h1 className="text-xl md:text-4xl font-semi-bold flex flex-wrap gap-2">
          {/* First Word (White) */}
          {firstWord.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
              className="text-white"
            >
              {char}
            </motion.span>
          ))}

          {/* Second Word (Red) */}
          {secondWord.split("").map((char, i) => (
            <motion.span
              key={i + firstWord.length}
              custom={i + firstWord.length}
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
              className="text-black"
            >
              {char}
            </motion.span>
          ))}
        </h1>
      </div>
    </div>
  );
}
