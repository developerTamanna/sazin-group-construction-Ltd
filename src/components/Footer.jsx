"use client";
import Link from "next/link";
import Image from "next/image";
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
      className={`w-full py-14 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-300"
          : "bg-black text-gray-100"
      }`}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        {/* Contact Info */}
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-4 inline-block">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={150}
                height={60}
                className="object-contain rounded-full"
              />
            </Link>
          </h3>
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
          <h3 className="text-xl border-b-2 border-red-500 mb-2 text-gray-200 inline-block">
            Services
          </h3>
          <ul className="mt-2 space-y-3 text-gray-400">
            <li className="hover:text-red-600 transition-colors">
              Electro-Mech
            </li>
            <li className="hover:text-red-600 transition-colors">
              Safety Gear
            </li>
            <li className="hover:text-red-600 transition-colors">
              Safety Training
            </li>
            <li className="hover:text-red-600 transition-colors">
              Agro Products
            </li>
            <li className="hover:text-red-600 transition-colors">
              EPC Projects
            </li>
          </ul>
        </div>

        {/* Supports */}
        <div className="flex-1 ">
          <h3 className="text-gray-200 border-b-2 border-red-500 text-xl mb-2 inline-block">
            Supports
          </h3>
          <ul className="mt-2 space-y-3 text-gray-400">
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

        {/* Business */}
        <div className="flex-1">
          <h3 className="text-gray-200 border-b-2 border-red-500 text-xl mb-2 inline-block">
            Business
          </h3>
          <ul className="mt-2 space-y-3 text-gray-400">
            <li className="hover:text-red-600 transition-colors">Sazin Construction Ltd</li>
            <li className="hover:text-red-600 transition-colors">
              Sazin Agro & Fisheries
            </li>
            <li className="hover:text-red-600 transition-colors">Sky Helmet & Safety</li>
            <li className="hover:text-red-600 transition-colors">
              Accessories
            </li>
          </ul>
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
