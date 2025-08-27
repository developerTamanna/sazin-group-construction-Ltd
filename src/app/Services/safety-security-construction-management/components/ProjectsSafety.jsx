'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  { title: 'Industrial Fire Safety System', img: '/fire.jpg' },
  { title: 'Corporate CCTV & Access Control', img: '/cctv.jpg' },
  {
    title: 'High-Rise Emergency Evacuation Setup',
    img: '/high-rise-infographic.jpg',
  },
];

export default function ProjectsSafety() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center text-neutral-900 dark:text-neutral-100"
      >
        Sample <span className="text-red-600">Safety Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="group rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700
                       bg-neutral-50 dark:bg-neutral-900 shadow-sm hover:shadow-xl
                       transition-all duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={p.img}
                alt={p.title}
                width={600}
                height={400}
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Title */}
            <div className="p-4 text-center">
              <p className="font-semibold text-neutral-800 dark:text-neutral-200">
                {p.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
