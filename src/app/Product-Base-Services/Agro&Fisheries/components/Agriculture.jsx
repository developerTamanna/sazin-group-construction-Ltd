// ./components/Agriculture.jsx
"use client";
import React from "react";

export default function Agriculture({ data }) {
  return (
    <section id="agriculture" className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-3">Agriculture</h3>
          <p className="text-slate-600 mb-4">
            প্রাকৃতিক ও টেকসই চাষাবাদ। মোট কৃষি জমি প্রায় {data.agriLand} — এখানে ধান, সবজি ও ফলের উৎপাদন করা হয়।
            আধুনিক চাষপ্রণালী ও জৈব সার ব্যবহার করা হয়।
          </p>

          <ul className="list-disc pl-5 text-slate-600 space-y-2">
            <li>সিজনভিত্তিক ফসল ও নিয়ন্ত্রিত সেচ ব্যবস্থা।</li>
            <li>জৈব সার প্রয়োগ এবং Integrated Pest Management (IPM)।</li>
            <li>লোকাল মার্কেট ও পাইকারি সরবরাহের জন্য লজিস্টিক ব্যবস্থা।</li>
          </ul>
        </div>

        <div>
          <img src={data.gallery[3]} alt="Fields" className="rounded-xl shadow-md object-cover w-full h-64" />
        </div>
      </div>
    </section>
  );
}