"use client";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script"; 
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaPinterestP,
} from "react-icons/fa";
import { useTheme } from "next-themes";
import Logo from "../Logo";

const Footer = () => {
  const { theme } = useTheme();

  // ✅ JSON-LD Structured Data (Organization)
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
      "https://wa.me/yourwhatsapp",
      "https://pinterest.com/yourpage",
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
    <footer className="w-full py-4 bg-neutral-900 text-gray-200">
      {/* ✅ JSON-LD Lazy Load */}
      <Script
        id="footer-jsonld"
        type="application/ld+json"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(footerJsonLd) }}
      />

      <div className="container mx-auto px-4 flex items-start flex-wrap md:flex-row justify-between gap-8">
        {/* Contact Info */}
        <div className="md:flex-1 w-full text-left">
          <Link prefetch={false} href="/" >
          <div className="w-[120px] h-[120px] ">
                  <Logo  redclass="#CA111A" blackclass="white" />
             </div>
          </Link>
          <p className="text-gray-400">
            Contractor, Civil Construction, ElectroMechanical Works, Importer &
            Supplier, etc.
          </p>
          <p className="mt-4 text-gray-400">
            House #42, Road #07, Section-10, Mirpur, Dhaka-1216, Bangladesh.
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex justify-start gap-4 text-xl">
            {[
              { icon: <FaWhatsapp />, link: "https://wa.me/yourwhatsapp" },
              { icon: <FaFacebookF />, link: "https://facebook.com/yourpage" },
              { icon: <FaTwitter />, link: "https://twitter.com/yourpage" },
              { icon: <FaGoogle />, link: "https://google.com/" },
              { icon: <FaLinkedinIn />, link: "https://linkedin.com/company/yourpage" },
              { icon: <FaPinterestP />, link: "https://pinterest.com/yourpage" },
              { icon: <FaYoutube />, link: "https://youtube.com/yourchannel" },
            ].map(({ icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="flex-1">
          <h3 className="text-xl border-b-2 border-red-500 mb-3 inline-block">
            Services
          </h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><Link href="/Services/Electro-mechanical" className="hover:text-red-600">Electro-Mech</Link></li>
            <li><Link href="/Services/safety-security-construction-management" className="hover:text-red-600">Safety Gear</Link></li>
            <li><Link href="/Services/safety-security-construction-management" className="hover:text-red-600">Safety Training</Link></li>
            <li><Link href="/products/agro-products" className="hover:text-red-600">Agro Products</Link></li>
            <li><Link href="/services/epc-projects" className="hover:text-red-600">EPC Projects</Link></li>
          </ul>
        </div>

        {/* Supports */}
        <div className="flex-1">
          <h3 className="text-xl border-b-2 border-red-500 mb-3 inline-block">
            Supports
          </h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><Link href="/career" className="hover:text-red-600">Careers</Link></li>
            <li><Link href="/supports/our-process" className="hover:text-red-600">Our Process</Link></li>
            <li><Link href="/supports/faqs" className="hover:text-red-600">FAQs</Link></li>
            <li><Link href="/supports/client-testimonials" className="hover:text-red-600">Client Testimonials</Link></li>
            <li><Link href="/news-blog" className="hover:text-red-600">Our Blog</Link></li>
          </ul>
        </div>

        {/* Business */}
        <div className="flex-1">
          <h3 className="text-xl border-b-2 border-red-500 mb-3 inline-block">
            Business
          </h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><Link href="/" className="hover:text-red-600">Sazin Construction Ltd</Link></li>
            <li><Link href="/business/sazin-agro" className="hover:text-red-600">Sazin Agro & Fisheries</Link></li>
            <li><Link href="/business/sky-helmet" className="hover:text-red-600">Sky Helmet & Safety</Link></li>
            <li><Link href="/business/accessories" className="hover:text-red-600">Accessories</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div
        className={`mt-8 border-t container mx-auto ${
          theme === "dark" ? "border-gray-700" : "border-gray-600"
        } pt-4 text-center text-sm text-gray-400`}
      >
        &copy; {new Date().getFullYear()} Sazin Construction LTD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;