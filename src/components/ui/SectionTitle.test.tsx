import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SectionTitle } from '@/components/ui/SectionTitle';

describe('SectionTitle', () => {
  it('renders title text', () => {
    render(<SectionTitle>NOSSOS PLANOS</SectionTitle>);
    expect(
      screen.getByRole('heading', { name: 'NOSSOS PLANOS' }),
    ).toBeInTheDocument();
  });
});
