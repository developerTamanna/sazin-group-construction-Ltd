const steps = [
  { n: "01", title: "Design & Engineering", desc: "Load study, single-line diagram, HVAC sizing, hydraulic/fire calcs." },
  { n: "02", title: "Procurement & QA", desc: "Approved vendor list, FAT/QA, logistics planning & delivery." },
  { n: "03", title: "Installation", desc: "Cable laying, panel erection, ducting/piping, device mounting." },
  { n: "04", title: "Testing & Commissioning", desc: "IR & continuity, relay setting, performance & integration tests." },
  { n: "05", title: "Handover & Training", desc: "As-built docs, O&M manuals, safety drills & operator training." },
  { n: "06", title: "After-Sales Support", desc: "Warranty service, AMC, preventive maintenance & upgrades." },
];

export default function ProcessSteps() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center">Delivery Process</h2>
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
