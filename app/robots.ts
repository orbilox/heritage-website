import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.heritageapparels.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all legitimate search engines
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/leads-dashboard/',
          '/_next/',
          '/static/',
          '*.json$',
        ],
      },
      // Google — full access
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/leads-dashboard/'],
      },
      // Bing — full access
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/leads-dashboard/'],
      },
      // Block AI training scrapers
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: ['/'],
      },
      {
        userAgent: 'CCBot',
        disallow: ['/'],
      },
      {
        userAgent: 'anthropic-ai',
        disallow: ['/'],
      },
      {
        userAgent: 'Claude-Web',
        disallow: ['/'],
      },
      {
        userAgent: 'Omgilibot',
        disallow: ['/'],
      },
      {
        userAgent: 'FacebookBot',
        disallow: ['/'],
      },
      {
        userAgent: 'Amazonbot',
        disallow: ['/'],
      },
      {
        userAgent: 'Bytespider',
        disallow: ['/'],
      },
      {
        userAgent: 'PetalBot',
        disallow: ['/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
