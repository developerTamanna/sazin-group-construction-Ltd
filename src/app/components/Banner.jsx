'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { FaChevronDown } from 'react-icons/fa';

const images = ['/banner1.jpg', '/banner2.jpg', '/banner3.jpg'];

function useTypingEffect(text, speed = 100) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const { theme } = useTheme();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallax = (distance) => scrollY * distance;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  const h3Text = useTypingEffect('Welcome to Our Company', 80);
  const h1Text = useTypingEffect('We Build Great Solutions', 50);
  const pText = useTypingEffect(
    'Providing top-notch services and products that help your business grow',
    30
  );

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      setCurrent((prev) => (prev + 1) % images.length);
    } else if (info.offset.x > 50) {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] overflow-hidden">
      <AnimatePresence>
        {images.map((img, index) =>
          index === current ? (
            <motion.div
              key={img}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
            />
          ) : null
        )}
      </AnimatePresence>

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          theme === 'dark' ? 'bg-black/50' : 'bg-black/40'
        }`}
      ></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16">
        <motion.h3
          className="text-white text-sm md:text-lg lg:text-2xl mb-2"
          style={{ y: parallax(0.3) }}
        >
          {h3Text}
        </motion.h3>

        <motion.h1
          className="text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          style={{ y: parallax(0.5) }}
        >
          {h1Text}
        </motion.h1>

        <motion.p
          className="text-white text-xs sm:text-sm md:text-lg lg:text-xl max-w-md md:max-w-xl mb-6"
          style={{ y: parallax(0.7) }}
        >
          {pText}
        </motion.p>

        <motion.a
          href="/contact"
          className="bg-red-600 z-[60] text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-md shadow-lg text-sm sm:text-base md:text-lg hover:bg-gray-100 hover:text-red-800 hover:scale-105 transition transform"
          style={{ y: parallax(0.9) }}
        >
          Get Started
        </motion.a>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              current === index
                ? 'bg-red-600 scale-125'
                : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>

      {/* Scroll Down */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-lg sm:text-2xl animate-bounce"
        whileHover={{ scale: 1.2 }}
      >
        <FaChevronDown />
      </motion.button>
    </section>
  );
};

export default Banner;