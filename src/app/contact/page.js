import ShortContact from '@/components/ShortContact';
import Contact from './components/Contact';
import SmallBanner from './components/SmallBanner';
// import Contact from './components/SmallBanner';
const page = () => {
  const header='Build Together'
  const desc='Partner with Sazin Construction Ltd. for reliability, safety, and excellence.'
  return (
    <header>
        <SmallBanner></SmallBanner>
        <Contact></Contact>
{/*          <ShortContact header={header} desc={desc} /> */}
    </header>
  );
};

export default page;
