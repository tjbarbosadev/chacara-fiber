import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useScrollTo } from '@/hooks/useScrollTo';

describe('useScrollTo', () => {
  it('scrolls to element by id', () => {
    const element = document.createElement('div');
    element.id = 'planos';
    element.scrollIntoView = vi.fn();
    document.body.appendChild(element);

    const { result } = renderHook(() => useScrollTo());
    result.current('planos');

    expect(element.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

    document.body.removeChild(element);
  });
});
