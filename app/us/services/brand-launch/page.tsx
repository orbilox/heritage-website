import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'US Brand Launch — India-Made, America-Ready | Heritage Apparels USA',
  description:
    'We build your fashion brand from zero to first US sale in 45 days. India manufacturing, brand identity, Shopify store, Amazon & Walmart onboarding, and a launch campaign — all under one roof.',
};

const whatWeDeliver = [
  { icon: '🔍', title: 'US Market Research', desc: 'We identify your target American audience, analyze competitors on Amazon and Shopify, and define a positioning that commands premium US pricing.' },
  { icon: '✏️', title: 'Brand Naming & Logo', desc: 'A memorable US-market brand name, wordmark, logo system, and color palette designed to appeal to American consumers from day one.' },
  { icon: '📦', title: 'US Retail Packaging', desc: 'Hang tags, poly bags, mailers, and boxes — all designed for US retail and Amazon FBA compliance. Barcodes and UPC codes included.' },
  { icon: '📸', title: 'Amazon-Ready Photography', desc: 'Pure white background main images, lifestyle shots with US models, and infographic images — fully compliant with Amazon, Walmart, and Etsy specs.' },
  { icon: '🛍️', title: 'Shopify US Store', desc: 'Conversion-optimized Shopify store with US payment gateways (Stripe, PayPal), US shipping zones, and tax configuration for all 50 states.' },
  { icon: '🌐', title: 'US Marketplace Onboarding', desc: 'We register and onboard your brand on Amazon.com, Walmart Marketplace, and Etsy — with full catalog upload and listing optimization.' },
  { icon: '📣', title: 'US Launch Campaign', desc: 'Pre-launch buzz on Instagram and TikTok, email list build, and Meta + Google Ads timed to maximize launch-day US sales.' },
  { icon: '📊', title: '90-Day US Growth Plan', desc: 'A week-by-week roadmap with US market KPIs, ad budgets, reorder timelines, and marketplace expansion targets.' },
];

const packages = [
  {
    name: 'Starter Brand',
    price: '$8,500',
    ideal: 'First-time US brand founders',
    includes: [
      'Brand name & logo design',
      'Packaging for 1 product line',
      '50 SKU Amazon-ready photography',
      'Shopify US store setup',
      'Amazon & Etsy onboarding',
      '30-day Meta launch campaign',
    ],
  },
  {
    name: 'Growth Brand',
    price: '$18,500',
    ideal: 'Scaling to US marketplaces',
    includes: [
      'Everything in Starter',
      'Full brand identity system',
      '150 SKU catalog + lifestyle shoot',
      'Amazon + Walmart + Etsy onboarding',
      'Performance marketing (3 months)',
      'TikTok & Instagram content (1 month)',
      '90-day US growth roadmap',
    ],
    popular: true,
  },
  {
    name: 'Enterprise Brand',
    price: 'Custom',
    ideal: 'Large D2C & wholesale US launch',
    includes: [
      'Everything in Growth',
      'India manufacturing managed',
      '500+ SKU catalog production',
      '5+ US marketplace onboarding',
      'Performance marketing (6 months)',
      'Influencer & UGC campaign',
      'Dedicated US brand manager',
    ],
  },
];

const stats = [
  { value: '45 Days', label: 'To First US Sale', sub: 'idea to marketplace' },
  { value: '500+', label: 'Brands Launched', sub: 'India & USA combined' },
  { value: '$0', label: 'Hidden Fees', sub: 'fixed-price packages' },
  { value: '3 Platforms', label: 'Minimum Launch', sub: 'Amazon, Walmart, Etsy' },
];

const faqs = [
  { q: 'How long does it take to launch a fashion brand in the US market?', a: 'Our 45-day brand launch sprint covers brand identity, Shopify setup, Amazon/Walmart/Etsy onboarding, and initial launch campaign. Timeline: brand design (1 week) + photography (1 week) + marketplace setup (1 week) + launch campaign (2 weeks). India manufacturing is quoted separately and typically runs in parallel.' },
  { q: 'Do I need a US LLC to sell on Amazon.com or Walmart Marketplace?', a: 'You do not need a US LLC to sell on Amazon.com — international sellers can register with a passport and bank account. Walmart Marketplace requires a US EIN (Employer Identification Number) which we assist with. We guide you through the exact requirements for each platform during onboarding.' },
  { q: 'Does the US brand launch package include India manufacturing?', a: 'Our US brand launch packages cover brand identity, photography, Shopify store, marketplace onboarding, and launch campaigns. India manufacturing is a separate engagement quoted based on your product category, styles, and order volume. Most clients run both simultaneously — manufacturing handles product while we build the brand and channels.' },
  { q: 'Which US marketplaces do you onboard brands onto as part of the launch?', a: 'Our Starter package covers Amazon.com and Etsy. The Growth package adds Walmart Marketplace. The Enterprise package covers 5+ platforms including Amazon, Walmart, Etsy, TikTok Shop, and niche marketplaces relevant to your category. We handle account setup, brand registry, catalog upload, and initial listing optimization for each platform.' },
  { q: 'What ongoing support do you provide after the US brand launch?', a: 'After launch, we offer performance marketing management (Meta + Google Ads), marketplace management (listing optimization, PPC campaigns, reorder management), and social media content production. Most clients transition to a monthly retainer covering 2–3 of these services. Your 90-day US growth roadmap outlines the full post-launch plan.' },
];

export default function USBrandLaunchPage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'US Fashion Brand Launch from India Manufacturing', serviceType: 'Brand Launch & E-commerce Setup', provider: { '@type': 'Organization', name: 'Heritage Apparels', url: 'https://www.heritageapparels.com/us' }, description: 'End-to-end US brand launch: India manufacturing, brand identity, Shopify store, Amazon & Walmart onboarding, and launch campaign. From idea to first US sale in 45 days.', areaServed: { '@type': 'Country', name: 'United States' }, offers: { '@type': 'Offer', priceCurrency: 'USD', price: '8500', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: '8500', unitText: 'PROJECT' } } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="py-24 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">🚀 US Brand Launch</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            From Idea to First
            <br />
            <span className="gradient-text italic">US Sale in 45 Days.</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed">
            We manufacture your product in India, build your brand identity, set up your Shopify store, onboard you to Amazon, Walmart, and Etsy — then run your launch campaign. Everything in one 45-day sprint.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold">Launch My US Brand →</Link>
            <Link href="/us/services" className="btn-outline">All US Services</Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-charcoal border-y border-gold/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-3xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-cream text-sm font-medium">{s.label}</div>
                <div className="text-cream/40 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">Everything in Your <span className="gradient-text italic">US Brand Launch</span></h2>
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

      <section className="py-20 bg-[#0d1b3e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">US Brand Launch <span className="gradient-text italic">Packages</span></h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50">Fixed USD pricing · No hidden fees · India manufacturing quoted separately</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`glass-card p-8 relative ${pkg.popular ? 'border-gold/40' : ''}`}>
                {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-charcoal text-xs font-bold rounded-full">Most Popular</span>}
                <h3 className="font-serif text-2xl font-bold text-cream mb-1">{pkg.name}</h3>
                <p className="text-cream/40 text-sm mb-4">{pkg.ideal}</p>
                <div className="font-serif text-3xl font-bold gradient-text mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-cream/70">
                      <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/us/contact" className={`block text-center py-3 rounded-lg font-medium text-sm transition-all ${pkg.popular ? 'btn-gold' : 'btn-outline'}`}>Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="font-serif text-4xl font-bold text-cream mb-4">Frequently Asked <span className="gradient-text italic">Questions</span></h2><div className="gold-divider mx-auto" /></div>
          <div className="space-y-4">{faqs.map(f => (<div key={f.q} className="glass-card p-6"><h3 className="font-semibold text-cream mb-3 leading-snug">{f.q}</h3><p className="text-cream/60 text-sm leading-relaxed">{f.a}</p></div>))}</div>
        </div>
      </section>

      <section className="py-16 bg-[#0d1b3e] border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">Your US Brand Story <span className="gradient-text italic">Starts Here.</span></h2>
          <p className="text-cream/60 mb-8 leading-relaxed">Tell us your product idea, US target market, and budget — we&apos;ll send you a complete brand launch roadmap within 24 hours. No obligations.</p>
          <Link href="/us/contact" className="btn-gold inline-block px-8 py-4">Book a Free US Brand Strategy Call</Link>
        </div>
      </section>
    </main>
  );
}
