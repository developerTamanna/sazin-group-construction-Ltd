// app/(routes)/about/components/HeroElectro.jsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroElectro() {
  const header = 'Electro-Mechanical Construction';
  const desc =
    'Power systems, HVAC, fire safety, automation—design to commissioning under one roof with quality, safety, and reliability.';

  return (
    <section className="relative bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <div className="grid md:grid-cols-2 items-center">
        {/* Left side content */}
        <div className="p-8 md:p-16 relative">
          {/* Logo */}
          <div className="absolute top-6 left-6 flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-400 text-white font-bold shadow-lg">
              ⚡
            </div>
            <span className="font-bold text-lg">LOGO</span>
          </div>

          {/* Animated content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              {header}
            </h1>

            {/* Sub description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-md"
            >
              {desc}
            </motion.p>

            {/* Call Now */}
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 inline-block rounded-xl shadow-lg cursor-pointer transition"
            >
              Call Us Now 123 456 789
            </motion.p>

            {/* Emergencies */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-6 flex items-center gap-2 text-lg font-medium"
            >
              <span className="text-yellow-400">⏰</span> Emergencies 24 hours
            </motion.p>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-5 mt-8 text-2xl"
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

        {/* Right side image */}
        <div className="relative h-[400px] md:h-full overflow-hidden">
          {/* 👉 public/woman.jpg ফাইল রাখবে */}
          <Image
            src="/woman.jpg"
            alt="Electro-Mechanical Work"
            fill
            className="object-cover scale-105 transition-transform duration-700"
            priority
          />

          {/* Overlay (Black with red tint) */}
          <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/60 md:to-red-600/40"></div>

          {/* Discount badge */}
          <div className="absolute top-6 left-0 bg-gradient-to-r from-red-600 to-red-500 text-white px-5 py-2 font-semibold rounded-tr-xl rounded-br-xl shadow-lg">
            🎉 50% Discount On First 50 Customers
          </div>
        </div>
      </div>
    </section>
  );
}
