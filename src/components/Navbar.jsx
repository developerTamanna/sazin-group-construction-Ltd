// components/Navbar.jsx
'use client';
import Theme from '@/app/utils/Theme';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <section>
      <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            CompanyLogo
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            <li>
              <Link
                href="/"
                className="hover:text-red-600 text-gray-700 dark:text-gray-200 transition-colors"
              >
                Home
              </Link>
            </li>

            {/* About Dropdown */}
            <li className="relative">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                aria-haspopup="true"
                aria-expanded={aboutOpen}
                className="hover:text-red-600 text-gray-700 dark:text-gray-200 flex items-center gap-1 transition-colors"
              >
                About Us{' '}
                {aboutOpen ? (
                  <FaChevronUp className="w-4 h-4" />
                ) : (
                  <FaChevronDown className="w-4 h-4" />
                )}
              </button>
              {aboutOpen && (
                <ul className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-lg mt-2 w-60 rounded-md p-2 space-y-2">
                  <li>
                    <Link
                      href="/about#history"
                      className="block hover:text-red-600 text-gray-700 dark:text-gray-200 transition-colors"
                    >
                      Detailed Company History
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about#mission"
                      className="block hover:text-red-600 text-gray-700 dark:text-gray-200 transition-colors"
                    >
                      Mission & Vision
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about#mission"
                      className="block hover:text-red-600 text-gray-700 dark:text-gray-200 transition-colors"
                    >
                      Mission & Vision 222
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about#leadership"
                      className="block hover:text-red-600 text-gray-700 dark:text-gray-200 transition-colors"
                    >
                      Leadership Profiles
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about#sectors"
                      className="block hover:text-red-600 text-gray-700 dark:text-gray-200 transition-colors"
                    >
                      Overview of Business Sectors
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/services"
                className="hover:text-red-600 text-gray-700 dark:text-gray-200 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-red-600 text-gray-700 dark:text-gray-200 transition-colors"
              >
                Business/Products
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-red-600 text-gray-700 dark:text-gray-200 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/project-gallery"
                className="hover:text-red-600 text-gray-700 dark:text-gray-200 transition-colors"
              >
                Project Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-red-600 text-gray-700 dark:text-gray-200 transition-colors"
              >
                Contact
              </Link>
            </li>

            {/* Search Icon */}
            <li>
              <button className="hover:text-red-600 text-gray-700 dark:text-gray-200 transition-colors">
                <FaSearch size={18} />
              </button>
            </li>
            <li>
              <Theme />
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
        </div>
      </nav>
    </section>
  );
}
