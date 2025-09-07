"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export  function AnimatedSection({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: false }); 
  // once: false মানে বারবার ঢোকা-বের হলে animate হবে

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: -100, scale: 0.9, filter: "blur(10px)" }}
      animate={
        isInView
          ? { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, x: 100, scale: 0.9, filter: "blur(10px)" }
      }
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier smooth
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      className="w-full "
    >
      {children}
    </motion.section>
  );
}


export  function AnimatedSection2({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 }); // 20% দৃশ্যমান হলে true

  return (
    <motion.section
      ref={ref}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.section>
  );
}

