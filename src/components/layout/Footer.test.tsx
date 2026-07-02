import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Footer } from '@/components/layout/Footer';
import { BRAND_LOGO } from '@/constants/images';
import { BRAND } from '@/constants/trust-seals';

describe('Footer', () => {
  it('renders brand and phone', () => {
    render(<Footer />);

    expect(screen.getByText(new RegExp(BRAND.name))).toBeInTheDocument();
    expect(screen.getByRole('img', { name: BRAND_LOGO.alt })).toHaveAttribute(
      'src',
      BRAND_LOGO.src,
    );
    expect(screen.getByText('11 91271-0373')).toBeInTheDocument();
  });
});
