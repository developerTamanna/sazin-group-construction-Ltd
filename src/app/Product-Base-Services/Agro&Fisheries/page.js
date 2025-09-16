// ./page.jsx
"use client";

import Hero from "./components/Hero";
import SummaryCards from "./components/SummaryCards";
import Fisheries from "./components/Fisheries";
import Agriculture from "./components/Agriculture";
import Orchards from "./components/Orchards";
import Facilities from "./components/Facilities";
import Gallery from "./components/Gallery";
import AgroStats from "./components/AgroStats";
import FuturePlans from "./components/FuturePlans";

// central data object
export const agroData = {
  name: "Sazin Agro & Fisheries",
  ponds: 11,
  pondArea: "≈ 80 বিঘা",
  agriLand: "≈ 75 বিঘা",
  mangoTrees: 1100,
  lemonTrees: 500,
  bananaTrees: "500–600",
  heroImage:
    "/agro_hero.jpeg",
  gallery: [
    "/pont1.jpeg",
    "/pont2.jpeg",
    "/pont3.jpeg",
    "/pont4.jpeg",
  ],
  addressLine: "House #432, Road #30, DOHS Mohakhali, Dhaka",
  phone: "+880 1770-887721",
  email: "info@sazinagro.com",
  mapEmbedSrc:
    "https://maps.google.com/maps?q=DOHS%20Mohakhali,%20Dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed",
};

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50">
      <Hero data={agroData} />
      <SummaryCards data={agroData} />
      <Fisheries data={agroData} />
      <Agriculture data={agroData} />
      <Orchards data={agroData} />
      <Facilities data={agroData} />
      <Gallery data={agroData} />
      <AgroStats data={agroData} />
      <FuturePlans />
    </div>
  );
}