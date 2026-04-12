import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Performance Marketing for Fashion Brands India | 4–8x ROAS | Heritage Apparels',
  description:
    'ROI-obsessed performance marketing for D2C fashion and accessories brands in India. Meta Ads, Google Shopping, Myntra & Amazon Sponsored Ads. Average 4–8x ROAS within 90 days. Starting ₹40,000/month.',
  keywords: [
    'performance marketing fashion brands India',
    'Meta ads fashion brand India',
    'Google shopping fashion India',
    'D2C fashion marketing agency India',
    'Myntra sponsored ads management',
    'Amazon ads fashion brand India',
    'ROAS fashion brand India',
    'fashion brand paid advertising agency Mumbai',
    'Instagram ads D2C fashion brand',
    'performance marketing agency clothing brand',
  ],
  alternates: {
    canonical: 'https://www.heritageapparels.com/services/performance-marketing',
  },
  openGraph: {
    title: 'Performance Marketing for Fashion Brands India | Heritage Apparels',
    description: 'Meta Ads, Google Shopping, Myntra & Amazon Sponsored Ads for D2C fashion brands. 4–8x ROAS within 90 days.',
    type: 'website',
  },
};

const channels = [
  {
    icon: '📘',
    title: 'Meta Ads (Facebook & Instagram)',
    desc: 'Full-funnel campaigns — awareness, consideration, and conversion. We produce the creatives, write the copy, build the audiences, and optimize for ROAS daily.',
    results: '4–8x ROAS average',
  },
  {
    icon: '🔍',
    title: 'Google Shopping & Search',
    desc: 'Product listing ads and branded search campaigns that capture high-intent buyers. We manage feed optimization, bidding strategy, and negative keyword sculpting.',
    results: '300–500% ROI',
  },
  {
    icon: '🛍️',
    title: 'Myntra Sponsored Ads',
    desc: 'Sponsored product and brand ads on Myntra. We manage budgets, keywords, and bid strategies to maximize your marketplace visibility and organic rank.',
    results: 'Top 5 category listing',
  },
  {
    icon: '📦',
    title: 'Amazon Sponsored Ads',
    desc: 'Sponsored Products, Sponsored Brands, and DSP campaigns on Amazon. Full lifecycle management from keyword research to weekly bid optimization.',
    results: 'ACoS below 20% target',
  },
  {
    icon: '💄',
    title: 'Nykaa Ads',
    desc: 'Category-specific paid placements and brand store promotion on Nykaa. We ensure maximum visibility during key sale events and new launch periods.',
    results: '2–4x visibility uplift',
  },
  {
    icon: '🔄',
    title: 'Retargeting & Remarketing',
    desc: 'Pixel-based retargeting across Meta and Google to recover abandoned carts, warm up prospects, and drive repeat purchases from existing customers.',
    results: '60–80% lower CAC',
  },
];

const whatIsIncluded = [
  'Campaign strategy & media planning',
  'Creative production (static + video ads)',
  'Audience research & segmentation',
  'A/B testing of creatives and landing pages',
  'Daily bid & budget optimization',
  'Weekly performance reports',
  'Monthly strategy review call',
  'Landing page & D2C store optimization',
];

const faqs = [
  {
    q: 'How much ad spend do I need to start performance marketing?',
    a: 'We recommend a minimum ad spend of ₹50,000/month alongside our ₹40,000/month management retainer. However, we have successfully run profitable campaigns for brands starting at ₹30,000/month ad spend. The key is efficient audience targeting and creative testing, not just budget size.',
  },
  {
    q: 'How long does it take to see results from Meta Ads for a fashion brand?',
    a: 'Most fashion brands see initial ROAS data within the first 2 weeks. Consistent 4–8x ROAS typically stabilises within 60–90 days as we optimise audiences and creatives based on real purchase data. The first month is always the learning phase.',
  },
  {
    q: 'Do you provide the ad creatives or do I need to supply them?',
    a: 'We produce all ad creatives — static images, carousel ads, and video scripts — as part of our retainer. If you have existing brand photography or product images, we use those. If not, we can bundle our fashion photography services.',
  },
  {
    q: 'Which platforms do you manage for fashion brands in India?',
    a: 'We manage Meta Ads (Facebook + Instagram), Google Shopping & Search, Myntra Sponsored Ads, Amazon Sponsored Products & DSP, and Nykaa Ads. We also run retargeting campaigns across Meta and Google simultaneously.',
  },
  {
    q: 'What is your pricing model — percentage of ad spend or flat retainer?',
    a: 'We charge a flat monthly retainer (starting ₹40,000/month) not a percentage of ad spend. This means our incentive is your ROAS, not spending more of your budget. Ad spend is billed directly by the platforms to your account.',
  },
];

export default function PerformanceMarketingPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Performance Marketing for Fashion Brands India',
    serviceType: 'Paid Advertising & Performance Marketing',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Heritage Apparels',
      url: 'https://www.heritageapparels.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
    },
    description: 'ROI-obsessed paid advertising on Meta Ads, Google Shopping, Myntra Sponsored Ads, Amazon Sponsored Ads, and Nykaa Ads for D2C fashion brands in India. Average 4–8x ROAS within 90 days.',
    areaServed: { '@type': 'Country', name: 'India' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '40000',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'INR',
        minPrice: '40000',
        unitText: 'MONTH',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Performance Marketing Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meta Ads Management (Facebook & Instagram)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Shopping & Search Campaigns' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Myntra Sponsored Ads' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Amazon Sponsored Ads & DSP' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nykaa Paid Ads' } },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
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
          <p className="section-label mb-4">Performance Marketing</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Ads That Generate Sales.
            <br />
            <span className="gradient-text italic">Not Just Impressions.</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed">
            We are ROI-obsessed performance marketers with deep expertise in fashion and D2C brands. Our campaigns on Meta, Google, Myntra, Nykaa, and Amazon average 4–8x ROAS within 90 days — and we have the client results to prove it.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold">Get a Free Audit →</Link>
            <Link href="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ROAS Banner */}
      <section className="py-12 bg-charcoal border-y border-gold/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '4–8x', label: 'Average ROAS', sub: 'within 90 days' },
              { value: '₹100Cr+', label: 'Ad Spend Managed', sub: 'across all platforms' },
              { value: '<20%', label: 'Target ACoS', sub: 'on Amazon Ads' },
              { value: '200+', label: 'Active Campaigns', sub: 'running this month' },
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

      {/* Channels */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Every Platform. <span className="gradient-text italic">Every Rupee Optimized.</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channels.map((ch) => (
              <div key={ch.title} className="glass-card p-8 group">
                <div className="text-4xl mb-4">{ch.icon}</div>
                <h3 className="font-serif text-xl font-bold text-cream mb-3 group-hover:text-gold transition-colors">{ch.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed mb-4">{ch.desc}</p>
                <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium">
                  {ch.results}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-[#16213e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              What&apos;s Included in Every <span className="gradient-text italic">Retainer</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="glass-card p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whatIsIncluded.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-cream/80 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-gold/10 text-center">
              <div className="text-cream/40 text-sm mb-1">Starting from</div>
              <div className="font-serif text-4xl font-bold gradient-text mb-1">₹40,000/month</div>
              <div className="text-cream/40 text-sm">+ ad spend budget (recommended ₹50,000+/month)</div>
            </div>
          </div>
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
      <section className="py-16 bg-[#16213e] border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">
            Ready for <span className="gradient-text italic">4–8x ROAS?</span>
          </h2>
          <p className="text-cream/60 mb-8 leading-relaxed">
            Share your current ad account or start fresh — we do a free audit and share a detailed performance marketing strategy within 48 hours. No commitment required.
          </p>
          <Link href="/contact" className="btn-gold inline-block px-8 py-4">
            Get Your Free Performance Audit
          </Link>
        </div>
      </section>
    </main>
  );
}
