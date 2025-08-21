'use client';
import Theme from '@/app/utils/Theme';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch, FaArrowUp } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const pathname = usePathname();
  const aboutRef = useRef(null);

  const links = [
    { name: 'Services', href: '/services' },
    { name: 'Business/Products', href: '/products' },
    { name: 'Projects', href: '/projects' },
    { name: 'Project Gallery', href: '/project-gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      setShowTopBtn(scrollY > 300); // show scroll-to-top after 300px
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section>
      <motion.nav
        className={`bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-lg py-3' : 'py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center transition-all duration-300">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            Company<span className="text-red-600">Logo</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            {/* Home */}
            <li>
              <Link
                href="/"
                className={`md:text-xl text-gray-700 dark:text-gray-200 hover:text-red-600 transition-colors relative after:block after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 ${
                  pathname === '/' ? 'after:w-full' : ''
                }`}
              >
                Home
              </Link>
            </li>

            {/* About Dropdown */}
            <li className="relative" ref={aboutRef}>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="md:text-xl flex items-center gap-1 transition-colors text-gray-700 dark:text-gray-200 hover:text-red-600"
              >
                About Us {aboutOpen ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
              </button>

              <AnimatePresence>
                {aboutOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-lg mt-2 w-60 rounded-md p-2 space-y-2 z-50"
                  >
                    <li>
                      <Link
                        href="/about#history"
                        className="block text-gray-700 dark:text-gray-200 hover:text-red-600 transition-all transform hover:scale-105"
                      >
                        Detailed Company History
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about#mission"
                        className="block text-gray-700 dark:text-gray-200 hover:text-red-600 transition-all transform hover:scale-105"
                      >
                        Mission & Vision
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about#leadership"
                        className="block text-gray-700 dark:text-gray-200 hover:text-red-600 transition-all transform hover:scale-105"
                      >
                        Leadership Profiles
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about#sectors"
                        className="block text-gray-700 dark:text-gray-200 hover:text-red-600 transition-all transform hover:scale-105"
                      >
                        Overview of Business Sectors
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {/* Other Links */}
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`md:text-xl text-gray-700 dark:text-gray-200 hover:text-red-600 transition-colors relative after:block after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 ${
                    pathname === link.href ? 'after:w-full' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Search */}
            <li className="relative">
              <button onClick={() => setSearchOpen(!searchOpen)} className="hover:text-red-600 text-gray-700 dark:text-gray-200 transition-colors">
                <FaSearch size={18} />
              </button>
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute right-0 mt-2 bg-white dark:bg-gray-800 p-2 rounded shadow-lg z-50"
                  >
                    <input
                      type="text"
                      placeholder="Search..."
                      className="px-3 py-2 rounded border w-48 dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Theme Toggle */}
            <li>
              <Theme />
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Theme />
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-gray-800 dark:text-gray-200">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-40 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileOpen(false)}
              />

              <motion.div
                className="fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white dark:bg-gray-900 shadow-lg p-6 z-50"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
              >
                <ul className="flex flex-col space-y-4">
                  <li>
                    <Link
                      href="/"
                      className={`text-gray-700 dark:text-gray-200 hover:text-red-600 transition-colors ${
                        pathname === '/' ? 'border-b-2 border-red-600' : ''
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      Home
                    </Link>
                  </li>

                  {/* About Dropdown Mobile */}
                  <li>
                    <button
                      onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                      className="flex items-center justify-between w-full text-gray-700 dark:text-gray-200 hover:text-red-600 transition-colors"
                    >
                      About Us {mobileAboutOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    <AnimatePresence>
                      {mobileAboutOpen && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-col pl-4 mt-2 space-y-2 overflow-hidden"
                        >
                          <li>
                            <Link
                              href="/about#history"
                              className="text-gray-700 dark:text-gray-200 hover:text-red-600"
                              onClick={() => setMobileOpen(false)}
                            >
                              Detailed Company History
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about#mission"
                              className="text-gray-700 dark:text-gray-200 hover:text-red-600"
                              onClick={() => setMobileOpen(false)}
                            >
                              Mission & Vision
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about#leadership"
                              className="text-gray-700 dark:text-gray-200 hover:text-red-600"
                              onClick={() => setMobileOpen(false)}
                            >
                              Leadership Profiles
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about#sectors"
                              className="text-gray-700 dark:text-gray-200 hover:text-red-600"
                              onClick={() => setMobileOpen(false)}
                            >
                              Overview of Business Sectors
                            </Link>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>

                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`text-gray-700 dark:text-gray-200 hover:text-red-600 transition-colors ${
                          pathname === link.href ? 'border-b-2 border-red-600' : ''
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Scroll to Top Button */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 p-3 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 transition-all z-50"
          >
            <FaArrowUp />
          </button>
        )}
      </motion.nav>
    </section>
  );
}