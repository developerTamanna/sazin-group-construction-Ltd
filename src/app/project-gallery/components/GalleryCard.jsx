"use client";
import Image from "next/image";
import { useState } from "react";

export default function GalleryCard({ project, onClick }) {
    const [hoveredId, setHoveredId] = useState(null);
  return (
    <div
      onPointerEnter={() => setHoveredId(project.pid)}
      onPointerLeave={() => setHoveredId(null)}
      onPointerMove={() => setHoveredId(project.id)} // 👉 phone এ কাজ করবে
      className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={300}
        className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
      />
      <div className={`absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 flex flex-col justify-center items-center text-white transition
            ${hoveredId === project.id ? "hover:opacity-100" : "opacity-0"}
        `}>
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-sm">{project.category} · {project.year}</p>
        <span onClick={() => onClick(project)} className="mt-2 text-xs bg-red-600 px-3 py-1 rounded-full">Large View</span>
      </div>
    </div>
  );
}
