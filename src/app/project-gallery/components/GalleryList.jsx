"use client";
import { useState, useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { galleryData } from "./galleryData";
import GalleryCard from "./GalleryCard";
import GalleryFilter from "./GalleryFilter";
import GalleryLightbox from "./GalleryLightbox";

async function fetchProjects({ pageParam = 1 }) {
  const limit = 6;
  const start = (pageParam - 1) * limit;
  const end = start + limit;
  return {
    data: galleryData.slice(start, end),
    hasMore: end < galleryData.length,
  };
}

export default function GalleryList() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const loadMoreRef = useRef(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["projects-gallery"],
      queryFn: fetchProjects,
      getNextPageParam: (last, pages) =>
      last.hasMore ? pages.length + 1 : undefined,
             // 🔹 Performance Tunings
    staleTime: 1000 * 60 * 5, // 5 minutes → reduce refetching
    cacheTime: 1000 * 60 * 30, // 30 minutes cache in memory
    refetchOnWindowFocus: false, // don’t refetch unnecessarily
    refetchOnReconnect: false, // no refetch if net reconnects
    retry: 1, // retry only once if fails
    });

  // infinite scroll
  useEffect(() => {
    if (!loadMoreRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(loadMoreRef.current);
    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const filtered = (data?.pages.flatMap((p) => p.data) || []).filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const categories = [...new Set(galleryData.map((p) => p.category))];

  // lightbox navigation
  const currentIndex = filtered.findIndex((p) => p.id === lightbox?.id);
  const handlePrev = () =>
    setLightbox(filtered[(currentIndex - 1 + filtered.length) % filtered.length]);
  const handleNext = () =>
    setLightbox(filtered[(currentIndex + 1) % filtered.length]);

  return (
    <div>
      <GalleryFilter
        categories={categories}
        active={activeCategory}
        setActive={setActiveCategory}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filtered.map((p) => (
          <GalleryCard key={p.id} project={p} onClick={setLightbox} />
        ))}
      </div>

      <div ref={loadMoreRef} className="h-12 flex justify-center items-center">
        {isFetchingNextPage && <p className="text-red-600">Loading more...</p>}
        {!hasNextPage && <p className="text-gray-600 text-base pt-5 dark:text-gray-200">🎉 End of Gallery</p>}
      </div>

      <GalleryLightbox
        project={lightbox}
        onClose={() => setLightbox(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
