import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { ThemeProvider } from '@/contexts/ThemeProvider';

describe('ThemeToggle', () => {
  it('toggles theme on click', async () => {
    document.documentElement.classList.add('dark');

    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    );

    const button = screen.getByRole('button', { name: /tema claro/i });
    await userEvent.click(button);

    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
