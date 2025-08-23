const services = [
  {
    title: "Civil Construction & EPC",
    desc: "Residential, commercial & industrial projects with end-to-end delivery.",
  },
  {
    title: "Electro-Mechanical Works",
    desc: "Power systems, substations, fire protection & automation.",
  },
  {
    title: "IT & Automation",
    desc: "Networking, CCTV, access control & system integration.",
  },
  {
    title: "Fire Protection & Safety",
    desc: "Detection, suppression and prevention systems.",
  },
  {
    title: "Logistics & Supply",
    desc: "Equipment, spare parts, and reliable project support.",
  },
];

export default function Services() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center">Our Services</h2>
      <p className="text-center mt-2 text-neutral-600 dark:text-neutral-300">
        From design to delivery, we provide end-to-end solutions.
      </p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-red-600">{s.title}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
