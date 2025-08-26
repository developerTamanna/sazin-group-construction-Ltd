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
          className="mb-3 bg-black hover:bg-black hover:text-black text-black font-semibold  rounded-full shadow-lg transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default SmallBanner;