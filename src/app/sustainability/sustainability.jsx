"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Our Mission",
    text: `The main goal of our company is to create a green future. We develop sustainable solutions without harming the environment.`,
    img: "/green.jpg",
  },
  {
    title: "Our Work",
    text: "We work through clean energy, recyclable materials, and eco-friendly technologies.",
    img: "/recycle.jpg",
  },
  {
    title: "Our People",
    text: "Every member of our team believes in sustainable development. They come up with new ideas every day.",
    img: "/innovation.jpg",
  },
];


export default function Sustainability() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change text after 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-neutral-50 dark:bg-neutral-900 py-8 md:py-12 px-4 md:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6 items-center">
        {/* Left: Text with auto scroll */}
        <div className="relative h-48 md:h-60 lg:h-64 overflow-hidden">
          {sections.map((sec, index) => (
            <motion.div
              key={index}
              initial={{ y: "100%", opacity: 0 }}
              animate={
                index === currentIndex
                  ? { y: "0%", opacity: 1 }
                  : { y: "-100%", opacity: 0 }
              }
              transition={{ duration: 0.7 }}
              className="absolute top-0 left-0 w-full"
            >
              <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                {sec.title}
              </h2>
              <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {sec.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="flex justify-center lg:justify-start">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-lg overflow-hidden  w-full max-w-sm md:max-w-md lg:max-w-lg"
          >
            <Image
              src={sections[currentIndex].img}
              alt={sections[currentIndex].title}
              width={600}
              height={400}
              className="object-cover w-full h-60 md:h-72 lg:h-80"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}