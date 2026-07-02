interface TrustBadgeProps {
  label: string;
  className?: string;
}

export function TrustBadge({ label, className }: TrustBadgeProps) {
  return (
    <div
      className={`border-gold-500 text-gold-600 dark:text-gold-500 flex h-24 w-24 items-center justify-center rounded-full border-2 p-2 text-center text-[10px] leading-tight font-semibold uppercase lg:h-28 lg:w-28 lg:text-xs 2xl:h-28 2xl:w-28 ${className ?? ''}`}
    >
      {label}
    </div>
  );
}
