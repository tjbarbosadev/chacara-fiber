interface SectionTitleProps {
  children: string;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={`text-gold-600 dark:text-gold-500 mb-12 text-center text-xl font-bold tracking-wider uppercase sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl ${className ?? ''}`}
    >
      {children}
    </h2>
  );
}
