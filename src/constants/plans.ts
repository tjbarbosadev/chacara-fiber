import { Gauge, Headphones, Wifi } from 'lucide-react';

import type { Plan } from '@/types';

export const PLANS: Plan[] = [
  {
    id: 'plan-200',
    speed: '200 MB',
    price: 69.99,
    tagline: 'VELOCIDADE DE VERDADE',
    icon: Gauge,
  },
  {
    id: 'plan-300',
    speed: '300 MB',
    price: 79.99,
    tagline: 'ESTABILIDADE QUE VOCÊ CONFIA',
    icon: Wifi,
  },
  {
    id: 'plan-500',
    speed: '500 MB',
    price: 99.99,
    tagline: 'SUPORTE HUMANO E ÁGIL',
    icon: Headphones,
  },
];
