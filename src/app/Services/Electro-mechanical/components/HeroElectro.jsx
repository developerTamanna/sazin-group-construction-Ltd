import HeaderOfAbout from '../../../../components/HeaderOfAbout';
export default function HeroElectro() {
    const header='Electro-Mechanical Construction'
    const desc='Power systems, HVAC, fire safety, automation—design to commissioning under one roof with quality, safety, and reliability.'
  return (
    <HeaderOfAbout
    header={header}
    desc={desc}
    />
  );
}
