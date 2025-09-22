"use client";
import { useState } from "react";

// Demo Data Array
const projects = [
  {
    id: 1,
    title: "Horinathpur SESDP High School, Bera, Pabna.",
    date: "March 4, 2021",
    category: "EED",
    img: "/one.png",
  },
  {
    id: 2,
    title: "Maintenance Work, Pabna Sadar",
    date: "March 4, 2021",
    category: "LGED",
    img: "/two.jpg",
  },
  {
    id: 3,
    title: "Fire Protection System",
    date: "March 4, 2021",
    category: "NHA",
    img: "/three.png",
  },
  {
    id: 4,
    title: "Power Grid Company of Bangladesh",
    date: "March 4, 2021",
    category: "PGCB",
    img: "/four.jpg",
  },
  {
    id: 5,
    title: "Public Work Department, Khulna",
    date: "March 4, 2021",
    category: "PWD",
    img: "/pwd.jpg",
  },
  {
    id: 6,
    title: "Public Work Department, Kushtia",
    date: "March 4, 2021",
    category: "PWD",
    img: "/pwd-1.jpg",
  },
  {
    id: 7,
    title: "Public Work Department, Natore",
    date: "March 4, 2021",
    category: "PWD",
    img: "/pwd-2.jpg",
  },
  {
    id: 8,
    title: "Lalmonirhat Public Work Department",
    date: "March 4, 2021",
    category: "PWD",
    img: "/pwd-3.jpg",
  },
];

const categories = ["All Projects", "BPC", "EED", "LGED", "NHA", "PGCB", "PWD"];

export default function Card() {
  const [filter, setFilter] = useState("All Projects");

  const filteredProjects =
    filter === "All Projects"
      ? projects
      : projects.filter((item) => item.category === filter);

  return (
    <div className="p-6 dark:bg-black py-20">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-md font-medium transition ${
              filter === cat
                ? "bg-red-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl shadow-sm hover:shadow-lg transition bg-white dark:bg-gray-900 flex flex-col items-center p-5"
          >
            {/* Image */}
            <div className="w-full h-44 flex items-center justify-center overflow-hidden mb-4">
              <img
                src={project.img}
                alt={project.title}
                className="max-h-full object-contain transform transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 className="text-gray-800 dark:text-gray-200 font-semibold text-base sm:text-lg lg:text-xl mb-3 text-center leading-snug">
              {project.title}
            </h3>

            {/* Date + Category */}
            <div className="text-gray-500 text-sm flex flex-col sm:flex-row items-center justify-center gap-2">
              <span>📅 {project.date}</span>
              <span>🏷 {project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}