const team = [
  { name: "Project Director", role: "Leadership & Strategy" },
  { name: "Senior Engineer", role: "Civil & E/M Execution" },
  { name: "QA/QC Lead", role: "Quality & Safety" },
  { name: "Site Manager", role: "On-site Operations" },
];

export default function Team() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center">
          Meet Our <span className="text-red-500">Experts</span>
        </h2>
        <p className="text-center mt-2 text-lg text-neutral-600 dark:text-neutral-300">
          Experienced professionals driving excellence in every project.
        </p>

        {/* Team Grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <div
              key={i}
              className="text-center bg-neutral-50 dark:bg-neutral-900 
              border border-neutral-200 dark:border-neutral-700 
              rounded-xl p-6 shadow-sm hover:shadow-lg transition"
            >
              {/* Avatar placeholder (can be replaced with real img later) */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-xl">
                {m.name.charAt(0)}
              </div>
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">
                {m.name}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {m.role}
              </p>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-10 text-center">
          <a
            href="/team"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-medium transition"
          >
            View Full Team
          </a>
        </div>
      </div>
    </section>
  );
}