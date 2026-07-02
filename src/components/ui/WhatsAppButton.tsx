import { MessageCircle } from 'lucide-react';

import { getWhatsAppLink } from '@/constants/contact';

interface WhatsAppButtonProps {
  variant?: 'primary' | 'outline';
  className?: string;
  label?: string;
}

export function WhatsAppButton({
  variant = 'primary',
  className,
  label = 'Fale no WhatsApp',
}: WhatsAppButtonProps) {
  const baseClasses =
    'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors md:text-base';

  const variantClasses =
    variant === 'primary'
      ? 'bg-gold-500 text-navy-950 hover:bg-gold-400'
      : 'border border-gold-500/60 text-gold-600 hover:bg-gold-500/10 dark:text-gold-500';

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      data-track="whatsapp-cta"
      className={`${baseClasses} ${variantClasses} ${className ?? ''}`}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      {label}
    </a>
  );
}
