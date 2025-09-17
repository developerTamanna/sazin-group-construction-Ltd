// ./components/Agriculture.jsx
"use client";
import React from "react";

export default function Agriculture({ data }) {
  return (
    <section className="py-12 bg-slate-50 dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl font-semibold text-green-600 mb-3">
            Agriculture
          </h3>
          <p className="text-slate-600 dark:text-gray-300 mb-4">
            Natural and sustainable farming. The total agricultural land is
            about {data.agriLand} — where rice, vegetables, and fruits are
            cultivated. Modern farming methods and organic fertilizers are used.
          </p>

          <ul className="list-disc pl-5 text-slate-600 dark:text-gray-300 space-y-2">
            <li>Seasonal crops with a controlled irrigation system.</li>
            <li>
              Application of organic fertilizers and Integrated Pest Management
              (IPM).
            </li>
            <li>
              Logistics support for both local markets and wholesale supply.
            </li>
          </ul>
        </div>

        <div>
          <img
            src={data.gallery[3]}
            alt="Fields"
            className="rounded-xl shadow-md object-cover w-full h-64"
          />
        </div>
      </div>
    </section>
  );
}
