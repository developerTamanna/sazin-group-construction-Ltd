'use client';
import Theme from "@/utils/Theme";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowUp,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const pathname = usePathname();
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const businessRef = useRef(null);

  const links = [
    { name: "Projects", href: "/Projects", prefetch: true },
    { name: "Gallery", href: "/project-gallery", prefetch: true },
    { name: "Contact", href: "/contact", prefetch: true },
    { name: "Career", href: "/career", prefetch: false },
    { name: "News/Blog", href: "/news-blog", prefetch: false },
    { name: "Sustainability", href: "/sustainability", prefetch: false },
  ];

  const aboutLinks = [
  { name: "Detailed Company History", href: "/about/history", prefetch: true },
  { name: "Mission & Vision", href: "/about/mission", prefetch: true },
  { name: "Leadership Profiles", href: "/about/leadership", prefetch: false },
  { name: "Overview of Business Sectors", href: "/about/sectors", prefetch: false },
];

const servicesLinks = [
  { name: "Electro-Mechanical Construction", href: "/Services/Electro-mechanical", prefetch: true },
  { name: "Civil Construction", href: "/Services/Civil-construction", prefetch: true },
  { name: "Engineering Procurement & Construction", href: "/Services/engineering-procurement-construction", prefetch: false },
  { name: "Safety & Security Construction and Management", href: "/Services/safety-security-construction-management", prefetch: false },
];

const businessLinks = [
  { name: "Sazin Construction Ltd", href: "/products/construction", prefetch: true },
  { name: "Sazin Agro & Fisheries", href: "/products/agro", prefetch: true },
  { name: "Sky Helmet & Safety Accessories", href: "/products/helmet", prefetch: false },
];


  useEffect(() => {
    const handleClickOutside = (e) => {
              if (aboutRef.current && aboutRef.current.contains(e.target)) {
                // click inside About → keep About, close others
                setAboutOpen(true);
                setServicesOpen(false);
                setBusinessOpen(false);
              } else if (servicesRef.current && servicesRef.current.contains(e.target)) {
                // click inside Services → keep Services, close others
                setServicesOpen(true);
                setAboutOpen(false);
                setBusinessOpen(false);
              } else if (businessRef.current && businessRef.current.contains(e.target)) {
                // click inside Business → keep Business, close others
                setBusinessOpen(true);
                setAboutOpen(false);
                setServicesOpen(false);
              } else {
                // click outside → close all
                setAboutOpen(false);
                setServicesOpen(false);
                setBusinessOpen(false);
              }
    };
    document.addEventListener("pointerdown", handleClickOutside);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      setShowTopBtn(scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={`bg-white/90 dark:bg-black/70 backdrop-blur-lg sticky top-0 z-[9999] transition-all duration-300 ${
          isScrolled ? "shadow-lg py-5" : "py-5"
        }`}
      >
        <div className="flex justify-between items-center transition-all duration-300">
          <div className="w-full max-w-[100rem] mx-auto px-4 flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              prefetch={true}
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
                  prefetch={true}
                  className={` text-gray-700 dark:text-gray-200 hover:text-red-600 relative after:block after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 ${
                    pathname === "/" ? "after:w-full" : ""
                  }`}
                >
                  Home
                </Link>
              </li>

              {/* About Dropdown */}
              <li className="relative" ref={aboutRef}>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className={`after:block after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 
                      ${pathname.startsWith("/about") ? "after:w-full" : ""}
                    `}
                >
                  <div className="flex items-center gap-1 transition-colors text-gray-700 dark:text-gray-200 hover:text-red-600">
                  About Us{" "}
                  {aboutOpen ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {aboutOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0  bg-white/90 dark:bg-gray-800 shadow-lg mt-2 w-60 rounded-md p-2 space-y-2 z-50"
                    >
                    {aboutLinks.map((link, idx) => (
                            <li key={idx}>
                              <Link
                                href={link.href}
                                prefetch={link.prefetch}
                                className={`block text-gray-800 dark:text-gray-200 hover:text-red-600 relative after:block after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 ${
                                  pathname.startsWith(link.href) ? "after:w-full" : ""
                                }`}
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Services Dropdown */}
              <li className="relative" ref={servicesRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`after:block after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 
                      ${pathname.startsWith("/Services") ? "after:w-full" : ""}
                    `}
                >
                  <div className="flex items-center gap-1 transition-colors text-gray-700 dark:text-gray-200 hover:text-red-600">
                  Services{" "}
                  {servicesOpen ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 bg-white/90 dark:bg-gray-800 shadow-lg mt-2 w-72 rounded-md p-2 space-y-2 z-50"
                    >
                        {servicesLinks.map((link, idx) => (
                          <li key={idx}>
                            <Link
                              href={link.href}
                              prefetch={link.prefetch}
                              className={`block text-gray-700 dark:text-gray-200 hover:text-red-600 after:block after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300  ${
                                pathname.startsWith(link.href) ? "after:w-full" : ""
                              }`}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}

                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Business Dropdown */}
              <li className="relative" ref={businessRef}>
                <button
                  onClick={() => setBusinessOpen(!businessOpen)}
                  className={`after:block after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 
                      ${pathname.startsWith("/products") ? "after:w-full" : ""}
                    `}
                >
                  <div className="flex items-center gap-1 transition-colors text-gray-700 dark:text-gray-200 hover:text-red-600">
                  Business/Products{" "}
                  {businessOpen ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {businessOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 bg-white/90 dark:bg-gray-800 shadow-lg mt-2 w-72 rounded-md p-2 space-y-2 z-50"
                    >
                    {businessLinks.map((link, idx) => (
                        <li key={idx}>
                          <Link
                            href={link.href}
                            prefetch={link.prefetch}
                            className={`block text-gray-800 dark:text-gray-200 hover:text-red-600 after:block after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 ${
                              pathname.startsWith(link.href) ? "after:w-full" : ""
                            }`}
                          >
                            {link.name}
                          </Link>
                        </li>
                       ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* More Details Hover */}
              <li className="relative group py-2">
                <button type="button"                             
                className={`after:block after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300   ${
                      (links.map(link=>pathname.startsWith(link.href)).includes(true)) ? "after:w-full" : ""
                 }`}>
                    <div className="flex items-center gap-1 text-gray-800 dark:text-gray-200 hover:text-red-600 transition duration-300 cursor-pointer">
                     More Details
                     <span className="transition-transform duration-300 group-hover:rotate-180">↓</span>
                    </div>
                </button>

                <ul className="absolute hidden group-hover:block top-full right-0 bg-white/90 dark:bg-gray-800 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg w-56 rounded-xl p-2 space-y-1 z-50 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  {links.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        prefetch={item.prefetch}
                            className={`block text-gray-800 dark:text-gray-200 hover:text-red-600 after:block after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300  ${
                              pathname.startsWith(item.href) ? "after:w-full" : ""
                            }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
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
                      className="fixed lg:hidden top-20 left-0 h-[calc(100vh-80px)] dark:bg-black bg-white z-[9999] w-3/4 max-w-xs shadow-lg p-6 overflow-y-auto myDiv"
                      initial={{ x: "-100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "-100%" }}
                      transition={{ type: "tween", duration: 0.3 }}
                    >
                      <ul className="flex flex-col space-y-4">

                        {/* Home */}
                        <li>
                          <Link
                            href="/"
                            prefetch={true}
                            className={`text-gray-700 dark:text-gray-200 hover:text-red-600 ${
                              pathname === "/" ? "border-b-2 border-red-600" : ""
                            }`}
                            onClick={() => setMobileOpen(false)}
                          >
                            Home
                          </Link>
                        </li>

                        {/* About */}
                        <li>
                          <button
                            onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                            className="flex justify-between w-full text-gray-700 dark:text-gray-200 hover:text-red-600"
                          >
                            About Us {mobileAboutOpen ? <FaChevronUp /> : <FaChevronDown />}
                          </button>
                          {mobileAboutOpen && (
                            <ul className="pl-4 mt-2 space-y-2">
                              {aboutLinks.map((link, idx) => (
                                <li key={idx}>
                                  <Link
                                    href={link.href}
                                    prefetch={link.prefetch}
                                    className={`block text-gray-700 dark:text-gray-200 hover:text-red-600 ${
                                      pathname.startsWith(link.href)
                                        ? "border-b-2 border-red-600"
                                        : ""
                                    }`}
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>

                        {/* Services */}
                        <li>
                          <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className="flex justify-between w-full text-gray-700 dark:text-gray-200 hover:text-red-600"
                          >
                            Services {mobileServicesOpen ? <FaChevronUp /> : <FaChevronDown />}
                          </button>
                          {mobileServicesOpen && (
                            <ul className="pl-4 mt-2 space-y-2">
                              {servicesLinks.map((link, idx) => (
                                <li key={idx}>
                                  <Link
                                    href={link.href}
                                    prefetch={link.prefetch}
                                    className={`block text-gray-700 dark:text-gray-200 hover:text-red-600 ${
                                      pathname.startsWith(link.href)
                                        ? "border-b-2 border-red-600"
                                        : ""
                                    }`}
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>

                        {/* Business */}
                        <li>
                          <button
                            onClick={() => setMobileBusinessOpen(!mobileBusinessOpen)}
                            className="flex justify-between w-full text-gray-700 dark:text-gray-200 hover:text-red-600"
                          >
                            Business/Products {mobileBusinessOpen ? <FaChevronUp /> : <FaChevronDown />}
                          </button>
                          {mobileBusinessOpen && (
                            <ul className="pl-4 mt-2 space-y-2">
                              {businessLinks.map((link, idx) => (
                                <li key={idx}>
                                  <Link
                                    href={link.href}
                                    prefetch={link.prefetch}
                                    className={`block text-gray-700 dark:text-gray-200 hover:text-red-600 ${
                                      pathname.startsWith(link.href)
                                        ? "border-b-2 border-red-600"
                                        : ""
                                    }`}
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>

                        {/* More Details */}
                        <li>
                          <button
                            onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
                            className="flex justify-between w-full text-gray-700 dark:text-gray-200 hover:text-red-600"
                          >
                            More Details {mobileMoreOpen ? <FaChevronUp /> : <FaChevronDown />}
                          </button>
                          {mobileMoreOpen && (
                            <ul className="pl-4 mt-2 space-y-2">
                              {links.map((link, idx) => (
                                <li key={idx}>
                                  <Link
                                    href={link.href}
                                    prefetch={link.prefetch}
                                    className={`block text-gray-700 dark:text-gray-200 hover:text-red-600 ${
                                      pathname.startsWith(link.href)
                                        ? "border-b-2 border-red-600"
                                        : ""
                                    }`}
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>

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
