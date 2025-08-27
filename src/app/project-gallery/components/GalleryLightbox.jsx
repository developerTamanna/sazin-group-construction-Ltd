"use client";
import { useEffect } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

export default function GalleryLightbox({ project, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed z-[999] inset-0 top-20 bg-black bg-opacity-90 flex items-center justify-center ">
      <button onClick={onClose} className="absolute top-4 right-6 cursor-pointer text-red-800 text-2xl">
        <FaTimes />
      </button>
      <button onClick={onPrev} className="absolute left-6 text-white text-3xl">‹</button>
      <div className="max-w-4xl p-4">
        <Image
          src={project.image}
          alt={project.title}
          width={1000}
          height={700}
          className="w-full h-auto rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105"
        />
        <div className="text-center mt-4 text-white">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <p>{project.category} · {project.year}</p>
        </div>
      </div>
      <button onClick={onNext} className="absolute right-6 text-white text-3xl">›</button>
    </div>
  );
}
