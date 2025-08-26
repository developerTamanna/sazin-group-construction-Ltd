"use client";
import Image from "next/image";

const ProductsPage = () => {
  const products = [
    { id: 1, title: "Tools & Machineries", img: "/fullface.jpg" },
    { id: 2, title: "Copper, Insulation", img: "/fullface.jpg" },
    { id: 3, title: "Make to Order", img: "/fullface.jpg" },
    { id: 4, title: "Others", img: "/fullface.jpg" },
    { id: 5, title: "Extra Product", img: "/fullface.jpg" },
    { id: 6, title: "Another Product", img: "/fullface.jpg" },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 dark:text-white">
          All Products
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={product.img}
                alt={product.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold dark:text-white">
                  {product.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;