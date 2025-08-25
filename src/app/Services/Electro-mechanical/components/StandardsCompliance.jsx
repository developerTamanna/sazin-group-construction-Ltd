const standards = [
  { code: "BNBC / BSTI", desc: "Local building, electrical & fire codes compliance." },
  { code: "NFPA", desc: "Fire detection, suppression & life safety standards." },
  { code: "IEC / IEEE", desc: "Switchgear, protection & testing best practices." },
  { code: "ASHRAE / SMACNA", desc: "HVAC design, ducting & ventilation guidelines." },
  { code: "ISO 9001/14001/45001", desc: "Quality, environment & occupational health & safety." },
];

export default function StandardsCompliance() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-red-600">Standards & Compliance</h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {standards.map((s) => (
          <div key={s.code} className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold">{s.code}</h3>
            <p className="mt-1 text-neutral-600 dark:text-neutral-300 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
