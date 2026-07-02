import { Check, Phone } from 'lucide-react';

import { GoldBorder } from '@/components/ui/GoldBorder';
import { SectionImage } from '@/components/ui/SectionImage';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { CONTACT } from '@/constants/contact';
import { SECTION_IMAGES } from '@/constants/images';
import { containerClasses, sectionClasses } from '@/constants/layout';
import { CTA_CHECKLIST } from '@/constants/trust-seals';

export function ContactCTA() {
  return (
    <section id="contato" className={sectionClasses}>
      <div className={containerClasses}>
        <GoldBorder className="mx-auto max-w-5xl overflow-hidden p-0 sm:p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col gap-8 p-6 sm:p-8 md:p-10 lg:justify-center lg:p-12 xl:p-14">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="border-gold-500 mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2">
                  <Phone
                    className="text-gold-600 dark:text-gold-500 h-7 w-7"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="text-navy-950 text-2xl font-extrabold uppercase md:text-3xl lg:text-4xl dark:text-white">
                  CONTRATE AGORA!
                </h2>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  data-track="phone-cta"
                  className="text-gold-600 hover:text-gold-500 dark:text-gold-500 mt-4 text-2xl font-bold md:text-3xl xl:text-4xl"
                >
                  {CONTACT.phone}
                </a>
                <div className="mt-6">
                  <WhatsAppButton />
                </div>
              </div>

              <ul className="flex flex-col gap-4">
                {CTA_CHECKLIST.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="text-gold-600 dark:text-gold-500 mt-0.5 h-5 w-5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-navy-800 text-sm md:text-base dark:text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <SectionImage
              src={SECTION_IMAGES.contact.src}
              alt={SECTION_IMAGES.contact.alt}
              className="h-56 rounded-none border-0 lg:h-full lg:min-h-[320px] lg:rounded-none"
              imageClassName="min-h-[14rem] lg:min-h-[320px]"
            />
          </div>
        </GoldBorder>
      </div>
    </section>
  );
}
