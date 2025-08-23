import ShortContact from '../components/ShortContact';
import Achievement from './components/Achievement';
import Banner from './components/Banner';
import FeatureProducts from './components/FeatureProducts';
import LatestNews from './components/LatestNews';
import AboutSnapet from './components/AboutSnapet';

export default function Home() {
  return (
    <section>
      <div>
        <Banner></Banner>
        <AboutSnapet></AboutSnapet>
        <FeatureProducts></FeatureProducts>
        <LatestNews></LatestNews>
        <Achievement></Achievement>
        <ShortContact></ShortContact>
      </div>
    </section>
  );
}
