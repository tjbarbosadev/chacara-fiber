import { PricingCard } from '@/components/ui/PricingCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { SECTION_IMAGES } from '@/constants/images';
import { containerClasses } from '@/constants/layout';
import { PLANS } from '@/constants/plans';

export function Pricing() {
  return (
    <section
      id="planos"
      className="relative overflow-hidden py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 2xl:py-28"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={SECTION_IMAGES.pricing.src}
          alt=""
          width={1470}
          height={980}
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
        <div className="from-navy-950/85 via-navy-950/70 to-navy-950/90 absolute inset-0 bg-gradient-to-b" />
      </div>

      <div className={`${containerClasses} relative z-10`}>
        <SectionTitle className="text-gold-500 mb-10 sm:mb-12">
          NOSSOS PLANOS
        </SectionTitle>

        <div className="mx-auto flex max-w-6xl justify-center">
          <div className="grid w-full grid-cols-1 justify-items-center gap-6 sm:max-w-sm md:max-w-none md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-6 2xl:gap-8">
            {PLANS.map((plan) => (
              <PricingCard
                key={plan.id}
                speed={plan.speed}
                price={plan.price}
                tagline={plan.tagline}
                icon={plan.icon}
                variant="overlay"
                className="w-full max-w-sm"
              />
            ))}
          </div>
        </div>
      </div>

      <span className="sr-only">{SECTION_IMAGES.pricing.alt}</span>
    </section>
  );
}
