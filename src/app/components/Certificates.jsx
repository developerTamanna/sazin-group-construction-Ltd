// Certificates.jsx
import dynamic from "next/dynamic";

// Framer-motion part client-only import korlam
const MotionCertificates = dynamic(() => import("./MotionCertificates"), {
  ssr: true,
  loading: () => <p className="text-center text-gray-500">Loading...</p>,
});

export const metadata = {
  title: "Certificates & Licenses | Your Company",
  description: "Ensuring compliance, credibility, and trust with verified certificates & licenses.",
  openGraph: {
    title: "Certificates & Licenses",
    description: "Ensuring compliance, credibility, and trust.",
    images: ["/certificates.jpeg"],
  },
};

export default function CertificatesPage() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-950 py-16 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-left text-gray-800 dark:text-white">
          Certificates & <span className="text-red-500">Licenses</span>
        </h2>
        <p className="text-left mt-2 text-xl text-neutral-600 dark:text-neutral-300">
          Ensuring compliance, credibility, and trust.
        </p>
      </div>

      {/* Lazy-loaded motion client component */}
      <MotionCertificates />
    </section>
  );
}
