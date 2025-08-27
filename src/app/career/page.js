import JobList from "./components/JobList";

export const metadata = {
  title: "Career | Sazin Construction Ltd.",
  description: "Explore current job openings and apply online at Sazin Construction Ltd.",
};

export default function CareerPage() {
  return (
    <main className="bg-white dark:bg-black/70 min-h-screen py-16 px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">
        Careers
      </h1>
      <p className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-12">
        Join our dynamic team! Explore open positions below and submit your CV online.
      </p>
      <JobList />
    </main>
  );
}
