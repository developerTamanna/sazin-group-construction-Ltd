"use client";
import React from "react";
import { agroData } from "../page";


export default function Fisheries() {
return (
<section id="fisheries" className="mt-12 pb-8">
<div className="prose max-w-none">
<h2>Fisheries</h2>
<p>
মোট <strong>{agroData.ponds}</strong>টি পুকুর — মোট আয়তন <strong>{agroData.pondArea}</strong>.
</p>
</div>
</section>
);
}