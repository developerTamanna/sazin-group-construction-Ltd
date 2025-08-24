import HeroHistory from "./components/HeroHistory";
import Timeline from "./components/Timelines";
import Milestones from "./components/Milestones";
import LeadershipMessage from "./components/LeaderShipes";
import LegacyCTA from "./components/LegacyCTA";

export const metadata = {
  title: "Sazin Construction Ltd. | Detailed Company History",
  description:
    "Discover the journey of Sazin Construction Ltd. from its founding in 2007 to becoming a trusted name in civil, electro-mechanical, and EPC projects in Bangladesh.",
};

export default function DetailedHistoryPage() {
  return (
    <main>
      <HeroHistory />
      <Timeline />
      <Milestones />
      <LeadershipMessage />
      <LegacyCTA />
    </main>
  );
}
