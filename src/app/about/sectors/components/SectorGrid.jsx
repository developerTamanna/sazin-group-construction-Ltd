"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const sectors = [
  { title: "Civil Construction", desc: "Residential, commercial, and industrial building solutions." },
  { title: "Electro-Mechanical Works", desc: "Power, substations, fire protection & automation." },
  { title: "EPC Projects", desc: "Turnkey design & execution of engineering projects." },
  { title: "IT-Enabled Services", desc: "Networking, CCTV, access control, and automation." },
  { title: "Fire Protection Systems", desc: "Comprehensive fire detection and suppression." },
  { title: "Logistics & Supply", desc: "Reliable supply chain for construction and engineering." },
  { title: "Agro & Fisheries", desc: "Supporting sustainable agriculture and fisheries industries." },
  { title: "Helmet & Safety Accessories", desc: "Providing high-quality helmets and safety gear." },
];

export default function SectorGrid() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-4xl font-semi-bold text-center dark:text-white">
        Our <span className="text-red-600">Core Sectors</span>
      </h2>

      <div className="mt-10 max-w-6xl mx-auto relative h-fit">
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".sector-next",
            prevEl: ".sector-prev",
          }}
          pagination={{ clickable: true,el:".sector-pagination "}}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          {sectors.map((s, index) => (
            <SwiperSlide key={index}>
              <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-6 rounded-xl shadow-sm hover:shadow-lg transition h-full">
                <h3 className="text-xl font-semibold text-red-600">{s.title}</h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-300">{s.desc}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className="sector-pagination  flex justify-center gap-2 !mt-2"></div>
        </Swiper>

        {/* Footer Bar */}
        <div className="flex justify-between items-center mt-8">
          {/* Left side (Navigation + See All) */}
          <div className="flex items-center gap-4">
            <button className="sector-prev text-xl border border-red-500 text-red-500 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white transition">
              ←
            </button>
            <button className="sector-next text-xl border border-red-500 text-red-500 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white transition">
              →
            </button>
            <Link
              href="/Projects"
              className="text-red-600 font-semibold text-lg hover:underline"
            >
              See All
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
