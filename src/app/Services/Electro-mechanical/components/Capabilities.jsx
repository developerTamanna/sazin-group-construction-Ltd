// app/(routes)/about/components/Capabilities.jsx
'use client';

import { motion } from 'framer-motion';
import { Battery, Cpu, Flame, Sun, Wind, Zap } from 'lucide-react';

const capabilities = [
  {
    title: 'LV/MV Power Distribution',
    points: [
      'MDB, SDB, ATS/AMF',
      'Busbar trunking, cable tray',
      'Earthing & lightning protection',
    ],
    icon: Zap,
  },
  {
    title: 'Substations',
    points: [
      'Transformer, RMU, VCB/ACB',
      'Protection relays & SCADA I/O',
      'Testing & commissioning',
    ],
    icon: Battery,
  },
  {
    title: 'HVAC & Ventilation',
    points: [
      'Chillers/VRF/VRV',
      'Ducting, AHU, Exhaust',
      'Clean room & pressurization',
    ],
    icon: Wind,
  },
  {
    title: 'Fire Detection & Suppression',
    points: [
      'Addressable/Conventional panel',
      'Sprinkler, hydrant, pump room',
      'Inert gas/Foam systems',
    ],
    icon: Flame,
  },
  {
    title: 'BMS & Industrial Automation',
    points: [
      'PLC, VFD, HMI/SCADA',
      'Energy monitoring & analytics',
      'Access control & CCTV integration',
    ],
    icon: Cpu,
  },
  {
    title: 'Renewables & Power Quality',
    points: ['Solar PV integration', 'UPS & AVR', 'Harmonics & PFC'],
    icon: Sun,
  },
];

export default function Capabilities() {
  return (
    <section className="relative bg-neutral-50 dark:bg-neutral-900 py-20 px-4 sm:px-6 lg:px-12 transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white text-center"
        >
          Core <span className="text-red-600">Capabilities</span>
        </motion.h2>

        {/* Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="group flex items-start gap-5 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-500 w-full max-w-md mx-auto"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg group-hover:scale-110 transition">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <div className="text-left">
                  <h3
                    className="
                      text-xl font-semibold
                      text-neutral-900 dark:text-neutral-100
                      group-hover:text-red-600 dark:group-hover:text-red-400
                      transition
                    "
                  >
                    {cap.title}
                  </h3>

                  <ul className="mt-3 space-y-1 text-neutral-700 dark:text-neutral-300 text-sm list-disc pl-5">
                    {cap.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}