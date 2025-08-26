'use client';

import { CheckCircle } from 'lucide-react';

const services = [
  'Engineering Design & Feasibility Studies',
  'Procurement & Supply Chain Management',
  'Civil, Mechanical & Electrical Construction',
  'Project Management & Supervision',
  'Testing & Commissioning',
  'After-Sales Support & Maintenance',
];

export default function ServicesEPC() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 py-16 px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600">
        Our EPC Services
      </h2>

      <ul className="mt-12 grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((s, idx) => (
          <li
            key={idx}
            className="relative flex items-start gap-4 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 p-6 rounded-xl shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
          >
            {/* Icon */}
            <CheckCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />

            {/* Text */}
            <p className="text-neutral-700 dark:text-neutral-300 font-medium">
              {s}
            </p>

            {/* Animated border effect */}
            <span className="absolute inset-0 rounded-xl border-2 border-red-600 opacity-0 hover:opacity-50 transition-opacity pointer-events-none"></span>
          </li>
        ))}
      </ul>
    </section>
  );
}
