import HeaderOfAbout from "../../../../components/HeaderOfAbout";

export default function HeroEPC() {
  const header = "Engineering Procurement & Construction (EPC)";
  const desc =
    "Turnkey EPC services — from engineering design to procurement and construction, ensuring quality, safety, and timely delivery.";
  return <HeaderOfAbout header={header} desc={desc} />;
}
