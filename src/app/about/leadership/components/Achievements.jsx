const achievements = [
  "Guided successful execution of 100+ major projects",
  "Recognized for excellence in civil and EPC works",
  "Awarded government contracts for national development projects",
  "Built long-term trust with clients and partners",
];

export default function Achievements() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-semi-bold text-center dark:text-white">Leadership <span className="text-red-600">Achievements</span></h2>
      <ul className="mt-10 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {achievements.map((ach) => (
          <li
            key={ach}
            className="bg-neutral-50 dark:text-gray-300 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-6 rounded-lg shadow-sm hover:shadow-md transition"
          >
            {ach}
          </li>
        ))}
      </ul>
    </section>
  );
}
