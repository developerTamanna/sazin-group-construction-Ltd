// components/Achievement.jsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const achievements = [
  {
    title: 'Award',
    description: 'Keep up with what’s happening at RFL',
    image: 'https://i.postimg.cc/MnnY1fYp/images.jpg',
    link: '/award-detail',
  },
  {
    title: 'Award',
    description: 'Keep up with what’s happening at RFL',
    image:
      'https://i.postimg.cc/RW2LdCPQ/pngtree-golden-achievement-unlocked-celebrating-your-success-on-a-blue-3d-background-image-3808269.jpg',
    link: '/award-detail',
  },
];

export default function Achievement() {
  const [current, setCurrent] = useState(0);
  const total = achievements.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  const { title, description, image, link } = achievements[current];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center transition-colors duration-300">
      <div className="max-w-6xl w-full grid md:grid-cols-2 items-center">
        {/* Left Text Section */}
        <div className="px-10 py-14 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Achievement
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
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
        </div>

        {/* Right Image Section */}
        <div className="bg-gray-100 dark:bg-gray-800 flex justify-center items-center rounded-xl p-10">
          <img
            src={image}
            alt={title}
            className="w-full max-w-sm object-contain"
          />
        </div>
      </div>
    </div>
  );
}
