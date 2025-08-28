'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { sustainabilityData } from './sustainabilityData'; // import from file

export default function Sustainability() {
  const [isPaused, setIsPaused] = useState(true); // default = paused
  const containerRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const controls = useAnimation();

  // measure content height
  useEffect(() => {
    if (containerRef.current) {
      setContentHeight(containerRef.current.scrollHeight);
    }
  }, []);

  // handle play/pause
  useEffect(() => {
    if (!contentHeight) return;

    if (!isPaused) {
      controls.start({
        y: -contentHeight + 700, // 700px container height ধরে নিচ্ছি
        transition: { duration: 20, ease: 'linear' },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, contentHeight, controls]);

  return (
    <section className="relative bg-neutral-50 dark:bg-neutral-950 py-20 px-4 overflow-hidden">
      {/* Scrolling container */}
      <div
        className="overflow-hidden mx-auto w-full sm:w-11/12 md:w-4/5 lg:w-3/4 max-w-5xl"
        style={{ maxHeight: '700px' }}
      >
        <motion.div
          ref={containerRef}
          animate={controls}
          className="space-y-12"
        >
          {sustainabilityData.map((item, idx) => (
            <div key={idx} className="space-y-4 text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Control button */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition text-sm sm:text-base"
        >
          {isPaused ? '▶ Resume' : '⏸ Pause'}
        </button>
      </div>
    </section>
  );
}
