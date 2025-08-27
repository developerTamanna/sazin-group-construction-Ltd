'use client';

import { motion } from 'framer-motion';
import { Camera, Lock, ShieldCheck } from 'lucide-react';

export default function HeroSafety() {
  const header = 'Safety & Security Construction and Management';
  const desc =
    'Specialized solutions in fire safety, security systems, access control, surveillance, and integrated safety management.';

  return (
    <section className="relative w-full bg-white dark:bg-neutral-900 overflow-hidden">
      {/* Background layers */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-40 -right-20 w-[600px] h-[600px] bg-red-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-gray-800/40 via-gray-700/30 to-transparent rounded-l-[60%]"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 lg:px-12 py-24 items-center">
        {/* Left: Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-start"
        >
          <div className="w-72 h-72 flex items-center justify-center bg-red-100 dark:bg-red-900/20 rounded-full shadow-2xl">
            <ShieldCheck className="w-24 h-24 text-red-600 dark:text-red-400" />
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
            {header}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl">
            {desc}
          </p>

          {/* Quick Info */}
          <div className="mt-8 flex flex-col md:flex-row items-center gap-6 justify-center md:justify-start">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-3 bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-lg shadow-md cursor-pointer transition-all"
            >
              <Camera className="w-6 h-6 text-red-600 dark:text-red-400" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">
                Advanced Surveillance
              </span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-3 bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-lg shadow-md cursor-pointer transition-all"
            >
              <Lock className="w-6 h-6 text-red-600 dark:text-red-400" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">
                Access Control
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Optional subtle animation keyframes */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
