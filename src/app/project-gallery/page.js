import GalleryList from "./components/GalleryList";

export const metadata = {
  title: "Project Gallery | Sazin Construction Ltd.",
  description: "Explore our completed and ongoing projects across sectors.",
};

export default function ProjectGalleryPage() {
  return (
    <main className="bg-white dark:bg-black/70 min-h-screen py-16 px-6 lg:px-8">
      <h1 className="text-4xl font-semi-bold text-center text-black dark:text-white mb-10">
        Project <span className="text-red-600">Gallery</span>
      </h1>
      <GalleryList />
    </main>
  );
}
