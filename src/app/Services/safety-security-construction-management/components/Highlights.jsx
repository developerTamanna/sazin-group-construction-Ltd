'use client';

import { motion } from 'framer-motion';
import { Camera, FileCheck, ShieldCheck } from 'lucide-react';

const items = [
  {
    title: 'Integrated Safety Systems',
    desc: 'Fire detection, suppression & evacuation planning.',
    icon: ShieldCheck,
  },
  {
    title: 'Advanced Security Solutions',
    desc: 'CCTV, access control, perimeter protection & alarms.',
    icon: Camera,
  },
  {
    title: 'Compliance & Certification',
    desc: 'NFPA, BNBC, ISO & local authority approvals.',
    icon: FileCheck,
  },
];

export default function Highlights() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100"
      >
        Why Choose Our <span className="text-red-600">Safety Solutions</span>
      </motion.h2>

      {/* Cards */}
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((it, idx) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700
                         p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl
                              bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400
                              group-hover:scale-110 transition-transform duration-300"
              >
                <Icon className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-gray-100">
                {it.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                {it.desc}
              </p>

              {/* Border Glow Animation */}
              <span
                className="absolute inset-0 rounded-2xl border-2 border-transparent
                               group-hover:border-red-500/50 transition-all duration-500"
              ></span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
