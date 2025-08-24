import { FaCogs, FaLaptopCode, FaNetworkWired, FaServer } from 'react-icons/fa';

export default function MissionBlock() {
  return (
    <section className="relative bg-neutral-50 dark:bg-neutral-950 py-20 px-6 md:px-12 lg:px-20 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-red-600 dark:text-red-600 tracking-wide">
          Our Mission
        </h2>

        {/* Divider */}
        <div className="w-20 h-1 bg-red-600 dark:bg-red-600 mx-auto mt-4 rounded-full"></div>

        {/* Paragraph */}
        <p className="mt-8 text-lg md:text-xl leading-relaxed text-neutral-700 dark:text-neutral-300">
          To provide world-class civil, electro-mechanical, EPC, and IT-enabled
          services with integrity, professionalism, and a commitment to quality,
          safety, and customer satisfaction.
        </p>
      </div>

      {/* Tech Icons scattered in background */}
      <FaLaptopCode className="absolute top-10 left-5 w-12 h-12 text-red-500 dark:text-red-700 opacity-40 animate-pulse" />
      <FaServer className="absolute top-1/4 right-10 w-16 h-16 text-red-400 dark:text-red-600 opacity-30 rotate-12" />
      <FaCogs className="absolute bottom-20 left-16 w-14 h-14 text-red-400 dark:text-red-700 opacity-25 rotate-45" />
      <FaNetworkWired className="absolute bottom-10 right-5 w-20 h-20 text-red-500 dark:text-red-600 opacity-20 animate-bounce" />
    </section>
  );
}
