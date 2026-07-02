import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { GoldBorder } from '@/components/ui/GoldBorder';

describe('GoldBorder', () => {
  it('renders children', () => {
    render(<GoldBorder>Content</GoldBorder>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
