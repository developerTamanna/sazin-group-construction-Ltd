import React from "react";
import Head from "next/head";
import Script from "next/script";
import ProjectShowcaseInfinity from "./Components/ProjectShowcase";
import { projects } from "./Components/projectsData";

export default function Page() {
  // ✅ JSON-LD Structured Data
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((p, index) => ({
      "@type": "CreativeWork",
      position: index + 1,
      name: p.title,
      image: p.img,
      datePublished: p.date,
      about: p.category,
      url: `https://yourdomain.com/Projects/${p.id}`,
      author: {
        "@type": "Organization",
        name: "Your Company Name",
      },
    })),
  };

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>Our Projects | Company Name</title>
        <meta
          name="description"
          content="Explore our latest projects in web development, design, and technology. See case studies and portfolio highlights."
        />
        <meta
          name="keywords"
          content="projects, portfolio, web development, design, case studies"
        />
        <meta property="og:title" content="Our Projects | Company Name" />
        <meta
          property="og:description"
          content="Discover high-quality projects crafted by our expert team."
        />
        <meta property="og:image" content="/default-project-thumbnail.jpg" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/projects" />
      </Head>

      {/* ✅ JSON-LD Lazy Load with next/script */}
      <Script
        id="projects-jsonld"
        type="application/ld+json"
        strategy="lazyOnload" // 🚀 Lazy load after page load
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />

      {/* ✅ UI untouched */}
      <div>
        <ProjectShowcaseInfinity />
      </div>
    </>
  );
}
