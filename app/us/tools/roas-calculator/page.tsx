import type { Metadata } from 'next';
import ROASCalculator from './ROASCalculator';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.heritageapparels.com';

export const metadata: Metadata = {
  title: 'Free ROAS Calculator for Fashion Brands | Heritage Apparels',
  description:
    'Calculate your Return on Ad Spend for fashion brand campaigns. Free ROAS calculator for Meta Ads, Google Ads, and TikTok Ads. Benchmark against top fashion brands.',
  keywords: [
    'ROAS calculator fashion brand',
    'return on ad spend calculator',
    'fashion brand ROAS benchmark',
    'Meta Ads ROAS fashion',
    'Google Ads ROAS calculator',
    'TikTok Ads ROAS fashion brand',
    'fashion brand ad spend calculator',
  ],
  alternates: {
    canonical: `${siteUrl}/us/tools/roas-calculator`,
  },
  openGraph: {
    title: 'Free ROAS Calculator for Fashion Brands | Heritage Apparels',
    description:
      'Calculate your Return on Ad Spend and benchmark against top fashion brands. Free tool for Meta, Google, and TikTok Ads.',
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}/us/tools/roas-calculator`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free ROAS Calculator for Fashion Brands | Heritage Apparels',
    description:
      'Calculate your ROAS and benchmark against top fashion brands. Free tool for Meta, Google, and TikTok Ads.',
  },
};

export default function ROASCalculatorPage() {
  return <ROASCalculator />;
}
