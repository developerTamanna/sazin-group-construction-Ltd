import Image from "next/image";
import { projects } from "../Components/projectsData";

export async function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id.toString(),
  }));
}

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project)
    return (
      <p className="text-center text-red-600 text-sm md:text-base">
        Project not found
      </p>
    );

  return (
    <div className="py-10 bg-white dark:bg-black/60 px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
        {/* Left: Image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src={project.img}
            alt={project.title}
            width={600}
            height={400}
            priority={true}
            className="w-full max-w-xl rounded-lg object-cover shadow-md"
          />
        </div>

        {/* Right: Text Content */}
        <div className="max-w-lg lg:pl-4">
          {/* Title */}
          <h1 className="text-lg md:text-3xl lg:text-2xl font-semibold mb-2 text-red-600">
            {project.title}
          </h1>
          <p className="mb-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            {project.sub_title}
          </p>

          {/* Sub info */}
          <p className="text-gray-600 pt-1.5  dark:text-gray-300 mb-3 text-xs md:text-sm">
            {project.category} · {project.date}
          </p>

        </div>
      </div>
    </div>
  );
}
