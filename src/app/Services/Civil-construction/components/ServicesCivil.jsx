'use client';

import { motion } from 'framer-motion';
import {
  Building2,
  Factory,
  Hammer,
  Landmark,
  Layers,
  Route,
} from 'lucide-react';

const services = [
  { title: 'Residential & Commercial Buildings', Icon: Building2 },
  { title: 'Industrial Plants & Warehouses', Icon: Factory },
  { title: 'Bridges & Infrastructure', Icon: Landmark },
  { title: 'Interior Fit-outs & Renovations', Icon: Hammer },
  { title: 'Roads & Pavement Construction', Icon: Route }, // ✅ Road → Route
  { title: 'Specialized Foundations & Piling', Icon: Layers },
];

export default function ServicesCivil() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 py-20 px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white">
        Our <span className="text-red-600">Services</span>
      </h2>

      <div className="mt-12 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, idx) => {
          const Icon = s.Icon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ translateY: -6, scale: 1.02 }}
              className="group bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-7 h-7" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {s.title}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
