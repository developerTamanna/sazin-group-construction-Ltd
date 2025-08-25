import ShortContact from "@/components/ShortContact";
export default function ContactCTA() {
  const header='Need E/M Specialists?'
  const desc='Talk to our engineering team for design reviews, BOQ, and turnkey execution.'
  return (
    <ShortContact header={header} desc={desc} />
  );
}
