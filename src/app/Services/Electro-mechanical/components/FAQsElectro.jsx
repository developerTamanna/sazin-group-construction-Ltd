const faqs = [
  { q: "Which brands & specs do you support?", a: "We follow client-approved vendor lists and international specs; alternatives are offered with full technical submittals." },
  { q: "Do you provide as-built & O&M?", a: "Yes—complete as-built drawings, O&M manuals, test reports, and training at handover." },
  { q: "Can you handle live facility upgrades?", a: "Yes—phased execution, isolation planning, safety permits, and downtime minimization." },
];

export default function FAQsElectro() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center">FAQs</h2>
      <div className="mt-10 max-w-4xl mx-auto space-y-4">
        {faqs.map((f) => (
          <details key={f.q} className="group border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 bg-white dark:bg-neutral-950">
            <summary className="cursor-pointer font-semibold text-red-600">{f.q}</summary>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
