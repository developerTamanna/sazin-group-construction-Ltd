"use client";
import { useState } from "react";
import Image from "next/image";

export default function BlogCard({ post }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
      <Image
        src={post.image}
        alt={post.title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <div className="text-sm text-neutral-500">
          {post.date} · By {post.author}
        </div>
        <h3 className="text-xl font-semibold mt-2">{post.title}</h3>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">
          {expanded ? post.content : post.content.slice(0, 100) + "..."}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 inline-block text-red-600 font-semibold hover:underline transition"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}
