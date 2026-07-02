import { describe, expect, it } from 'vitest';

import { PLANS } from '@/constants/plans';

describe('PLANS', () => {
  it('has three plans with correct prices', () => {
    expect(PLANS).toHaveLength(3);
    expect(PLANS[0].price).toBe(69.99);
    expect(PLANS[1].price).toBe(79.99);
    expect(PLANS[2].price).toBe(99.99);
  });
});
