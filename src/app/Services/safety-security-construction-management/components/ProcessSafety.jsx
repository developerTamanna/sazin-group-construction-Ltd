'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle,
  Monitor,
  PenTool,
  ShieldAlert,
  Wrench,
} from 'lucide-react';

const steps = [
  {
    n: '01',
    title: 'Risk Assessment',
    desc: 'Detailed site survey & hazard identification.',
    icon: ShieldAlert,
  },
  {
    n: '02',
    title: 'System Design',
    desc: 'Customized safety & security architecture.',
    icon: PenTool,
  },
  {
    n: '03',
    title: 'Installation',
    desc: 'Professional setup of fire & security equipment.',
    icon: Wrench,
  },
  {
    n: '04',
    title: 'Testing & Training',
    desc: 'System checks, drills & client staff training.',
    icon: CheckCircle,
  },
  {
    n: '05',
    title: 'Monitoring & Maintenance',
    desc: '24/7 support, AMC & periodic inspections.',
    icon: Monitor,
  },
];

export default function ProcessSafety() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-20 px-6 lg:px-8">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center text-neutral-900 dark:text-neutral-100"
      >
        Implementation <span className="text-red-600">Process</span>
      </motion.h2>

      {/* Steps Grid */}
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-neutral-50 dark:bg-neutral-900 border border-neutral-200
                         dark:border-neutral-700 rounded-2xl p-8 shadow-sm
                         hover:shadow-xl transition-all duration-300 group"
            >
              {/* Step Number (background watermark) */}
              <div
                className="absolute top-4 right-6 text-5xl font-extrabold
                              text-neutral-200 dark:text-neutral-800 opacity-40"
              >
                {s.n}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 flex items-center justify-center rounded-xl
                              bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400
                              mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                <Icon className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">
                {s.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
