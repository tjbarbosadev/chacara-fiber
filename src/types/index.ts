import type { LucideIcon } from 'lucide-react';

export interface Plan {
  id: string;
  speed: string;
  price: number;
  tagline: string;
  icon: LucideIcon;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TrustSeal {
  id: string;
  label: string;
}

export type Theme = 'light' | 'dark';
