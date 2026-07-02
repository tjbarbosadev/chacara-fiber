import { Crown } from 'lucide-react';

import { GoldBorder } from '@/components/ui/GoldBorder';
import { SectionImage } from '@/components/ui/SectionImage';
import { TrustBadge } from '@/components/ui/TrustBadge';
import { SECTION_IMAGES } from '@/constants/images';
import { containerClasses, sectionClasses } from '@/constants/layout';
import { TRUST_BANNER_TITLE, TRUST_SEALS } from '@/constants/trust-seals';

export function TrustBanner() {
  return (
    <section className={sectionClasses}>
      <div className={containerClasses}>
        <GoldBorder className="overflow-hidden p-0 sm:p-0">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr]">
            <SectionImage
              src={SECTION_IMAGES.quality.src}
              alt={SECTION_IMAGES.quality.alt}
              className="h-48 rounded-none border-0 sm:h-56 lg:h-full lg:min-h-[280px] lg:rounded-none"
              imageClassName="min-h-full"
              objectPosition="center"
            />
            <div className="flex flex-col items-center gap-8 p-6 sm:gap-10 sm:p-8 md:p-10 lg:justify-center lg:gap-12 lg:p-12">
              <div className="flex items-center gap-4 text-center lg:text-left">
                <div className="border-gold-500 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2">
                  <Crown
                    className="text-gold-600 dark:text-gold-500 h-8 w-8"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-navy-950 max-w-md text-sm font-bold tracking-wide uppercase md:text-base lg:text-lg dark:text-white">
                  {TRUST_BANNER_TITLE}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                {TRUST_SEALS.map((seal) => (
                  <TrustBadge key={seal.id} label={seal.label} />
                ))}
              </div>
            </div>
          </div>
        </GoldBorder>
      </div>
    </section>
  );
}
