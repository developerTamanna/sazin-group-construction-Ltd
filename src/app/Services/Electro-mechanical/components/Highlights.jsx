// app/(routes)/about/components/Highlights.jsx
'use client';

import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Clock4 } from 'lucide-react';

const items = [
  {
    title: 'End-to-End Delivery',
    desc: 'Design → Supply → Installation → Testing & Commissioning.',
    icon: Truck,
  },
  {
    title: 'Safety First',
    desc: 'Strict adherence to NFPA, BNBC & international standards.',
    icon: ShieldCheck,
  },
  {
    title: 'On-Time Execution',
    desc: 'Structured planning, supervision, and documentation.',
    icon: Clock4,
  },
];

export default function Highlights() {
  return (
    <section className="relative bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 py-20 px-6 lg:px-12 transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold tracking-tight"
        >
          What Sets <span className="text-red-600">Us Apart</span>
        </motion.h2>

        {/* Cards */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg group-hover:scale-110 transition">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold group-hover:text-red-600 transition">
                  {it.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {it.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
