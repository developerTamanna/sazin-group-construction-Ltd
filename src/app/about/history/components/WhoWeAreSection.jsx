'use client';
import dynamic from 'next/dynamic';

const GoogleMap = dynamic(() => import('@/app/components/GoogleMap'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-64">
      <p className="text-neutral-500">Loading map...</p>
    </div>
  ),
});

const WhoWeAreSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-white dark:bg-neutral-950"
      aria-labelledby="about-title"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 lg:px-10 gap-10 py-16 lg:gap-16 lg:py-24">
        {/* Text Content */}
        <div className="flex flex-col justify-center order-2 lg:order-1 lg:px-0 px-6">
          <h2
            id="about-title"
            className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
          >
            Who We Are
          </h2>

          <p className="mt-4 text-xl leading-7 text-neutral-500 dark:text-neutral-400 sm:text-lg sm:leading-8">
            Sazin Construction Ltd. is a trusted one-stop engineering and
            construction company in Bangladesh, established in 2007. We
            specialize in civil construction, electro-mechanical works, EPC,
            IT-enabled services, and fire protection systems. With a strong team
            of professionals and advanced equipment, we ensure projects are
            delivered on time, with quality and safety at the forefront.
          </p>

          {/* CTA */}
        </div>

        {/* Visual with Lazy Map */}
        <div className="relative order-1 lg:order-2 px-2">
          <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-red-600/10 to-black/10 blur-xl dark:from-red-500/20 dark:to-white/5" />
          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-700 dark:bg-neutral-900">
            {/* ✅ Lazy loaded map */}
            <GoogleMap />
            <div className="border-t border-neutral-100 p-4 dark:border-neutral-800">
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Excellence in civil, electro-mechanical, EPC, IT-enabled & fire
                protection solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
