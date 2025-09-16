// ./components/SummaryCards.jsx
"use client";
import React from "react";

export default function SummaryCards({ data }) {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-4 shadow-sm">
          <div className="p-3 rounded-lg bg-green-50 text-green-700">
            {/* pond icon */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M3 12s2-4 9-4 9 4 9 4-2 4-9 4S3 12 3 12z" fill="currentColor" opacity="0.2"/><path d="M3 12s2-4 9-4 9 4 9 4-2 4-9 4S3 12 3 12z" stroke="currentColor" strokeWidth="1"/></svg>
          </div>
          <div>
            <div className="text-2xl font-bold">{data.ponds}</div>
            <div className="text-sm text-slate-600">Ponds (পুকুর)</div>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-4 shadow-sm">
          <div className="p-3 rounded-lg bg-blue-50 text-blue-700">
            {/* land icon */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" fill="currentColor" opacity="0.15"/><path d="M3 10h18" stroke="currentColor" strokeWidth="1"/></svg>
          </div>
          <div>
            <div className="text-2xl font-bold">{data.agriLand}</div>
            <div className="text-sm text-slate-600">Agricultural Land</div>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-4 shadow-sm">
          <div className="p-3 rounded-lg bg-yellow-50 text-yellow-700">
            {/* tree icon */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M12 2c2 0 4 1.5 4 3.5 0 1.3-.9 2.2-2 3 1 0 2 1 2 2 0 .8-.6 1.5-1.4 1.9L13 17v3H11v-3l-1.6-3.1C7.6 14.2 7 13.5 7 12.8c0-1 1-2 2-2 0-.8-1-1.7-1-3C8 3.4 10 2 12 2z" fill="currentColor" opacity="0.12"/></svg>
          </div>
          <div>
            <div className="text-2xl font-bold">{data.mangoTrees + data.lemonTrees}+</div>
            <div className="text-sm text-slate-600">Fruit Trees (Mango + Lemon)</div>
          </div>
        </div>
      </div>
    </section>
  );
}