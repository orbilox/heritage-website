import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Amazon Fashion Brand Agency USA | Brand Registry, PPC & Growth | Heritage Apparels',
  description:
    'We launch and scale fashion brands on Amazon.com. Brand Registry, A+ Content, Sponsored Ads management, and full catalog optimization. Average client ROAS: 4–8x.',
  keywords: [
    'Amazon fashion brand agency USA',
    'Amazon brand registry fashion',
    'Amazon PPC fashion brand',
    'Amazon A+ content fashion',
    'Amazon listing optimization clothing',
    'Amazon fashion brand launch USA',
    'Amazon sponsored ads fashion agency',
    'FBA fashion brand management',
  ],
  alternates: {
    canonical: 'https://www.heritageapparels.com/us/amazon-fashion-brand-agency',
  },
  openGraph: {
    title: 'Amazon Fashion Brand Agency USA | Heritage Apparels',
    description: 'Launch and scale your fashion brand on Amazon.com. Brand Registry, PPC, A+ Content. Average 4–8x ROAS.',
    type: 'website',
    locale: 'en_US',
  },
};

const stats = [
  { value: '4–8x', label: 'Average ROAS', sub: 'on Amazon Sponsored Ads' },
  { value: '200+', label: 'Amazon Brands', sub: 'launched and managed' },
  { value: 'Top 3', label: 'Ranking Results', sub: 'keyword positions achieved' },
  { value: '100%', label: 'Brand Registry', sub: 'all clients enrolled' },
];

const services = [
  {
    icon: '🏷️',
    title: 'Brand Registry Setup',
    desc: 'We enroll your brand in Amazon Brand Registry — unlocking A+ Content, Brand Store, Sponsored Brands, and brand protection tools.',
  },
  {
    icon: '🔍',
    title: 'Listing Optimization (SEO)',
    desc: 'Keyword research, optimized titles, bullet points, and backend search terms — written for both Amazon A9 algorithm and US buyer intent.',
  },
  {
    icon: '🎨',
    title: 'A+ Content & Brand Store',
    desc: 'Premium A+ Content modules and a full Brand Store built to tell your brand story, increase conversion rate, and reduce returns.',
  },
  {
    icon: '📢',
    title: 'Sponsored Products PPC',
    desc: 'Auto and manual Sponsored Products campaigns targeting high-converting keywords in your fashion category — bid-optimized weekly.',
  },
  {
    icon: '📣',
    title: 'Sponsored Brands Campaigns',
    desc: 'Headline search ads and video ads driving awareness at the top of Amazon search results for your brand and product portfolio.',
  },
  {
    icon: '🎯',
    title: 'Amazon DSP Retargeting',
    desc: 'Off-platform display retargeting reaching past visitors and similar audiences across Amazon-owned properties and third-party websites.',
  },
  {
    icon: '⭐',
    title: 'Review Generation Strategy',
    desc: 'Vine enrollment, follow-up email sequences, and legitimate review generation strategies to build social proof for new listings.',
  },
  {
    icon: '📦',
    title: 'FBA Setup & Management',
    desc: 'Shipment creation, inventory planning, FBA-prep coordination, stranded inventory fixes, and ongoing FBA health monitoring.',
  },
];

const categories = [
  { icon: '👗', title: "Women's Clothing" },
  { icon: '👔', title: "Men's Clothing" },
  { icon: '🏃', title: 'Activewear' },
  { icon: '👟', title: 'Shoes & Accessories' },
  { icon: '👧', title: "Kids' Clothing" },
  { icon: '💎', title: 'Luxury Fashion' },
];

const processSteps = [
  { num: '01', title: 'Audit', desc: 'We audit your existing Amazon account, listings, ad history, and competitor landscape to identify the biggest gaps and opportunities.' },
  { num: '02', title: 'Strategy', desc: 'We build a tailored 90-day Amazon growth strategy — keyword targets, campaign structure, listing roadmap, and revenue projections.' },
  { num: '03', title: 'Launch', desc: 'Listings go live with optimized content, A+ Content, Brand Store, and initial ad campaigns — all within 7 days of onboarding.' },
  { num: '04', title: 'Scale', desc: 'Weekly bid optimization, creative rotation, new keyword expansion, and DSP retargeting push ROAS higher month over month.' },
  { num: '05', title: 'Report', desc: 'Monthly performance reports with ROAS, ACOS, ranking progress, revenue, and a clear plan for the next 30 days.' },
];

const results = [
  {
    metric: '481%',
    label: 'ROAS in 90 Days',
    desc: 'Women\'s fashion brand — launched from zero to $45K/month on Amazon',
  },
  {
    metric: '$30K',
    label: 'Revenue in One Day',
    desc: 'Prime Day campaign — activewear brand, zero to Top 10 in category',
  },
  {
    metric: '4,600%',
    label: 'Growth Overnight',
    desc: 'Viral product listing relaunch — accessories brand hit #1 BSR in subcategory',
  },
];

const packages = [
  {
    name: 'Starter',
    price: '$1,500/mo',
    ideal: 'New Amazon sellers · 1–50 SKUs',
    includes: [
      'Brand Registry enrollment',
      'Listing optimization (up to 20 ASINs)',
      'Sponsored Products PPC management',
      'FBA setup & shipment creation',
      'Monthly performance report',
    ],
  },
  {
    name: 'Growth',
    price: '$3,500/mo',
    ideal: 'Scaling brands · 50–300 SKUs',
    includes: [
      'Everything in Starter',
      'A+ Content for top 10 ASINs',
      'Brand Store design & build',
      'Sponsored Brands & video ads',
      'Amazon DSP retargeting',
      'Review generation strategy',
      'Bi-weekly strategy calls',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    ideal: 'High-volume brands · 300+ SKUs',
    includes: [
      'Everything in Growth',
      'Full catalog optimization',
      'International marketplace expansion',
      'Amazon Posts management',
      'Dedicated account manager',
      'Weekly reporting & calls',
      'Priority escalation support',
    ],
  },
];

const faqs = [
  {
    q: 'Do you manage Amazon PPC for fashion brands?',
    a: 'Yes. Amazon PPC management is core to every package. We run Sponsored Products, Sponsored Brands, and Sponsored Display campaigns — with weekly bid optimization, keyword expansion, and negative keyword management. Our average fashion client achieves 4–8x ROAS within 90 days of campaign optimization.',
  },
  {
    q: 'What fashion categories do you work with on Amazon?',
    a: 'We work across all Amazon fashion categories: women\'s clothing, men\'s clothing, activewear, shoes and accessories, kids\' clothing, and luxury fashion. We have particular depth in women\'s apparel, activewear, and accessories — categories where we have launched 100+ brands.',
  },
  {
    q: 'How long does it take to see results on Amazon?',
    a: 'Initial results (improved ranking and first sales from optimized listings) are typically visible within 2–4 weeks of launch. Meaningful ROAS improvement from PPC campaigns takes 60–90 days as campaigns move through the Amazon learning phase and we accumulate conversion data for bid optimization.',
  },
  {
    q: 'Do you need Brand Registry to work with us?',
    a: 'No — we handle Brand Registry enrollment as part of our onboarding. You need a registered trademark (US Patent and Trademark Office) to enroll in Brand Registry. If you don\'t have a trademark yet, we can still start with listing optimization and Sponsored Products while your trademark application is in progress.',
  },
  {
    q: 'What is included in your monthly Amazon management fee?',
    a: 'All packages include listing optimization, PPC campaign management, weekly optimization, and monthly reporting. The Growth package adds A+ Content, Brand Store, Sponsored Brands, DSP retargeting, and review generation strategy. Ad spend is billed separately directly to your Amazon Ads account.',
  },
];

export default function AmazonFashionAgencyPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Amazon Fashion Brand Agency USA',
    serviceType: 'Amazon Marketing & Brand Management',
    provider: {
      '@type': 'Organization',
      name: 'Heritage Apparels',
      url: 'https://www.heritageapparels.com/us',
    },
    description:
      'We launch and scale fashion brands on Amazon.com. Brand Registry, A+ Content, Sponsored Ads management, FBA setup, and full catalog optimization. Average client ROAS: 4–8x.',
    areaServed: { '@type': 'Country', name: 'United States' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '1500',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        minPrice: '1500',
        unitText: 'MONTH',
      },
    },
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-24 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">📦 Amazon Fashion Brand Agency</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Launch &amp; Scale Your Fashion
            <br />
            <span className="gradient-text italic">Brand on Amazon.com</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-3xl mx-auto">
            Brand Registry, A+ Content, Sponsored Ads management, and full catalog optimization for US fashion brands. Average client ROAS: 4–8x. 200+ Amazon brands launched.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold">Launch My Amazon Brand →</Link>
            <Link href="/us/services" className="btn-outline">All US Services</Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
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

      {/* Services */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">What We Do</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              8 Amazon Services for <span className="gradient-text italic">Fashion Brands</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item) => (
              <div key={item.title} className="glass-card p-6 group">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-lg font-bold text-cream mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-[#0d1b3e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Categories</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Amazon Fashion Categories <span className="gradient-text italic">We Work With</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <div key={cat.title} className="glass-card p-5 flex items-center gap-4 group hover:border-gold/30 transition-colors">
                <span className="text-2xl">{cat.icon}</span>
                <span className="font-medium text-cream group-hover:text-gold transition-colors">{cat.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">The Process</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Our 5-Step Amazon <span className="gradient-text italic">Growth Process</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <div key={step.num} className="glass-card p-6 text-center relative">
                <div className="font-serif text-3xl font-bold gradient-text mb-3 opacity-60">{step.num}</div>
                <h3 className="font-serif text-base font-bold text-cream mb-2">{step.title}</h3>
                <p className="text-cream/50 text-xs leading-relaxed">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-gold/30 text-lg z-10">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-[#0d1b3e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Real Results</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Real Numbers from Our <span className="gradient-text italic">Amazon Fashion Clients</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.map((r) => (
              <div key={r.metric} className="glass-card p-8 text-center">
                <div className="font-serif text-5xl font-bold gradient-text mb-3">{r.metric}</div>
                <div className="text-cream font-semibold text-lg mb-2">{r.label}</div>
                <p className="text-cream/50 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Pricing</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Amazon Management <span className="gradient-text italic">Packages</span>
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50">Monthly retainer in USD · Ad spend billed separately · No lock-in contracts</p>
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
                <Link
                  href="/us/contact"
                  className={`block text-center py-3 rounded-lg font-medium text-sm transition-all ${pkg.popular ? 'btn-gold' : 'btn-outline'}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#0d1b3e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Frequently Asked <span className="gradient-text italic">Questions</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card p-6">
                <h3 className="font-semibold text-cream mb-3 leading-snug">{faq.q}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">
            Ready to Dominate <span className="gradient-text italic">Amazon Fashion?</span>
          </h2>
          <p className="text-cream/60 mb-8 leading-relaxed">
            Share your Amazon Seller Central access or tell us you&apos;re starting fresh — we&apos;ll audit your account and send a custom Amazon growth strategy within 24 hours.
          </p>
          <Link href="/us/contact" className="btn-gold inline-block px-8 py-4">Start My Amazon Growth</Link>
        </div>
      </section>
    </main>
  );
}
