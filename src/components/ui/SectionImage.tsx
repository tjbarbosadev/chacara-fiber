interface SectionImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  objectPosition?: string;
}

export function SectionImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  objectPosition = 'center',
}: SectionImageProps) {
  return (
    <div
      className={`dark:border-gold-500/60 relative overflow-hidden rounded-3xl border border-slate-200 ${className ?? ''}`}
    >
      <img
        src={src}
        alt={alt}
        width={1470}
        height={980}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={`h-full w-full object-cover ${imageClassName ?? ''}`}
        style={{ objectPosition }}
      />
      <div
        className="from-navy-950/50 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
