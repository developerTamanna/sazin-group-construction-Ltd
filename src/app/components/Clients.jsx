const clients = [
  "Public Works Department (PWD)",
  "Bangladesh Power Development Board",
  "BPC & Petrobangla",
  "Private Corporates",
];

export default function Clients() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center">Our Clients & Partners</h2>
      <p className="text-center mt-2 text-neutral-600 dark:text-neutral-300">
        Trusted by government & leading organizations across Bangladesh.
      </p>
      <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {clients.map((c) => (
          <li
            key={c}
            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-6 rounded-lg shadow-sm hover:shadow-md transition"
          >
            {c}
          </li>
        ))}
      </ul>
    </section>
  );
}
