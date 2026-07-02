import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { RootLayout } from '@/components/layout/RootLayout';
import { ThemeProvider } from '@/contexts/ThemeProvider';

describe('RootLayout', () => {
  it('renders header, outlet content and footer', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider>
          <Routes>
            <Route element={<RootLayout />}>
              <Route index element={<div>Page content</div>} />
            </Route>
          </Routes>
        </ThemeProvider>
      </MemoryRouter>,
    );

    expect(screen.getAllByText(/CHÁCARANET/).length).toBeGreaterThan(0);
    expect(screen.getByText('Page content')).toBeInTheDocument();
    expect(
      screen.getByText(/Todos os direitos reservados/),
    ).toBeInTheDocument();
  });
});
