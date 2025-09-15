"use client";
import React from "react";
import { DATA } from "@/app/page";


export default function Agriculture() {
return (
<section id="agriculture" className="mt-8 pb-8">
<div className="prose max-w-none">
<h2>Agriculture</h2>
<p>
মোট কৃষিজমি: <strong>{DATA.agriLand}</strong>. এখানে ধান, সবজি বা seasonal cropping সম্পর্কিত তথ্য লিখতে পারেন।
</p>
</div>
</section>
);
}