import { ContactCTA } from '@/components/sections/ContactCTA';
import { Features } from '@/components/sections/Features';
import { Hero } from '@/components/sections/Hero';
import { Pricing } from '@/components/sections/Pricing';
import { TrustBanner } from '@/components/sections/TrustBanner';

export function HomePage() {
  return (
    <>
      <Hero />
      <Pricing />
      <Features />
      <TrustBanner />
      <ContactCTA />
    </>
  );
}
