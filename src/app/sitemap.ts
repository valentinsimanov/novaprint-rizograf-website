import type { MetadataRoute } from 'next';
import { rootSeo, rizografSeo } from '@/config/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: rootSeo.canonicalUrl,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: rizografSeo.canonicalUrl,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
