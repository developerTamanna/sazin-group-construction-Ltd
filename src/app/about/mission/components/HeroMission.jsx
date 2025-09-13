'use client';

import { motion } from 'framer-motion';

export default function HeroMission() {
  const blocks = [
    { title: "OUR VISION", color: "text-white" },
    { title: "& MISSION", color: "text-white" },
  ];

  const letterAnimation = {
    hidden: { y: -30, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05, type: "spring", stiffness: 80 },
    }),
  };

  return (
    <section className="relative flex items-center justify-start bg-red-600 overflow-hidden py-20 md:py-28">
      {/* Right side black diagonal */}
      <div className="absolute top-0 right-0 h-full w-[20%] md:w-[25%] bg-black transform -skew-x-12 origin-top-right"></div>

      {/* Title row */}
      <div className="relative z-10 w-full px-6 flex flex-wrap items-center justify-start">
        {blocks.map((block, index) => (
          <motion.h2
            key={index}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0, duration: 0.6, type: "spring", stiffness: 80 }}
            className={`font-semi-bold text-2xl md:text-4xl ${block.color} flex flex-wrap pl-4`}
          >
            {block.title.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i + index * 10}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
        ))}
      </div>
    </section>
  );
}