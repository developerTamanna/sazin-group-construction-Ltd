"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { projects } from "./projectsData";
import { useRouter } from "next/navigation";

const limit = 6; // প্রতি page এ কয়টা project দেখাবে

// Fake API (slice দিয়ে simulate করা হলো)
const fetchProjects = async ({ pageParam = 1 }) => {
  const start = (pageParam - 1) * limit;
  const end = start + limit;

  const pageData = projects.slice(start, end);

  return {
    data: pageData,
    nextPage: end < projects.length ? pageParam + 1 : undefined,
  };
};

export default function ProjectShowcaseInfinity() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["projects-infinity"],
    queryFn: fetchProjects,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
 const router = useRouter();
  // Intersection Observer দিয়ে auto load
  const loadMoreRef = useRef(null);

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { rootMargin: "200px" } // viewport এ আসার আগেই load হবে
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (status === "loading") return <p className="text-center">Loading...</p>;
  if (status === "error") return <p className="text-center text-red-600">Error loading projects.</p>;

  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-10">
        Explore <span className="text-red-600">Our Projects</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data?.pages?.map((page, i) =>
          page.data.map((p) => (
            <div
              key={p.id}
              className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <span className="text-white text-lg font-semibold">
                  {p.title}
                </span>
                <p className="text-sm text-white mb-3">
                  {p.category} · {p.date}
                </p>
                <button onClick={() => router.push(`/Projects/${p.id}`)} className="px-3 cursor-pointer py-1.5 bg-red-600 text-white rounded-md hover:bg-red-900 hover:text-white transition" > View Project </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Loader / End message */}
      <div ref={loadMoreRef} className="text-center mt-8">
        {isFetchingNextPage && <p className="text-gray-500">Loading more...</p>}
        {!hasNextPage && <p className="text-gray-400">All projects loaded ✅</p>}
      </div>
    </section>
  );
}
