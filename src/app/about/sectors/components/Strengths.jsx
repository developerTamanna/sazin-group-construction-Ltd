const strengths = [
  "16+ years of cross-sector experience",
  "Nationwide government & private projects",
  "Integrated design-to-delivery services",
  "Strong client relationships & trust",
  "Modern equipment & skilled workforce",
];

export default function Strengths() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center">Our Strengths</h2>
      <ul className="mt-10 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {strengths.map((s) => (
          <li
            key={s}
            className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-6 rounded-lg shadow-sm hover:shadow-md transition"
          >
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
