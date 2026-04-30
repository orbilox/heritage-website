import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TikTok Shop Fashion Brand Agency USA | Heritage Apparels',
  description:
    'Launch your fashion brand on TikTok Shop USA. We handle TikTok Shop setup, creator partnerships, shoppable videos, and full-funnel TikTok Ads management for fashion brands.',
};

const stats = [
  { value: '150M+', label: 'US TikTok Users', sub: 'active monthly' },
  { value: '7 Days', label: 'Shop Setup', sub: 'live & selling' },
  { value: '500+', label: 'Creator Network', sub: 'fashion-focused' },
  { value: '3–8x', label: 'ROAS', sub: 'average client return' },
];

const whyTikTok = [
  {
    icon: '📈',
    title: 'Fastest Growing US Marketplace',
    desc: 'TikTok Shop surpassed $1B in US GMV within its first year. Fashion is the #1 category — early movers are claiming category leadership right now.',
  },
  {
    icon: '👗',
    title: 'Gen Z & Millennial Buyers',
    desc: 'The most fashion-forward, brand-loyal US consumers spend hours daily on TikTok. Your products can reach them organically and through paid — in one place.',
  },
  {
    icon: '🔥',
    title: 'Viral Potential = Organic Sales',
    desc: 'A single viral shoppable video can drive thousands of orders overnight. No other platform offers this organic reach-to-revenue speed for fashion brands.',
  },
];

const services = [
  { icon: '🏪', title: 'TikTok Shop Account Setup', desc: 'Full seller account registration, verification, and storefront configuration — ready to sell in 7 days.' },
  { icon: '📋', title: 'Product Listing & Catalog Upload', desc: 'SEO-optimized product titles, descriptions, images, and pricing uploaded and live on your TikTok Shop.' },
  { icon: '📣', title: 'TikTok Ads (Spark, In-Feed, TopView)', desc: 'Full-funnel paid campaigns — Spark Ads boosting organic content, In-Feed for awareness, TopView for maximum reach.' },
  { icon: '🤝', title: 'Creator & Influencer Outreach', desc: 'We recruit and manage TikTok creators in your niche to produce authentic content that drives shoppable video sales.' },
  { icon: '🎬', title: 'UGC Content Production', desc: 'User-generated-style videos produced by our creator partners — the highest-converting ad format on TikTok.' },
  { icon: '🛍️', title: 'Shoppable Video Strategy', desc: 'End-to-end planning: hooks, scripts, formats, posting cadence, and product tagging for maximum conversion.' },
  { icon: '💼', title: 'Affiliate Creator Program', desc: 'Build a self-sustaining affiliate army — creators earn commission, you get content and sales with zero upfront cost.' },
  { icon: '📊', title: 'Analytics & Reporting', desc: 'Weekly reports on views, clicks, conversions, ROAS, and creator performance — so you always know what\'s working.' },
];

const categories = [
  "Women's Fashion",
  "Men's Streetwear",
  'Activewear',
  'Beauty & Accessories',
  'Sustainable Fashion',
];

const process = [
  { step: '01', title: 'Shop Setup', desc: 'Account registration, product catalog, storefront design, and payment configuration — all done in week one.' },
  { step: '02', title: 'Content Strategy', desc: 'We audit your product, define your TikTok positioning, and build a full content calendar for shoppable videos.' },
  { step: '03', title: 'Creator Launch', desc: 'Our creator network goes live with authentic UGC content. Affiliate links and Spark Ads amplify every post.' },
  { step: '04', title: 'Scale with Ads', desc: 'We identify top-performing content and scale it with TikTok Ads budget — driving ROAS to 3–8x and beyond.' },
];

const packages = [
  {
    name: 'Starter',
    price: '$2,000/mo',
    ideal: 'New brands getting started on TikTok Shop',
    includes: [
      'TikTok Shop account setup',
      'Product catalog upload (up to 50 SKUs)',
      '4 shoppable videos per month',
      'Creator outreach (2 creators)',
      'Basic TikTok Ads management ($500 ad spend)',
      'Monthly performance report',
    ],
  },
  {
    name: 'Growth',
    price: '$4,500/mo',
    ideal: 'Brands ready to scale sales and content',
    includes: [
      'Everything in Starter',
      'Unlimited SKU catalog management',
      '12 shoppable videos per month',
      'Creator outreach (8 creators)',
      'Affiliate creator program setup',
      'Full TikTok Ads management ($2,000 ad spend)',
      'Spark Ads + In-Feed campaigns',
      'Weekly performance reporting',
    ],
    popular: true,
  },
  {
    name: 'Viral',
    price: '$8,000/mo',
    ideal: 'Established brands targeting viral growth',
    includes: [
      'Everything in Growth',
      '30+ shoppable videos per month',
      'Creator network (20+ creators)',
      'TopView & brand takeover ads',
      'UGC production team dedicated',
      'Full-funnel TikTok Ads ($5,000 ad spend)',
      'Influencer gifting program',
      'Dedicated account manager',
      'Daily monitoring & optimization',
    ],
  },
];

const faqs = [
  {
    q: 'How quickly can we launch on TikTok Shop?',
    a: 'We can have your TikTok Shop live and selling within 7 business days. This includes account registration, seller verification, product catalog upload, and initial content setup. Creator outreach and your first shoppable videos go live in week two. Some verification steps depend on TikTok\'s review timelines which are outside our control.',
  },
  {
    q: 'Do you provide creators and influencers for our brand?',
    a: 'Yes. We maintain a network of 500+ US-based TikTok creators across fashion, beauty, activewear, and lifestyle niches. We handle outreach, negotiation, briefing, and content approval — you just review and approve before anything goes live. Our Growth and Viral packages include dedicated creator rosters.',
  },
  {
    q: 'What types of fashion products work best on TikTok Shop?',
    a: 'TikTok Shop performs best for visually striking, affordable-to-mid-range fashion items with strong "before and after" or "try-on" appeal. Women\'s fashion, streetwear, activewear, and accessories are top performers. Products priced between $20–$80 tend to convert best, though premium items can succeed with the right creator strategy.',
  },
  {
    q: 'How is TikTok Shop different from selling on Amazon?',
    a: 'Amazon is intent-based — buyers search for what they already want. TikTok Shop is discovery-based — buyers find products they didn\'t know they needed through entertaining content. TikTok Shop has lower competition right now, organic reach is still significant, and the creator affiliate model lets you scale without large ad budgets. The two channels complement each other perfectly.',
  },
];

export default function TikTokShopFashionAgencyPage() {
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
    name: 'TikTok Shop Fashion Brand Agency USA',
    serviceType: 'TikTok Shop Management & Fashion Marketing',
    provider: {
      '@type': 'Organization',
      name: 'Heritage Apparels',
      url: 'https://www.heritageapparels.com/us',
    },
    description:
      'We launch and manage fashion brands on TikTok Shop USA — account setup, creator partnerships, shoppable videos, and full-funnel TikTok Ads management.',
    areaServed: { '@type': 'Country', name: 'United States' },
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
          <p className="section-label mb-4">TikTok Shop Fashion Agency USA</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Launch Your Fashion Brand
            <br />
            <span className="gradient-text italic">on TikTok Shop USA</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Full-service TikTok Shop management for US fashion brands — from shop setup and creator partnerships to shoppable videos and high-ROAS TikTok Ads.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold">Launch on TikTok Shop →</Link>
            <Link href="/us/services" className="btn-outline">All Services</Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-[#1a1a2e] border-y border-gold/10">
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

      {/* Why TikTok Shop */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">The Opportunity</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Why TikTok Shop for <span className="gradient-text italic">Fashion Brands</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyTikTok.map((item) => (
              <div key={item.title} className="glass-card p-8 text-center group">
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="font-serif text-xl font-bold text-cream mb-3 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What We Do</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Our TikTok Shop <span className="gradient-text italic">Services</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item) => (
              <div key={item.title} className="glass-card p-6 group">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-lg font-bold text-cream mb-2 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fashion Categories */}
      <section className="py-16 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-3">Categories We Specialize In</p>
          <h2 className="font-serif text-3xl font-bold text-cream mb-8">
            TikTok Shop <span className="gradient-text italic">Fashion Categories</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-6 py-3 border border-gold/30 rounded-full text-cream/80 text-sm font-medium hover:border-gold hover:text-gold transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">How It Works</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Our TikTok Shop <span className="gradient-text italic">Process</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <div key={item.step} className="glass-card p-6 text-center relative">
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 right-0 w-full h-px bg-gold/20 translate-x-1/2 z-0" />
                )}
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="font-serif text-xl font-bold gradient-text">{item.step}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-cream mb-2">{item.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-[#1a1a2e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Pricing</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              TikTok Shop <span className="gradient-text italic">Packages</span>
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50">Monthly retainers · Cancel anytime · Ad spend billed separately</p>
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
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Frequently Asked <span className="gradient-text italic">Questions</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="glass-card p-6">
                <h3 className="font-semibold text-cream mb-3 leading-snug">{f.q}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#1a1a2e] border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">
            Ready to Sell on <span className="gradient-text italic">TikTok Shop?</span>
          </h2>
          <p className="text-cream/60 mb-8 leading-relaxed">
            Tell us your fashion brand and products — we will have your TikTok Shop live, stocked, and generating sales within 7 days.
          </p>
          <Link href="/us/contact" className="btn-gold inline-block px-8 py-4">
            Book a Free TikTok Shop Strategy Call
          </Link>
        </div>
      </section>
    </main>
  );
}
