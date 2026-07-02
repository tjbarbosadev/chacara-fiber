import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ThemeProvider } from '@/contexts/ThemeProvider';

describe('ThemeProvider', () => {
  it('applies dark class when theme is dark', () => {
    localStorage.setItem('chacara-theme', 'dark');

    render(
      <ThemeProvider>
        <div>child</div>
      </ThemeProvider>,
    );

    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('applies light class when theme is light', () => {
    localStorage.setItem('chacara-theme', 'light');

    render(
      <ThemeProvider>
        <div>child</div>
      </ThemeProvider>,
    );

    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
