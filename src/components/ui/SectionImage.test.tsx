import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SectionImage } from '@/components/ui/SectionImage';

describe('SectionImage', () => {
  it('renders image with alt text', () => {
    render(
      <SectionImage
        src="/images/hero-speedtest.webp"
        alt="Teste de velocidade em smartphone"
      />,
    );

    const img = screen.getByRole('img', {
      name: 'Teste de velocidade em smartphone',
    });
    expect(img).toHaveAttribute('src', '/images/hero-speedtest.webp');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('loads eagerly when priority is set', () => {
    render(
      <SectionImage
        src="/images/hero-speedtest.webp"
        alt="Hero image"
        priority
      />,
    );

    expect(screen.getByRole('img', { name: 'Hero image' })).toHaveAttribute(
      'loading',
      'eager',
    );
  });
});
