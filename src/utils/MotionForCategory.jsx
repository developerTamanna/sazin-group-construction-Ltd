"use client";

import { motion } from "framer-motion";

export default function MotionCard({ children }) {
  return (
    <motion.div
      whileHover={{ y: -12}}
      transition={{ duration: 0.2 }}
      className="relative overflow-hidden group rounded-xl shadow-lg"
    >
      {children}
    </motion.div>
  );
}
