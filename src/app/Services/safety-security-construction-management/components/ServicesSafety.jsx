const services = [
  "Fire Detection & Alarm Systems",
  "Fire Suppression & Hydrant Systems",
  "CCTV & Surveillance Solutions",
  "Access Control & Biometric Systems",
  "Emergency Evacuation Planning",
  "Integrated Security Management",
];

export default function ServicesSafety() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-red-600">Our Safety & Security Services</h2>
      <ul className="mt-10 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {services.map((s) => (
          <li
            key={s}
            className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 p-6 rounded-lg shadow-sm"
          >
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
