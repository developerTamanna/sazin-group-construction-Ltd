'use client';

const milestones = [
  { title: '100+ Projects', desc: 'Successfully executed nationwide.' },
  { title: '16+ Years', desc: 'Experience in construction & engineering.' },
  { title: '50+ Engineers', desc: 'Skilled professionals driving innovation.' },
];

export default function Milestones() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-14 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600">
        Key Milestones
      </h2>
      <p className="text-center text-xl text-neutral-600 dark:text-neutral-400 mt-2">
        Our Achievements at a Glance
      </p>

      <div className="relative max-w-5xl mx-auto mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {milestones.map((m) => (
          <div
            key={m.title}
            className="bg-white dark:bg-neutral-800 shadow-xl rounded-2xl p-8 text-center transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-red-600">{m.title}</h3>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
              {m.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
