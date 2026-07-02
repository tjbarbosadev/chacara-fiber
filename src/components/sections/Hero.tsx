import { Wifi } from 'lucide-react';

import { SectionImage } from '@/components/ui/SectionImage';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { SECTION_IMAGES } from '@/constants/images';
import { containerClasses, sectionClasses } from '@/constants/layout';
import { HERO } from '@/constants/trust-seals';

export function Hero() {
  return (
    <section className={`${sectionClasses} bg-hero-glow`}>
      <div
        className={`${containerClasses} flex flex-col items-center gap-8 md:gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16 2xl:gap-20`}
      >
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-navy-950 text-3xl font-extrabold uppercase sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl dark:text-white">
            {HERO.headline}
          </h1>
          <p className="text-gradient-gold mt-4 text-2xl font-bold uppercase sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
            {HERO.subheadline}
          </p>
          <p className="text-navy-800 mt-6 text-sm sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg dark:text-slate-300">
            {HERO.description}{' '}
            <span className="text-gold-600 dark:text-gold-500 font-semibold">
              {HERO.highlight}
            </span>
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <WhatsAppButton />
          </div>
        </div>

        <div className="relative flex-1">
          <SectionImage
            src={SECTION_IMAGES.hero.src}
            alt={SECTION_IMAGES.hero.alt}
            priority
            className="mx-auto max-w-md lg:max-w-none"
            imageClassName="h-64 sm:h-72 md:h-80 lg:h-[420px]"
          />
          <div className="border-gold-500 bg-navy-950/80 absolute right-6 bottom-6 flex h-14 w-14 items-center justify-center rounded-full border-2">
            <Wifi className="text-gold-500 h-7 w-7" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
