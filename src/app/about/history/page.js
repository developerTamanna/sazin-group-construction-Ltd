import dynamic from "next/dynamic";
import Head from "next/head";

// Lazy-load below-the-fold components with SSR true (hydration safe)
const HeroHistory = dynamic(() => import("./components/HeroHistory"), { ssr: true });
const Timeline = dynamic(() => import("./components/Timelines"), { ssr: true });
const Milestones = dynamic(() => import("./components/Milestones"), { ssr: true });
const LeadershipMessage = dynamic(() => import("./components/LeaderShipes"), { ssr: true });
const LegacyCTA = dynamic(() => import("./components/LegacyCTA"), { ssr: true });

export const metadata = {
  title: "Sazin Construction Ltd. | Detailed Company History",
  description:
    "Discover the journey of Sazin Construction Ltd. from its founding in 2007 to becoming a trusted name in civil, electro-mechanical, and EPC projects in Bangladesh.",
  alternates: {
    canonical: "https://www.yourdomain.com/detailed-history",
  },
  openGraph: {
    title: "Sazin Construction Ltd. | Detailed Company History",
    description:
      "Explore the journey and milestones of Sazin Construction Ltd., a leader in civil, electro-mechanical, and EPC projects in Bangladesh.",
    url: "https://www.yourdomain.com/detailed-history",
    type: "website",
    images: [
      {
        url: "https://www.yourdomain.com/og-history.jpg",
        width: 1200,
        height: 630,
        alt: "Sazin Construction Ltd. History",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sazin Construction Ltd. | Detailed Company History",
    description:
      "Discover the journey of Sazin Construction Ltd., a trusted name in civil, electro-mechanical, and EPC projects.",
    images: ["https://www.yourdomain.com/og-history.jpg"],
  },
};

export default function DetailedHistoryPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.alternates.canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />

        {/* Twitter Card */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
      </Head>

      <main>
        {/* Above-the-fold / hero section */}
        <HeroHistory />

        {/* Below-the-fold lazy sections */}
        <Timeline />
        <Milestones />
        <LeadershipMessage />
        <LegacyCTA />
      </main>

      {/* ✅ JSON-LD structured data */}
      <script
        type="application/ld+json"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sazin Construction Ltd.",
            "url": "https://www.yourdomain.com",
            "logo": "https://www.yourdomain.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/yourpage",
              "https://www.linkedin.com/company/yourcompany"
            ],
            "description": metadata.description,
          }),
        }}
      />
    </>
  );
}
