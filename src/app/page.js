import ShortContact from '../components/ShortContact';
import Achievement from './components/Achievement';
import Banner from './components/Banner';
import FeatureProducts from './components/FeatureProducts';
import LatestNews from './components/LatestNews';
import AboutSnapet from './components/AboutSnapet';
import Services from './components/Service';
import Projects from './components/Projects';
import Equipment from './components/Equipments';
import Certificates from './components/Certificates';
import CallToAction from './components/CallToAction';
import Testimonial from './components/Clients';
import Team from './components/Team';
import WhyChooseUs from './components/WhyChoose';




export const metadata = {
  title: "Sazin Construction Ltd. | Home",
  description:
    "Sazin Construction Ltd. – Civil Construction, Electro-Mechanical, EPC, IT-enabled and Fire Protection services across Bangladesh since 2007.",
};
export default function Home() {
  return (
    <main>

        <Banner></Banner>
        <FeatureProducts></FeatureProducts>
        <Services></Services>
        <Projects></Projects>
        <Equipment></Equipment>

        
        {/* <AboutSnapet></AboutSnapet> */}
        
        

        <Team></Team>
        {/* <Testimonial></Testimonial> */}
        
        {/* <WhyChooseUs></WhyChooseUs> */}
        
        <LatestNews></LatestNews>
        {/* <Certificates></Certificates> */}
        <Achievement></Achievement>
        {/* <CallToAction></CallToAction> */}
        {/* <ShortContact></ShortContact> */}

    </main>
  );
}
