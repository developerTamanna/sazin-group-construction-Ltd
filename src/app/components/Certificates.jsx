const certificates = [
  "Incorporation Certificate",
  "Trade License",
  "VAT Registration",
  "Income Tax Certificate",
  "Fire Safety License",
];

export default function Certificates() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center">Certificates & Licenses</h2>
      <p className="text-center mt-2 text-neutral-600 dark:text-neutral-300">
        Ensuring compliance, credibility, and trust.
      </p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert}
            className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-6 rounded-lg shadow-sm text-center"
          >
            {cert}
          </div>
        ))}
      </div>
    </section>
  );
}
