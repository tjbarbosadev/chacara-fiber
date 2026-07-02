import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TrustBadge } from '@/components/ui/TrustBadge';

describe('TrustBadge', () => {
  it('renders label', () => {
    render(<TrustBadge label="100% FIBRA ÓPTICA" />);
    expect(screen.getByText('100% FIBRA ÓPTICA')).toBeInTheDocument();
  });
});
