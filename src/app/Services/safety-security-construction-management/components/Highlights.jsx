const items = [
  { title: "Integrated Safety Systems", desc: "Fire detection, suppression & evacuation planning." },
  { title: "Advanced Security Solutions", desc: "CCTV, access control, perimeter protection & alarms." },
  { title: "Compliance & Certification", desc: "NFPA, BNBC, ISO & local authority approvals." },
];

export default function Highlights() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-14 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center">Why Choose Our Safety Solutions</h2>
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
