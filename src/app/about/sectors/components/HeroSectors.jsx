'use client';
import { motion } from 'framer-motion';

export default function HeroSectors() {
  const header = "Business Sectors";

  const letterAnimation = {
    hidden: { y: -30, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05, type: 'spring', stiffness: 80 },
    }),
  };

  return (
    <section className="relative h-[40vh] flex items-center justify-start bg-black overflow-hidden py-20 md:py-28">
      {/* Right side red diagonal */}
      <div className="absolute top-0 right-0 h-full w-[20%] md:w-[25%] bg-red-600 transform -skew-x-12 origin-top-right"></div>

      {/* Title */}
      <div className="relative z-10 px-6 md:px-8 text-start max-w-2xl">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl md:text-4xl  font-semi-bold text-white flex justify-start items-center flex-wrap gap-2"
        >
          {header.split('').map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
}