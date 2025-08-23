import ShortContact from '@/components/ShortContact';
import Contact from './components/Contact';
const page = () => {
  return (
    <header>
      <div>
        <Contact></Contact>
        <ShortContact></ShortContact>
      </div>
    </header>
  );
};

export default page;
