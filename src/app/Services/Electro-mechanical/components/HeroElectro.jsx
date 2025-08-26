'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroElectro() {
  const header = 'Electro-Mechanical Construction';
  const desc =
    'Power systems, HVAC, fire safety, automation—design to commissioning under one roof with quality, safety, and reliability.';

  return (
    <section className="relative bg-white dark:bg-gray-900 transition-colors duration-500 min-h-screen flex items-center">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-white to-red-50 dark:from-red-900 dark:via-gray-900 dark:to-red-900 pointer-events-none"></div>

      <div className="relative z-10 grid md:grid-cols-2 w-full max-w-7xl mx-auto items-center gap-8 px-6 md:px-12">
        {/* Left Content */}
        <div className="relative z-10">
          {/* Logo Above Headline */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-400 text-white font-bold shadow-lg">
              ⚡
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
              LOGO
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              {header}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-4 text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-md leading-relaxed"
            >
              {desc}
            </motion.p>

            <motion.a
              href="tel:123456789"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl shadow-lg font-semibold transition-all"
            >
              Call Us Now 123 456 789
            </motion.a>

            <motion.p
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-4 flex items-center gap-2 text-lg font-medium"
            >
              <span className="text-yellow-400">⏰</span> Emergencies 24 hours
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-5 mt-4 text-2xl"
            >
              <span className="cursor-pointer hover:scale-110 transition">
                📷
              </span>
              <span className="cursor-pointer hover:scale-110 transition">
                👍
              </span>
              <span className="cursor-pointer hover:scale-110 transition">
                🐦
              </span>
              <span className="cursor-pointer hover:scale-110 transition">
                💬
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="relative h-80 md:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/woman.jpg"
            alt="Electro-Mechanical Work"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />

          <div className="absolute inset-0 bg-black/30 md:bg-gradient-to-r md:from-black/40 md:to-red-600/20"></div>

          <div className="absolute top-6 left-0 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-1 font-semibold rounded-tr-xl rounded-br-xl shadow-lg text-sm md:text-base">
            🎉 50% Discount On First 50 Customers
          </div>
        </div>
      </div>
    </section>
  );
}
