import { SITE } from '@/constants/site';

export const SEO = {
  title: 'Chácaranet Fiber — Internet 100% Fibra Óptica',
  description:
    'Internet ultrarrápida 100% fibra óptica. Planos a partir de R$ 69,99/mês. Suporte humano e instalação rápida.',
  og: {
    title: 'Chácaranet Fiber — Internet Ultra Rápida',
    description:
      'Conexão estável e rápida para toda a família. Planos a partir de R$ 69,99/mês. Contrate agora!',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Chácaranet Fiber',
    imagePath: '/images/og-image.jpg',
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt:
      'Smartphone exibindo teste de velocidade de internet Chácaranet Fiber',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chácaranet Fiber — Internet Ultra Rápida',
    description:
      'Conexão estável e rápida para toda a família. Planos a partir de R$ 69,99/mês.',
    imageAlt:
      'Smartphone exibindo teste de velocidade de internet Chácaranet Fiber',
  },
  robots: 'index, follow',
  author: 'Chácaranet Fiber',
} as const;

export function absoluteUrl(path: string) {
  return `${SITE.url}${path}`;
}

export const OG_IMAGE_URL = absoluteUrl(SEO.og.imagePath);
