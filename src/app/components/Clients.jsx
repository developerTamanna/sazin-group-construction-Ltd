"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

const clients = [
  { name: "Public Works Department (PWD)", icon: FaBuilding },
  { name: "Bangladesh Power Development Board", icon: FaBuilding },
  { name: "BPC & Petrobangla", icon: FaBuilding },
  { name: "Private Corporates", icon: FaBuilding },
  { name: "Grameen Bank", icon: FaBuilding },
  { name: "BRAC", icon: FaBuilding },
  { name: "Bangladesh Railway", icon: FaBuilding },
  { name: "Local NGOs", icon: FaBuilding },
];

export default function Clients() {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex + 1);
  };

  return (
    <section className="bg-white dark:bg-neutral-950 py-16 px-4 lg:px-8 transition-colors duration-500">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-semi-bold text-left text-gray-800 dark:text-white">
          Our <span className="text-red-600">Clients</span> & Partners
        </h2>
        <p className="text-left text-xl mt-2 text-neutral-600 dark:text-neutral-300">
          Trusted by government & leading organizations across Bangladesh.
        </p>

        {/* Swiper Slider */}
        <div className="mt-10">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            navigation={false} // remove default arrows
          >
            {clients.map((client) => {
              const Icon = client.icon;
              return (
                <SwiperSlide key={client.name}>
                  <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-4 rounded-lg shadow-sm hover:shadow-lg transition flex items-center gap-4 h-24 cursor-pointer">
                    {/* Icon */}
                    <motion.div
                      className="text-red-500 dark:text-red-400 text-3xl"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon />
                    </motion.div>

                    {/* Text */}
                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                      {client.name}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Controls below cards */}
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="text-xl border border-red-500 text-red-500 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white transition"
            >
              <BsArrowLeft />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="text-xl border border-red-500 text-red-500 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white transition"
            >
              <BsArrowRight />
            </button>
            <Link
              href="/products"
              className="text-red-600 font-semi-bold text-xl hover:underline"
            >
              See All 
            </Link>
          </div>

          <div className="font-semibold text-xl">
            <span className="text-red-600">{currentIndex}</span>/
            <span className="text-gray-500">{clients.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
