"use client";
import React from "react";
import Card from "./Card";
import { agroData } from "../page";


export default function SummaryCards() {
return (
<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 -mt-8">
<Card title="Ponds" value={`${agroData.ponds} টি`} />
<Card title="Pond Area" value={agroData.pondArea} />
<Card title="Agriculture Land" value={agroData.agriLand} />
<Card title="Mango Trees" value={`${agroData.mangoTrees} টি`} />
</div>
);
}