import HeroCivil from "./components/HeroCivil";
import Highlights from "./components/Highlights";
import ServicesCivil from "./components/ServicesCivil";
import ProcessCivil from "./components/ProcessCivil";
import StandardsCivil from "./components/StandardsCivil";
import ProjectsCivil from "./components/ProjectsCivil";
import ContactCivil from "./components/ContactCivil";

export const metadata = {
  title: "Civil Construction | Sazin Construction Ltd.",
  description:
    "Residential, commercial, and industrial building construction solutions with quality, safety, and timely delivery from Sazin Construction Ltd.",
};

export default function CivilConstructionPage() {
  return (
    <main>
      <HeroCivil />
      <Highlights />
      <ServicesCivil />
      <ProcessCivil />
      <StandardsCivil />
      <ProjectsCivil />
      <ContactCivil />
    </main>
  );
}
