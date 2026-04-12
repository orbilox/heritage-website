import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '360° Fashion Brand Services | Heritage Apparels',
  description:
    'Heritage Apparels offers India\'s most complete suite of fashion brand-building services — manufacturing, brand launch, performance marketing, digital cataloging, fashion photoshoot, e-commerce setup, social media reels, and marketplace management.',
  keywords: [
    'fashion brand building services India',
    'fashion manufacturing sourcing',
    'D2C brand launch agency',
    'performance marketing fashion',
    'digital cataloging service',
    'brand strategy agency India',
    'e-commerce fashion agency',
    'Myntra Nykaa management agency',
  ],
};

const services = [
  {
    icon: '🏭',
    title: 'Manufacturing & Sourcing',
    description:
      'We own our clothing manufacturing facility and have a vetted network of India\'s finest accessories, footwear, jewellery, and textile factories. Source, produce, and private-label your entire collection through us — no middlemen, factory-direct quality and pricing.',
    href: '/services/manufacturing-sourcing',
    highlights: [
      'Own clothing manufacturing unit',
      'Accessories, jewellery & footwear network',
      'Private label & OEM production',
      'Fabric sourcing & sampling',
      'Strict QA before every shipment',
    ],
    startingAt: 'Custom Quote',
    turnaround: '15–30 days sampling',
    badge: 'Exclusive',
  },
  {
    icon: '🚀',
    title: 'D2C Brand Launch',
    description:
      'We build fashion brands from zero to hero. From product ideation and brand naming to your first live sale on your own website and marketplaces — we\'ve launched hundreds of successful D2C fashion and accessories brands across India.',
    href: '/services/brand-launch',
    highlights: [
      'Brand concept & market research',
      'Naming, logo & full identity',
      'Packaging & swing tag design',
      'Website + marketplace setup',
      'Launch campaign & first-sale guarantee',
    ],
    startingAt: '₹1,50,000',
    turnaround: '30–45 days',
    badge: 'Most Popular',
  },
  {
    icon: '📈',
    title: 'Performance Marketing',
    description:
      'Revenue-generating paid campaigns on Meta (Instagram/Facebook), Google, and marketplace ad platforms. We write creative briefs, produce the creatives, run campaigns, and optimize weekly — delivering 4–8x ROAS consistently for fashion brands.',
    href: '/services/performance-marketing',
    highlights: [
      'Meta (Instagram + Facebook) Ads',
      'Google Shopping & Search Ads',
      'Myntra & Amazon Sponsored Ads',
      'Creative production included',
      'Weekly reporting & optimization',
    ],
    startingAt: '₹40,000/month',
    turnaround: 'Live within 7 days',
    badge: '4–8x ROAS',
  },
  {
    icon: '🎯',
    title: 'Brand Strategy & Identity',
    description:
      'A complete visual identity system that commands premium positioning. From logo, color palette, and typography to packaging, photography direction, and the complete brand guidelines document.',
    href: '/services/brand-strategy',
    highlights: [
      'Brand positioning workshop',
      'Visual identity system design',
      'Photography style guide',
      'Packaging & label design',
      'Complete brand guidelines document',
    ],
    startingAt: '₹85,000',
    turnaround: '2–3 weeks',
    badge: null,
  },
  {
    icon: '📸',
    title: 'Fashion Photoshoot',
    description:
      'Studio and on-location fashion shoots that capture the soul of your brand. Our creative directors, stylists, photographers, and production crew execute every shoot with editorial precision and commercial intent.',
    href: '/services/fashion-photoshoot',
    highlights: [
      'Full-day and half-day studio bookings',
      'Pan-India on-location shoots',
      'Model & talent coordination',
      'Professional styling and hair/makeup',
      'Creative direction & mood boarding',
    ],
    startingAt: '₹35,000',
    turnaround: '48–72 hours',
    badge: null,
  },
  {
    icon: '📂',
    title: 'Digital Cataloging',
    description:
      'Systematic, high-volume product photography for your complete catalog. We photograph up to 300 SKUs per day with consistent lighting, multiple angles, and marketplace-ready output for every platform.',
    href: '/services/digital-cataloging',
    highlights: [
      'Up to 300 SKUs per shoot day',
      'Multiple angles per product',
      'White, grey & lifestyle backgrounds',
      'Flat lay and on-model options',
      'Myntra, Amazon, Nykaa, Flipkart formats',
    ],
    startingAt: '₹45 per SKU',
    turnaround: '24–48 hours',
    badge: null,
  },
  {
    icon: '🛍️',
    title: 'E-commerce Setup & Growth',
    description:
      'We build, optimize, and scale your D2C website and marketplace presence. From Shopify store setup and product listing optimization to SEO, conversion rate optimization, and full-funnel management.',
    href: '/services/ecommerce-content',
    highlights: [
      'Shopify D2C website development',
      'Marketplace listing optimization',
      'SEO & conversion rate optimization',
      'Abandoned cart & email automation',
      'Monthly growth reporting',
    ],
    startingAt: '₹60,000',
    turnaround: '7–14 days setup',
    badge: null,
  },
  {
    icon: '🎬',
    title: 'Social Media & Reels',
    description:
      'Short-form video content and social strategy engineered for organic growth on Instagram and YouTube. Monthly retainer packages with dedicated content calendars, filming, editing, and community management.',
    href: '/services/social-media-reels',
    highlights: [
      'Instagram Reels & Stories',
      'YouTube Shorts',
      'Monthly content calendar',
      'Music licensing & caption strategy',
      'Community management included',
    ],
    startingAt: '₹25,000/month',
    turnaround: '3–5 days per Reel',
    badge: null,
  },
  {
    icon: '🌐',
    title: 'Marketplace Onboarding & Management',
    description:
      'We onboard and manage your brand across 30+ marketplaces — Myntra, Nykaa, Amazon, Flipkart, AJIO, Tata Cliq, Blinkit, Zepto, Tira, and more. Documentation, cataloging, approvals, ads, and monthly performance management — all done for you.',
    href: '/services/marketplace-onboarding',
    highlights: [
      'Myntra, Nykaa, AJIO & Tata Cliq onboarding',
      'Amazon Seller Central & FBA setup',
      'Flipkart, Blinkit & Zepto management',
      'A+ content & brand store creation',
      '98% first-attempt approval rate',
      '30+ platforms · 4200+ brands onboarded',
    ],
    startingAt: '₹30,000/month',
    turnaround: 'Go live in 7 days',
    badge: '30+ Platforms',
  },
];

export default function ServicesPage() {
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Heritage Apparels — 360° Fashion Brand Services',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      description: service.description,
      url: `https://www.heritageapparels.com${service.href}`,
    })),
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* Hero */}
      <section className="py-24 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-burgundy/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">360° Services</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Factory to Consumer —
            <br />
            <span className="gradient-text italic">We Handle Everything</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-3xl mx-auto">
            We are not just a photography or marketing agency. We are India&apos;s only end-to-end fashion brand-building powerhouse — with our own manufacturing factory, accessories network, performance marketing engine, and marketplace management expertise.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {['Own Factory', 'Brand Launch', 'Performance Ads', 'Catalogs', 'Marketplace Mgmt'].map((tag) => (
              <span key={tag} className="px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Bar */}
      <section className="py-8 bg-charcoal border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-cream/30 text-xs uppercase tracking-widest mb-5">Complete Brand Journey</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-0">
            {[
              { label: 'Sourcing', icon: '🏭' },
              { label: 'Brand Identity', icon: '🎯' },
              { label: 'Photo & Video', icon: '📸' },
              { label: 'Digital Catalog', icon: '📂' },
              { label: 'E-commerce', icon: '🛍️' },
              { label: 'Performance Ads', icon: '📈' },
              { label: 'Social Media', icon: '🎬' },
              { label: 'Scale', icon: '🚀' },
            ].map((step, i, arr) => (
              <div key={step.label} className="flex items-center gap-2">
                <div className="flex flex-col items-center text-center w-20">
                  <span className="text-xl mb-1">{step.icon}</span>
                  <span className="text-cream/50 text-xs">{step.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <span className="text-gold/25 text-lg mx-1 hidden sm:block">→</span>
                )}
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
              <div
                key={service.title}
                className="glass-card p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 relative"
              >
                {/* Badge */}
                {service.badge && (
                  <span className="absolute top-6 right-6 px-3 py-1 bg-gold text-charcoal text-xs font-bold rounded-full">
                    {service.badge}
                  </span>
                )}

                {/* Left: Icon & Title */}
                <div className="lg:col-span-1">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="font-serif text-2xl font-bold text-cream mb-2">{service.title}</h2>
                  <p className="text-cream/60 text-sm leading-relaxed mb-4">{service.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-gold/60 text-xs uppercase tracking-wider">Starting at</span>
                      <span className="text-gold font-bold text-lg">{service.startingAt}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gold/60 text-xs uppercase tracking-wider">Timeline</span>
                      <span className="text-cream/70 text-sm">{service.turnaround}</span>
                    </div>
                  </div>

                  <Link href={service.href} className="btn-gold inline-block mt-6 text-sm py-2.5 px-5">
                    Learn More →
                  </Link>
                </div>

                {/* Right: Highlights */}
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

      {/* Cities We Serve */}
      <section className="py-14 bg-charcoal border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-cream">Cities We <span className="gradient-text italic">Serve</span></h2>
              <p className="text-cream/40 text-sm mt-1">Fashion brand services across India&apos;s major fashion hubs</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { name: 'Mumbai', href: '/cities/mumbai', sub: 'Fashion Capital' },
              { name: 'Delhi NCR', href: '/cities/delhi', sub: 'Ethnic & Export Hub' },
              { name: 'Bangalore', href: '/cities/bangalore', sub: 'D2C Startup Hub' },
              { name: 'Tirupur', href: '/cities/tirupur', sub: 'Knitwear Capital' },
              { name: 'Surat', href: '/cities/surat', sub: 'Fabric & Saree Hub' },
              { name: 'Jaipur', href: '/cities/jaipur', sub: 'Heritage & Block Print' },
              { name: 'Kolkata', href: '/cities/kolkata', sub: 'Handloom & Wholesale' },
              { name: 'Ahmedabad', href: '/cities/ahmedabad', sub: 'Ethnic & Bandhani' },
              { name: 'Hyderabad', href: '/cities/hyderabad', sub: 'Bridal & Jewellery' },
              { name: 'Pune', href: '/cities/pune', sub: 'Contemporary D2C' },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="glass-card p-4 group hover:border-gold/40 transition-all">
                <div className="font-serif font-bold text-cream text-sm mb-0.5 group-hover:text-gold transition-colors">{c.name}</div>
                <div className="text-cream/40 text-xs">{c.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Package CTA */}
      <section className="py-16 bg-[#16213e] border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">
            The Full 360° Package — <span className="gradient-text italic">Built for You.</span>
          </h2>
          <p className="text-cream/60 mb-8 leading-relaxed">
            Most of our clients start with one service and quickly realize the power of combining manufacturing, brand identity, catalog, and performance marketing under one roof. Ask us about our bundled 360° Brand Building packages — significant savings, faster results.
          </p>
          <Link href="/contact" className="btn-gold inline-block px-8 py-4">
            Get Your 360° Brand Proposal
          </Link>
        </div>
      </section>
    </main>
  );
}
