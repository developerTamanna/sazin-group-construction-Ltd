const steps = [
  { n: "01", title: "Risk Assessment", desc: "Detailed site survey & hazard identification." },
  { n: "02", title: "System Design", desc: "Customized safety & security architecture." },
  { n: "03", title: "Installation", desc: "Professional setup of fire & security equipment." },
  { n: "04", title: "Testing & Training", desc: "System checks, drills & client staff training." },
  { n: "05", title: "Monitoring & Maintenance", desc: "24/7 support, AMC & periodic inspections." },
];

export default function ProcessSafety() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center">Implementation Process</h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {steps.map((s) => (
          <div key={s.title} className="border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 bg-neutral-50 dark:bg-neutral-900">
            <div className="text-red-600 font-bold text-2xl">{s.n}</div>
            <h3 className="text-lg font-semibold mt-1">{s.title}</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
