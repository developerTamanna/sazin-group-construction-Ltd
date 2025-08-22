// components/ProductCardWrapper.jsx
"use client";

import { motion } from "framer-motion";

export default function MotionSection({ children }) {
  return (
    <motion.section
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border"
    >
      {children}
    </motion.section>
  );
}
