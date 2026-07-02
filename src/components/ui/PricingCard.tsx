import type { LucideIcon } from 'lucide-react';

interface PricingCardProps {
  speed: string;
  price: number;
  tagline: string;
  icon: LucideIcon;
  className?: string;
  variant?: 'default' | 'overlay';
}

function formatPrice(price: number) {
  const [integer, decimal] = price.toFixed(2).split('.');
  return { integer, decimal };
}

const variantClasses = {
  default:
    'bg-surface-100 dark:border-gold-500/60 dark:bg-navy-900/50 dark:border-gold-glow border-slate-200',
  overlay:
    'border-gold-500/50 bg-white/10 backdrop-blur-md dark:border-gold-500/60 dark:bg-navy-950/55',
} as const;

export function PricingCard({
  speed,
  price,
  tagline,
  icon: Icon,
  className,
  variant = 'default',
}: PricingCardProps) {
  const { integer, decimal } = formatPrice(price);
  const isOverlay = variant === 'overlay';

  return (
    <article
      className={`dark:border-gold-glow flex flex-col items-center rounded-2xl border p-6 text-center transition-shadow hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] sm:p-8 ${variantClasses[variant]} ${className ?? ''}`}
    >
      <div className="border-gold-500 mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2">
        <Icon
          className="text-gold-600 dark:text-gold-500 h-7 w-7"
          aria-hidden="true"
        />
      </div>
      <p
        className={`mb-2 text-lg font-bold ${isOverlay ? 'text-white' : 'text-navy-950 dark:text-white'}`}
      >
        {speed}
      </p>
      <div className="mb-4 flex items-baseline gap-0.5">
        <span
          className={`text-lg ${isOverlay ? 'text-white' : 'text-navy-950 dark:text-white'}`}
        >
          R$
        </span>
        <span
          className={`text-4xl font-bold lg:text-5xl 2xl:text-6xl ${isOverlay ? 'text-white' : 'text-navy-950 dark:text-white'}`}
        >
          {integer}
        </span>
        <span
          className={`text-xl font-bold lg:text-2xl ${isOverlay ? 'text-white' : 'text-navy-950 dark:text-white'}`}
        >
          ,{decimal}
        </span>
        <span
          className={`text-sm ${isOverlay ? 'text-slate-200' : 'text-navy-800 dark:text-slate-300'}`}
        >
          /mês
        </span>
      </div>
      <p className="text-gold-500 text-xs font-semibold tracking-wide uppercase md:text-sm">
        {tagline}
      </p>
    </article>
  );
}
