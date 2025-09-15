"use client";
import React from "react";

export default function Card({ title, value }) {
return (
<div className="bg-white rounded-lg p-4 shadow">
<div className="text-sm text-slate-500">{title}</div>
<div className="mt-2 text-xl font-semibold">{value}</div>
</div>
);
}