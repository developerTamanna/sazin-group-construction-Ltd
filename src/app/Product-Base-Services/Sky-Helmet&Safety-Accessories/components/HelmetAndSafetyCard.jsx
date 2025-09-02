'use client';

const HelmetAndSafetyCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:shadow-2xl hover:scale-105">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1591115765373-520fd36a14e6?q=80&w=800"
          alt="Helmet"
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Premium Safety Helmet
        </h2>

        {/* Price */}
        <p className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">
          $49.99
        </p>

        {/* CTA Button */}
        <button className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl shadow-md transition-transform duration-300 transform hover:scale-105 dark:bg-red-500 dark:hover:bg-red-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default HelmetAndSafetyCard;
