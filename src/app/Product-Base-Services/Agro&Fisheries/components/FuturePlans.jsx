"use client";
import Link from "next/link";
import React from "react";

export default function FuturePlans() {
  return (
    <section className="py-12 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-semi-bold mb-4 text-green-600">Future <span className="text-blue-900">Plans & Expansion</span></h3>
        <p className="text-gray-500 md:text-xl mb-6 dark:text-gray-300">
          We plan to establish modern value-added processing, cold-chain, and export-ready packaging units — ensuring that farmers’ produce receives fair value directly.
        </p>
        <div className="inline-flex gap-3">
          <Link
            href="/contact"
            className="px-6 py-2 rounded-md bg-green-600 border border-green-600 hover:bg-white hover:text-green-600 text-white"
          >
            Contact Us
          </Link>
          <Link
            href="/Projects"
            className="px-6 py-2 rounded-md bg-green-600 border border-green-600 hover:bg-white hover:text-green-600 text-white"
          >
            View Project
          </Link>
        </div>
      </div>
    </section>
  );
}