import HeroElectro from "./components/HeroElectro";
import Highlights from "./components/Highlights";
import Capabilities from "./components/Capabilities";
import ProcessSteps from "./components/ProcessSteps";
import StandardsCompliance from "./components/StandardsCompliance";
import ProjectsShowcase from "./components/ProjectsShowcase";
import FAQsElectro from "./components/FAQsElectro";
import ContactCTA from "./components/ContactCTA";

export const metadata = {
  title: "Electro-Mechanical Construction | Sazin Construction Ltd.",
  description:
    "LV/MV power, substation, HVAC, Fire Detection & Suppression, BMS/Automation, Solar PV, and Testing & Commissioning—end-to-end E/M solutions by Sazin Construction Ltd.",
};

export default function ElectroMechanicalPage() {
  return (
    <main>
      <HeroElectro />
      <Highlights />
      <Capabilities />
      <ProcessSteps />
      <StandardsCompliance />
      <ProjectsShowcase />
      <FAQsElectro />
      <ContactCTA />
    </main>
  );
}
