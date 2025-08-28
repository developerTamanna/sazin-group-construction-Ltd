"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Our Mission",
    text: "আমাদের কোম্পানির মূল লক্ষ্য হলো একটি সবুজ ভবিষ্যৎ তৈরি করা। আমরা পরিবেশের ক্ষতি না করে টেকসই সমাধান তৈরি করি।",
    img: "/images/sustain1.jpg",
  },
  {
    title: "Our Work",
    text: "আমরা পরিচ্ছন্ন শক্তি, পুনর্ব্যবহারযোগ্য উপাদান এবং পরিবেশ-বান্ধব প্রযুক্তির মাধ্যমে কাজ করি।",
    img: "/images/sustain2.jpg",
  },
  {
    title: "Our People",
    text: "আমাদের টিমের প্রতিটি সদস্য টেকসই উন্নয়নে বিশ্বাসী। তারা প্রতিদিন নতুন নতুন আইডিয়া তৈরি করে।",
    img: "/images/sustain3.jpg",
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
    <section className="relative bg-neutral-50 dark:bg-neutral-900 py-16 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text with auto scroll */}
        <div className="relative h-64 overflow-hidden">
          {sections.map((sec, index) => (
            <motion.div
              key={index}
              initial={{ y: "100%", opacity: 0 }}
              animate={
                index === currentIndex
                  ? { y: "0%", opacity: 1 }
                  : { y: "-100%", opacity: 0 }
              }
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-full"
            >
              <h2 className="text-4xl font-semi-bold text-neutral-800 dark:text-neutral-100 mb-3">
                {sec.title}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {sec.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Image right side */}
        <div className="flex justify-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src={sections[currentIndex].img}
              alt={sections[currentIndex].title}
              width={500}
              height={350}
              className="object-cover w-full h-64"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
