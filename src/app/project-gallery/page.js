import GalleryList from "./components/GalleryList";

export const metadata = {
  title: "Project Gallery | Sazin Construction Ltd.",
  description: "Explore our completed and ongoing projects across sectors.",
};

export default function ProjectGalleryPage() {
  return (
    <main className="bg-white dark:bg-neutral-950 min-h-screen py-16 px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">
        Project Gallery
      </h1>
      <GalleryList />
    </main>
  );
}
