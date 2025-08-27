import BlogList from "./components/BlogList";

export const metadata = {
  title: "News & Blog | Sazin Construction Ltd.",
  description: "Latest updates, industry insights, and company news.",
};

export default function NewsBlogPage() {
  return (
    <main className="bg-white dark:bg-neutral-950 min-h-screen py-16 px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">
        News & Blog
      </h1>
      <BlogList />
    </main>
  );
}
