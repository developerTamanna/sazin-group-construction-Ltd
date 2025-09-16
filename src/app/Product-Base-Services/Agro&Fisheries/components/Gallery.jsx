// ./components/Gallery.jsx
"use client";
import React from "react";

export default function Gallery({ data }) {
  return (
    <section id="gallery" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-6">Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.gallery.map((src, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-sm">
              <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}