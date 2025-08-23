// File: app/page.js
// Next.js Home Page with About Us Snapshot Section (Red / Black / White Theme) - JavaScript Version

import Image from "next/image";

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

export default function AboutSnapet() {
  return (
    <main className="relative isolate">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Building the Future with Excellence Since 2007
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            Delivering world-class civil, electro-mechanical, and turnkey
            engineering solutions with reliability, safety, and innovation.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/projects"
              className="rounded-2xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
            >
              Explore Our Projects
            </a>
            <a
              href="/contact"
              className="rounded-2xl border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
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
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          {/* Copy */}
          <div className="flex flex-col justify-center">
            <h2
              id="about-title"
              className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
            >
              Who We Are
            </h2>

            <p className="mt-4 text-base leading-7 text-neutral-700 dark:text-neutral-300">
              Sazin Construction Ltd. is a trusted one-stop engineering and
              construction company in Bangladesh, established in 2007. We
              specialize in civil construction, electro-mechanical works, EPC,
              IT-enabled services, and fire protection systems. With a strong
              team of professionals and advanced equipment, we ensure projects
              are delivered on time, with quality and safety at the forefront.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/about"
                aria-label="Learn more about Sazin Construction"
                className="inline-flex items-center justify-center rounded-2xl border border-red-700 bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
              >
                Learn More About Us
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-red-600/10 to-black/10 blur-xl dark:from-red-500/20 dark:to-white/5" />
            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-700 dark:bg-neutral-900">
              <Image
                src="/images/about-hero.jpg"
                alt="Sazin Construction — engineers at a site meeting"
                width={1200}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
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
    </main>
  );
}
