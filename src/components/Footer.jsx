"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`w-full py-12 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-300"
          : "bg-black text-gray-100"
      }`}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        {/* Contact Info */}
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2 inline-block">Logo</h3>
          <p className="mt-2 text-gray-400">
            Contractor, Civil Construction, ElectroMechanical Works, Importer &
            Supplier, etc.
          </p>
          <p className="mt-4 text-gray-400">
            House #42, Road #07, Section-10, Mirpur, Dhaka-1216, Bangladesh.
          </p>

          {/* Social Icons */}
          <div className="mt-8 flex justify-left gap-4 text-xl">
            <a href="#" className="hover:text-red-600 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              <FaGoogle />
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="flex-1">
          <h3 className="text-xl mb-2 text-gray-200 inline-block">Services</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li className="hover:text-red-600 transition-colors">
              Circuits & Wiring
            </li>
            <li className="hover:text-red-600 transition-colors">
              Code compliance
            </li>
            <li className="hover:text-red-600 transition-colors">
              Power audits
            </li>
            <li className="hover:text-red-600 transition-colors">Remodels</li>
            <li className="hover:text-red-600 transition-colors">
              Smoke detectors
            </li>
          </ul>
        </div>

        {/* Supports */}
        <div className="flex-1 ">
          <h3 className="text-gray-200 text-xl mb-2 inline-block">Supports</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li className="hover:text-red-600 transition-colors">Careers</li>
            <li className="hover:text-red-600 transition-colors">
              Our Process
            </li>
            <li className="hover:text-red-600 transition-colors">FAQs</li>
            <li className="hover:text-red-600 transition-colors">
              Client Testimonials
            </li>
            <li className="hover:text-red-600 transition-colors">Our Blog</li>
          </ul>
        </div>

        {/* Top Rated Products */}
        <div className="flex-1">
          <h3 className="text-gray-200 mb-2  inline-block">
            Top Rated ProductsT
          </h3>
          <div className="mt-2 space-y-5 text-gray-400">
            <div className="flex items-center gap-3">
              <img
                src="/hand-tool.png"
                alt="Hand Tools"
                className="w-16 h-16 object-cover"
              />
              <div>
                <p>Hand Tools</p>
                <p className="font-bold text-red-600">£119.00</p>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/collector-tool.png"
                alt="Collectors Three Slot Watch Box"
                className="w-16 h-16 object-cover"
              />
              <div>
                <p>Collectors Three Slot Watch Box</p>
                <p className="font-bold text-yellow-500">£44.99</p>
                <p>⭐⭐⭐⭐☆</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className={`mt-8 border-t container mx-auto ${
          theme === "dark" ? "border-gray-700" : "border-gray-600"
        } pt-4 text-center text-sm ${
          theme === "dark" ? "text-gray-300" : "text-gray-600"
        }`}
      >
        &copy; {new Date().getFullYear()} CompanyLogo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
