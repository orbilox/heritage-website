import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'US Fashion Brand Services | Heritage Apparels USA',
  description:
    'End-to-end fashion brand services for US entrepreneurs — India sourcing, US marketplace onboarding, brand launch, performance marketing, product photography, digital cataloging, and social media. USD pricing.',
};

const services = [
  {
    icon: '🏭',
    title: 'India Manufacturing & Sourcing',
    description:
      'Source apparel, accessories, footwear, jewellery, and lifestyle products from our own factory and vetted Indian suppliers — at 35–60% lower cost than US manufacturing. Private label, OEM, and custom designs all available.',
    href: '/us/services/manufacturing-sourcing',
    highlights: [
      'Own clothing manufacturing unit in India',
      'Accessories, jewellery & footwear network',
      'Private label & custom design (OEM)',
      'Low MOQs — start from 50 units',
      'US-compliant labeling & export docs',
      'CPSC & ASTM standards met',
    ],
    startingAt: '$2,500',
    turnaround: '21–35 days sampling',
    badge: '35–60% Cost Saving',
  },
  {
    icon: '🛒',
    title: 'US Marketplace Onboarding',
    description:
      'We onboard your brand on Amazon.com, Walmart Marketplace, Etsy, Nordstrom, Target+, eBay, Sephora, Ulta, TikTok Shop, and 25+ more US platforms — fully compliant listings, A+ content, and launch-ready.',
    href: '/us/services/marketplace-onboarding',
    highlights: [
      'Amazon.com Brand Registry & A+ Content',
      'Walmart Marketplace seller setup',
      'Etsy shop setup & SEO optimization',
      'Nordstrom & Target+ vendor onboarding',
      'TikTok Shop & Poshmark setup',
      '35+ US platforms covered',
    ],
    startingAt: '$1,500',
    turnaround: 'Live in 10 days',
    badge: '35+ Platforms',
  },
  {
    icon: '🚀',
    title: 'US Brand Launch',
    description:
      'Complete brand building for the American market — from product concept and US-market research to brand naming, identity, D2C Shopify store, marketplace onboarding, and launch campaign. Idea to first US sale in 45 days.',
    href: '/us/services/brand-launch',
    highlights: [
      'US market research & positioning',
      'Brand name, logo & full identity',
      'Packaging designed for US retail',
      'Shopify US store setup',
      'Amazon + Walmart + Etsy onboarding',
      'Meta & Google launch campaign',
    ],
    startingAt: '$8,500',
    turnaround: '30–45 days',
    badge: 'Most Popular',
  },
  {
    icon: '📈',
    title: 'US Performance Marketing',
    description:
      'Profitable paid campaigns on Meta (Instagram/Facebook), Google Shopping, TikTok Ads, and Amazon DSP — targeting American consumers. We write briefs, produce creatives, run and optimize weekly for 4–8x ROAS.',
    href: '/us/services/performance-marketing',
    highlights: [
      'Meta Ads (Instagram + Facebook USA)',
      'Google Shopping & Search Ads',
      'TikTok Ads for US audiences',
      'Amazon Sponsored Products & DSP',
      'Creative production included',
      'Weekly ROAS reporting',
    ],
    startingAt: '$2,000/month',
    turnaround: 'Live in 7 days',
    badge: '4–8x ROAS',
  },
  {
    icon: '📸',
    title: 'US-Format Product Photography',
    description:
      'Amazon-compliant and Walmart-ready product photography — pure white backgrounds, multiple angles, lifestyle shots, and infographic images tailored to convert American buyers. Shot in our studio with US marketplace specs.',
    href: '/us/services/fashion-photoshoot',
    highlights: [
      'Amazon main image standards (pure white)',
      'Walmart & Etsy photography guidelines',
      'Lifestyle shots for US audience',
      'Infographic & feature-call-out images',
      'Model shots — US sizing standards',
      '48-hour delivery',
    ],
    startingAt: '$3 per SKU',
    turnaround: '24–48 hours',
    badge: null,
  },
  {
    icon: '📂',
    title: 'US Digital Cataloging',
    description:
      'High-volume catalog photography — up to 300 SKUs per day — formatted for Amazon, Walmart, Etsy, and Shopify. Includes image editing, background removal, color correction, and all platform-specific sizing.',
    href: '/us/services/digital-cataloging',
    highlights: [
      'Up to 300 SKUs per shoot day',
      'Amazon, Walmart & Etsy formats',
      'White, lifestyle & flat-lay options',
      'Multiple angles per product',
      'Background removal & color correction',
      'Platform-specific image sizing',
    ],
    startingAt: '$3/SKU',
    turnaround: '24–48 hours',
    badge: null,
  },
  {
    icon: '🎯',
    title: 'US Brand Strategy & Identity',
    description:
      'A complete visual identity system built for American consumer appeal. Logo, color palette, typography, US retail packaging, photography direction, and full brand guidelines designed to command premium US pricing.',
    href: '/us/services/brand-strategy',
    highlights: [
      'US market positioning workshop',
      'Visual identity system (logo, palette, type)',
      'US retail packaging design',
      'Amazon brand store design',
      'Photography style guide',
      'Complete brand guidelines document',
    ],
    startingAt: '$3,500',
    turnaround: '2–3 weeks',
    badge: null,
  },
  {
    icon: '🎬',
    title: 'US Social Media & Content',
    description:
      'Short-form video and social media content engineered for organic growth on Instagram, TikTok, and YouTube — targeting US audiences. Monthly retainers with dedicated content calendars, filming, editing, and community management.',
    href: '/us/services/social-media-reels',
    highlights: [
      'Instagram Reels & TikTok videos',
      'YouTube Shorts for US audience',
      'Monthly US-focused content calendar',
      'UGC-style & studio content',
      'Influencer coordination (US creators)',
      'Community management included',
    ],
    startingAt: '$1,500/month',
    turnaround: '3–5 days per video',
    badge: null,
  },
  {
    icon: '🛃',
    title: 'US Compliance & Import Support',
    description:
      'We ensure your India-manufactured products meet all US federal and state requirements — CPSC, FCC, FDA, ASTM, California Prop 65 — with proper labeling, customs paperwork, and import documentation.',
    href: '/us/services/compliance',
    highlights: [
      'CPSC safety compliance review',
      'FDA & ASTM standards for apparel',
      'California Prop 65 compliance',
      'HS code classification & customs docs',
      'Country-of-origin labeling',
      'Import duty estimation',
    ],
    startingAt: '$500',
    turnaround: '5–7 days',
    badge: 'USA Compliant',
  },
];

export default function USServicesPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="py-24 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">🇺🇸 US Market Services</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Everything to Build &amp; Sell
            <br />
            <span className="gradient-text italic">Your Brand in the USA</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed">
            From India manufacturing and US compliance to marketplace onboarding, brand identity, performance marketing, and social media — we handle every step of bringing your brand to the American market.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold">Get a Free US Market Plan →</Link>
            <Link href="/us/services/marketplace-onboarding" className="btn-outline">See US Marketplaces</Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 bg-charcoal border-y border-gold/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: '35+', label: 'US Platforms', sub: 'we onboard & manage' },
              { value: '$2,500', label: 'Starts From', sub: 'India manufacturing' },
              { value: '45 Days', label: 'To First Sale', sub: 'idea to US marketplace' },
              { value: '4–8x', label: 'ROAS Delivered', sub: 'on US paid campaigns' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-2xl font-bold gradient-text mb-0.5">{s.value}</div>
                <div className="text-cream text-sm font-medium">{s.label}</div>
                <div className="text-cream/40 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service) => (
              <div key={service.title} className="glass-card p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                {service.badge && (
                  <span className="absolute top-6 right-6 px-3 py-1 bg-gold text-charcoal text-xs font-bold rounded-full">
                    {service.badge}
                  </span>
                )}
                <div className="lg:col-span-1">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="font-serif text-2xl font-bold text-cream mb-2">{service.title}</h2>
                  <p className="text-cream/60 text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-gold/60 text-xs uppercase tracking-wider">Starting at</span>
                      <span className="text-gold font-bold text-lg">{service.startingAt}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gold/60 text-xs uppercase tracking-wider">Timeline</span>
                      <span className="text-cream/70 text-sm">{service.turnaround}</span>
                    </div>
                  </div>
                  <Link href={service.href} className="btn-gold inline-block text-sm py-2.5 px-5">
                    Learn More →
                  </Link>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-cream/40 text-xs uppercase tracking-widest mb-4">What&apos;s Included</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-cream/70 text-sm leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* US Markets We Serve */}
      <section className="py-14 bg-charcoal border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-cream">US Markets We <span className="gradient-text italic">Serve</span></h2>
              <p className="text-cream/40 text-sm mt-1">India fashion brand services across major US cities</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { name: 'New York', href: '/us/cities/new-york', sub: 'US Fashion Capital' },
              { name: 'Los Angeles', href: '/us/cities/los-angeles', sub: 'Streetwear & Boho' },
              { name: 'Chicago', href: '/us/cities/chicago', sub: 'Midwest Hub' },
              { name: 'Miami', href: '/us/cities/miami', sub: 'Resort & Beachwear' },
              { name: 'Dallas', href: '/us/cities/dallas', sub: 'Southwest Market' },
              { name: 'San Francisco', href: '/us/cities/san-francisco', sub: 'Sustainable D2C' },
              { name: 'Houston', href: '/us/cities/houston', sub: 'Diaspora Market' },
              { name: 'Seattle', href: '/us/cities/seattle', sub: 'Nordstrom HQ' },
              { name: 'Boston', href: '/us/cities/boston', sub: 'Premium Market' },
              { name: 'Atlanta', href: '/us/cities/atlanta', sub: 'Southeast Hub' },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="glass-card p-4 group hover:border-gold/40 transition-all">
                <div className="font-serif font-bold text-cream text-sm mb-0.5 group-hover:text-gold transition-colors">{c.name}</div>
                <div className="text-cream/40 text-xs">{c.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0d1b3e] border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">
            Build Your US Brand — <span className="gradient-text italic">Start Today.</span>
          </h2>
          <p className="text-cream/60 mb-8 leading-relaxed">
            Tell us your product category, target US market, and budget — we&apos;ll send you a complete go-to-market plan with India manufacturing costs, US marketplace strategy, and realistic timelines. Free, within 24 hours.
          </p>
          <Link href="/us/contact" className="btn-gold inline-block px-8 py-4">
            Get Your Free US Market Plan
          </Link>
        </div>
      </section>
    </main>
  );
}
