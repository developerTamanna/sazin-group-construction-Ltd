import Image from "next/image";

const projects = [
  { title: "Rooppur Nuclear Plant", img: "/images/projects/rooppur.jpg" },
  { title: "560 Model Mosque", img: "/images/projects/mosque.jpg" },
  { title: "Medical Colleges", img: "/images/projects/hospital.jpg" },
];

export default function Projects() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
      <p className="text-center mt-2 text-neutral-600 dark:text-neutral-300">
        Landmark projects across Bangladesh.
      </p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-lg transition"
          >
            <Image
              src={p.img}
              alt={p.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center font-semibold">{p.title}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="/projects"
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
}
