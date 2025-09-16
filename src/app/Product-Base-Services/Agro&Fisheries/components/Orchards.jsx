// ./components/Orchards.jsx
"use client";
import React from "react";

export default function Orchards({ data }) {
  return (
    <section id="orchards" className="py-12 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-green-600 mb-4">Orchards & <span className="text-blue-800">Plantations</span></h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl p-6 bg-slate-50 dark:bg-gray-800 shadow-sm">
            <h4 className="text-lg font-semibold dark:text-gray-200">Mango Groves</h4>
            <p className="mt-2 text-sm text-slate-600 dark:text-gray-300">3 Grove, total approx {data.mangoTrees} mango trees. Seasonal harvesting & value-addition planned.</p>
          </div>

          <div className="rounded-xl p-6 bg-slate-50 dark:bg-gray-800 shadow-sm">
            <h4 className="text-lg font-semibold dark:text-gray-200">Lemon Gardens</h4>
            <p className="mt-2 text-sm text-slate-600 dark:text-gray-300">Approximately {data.lemonTrees} lemon trees across the estate — irrigation & pruning maintained.</p>
          </div>

          <div className="rounded-xl p-6 bg-slate-50 dark:bg-gray-800 shadow-sm">
            <h4 className="text-lg font-semibold dark:text-gray-200">Banana Plantations</h4>
            <p className="mt-2 text-sm text-slate-600 dark:text-gray-300">{data.bananaTrees} banana plants providing continuous yields.</p>
          </div>
        </div>
      </div>
    </section>
  );
}