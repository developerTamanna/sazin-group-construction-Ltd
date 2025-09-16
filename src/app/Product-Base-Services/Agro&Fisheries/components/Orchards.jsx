// ./components/Orchards.jsx
"use client";
import React from "react";

export default function Orchards({ data }) {
  return (
    <section id="orchards" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Orchards & Plantations</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl p-6 bg-slate-50 shadow-sm">
            <h4 className="text-lg font-semibold">Mango Groves</h4>
            <p className="mt-2 text-sm text-slate-600">3 Grove, total approx {data.mangoTrees} mango trees. Seasonal harvesting & value-addition planned.</p>
          </div>

          <div className="rounded-xl p-6 bg-slate-50 shadow-sm">
            <h4 className="text-lg font-semibold">Lemon Gardens</h4>
            <p className="mt-2 text-sm text-slate-600">Approximately {data.lemonTrees} lemon trees across the estate — irrigation & pruning maintained.</p>
          </div>

          <div className="rounded-xl p-6 bg-slate-50 shadow-sm">
            <h4 className="text-lg font-semibold">Banana Plantations</h4>
            <p className="mt-2 text-sm text-slate-600">{data.bananaTrees} banana plants providing continuous yields.</p>
          </div>
        </div>
      </div>
    </section>
  );
}