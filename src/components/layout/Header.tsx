import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { BRAND_LOGO } from '@/constants/images';
import { containerClasses } from '@/constants/layout';
import { ROUTES } from '@/constants/routes';
import { BRAND } from '@/constants/trust-seals';

const NAV_LINKS = [
  { label: 'Planos', href: '#planos' },
  { label: 'Contato', href: '#contato' },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-surface-50/95 dark:border-gold-500/20 dark:bg-navy-950/95 sticky top-0 z-50 border-b border-slate-200/80 backdrop-blur">
      <div
        className={`${containerClasses} flex items-center justify-between py-4`}
      >
        <Link to={ROUTES.HOME} className="flex items-center gap-3">
          <img
            src={BRAND_LOGO.src}
            alt={BRAND_LOGO.alt}
            className="h-10 w-10 md:h-12 md:w-12"
          />
          <div>
            <p className="text-navy-950 text-sm leading-tight font-extrabold md:text-base dark:text-white">
              {BRAND.name}{' '}
              <span className="text-gold-600 dark:text-gold-500">
                {BRAND.suffix}
              </span>
            </p>
            <p className="text-navy-800 hidden text-[10px] tracking-wide uppercase md:block dark:text-slate-300">
              {BRAND.tagline}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-navy-800 hover:text-gold-600 dark:hover:text-gold-500 text-sm font-medium transition-colors dark:text-slate-300"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <div className="hidden lg:block">
            <WhatsAppButton label="Contrate" />
          </div>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((open) => !open)}
            className="border-gold-500/60 text-gold-600 dark:text-gold-500 rounded-full border p-2"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav className="dark:border-gold-500/20 border-t border-slate-200 px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-navy-800 block text-sm font-medium dark:text-slate-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <WhatsAppButton
                label="Contrate agora"
                className="w-full justify-center"
              />
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
