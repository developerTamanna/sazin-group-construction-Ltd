"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaRegBuilding } from "react-icons/fa";     
import { MdBusinessCenter } from "react-icons/md"; 
import { BiReceipt } from "react-icons/bi";        
import { FaRegFileAlt } from "react-icons/fa";     
import { MdOutlineLocalFireDepartment } from "react-icons/md"; 
import { MdVerifiedUser } from "react-icons/md";   

const certificates = [
  {
    name: "Incorporation Certificate",
    image: "/certificates.jpeg",
    icon: FaRegBuilding,
    animation: { rotate: 15 }, // rotate on hover
  },
  {
    name: "Trade License",
    image: "/certificates.jpeg",
    icon: MdBusinessCenter,
    animation: { scale: 1.2 }, // zoom on hover
  },
  {
    name: "VAT Registration",
    image: "/certificates.jpeg",
    icon: BiReceipt,
    animation: { rotate: -15 },
  },
  {
    name: "Income Tax Certificate",
    image: "/certificates.jpeg",
    icon: FaRegFileAlt,
    animation: { scale: 1.15 },
  },
  {
    name: "Fire Safety License",
    image: "/certificates.jpeg",
    icon: MdOutlineLocalFireDepartment,
    animation: { rotate: 20 },
  },
  {
    name: "Authorized License",
    image: "/certificates.jpeg",
    icon: MdVerifiedUser,
    animation: { scale: 1.2 },
  },
];

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-neutral-50 dark:bg-neutral-950 py-16 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl font-semi-bold text-left text-gray-800 dark:text-white">
          Certificates & <span className="text-red-500">Licenses</span>
        </h2>
        <p className="text-left mt-2 text-xl text-neutral-600 dark:text-neutral-300">
          Ensuring compliance, credibility, and trust.
        </p>

        {/* Cards */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.name}
                className="bg-red-600 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-4 rounded-lg shadow-md cursor-pointer transition hover:shadow-lg flex items-center gap-4"
                onClick={() => setSelectedImage(cert.image)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icon with individual hover animation */}
                <motion.div
                  className="text-white text-4xl"
                  whileHover={cert.animation}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon />
                </motion.div>

                {/* Title */}
                <p className="font-medium text-white dark:text-gray-200 text-lg">
                  {cert.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal with animation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 top-20 bottom-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white h-full dark:bg-neutral-900 p-4 rounded-lg max-w-3xl w-full mx-4"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Certificate"
                className="w-full h-[92%] object-fill rounded-md"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="mt-4 px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}