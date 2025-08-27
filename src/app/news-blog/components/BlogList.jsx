"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { blogData } from "./blogData";
import BlogCard from "./BlogCard";

async function fetchBlogs({ pageParam = 1 }) {
  const limit = 2;
  const start = (pageParam - 1) * limit;
  const end = start + limit;

  const pageData = blogData.slice(start, end);

  return {
    data: pageData,
    hasMore: end < blogData.length,
  };
}

export default function BlogList() {
  const loadMoreRef = useRef(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

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

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto space-y-8">
      {isLoading && <p className="text-center">Loading posts...</p>}

      {data?.pages.map((page) =>
        page.data.map((post) => <BlogCard key={post.id} post={post} />)
      )}

      {/* Loader trigger element */}
      <div ref={loadMoreRef} className="h-10">
        {isFetchingNextPage && (
          <p className="text-center text-red-600">Loading more...</p>
        )}
        {!hasNextPage && (
          <p className="text-center text-base text-neutral-700 dark:text-neutral-300 mt-4">
            🎉 You have reached the end!
          </p>
        )}
      </div>
    </div>
  );
}
