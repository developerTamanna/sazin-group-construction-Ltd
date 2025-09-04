"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    title: "Civil Construction & EPC",
    desc: "Residential, commercial & industrial projects with end-to-end delivery.",
  },
  {
    title: "Electro-Mechanical Works",
    desc: "Power systems, substations, fire protection & automation.",
  },
  { 
    title: "Agro & Fisheries", 
    desc: "Supporting sustainable agriculture and fisheries industries." 
  },
  { 
    title: "Helmet & Safety Accessories", 
    desc: "Providing high-quality helmets and safety gear." 
  },
  {
    title: "IT & Automation",
    desc: "Networking, CCTV, access control & system integration.",
  },
  {
    title: "Fire Protection & Safety",
    desc: "Detection, suppression and prevention systems.",
  },
  {
    title: "Logistics & Supply",
    desc: "Equipment, spare parts, and reliable project support.",
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const swiperRef = useRef(null);

  return (
    <section className="bg-neutral-50 dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-semi-bold text-left dark:text-white">
          Our <span className="text-red-500">Services</span>
        </h2>
        <p className="text-left text-lg mt-2 text-neutral-600 dark:text-neutral-300">
          From design to delivery, we provide end-to-end solutions.
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
          className="mt-10 pb-12"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          aria-live="polite"
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <article
                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-6 rounded-xl shadow-sm hover:shadow-lg transition h-full"
                role="group"
                aria-label={service.title}
              >
                <h3 className="text-lg font-semibold text-red-600">{service.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                  {service.desc}
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Footer (Prev/Next + Counter) */}
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-4">
            <button
              className="custom-prev text-xl border border-red-500 text-red-500 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white transition"
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              className="custom-next text-xl border border-red-500 text-red-500 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white transition"
              aria-label="Next slide"
            >
              →
            </button>
          </div>

          <div className="font-semibold">
            <span className="text-red-600 text-xl">{currentIndex}</span>
            <span className="text-gray-500 text-xl">/{services.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
