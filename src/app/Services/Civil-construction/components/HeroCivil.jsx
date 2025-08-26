'use client';

import { motion } from 'framer-motion';
import { Globe, MapPin } from 'lucide-react';

export default function HeroCivil() {
  const header = 'CIVIL CONSTRUCTION';
  const subHeader = 'SOLUTIONS YOU CAN TRUST';
  const desc =
    'Residential, commercial, and industrial building solutions with quality, safety, and timely delivery.';

  return (
    <section className="relative w-full bg-white dark:bg-gray-900 overflow-hidden">
      {/* Left Gradient Curve */}
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute left-0 top-0 h-full w-[55%] bg-gradient-to-b from-red-700 via-red-600 to-red-500 rounded-br-[70%] pointer-events-none"
      />

      {/* Right Accent Shape */}
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        className="absolute right-0 top-0 h-[80%] w-[30%] bg-gradient-to-t from-red-500/40 to-transparent rounded-bl-[70%] pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-28 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold
                     text-gray-900 dark:text-red-500"
        >
          {header}
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mt-4"
        >
          {subHeader}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          {desc}
        </motion.p>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14 flex flex-col md:flex-row items-center justify-center gap-10"
        >
          {/* Address */}
          <div className="flex items-center gap-3">
            <div className="p-3 bg-red-600 text-white rounded-xl shadow-lg">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-gray-700 dark:text-gray-300 text-lg">
              123 Anywhere St., Any City
            </span>
          </div>

          {/* Website */}
          <div className="flex items-center gap-3">
            <div className="p-3 bg-red-600 text-white rounded-xl shadow-lg">
              <Globe className="w-6 h-6" />
            </div>
            <span className="text-gray-700 dark:text-gray-300 text-lg">
              reallygreatsite.com
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
