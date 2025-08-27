'use client';

import { motion } from 'framer-motion';
import { ClipboardList, FileCheck, ShieldCheck } from 'lucide-react';

const standards = [
  { text: 'NFPA (National Fire Protection Association)', icon: ShieldCheck },
  { text: 'BNBC (Bangladesh National Building Code)', icon: ClipboardList },
  { text: 'ISO 45001: Occupational Safety & Health', icon: FileCheck },
  { text: 'ISO 9001: Quality Management', icon: FileCheck },
  { text: 'IEC Standards for Fire & Security Devices', icon: ShieldCheck },
];

export default function StandardsSafety() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 py-16 px-6 lg:px-8">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center text-neutral-900 dark:text-neutral-100"
      >
        Compliance <span className="text-red-600"> & Standards</span>
      </motion.h2>

      {/* Standards Grid */}
      <div className="mt-10 grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {standards.map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.text}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4 bg-white dark:bg-neutral-950
                         border border-neutral-200 dark:border-neutral-700
                         p-6 rounded-xl shadow-sm hover:shadow-lg
                         transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl
                           bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400
                           group-hover:scale-110 transition-transform duration-300"
              >
                <Icon className="w-6 h-6" />
              </div>

              {/* Text */}
              <p className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
                {s.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
