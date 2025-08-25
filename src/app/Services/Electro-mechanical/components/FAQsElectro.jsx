'use client';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

const faqs = [
  {
    q: 'Which brands & specs do you support?',
    a: 'We follow client-approved vendor lists and international specs; alternatives are offered with full technical submittals.',
  },
  {
    q: 'Do you provide as-built & O&M?',
    a: 'Yes—complete as-built drawings, O&M manuals, test reports, and training at handover.',
  },
  {
    q: 'Can you handle live facility upgrades?',
    a: 'Yes—phased execution, isolation planning, safety permits, and downtime minimization.',
  },
];

export default function FAQsElectro() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white">
        FAQs
      </h2>

      <div className="mt-12 max-w-4xl mx-auto space-y-4">
        {faqs.map((f, idx) => (
          <details
            key={idx}
            className="group border border-neutral-200 dark:border-neutral-700 rounded-xl p-4 bg-white dark:bg-neutral-900 shadow-sm transition-shadow hover:shadow-lg"
          >
            <summary className="flex items-center justify-between cursor-pointer font-semibold text-red-600">
              <div className="flex items-center gap-2">
                <FaQuestionCircle />
                {f.q}
              </div>
              <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
