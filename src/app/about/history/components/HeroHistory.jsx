import HeaderOfAbout from "@/components/HeaderOfAbout";

export default function HeroHistory() {
    const header = "Our Company Journey";
    const desc = "Since 2007, Sazin Construction Ltd. has been building Bangladesh’s future through civil, electro-mechanical, and turnkey engineering excellence.";
  return (
    <HeaderOfAbout header={header} desc={desc}></HeaderOfAbout>
  );
}
