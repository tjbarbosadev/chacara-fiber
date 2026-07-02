import { describe, expect, it } from 'vitest';

import { absoluteUrl, OG_IMAGE_URL, SEO } from '@/constants/seo';
import { SITE } from '@/constants/site';

describe('SEO constants', () => {
  it('defines required Open Graph and Twitter fields', () => {
    expect(SEO.title).toBeTruthy();
    expect(SEO.description).toBeTruthy();
    expect(SEO.og.type).toBe('website');
    expect(SEO.og.locale).toBe('pt_BR');
    expect(SEO.og.imageWidth).toBe(1200);
    expect(SEO.og.imageHeight).toBe(630);
    expect(SEO.twitter.card).toBe('summary_large_image');
  });

  it('builds absolute URLs for social crawlers', () => {
    expect(absoluteUrl('/images/og-image.jpg')).toBe(
      `${SITE.url}/images/og-image.jpg`,
    );
    expect(OG_IMAGE_URL).toBe(
      'https://chacaranetfiber.com.br/images/og-image.jpg',
    );
  });
});
