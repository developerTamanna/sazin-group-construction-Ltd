import ShortContact from '@/components/ShortContact';
import Contact from './components/Contact';
const page = () => {
  const header='Build Together'
  const desc='Partner with Sazin Construction Ltd. for reliability, safety, and excellence.'
  return (
    <header>
      <div>
        <Contact></Contact>
         <ShortContact header={header} desc={desc} />
      </div>
    </header>
  );
};

export default page;
