import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Get a Free Fashion Brand Audit | Heritage Apparels USA',
  description:
    'Request your free fashion brand audit. We review your brand, manufacturing, marketplace presence, and ad performance — then send you a custom growth strategy within 48 hours.',
  keywords: [
    'free fashion brand audit USA',
    'fashion brand audit',
    'free brand audit USA',
    'fashion brand review USA',
    'Amazon brand audit',
    'ecommerce brand audit USA',
    'fashion brand growth strategy USA',
  ],
  alternates: {
    canonical: 'https://www.heritageapparels.com/us/free-brand-audit',
  },
  openGraph: {
    title: 'Get a Free Fashion Brand Audit | Heritage Apparels USA',
    description:
      'We review your brand, sourcing costs, marketplace presence & ad ROAS — then send a custom US growth strategy within 48 hours. No pitch. Just honest advice.',
    type: 'website',
    locale: 'en_US',
  },
};

const auditAreas = [
  {
    icon: '🏭',
    title: 'Manufacturing & Sourcing Cost',
    desc: 'We benchmark your current production cost against India sourcing and identify exact savings potential — style by style, per unit.',
  },
  {
    icon: '🛒',
    title: 'Marketplace Presence',
    desc: 'We grade your listings on Amazon, Walmart, and Etsy — title, bullets, images, A+ content, and search ranking — against top competitors.',
  },
  {
    icon: '📊',
    title: 'Meta & Google Ad Performance',
    desc: 'We review your ad account ROAS, CPM, CPC, and creative fatigue against US fashion benchmarks and flag your biggest waste and opportunity.',
  },
  {
    icon: '🎨',
    title: 'Brand Identity & Packaging',
    desc: 'We score your logo, packaging, brand voice, and visual consistency — and tell you exactly what US consumers expect at your price point.',
  },
  {
    icon: '💻',
    title: 'D2C Website & Conversion Rate',
    desc: 'We audit your Shopify or website for conversion rate, page speed, mobile UX, checkout friction, and missed revenue on existing traffic.',
  },
  {
    icon: '🎵',
    title: 'TikTok Shop Readiness',
    desc: 'We assess whether your brand, product, and content strategy are ready for TikTok Shop — the fastest-growing US fashion sales channel right now.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Fill the Form (2 min)',
    desc: 'Tell us your brand name, current channels (Amazon, Shopify, etc.), and your biggest challenge. No lengthy questionnaire.',
  },
  {
    num: '02',
    title: 'Our Team Reviews Your Brand (24 hrs)',
    desc: 'Our US market strategists audit your brand across all 6 dimensions — using real data from your listings, ads, and website.',
  },
  {
    num: '03',
    title: 'Receive Your Custom Strategy Report (48 hrs)',
    desc: 'You get a 5–8 page PDF with your audit scores, specific findings, and a prioritized 90-day growth action plan.',
  },
];

const auditReportIncludes = [
  'Current sourcing cost vs India savings potential (estimated per unit)',
  'Amazon/Walmart listing grade (A–F with specific line-item fixes)',
  'Ad account ROAS vs US fashion benchmark (2024 data)',
  'Brand identity score and top 3 visual/positioning fixes',
  'D2C conversion rate vs industry average and quick wins',
  'TikTok Shop opportunity score for your category',
  'Top 3 growth opportunities ranked by revenue impact',
];

const faqs = [
  {
    q: 'Is this really free? What is the catch?',
    a: 'Yes, completely free. No credit card. No obligation. We offer free brand audits because a meaningful percentage of brands we audit become clients. If our recommendations resonate and you want help executing them, we are here. If not, you still have a useful strategy report — no strings attached.',
  },
  {
    q: 'What do I need to provide to get the audit?',
    a: 'Just your brand name, website URL, and current sales channels. Optionally, you can share your Amazon Seller Central metrics, ad account ROAS, or Shopify analytics — the more data you share, the more specific our findings. But even with just a URL, we can produce a useful audit.',
  },
  {
    q: 'How long does it actually take to receive the report?',
    a: 'We commit to delivering your audit report within 48 hours of receiving your form submission. For straightforward brands, we often deliver within 24 hours. You receive a PDF report by email — no live call required unless you want one.',
  },
  {
    q: 'What happens after the audit?',
    a: 'You receive the report with no follow-up pressure. If you want to discuss the findings or explore how Heritage Apparels can help execute the strategy, we offer a free 30-minute strategy call. Many brands implement the quick wins themselves and come back when they need help with manufacturing, marketplace management, or paid ads.',
  },
];

const stats = [
  { value: '48 hrs', label: 'Report Delivery', sub: 'from form submission' },
  { value: '6', label: 'Audit Dimensions', sub: 'brand, sourcing, ads, marketplace, D2C, TikTok' },
  { value: '$0', label: 'Cost', sub: 'no credit card required' },
  { value: '500+', label: 'Brands Audited', sub: 'across USA fashion' },
];

export default function FreeBrandAuditPage() {
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
    name: 'Free Fashion Brand Audit USA',
    serviceType: 'Brand Audit & Growth Strategy',
    provider: {
      '@type': 'Organization',
      name: 'Heritage Apparels',
      url: 'https://www.heritageapparels.com/us',
    },
    description:
      'Free fashion brand audit for US entrepreneurs. We review manufacturing cost, marketplace presence, ad ROAS, brand identity, D2C conversion, and TikTok readiness — then deliver a custom growth strategy within 48 hours.',
    areaServed: { '@type': 'Country', name: 'United States' },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
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
          <p className="section-label mb-4">🔍 Free Brand Audit</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Get Your Free Fashion
            <br />
            <span className="gradient-text italic">Brand Audit</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-3xl mx-auto">
            We review your brand, sourcing costs, marketplace presence &amp; ad ROAS — then send a custom US growth strategy within 48 hours. No pitch. Just honest advice.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold">Request My Free Audit →</Link>
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

      {/* What we audit */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">What We Cover</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              6 Dimensions of Your <span className="gradient-text italic">Brand Audit</span>
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50 max-w-xl mx-auto">Every audit covers all 6 areas — even if you are only active on some of them. We flag gaps and opportunities across the board.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditAreas.map((item) => (
              <div key={item.title} className="glass-card p-6 group">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-lg font-bold text-cream mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-[#0d1b3e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <p className="section-label mb-4">The Process</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              How It <span className="gradient-text italic">Works</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="glass-card p-8 text-center relative">
                <div className="font-serif text-5xl font-bold gradient-text mb-4 opacity-60">{step.num}</div>
                <h3 className="font-serif text-xl font-bold text-cream mb-3">{step.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get in the report */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Your Report</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              What You Get in the <span className="gradient-text italic">Audit Report</span>
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50">A 5–8 page PDF strategy report delivered within 48 hours. Specific, actionable, no fluff.</p>
          </div>
          <div className="glass-card p-8">
            <ul className="space-y-4">
              {auditReportIncludes.map((item) => (
                <li key={item} className="flex items-start gap-4 text-cream/80">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-gold/10 text-center">
              <p className="text-cream/40 text-sm mb-4">All of this — completely free. No sales call required.</p>
              <Link href="/us/contact" className="btn-gold inline-block">Request My Free Audit Report →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why trust us */}
      <section className="py-20 bg-[#0d1b3e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Why Heritage Apparels</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Real Expertise. <span className="gradient-text italic">Real Numbers.</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center">
              <div className="font-serif text-4xl font-bold gradient-text mb-2">481%</div>
              <div className="text-cream font-medium text-sm mb-1">ROAS in 90 Days</div>
              <p className="text-cream/50 text-xs">Client result — fashion brand on Meta Ads</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="font-serif text-4xl font-bold gradient-text mb-2">$30K</div>
              <div className="text-cream font-medium text-sm mb-1">Revenue in One Day</div>
              <p className="text-cream/50 text-xs">Client result — Amazon fashion launch</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="font-serif text-4xl font-bold gradient-text mb-2">35–60%</div>
              <div className="text-cream font-medium text-sm mb-1">Average Cost Saving</div>
              <p className="text-cream/50 text-xs">India vs US manufacturing per unit</p>
            </div>
          </div>
          <p className="text-center text-cream/40 text-sm mt-8 max-w-2xl mx-auto">
            We have helped 500+ fashion brands source from India, launch on Amazon and Walmart, and scale with paid media. Our audits are grounded in real client data — not generic templates.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-charcoal">
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
      <section className="py-16 bg-[#0d1b3e] border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">
            Get Your Free Audit <span className="gradient-text italic">Today</span>
          </h2>
          <p className="text-cream/60 mb-8 leading-relaxed">
            Takes 2 minutes to request. Delivered within 48 hours. No obligations, no sales calls, no catch.
          </p>
          <Link href="/us/contact" className="btn-gold inline-block px-8 py-4">Request My Free Brand Audit</Link>
        </div>
      </section>
    </main>
  );
}
