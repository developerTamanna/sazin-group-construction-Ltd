"use client";
import Hero from '../Agro&Fisheries/components/Hero';
import Card from './components/card';

export default function Home() {
  const heroData = {
    heroImage: "/images/agro.jpg",
    name: "Agro & Fisheries",
  };

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50">
      <Hero data={heroData} />
      <Card />
    </div>
  );
}
