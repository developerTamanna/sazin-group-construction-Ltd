'use client';
import Theme from '@/utils/Theme';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
  FaArrowUp,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
} from 'react-icons/fa';

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const pathname = usePathname();
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const businessRef = useRef(null);

  const links = [
    { name: 'Projects', href: '/projects' },
    { name: 'Project Gallery', href: '/project-gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        (aboutRef.current && !aboutRef.current.contains(e.target)) ||
        (servicesRef.current && !servicesRef.current.contains(e.target)) ||
        (businessRef.current && !businessRef.current.contains(e.target))
      ) {
        setAboutOpen(false);
        setServicesOpen(false);
        setBusinessOpen(false);
      }
    };
    document.addEventListener('pointerdown', handleClickOutside);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      setShowTopBtn(scrollY > 300);
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
    <>
      <motion.nav
        className={`bg-white/80 dark:bg-black backdrop-blur-md sticky top-0 z-[9999] transition-all duration-300 ${
          isScrolled ? 'shadow-lg py-5' : 'py-5'
        }`}
      >
        <div className="flex justify-between items-center transition-all duration-300">
          <div className="w-full max-w-[100rem] mx-auto px-4 flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              Company<span className="text-red-600">Logo</span>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex space-x-6 items-center xl:text-xl">
              {/* Home */}
              <li>
                <Link
                  href="/"
                  className={` text-gray-700 dark:text-gray-200 hover:text-red-600 transition-colors relative after:block after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 ${
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
                  className=" flex items-center gap-1 transition-colors text-gray-700 dark:text-gray-200 hover:text-red-600"
                >
                  About Us{' '}
                  {aboutOpen ? (
                    <FaChevronUp className="w-4 h-4" />
                  ) : (
                    <FaChevronDown className="w-4 h-4" />
                  )}
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
                          href="/about/history"
                          className="block text-gray-700 dark:text-gray-200 hover:text-red-600"
                        >
                          Detailed Company History
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about/mission"
                          className="block text-gray-700 dark:text-gray-200 hover:text-red-600"
                        >
                          Mission & Vision
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about/leadership"
                          className="block text-gray-700 dark:text-gray-200 hover:text-red-600"
                        >
                          Leadership Profiles
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about/sectors"
                          className="block text-gray-700 dark:text-gray-200 hover:text-red-600"
                        >
                          Overview of Business Sectors
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Services Dropdown */}
              <li className="relative" ref={servicesRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-red-600"
                >
                  Services{' '}
                  {servicesOpen ? (
                    <FaChevronUp className="w-4 h-4" />
                  ) : (
                    <FaChevronDown className="w-4 h-4" />
                  )}
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-lg mt-2 w-72 rounded-md p-2 space-y-2 z-50"
                    >
                      <li>
                        <Link
                          href="/services/electro-mechanical"
                          className="block text-gray-700 dark:text-gray-200 hover:text-red-600"
                        >
                          Electro-Mechanical Construction
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/civil"
                          className="block text-gray-700 dark:text-gray-200 hover:text-red-600"
                        >
                          Civil Construction
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/epc"
                          className="block text-gray-700 dark:text-gray-200 hover:text-red-600"
                        >
                          Engineering Procurement & Construction
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/safety-security"
                          className="block text-gray-700 dark:text-gray-200 hover:text-red-600"
                        >
                          Safety & Security Construction and Management
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Business/Products Dropdown */}
              <li className="relative" ref={businessRef}>
                <button
                  onClick={() => setBusinessOpen(!businessOpen)}
                  className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-red-600"
                >
                  Business/Products{' '}
                  {businessOpen ? (
                    <FaChevronUp className="w-4 h-4" />
                  ) : (
                    <FaChevronDown className="w-4 h-4" />
                  )}
                </button>
                <AnimatePresence>
                  {businessOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-lg mt-2 w-72 rounded-md p-2 space-y-2 z-50"
                    >
                      <li>
                        <Link
                          href="/products/construction"
                          className="block text-gray-700 dark:text-gray-200 hover:text-red-600"
                        >
                          Sazin Construction Ltd
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products/agro"
                          className="block text-gray-700 dark:text-gray-200 hover:text-red-600"
                        >
                          Sazin Agro & Fisheries
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products/helmet"
                          className="block text-gray-700 dark:text-gray-200 hover:text-red-600"
                        >
                          Sky Helmet & Safety Accessories
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
                    className={` text-gray-700 dark:text-gray-200 hover:text-red-600 relative after:block after:h-[2px] after:w-0 after:bg-red-600 after:transition-all ${
                      pathname === link.href ? 'after:w-full' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* Search */}
              <li className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="hover:text-red-600 text-gray-700 dark:text-gray-200 transition-colors"
                >
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
            <div className="lg:hidden flex items-center gap-2">
              <Theme />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-gray-800 dark:text-gray-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      mobileOpen
                        ? 'M6 18L18 6M6 6l12 12'
                        : 'M4 6h16M4 12h16M4 18h16'
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="fixed lg:hidden top-20 left-0 h-[calc(100vh-80px)] dark:bg-black overflow-auto bg-white z-[9999] w-3/4 max-w-xs shadow-lg p-6"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link
                    href="/"
                    className={`text-gray-700 dark:text-gray-200 hover:text-red-600 ${
                      pathname === '/' ? 'border-b-2 border-red-600' : ''
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    Home
                  </Link>
                </li>

                {/* About Mobile */}
                <li>
                  <button
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className="flex items-center justify-between w-full text-gray-700 dark:text-gray-200 hover:text-red-600"
                  >
                    About Us{' '}
                    {mobileAboutOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  <AnimatePresence>
                    {mobileAboutOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col pl-4 mt-2 space-y-2"
                      >
                        <li>
                          <Link
                            href="/about/history"
                            onClick={() => setMobileOpen(false)}
                          >
                            Detailed Company History
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about/mission"
                            onClick={() => setMobileOpen(false)}
                          >
                            Mission & Vision
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about/leadership"
                            onClick={() => setMobileOpen(false)}
                          >
                            Leadership Profiles
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about/sectors"
                            onClick={() => setMobileOpen(false)}
                          >
                            Overview of Business Sectors
                          </Link>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                {/* Services Mobile */}
                <li>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full text-gray-700 dark:text-gray-200 hover:text-red-600"
                  >
                    Services{' '}
                    {mobileServicesOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col pl-4 mt-2 space-y-2"
                      >
                        <li>
                          <Link
                            href="/services/electro-mechanical"
                            onClick={() => setMobileOpen(false)}
                          >
                            Electro-Mechanical Construction
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/civil"
                            onClick={() => setMobileOpen(false)}
                          >
                            Civil Construction
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/epc"
                            onClick={() => setMobileOpen(false)}
                          >
                            Engineering Procurement & Construction
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/safety-security"
                            onClick={() => setMobileOpen(false)}
                          >
                            Safety & Security Construction and Management
                          </Link>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                {/* Business Mobile */}
                <li>
                  <button
                    onClick={() => setMobileBusinessOpen(!mobileBusinessOpen)}
                    className="flex items-center justify-between w-full text-gray-700 dark:text-gray-200 hover:text-red-600"
                  >
                    Business/Products{' '}
                    {mobileBusinessOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  <AnimatePresence>
                    {mobileBusinessOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col pl-4 mt-2 space-y-2"
                      >
                        <li>
                          <Link
                            href="/products/construction"
                            onClick={() => setMobileOpen(false)}
                          >
                            Sazin Construction Ltd
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/products/agro"
                            onClick={() => setMobileOpen(false)}
                          >
                            Sazin Agro & Fisheries
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/products/helmet"
                            onClick={() => setMobileOpen(false)}
                          >
                            Sky Helmet & Safety Accessories
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
                      className={`text-gray-700 dark:text-gray-200 hover:text-red-600 ${
                        pathname === link.href
                          ? 'border-b-2 border-red-600'
                          : ''
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 transition-all z-[9999]"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
