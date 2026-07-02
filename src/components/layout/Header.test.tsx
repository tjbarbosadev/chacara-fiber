import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { Header } from '@/components/layout/Header';
import { BRAND_LOGO } from '@/constants/images';
import { ThemeProvider } from '@/contexts/ThemeProvider';

function renderHeader() {
  return render(
    <MemoryRouter>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </MemoryRouter>,
  );
}

describe('Header', () => {
  it('renders brand name and navigation links', () => {
    renderHeader();

    expect(screen.getByText(/CHÁCARANET/)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: BRAND_LOGO.alt })).toHaveAttribute(
      'src',
      BRAND_LOGO.src,
    );
    expect(screen.getByRole('link', { name: /planos/i })).toHaveAttribute(
      'href',
      '#planos',
    );
    expect(screen.getByRole('link', { name: /contato/i })).toHaveAttribute(
      'href',
      '#contato',
    );
  });

  it('opens mobile menu on hamburger click', async () => {
    renderHeader();

    const menuButton = screen.getByRole('button', { name: /abrir menu/i });
    await userEvent.click(menuButton);

    expect(
      screen.getByRole('button', { name: /fechar menu/i }),
    ).toBeInTheDocument();
  });
});
