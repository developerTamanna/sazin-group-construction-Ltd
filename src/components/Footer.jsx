"use client";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script"; // ✅ SEO JSON-LD এর জন্য
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

  // ✅ JSON-LD Structured Data (LocalBusiness + Organization)
  const footerJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sazin Construction Ltd",
    url: "https://yourdomain.com",
    logo: "https://yourdomain.com/logo.png",
    description:
      "Contractor, Civil Construction, ElectroMechanical Works, Importer & Supplier, Safety Gear, Agro Products, and EPC Projects.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "House #42, Road #07, Section-10, Mirpur",
      addressLocality: "Dhaka",
      postalCode: "1216",
      addressCountry: "Bangladesh",
    },
    sameAs: [
      "https://facebook.com/yourpage",
      "https://twitter.com/yourpage",
      "https://linkedin.com/company/yourpage",
      "https://youtube.com/yourchannel",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+880-1234-567890",
      contactType: "customer service",
      areaServed: "BD",
      availableLanguage: ["en", "bn"],
    },
  };

  return (
    <footer
      className={`w-full py-14 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-300"
          : "bg-black text-gray-100"
      }`}
    >
      {/* ✅ JSON-LD Lazy Load */}
      <Script
        id="footer-jsonld"
        type="application/ld+json"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(footerJsonLd) }}
      />

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
                priority={false} // ✅ performance hint
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
            <a
              href="https://facebook.com/yourpage"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/yourpage"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://google.com/"
              aria-label="Google"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
            >
              <FaGoogle />
            </a>
            <a
              href="https://linkedin.com/company/yourpage"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://youtube.com/yourchannel"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
            >
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
            <li className="hover:text-red-600 transition-colors">Safety Gear</li>
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
            <li className="hover:text-red-600 transition-colors">
              Sazin Construction Ltd
            </li>
            <li className="hover:text-red-600 transition-colors">
              Sazin Agro & Fisheries
            </li>
            <li className="hover:text-red-600 transition-colors">
              Sky Helmet & Safety
            </li>
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
