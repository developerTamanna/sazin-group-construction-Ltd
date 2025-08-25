"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const projects = [
  { title: "Rooppur Nuclear Plant", img: "/Nuclear.jpeg" },
  { title: "560 Model Mosque", img: "/model-mosque.jpg" },
  { title: "Medical Colleges", img: "/MedicalColleges.jpg" },
  { title: "Metro Rail Depot", img: "/Metro.jpeg" },
  { title: "Highway Bridge", img: "/Highway.jpg" },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const swiperRef = useRef(null);

  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-semi-bold text-left dark:text-white">
          Featured <span className="text-red-600">Projects</span>
        </h2>
        <p className="text-left mt-2 text-xl font-semi-bold text-neutral-600 dark:text-neutral-300">
          Landmark projects across Bangladesh.
        </p>

        {/* Slider */}
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
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-10 pb-12"
        >
          {projects.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-lg transition">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center font-semibold dark:text-white">
                  {p.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Footer (Prev/Next + Counter + View All) */}
        <div className="flex justify-between items-center mt-6">
          {/* Left side - Buttons + Counter */}
          <div className="flex items-center gap-4">
            <button className="custom-prev text-xl border border-red-500 text-red-500 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white transition">
              ←
            </button>
            <button className="custom-next text-xl border border-red-500 text-red-500 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white transition">
              →
            </button>

            {/* Right side - View All */}
            <a
              href="/projects"
              className="text-red-600 text-xl hover:underline transition"
            >
              View All Projects
            </a>
          </div>

          {/* Counter */}
          <div className="font-semibold ml-2">
            <span className="text-red-600 text-xl">{currentIndex}</span>
            <span className="text-gray-500 text-xl">/{projects.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
