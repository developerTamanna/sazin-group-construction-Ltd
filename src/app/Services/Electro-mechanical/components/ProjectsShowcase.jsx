import Image from "next/image";

const projects = [
  { title: "220/132kV Substation Aux Systems", img: "/images/projects/em-substation.jpg" },
  { title: "Industrial HVAC & Cleanroom", img: "/images/projects/em-hvac.jpg" },
  { title: "Integrated Fire & BMS", img: "/images/projects/em-bms.jpg" },
];

export default function ProjectsShowcase() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center">Sample Projects</h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div key={p.title} className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900">
            <Image src={p.img} alt={p.title} width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-4 font-semibold text-center">{p.title}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="/projects" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white">
          View All Projects
        </a>
      </div>
    </section>
  );
}
