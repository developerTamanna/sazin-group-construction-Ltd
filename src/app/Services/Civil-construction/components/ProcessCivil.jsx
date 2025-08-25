const steps = [
  { n: "01", title: "Planning & Design", desc: "Architectural drawings, structural design, cost estimation." },
  { n: "02", title: "Material Procurement", desc: "Approved vendors & quality-checked raw materials." },
  { n: "03", title: "Construction Execution", desc: "Foundation, structure, finishing & interior works." },
  { n: "04", title: "Quality Control", desc: "Regular inspection & safety compliance." },
  { n: "05", title: "Handover", desc: "Final documentation, warranty & client training." },
];

export default function ProcessCivil() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center">Construction Process</h2>
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
