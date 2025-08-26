'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Globe, Video } from 'lucide-react';
import { FaHardHat } from 'react-icons/fa';

export default function HeroEPC() {
  return (
    <section className="relative w-full bg-white dark:bg-gray-900 overflow-hidden">
      {/* Subtle red + black layered circles */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-red-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-20 text-center md:text-left">
        {/* Engineer Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto md:mx-0 mb-6 w-24 h-24 flex items-center justify-center bg-red-600 text-white rounded-full shadow-xl"
        >
          <FaHardHat className="w-12 h-12" />
        </motion.div>

        {/* Company */}
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg font-bold text-black dark:text-white tracking-widest"
        >
          SAZIN E-Training
        </motion.h3>

        {/* EPC Heading */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-red-700 drop-shadow-md mt-2"
        >
          EPC
        </motion.h1>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl md:text-2xl font-semibold text-black dark:text-white mt-2"
        >
          Engineering, Procurement and Construction
        </motion.h2>
        <p className="text-red-600 font-medium italic mt-1">for Entry Level</p>

        {/* Info Boxes */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 justify-center bg-white/10 backdrop-blur-lg p-4 rounded-xl text-black dark:text-white shadow-md"
          >
            <Video className="w-5 h-5 text-red-600" />
            <span>Live on Zoom</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 justify-center bg-white/10 backdrop-blur-lg p-4 rounded-xl text-black dark:text-white shadow-md"
          >
            <Calendar className="w-5 h-5 text-red-600" />
            <span>25 November 2025</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 justify-center bg-white/10 backdrop-blur-lg p-4 rounded-xl text-black dark:text-white shadow-md"
          >
            <Clock className="w-5 h-5 text-red-600" />
            <span>19.00 - 21.00 WIB</span>
          </motion.div>
        </div>

        {/* Extra Info */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg">
            Investment: FREE
          </div>
          <div className="text-sm text-black dark:text-white">
            Benefit: E-Certificate • Slide Presentation Material
          </div>
        </div>

        {/* Website */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-black dark:text-white">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-red-600" /> <span>sazin.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-red-600" />{' '}
            <span>training.sazin.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
