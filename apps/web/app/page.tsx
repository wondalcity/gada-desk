import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Ecosystem from '@/components/Ecosystem';
import Pricing from '@/components/Pricing';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Ecosystem />
      <Pricing />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
