import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.heritageapparels.com';

export const metadata: Metadata = {
  title: {
    default: 'Heritage Apparels USA | India Manufacturing · US Market Ready',
    template: '%s | Heritage Apparels USA',
  },
  description:
    'Heritage Apparels helps US brands source from India and launch on Amazon, Walmart, Etsy, Nordstrom & 30+ US marketplaces. Factory-direct pricing, US-compliant products, and full brand-building services.',
  keywords: [
    'India fashion manufacturing for US brands',
    'Amazon USA seller onboarding',
    'Walmart marketplace onboarding',
    'private label clothing India for USA',
    'US marketplace management agency',
    'fashion brand launch USA',
    'India sourcing agency for US brands',
    'Etsy brand management',
    'performance marketing agency USA fashion',
    'social media marketing fashion brand USA',
    'ecommerce brand launch Amazon USA',
    'India factory direct US brands wholesale',
    'CPSC compliant clothing manufacturer India',
  ],
  alternates: {
    canonical: `${siteUrl}/us`,
    languages: {
      'en-US': `${siteUrl}/us`,
      'en-IN': siteUrl,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}/us`,
    siteName: 'Heritage Apparels',
    title: 'Heritage Apparels USA | India Manufacturing · US Market Ready',
    description:
      'Source from India, sell in the USA. Amazon, Walmart, Etsy & 30+ US marketplaces. Factory-direct pricing, CPSC compliance, full brand-building.',
    images: [
      {
        url: `${siteUrl}/og-image-us.jpg`,
        width: 1200,
        height: 630,
        alt: 'Heritage Apparels USA — India to America Brand Building',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heritage Apparels USA | India Sourcing · US Market Launch',
    description: 'Source from India, sell in the USA. Amazon, Walmart, Etsy & 30+ US marketplaces.',
    images: [`${siteUrl}/og-image-us.jpg`],
  },
};

const usOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/us`,
  name: 'Heritage Apparels USA',
  description:
    'India-based fashion brand-building agency serving US brands. Factory-direct manufacturing, Amazon/Walmart/Etsy marketplace management, performance marketing, and US compliance.',
  url: `${siteUrl}/us`,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/og-image-us.jpg`,
  email: 'usa@heritageapparels.com',
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  sameAs: [
    'https://www.instagram.com/heritageapparels',
    'https://www.linkedin.com/company/heritageapparels',
  ],
  parentOrganization: {
    '@type': 'Organization',
    name: 'Heritage Apparels',
    url: siteUrl,
  },
};

export default function USLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(usOrganizationSchema) }}
      />
      {children}
    </>
  );
}
