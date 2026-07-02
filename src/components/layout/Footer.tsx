import { MessageCircle } from 'lucide-react';

import { CONTACT, getWhatsAppLink } from '@/constants/contact';
import { BRAND_LOGO } from '@/constants/images';
import { containerClasses } from '@/constants/layout';
import { BRAND } from '@/constants/trust-seals';

export function Footer() {
  return (
    <footer className="bg-surface-100 dark:border-gold-500/20 dark:bg-navy-900 border-t border-slate-200 py-8">
      <div
        className={`${containerClasses} flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left`}
      >
        <div className="flex items-center gap-3">
          <img
            src={BRAND_LOGO.src}
            alt={BRAND_LOGO.alt}
            className="h-10 w-10"
          />
          <div>
            <p className="text-navy-950 text-sm font-bold dark:text-white">
              {BRAND.name}{' '}
              <span className="text-gold-600 dark:text-gold-500">
                {BRAND.suffix}
              </span>
            </p>
            <p className="text-navy-800 text-xs dark:text-slate-300">
              {BRAND.tagline}
            </p>
          </div>
        </div>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold-600 hover:text-gold-500 dark:text-gold-500 inline-flex items-center gap-2 text-sm"
        >
          <MessageCircle className="h-4 w-4" />
          {CONTACT.phone}
        </a>
        <p className="text-navy-800 text-xs dark:text-slate-300">
          © {new Date().getFullYear()} Chácaranet Fiber. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
