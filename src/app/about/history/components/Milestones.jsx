const milestones = [
  { title: "100+ Projects", desc: "Successfully executed nationwide." },
  { title: "16+ Years", desc: "Experience in construction & engineering." },
  { title: "50+ Engineers", desc: "Skilled professionals driving innovation." },
];

export default function Milestones() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center">Key Milestones</h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {milestones.map((m) => (
          <div
            key={m.title}
            className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-red-600">{m.title}</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
