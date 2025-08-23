"use client";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-neutral-50 dark:bg-neutral-950 py-16 px-6 lg:px-8 relative">
      <div className="container mx-auto">
      <h2 className="text-3xl font-semi-bold text-left">Our <span className="text-red-500">Services</span></h2>
      <p className="text-left font-semi-bold text-xl mt-2 text-neutral-600 dark:text-neutral-300">
        From design to delivery, we provide end-to-end solutions.
      </p>

      {/* Slider Container */}
      <div className="relative mt-10">
        {/* Scrollable Wrapper */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth"
        >
          {services.map((s) => (
            <div
              key={s.title}
              className="min-w-[280px] sm:min-w-[320px] flex-shrink-0 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-red-600">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 transition"
        >
          <FaArrowLeft />
        </button>

        {/* Next Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 transition"
        >
          <FaArrowRight />
        </button>
      </div>
      </div>
    </section>
  );
}