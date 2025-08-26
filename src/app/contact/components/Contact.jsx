// components/Contact.jsx
'use client';
import { useState } from 'react';
import { FaEnvelope, FaHome, FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert('Message Sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen flex items-center justify-center p-6 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-8 max-w-6xl w-full grid md:grid-cols-2 gap-8 transition-colors duration-300">
        {/* Left Side - Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Lets <span className="text-red-500">Talk</span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 h-36 focus:outline-none focus:ring-2 focus:ring-red-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Your message here"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Info */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <img
            src="https://i.ibb.co/29pmXPP/download.jpg"
            alt="Contact Illustration"
            className="w-full max-w-md rounded-xl border border-gray-300 dark:border-gray-600"
          />

          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm w-full space-y-4 transition-colors duration-300">
            <div className="flex items-start gap-3 text-gray-900 dark:text-gray-100">
              <FaHome className="text-red-500 mt-1" />
              <p>
                <strong>Address</strong>
                <br />
                SAZIN CONSTRUCTION LTD , <br />
                House #42, Road #07, Section-10, Mirpur, Dhaka-1216, Bangladesh.
              </p>
            </div>

            <div className="flex items-start gap-3 text-gray-900 dark:text-gray-100">
              <FaPhoneAlt className="text-red-500 mt-1" />
              <p>
                <strong>Phone</strong>
                <br />
                +88-02-58810754
              </p>
            </div>

            <div className="flex items-start gap-3 text-gray-900 dark:text-gray-100">
              <FaEnvelope className="text-red-500 mt-1" />
              <p>
                <strong>Email</strong>
                <br />
                sazin.ltd@gmail.com <br />
                info@sazin.com.bd
              </p>
            </div>

            <div className="flex gap-4 text-gray-600 dark:text-gray-300 text-xl pt-3">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
