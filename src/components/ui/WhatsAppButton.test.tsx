import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { CONTACT } from '@/constants/contact';

describe('WhatsAppButton', () => {
  it('links to whatsapp with correct href', () => {
    render(<WhatsAppButton />);
    const link = screen.getByRole('link', { name: /whatsapp/i });
    expect(link).toHaveAttribute(
      'href',
      expect.stringContaining(CONTACT.whatsappUrl),
    );
  });
});
