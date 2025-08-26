"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const strengths = [
  "16+ years of cross-sector experience",
  "Nationwide government & private projects",
  "Integrated design-to-delivery services",
  "Strong client relationships & trust",
  "Modern equipment & skilled workforce",
];

export default function Strengths() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <h2 className="text-4xl font-semi-bold text-center dark:text-white">
        Our <span className="text-red-600">Strengths</span>
      </h2>

      <div className="mt-10 max-w-6xl mx-auto relative">
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".strength-next",
            prevEl: ".strength-prev",
          }}
          pagination={{
            el: ".strength-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              // Tailwind classes for dots
              return `<span class="${className} w-3 h-3 rounded-full mx-1 bg-gray-400 dark:bg-gray-500 inline-block"></span>`;
            },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          {strengths.map((s, index) => (
            <SwiperSlide key={index}>
              <div className="bg-neutral-50 dark:text-gray-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-6 rounded-lg shadow-sm hover:shadow-md transition h-full text-center text-xl flex items-center justify-center">
                {s}
              </div>
            </SwiperSlide>
          ))}

          {/* Pagination Dots - Center under cards */}
          <div className="strength-pagination !mt-6 flex justify-center"></div>
        </Swiper>

        {/* Footer Bar */}
        <div className="flex justify-between items-center mt-8">
          <div className="flex items-center gap-4">
            <button className="strength-prev text-xl border border-red-500 text-red-500 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white transition">
              ←
            </button>
            <button className="strength-next text-xl border border-red-500 text-red-500 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white transition">
              →
            </button>
            <Link
              href="/about"
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