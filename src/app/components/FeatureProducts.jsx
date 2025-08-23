"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Grid } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

const FeatureProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const swiperRef = useRef(null);

  const products = [
    { id: 1, title: "Tools & Machineries", img: "/fullface.jpg" },
    { id: 2, title: "Copper, Insulation", img: "/fullface.jpg" },
    { id: 3, title: "Make to Order", img: "/fullface.jpg" },
    { id: 4, title: "Others", img: "/fullface.jpg" },
    { id: 5, title: "Extra Product", img: "/fullface.jpg" },
    { id: 6, title: "New Product", img: "/fullface.jpg" },
    { id: 7, title: "Another Product", img: "/fullface.jpg" },
    { id: 8, title: "Special Item", img: "/fullface.jpg" },
    { id: 9, title: "Machinery", img: "/fullface.jpg" },
    { id: 10, title: "Equipment", img: "/fullface.jpg" },
    { id: 11, title: "Tools & Machineries", img: "/fullface.jpg" },
    { id: 12, title: "Copper, Insulation", img: "/fullface.jpg" },
    { id: 13, title: "Make to Order", img: "/fullface.jpg" },
    { id: 14, title: "Others", img: "/fullface.jpg" },
    { id: 15, title: "Extra Product", img: "/fullface.jpg" },
    { id: 16, title: "New Product", img: "/fullface.jpg" },
    { id: 17, title: "Another Product", img: "/fullface.jpg" },
    { id: 18, title: "Special Item", img: "/fullface.jpg" },
    { id: 19, title: "Machinery", img: "/fullface.jpg" },
    { id: 20, title: "Equipment", img: "/fullface.jpg" },
  ];

  return (
    <section className="py-14 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-left text-3xl text-gray-900 font-semi-bold mb-2 dark:text-white">
          Featured <span className="text-red-500">Products</span>
        </h2>
        <p className="text-left mb-6 text-xl text-gray-600">Stands for sustainable luxury products</p>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay, Grid]}
          spaceBetween={20}
          slidesPerView={5}
          grid={{ rows: 2, fill: "row" }}
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
          loop={true}
          className="pb-10"
          breakpoints={{
            320: { slidesPerView: 1, grid: { rows: 2 } },
            640: { slidesPerView: 2, grid: { rows: 2 } },
            1024: { slidesPerView: 3, grid: { rows: 2 } },
            1280: { slidesPerView: 5, grid: { rows: 2 } },
          }}
          onMouseEnter={() => swiperRef.current?.autoplay.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay.start()}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold dark:text-white">
                    {product.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Footer Bar */}
        <div className="flex justify-between items-center mt-4">
          {/* Left side (Navigation + See All) */}
          <div className="flex items-center gap-4 pt-3">
            <button className="custom-prev text-xl border border-red-500 text-red-500 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white transition">
              ←
            </button>
            <button className="custom-next text-xl border border-red-500 text-red-500 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white transition">
              →
            </button>

            <Link
              href="/products"
              className="text-red-600 text-xl hover:underline"
            >
              See All
            </Link>
          </div>

          {/* Right side (Counter) */}
          <div className="font-semibold">
            <span className="text-red-600 text-xl">{currentIndex}</span>
            <span className="text-gray-500 text-xl">/{products.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProducts;