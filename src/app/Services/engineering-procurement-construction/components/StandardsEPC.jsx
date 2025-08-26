'use client';

import { ShieldCheck } from 'lucide-react';

const standards = [
  'BNBC (Bangladesh National Building Code)',
  'NFPA (Fire Safety Standards)',
  'IEC & IEEE (Electrical Standards)',
  'ISO 9001: Quality Management',
  'ISO 14001: Environmental Management',
  'ISO 45001: Occupational Health & Safety',
];

export default function StandardsEPC() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 py-16 px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600">
        Compliance & Standards
      </h2>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {standards.map((s, idx) => (
          <div
            key={idx}
            className="relative flex items-start gap-3 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 shadow-md hover:shadow-2xl transition-transform hover:-translate-y-1 cursor-pointer"
          >
            <ShieldCheck className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
            <p className="text-neutral-900 dark:text-white font-medium">{s}</p>

            {/* Optional hover border effect */}
            <span className="absolute inset-0 rounded-xl border-2 border-red-600 opacity-0 hover:opacity-30 transition-opacity pointer-events-none"></span>
          </div>
        ))}
      </div>
    </section>
  );
}
