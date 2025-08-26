"use client";
import Link from "next/link";

const SmallBanner = () => {
  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat py-18 px-6"
      style={{
        backgroundImage: "url('/contact-banner.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto h-60 flex items-end pl-16 justify-start">
        <Link
          href="/contact"
          className="mb-3 bg-red-600 hover:bg-gray-100 hover:text-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default SmallBanner;