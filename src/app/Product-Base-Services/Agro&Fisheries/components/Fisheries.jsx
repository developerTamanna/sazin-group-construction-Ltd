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
            আমাদের মাছ চাষ আধুনিক পদ্ধতিতে পরিচালিত হয় — মোট {data.ponds}টি পুকুরে মোট পরিমাণ প্রায় {data.pondArea}।
            পুকুরগুলো নিয়মিত মেইনটেইন করা হয় এবং উচ্চমানের চারা ও খাবার ব্যবহৃত হয়।
          </p>

          <ul className="space-y-2 text-slate-600">
            <li>• আধুনিক পুকুর ব্যবস্থাপনা ও ভরায়ণ।</li>
            <li>• পরিবেশ-বান্ধব এক্সচেঞ্জ সিস্টেম, অক্সিজেন মেইন্টেইন করা হয়।</li>
            <li>• সরাসরি ক্রেতা/বাজার সরবরাহের সুবিধা।</li>
          </ul>
        </div>

        <div className="space-y-3">
          <img
            src={data.gallery[0]}
            alt="Fisheries"
            className="w-full rounded-xl shadow-md object-cover h-56 sm:h-72"
          />
          <div className="grid grid-cols-2 gap-3">
            <img src={data.gallery[1]} alt="pond" className="rounded-lg object-cover h-28 w-full" />
            <img src={data.gallery[2]} alt="feeding" className="rounded-lg object-cover h-28 w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}