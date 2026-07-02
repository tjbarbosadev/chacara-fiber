import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { HERO } from '@/constants/trust-seals';
import { HomePage } from '@/pages/HomePage';

describe('HomePage', () => {
  it('renders all main sections', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(screen.getByText(HERO.headline)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'NOSSOS PLANOS' }),
    ).toBeInTheDocument();
    expect(screen.getAllByText('100% FIBRA ÓPTICA').length).toBeGreaterThan(0);
    expect(
      screen.getByText('QUALIDADE PREMIUM PARA QUEM EXIGE O MELHOR'),
    ).toBeInTheDocument();
    expect(screen.getByText('CONTRATE AGORA!')).toBeInTheDocument();
  });
});
