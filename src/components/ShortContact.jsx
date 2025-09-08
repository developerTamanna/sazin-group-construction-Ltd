import Link from "next/link";
import React from "react";
export default function ShortContact({header,desc}) {
  return (
    <section className="bg-white py-16 px-4 dark:bg-neutral-950 ">
      <div className="max-w-4xl mx-auto text-center text-gray-700">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semi-bold dark:text-white">
          Let’s <span className="text-red-600">{header}</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-xl font-semi-bold text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
           {desc}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="border border-red-500 text-red-600 px-6 py-1.5 rounded-lg font-semi-bold text-base hover:bg-red-500 hover:text-white transition"
          >
            Contact Us
          </Link>
          <Link
            href="/Projects"
            className="border border-red-500 text-red-600 px-6 py-1.5 rounded-lg font-semi-bold text-base hover:bg-red-500 hover:text-white transition"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}