import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://socketflanges.com';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    {
      url: `${base}/blog/the-evolution-of-socket-flanges-from-design-to-application`,
      lastModified: new Date('2024-07-09'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/blog/choose-the-right-socket-flange`,
      lastModified: new Date('2024-07-09'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
