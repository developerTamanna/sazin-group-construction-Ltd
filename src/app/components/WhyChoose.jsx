const points = [
  "16+ years of industry experience",
  "Proven track record with govt & private projects",
  "Skilled team of engineers & experts",
  "Own modern equipment & technology",
  "Commitment to safety & quality",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center">Why Choose Us</h2>
      <ul className="mt-10 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {points.map((p) => (
          <li
            key={p}
            className="flex items-start gap-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-4 rounded-lg"
          >
            <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
