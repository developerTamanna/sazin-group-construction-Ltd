'use client';

export default function LeadershipMessage() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-600">
            Message from Our Leadership
          </h2>

          <p className="mt-6 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
            “At Sazin Construction, we believe in building more than just
            infrastructure—we build trust, relationships, and a sustainable
            future for Bangladesh. With every project, we strive for excellence,
            innovation, and integrity.”
          </p>

          <p className="mt-6 font-semibold text-black dark:text-white text-lg">
            — Managing Director
          </p>
        </div>
      </div>
    </section>
  );
}
