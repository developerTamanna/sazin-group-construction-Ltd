'use client';
import { motion } from 'framer-motion';

export default function HeroHistory({ desc }) {
  const header = 'Our Company Journey';

  const letterAnimation = {
    hidden: { y: -30, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05, type: 'spring', stiffness: 80 },
    }),
  };

  return (
    <section className="relative flex items-center justify-start bg-black overflow-hidden py-20 md:py-28">
      {/* Right side red diagonal */}
      <div className="absolute top-0 right-0 h-full w-[20%] md:w-[25%] bg-red-600 transform -skew-x-12 origin-top-right"></div>

      <div className="relative z-10 pl-6 md:pl-16 max-w-4xl text-left">
        {/* Header */}
        <motion.h1
          className="text-3xl md:text-4xl font-semibold text-white flex flex-wrap gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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

        {/* Description */}
        {desc && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-6 text-white text-base md:text-lg leading-relaxed max-w-2xl"
          >
            {desc}
          </motion.p>
        )}
      </div>
    </section>
  );
}