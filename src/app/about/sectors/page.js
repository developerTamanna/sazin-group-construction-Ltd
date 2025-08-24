import HeroSectors from "./components/HeroSectors";
import SectorGrid from "./components/SectorGrid";
import SectorDetails from "./components/SectorDetails";
import Strengths from "./components/Strengths";
import SectorsCTA from "./components/SectorsCTA";

export const metadata = {
  title: "Sazin Construction Ltd. | Overview of Business Sectors",
  description:
    "Explore the diverse business sectors of Sazin Construction Ltd. including civil construction, electro-mechanical works, EPC projects, IT-enabled services, and fire protection systems.",
};

export default function BusinessSectorsPage() {
  return (
    <main>
      <HeroSectors />
      <SectorGrid />
      <SectorDetails />
      <Strengths />
      <SectorsCTA />
    </main>
  );
}
