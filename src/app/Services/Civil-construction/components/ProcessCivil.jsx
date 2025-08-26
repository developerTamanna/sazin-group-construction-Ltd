'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    n: '01',
    title: 'Planning & Design',
    desc: 'Architectural drawings, structural design, cost estimation.',
  },
  {
    n: '02',
    title: 'Material Procurement',
    desc: 'Approved vendors & quality-checked raw materials.',
  },
  {
    n: '03',
    title: 'Construction Execution',
    desc: 'Foundation, structure, finishing & interior works.',
  },
  {
    n: '04',
    title: 'Quality Control',
    desc: 'Regular inspection & safety compliance.',
  },
  {
    n: '05',
    title: 'Handover',
    desc: 'Final documentation, warranty & client training.',
  },
];

export default function ProcessCivil() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-20 px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white">
        Construction <span className="text-red-600">Process</span>
      </h2>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="relative bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Step Number */}
            <div className="absolute -top-6 left-6 w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white font-bold text-lg shadow-lg">
              {s.n}
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6">
              {s.title}
            </h3>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
