"use client";
export default function GalleryFilter({ categories, active, setActive }) {
  return (
    <div className="flex justify-center space-x-4 mb-8 flex-wrap">
      {["All", ...categories].map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition 
            ${active === cat 
              ? "bg-red-600 text-white shadow-md" 
              : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-500 hover:text-white"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
