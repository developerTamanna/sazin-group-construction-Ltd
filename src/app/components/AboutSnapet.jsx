// File: app/page.jsx
import dynamic from "next/dynamic";

// ✅ Lazy load Google Map only on client
const GoogleMap = dynamic(() => import("./GoogleMap"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-64">
      <p className="text-neutral-500">Loading map...</p>
    </div>
  ),
});

// ✅ Metadata handled in server component
export const metadata = {
  title: "Sazin Construction Ltd. | Home",
  description:
    "Sazin Construction Ltd. is a trusted engineering and construction company in Bangladesh since 2007. Civil, Electro-Mechanical, EPC, IT & Fire Protection Services.",
  keywords: [
    "Sazin Construction",
    "construction company Bangladesh",
    "civil construction",
    "electro-mechanical",
    "EPC",
    "fire protection",
    "engineering services",
  ],
  alternates: { canonical: "https://www.sazin.com.bd" },
  openGraph: {
    title: "Sazin Construction Ltd. | Home",
    description:
      "Trusted engineering and construction partner in Bangladesh since 2007.",
    url: "https://www.sazin.com.bd",
    siteName: "Sazin Construction Ltd.",
    images: [
      {
        url: "https://www.sazin.com.bd/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "Sazin Construction – Home Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sazin Construction Ltd. | Home",
    description:
      "Trusted engineering and construction partner in Bangladesh since 2007.",
    images: ["https://www.sazin.com.bd/og/home.jpg"],
  },
};

export default function HomePage() {
  return (
    <main className="relative isolate">
      {/* Hero Section */}
      <section className="relative bg-neutral-50 text-gray-900 dark:bg-neutral-950 dark:text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:py-15 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl">
            Building the Future with Excellence Since 2007
          </h1>
          <p className="mt-6 text-xl leading-7 text-neutral-500 sm:text-lg sm:leading-8 max-w-3xl mx-auto dark:text-gray-400">
            Delivering world-class civil, electro-mechanical, and turnkey
            engineering solutions with reliability, safety, and innovation.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-2 md:gap-4">
            <a
              href="/projects"
              aria-label="Explore our past and ongoing projects"
              className="border border-red-500 text-red-600 px-2 md:px-6 py-1.5 rounded-lg font-semi-bold text-base hover:bg-red-500 hover:text-white transition"
            >
              Explore Our Projects
            </a>
            <a
              href="/contact"
              aria-label="Contact Sazin Construction team"
              className="border border-red-500 text-red-600 px-6 py-1.5 rounded-lg font-semi-bold text-base hover:bg-red-500 hover:text-white transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        className="relative overflow-hidden bg-white dark:bg-neutral-950"
        aria-labelledby="about-title"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
          {/* Text Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
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
              IT-enabled services, and fire protection systems. With a strong
              team of professionals and advanced equipment, we ensure projects
              are delivered on time, with quality and safety at the forefront.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/about"
                aria-label="Learn more about Sazin Construction"
                className="inline-flex items-center justify-center text-red-600 text-base font-semi-bold transition hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
              >
                Learn More About Us →
              </a>
            </div>
          </div>

          {/* Visual with Lazy Map */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-red-600/10 to-black/10 blur-xl dark:from-red-500/20 dark:to-white/5" />
            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-700 dark:bg-neutral-900">
              {/* ✅ Lazy loaded map */}
              <GoogleMap />
              <div className="border-t border-neutral-100 p-4 dark:border-neutral-800">
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  Excellence in civil, electro-mechanical, EPC, IT-enabled &
                  fire protection solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
