// ./components/FuturePlans.jsx
"use client";
import React from "react";

export default function FuturePlans() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Future Plans & Expansion</h3>
        <p className="text-slate-600 mb-6">
          আমরা পরিকল্পনা করেছি আধুনিক value-added processing, cold-chain এবং এক্সপোর্ড রেডি প্যাকেজিং ইউনিট স্থাপন করার — যাতে কৃষকের উৎপাদন সরাসরি মূল্যায়ন পায়।
        </p>
        <div className="inline-flex gap-3">
          <a href="#contact" className="px-6 py-2 rounded-md bg-green-600 text-white">Contact for Partnership</a>
          <a href="#facilities" className="px-6 py-2 rounded-md border border-green-600 text-green-600">Explore Facilities</a>
        </div>
      </div>
    </section>
  );
}