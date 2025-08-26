import HeroSafety from "./components/HeroSafety";
import Highlights from "./components/Highlights";
import ServicesSafety from "./components/ServicesSafety";
import ProcessSafety from "./components/ProcessSafety";
import StandardsSafety from "./components/StandardsSafety";
import ProjectsSafety from "./components/ProjectsSafety";
import ContactSafety from "./components/ContactSafety";

export const metadata = {
  title: "Safety & Security Construction and Management | Sazin Construction Ltd.",
  description:
    "Specialized solutions in fire safety, security systems, access control, surveillance, and integrated safety management.",
};

export default function SafetyPage() {
  return (
    <main>
      <HeroSafety />
      <Highlights />
      <ServicesSafety />
      <ProcessSafety />
      <StandardsSafety />
      <ProjectsSafety />
      <ContactSafety />
    </main>
  );
}
