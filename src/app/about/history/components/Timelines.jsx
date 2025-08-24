const timeline = [
  { year: "2007", event: "Sazin Construction Ltd. was founded in Dhaka." },
  { year: "2010", event: "Completed first major government project." },
  { year: "2015", event: "Expanded into Electro-Mechanical & EPC services." },
  { year: "2018", event: "Participated in Rooppur Nuclear Plant housing project." },
  { year: "2021", event: "Delivered multiple Model Mosque projects nationwide." },
  { year: "2024", event: "Recognized as a trusted EPC contractor in Bangladesh." },
];

export default function Timeline() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-red-600">
        Timeline of Growth
      </h2>
      <div className="mt-10 max-w-3xl mx-auto space-y-6">
        {timeline.map((item) => (
          <div key={item.year} className="flex gap-4">
            <div className="text-red-600 font-bold w-20">{item.year}</div>
            <div className="text-neutral-700 dark:text-neutral-300">{item.event}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
