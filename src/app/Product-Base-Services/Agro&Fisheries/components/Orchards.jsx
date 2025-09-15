"use client";
import React from "react";
import { agroData } from "../page";


export default function Orchards() {
return (
<section id="orchards" className="mt-8 pb-8">
<div className="prose max-w-none">
<h2>Orchards & Gardens</h2>
<ul>
<li>আমের বাগান: <strong>{agroData.mangoTrees} গাছ</strong> (৩ টি বাগান)</li>
<li>লেবু বাগান: <strong>{agroData.lemonTrees} গাছ</strong></li>
<li>কলার গাছ: ~ <strong>{agroData.bananaTrees}</strong></li>
</ul>
</div>
</section>
);
}