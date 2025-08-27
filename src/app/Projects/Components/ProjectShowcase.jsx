"use client";
import { useState } from "react";

const categories = ["All", "Civil", "Electro", "Agro", "Safety"];

const projects = [
  { id: 1, category: "Civil", img: "/projects/civil1.jpg" },
  { id: 2, category: "Electro", img: "/projects/electro1.jpg" },
  { id: 3, category: "Agro", img: "/projects/agro1.jpg" },
  { id: 4, category: "Safety", img: "/projects/safety1.jpg" },
  { id: 5, category: "Civil", img: "/projects/civil2.jpg" },
  { id: 6, category: "Electro", img: "/projects/electro2.jpg" },
  { id: 7, category: "Agro", img: "/projects/agro2.jpg" },
  { id: 8, category: "Safety", img: "/projects/safety2.jpg" },
];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-neutral-50 dark:bg-neutral-950 py-16 px-6 lg:px-8">
      {/* 🔥 Header Section (like your screenshot) */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10 max-w-6xl mx-auto">
        {/* Left Title */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            Explore Our <span className="text-red-600">Project</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Stands for sustainable, innovative projects
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex gap-2">
          <button className="px-5 py-2 border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-red-600 font-semibold rounded-md hover:bg-red-50 dark:hover:bg-neutral-800 transition">
            ALL PROJECTS
          </button>
          <div className="relative">
            <button className="px-5 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition">
              ALL CATEGORIES ▼
            </button>
            {/* যদি dropdown দরকার হয় */}
            {/* <div className="absolute right-0 mt-2 bg-white dark:bg-neutral-900 shadow-lg rounded-md py-2 w-40">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-neutral-800"
                >
                  {cat}
                </button>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      {/* 🔥 Project Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={p.img}
              alt={p.category}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}