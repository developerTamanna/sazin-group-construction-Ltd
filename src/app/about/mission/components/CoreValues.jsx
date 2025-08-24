const values = [
  { title: "Integrity", desc: "We uphold honesty, transparency, and fairness." },
  { title: "Excellence", desc: "We deliver high-quality and innovative solutions." },
  { title: "Safety", desc: "We ensure safe practices across every project." },
  { title: "Sustainability", desc: "We prioritize eco-friendly and lasting impacts." },
  { title: "Teamwork", desc: "We work together with clients & partners for success." },
];

export default function CoreValues() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center">Our Core Values</h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {values.map((v) => (
          <div
            key={v.title}
            className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-red-600">{v.title}</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
