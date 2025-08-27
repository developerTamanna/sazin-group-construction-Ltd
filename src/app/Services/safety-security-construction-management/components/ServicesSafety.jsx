'use client';

import { motion } from 'framer-motion';
import { Bell, Camera, Fingerprint, Lock, Shield, Siren } from 'lucide-react';

const services = [
  { text: 'Fire Detection & Alarm Systems', icon: Bell },
  { text: 'Fire Suppression & Hydrant Systems', icon: Siren },
  { text: 'CCTV & Surveillance Solutions', icon: Camera },
  { text: 'Access Control & Biometric Systems', icon: Fingerprint },
  { text: 'Emergency Evacuation Planning', icon: Shield },
  { text: 'Integrated Security Management', icon: Lock },
];

export default function ServicesSafety() {
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
        Our <span className="text-red-600">Safety & Security</span> Services
      </motion.h2>

      {/* Services Grid */}
      <div className="mt-12 grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.text}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group flex items-start gap-4 bg-white dark:bg-neutral-950
                         border border-neutral-200 dark:border-neutral-700 p-6
                         rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
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
