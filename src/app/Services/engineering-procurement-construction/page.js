import HeroEPC from "./components/HeroEPC";
import Highlights from "./components/Highlights";
import ServicesEPC from "./components/ServicesEPC";
import ProcessEPC from "./components/ProcessEPC";
import StandardsEPC from "./components/StandardsEPC";
import ProjectsEPC from "./components/ProjectsEPC";
import ContactEPC from "./components/ContactEPC";

export const metadata = {
  title: "Engineering Procurement & Construction | Sazin Construction Ltd.",
  description:"Sazin Construction Ltd. offers turnkey EPC solutions — from engineering design to procurement and construction across industries.",
};

export default function EPCPage() {
  return (
    <main>
      <HeroEPC />
      <Highlights />
      <ServicesEPC />
      <ProcessEPC />
      <StandardsEPC />
      <ProjectsEPC />
      <ContactEPC />
    </main>
  );
}
