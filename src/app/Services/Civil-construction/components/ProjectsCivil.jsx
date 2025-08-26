'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  { title: 'Corporate Office Complex', img: '/civil1.jpg' },
  { title: 'Industrial Warehouse', img: '/civil2.jpg' },
  { title: 'Residential High-Rise', img: '/civil3.jpg' },
];

export default function ProjectsCivil() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-20 px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white">
        Sample <span className="text-red-600">Projects</span>
      </h2>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={p.img}
              alt={p.title}
              width={600}
              height={400}
              className="w-full h-60 md:h-64 object-cover"
            />

            {/* Title overlay */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white text-center py-3 font-semibold text-lg md:text-xl">
              {p.title}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
