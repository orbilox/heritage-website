import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'US Brand Strategy & Identity | Heritage Apparels USA',
  description:
    'Complete brand identity system built for the American market — logo, visual identity, US retail packaging, Amazon brand store, and brand guidelines. Command premium US pricing from day one.',
};

const whatWeDeliver = [
  { icon: '🔍', title: 'US Market Research', desc: 'Competitive analysis of your US category on Amazon, Walmart, and Shopify — identifying white space, pricing strategy, and positioning opportunities.' },
  { icon: '✏️', title: 'Brand Naming', desc: 'US-market brand name development — tested for trademark availability, domain availability, and cultural resonance with American consumers.' },
  { icon: '🎨', title: 'Logo & Visual Identity', desc: 'Primary logo, alternate marks, icon, color palette, and typography — a complete visual identity system built for US premium positioning.' },
  { icon: '📦', title: 'US Retail Packaging', desc: 'Hang tags, labels, polybags, mailers, and boxes designed for US retail standards — including UPC placement and FBA packaging requirements.' },
  { icon: '📸', title: 'Photography Style Guide', desc: 'A detailed photography direction document covering lighting, styling, models, and mood — ensuring consistent brand visuals across all US platforms.' },
  { icon: '🛒', title: 'Amazon Brand Store', desc: 'Custom-designed Amazon Brand Store with homepage, category pages, and product spotlight pages — driving repeat purchase and brand recall.' },
  { icon: '📖', title: 'Brand Guidelines Document', desc: 'A complete brand bible — logo usage rules, color codes, typography, photography direction, tone of voice, and do/don&apos;t examples.' },
  { icon: '🗣️', title: 'US Tone of Voice', desc: 'Brand copywriting guidelines tailored for American consumers — product descriptions, taglines, and ad copy that resonates with US buyers.' },
];

const packages = [
  {
    name: 'Identity Starter',
    price: '$3,500',
    ideal: 'New brands · Core identity only',
    includes: [
      'Logo & alternate marks',
      'Color palette & typography',
      'Brand usage guidelines (PDF)',
      'US trademark name check',
      '2 revision rounds',
    ],
  },
  {
    name: 'Full Brand System',
    price: '$7,500',
    ideal: 'US market launch · Complete identity',
    includes: [
      'Everything in Identity Starter',
      'US retail packaging design (2 items)',
      'Photography style guide',
      'Amazon Brand Store design',
      'Tone of voice & tagline',
      'Complete brand guidelines document',
    ],
    popular: true,
  },
  {
    name: 'Enterprise Brand',
    price: 'Custom',
    ideal: 'Full rebrand or luxury positioning',
    includes: [
      'Everything in Full Brand System',
      'US market positioning workshop',
      'Full packaging suite (5+ items)',
      'Brand video & motion identity',
      'US retailer pitch deck',
      'Dedicated brand strategist',
    ],
  },
];

const stats = [
  { value: '500+', label: 'Brands Built', sub: 'India & USA combined' },
  { value: '2–3 Wks', label: 'Delivery Timeline', sub: 'from brief to brand' },
  { value: '100%', label: 'Trademark Checked', sub: 'USPTO clearance review' },
  { value: '$3,500', label: 'Starting From', sub: 'core identity package' },
];

const faqs = [
  { q: 'How do you develop a brand identity specifically for US consumers?', a: 'US brand identity work begins with a competitive audit of your category on Amazon, Walmart, and Shopify — identifying how leading US brands position, price, and visually communicate. We then define your brand\'s point of differentiation specifically for American buyers: naming, visual language, color psychology, and packaging that creates shelf presence in a US retail context.' },
  { q: 'Do you check for trademark availability in the United States?', a: 'Yes. We perform a USPTO trademark clearance search for your proposed brand name before any design work begins. We check word marks and stylized marks across relevant classes. If conflicts are found, we propose alternative name directions. We strongly recommend engaging a US trademark attorney (which we can refer) to file the actual trademark application after our clearance review.' },
  { q: 'Can you redesign an existing brand identity for the US market?', a: 'Yes — brand identity refresh and US-market repositioning is a common engagement. We audit your current brand\'s performance in the US context, identify what is working and what is creating friction with US buyers, and evolve (rather than completely replace) your visual system. This typically takes 3–4 weeks and costs 20–30% less than a full brand build.' },
  { q: 'What makes retail-ready packaging for the US market different from India?', a: 'US retail packaging must include: UPC barcode (GTIN), country of origin ("Made in India"), fiber content and care instructions (FTC requirement), RN number for apparel importers, and California Prop 65 warning where applicable. Amazon FBA packaging has additional requirements for poly bags, suffocation warnings, and carton labelling. We design to all these standards from the start.' },
  { q: 'How long does a US brand identity project take from start to finish?', a: 'Our Identity Starter package delivers in 2–3 weeks from brief to final files. The Full Brand System (including packaging, Amazon Brand Store, and brand guidelines) takes 4–5 weeks. Enterprise projects with custom research, full packaging suite, and brand video take 6–8 weeks. We provide a project milestone calendar with review points before work begins.' },
];

export default function USBrandStrategyPage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'US Brand Strategy & Visual Identity for Fashion Brands', serviceType: 'Brand Strategy & Identity Design', provider: { '@type': 'Organization', name: 'Heritage Apparels', url: 'https://www.heritageapparels.com/us' }, description: 'Complete US-market brand identity system — logo, visual identity, retail packaging, Amazon Brand Store, and brand guidelines. USPTO trademark check included.', areaServed: { '@type': 'Country', name: 'United States' }, offers: { '@type': 'Offer', priceCurrency: 'USD', price: '3500', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: '3500', unitText: 'PROJECT' } } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="py-24 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">🎯 US Brand Strategy & Identity</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Built for American
            <br />
            <span className="gradient-text italic">Consumers. Built to Last.</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed">
            A complete visual identity system engineered for US premium positioning — from logo and color palette to Amazon Brand Store and US retail packaging. We make your brand look like it belongs on Nordstrom shelves.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold">Start My US Brand →</Link>
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
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">What We <span className="gradient-text italic">Build For Your US Brand</span></h2>
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
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">Brand Strategy <span className="gradient-text italic">Packages</span></h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50">Fixed USD pricing · 2 revision rounds included · Delivered in 2–3 weeks</p>
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
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">Your US Brand Identity <span className="gradient-text italic">Starts Here.</span></h2>
          <p className="text-cream/60 mb-8 leading-relaxed">Share your product and US market vision — we&apos;ll send you a brand strategy brief and mood board within 48 hours. No obligations.</p>
          <Link href="/us/contact" className="btn-gold inline-block px-8 py-4">Book a Free Brand Strategy Session</Link>
        </div>
      </section>
    </main>
  );
}
