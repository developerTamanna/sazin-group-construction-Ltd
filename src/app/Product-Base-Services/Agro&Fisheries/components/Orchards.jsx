// ./components/Orchards.jsx
"use client";
import React from "react";
import Image from "next/image";

export default function Orchards() {
  const orchardsData = [
    {
      id: 1,
      title: "Mango Groves",
      description: "3 Grove, total approx 250 mango trees. Seasonal harvesting & value-addition planned.",
      image: "/mango.jpeg",
    },
    {
      id: 2,
      title: "Lemon Gardens",
      description: "Approximately 120 lemon trees across the estate — irrigation & pruning maintained.",
      image: "/lemon.jpg",
    },
    {
      id: 3,
      title: "Banana Plantations",
      description: "300 banana plants providing continuous yields.",
      image: "/banana.jpeg",
    },
  ];

  return (
    <section id="orchards" className="py-12 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-green-600 mb-8">
          Orchards & <span className="text-blue-800">Plantations</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {orchardsData.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden bg-slate-50 dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative h-40 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
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