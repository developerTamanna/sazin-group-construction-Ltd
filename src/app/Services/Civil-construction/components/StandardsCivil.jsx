'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const standards = [
  'BNBC (Bangladesh National Building Code)',
  'ISO 9001: Quality Management',
  'ISO 14001: Environmental Management',
  'ISO 45001: Occupational Health & Safety',
  'ACI / ASTM Standards for Concrete & Steel',
];

export default function StandardsCivil() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 py-20 px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white">
        Compliance & <span className="text-red-600">Standards</span>
      </h2>

      <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {standards.map((s, idx) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="flex items-start gap-4 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 font-medium">
              {s}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
