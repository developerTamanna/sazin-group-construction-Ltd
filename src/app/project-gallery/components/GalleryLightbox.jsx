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
    <div className="fixed z-[999] inset-0 rounded-lg top-20 bg-black bg-opacity-90 flex items-center justify-center ">
      <button onClick={onClose} className="absolute top-4 right-6 cursor-pointer text-red-800 text-2xl">
        <FaTimes />
      </button>
      <button onClick={onPrev} className="absolute left-6 text-black font-bold text-4xl cursor-pointer">‹</button>
      <div className="w-full max-w-[85rem] object-cover h-full ">
        <Image
          src={project.image}
          alt={project.title}
          width={1366}
          height={700}
          className="w-full h-auto rounded-lg shadow-xl  "
        />
        <div className="text-center bg-white/40 rounded px-4 py-2 absolute bottom-4 right-1/2 translate-x-1/2 text-black">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <p className="font-bold">{project.category} · {project.year}</p>
        </div>
      </div>
      <button onClick={onNext} className="absolute right-6 text-black font-bold text-4xl cursor-pointer">›</button>
    </div>
  );
}
