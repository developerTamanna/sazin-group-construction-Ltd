"use client";
import React from "react";
import { DATA } from "@/app/page";


export default function Gallery() {
return (
<section id="gallery" className="mt-8 pb-8">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-semibold">Gallery</h2>
<p className="text-sm text-slate-500">Recent photos</p>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
{DATA.gallery.map((src, i) => (
<div key={i} className="rounded-lg overflow-hidden shadow-sm bg-white">
<img src={src} alt={`gallery-${i}`} className="w-full h-40 object-cover" />
</div>
))}
</div>
</section>
);
}