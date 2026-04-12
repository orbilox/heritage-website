import Link from 'next/link';
import { Metadata } from 'next';
import { indiaCities } from '@/lib/india-cities-data';
import { usCities } from '@/lib/us-cities-data';
import { indiaMarketplaces } from '@/lib/india-marketplace-data';
import { usMarketplaces } from '@/lib/us-marketplace-data';

export const metadata: Metadata = {
  title: 'Sitemap — Heritage Apparels',
  description: 'Complete HTML sitemap of Heritage Apparels — India & USA fashion brand building agency. Browse all pages, services, blog posts, city pages, and marketplace guides.',
  alternates: { canonical: 'https://www.heritageapparels.com/sitemap-html' },
};

const indiaServices = [
  { name: 'Manufacturing & Sourcing',  href: '/services/manufacturing-sourcing' },
  { name: 'D2C Brand Launch',          href: '/services/brand-launch' },
  { name: 'Performance Marketing',     href: '/services/performance-marketing' },
  { name: 'Brand Strategy & Identity', href: '/services/brand-strategy' },
  { name: 'Fashion Photoshoot',        href: '/services/fashion-photoshoot' },
  { name: 'Digital Cataloging',        href: '/services/digital-cataloging' },
  { name: 'E-commerce Setup & Growth', href: '/services/ecommerce-content' },
  { name: 'Social Media & Reels',      href: '/services/social-media-reels' },
  { name: 'Marketplace Onboarding',    href: '/services/marketplace-onboarding' },
];

const usServices = [
  { name: 'Manufacturing & Sourcing',  href: '/us/services/manufacturing-sourcing' },
  { name: 'US Brand Launch',           href: '/us/services/brand-launch' },
  { name: 'Performance Marketing',     href: '/us/services/performance-marketing' },
  { name: 'Brand Strategy & Identity', href: '/us/services/brand-strategy' },
  { name: 'Product Photography',       href: '/us/services/fashion-photoshoot' },
  { name: 'Digital Cataloging',        href: '/us/services/digital-cataloging' },
  { name: 'Social Media & Content',    href: '/us/services/social-media-reels' },
  { name: 'Marketplace Onboarding',    href: '/us/services/marketplace-onboarding' },
  { name: 'US Compliance & Import',    href: '/us/services/compliance' },
];

const indiaBlogPosts = [
  { name: 'Myntra Seller Onboarding Guide 2025',              href: '/blog/myntra-seller-onboarding-guide-2025' },
  { name: 'D2C Fashion Brand Launch Cost in India',           href: '/blog/d2c-fashion-brand-launch-cost-india' },
  { name: 'Myntra vs Ajio for Fashion Brands',                href: '/blog/myntra-vs-ajio-fashion-brands-india' },
  { name: 'Meta Ads for Fashion Brand India',                  href: '/blog/meta-ads-fashion-brand-india-guide' },
  { name: 'Private Label Clothing Manufacturing India',       href: '/blog/private-label-clothing-manufacturing-india' },
  { name: 'Nykaa Fashion Brand Onboarding Guide',             href: '/blog/nykaa-fashion-brand-onboarding-guide' },
  { name: 'Fashion Photography Trends for D2C 2025',          href: '/blog/fashion-photography-trends-d2c-2025' },
  { name: 'Complete Guide to Digital Cataloging',             href: '/blog/complete-guide-digital-cataloging-fashion-ecommerce' },
  { name: 'How to Brief a Fashion Photographer',              href: '/blog/how-to-brief-fashion-photographer-d2c-brand-checklist' },
  { name: 'Instagram Reels for Fashion Brands 2025',          href: '/blog/instagram-reels-fashion-brands-2025' },
  { name: 'ROI of Professional Fashion Photography',          href: '/blog/roi-professional-fashion-photography-data' },
  { name: 'Building D2C Fashion Brand Visual Identity',       href: '/blog/building-d2c-fashion-brand-visual-identity' },
];

const usBlogPosts = [
  { name: 'Source Fashion from India for US Market 2025',     href: '/us/blog/source-fashion-india-us-market-2025' },
  { name: 'Amazon vs Walmart Marketplace for US Brands',      href: '/us/blog/amazon-vs-walmart-marketplace-us-brands' },
  { name: 'TikTok Shop vs Instagram Shopping Fashion',        href: '/us/blog/tiktok-shop-vs-instagram-shopping-fashion' },
  { name: 'CPSC Compliance for Apparel Import Checklist',     href: '/us/blog/cpsc-compliance-apparel-india-import-checklist' },
  { name: 'Amazon Product Photography US Fashion 2025',       href: '/us/blog/amazon-product-photography-us-fashion-2025' },
  { name: 'Private Label Fashion on Amazon USA via India',    href: '/us/blog/private-label-fashion-amazon-usa-india' },
  { name: 'Meta Ads vs Google Shopping Fashion USA 2025',     href: '/us/blog/meta-ads-vs-google-shopping-fashion-usa-2025' },
  { name: 'Etsy vs Shopify for Handmade Fashion US',          href: '/us/blog/etsy-vs-shopify-handmade-fashion-us' },
  { name: 'India to USA Import & Shipping Fashion 2025',      href: '/us/blog/india-to-usa-import-shipping-fashion-2025' },
];

function SitemapSection({ title, icon, links }: { title: string; icon: string; links: { name: string; href: string }[] }) {
  return (
    <div className="mb-10">
      <h2 className="flex items-center gap-3 text-xl font-serif font-bold text-cream mb-5 pb-3 border-b border-gold/20">
        <span className="text-2xl">{icon}</span>
        {title}
        <span className="ml-auto text-xs font-sans font-normal text-cream/30 bg-gold/10 px-2 py-1 rounded-full">
          {links.length} pages
        </span>
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group flex items-center gap-2.5 px-4 py-3 rounded-lg border border-gold/10 hover:border-gold/40 hover:bg-gold/5 transition-all text-sm text-cream/70 hover:text-gold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold flex-shrink-0 transition-colors" />
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SitemapPage() {
  const indiaCityLinks = indiaCities.map((c) => ({ name: `${c.name}, ${c.state}`, href: `/cities/${c.slug}` }));
  const usCityLinks    = usCities.map((c)    => ({ name: c.name, href: `/us/cities/${c.slug}` }));
  const indiaMarketplaceLinks = indiaMarketplaces.map((m) => ({ name: m.name, href: `/services/marketplace/${m.slug}` }));
  const usMarketplaceLinks    = usMarketplaces.map((m)    => ({ name: m.name, href: `/us/services/marketplace/${m.slug}` }));

  const totalPages =
    6 + 6 + // India + US core
    indiaServices.length + usServices.length +
    indiaBlogPosts.length + usBlogPosts.length +
    indiaCityLinks.length + usCityLinks.length +
    indiaMarketplaceLinks.length + usMarketplaceLinks.length;

  return (
    <main className="min-h-screen bg-charcoal pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 text-gold text-xs font-medium uppercase tracking-widest mb-5">
            Site Navigation
          </span>
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-cream mb-4">
            Complete Sitemap
          </h1>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            Every page on Heritage Apparels — India & USA fashion brand building agency.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-5 py-2 text-gold text-sm font-medium">
            {totalPages}+ pages indexed
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">

          {/* ── INDIA COLUMN ── */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-gold/30">
              <span className="text-3xl">🇮🇳</span>
              <div>
                <h2 className="font-serif font-bold text-cream text-2xl">India</h2>
                <p className="text-cream/40 text-xs">heritageapparels.com</p>
              </div>
            </div>

            <SitemapSection
              title="Core Pages"
              icon="🏠"
              links={[
                { name: 'Home',      href: '/' },
                { name: 'About Us',  href: '/about' },
                { name: 'Services',  href: '/services' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Pricing',   href: '/pricing' },
                { name: 'Blog',      href: '/blog' },
                { name: 'Contact',   href: '/contact' },
              ]}
            />

            <SitemapSection title="Services" icon="⚙️" links={indiaServices} />
            <SitemapSection title="Blog Posts" icon="✍️" links={indiaBlogPosts} />
            <SitemapSection title="Marketplace Guides" icon="🛍️" links={indiaMarketplaceLinks} />
            <SitemapSection title="City Pages" icon="📍" links={indiaCityLinks} />
          </div>

          {/* ── USA COLUMN ── */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-blue-400/40">
              <span className="text-3xl">🇺🇸</span>
              <div>
                <h2 className="font-serif font-bold text-cream text-2xl">United States</h2>
                <p className="text-cream/40 text-xs">heritageapparels.com/us</p>
              </div>
            </div>

            <SitemapSection
              title="Core Pages"
              icon="🏠"
              links={[
                { name: 'US Home',      href: '/us' },
                { name: 'US Services',  href: '/us/services' },
                { name: 'US Portfolio', href: '/us/portfolio' },
                { name: 'US Pricing',   href: '/us/pricing' },
                { name: 'US Blog',      href: '/us/blog' },
                { name: 'US Contact',   href: '/us/contact' },
              ]}
            />

            <SitemapSection title="US Services" icon="⚙️" links={usServices} />
            <SitemapSection title="US Blog Posts" icon="✍️" links={usBlogPosts} />
            <SitemapSection title="US Marketplace Guides" icon="🛍️" links={usMarketplaceLinks} />
            <SitemapSection title="US City Pages" icon="📍" links={usCityLinks} />
          </div>
        </div>

        {/* Bottom utility links */}
        <div className="mt-14 pt-10 border-t border-gold/10">
          <h2 className="font-serif font-bold text-cream text-xl mb-5">Technical & Legal</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'XML Sitemap',  href: '/sitemap.xml' },
              { name: 'robots.txt',   href: '/robots.txt' },
              { name: 'llms.txt',     href: '/llms.txt' },
              { name: 'Privacy Policy', href: '/privacy' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cream/50 hover:text-gold text-sm border border-gold/15 hover:border-gold/40 px-4 py-2 rounded-full transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
