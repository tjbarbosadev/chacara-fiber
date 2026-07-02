import type { TrustSeal } from '@/types';

export const TRUST_SEALS: TrustSeal[] = [
  { id: 'fiber', label: '100% FIBRA ÓPTICA' },
  { id: 'support', label: 'SUPORTE ESPECIALIZADO' },
  { id: 'stable', label: 'CONEXÃO ESTÁVEL' },
];

export const TRUST_BANNER_TITLE = 'QUALIDADE PREMIUM PARA QUEM EXIGE O MELHOR';

export const CTA_CHECKLIST = [
  'Internet ultrarrápida e estável',
  'Suporte humano e ágil',
  'Instalação rápida',
  'Planos que cabem no seu bolso',
] as const;

export const HERO = {
  headline: 'INTERNET ULTRA RÁPIDA',
  subheadline: 'PARA UMA VIDA SEM LIMITES!',
  description: 'Conexão estável, rápida e ideal para o que realmente importa:',
  highlight: 'você.',
} as const;

export const BRAND = {
  name: 'CHÁCARANET',
  suffix: 'FIBER',
  tagline: 'PROVEDOR DE INTERNET 100% FIBRA',
} as const;
