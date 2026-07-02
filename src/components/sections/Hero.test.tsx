import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Hero } from '@/components/sections/Hero';
import { SECTION_IMAGES } from '@/constants/images';
import { HERO } from '@/constants/trust-seals';

describe('Hero', () => {
  it('renders headline and CTA', () => {
    render(<Hero />);

    expect(screen.getByText(HERO.headline)).toBeInTheDocument();
    expect(screen.getByText(HERO.subheadline)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /whatsapp/i })).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: SECTION_IMAGES.hero.alt }),
    ).toHaveAttribute('src', SECTION_IMAGES.hero.src);
  });
});
