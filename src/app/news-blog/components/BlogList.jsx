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
        // 🔹 Performance Tunings
    staleTime: 1000 * 60 * 5, // 5 minutes → reduce refetching
    cacheTime: 1000 * 60 * 30, // 30 minutes cache in memory
    refetchOnWindowFocus: false, // don’t refetch unnecessarily
    refetchOnReconnect: false, // no refetch if net reconnects
    retry: 1, // retry only once if fails
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

  // ✅ JSON-LD for Blog + ItemList
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    headline: "Our Latest Blog Posts",
    description: "Read the latest articles and insights from our blog.",
    blogPost: blogData.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      image: post.image,
      datePublished: new Date(post.date).toISOString(),
      author: {
        "@type": "Person",
        name: post.author,
      },
      description: post.content.slice(0, 160),
    })),
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogData.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: `https://www.yourdomain.com/news-blog`,
    })),
  };

  return (
    <section
      className="flex flex-col items-center max-w-2xl mx-auto space-y-8"
    >
      {isLoading && <p className="text-center dark:text-white">Loading posts...</p>}

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

      {/* ✅ Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
    </section>
  );
}
