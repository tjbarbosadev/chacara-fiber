import type { LucideIcon } from 'lucide-react';

interface FeatureIconProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureIcon({
  icon: Icon,
  title,
  description,
  className,
}: FeatureIconProps) {
  return (
    <div
      className={`flex flex-col items-center text-center ${className ?? ''}`}
    >
      <div className="border-gold-500 mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 lg:h-20 lg:w-20">
        <Icon
          className="text-gold-600 dark:text-gold-500 h-7 w-7"
          aria-hidden="true"
        />
      </div>
      <h3 className="text-navy-950 mb-2 text-sm font-bold uppercase md:text-base dark:text-white">
        {title}
      </h3>
      {description ? (
        <p className="text-navy-800 text-xs tracking-wide uppercase md:text-sm dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}
