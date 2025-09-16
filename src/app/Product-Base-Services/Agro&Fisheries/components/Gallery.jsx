"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // swiper core css
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function Gallery({ data }) {
  return (
    <section id="gallery" className="py-12 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold mb-6 text-green-600">Gallery</h3>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          grabCursor={true}
        >
          {data.gallery.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="rounded-lg overflow-hidden shadow-sm">
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}