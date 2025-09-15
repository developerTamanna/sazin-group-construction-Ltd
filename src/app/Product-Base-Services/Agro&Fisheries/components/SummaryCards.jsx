"use client";
import React from "react";
import { DATA } from "@/app/page";
import Card from "./Card";


export default function SummaryCards() {
return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 -mt-8">
<Card title="Ponds" value={`${DATA.ponds} টি`} />
<Card title="Pond Area" value={DATA.pondArea} />
<Card title="Agriculture Land" value={DATA.agriLand} />
<Card title="Mango Trees" value={`${DATA.mangoTrees} টি`} />
</div>
);
}