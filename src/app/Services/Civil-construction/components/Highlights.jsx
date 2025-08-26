'use client';

import { motion } from 'framer-motion';
import { Award, Clock, Leaf } from 'lucide-react';

const items = [
  {
    title: '16+ Years Experience',
    desc: 'Trusted for major government & private projects.',
    Icon: Award,
  },
  {
    title: 'On-Time Delivery',
    desc: 'Structured execution ensures projects are delivered as promised.',
    Icon: Clock,
  },
  {
    title: 'Sustainable Practices',
    desc: 'Environment-friendly materials & green building techniques.',
    Icon: Leaf,
  },
];

export default function Highlights() {
  return (
    <section
      aria-labelledby="why-choose-title"
      className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8"
    >
      <h2
        id="why-choose-title"
        className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white"
      >
        Why Choose Us
      </h2>

      <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((it, idx) => {
          const Icon = it.Icon;
          return (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ translateY: -6, scale: 1.01 }}
              className="relative group bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 focus-within:shadow-xl"
              tabIndex={0}
              role="article"
              aria-label={it.title}
            >
              {/* Top accent line */}
              <span className="absolute -top-1 left-4 w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full opacity-90" />

              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 grid place-items-center w-14 h-14 md:w-16 md:h-16 rounded-lg
                             bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 shadow-inner"
                >
                  <Icon className="w-7 h-7 md:w-8 md:h-8" aria-hidden />
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {it.desc}
                  </p>
                </div>
              </div>

              {/* subtle decorative dot that appears on hover */}
              <span
                className="absolute right-5 bottom-5 w-2 h-2 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden
              />
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
