import { FeatureIcon } from '@/components/ui/FeatureIcon';
import { SectionImage } from '@/components/ui/SectionImage';
import { FEATURES } from '@/constants/features';
import { SECTION_IMAGES } from '@/constants/images';
import { containerClasses, sectionClasses } from '@/constants/layout';

export function Features() {
  return (
    <section className={sectionClasses}>
      <div className={containerClasses}>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[5fr_7fr] lg:gap-10 xl:gap-12 2xl:gap-16">
          <SectionImage
            src={SECTION_IMAGES.features.src}
            alt={SECTION_IMAGES.features.alt}
            className="mx-auto max-h-64 w-full sm:max-h-80 lg:sticky lg:top-24 lg:max-h-none lg:min-h-[360px]"
            imageClassName="min-h-[16rem] lg:min-h-[360px]"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10 lg:gap-8 xl:gap-12">
            {FEATURES.map((feature) => (
              <FeatureIcon
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
