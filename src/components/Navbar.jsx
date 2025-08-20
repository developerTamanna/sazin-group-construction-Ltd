// components/Navbar.jsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <section>
      <nav className="bg-base-100 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            CompanyLogo
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>

            {/* About Dropdown */}
            <li className="relative">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                aria-haspopup="true"
                aria-expanded={aboutOpen}
                className="hover:text-primary flex items-center gap-1"
              >
                About Us{' '}
                {aboutOpen ? (
                  <FaChevronUp className="w-4 h-4" />
                ) : (
                  <FaChevronDown className="w-4 h-4" />
                )}
              </button>
              {aboutOpen && (
                <ul className="absolute top-full left-0 bg-base-100 shadow-md mt-1 w-60 rounded-md p-2 space-y-2">
                  <li>
                    <Link
                      href="/about#history"
                      className="block hover:text-primary"
                    >
                      Detailed Company History
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about#mission"
                      className="block hover:text-primary"
                    >
                      Mission & Vision
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about#leadership"
                      className="block hover:text-primary"
                    >
                      Leadership Profiles
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about#sectors"
                      className="block hover:text-primary"
                    >
                      Overview of Business Sectors
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/services" className="hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-primary">
                Business/Products
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-primary">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/project-gallery" className="hover:text-primary">
                Project Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>

            {/* Search Icon */}
            <li>
              <button className="hover:text-primary">
                <FaSearch size={18} />
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <label htmlFor="menu-toggle" className="cursor-pointer">
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
