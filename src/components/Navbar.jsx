'use client';
import Theme from "@/utils/Theme";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaChevronDown, FaChevronUp } from "react-icons/fa";

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
    { name: "Contact", href: "/contact", prefetch: false },
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
  { name: "Helmet & Safety Accessories", href: "/Product-Base-Services/Sky-Helmet&Safety-Accessories", prefetch: false },
  { name: "Agro & Fisheries", href: "/Services/agro-fisheries", prefetch: false },
];

const businessLinks = [
  { name: "Sazin Construction Ltd", href: "/products/construction", prefetch: false },
  { name: "Sazin Agro & Fisheries", href: "/products/agro", prefetch: false },
  { name: "Sky Helmet & Safety Accessories", href: "/Product-Base-Services/Sky-Helmet&Safety-Accessories", prefetch: false },
];

  // Click outside & scroll logic
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (aboutRef.current && aboutRef.current.contains(e.target)) {
        setAboutOpen((t) => !t);
        setServicesOpen(false);
        setBusinessOpen(false);
      } else if (servicesRef.current && servicesRef.current.contains(e.target)) {
        setServicesOpen((t) => !t);
        setAboutOpen(false);
        setBusinessOpen(false);
      } else if (businessRef.current && businessRef.current.contains(e.target)) {
        setBusinessOpen((t) => !t);
        setAboutOpen(false);
        setServicesOpen(false);
      } else {
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
      document.removeEventListener("pointerdown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to render active border for desktop & mobile
  const ActiveBorder = () => (
    <motion.span
      className="absolute bottom-0 left-0 h-[1.8px] bg-red-600"
      initial={{ width: 0 }}
      animate={{ width: "100%", }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  );

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
              <li className="relative">
                <Link
                  href="/"
                  prefetch={true}
                  className="text-gray-700 dark:text-gray-200 hover:text-red-600 relative transition-colors"
                >
                  Home
                </Link>
                {pathname === "/" && <ActiveBorder />}
              </li>

              {/* About Dropdown */}
              <li className="relative" ref={aboutRef}>
                <button className="relative flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-red-600 transition-colors">
                  About Us {aboutOpen ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
                  {pathname.startsWith("/about") && <ActiveBorder />}
                </button>
                <AnimatePresence>
                  {aboutOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 bg-white/90 dark:bg-gray-800 shadow-lg mt-2 w-60 rounded-md p-2 space-y-2 z-50"
                    >
                      {aboutLinks.map((link, idx) => (
                        <li key={idx} className="relative">
                          <Link
                            href={link.href}
                            prefetch={link.prefetch}
                            className="block text-gray-800 dark:text-gray-200 hover:text-red-600 relative transition-colors"
                          >
                            {link.name}
                            {pathname.startsWith(link.href) && <ActiveBorder />}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Services Dropdown */}
              <li className="relative" ref={servicesRef}>
                <button className="relative flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-red-600 transition-colors">
                  Services {servicesOpen ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
                  {pathname.startsWith("/Services") && <ActiveBorder />}
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
                        <li key={idx} className="relative">
                          <Link
                            href={link.href}
                            prefetch={link.prefetch}
                            className="block text-gray-700 dark:text-gray-200 hover:text-red-600 relative transition-colors"
                          >
                            {link.name}
                            {pathname.startsWith(link.href) && <ActiveBorder />}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Business Dropdown */}
              <li className="relative" ref={businessRef}>
                <button className="relative flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-red-600 transition-colors">
                  Business/Products {businessOpen ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
                  {pathname.startsWith("/products") && <ActiveBorder />}
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
                        <li key={idx} className="relative">
                          <Link
                            href={link.href}
                            prefetch={link.prefetch}
                            className="block text-gray-800 dark:text-gray-200 hover:text-red-600 relative transition-colors"
                          >
                            {link.name}
                            {pathname.startsWith(link.href) && <ActiveBorder />}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* More Details Hover */}
              <li className="relative group py-2">
                <button type="button" className="relative flex items-center gap-1 text-gray-800 dark:text-gray-200 hover:text-red-600 transition-colors">
                  More Details
                  <span className="transition-transform duration-300 group-hover:rotate-180">↓</span>
                  {links.some(link => pathname.startsWith(link.href)) && <ActiveBorder />}
                </button>

                <ul className="absolute hidden group-hover:block top-full right-0 bg-white/90 dark:bg-gray-800 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg w-40 rounded-xl p-2 space-y-1 z-50 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  {links.map((item, idx) => (
                    <li key={idx} className="relative">
                      <Link
                        href={item.href}
                        prefetch={item.prefetch}
                        className="block text-gray-800 dark:text-gray-200 hover:text-red-600 relative transition-colors"
                      >
                        {item.name}
                        {pathname.startsWith(item.href) && <ActiveBorder/>}
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
                {/* Mobile Links with ActiveBorder */}
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about", children: aboutLinks, toggle: mobileAboutOpen, setToggle: setMobileAboutOpen },
                  { name: "Services", href: "/Services", children: servicesLinks, toggle: mobileServicesOpen, setToggle: setMobileServicesOpen },
                  { name: "Business/Products", href: "/products", children: businessLinks, toggle: mobileBusinessOpen, setToggle: setMobileBusinessOpen },
                  { name: "More Details", href: "", children: links, toggle: mobileMoreOpen, setToggle: setMobileMoreOpen }
                ].map((item, idx) => (
                  <li key={idx} className="relative">
                    {item.children ? (
                      <>
                        <button
                          onClick={() => item.setToggle(!item.toggle)}
                          className="flex justify-between w-full text-gray-700 dark:text-gray-200 hover:text-red-600 transition-colors"
                        >
                          {item.name} {item.toggle ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                        {item.toggle && (
                          <ul className="pl-4 mt-2 space-y-2 relative">
                            {item.children.map((link, idx2) => (
                              <li key={idx2} className="relative">
                                <Link
                                  href={link.href}
                                  prefetch={link.prefetch}
                                  className="block text-gray-700 dark:text-gray-200 hover:text-red-600 transition-colors"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {link.name}
                                  {pathname.startsWith(link.href) && (
                                    <motion.span
                                      layoutId="mobileActiveBorder"
                                      className="absolute bottom-0 left-0 h-[2px] bg-red-600"
                                      initial={{ width: 0 }}
                                      animate={{ width: "100%" }}
                                      transition={{ duration: 0.5, ease: "easeOut" }}
                                    />
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        prefetch={true}
                        className="block text-gray-700 dark:text-gray-200 hover:text-red-600 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                        {pathname === item.href && (
                          <motion.span
                            layoutId="mobileActiveBorder"
                            className="absolute bottom-0 left-0 h-[2px] bg-red-600"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                          />
                        )}
                      </Link>
                    )}
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
