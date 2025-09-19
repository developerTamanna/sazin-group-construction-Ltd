// components/StatsSection.jsx
"use client";
import { useEffect, useState } from "react";
import { FaBuilding, FaHardHat, FaSeedling } from "react-icons/fa"; // icons

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const statsData = [
    {
      id: 1,
      endValue: 3000,
      title: "Construction Projects",
      icon: <FaBuilding className="text-3xl text-red-500" />,
      bg: "bg-red-100",
    },
    {
      id: 2,
      endValue: 1850,
      title: "Helmet & Accessories",
      icon: <FaHardHat className="text-3xl text-blue-500" />,
      bg: "bg-blue-100",
    },
    {
      id: 3,
      endValue: 2027,
      title: "Agro & Fisheries",
      icon: <FaSeedling className="text-3xl text-green-500" />,
      bg: "bg-green-100",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("stats-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="stats-section"
      className="py-16 bg-white dark:bg-neutral-950 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {statsData.map((stat) => (
            <StatCard key={stat.id} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = stat.endValue;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, stat.endValue]);

  return (
    <div className="flex items-center justify-start gap-4 bg-white dark:bg-gray-800 rounded-xl p-6  dark:border-gray-700">
      {/* Icon */}
      <div
        className={`p-4 ${stat.bg} rounded-xl flex items-center justify-center`}
      >
        {stat.icon}
      </div>

      {/* Text */}
      <div className="text-left">
        <h3 className="text-4xl font-bold text-gray-800 dark:text-white">
          {count}+
        </h3>
        <p className="mt-1 text-lg font-semibold text-gray-600 dark:text-gray-300">
          {stat.title}
        </p>
      </div>
    </div>
  );
};

export default StatsSection;
