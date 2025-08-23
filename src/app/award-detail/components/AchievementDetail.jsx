// components/AwardDetail.jsx
'use client';
import Link from 'next/link';

export default function AchievementDetail() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold">Award</h1>
          <p className="text-lg mt-2">& Achievement</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-800 border-b px-6 py-3 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-red-500">
          Home
        </Link>{' '}
        <span className="mx-1">•</span>
        <span className="text-red-500 font-medium">Award</span>
      </div>

      {/* Content Section */}
      <div className="bg-gray-100 dark:bg-gray-800 px-6 md:px-16 py-12">
        <h2 className="text-2xl font-bold text-red-600 mb-6">Award</h2>
        <ul className="space-y-4 text-gray-800 dark:text-gray-200 leading-relaxed">
          <li>No.1 Houseware Brand in Bangladesh</li>
          <li>Trusted tube well brand of 3 million families for 40 years</li>
          <li>
            “The Most Loved Brand Award” 2021 (by BBF) for 11 consecutive years
          </li>
          <li>No. 1 exporter for 16 Consecutive Year</li>
          <li>2 Green Factory Awards (DPL, HIP)</li>
        </ul>
      </div>
    </div>
  );
}
