import { MetadataRoute } from 'next';
import { indiaMarketplaces } from '@/lib/india-marketplace-data';
import { usMarketplaces } from '@/lib/us-marketplace-data';
import { indiaCities } from '@/lib/india-cities-data';
import { usCities } from '@/lib/us-cities-data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.heritageapparels.com';

const indiaServiceSlugs = [
  'manufacturing-sourcing',
  'brand-launch',
  'performance-marketing',
  'fashion-photoshoot',
  'digital-cataloging',
  'brand-strategy',
  'social-media-reels',
  'ecommerce-content',
  'marketplace-onboarding',
];

const usServiceSlugs = [
  'manufacturing-sourcing',
  'brand-launch',
  'performance-marketing',
  'fashion-photoshoot',
  'digital-cataloging',
  'brand-strategy',
  'social-media-reels',
  'marketplace-onboarding',
  'compliance',
];

const indiaBlogSlugs = [
  'myntra-seller-onboarding-guide-2025',
  'd2c-fashion-brand-launch-cost-india',
  'myntra-vs-ajio-fashion-brands-india',
  'meta-ads-fashion-brand-india-guide',
  'private-label-clothing-manufacturing-india',
  'nykaa-fashion-brand-onboarding-guide',
  'fashion-photography-trends-d2c-2025',
  'complete-guide-digital-cataloging-fashion-ecommerce',
  'how-to-brief-fashion-photographer-d2c-brand-checklist',
  'instagram-reels-fashion-brands-2025',
  'roi-professional-fashion-photography-data',
  'building-d2c-fashion-brand-visual-identity',
];

const usBlogSlugs = [
  'source-fashion-india-us-market-2025',
  'amazon-vs-walmart-marketplace-us-brands',
  'tiktok-shop-vs-instagram-shopping-fashion',
  'cpsc-compliance-apparel-india-import-checklist',
  'amazon-product-photography-us-fashion-2025',
  'private-label-fashion-amazon-usa-india',
  'meta-ads-vs-google-shopping-fashion-usa-2025',
  'etsy-vs-shopify-handmade-fashion-us',
  'india-to-usa-import-shipping-fashion-2025',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // India pages
  const indiaCore: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteUrl}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/portfolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
  ];

  const indiaServices: MetadataRoute.Sitemap = indiaServiceSlugs.map((slug) => ({
    url: `${siteUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const indiaBlog: MetadataRoute.Sitemap = indiaBlogSlugs.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const usBlog: MetadataRoute.Sitemap = usBlogSlugs.map((slug) => ({
    url: `${siteUrl}/us/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // USA pages
  const usCore: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/us`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${siteUrl}/us/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/us/portfolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/us/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/us/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/us/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
  ];

  const usServices: MetadataRoute.Sitemap = usServiceSlugs.map((slug) => ({
    url: `${siteUrl}/us/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const indiaMarketplacePages: MetadataRoute.Sitemap = indiaMarketplaces.map((m) => ({
    url: `${siteUrl}/services/marketplace/${m.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const usMarketplacePages: MetadataRoute.Sitemap = usMarketplaces.map((m) => ({
    url: `${siteUrl}/us/services/marketplace/${m.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const indiaCityPages: MetadataRoute.Sitemap = indiaCities.map((c) => ({
    url: `${siteUrl}/cities/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const usCityPages: MetadataRoute.Sitemap = usCities.map((c) => ({
    url: `${siteUrl}/us/cities/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [
    ...indiaCore,
    ...indiaServices,
    ...indiaBlog,
    ...indiaMarketplacePages,
    ...indiaCityPages,
    ...usCore,
    ...usServices,
    ...usBlog,
    ...usMarketplacePages,
    ...usCityPages,
  ];
}
