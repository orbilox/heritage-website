import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fashion Brand Case Studies USA | Real Results | Heritage Apparels',
  description:
    'Real results from US fashion brands we\'ve launched and scaled. See how Heritage Apparels delivers 4-8x ROAS, $100K+ revenue, and full-brand launches in 45 days.',
  keywords: 'fashion brand agency results USA',
};

const caseStudies = [
  {
    id: 1,
    title: '0 to $100K in 4 Months',
    slug: 'brand-launch-0-to-100k',
    brandType: 'Women\'s Activewear Brand',
    location: 'Los Angeles, CA',
    category: 'D2C Launch',
    challenge: 'Founder had a product vision but faced $25/piece US manufacturing costs, no brand identity, and zero online presence.',
    solution: 'India manufacturing at $8/piece + Shopify + Meta Ads + Amazon launch campaign.',
    services: ['India Manufacturing', 'Shopify', 'Meta Ads', 'Amazon'],
    keyResult: '$103,000 revenue in Month 4',
    stats: [
      { value: '$103K', label: 'Month 4 Revenue' },
      { value: '6.2x', label: 'ROAS' },
      { value: '4 Months', label: 'Timeline' },
    ],
    accent: '#c9a84c',
    tag: 'D2C Launch',
  },
  {
    id: 2,
    title: '481% ROAS in 90 Days',
    slug: 'amazon-roas-4x',
    brandType: 'Men\'s Streetwear Brand',
    location: 'New York, NY',
    category: 'Performance Marketing',
    challenge: 'Existing Shopify brand doing $8K/month with zero Amazon presence, skeptical about Amazon ROI.',
    solution: 'Full Amazon PPC strategy with 5 ad groups, 180+ keywords, Sponsored Brands, and DSP retargeting.',
    services: ['Amazon PPC', 'Meta Ads', 'Brand Registry', 'A+ Content'],
    keyResult: '$48,100 ad revenue on $10,000 spend in 90 days',
    stats: [
      { value: '$48.1K', label: 'Ad Revenue' },
      { value: '481%', label: 'ROAS' },
      { value: '90 Days', label: 'Timeline' },
    ],
    accent: '#22d3ee',
    tag: 'Amazon',
  },
  {
    id: 3,
    title: '$30K Revenue in a Single Day',
    slug: '#',
    brandType: 'Sustainable Fashion Brand',
    location: 'Austin, TX',
    category: 'Performance Marketing',
    challenge: 'New sustainable brand needed rapid US market entry with limited ad budget and high brand authenticity requirements.',
    solution: 'TikTok Shop launch + micro-influencer campaign targeting eco-conscious US consumers.',
    services: ['TikTok Shop', 'Influencer Campaign', 'Content Production'],
    keyResult: 'Viral video drove $30,000 in a single day',
    stats: [
      { value: '$30K', label: 'Revenue in 1 Day' },
      { value: '2.4M', label: 'TikTok Views' },
      { value: '18 Days', label: 'From Launch' },
    ],
    accent: '#4ade80',
    tag: 'Shopify',
  },
  {
    id: 4,
    title: 'India Sourcing Saved $8,500/Month',
    slug: '#',
    brandType: 'Activewear Brand',
    location: 'Miami, FL',
    category: 'D2C Launch',
    challenge: 'US activewear brand paying $22 per piece from a domestic manufacturer, destroying profit margins at scale.',
    solution: 'Full India manufacturing switch — premium activewear at $8/piece with same quality certification.',
    services: ['India Manufacturing', 'Quality Control', 'CPSC Compliance'],
    keyResult: 'Per-piece cost from $22 to $8, saving $8,500/month',
    stats: [
      { value: '$8,500', label: 'Monthly Savings' },
      { value: '$8', label: 'Per Piece Cost' },
      { value: '64%', label: 'Cost Reduction' },
    ],
    accent: '#f97316',
    tag: 'D2C Launch',
  },
  {
    id: 5,
    title: '45-Day Brand Launch — Zero to Amazon Best Seller',
    slug: '#',
    brandType: 'Kids Clothing Brand',
    location: 'Chicago, IL',
    category: 'D2C Launch',
    challenge: 'First-time founder with no supply chain, no brand, and no marketplace presence. Goal: reach Amazon bestseller in 90 days.',
    solution: 'Full brand launch sprint: India manufacturing + brand identity + Amazon onboarding + PPC launch.',
    services: ['Full Brand Launch', 'India Manufacturing', 'Amazon PPC', 'Brand Registry'],
    keyResult: '#1 bestseller in kids\' pajamas category within 45 days',
    stats: [
      { value: '#1', label: 'Amazon BSR' },
      { value: '45 Days', label: 'To Bestseller' },
      { value: '$0', label: 'Prior Revenue' },
    ],
    accent: '#e879f9',
    tag: 'Amazon',
  },
  {
    id: 6,
    title: 'D2C Brand: $0 to $2M in 18 Months',
    slug: '#',
    brandType: 'Women\'s Luxury Fashion Brand',
    location: 'San Francisco, CA',
    category: 'Shopify',
    challenge: 'Luxury fashion concept with no manufacturing, no brand presence, and a tight 18-month runway to prove US market viability.',
    solution: 'Full-service brand building: India luxury manufacturing + brand identity + Shopify + 4 marketplace channels.',
    services: ['Full Brand Build', 'India Manufacturing', 'Shopify', 'Amazon', 'Performance Marketing'],
    keyResult: '$2M ARR across 4 marketplace channels',
    stats: [
      { value: '$2M', label: 'ARR' },
      { value: '4', label: 'Channels' },
      { value: '18 Months', label: 'Timeline' },
    ],
    accent: '#a78bfa',
    tag: 'Shopify',
  },
];

const filterTabs = ['All', 'Amazon', 'Shopify', 'D2C Launch', 'Performance Marketing'];

const overallStats = [
  { value: '500+', label: 'Brands Launched', sub: 'India & USA combined' },
  { value: '$2.5B+', label: 'Client Revenue', sub: 'generated globally' },
  { value: '4–8x', label: 'Average ROAS', sub: 'across all paid channels' },
  { value: '45 Days', label: 'Avg Brand Launch', sub: 'idea to first US sale' },
];

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Heritage Apparels Fashion Brand Case Studies',
            description: 'Real results from US fashion brands launched and scaled by Heritage Apparels',
            numberOfItems: caseStudies.length,
            itemListElement: caseStudies.map((cs, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: cs.title,
              description: cs.keyResult,
            })),
          }),
        }}
      />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-[#16213e] relative overflow-hidden">
          <div className="absolute inset-0 pattern-overlay opacity-20" />
          <div className="absolute left-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <p className="section-label mb-4">Real Client Results</p>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
              Real Results. Real Brands.
              <br />
              <span className="gradient-text italic">Real Numbers.</span>
            </h1>
            <div className="gold-divider mx-auto mb-8" />
            <p className="text-cream/70 text-xl leading-relaxed max-w-3xl mx-auto">
              We don&apos;t just promise growth — we deliver it. Here are verified results from US fashion brands we&apos;ve built and scaled from the ground up.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/us/contact" className="btn-gold px-8 py-4">
                Start Your Brand Story
              </Link>
              <Link href="/us/free-brand-audit" className="btn-outline px-8 py-4">
                Get a Free Brand Audit
              </Link>
            </div>
          </div>
        </section>

        {/* Overall Stats */}
        <section className="py-12 bg-charcoal border-b border-gold/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              {overallStats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-cream text-sm font-semibold mb-0.5">{stat.label}</div>
                  <div className="text-cream/40 text-xs">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Tabs (static display — all shown) */}
        <section className="py-16 bg-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {filterTabs.map((tab, i) => (
                <span
                  key={tab}
                  className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                    i === 0
                      ? 'bg-gold text-charcoal font-semibold border-gold'
                      : 'border-gold/20 text-cream/60 hover:border-gold/40 hover:text-cream'
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>

            {/* Case Study Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {caseStudies.map((cs) => (
                <div
                  key={cs.id}
                  className="group bg-[#16213e] rounded-2xl border border-gold/10 overflow-hidden hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5 flex flex-col"
                >
                  {/* Card Header */}
                  <div className="p-6 border-b border-gold/10">
                    <div className="flex items-start justify-between mb-3">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: `${cs.accent}18`, color: cs.accent, border: `1px solid ${cs.accent}30` }}
                      >
                        {cs.tag}
                      </span>
                      <span className="text-cream/30 text-xs">{cs.location}</span>
                    </div>
                    <h2 className="font-serif text-xl font-bold text-cream group-hover:text-gold transition-colors leading-snug mb-1">
                      {cs.title}
                    </h2>
                    <p className="text-cream/50 text-sm">{cs.brandType}</p>
                  </div>

                  {/* Stats Bar */}
                  <div className="grid grid-cols-3 divide-x divide-gold/10 border-b border-gold/10">
                    {cs.stats.map((stat) => (
                      <div key={stat.label} className="py-4 px-3 text-center">
                        <div className="font-serif font-bold text-lg gradient-text leading-tight">{stat.value}</div>
                        <div className="text-cream/40 text-xs mt-0.5 leading-tight">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-xs font-semibold text-cream/50 uppercase tracking-wider mb-1.5">Challenge</h3>
                      <p className="text-cream/70 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-xs font-semibold text-cream/50 uppercase tracking-wider mb-1.5">Solution</h3>
                      <p className="text-cream/70 text-sm leading-relaxed">{cs.solution}</p>
                    </div>

                    {/* Key Result */}
                    <div
                      className="rounded-xl p-4 mb-5 mt-auto"
                      style={{ background: `${cs.accent}10`, border: `1px solid ${cs.accent}25` }}
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-lg mt-0.5" style={{ color: cs.accent }}>★</span>
                        <div>
                          <p className="text-xs font-semibold text-cream/50 uppercase tracking-wider mb-0.5">Key Result</p>
                          <p className="text-sm font-semibold" style={{ color: cs.accent }}>{cs.keyResult}</p>
                        </div>
                      </div>
                    </div>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cs.services.map((svc) => (
                        <span
                          key={svc}
                          className="px-2.5 py-0.5 bg-white/5 text-cream/50 text-xs rounded-full border border-white/8"
                        >
                          {svc}
                        </span>
                      ))}
                    </div>

                    {cs.slug !== '#' ? (
                      <Link
                        href={`/us/case-studies/${cs.slug}`}
                        className="btn-gold w-full text-center text-sm py-3 block"
                      >
                        View Case Study
                      </Link>
                    ) : (
                      <Link
                        href="/us/contact"
                        className="btn-outline w-full text-center text-sm py-3 block"
                      >
                        Discuss Similar Project
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-[#16213e] border-y border-gold/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-cream/40 text-sm mb-8 uppercase tracking-wider">What makes every result possible</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { icon: '🏭', title: 'India Manufacturing', desc: 'Premium quality at 60–70% lower cost' },
                { icon: '📦', title: 'Full Brand Identity', desc: 'Logo, packaging, photography — done for you' },
                { icon: '📈', title: 'Performance Marketing', desc: 'Meta, Amazon, TikTok — data-driven ROI' },
                { icon: '🛒', title: 'Marketplace Mastery', desc: 'Amazon, Shopify, Walmart, Etsy, TikTok Shop' },
              ].map((item) => (
                <div key={item.title} className="text-center p-5 rounded-xl border border-gold/10 bg-white/2">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-serif text-sm font-semibold text-cream mb-1">{item.title}</h3>
                  <p className="text-cream/40 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 bg-charcoal relative overflow-hidden">
          <div className="absolute inset-0 pattern-overlay opacity-15" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-3xl" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
            <p className="section-label mb-4">Your Turn</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6 leading-tight">
              Ready to Be Our Next
              <br />
              <span className="gradient-text italic">Success Story?</span>
            </h2>
            <div className="gold-divider mx-auto mb-6" />
            <p className="text-cream/60 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
              Every brand in our portfolio started with a single conversation. Whether you need India manufacturing, a full US brand launch, or performance marketing — we&apos;re ready to build your results page.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/us/contact" className="btn-gold px-10 py-4 text-base">
                Start My Brand Journey
              </Link>
              <Link href="/us/testimonials" className="btn-outline px-10 py-4 text-base">
                Read Client Reviews
              </Link>
            </div>
            <p className="text-cream/30 text-xs mt-6">Free consultation · No commitment · Response within 12 hours</p>
          </div>
        </section>
      </main>
    </>
  );
}
