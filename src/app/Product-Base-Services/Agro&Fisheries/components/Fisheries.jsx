"use client";
import React from "react";
import { DATA } from "@/app/page";


export default function Fisheries() {
return (
<section id="fisheries" className="mt-12 pb-8">
<div className="prose max-w-none">
<h2>Fisheries</h2>
<p>
মোট <strong>{DATA.ponds}</strong>টি পুকুর — মোট আয়তন <strong>{DATA.pondArea}</strong>.
</p>
</div>
</section>
);
}