const sectors = [
  { title: "Civil Construction", desc: "Residential, commercial, and industrial building solutions." },
  { title: "Electro-Mechanical Works", desc: "Power, substations, fire protection & automation." },
  { title: "EPC Projects", desc: "Turnkey design & execution of engineering projects." },
  { title: "IT-Enabled Services", desc: "Networking, CCTV, access control, and automation." },
  { title: "Fire Protection Systems", desc: "Comprehensive fire detection and suppression." },
  { title: "Logistics & Supply", desc: "Reliable supply chain for construction and engineering." },
  { title: "Agro & Fisheries", desc: "Supporting sustainable agriculture and fisheries industries." },
  { title: "Helmet & Safety Accessories", desc: "Providing high-quality helmets and safety gear." },
];

export default function SectorGrid() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center">Our Core Sectors</h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {sectors.map((s) => (
          <div
            key={s.title}
            className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-red-600">{s.title}</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
