import { projects } from "../Components/projectsData";

export async function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id.toString(), // id অবশ্যই string হতে হবে
  }));
}

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) return <p className="text-center text-red-600">Project not found</p>;

  return (
    <div className="  py-10 bg-white dark:bg-black/60 md:p-8 p-4">
      <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">{project.title}</h1>
      <p className="text-gray-600 mb-4">{project.category} · {project.date}</p>
      <img src={project.img} alt={project.title} className="w-full rounded-lg mb-6" />
      <p className="text-gray-800">{project.description}</p>
    </div>
  );
}
