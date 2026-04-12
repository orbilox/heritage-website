import Link from 'next/link';

const services = [
  {
    icon: '🏭',
    title: 'Manufacturing & Sourcing',
    description:
      'We own our clothing manufacturing facility and have deep-rooted connections with India\'s best accessories, footwear, and textile factories. Source, produce, and private-label your entire collection under one roof.',
    href: '/services/manufacturing-sourcing',
    features: ['Own Clothing Factory', 'Accessories Network', 'Private Label Production', 'Quality Control & QA'],
    color: 'from-amber-900/30 to-gold/10',
    badge: 'Exclusive',
  },
  {
    icon: '🚀',
    title: 'D2C Brand Launch',
    description:
      'We build fashion brands from scratch. From naming and positioning to first product launch — we handle everything. Whether you\'re a first-time founder or an existing business going D2C, we\'ve done it hundreds of times.',
    href: '/services/brand-launch',
    features: ['Brand Naming & Identity', 'Market Positioning', 'Go-to-Market Strategy', 'Launch Campaign Execution'],
    color: 'from-burgundy/20 to-gold/10',
    badge: 'Most Popular',
  },
  {
    icon: '📈',
    title: 'Performance Marketing',
    description:
      'ROI-obsessed performance campaigns on Meta, Google, and marketplaces. We run paid ads that generate real sales — not just impressions. Our average client sees 4–8x ROAS within 90 days.',
    href: '/services/performance-marketing',
    features: ['Meta & Google Ads', 'Marketplace Ads (Myntra, Amazon)', 'Retargeting Funnels', '4–8x ROAS Average'],
    color: 'from-green-900/20 to-gold/10',
    badge: '4–8x ROAS',
  },
  {
    icon: '🎯',
    title: 'Brand Strategy & Identity',
    description:
      'Build a premium visual identity that commands attention and premium pricing. Logo, color systems, packaging, photography direction, and the complete brand bible — all crafted to make you unforgettable.',
    href: '/services/brand-strategy',
    features: ['Visual Identity System', 'Brand Guidelines', 'Packaging Design', 'Competitor Analysis'],
    color: 'from-purple-900/20 to-gold/10',
    badge: null,
  },
  {
    icon: '📸',
    title: 'Fashion Photoshoot',
    description:
      'Studio and on-location fashion shoots that capture the soul of your brand. Creative directors, stylists, and top-tier photographers working together to produce imagery that sells and inspires.',
    href: '/services/fashion-photoshoot',
    features: ['Studio & Location Shoots', 'Model Coordination', 'Styling Direction', '48-hr Delivery'],
    color: 'from-gold/20 to-burgundy/10',
    badge: null,
  },
  {
    icon: '📂',
    title: 'Digital Cataloging',
    description:
      'High-volume product catalog photography — up to 300 SKUs per day with consistent quality, multiple angles, and platform-optimized output for every major marketplace in India.',
    href: '/services/digital-cataloging',
    features: ['300+ SKUs/Day', 'Multi-angle Coverage', 'Myntra, Amazon, Nykaa Ready', '24-hr Turnaround'],
    color: 'from-blue-900/30 to-gold/10',
    badge: null,
  },
  {
    icon: '🛍️',
    title: 'E-commerce Setup & Growth',
    description:
      'We build, manage, and scale your D2C website and marketplace presence — from Shopify store setup and listing optimization to SEO, conversion rate optimization, and full-funnel management.',
    href: '/services/ecommerce-content',
    features: ['Shopify / D2C Website', 'Marketplace Listing Optimization', 'SEO & CRO', 'Full Funnel Management'],
    color: 'from-teal-900/20 to-gold/10',
    badge: null,
  },
  {
    icon: '🎬',
    title: 'Social Media & Reels',
    description:
      'Thumb-stopping Reels, Stories, and short-form video content crafted to build massive organic reach and drive sales. Monthly retainer packages available for consistent brand-building.',
    href: '/services/social-media-reels',
    features: ['Instagram & YouTube Reels', 'Monthly Content Packages', 'Influencer Collaboration', 'Organic Growth Strategy'],
    color: 'from-pink-900/20 to-gold/10',
    badge: null,
  },
  {
    icon: '🌐',
    title: 'Marketplace Management',
    description:
      'End-to-end management of your brand on Myntra, Nykaa, Amazon, Flipkart, and AJIO. Cataloging, pricing strategy, promotions, inventory management, and monthly performance reporting.',
    href: '/services',
    features: ['Myntra & Nykaa Onboarding', 'Amazon FBA Management', 'Promotions & Deals', 'Performance Reporting'],
    color: 'from-orange-900/20 to-gold/10',
    badge: null,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#0f0f1e] relative overflow-hidden">
      <div className="absolute inset-0 pattern-overlay opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-6">
          <p className="section-label mb-4">360° Services</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6">
            Everything Your Fashion Brand
            <br />
            <span className="gradient-text italic">Needs — Under One Roof</span>
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="text-cream/60 text-lg max-w-3xl mx-auto mt-6">
            From our own manufacturing factory to performance marketing, digital catalogs to brand launches — we are the only partner a fashion or D2C brand will ever need. Factory to consumer, start to scale.
          </p>
        </div>

        {/* Factory to Consumer Journey Bar */}
        <div className="mb-16 px-4">
          <div className="bg-gold/5 border border-gold/15 rounded-2xl p-6">
            <p className="text-center text-cream/40 text-xs uppercase tracking-widest mb-6">The Heritage Apparels Brand Journey</p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-0">
              {[
                { label: 'Factory & Sourcing', icon: '🏭' },
                { label: 'Brand Strategy', icon: '🎯' },
                { label: 'Identity & Design', icon: '✏️' },
                { label: 'Production & Shoot', icon: '📸' },
                { label: 'Digital Catalog', icon: '📂' },
                { label: 'E-commerce Launch', icon: '🛍️' },
                { label: 'Performance Ads', icon: '📈' },
                { label: 'Scale & Dominate', icon: '🚀' },
              ].map((step, i, arr) => (
                <div key={step.label} className="flex items-center gap-2">
                  <div className="flex flex-col items-center text-center w-20 sm:w-24">
                    <span className="text-lg mb-1">{step.icon}</span>
                    <span className="text-cream/60 text-xs leading-tight">{step.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="text-gold/30 text-lg mx-1 hidden sm:block">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.href + service.title}
              href={service.href}
              className="service-card group block relative"
            >
              {/* Badge */}
              {service.badge && (
                <span className="absolute top-4 right-4 px-2 py-0.5 bg-gold text-charcoal text-xs font-bold rounded-full">
                  {service.badge}
                </span>
              )}

              {/* Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-cream mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-cream/60 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs text-cream/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Link href="/services" className="btn-outline inline-block">
            Explore All 360° Services
          </Link>
        </div>
      </div>
    </section>
  );
}
