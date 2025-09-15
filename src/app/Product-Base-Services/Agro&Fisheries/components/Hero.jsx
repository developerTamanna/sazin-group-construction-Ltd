"use client";
import React from "react";
import { agroData } from "../page";


function scrollToId(id) {
const el = document.getElementById(id);
if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}


export default function Hero() {
return (
<section className="mt-8">
<div className="rounded-lg overflow-hidden relative bg-gradient-to-b from-emerald-700/60 to-emerald-700/40">
<img src={agroData.heroImage} alt="hero" className="w-full h-[360px] object-cover opacity-80" />
<div className="absolute inset-0 flex items-center">
<div className="max-w-4xl mx-auto px-6 text-white">
<h1 className="text-3xl md:text-5xl font-extrabold leading-tight">{agroData.name}</h1>
<p className="mt-3 text-lg md:text-xl max-w-2xl">Nature to Nurture — Fisheries, Orchards & Sustainable Farming</p>
<div className="mt-6 flex gap-3">
<button onClick={() => scrollToId("contact")} className="px-4 py-2 bg-white text-emerald-700 rounded shadow">Contact Us</button>
<button onClick={() => scrollToId("gallery")} className="px-4 py-2 bg-white/20 border border-white rounded text-white">View Gallery</button>
</div>
</div>
</div>
</div>
</section>
);
}