"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Lazy removed

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
        <h2 className="text-3xl font-semi-bold text-left dark:text-white">
          Featured <span className="text-red-600">Projects</span>
        </h2>
        <p className="text-left mt-2 text-xl font-semi-bold text-neutral-600 dark:text-neutral-300">
          Landmark projects across Bangladesh.
        </p>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}// prevent all images loading at once
          lazy='true'          // enable lazy load without Lazy module import
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
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
                <div className="relative w-full h-48">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 text-center font-semibold dark:text-white">
                  {p.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-4">
            <button className="custom-prev text-xl border border-red-500 text-red-500 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white transition">
              ←
            </button>
            <button className="custom-next text-xl border border-red-500 text-red-500 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white transition">
              →
            </button>

            <a
              href="/projects"
              className="text-red-600 text-xl hover:underline transition"
            >
              View All Projects
            </a>
          </div>

          <div className="font-semibold ml-2">
            <span className="text-red-600 text-xl">{currentIndex}</span>
            <span className="text-gray-500 text-xl">/{projects.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
