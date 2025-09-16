"use client";
import React, { useEffect, useState } from "react";

export default function AgroStats({ data }) {
  const stats = [
    { id: 1, label: "Ponds", value: data.ponds },
    { id: 2, label: "Mango Trees", value: data.mangoTrees },
    { id: 3, label: "Lemon Trees", value: data.lemonTrees },
  ];

  return (
    <section className="py-12 bg-slate-50 dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Location & <span className="text-blue-800">Contact</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xl text-slate-800 dark:text-gray-300">Address</p>
              <p className="font-semibold dark:text-gray-300">{data.addressLine}</p>

              <p className="mt-4 text-xl text-slate-800 dark:text-gray-300">Phone</p>
              <a href={`tel:${data.phone}`} className="font-semibold text-green-700">{data.phone}</a>

              <p className="mt-4 text-xl text-slate-800 dark:text-gray-300">Email</p>
              <a href={`mailto:${data.email}`} className="font-semibold text-green-700">{data.email}</a>
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

        <aside className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h4 className="text-lg text-green-600 md:text-2xl font-semibold mb-4">Quick <span className="text-blue-900">Stats</span></h4>
          <div className="space-y-3">
            {stats.map((s) => (
              <div key={s.id} className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-extrabold text-green-600 ">{s.value} <span className="text-2xl text-blue-900">+</span></div>
                  <div className="text-base text-slate-800 dark:text-gray-300">{s.label}</div>
                </div>
                <div className="p-3 bg-green-100 rounded-md text-blue-800">
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