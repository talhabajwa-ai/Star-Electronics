import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default Home;
