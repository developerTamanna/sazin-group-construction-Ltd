"use client";
import { useState } from "react";

const categories = ["All", "Civil", "Electro", "Agro", "Safety"];

const projects = [
  { id: 1, category: "Civil", title: "Ruppur Nuclear Power Plant", img: "/project1.png" },
  { id: 2, category: "Electro", title: "Ruppur Nuclear Power Plant", img: "/project2.png" },
  { id: 3, category: "Agro", title: "Ruppur Nuclear Power Plant", img: "/project3.png" },
  { id: 4, category: "Safety", title: "Ruppur Nuclear Power Plant", img: "/project4.png" },
  { id: 5, category: "Civil", title: "Ruppur Nuclear Power Plant", img: "/civil2.jpg" },
  { id: 6, category: "Electro", title: "Ruppur Nuclear Power Plant", img: "/electro2.jpg" },
  { id: 7, category: "Agro", title: "Ruppur Nuclear Power Plant", img: "/agro2.jpg" },
  { id: 8, category: "Safety", title: "Ruppur Nuclear Power Plant", img: "/safety2.jpg" },
  { id: 9, category: "Safety", title: "Ruppur Nuclear Power Plant", img: "/safety2.jpg" },
];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 py-16 px-4 sm:px-6 lg:px-8">
      {/* 🔥 Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10 max-w-6xl mx-auto">
        {/* Left Title */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-gray-200">
            Explore <span className="text-red-600">Our Project</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl dark:text-gray-400 mt-2">
            Stands for sustainable, innovative projects
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-2 relative">
          {/* All Projects Button */}
          <button className="px-5 py-2 border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-red-600 font-semibold rounded-md hover:bg-red-600 hover:text-white dark:hover:bg-neutral-800 transition">
            ALL PROJECTS
          </button>

          {/* Dropdown Button */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-5 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition flex items-center gap-2"
            >
              {activeCategory === "All" ? "ALL CATEGORIES" : activeCategory}
              <span>▼</span>
            </button>

            {/* Dropdown List */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-neutral-900 shadow-lg rounded-md py-2 w-44 z-20">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setDropdownOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-neutral-800 ${
                      activeCategory === cat ? "font-semibold text-red-600" : ""
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 🔥 Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group"
          >
            {/* Project Image */}
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Effect */}
            <div className="absolute inset-0  bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <span className="text-white text-lg font-semibold mb-3">
                {p.title}
              </span>
              <button
                onClick={() => setSelectedProject(p)}
                className="px-3 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-900 hover:text-white transition"
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl max-w-2xl w-full overflow-hidden shadow-xl relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-white bg-red-600 hover:bg-red-700 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>

            {/* Modal Content */}
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                This is a sample description for the{" "}
                <span className="font-semibold">{selectedProject.category}</span>{" "}
                project. You can add more details here about design, features,
                or construction work.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}