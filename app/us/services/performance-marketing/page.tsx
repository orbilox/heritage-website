import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Performance Marketing Agency for US Fashion Brands | Meta, TikTok, Amazon DSP | Heritage Apparels USA',
  description:
    'Revenue-generating paid campaigns for US fashion brands on Meta Ads, Google Shopping, TikTok Ads, Amazon DSP, and Walmart Connect. Creatives included. 4–8x ROAS. Starting $2,000/month.',
  keywords: [
    'performance marketing agency USA fashion brands',
    'Meta ads agency US fashion brand',
    'TikTok ads fashion brand USA',
    'Amazon DSP fashion brand United States',
    'Google shopping ads fashion USA',
    'ecommerce paid advertising agency USA',
    'fashion brand ROAS USA',
    'paid social media agency fashion USA',
    'Walmart Connect ads management',
    'performance marketing agency clothing brand America',
  ],
  alternates: {
    canonical: 'https://www.heritageapparels.com/us/services/performance-marketing',
    languages: {
      'en-US': 'https://www.heritageapparels.com/us/services/performance-marketing',
      'en-IN': 'https://www.heritageapparels.com/services/performance-marketing',
    },
  },
  openGraph: {
    title: 'US Performance Marketing Agency — Meta, TikTok, Amazon | Heritage Apparels',
    description: 'Paid campaigns for US fashion brands. Meta, Google, TikTok, Amazon DSP, Walmart Connect. Creatives included. 4–8x ROAS.',
    type: 'website',
    locale: 'en_US',
  },
};

const whatWeDeliver = [
  { icon: '📘', title: 'Meta Ads (US)', desc: 'Instagram and Facebook campaigns targeting American consumers by interest, behavior, lookalike, and retargeting — optimized for US purchase patterns.' },
  { icon: '🔍', title: 'Google Shopping & Search', desc: 'Product listing ads and branded search campaigns capturing US shoppers with high purchase intent on Google and YouTube.' },
  { icon: '🎵', title: 'TikTok Ads', desc: 'In-feed, TopView, and Spark Ads engineered for Gen Z and millennial US buyers. We script, produce, and run creatives natively.' },
  { icon: '📦', title: 'Amazon Sponsored Ads', desc: 'Sponsored Products, Sponsored Brands, and Sponsored Display campaigns — plus Amazon DSP for off-platform retargeting.' },
  { icon: '🎨', title: 'Creative Production', desc: 'Static images, video ads, carousel ads, and UGC-style content produced by our in-house creative team — no extra charge.' },
  { icon: '📊', title: 'Weekly Optimization', desc: 'Bid adjustments, audience pruning, creative rotation, and landing page A/B tests — every week, with a clear ROAS report.' },
  { icon: '🛒', title: 'Walmart Connect Ads', desc: 'Sponsored search and display ads on Walmart.com — targeting 120M+ monthly US shoppers at the point of purchase.' },
  { icon: '🔄', title: 'Full-Funnel Strategy', desc: 'Top-of-funnel awareness, mid-funnel consideration, and bottom-of-funnel conversion campaigns working together across all platforms.' },
];

const packages = [
  {
    name: 'Starter',
    price: '$2,000/mo',
    ideal: 'New US brands · 1–2 ad platforms',
    includes: [
      'Meta Ads management (IG + FB)',
      'Up to $5,000 ad spend managed',
      '4 ad creatives per month',
      'Audience research & setup',
      'Weekly performance report',
    ],
  },
  {
    name: 'Growth',
    price: '$4,000/mo',
    ideal: 'Scaling brands · Multi-platform',
    includes: [
      'Meta + Google + Amazon Ads',
      'Up to $15,000 ad spend managed',
      '10 creatives per month (static + video)',
      'TikTok Ads setup & management',
      'Retargeting & lookalike campaigns',
      'Bi-weekly strategy calls',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    ideal: 'High-spend brands · Full funnel',
    includes: [
      'All platforms including DSP',
      'Unlimited ad spend managed',
      '20+ creatives per month',
      'UGC & influencer ad production',
      'Dedicated US account strategist',
      'Weekly strategy calls',
    ],
  },
];

const stats = [
  { value: '4–8x', label: 'ROAS Delivered', sub: 'on US paid campaigns' },
  { value: '5', label: 'Ad Platforms', sub: 'Meta, Google, TikTok, Amazon, Walmart' },
  { value: '7 Days', label: 'Campaigns Live', sub: 'from onboarding' },
  { value: '100%', label: 'Creatives Included', sub: 'no extra production fee' },
];

const faqs = [
  {
    q: 'How much does performance marketing management cost for a US brand?',
    a: 'Our US performance marketing retainers start at $2,000/month for Meta Ads management (up to $5,000 ad spend). The Growth package at $4,000/month covers Meta, Google, Amazon, and TikTok Ads with up to $15,000 ad spend managed. Ad spend is billed separately directly by the platforms.',
  },
  {
    q: 'Do you include ad creatives in your US management fee?',
    a: 'Yes. All packages include creative production — static images, carousel ads, and video ad creatives — at no extra charge. Our in-house team produces US-market-optimized creatives tailored to each platform\'s best practices and American consumer aesthetics.',
  },
  {
    q: 'Can you run TikTok Ads for a fashion brand targeting US consumers?',
    a: 'Absolutely. TikTok is one of the fastest-growing paid channels for US fashion brands targeting Gen Z and millennials. We script, produce, and run In-Feed Ads, TopView, and Spark Ads campaigns with US-specific audience targeting and creative hooks.',
  },
  {
    q: 'What ROAS can I expect from US Meta Ads for a fashion brand?',
    a: 'Our US fashion brand campaigns consistently deliver 4–8x ROAS once campaigns are fully optimized (typically 60–90 days). During the first 30 days (learning phase), we focus on audience testing and creative iteration. ROAS varies by product price point, brand awareness level, and ad spend.',
  },
  {
    q: 'Do you manage Amazon DSP campaigns for US brands?',
    a: 'Yes. Our Enterprise package includes Amazon DSP for off-platform display retargeting across Amazon-owned properties and third-party sites. We also manage Sponsored Products, Sponsored Brands, and Sponsored Display campaigns on Amazon.com for US sellers.',
  },
];

export default function USPerformanceMarketingPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Performance Marketing for US Fashion Brands',
    serviceType: 'Paid Advertising & Performance Marketing',
    provider: {
      '@type': 'Organization',
      name: 'Heritage Apparels',
      url: 'https://www.heritageapparels.com/us',
    },
    description: 'Revenue-generating paid campaigns on Meta Ads, Google Shopping, TikTok Ads, Amazon DSP, and Walmart Connect for US fashion brands. Creatives included. 4–8x ROAS.',
    areaServed: { '@type': 'Country', name: 'United States' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '2000',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        minPrice: '2000',
        unitText: 'MONTH',
      },
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
      <section className="py-24 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">📈 US Performance Marketing</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            4–8x ROAS on
            <br />
            <span className="gradient-text italic">US Ad Platforms.</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed">
            Revenue-generating paid campaigns on Meta, Google Shopping, TikTok Ads, Amazon DSP, and Walmart Connect — targeting American consumers with creatives we produce in-house. No ROAS, no excuses.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold">Start US Ads →</Link>
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
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">What We <span className="gradient-text italic">Run & Manage</span></h2>
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
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">US Marketing <span className="gradient-text italic">Packages</span></h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50">Monthly retainer in USD · Ad spend billed separately · No lock-in contracts</p>
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

      <section className="py-16 bg-[#0d1b3e] border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">Ready to Scale US <span className="gradient-text italic">Revenue?</span></h2>
          <p className="text-cream/60 mb-8 leading-relaxed">Share your current ad account data (or tell us you&apos;re starting fresh) and we&apos;ll send a free US market audit with realistic ROAS projections.</p>
          <Link href="/us/contact" className="btn-gold inline-block px-8 py-4">Get Free US Ad Audit</Link>
        </div>
      </section>
    </main>
  );
}
