'use client';
import {
  FaAtom,
  FaAward,
  FaBuilding,
  FaCogs,
  FaGlobe,
  FaMosque,
  FaProjectDiagram,
} from 'react-icons/fa';

const timeline = [
  {
    year: '2007',
    title: 'Company Founded',
    event: 'Sazin Construction Ltd. was founded in Dhaka.',
    icon: <FaBuilding />,
  },
  {
    year: '2010',
    title: 'First Major Project',
    event: 'Completed first major government project.',
    icon: <FaProjectDiagram />,
  },
  {
    year: '2015',
    title: 'Service Expansion',
    event: 'Expanded into Electro-Mechanical & EPC services.',
    icon: <FaCogs />,
  },
  {
    year: '2018',
    title: 'Nuclear Plant Project',
    event: 'Participated in Rooppur Nuclear Plant housing project.',
    icon: <FaAtom />,
  },
  {
    year: '2021',
    title: 'Model Mosques',
    event: 'Delivered multiple Model Mosque projects nationwide.',
    icon: <FaMosque />,
  },
  {
    year: '2024',
    title: 'Trusted EPC',
    event: 'Recognized as a trusted EPC contractor in Bangladesh.',
    icon: <FaAward />,
  },
  {
    year: '2027',
    title: 'Global Expansion',
    event: 'Enlarging presence globally.',
    icon: <FaGlobe />,
  },
];

export default function Timeline() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-14 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600">
        20 Years of Excellence
      </h2>
      <p className="text-center text-neutral-600 text-xl dark:text-neutral-400 mt-2">
        Our Story
      </p>

      <div className="relative max-w-5xl mx-auto mt-14">
        {/* Snake curve line */}
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 100 500"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M50 0
               C 80 40, 20 80, 50 120
               C 80 160, 20 200, 50 240
               C 80 280, 20 320, 50 360
               C 80 400, 20 440, 50 480"
            stroke="#ef4444"
            strokeWidth="2"
            fill="transparent"
          />
        </svg>

        {/* Timeline cards */}
        <div className="flex flex-col gap-14 relative">
          {timeline.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={item.year}
                className={`relative flex ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                } justify-center`}
              >
                <div className="bg-white dark:bg-neutral-800 shadow-xl rounded-2xl p-8 w-full max-w-md transition-transform hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center gap-2 text-red-600 font-bold text-xl">
                    <span className="text-2xl">{item.icon}</span>
                    {item.year}
                  </div>
                  <div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                    {item.title}
                  </div>
                  <p className="text-base text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                    {item.event}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
