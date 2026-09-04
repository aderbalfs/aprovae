import Audience from './components/Audience';
import Benefits from './components/Benefits';
import Concept from './components/Concept';
import Cta from './components/Cta';
import Faq from './components/Faq';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import LeagueMarquee from './components/LeagueMarquee';
import Positioning from './components/Positioning';
import Pricing from './components/Pricing';
import ProductShowcase from './components/ProductShowcase';
import ScreensCarousel from './components/ScreensCarousel';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <ProductShowcase />
      <Positioning />
      <LeagueMarquee />
      <Audience />
      <Features />
      <HowItWorks />
      <Benefits />
      <Concept />
      <Pricing />
      <ScreensCarousel />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
