'use client';
import {
  FaBoxOpen,
  FaChalkboardTeacher,
  FaDraftingCompass,
  FaHandsHelping,
  FaTools,
  FaVial,
} from 'react-icons/fa';

const steps = [
  {
    n: '01',
    title: 'Design & Engineering',
    desc: 'Load study, single-line diagram, HVAC sizing, hydraulic/fire calcs.',
    icon: FaDraftingCompass,
  },
  {
    n: '02',
    title: 'Procurement & QA',
    desc: 'Approved vendor list, FAT/QA, logistics planning & delivery.',
    icon: FaBoxOpen,
  },
  {
    n: '03',
    title: 'Installation',
    desc: 'Cable laying, panel erection, ducting/piping, device mounting.',
    icon: FaTools,
  },
  {
    n: '04',
    title: 'Testing & Commissioning',
    desc: 'IR & continuity, relay setting, performance & integration tests.',
    icon: FaVial,
  },
  {
    n: '05',
    title: 'Handover & Training',
    desc: 'As-built docs, O&M manuals, safety drills & operator training.',
    icon: FaChalkboardTeacher,
  },
  {
    n: '06',
    title: 'After-Sales Support',
    desc: 'Warranty service, AMC, preventive maintenance & upgrades.',
    icon: FaHandsHelping,
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white">
        Delivery Process
      </h2>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="group border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 bg-neutral-50 dark:bg-neutral-900 transition-transform transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-red-600 font-bold text-2xl">{s.n}</div>
              <h3 className="text-lg font-semibold mt-2 text-gray-900 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
