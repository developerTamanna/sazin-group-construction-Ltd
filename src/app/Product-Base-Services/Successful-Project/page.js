"use client";

import Card from './components/card';
import HeroHistory from '@/app/about/history/components/HeroHistory';

export default function Home() {
  const heroData = {
    name: "Agro & Fisheries",
  };

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50">
      {/* HeroHistory with custom header */}
      <HeroHistory 
        header="Popular Projects" 
      />

      <Card />
    </div>
  );
}