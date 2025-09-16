// ./components/Fisheries.jsx
"use client";
import React from "react";

export default function Fisheries({ data }) {
  return (
    <section id="fisheries" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-3">Fisheries</h3>
          <p className="text-slate-600 mb-4">
            Our fish farming is managed using modern techniques — with a total
            of {data.ponds} ponds covering approximately {data.pondArea}. The
            ponds are regularly maintained, and high-quality fingerlings and
            feed are used.
          </p>

          <ul className="space-y-2 text-slate-600">
            <li>• Modern pond management and stocking practices.</li>
            <li>
              • Eco-friendly exchange systems with proper oxygen maintenance.
            </li>
            <li>• Direct supply to buyers and local markets.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <img
            src={data.gallery[0]}
            alt="Fisheries"
            className="w-full rounded-xl shadow-md object-cover h-56 sm:h-72"
          />
          <div className="grid grid-cols-2 gap-3">
            <img
              src={data.gallery[1]}
              alt="pond"
              className="rounded-lg object-cover h-28 w-full"
            />
            <img
              src={data.gallery[2]}
              alt="feeding"
              className="rounded-lg object-cover h-28 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
