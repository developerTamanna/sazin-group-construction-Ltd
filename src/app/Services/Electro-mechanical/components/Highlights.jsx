const items = [
  { title: "End-to-End Delivery", desc: "Design → Supply → Installation → Testing & Commissioning." },
  { title: "Safety First", desc: "Strict adherence to NFPA, BNBC & international standards." },
  { title: "On-Time Execution", desc: "Structured planning, supervision, and documentation." },
];

export default function Highlights() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-14 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center">What Sets Us Apart</h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((it) => (
          <div
            key={it.title}
            className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-lg font-semibold text-red-600">{it.title}</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
