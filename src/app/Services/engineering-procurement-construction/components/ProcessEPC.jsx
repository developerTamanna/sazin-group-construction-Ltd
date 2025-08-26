'use client';

import { ClipboardCheck } from 'lucide-react';

const steps = [
  {
    n: '01',
    title: 'Concept & Design',
    desc: 'Engineering studies, feasibility & design packages.',
  },
  {
    n: '02',
    title: 'Procurement',
    desc: 'Vendor selection, material sourcing & logistics.',
  },
  {
    n: '03',
    title: 'Construction',
    desc: 'Civil, MEP, and specialized installation works.',
  },
  {
    n: '04',
    title: 'Testing & Commissioning',
    desc: 'Comprehensive quality checks & trials.',
  },
  {
    n: '05',
    title: 'Handover & Support',
    desc: 'Documentation, training, O&M manuals.',
  },
];

export default function ProcessEPC() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 py-16 px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600">
        EPC Workflow
      </h2>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((s, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-start gap-3 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 shadow-md hover:shadow-2xl transition-transform hover:-translate-y-1 cursor-pointer"
          >
            {/* Step number with icon */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white font-bold text-lg">
                {s.n}
              </div>
              <ClipboardCheck className="w-6 h-6 text-red-600" />
            </div>

            {/* Step title */}
            <h3 className="text-lg font-semibold mt-1 text-neutral-900 dark:text-white">
              {s.title}
            </h3>

            {/* Description */}
            <p className="mt-1 text-neutral-600 dark:text-neutral-300">
              {s.desc}
            </p>

            {/* Optional animated border */}
            <span className="absolute inset-0 rounded-xl border-2 border-red-600 opacity-0 hover:opacity-30 transition-opacity pointer-events-none"></span>
          </div>
        ))}
      </div>
    </section>
  );
}
