import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ThemeProvider } from '@/contexts/ThemeProvider';
import { useTheme } from '@/hooks/useTheme';

function ThemeConsumer() {
  const { theme } = useTheme();
  return <span>theme:{theme}</span>;
}

describe('useTheme', () => {
  it('throws when used outside provider', () => {
    expect(() => renderHook(() => useTheme())).toThrow(
      'useTheme must be used within ThemeProvider',
    );
  });

  it('returns theme from provider', () => {
    localStorage.setItem('chacara-theme', 'dark');

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );

    expect(screen.getByText('theme:dark')).toBeInTheDocument();
  });
});
