// ./components/AgroStats.jsx
"use client";
import React, { useEffect, useState } from "react";

export default function AgroStats({ data }) {
  // small counters
  const stats = [
    { id: 1, label: "Ponds", value: data.ponds },
    { id: 2, label: "Mango Trees", value: data.mangoTrees },
    { id: 3, label: "Lemon Trees", value: data.lemonTrees },
  ];

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold mb-4">Location & Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-slate-600">Address</p>
              <p className="font-semibold">{data.addressLine}</p>

              <p className="mt-4 text-sm text-slate-600">Phone</p>
              <a href={`tel:${data.phone}`} className="font-semibold text-green-700">{data.phone}</a>

              <p className="mt-4 text-sm text-slate-600">Email</p>
              <a href={`mailto:${data.email}`} className="font-semibold text-blue-700">{data.email}</a>
            </div>

            <div>
              <div className="rounded-lg overflow-hidden border border-slate-100">
                <iframe
                  src={data.mapEmbedSrc}
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sazin Agro Map"
                />
              </div>
            </div>
          </div>
        </div>

        <aside className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h4 className="text-lg font-bold mb-4">Quick Stats</h4>
          <div className="space-y-3">
            {stats.map((s) => (
              <div key={s.id} className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-extrabold text-green-600">{s.value} <span className="text-sm text-slate-500">+</span></div>
                  <div className="text-sm text-slate-600">{s.label}</div>
                </div>
                <div className="p-3 bg-green-50 rounded-md text-green-600">
                  {/* small icon */}
                  <svg className="w-6 h-6" viewBox="0 0 24 24"><path d="M3 12s2-4 9-4 9 4 9 4-2 4-9 4S3 12 3 12z" fill="currentColor" opacity="0.15"/></svg>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}