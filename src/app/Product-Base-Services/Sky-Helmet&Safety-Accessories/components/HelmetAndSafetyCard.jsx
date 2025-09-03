"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

  const sampleData = {
  pages: [
    {
      data: [
        {
          title: "Safety Helmet",
          subtitle: "Industrial grade helmet",
          description: "Strong & durable helmet for construction workers.",
          image: "fullface.jpg",
          price: 850,
          category: "helmet",
          rating: 4.7,
          stock: 15,
        },
        {
          title: "Protective Gloves",
          subtitle: "Anti-cut safety gloves",
          description: "High-quality gloves to protect your hands at work.",
          image: "fullface.jpg",
          price: 1200,
          category: "safety",
          rating: 4.3,
          stock: 8,
        },
      ],
    },
  ],
};

const HelmetAndSafetyCard = ({ data }) => {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterPrice, setFilterPrice] = useState("all");
  const [sort, setSort] = useState("none");

  
  // Filtering & Sorting Logic
  const filterAndSortData = (subCategories) => {
    let filtered = subCategories;

    if (search) {
      filtered = filtered.filter((item) =>
        item?.title?.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filterCategory !== "all") {
      filtered = filtered.filter(
        (item) =>
          item?.category?.toLowerCase() === filterCategory.toLowerCase()
      );
    }

    if (filterPrice === "low") {
      filtered = filtered.filter((item) => item?.price < 1000);
    } else if (filterPrice === "high") {
      filtered = filtered.filter((item) => item?.price >= 1000);
    }

    if (sort === "asc") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  };

  return (
    <div className="container mx-auto p-6">
      {/* 🔍 Search + Filter + Sort Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <div className="relative w-full md:w-1/3">
          <FiSearch
            className="absolute left-3 top-3 text-gray-500 dark:text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
          />
        </div>

        {/* Filter & Sort */}
        <div className="flex flex-wrap gap-3">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-400 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
          >
            <option value="all">All Categories</option>
            <option value="helmet">Helmet</option>
            <option value="safety">Safety</option>
            <option value="tools">Tools</option>
          </select>

          <select
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-400 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
          >
            <option value="all">All Prices</option>
            <option value="low">Below 1000</option>
            <option value="high">1000 & Above</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-400 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
          >
            <option value="none">Sort by</option>
            <option value="asc">Price: Low → High</option>
            <option value="desc">Price: High → Low</option>
          </select>
        </div>
      </div>

      {/* 📦 Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between items-center">
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {filterAndSortData(page?.data || []).map((item, index) => (
              <div
                key={index}
                className="max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:shadow-2xl hover:scale-105"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={item?.image}
                    alt={item?.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {item?.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {item?.subtitle}
                  </p>

                  {/* Price */}
                  <p className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">
                    {item?.price}৳
                  </p>

                  {/* Extra Description */}
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    {item?.description}
                  </p>

                  {/* User-Friendly Info */}
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" /> {item?.rating || 4.5}
                    </span>
                    <span>
                      {item?.stock > 0 ? (
                        <span className="text-green-600 dark:text-green-400">In Stock</span>
                      ) : (
                        <span className="text-red-600 dark:text-red-400">Out of Stock</span>
                      )}
                    </span>
                    <span className="italic">#{item?.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HelmetAndSafetyCard;
