import HeroMission from "./components/HeroMission";
import VisionBlock from "./components/VisionBlock";
import MissionBlock from "./components/MissionBlock";
import CoreValues from "./components/CoreValues";
import MissionCTA from "./components/MissionCTA";

export const metadata = {
  title: "Sazin Construction Ltd. | Mission & Vision",
  description:
    "Explore the mission, vision, and core values that drive Sazin Construction Ltd. to deliver excellence in civil, electro-mechanical, and EPC projects.",
};

export default function MissionVisionPage() {
  return (
    <main>
      <HeroMission />
      <VisionBlock />
      <MissionBlock />
      <CoreValues />
      <MissionCTA />
    </main>
  );
}
