import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowWeWork } from './components/HowWeWork';
import { WhyITRos } from './components/WhyITRos';
import { UseCases } from './components/UseCases';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#131415] text-white antialiased">
      <Header />
      <Hero />
      <Services />
      <HowWeWork />
      <WhyITRos />
      <UseCases />
      <Contact />
      <Footer />
    </div>
  );
}
