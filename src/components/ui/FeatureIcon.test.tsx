import { render, screen } from '@testing-library/react';
import { Shield } from 'lucide-react';
import { describe, expect, it } from 'vitest';

import { FeatureIcon } from '@/components/ui/FeatureIcon';

describe('FeatureIcon', () => {
  it('renders title and description', () => {
    render(
      <FeatureIcon
        icon={Shield}
        title="CONEXÃO ESTÁVEL"
        description="PARA TODA A FAMÍLIA"
      />,
    );

    expect(screen.getByText('CONEXÃO ESTÁVEL')).toBeInTheDocument();
    expect(screen.getByText('PARA TODA A FAMÍLIA')).toBeInTheDocument();
  });
});
