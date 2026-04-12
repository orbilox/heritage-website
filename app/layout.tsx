import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import ExitIntentPopup from '@/components/ExitIntentPopup';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.heritageapparels.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Heritage Apparels | 360° Fashion Brand Building Agency India',
    template: '%s | Heritage Apparels',
  },
  description:
    'Heritage Apparels is India\'s only end-to-end fashion brand-building agency. We own a clothing factory, source accessories, launch D2C brands, run performance marketing, produce digital catalogs, and manage marketplaces — factory to consumer.',
  keywords: [
    '360 degree fashion agency India',
    'fashion brand building agency India',
    'D2C brand launch India',
    'fashion manufacturing sourcing India',
    'performance marketing fashion brands India',
    'digital catalog services India',
    'fashion photography Mumbai',
    'Myntra Nykaa brand management',
    'factory to consumer fashion brand',
    'fashion accessories sourcing India',
    'marketplace onboarding India Myntra AJIO Flipkart',
    'social media marketing fashion brand India',
    'brand strategy fashion D2C India',
    'clothing factory India private label',
  ],
  authors: [{ name: 'Heritage Apparels', url: siteUrl }],
  creator: 'Heritage Apparels',
  publisher: 'Heritage Apparels',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Heritage Apparels',
    title: 'Heritage Apparels | 360° Fashion Brand Building Agency India',
    description:
      'India\'s only end-to-end fashion brand-building agency. Own factory, D2C brand launches, performance marketing, digital catalogs, and marketplace management — factory to consumer.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Heritage Apparels - Fashion Brand Building Agency India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heritage Apparels | 360° Fashion Brand Building Agency India',
    description: 'India\'s only factory-to-consumer fashion brand agency. Manufacturing, brand launch, performance marketing & more.',
    images: [`${siteUrl}/og-image.jpg`],
    creator: '@heritageapparels',
  },
  verification: {
    google: 'google-site-verification-token',
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-IN': siteUrl,
      'en-US': `${siteUrl}/us`,
    },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': siteUrl,
  name: 'Heritage Apparels',
  description:
    'India\'s only end-to-end fashion brand-building agency. Own clothing factory, accessories sourcing, D2C brand launches, performance marketing, digital cataloging, and marketplace management.',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/og-image.jpg`,
  telephone: '+91-98765-43210',
  email: 'hello@heritageapparels.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Studio 12, Creative Hub, Andheri West',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400053',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.1136,
    longitude: 72.8697,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/heritageapparels',
    'https://www.linkedin.com/company/heritageapparels',
    'https://www.facebook.com/heritageapparels',
  ],
  founder: {
    '@type': 'Person',
    name: 'Rajiv Kumar',
    jobTitle: 'Founder & CEO',
    worksFor: { '@type': 'Organization', name: 'Heritage Apparels' },
  },
  priceRange: '₹₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer, UPI',
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                window.addEventListener('scroll', function() {
                  var header = document.getElementById('site-header');
                  if (header) {
                    if (window.scrollY > 80) {
                      header.classList.add('scrolled');
                    } else {
                      header.classList.remove('scrolled');
                    }
                  }
                });
              })();
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#c9a84c" />
      </head>
      <body className="bg-charcoal text-cream font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
