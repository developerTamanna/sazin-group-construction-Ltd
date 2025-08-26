'use client';

import { motion } from 'framer-motion';
import { Clock, CloudLightning, Users } from 'lucide-react';

const items = [
  {
    title: 'Turnkey Solutions',
    desc: 'From design to execution under one contract.',
    icon: CloudLightning,
  },
  {
    title: 'Single Point of Contact',
    desc: 'Smooth communication, accountability & transparency.',
    icon: Users,
  },
  {
    title: 'Cost & Time Efficiency',
    desc: 'Integrated planning reduces delays and overruns.',
    icon: Clock,
  },
];

export default function Highlights() {
  return (
    <section className="relative bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-black dark:text-white">
        Why Choose Our EPC
      </h2>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((it) => (
          <motion.div
            key={it.title}
            className="relative bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-6 rounded-2xl shadow-md flex flex-col items-start gap-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-red-600 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1, rotate: 3 }}
              transition={{ duration: 0.5 }}
            />

            {/* Icon */}
            <div className="bg-red-600 text-white p-3 rounded-xl shadow-md">
              <it.icon className="w-6 h-6" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-red-600">{it.title}</h3>

            {/* Description */}
            <p className="text-neutral-700 dark:text-neutral-300">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
