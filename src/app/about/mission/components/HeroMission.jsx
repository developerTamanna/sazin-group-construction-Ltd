'use client';

export default function HeroMission() {
  return (
    <section className="relative py-28 px-6 md:px-12 text-center">
      {/* Background Image */}
      <img
        src="/pp.jpg"
        alt="Mission Background"
        className="w-full h-full object-cover absolute inset-0 z-0"
      />

      {/* Circular Overlay */}
      <div className="relative z-10 flex flex-col items-center">
        <div
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]
                     border-2 border-red-600 dark:border-red-600
                     rounded-full flex flex-col justify-center items-center
                     p-6 text-center
                     bg-white/70 dark:bg-black/70
                     shadow-lg backdrop-blur-sm transition-all duration-500"
        >
          {/* Vision Block */}
          <h2 className="text-red-600 dark:text-red-600 font-extrabold text-lg md:text-xl mb-3">
            OUR VISION
          </h2>
          <p className="text-gray-900 dark:text-gray-100 text-sm md:text-base leading-relaxed">
            To be a recognized leader in engineering and construction,
            delivering excellence in every project.
          </p>

          {/* Divider */}
          <div className="w-16 h-[2px] bg-red-600 dark:bg-red-600 my-4 rounded-full"></div>

          {/* Mission Block */}
          <h2 className="text-red-600 dark:text-red-600 font-extrabold text-lg md:text-xl mb-3">
            OUR MISSION
          </h2>
          <p className="text-gray-900 dark:text-gray-100 text-sm md:text-base leading-relaxed">
            To provide sustainable and innovative construction solutions that
            exceed expectations and build trust.
          </p>
        </div>
      </div>
    </section>
  );
}
