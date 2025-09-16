// ./components/Facilities.jsx
"use client";
import React from "react";

export default function Facilities({ data }) {
  return (
    <section id="facilities" className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">Facilities & Infrastructure</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FacilityCard
            title="Ponds"
            value={`${data.ponds} Ponds`}
            desc={`Total pond area ${data.pondArea}. Modern feed & water quality management.`}
            icon={
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M3 12s2-4 9-4 9 4 9 4-2 4-9 4S3 12 3 12z" fill="currentColor" opacity="0.12"/></svg>
            }
          />

          <FacilityCard
            title="Farmland"
            value={data.agriLand}
            desc="Crop fields with seasonal rotation, irrigation & storage."
            icon={
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" fill="currentColor" opacity="0.12"/></svg>
            }
          />

          <FacilityCard
            title="Processing & Storage"
            value="Cold storage & handling"
            desc="On-site handling, packaging and dispatch facilities."
            icon={
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M4 6h16v12H4z" fill="currentColor" opacity="0.12"/></svg>
            }
          />
        </div>
      </div>
    </section>
  );
}

function FacilityCard({ title, value, desc, icon }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
      <div className="flex items-start gap-4">
        <div className="bg-green-50 p-3 rounded-lg text-green-700">{icon}</div>
        <div>
          <h4 className="font-semibold text-lg">{title}</h4>
          <div className="text-sm text-slate-700 mt-1">{value}</div>
          <p className="text-sm text-slate-500 mt-2">{desc}</p>
        </div>
      </div>
    </div>
  );
}
