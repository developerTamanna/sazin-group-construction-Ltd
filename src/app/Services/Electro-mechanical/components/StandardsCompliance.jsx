'use client';
import {
  FaBolt,
  FaCertificate,
  FaCheckCircle,
  FaFireExtinguisher,
  FaWind,
} from 'react-icons/fa';

const standards = [
  {
    code: 'BNBC / BSTI',
    desc: 'Local building, electrical & fire codes compliance.',
    icon: FaCheckCircle,
  },
  {
    code: 'NFPA',
    desc: 'Fire detection, suppression & life safety standards.',
    icon: FaFireExtinguisher,
  },
  {
    code: 'IEC / IEEE',
    desc: 'Switchgear, protection & testing best practices.',
    icon: FaBolt,
  },
  {
    code: 'ASHRAE / SMACNA',
    desc: 'HVAC design, ducting & ventilation guidelines.',
    icon: FaWind,
  },
  {
    code: 'ISO 9001/14001/45001',
    desc: 'Quality, environment & occupational health & safety.',
    icon: FaCertificate,
  },
];

export default function StandardsCompliance() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center text-black dark:text-white">
        Standards <span className='text-red-600'>& Compliance</span>
      </h2>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {standards.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.code}
              className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 shadow-sm transition-transform transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {s.code}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
