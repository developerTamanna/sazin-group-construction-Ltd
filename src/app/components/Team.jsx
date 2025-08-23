const team = [
  { name: "Project Director", role: "Leadership & Strategy" },
  { name: "Senior Engineer", role: "Civil & E/M Execution" },
  { name: "QA/QC Lead", role: "Quality & Safety" },
  { name: "Site Manager", role: "On-site Operations" },
];

export default function Team() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center">Meet Our Experts</h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((m) => (
          <div
            key={m.name}
            className="text-center bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
            <h3 className="font-semibold">{m.name}</h3>
            <p className="text-sm text-neutral-500">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
