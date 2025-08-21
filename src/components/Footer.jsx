'use client';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`w-full py-12 ${theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-black text-gray-100'}`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        {/* Contact Info */}
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2 border-b-2 border-red-600 inline-block">CONTACT US</h3>
          <p className="mt-2 font-medium">Corporate Office Address:</p>
          <p>House No# 432 (1st Floor), Road No#30, New DOHS, Mohakhali, Dhaka-1206</p>
          <p>Email: info@sazin.com.bd, sazin.ltd@gmail.com</p>
          <p>Phone: +88-02-58810754</p>
          <p className="mt-2 font-medium">Register Address:</p>
          <p>368/3, Senpara Parbata, Mirpur-10, Dhaka-1216</p>
        </div>

        {/* Services */}
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2 border-b-2 border-red-600 inline-block">SERVICES</h3>
          <ul className="mt-2 space-y-1">
            <li>Circuits & Wiring</li>
            <li>Code compliance</li>
            <li>Power audits</li>
            <li>Remodels</li>
            <li>Smoke detectors</li>
          </ul>
        </div>

        {/* Supports */}
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2 border-b-2 border-red-600 inline-block">SUPPORTS</h3>
          <ul className="mt-2 space-y-1">
            <li>Careers</li>
            <li>Our Process</li>
            <li>FAQs</li>
            <li>Client Testimonials</li>
            <li>Our Blog</li>
          </ul>
        </div>

        {/* Top Rated Products */}
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2 border-b-2 border-red-600 inline-block">TOP RATED PRODUCT</h3>
          <div className="mt-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/hand-tool.png" alt="Hand Tools" className="w-16 h-16 object-cover" />
              <div>
                <p>Hand Tools</p>
                <p className="font-bold text-red-600">£119.00</p>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src="/collector-tool.png" alt="Collectors Three Slot Watch Box" className="w-16 h-16 object-cover" />
              <div>
                <p>Collectors Three Slot Watch Box</p>
                <p className="font-bold text-yellow-500">£44.99</p>
                <p>⭐⭐⭐⭐☆</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-8 flex justify-center gap-4 text-xl">
        <a href="#" className="hover:text-red-600 transition-colors"><FaFacebookF /></a>
        <a href="#" className="hover:text-red-600 transition-colors"><FaTwitter /></a>
        <a href="#" className="hover:text-red-600 transition-colors"><FaGoogle /></a>
        <a href="#" className="hover:text-red-600 transition-colors"><FaLinkedinIn /></a>
        <a href="#" className="hover:text-red-600 transition-colors"><FaYoutube /></a>
      </div>

      {/* Copyright */}
      <div className={`mt-8 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-400'} pt-4 text-center text-sm`}>
        &copy; {new Date().getFullYear()} CompanyLogo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
