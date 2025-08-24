import HeroLeadership from "./components/HeroLeadership";
import Profiles from "./components/Profiles";
import Philosophy from "./components/Philosophy";
import Achievements from "./components/Achievements";
import LeadershipCTA from "./components/LeadershipCTA";

export const metadata = {
  title: "Sazin Construction Ltd. | Leadership Profiles",
  description:
    "Meet the leadership team of Sazin Construction Ltd. – experienced professionals leading civil, electro-mechanical, and EPC projects across Bangladesh.",
};

export default function LeadershipProfilesPage() {
  return (
    <main>
      <HeroLeadership />
      <Profiles />
      <Philosophy />
      <Achievements />
      <LeadershipCTA />
    </main>
  );
}
