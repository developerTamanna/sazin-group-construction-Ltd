import dynamic from "next/dynamic";
import Banner from "./components/Banner";
import FeatureProducts from "./components/FeatureProducts";
import AboutSnapet from "./components/AboutSnapet";
import Services from "./components/Service";
import LazyLoadDynamic from "@/utils/LazyLoadDynamic";

// ✅ Direct dynamic imports
const Projects = dynamic(() => import("./components/Projects"));
const Equipments = dynamic(() => import("./components/Equipments"));
const Clients = dynamic(() => import("./components/Clients"));
const Certificates = dynamic(() => import("./components/Certificates"));
const LatestNews = dynamic(() => import("./components/LatestNews"));
const Achievement = dynamic(() => import("./components/Achievement"));
const CallToAction = dynamic(() => import("./components/CallToAction"));

export default function Home() {
  return (
    <main>
      {/* Above-the-fold */}
      <Banner />
      <FeatureProducts />
      <AboutSnapet />
      <Services />

      {/* Lazy load below-the-fold */}
      <Projects />
      <Equipments />
      <Clients />
      <Certificates />
      <LatestNews />
      <Achievement />
      <CallToAction />
    </main>
  );
}
