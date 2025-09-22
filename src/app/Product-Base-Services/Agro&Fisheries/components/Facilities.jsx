// ./components/Facilities.jsx
"use client";
import React from "react";
import Image from "next/image";

export default function Facilities() {
  const facilitiesData = [
    {
      id: 1,
      title: "Ponds",
      description: "Total pond area 5 acres. Modern feed & water quality management.",
      image: "/pont1.jpeg",
    },
    {
      id: 2,
      title: "Farmland",
      description: "Crop fields with seasonal rotation, irrigation & storage.",
      image: "/pont2.jpeg",
    },
    {
      id: 3,
      title: "Processing & Storage",
      description: "On-site handling, cold storage, packaging and dispatch facilities.",
      image: "/pont6.jpeg",
    },
  ];

  return (
    <section className="py-12 bg-slate-50 dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-green-600 mb-8">
          Facilities & <span className="text-blue-800">Infrastructure</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilitiesData.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div className="p-6">
                <h4 className="text-lg font-semibold dark:text-gray-200">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}