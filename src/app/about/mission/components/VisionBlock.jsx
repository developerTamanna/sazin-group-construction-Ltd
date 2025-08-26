export default function VisionBlock() {
  return (
    <section className="relative bg-white dark:bg-neutral-950 py-20 px-6 md:px-12 lg:px-20 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semi-bold dark:text-white tracking-wide">
          Our <span className="text-red-600">Vision</span>
        </h2>

        {/* Divider */}
        <div className="w-20 h-1 bg-red-600 dark:bg-red-600 mx-auto mt-4 rounded-full"></div>

        {/* Paragraph */}
        <p className="mt-8 text-lg md:text-xl leading-relaxed text-neutral-700 dark:text-neutral-300">
          To be the leading engineering and construction company in Bangladesh,
          recognized for delivering innovative, sustainable, and high-quality
          projects that contribute to national development.
        </p>
      </div>

      {/* Decorative Background Circles */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-100 dark:bg-red-900 rounded-full blur-2xl opacity-50"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-200 dark:bg-red-800 rounded-full blur-3xl opacity-40"></div>
    </section>
  );
}
