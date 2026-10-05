import { Hero } from '@/components/Hero';
import { IntroStatement } from '@/components/IntroStatement';
import { SignatureCoffee } from '@/components/SignatureCoffee';
import { Experience } from '@/components/Experience';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { Newsletter } from '@/components/Newsletter';
import { FinalCTA } from '@/components/FinalCTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <IntroStatement />
      <SignatureCoffee />
      <Experience />
      <Gallery />
      <Testimonials />
      <Newsletter />
      <FinalCTA />
    </>
  );
}
