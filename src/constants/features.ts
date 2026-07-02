import { Cable, MapPin, MonitorSmartphone, Shield } from 'lucide-react';

import type { Feature } from '@/types';

export const FEATURES: Feature[] = [
  {
    id: 'fiber',
    title: '100% FIBRA ÓPTICA',
    description: 'MAIS DESEMPENHO',
    icon: Cable,
  },
  {
    id: 'stability',
    title: 'CONEXÃO ESTÁVEL',
    description: 'PARA TODA A FAMÍLIA',
    icon: Shield,
  },
  {
    id: 'devices',
    title: 'IDEAL PARA TRABALHO, ESTUDOS E ENTRETENIMENTO',
    description: '',
    icon: MonitorSmartphone,
  },
  {
    id: 'coverage',
    title: 'COBERTURA LOCAL',
    description: 'ATENDIMENTO PRÓXIMO DE VOCÊ',
    icon: MapPin,
  },
];
