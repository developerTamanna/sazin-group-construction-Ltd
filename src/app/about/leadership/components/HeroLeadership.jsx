"use client";
import HeaderOfAbout from "@/components/HeaderOfAbout";

export default function HeroLeadership() {
  return (
    <HeaderOfAbout
      header={
        <>
          <span className="text-white">Leadership</span>{" "}
          <span className="text-red-600">Profiles</span>
        </>
      }
      bgImage="/leadership.webp"
      animated={true}
    />
  );
}