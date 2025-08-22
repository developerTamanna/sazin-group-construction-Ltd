"use client";
import Link from 'next/link';
import Image from 'next/image';

const Achievement = () => {

  return (
     <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gray-50 p-8 lg:p-20">
      
      {/* Left Section */}
      <div className="flex-1 mb-10 lg:mb-0">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Achievement</h2>
        <p className="text-gray-600 mb-6">Keep up with what’s happening at RFL</p>

        <h3 className="text-2xl font-bold text-red-600 mb-3">Award</h3>
        <Link href="/award" className="text-gray-700 flex items-center gap-1 hover:underline">
          Read More →
        </Link>

        {/* Navigation Arrows */}
        <div className="flex gap-4 mt-6">
          <Link href="/achievement">
            <button className="border border-red-500 text-red-500 p-2 rounded-full hover:bg-red-500 hover:text-white transition">
              ←
            </button>
          </Link>
          <Link href="/award">
            <button className="border border-red-500 text-red-500 p-2 rounded-full hover:bg-red-500 hover:text-white transition">
              →
            </button>
          </Link>
        </div>

        {/* Counter */}
        <div className="mt-4 text-gray-500 font-semibold">
          1/1
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Image
            src="/award-trophy.png" // public folder e image save korte hobe
            alt="Award Trophy"
            width={300}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Achievement;