import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

describe('WhatsAppButton outline variant', () => {
  it('renders outline variant', () => {
    render(<WhatsAppButton variant="outline" label="WhatsApp" />);
    expect(screen.getByRole('link', { name: /whatsapp/i })).toBeInTheDocument();
  });
});
