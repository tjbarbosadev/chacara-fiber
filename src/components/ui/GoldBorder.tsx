import type { ReactNode } from 'react';

interface GoldBorderProps {
  children: ReactNode;
  className?: string;
}

export function GoldBorder({ children, className }: GoldBorderProps) {
  return (
    <div
      className={`bg-surface-100 dark:border-gold-500/60 dark:bg-navy-900/50 dark:border-gold-glow rounded-2xl border border-slate-200 ${className ?? ''}`}
    >
      {children}
    </div>
  );
}
