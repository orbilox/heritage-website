import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'D2C Fashion Brand Launch Agency | Heritage Apparels',
  description:
    'Heritage Apparels specializes in launching D2C fashion brands from scratch. Brand naming, identity, product sourcing, cataloging, website, marketplace onboarding, and first-sale campaigns — all under one roof.',
  keywords: [
    'D2C fashion brand launch India',
    'fashion brand launch agency',
    'start fashion brand India',
    'D2C brand building agency',
    'fashion startup agency India',
    'launch fashion label India',
  ],
};

const whatWeDeliver = [
  { icon: '🔍', title: 'Market Research & Positioning', desc: 'We identify your target audience, map the competitive landscape, and define a market position that commands premium pricing and loyalty.' },
  { icon: '✏️', title: 'Brand Naming & Logo', desc: 'A memorable brand name, wordmark, logo system, and brand colour palette designed to look premium from day one.' },
  { icon: '📦', title: 'Packaging & Label Design', desc: 'Swing tags, inner labels, tissue paper, boxes, mailers — every touchpoint designed to deliver a premium unboxing experience.' },
  { icon: '📸', title: 'Product Photography & Catalog', desc: 'Launch-ready fashion photoshoot and digital catalog — styled, shot, and edited for your D2C website and all marketplace listings.' },
  { icon: '🛍️', title: 'D2C Website & Store Setup', desc: 'Shopify or custom D2C website setup with conversion-optimized product pages, checkout, and payment gateway integration.' },
  { icon: '🌐', title: 'Marketplace Onboarding', desc: 'We register and onboard your brand on Myntra, Nykaa, Amazon, Flipkart, and AJIO — with full catalog upload and listing optimization.' },
  { icon: '📣', title: 'Launch Campaign', desc: 'Pre-launch buzz on Instagram, email, and influencer tie-ups. Paid ads on Meta and Google timed to maximize launch-day sales.' },
  { icon: '📊', title: '90-Day Growth Plan', desc: 'A detailed 90-day roadmap with week-by-week marketing activities, KPIs, and targets to ensure your brand achieves escape velocity.' },
];

const packages = [
  {
    name: 'Starter Brand',
    price: '₹1,50,000',
    ideal: 'First-time D2C founders',
    includes: [
      'Brand naming & logo',
      'Packaging design (2 variants)',
      '100 SKU catalog photography',
      'Shopify store setup',
      'Amazon & Flipkart onboarding',
      '30-day launch campaign',
    ],
  },
  {
    name: 'Growth Brand',
    price: '₹3,50,000',
    ideal: 'Scaling D2C brands',
    includes: [
      'Everything in Starter',
      'Full brand identity system',
      '250 SKU catalog + fashion shoot',
      'Myntra & Nykaa onboarding',
      'Performance marketing (3 months)',
      'Social media setup & Reels (1 month)',
      '90-day growth roadmap',
    ],
    popular: true,
  },
  {
    name: 'Enterprise Brand',
    price: 'Custom',
    ideal: 'Large D2C & export brands',
    includes: [
      'Everything in Growth',
      'Manufacturing & sourcing support',
      '500+ SKU catalog production',
      'All 6 marketplace onboarding',
      'Performance marketing (6 months)',
      'Social media retainer (3 months)',
      'Dedicated brand manager',
    ],
  },
];

const faqs = [
  { q: 'How long does it take to launch a D2C fashion brand from scratch?', a: 'Our Standard package takes 8–10 weeks from brand briefing to first sale. The Premium package, with full manufacturing and website setup, runs 12–16 weeks. This includes brand identity, sampling, photography, marketplace onboarding, and launch campaign.' },
  { q: 'Do I need to have my products manufactured before starting the brand launch process?', a: "No. We offer end-to-end manufacturing as part of our brand launch packages. We source fabrics, manufacture products in our own facility or partner factories, handle QC — and then build your brand around the product we've helped create." },
  { q: 'Which marketplaces does Heritage Apparels list new brands on during launch?', a: 'Our launch package covers Myntra, AJIO, Amazon India, Flipkart, and Nykaa Fashion simultaneously. We handle all documentation, catalogue uploads, and listing optimization for each platform. Additional platforms can be added.' },
  { q: 'What is the minimum budget needed to launch a D2C fashion brand in India?', a: 'Our Essential brand launch package starts at ₹1.5 lakhs (agency fees only, excluding product inventory). Realistically, a full launch including inventory, photography, marketing, and our agency fee requires ₹8–20 lakhs total. We provide a detailed budget breakdown in your free strategy call.' },
  { q: 'Do you guarantee sales after the brand launch?', a: "We don't guarantee specific revenue numbers — no honest agency can. What we guarantee is a professional, market-ready launch with optimized listings, strong creative, and a 90-day growth plan. Our portfolio shows consistent results across 500+ brand launches." },
];

export default function BrandLaunchPage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'D2C Fashion Brand Launch Agency India', serviceType: 'Brand Launch & D2C Brand Building', provider: { '@type': 'LocalBusiness', name: 'Heritage Apparels', url: 'https://www.heritageapparels.com', address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', addressCountry: 'IN' } }, description: 'End-to-end D2C fashion brand launch — brand identity, manufacturing, photography, website, marketplace onboarding, and first-sale campaign. All under one roof.', areaServed: { '@type': 'Country', name: 'India' }, offers: { '@type': 'Offer', priceCurrency: 'INR', price: '150000', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'INR', minPrice: '150000', unitText: 'PROJECT' } } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'D2C Fashion Brand Launch',
    provider: { '@type': 'Organization', name: 'Heritage Apparels' },
    description: 'End-to-end D2C fashion brand launch service — from naming and identity to first sale.',
    areaServed: 'India',
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-24 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">D2C Brand Launch</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            We Don&apos;t Just Help You Launch.
            <br />
            <span className="gradient-text italic">We Build You a Big Brand.</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed">
            From a raw product idea to a recognized fashion brand on Myntra, Nykaa, Amazon, and your own D2C website — we handle every single step. Naming, identity, catalog, website, marketplace onboarding, and performance marketing. All in 30–45 days.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold">Launch My Brand →</Link>
            <Link href="/pricing" className="btn-outline">View Packages</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-charcoal border-y border-gold/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Brands Launched', sub: 'across India' },
              { value: '30 Days', label: 'Launch Timeline', sub: 'idea to first sale' },
              { value: '₹500Cr+', label: 'Revenue Generated', sub: 'for our clients' },
              { value: '98%', label: 'Brand Retention', sub: 'long-term partners' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-3xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-cream text-sm font-medium">{s.label}</div>
                <div className="text-cream/40 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Everything Included in Your <span className="gradient-text italic">Brand Launch</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDeliver.map((item) => (
              <div key={item.title} className="glass-card p-6 group">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-lg font-bold text-cream mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-[#16213e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Brand Launch <span className="gradient-text italic">Packages</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`glass-card p-8 relative ${pkg.popular ? 'border-gold/40' : ''}`}>
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-charcoal text-xs font-bold rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-serif text-2xl font-bold text-cream mb-1">{pkg.name}</h3>
                <p className="text-cream/40 text-sm mb-4">{pkg.ideal}</p>
                <div className="font-serif text-3xl font-bold gradient-text mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-cream/70">
                      <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`block text-center py-3 rounded-lg font-medium text-sm transition-all ${pkg.popular ? 'btn-gold' : 'btn-outline'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="font-serif text-4xl font-bold text-cream mb-4">Frequently Asked <span className="gradient-text italic">Questions</span></h2><div className="gold-divider mx-auto" /></div>
          <div className="space-y-4">{faqs.map(f => (<div key={f.q} className="glass-card p-6"><h3 className="font-semibold text-cream mb-3 leading-snug">{f.q}</h3><p className="text-cream/60 text-sm leading-relaxed">{f.a}</p></div>))}</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#16213e] border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">
            Your Brand Story <span className="gradient-text italic">Starts Here.</span>
          </h2>
          <p className="text-cream/60 mb-8 leading-relaxed">
            Tell us about your product idea, target audience, and budget — and we&apos;ll send you a complete brand launch roadmap within 48 hours. No obligations, just clarity.
          </p>
          <Link href="/contact" className="btn-gold inline-block px-8 py-4">
            Book a Free Brand Strategy Call
          </Link>
        </div>
      </section>
    </main>
  );
}
