"use client";
import React from "react";
import { DATA } from "@/app/page";


export default function Orchards() {
return (
<section id="orchards" className="mt-8 pb-8">
<div className="prose max-w-none">
<h2>Orchards & Gardens</h2>
<ul>
<li>আমের বাগান: <strong>{DATA.mangoTrees} গাছ</strong> (৩ টি বাগান)</li>
<li>লেবু বাগান: <strong>{DATA.lemonTrees} গাছ</strong></li>
<li>কলার গাছ: ~ <strong>{DATA.bananaTrees}</strong></li>
</ul>
</div>
</section>
);
}