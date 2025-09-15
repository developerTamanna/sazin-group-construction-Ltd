"use client";

import Contact from "@/app/contact/components/Contact";
import Fisheries from "./components/Fisheries";
import FuturePlans from "./components/FuturePlans";
import Hero from "./components/Hero";
import SummaryCards from "./components/SummaryCards";
import Gallery from "./components/Gallery";
import Facilities from "./components/Facilities";
import Orchards from "./components/Orchards";
import Agriculture from "./components/Agriculture";
import AgroStats from "./components/AgroStats";



export const agroData = {
  name: "Sazin Agro & Fisheries",
  ponds: 11,
  pondArea: "≈ 80 বিঘা",
  agriLand: "≈ 75 বিঘা",
  mangoTrees: 1100,
  lemonTrees: 500,
  bananaTrees: "500–600",
  heroImage:
    "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=1600&auto=format&fit=crop",
  gallery: [
    "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?q=80&w=1200&auto=format&fit=crop",
  ],
  addressLine: "Village/Area, District, Bangladesh",
  phone: "+880 1770-887721",
  email: "info@sazinagro.com",
  mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!...", // replace with real
};

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50">
        <Hero />
        <SummaryCards />
        <Fisheries />
        <Agriculture />
        <Orchards />
        <Facilities />
        <Gallery />
        <AgroStats data={agroData} />
        <FuturePlans />
    </div>
  );
}