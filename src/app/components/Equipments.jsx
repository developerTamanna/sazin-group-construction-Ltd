const equipment = [
  "Cranes & Heavy Lifters",
  "Concrete Mixers",
  "Generators",
  "Excavators",
  "Testing & Measuring Tools",
];

export default function Equipment() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center">Our Equipment & Capabilities</h2>
      <p className="text-center mt-2 text-neutral-600 dark:text-neutral-300">
        Modern equipment ensures timely and safe execution.
      </p>
      <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        {equipment.map((e) => (
          <li
            key={e}
            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-6 rounded-lg shadow-sm hover:shadow-md transition"
          >
            {e}
          </li>
        ))}
      </ul>
    </section>
  );
}
