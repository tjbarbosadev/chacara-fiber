import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Pricing } from '@/components/sections/Pricing';
import { SECTION_IMAGES } from '@/constants/images';

describe('Pricing', () => {
  it('renders three plan cards', () => {
    render(<Pricing />);

    expect(screen.getByText('200 MB')).toBeInTheDocument();
    expect(screen.getByText('300 MB')).toBeInTheDocument();
    expect(screen.getByText('500 MB')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'NOSSOS PLANOS' }),
    ).toBeInTheDocument();
    expect(screen.getByText(SECTION_IMAGES.pricing.alt)).toBeInTheDocument();
  });
});
