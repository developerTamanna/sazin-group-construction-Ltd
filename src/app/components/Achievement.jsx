"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const achievements = [
  {
    title: "Award",
    description: "Keep up with what’s happening at RFL",
    image: "https://i.postimg.cc/MnnY1fYp/images.jpg",
    link: "/award-detail",
  },
  {
    title: "Award",
    description: "Keep up with what’s happening at RFL",
    image:
      "https://i.postimg.cc/RW2LdCPQ/pngtree-golden-achievement-unlocked-celebrating-your-success-on-a-blue-3d-background-image-3808269.jpg",
    link: "/award-detail",
  },
  {
    title: "Award",
    description: "Keep up with what’s happening at RFL",
    image:
      "https://i.postimg.cc/RW2LdCPQ/pngtree-golden-achievement-unlocked-celebrating-your-success-on-a-blue-3d-background-image-3808269.jpg",
    link: "/award-detail",
  },
];

export default function Achievement() {
  const [current, setCurrent] = useState(0);
  const total = achievements.length;

  // AutoPlay Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(interval);
  }, [total]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  const { title, description, image, link } = achievements[current];

  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 min-h-[500px]">
        {/* Left Section (White) */}
        <div className="bg-white dark:bg-gray-900 py-14 px-8 flex flex-col justify-between animate-fadeIn">
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
              Achievement
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-xl">
              {description}
            </p>

            <h2 className="text-2xl font-bold text-red-600 mt-10">{title}</h2>
            <Link
              href={link}
              className="text-gray-800 dark:text-gray-200 mt-2 inline-block hover:underline"
            >
              Read More →
            </Link>
          </div>

          {/* Navigation + Pagination */}
          <div className="flex items-center justify-between mt-12">
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              >
                <FaArrowRight />
              </button>
            </div>

            <span className="text-sm font-medium text-gray-500">
              {current + 1}/{total}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-1 bg-gray-200 mt-6 relative overflow-hidden rounded-full">
            <div
              key={current}
              className="absolute top-0 left-0 h-1 bg-red-500 animate-progress"
            />
          </div>
        </div>

        {/* Right Section (Gray bg, White inner div) */}
        <div className="bg-gray-200 dark:bg-gray-800 flex justify-center items-center p-10 animate-fadeIn">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-10 shadow-lg">
            <img
              src={image}
              alt={title}
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-progress {
          animation: progressFill 4s linear forwards;
        }
        @keyframes progressFill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}