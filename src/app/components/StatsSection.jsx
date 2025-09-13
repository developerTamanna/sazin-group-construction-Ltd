// components/StatsSection.jsx
'use client';
import { useEffect, useState } from 'react';
import {
  FaBuilding,
  FaCheckCircle,
  FaHandshake,
  FaHardHat,
  FaHardHat as FaHelmet,
  FaStar,
  FaUsers,
} from 'react-icons/fa';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const statsData = [
    {
      id: 1,
      icon: <FaUsers className="text-3xl" />,
      endValue: 1250,
      title: 'Total Users',
      description: 'Registered platform users',
    },
    {
      id: 2,
      icon: <FaHardHat className="text-3xl" />,
      endValue: 420,
      title: 'Total Projects',
      description: 'Completed and ongoing projects',
    },
    {
      id: 3,
      icon: <FaStar className="text-3xl" />,
      endValue: 856,
      title: 'Total Reviews',
      description: 'Client feedback and ratings',
    },
    {
      id: 4,
      icon: <FaCheckCircle className="text-3xl" />,
      endValue: 385,
      title: 'Successful Projects',
      description: 'Projects delivered on time',
    },
    {
      id: 5,
      icon: <FaHandshake className="text-3xl" />,
      endValue: 150,
      title: 'Agro Projects',
      description: 'Agricultural infrastructure projects',
    },
    {
      id: 6,
      icon: <FaBuilding className="text-3xl" />,
      endValue: 220,
      title: 'Construction Projects',
      description: 'Building and infrastructure projects',
    },
    {
      id: 7,
      icon: <FaHelmet className="text-3xl" />,
      endValue: 50,
      title: 'Helmet Projects',
      description: 'Safety equipment projects',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="stats-section" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Company Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Years of excellence in construction and infrastructure development
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
    const duration = 2000; // 2 seconds
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
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full mb-4 text-red-600 dark:text-red-400">
          {stat.icon}
        </div>

        {/* Count */}
        <div className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
          {count.toLocaleString()}
          {stat.title.includes('Reviews') && '+'}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          {stat.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {stat.description}
        </p>
      </div>
    </div>
  );
};

export default StatsSection;
