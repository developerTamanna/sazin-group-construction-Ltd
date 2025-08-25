'use client';
import { motion } from 'framer-motion';

export default function HeroHistory() {
  const header = 'Our Company Journey';
  const desc =
    'Since 2007, Sazin Construction Ltd. has been building Bangladesh’s future through civil, electro-mechanical, and turnkey engineering excellence.';

  return (
    <section className="relative bg-gradient-to-b from-red-50 via-white to-white dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-950 py-20 px-6 lg:px-8">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-200 dark:bg-red-500/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100 dark:bg-red-500/5 rounded-full blur-3xl opacity-40"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white">
          {header}
        </h1>
        <p className="mt-6 text-xl md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {desc}
        </p>
      </motion.div>
    </section>
  );
}
