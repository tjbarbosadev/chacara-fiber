import { render, screen } from '@testing-library/react';
import { Gauge } from 'lucide-react';
import { describe, expect, it } from 'vitest';

import { PricingCard } from '@/components/ui/PricingCard';

describe('PricingCard', () => {
  it('renders speed and price', () => {
    render(
      <PricingCard
        speed="200 MB"
        price={69.99}
        tagline="VELOCIDADE DE VERDADE"
        icon={Gauge}
      />,
    );

    expect(screen.getByText('200 MB')).toBeInTheDocument();
    expect(screen.getByText('69')).toBeInTheDocument();
    expect(screen.getByText('VELOCIDADE DE VERDADE')).toBeInTheDocument();
  });
});
