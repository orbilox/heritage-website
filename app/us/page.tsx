import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Heritage Apparels USA | India-Made Fashion Brands for the US Market',
  description:
    'Heritage Apparels helps US entrepreneurs and brands source from India and launch on Amazon.com, Walmart, Etsy, Nordstrom & 30+ US platforms. Factory-direct pricing, full brand building, and marketplace management.',
};

const stats = [
  { value: '500+', label: 'Brands Built', sub: 'across India & USA' },
  { value: '$2.5B+', label: 'Revenue Generated', sub: 'for our clients' },
  { value: '35%', label: 'Cost Saving', sub: 'vs US manufacturing' },
  { value: '45 Days', label: 'To First Sale', sub: 'idea to US marketplace' },
];

const services = [
  {
    icon: '🏭',
    title: 'India Sourcing & Manufacturing',
    desc: 'Private-label apparel, accessories, and lifestyle products manufactured in India at 35–60% lower cost than US production — without sacrificing quality.',
    href: '/us/services',
    badge: 'Cost Advantage',
  },
  {
    icon: '🛒',
    title: 'US Marketplace Onboarding',
    desc: 'We get your brand live on Amazon.com, Walmart Marketplace, Etsy, Nordstrom, Target+, and 30+ US platforms — fully compliant, catalog-ready, and ad-optimized.',
    href: '/us/services/marketplace-onboarding',
    badge: '30+ Platforms',
  },
  {
    icon: '🚀',
    title: 'US Brand Launch',
    desc: 'End-to-end brand building for the American market — naming, visual identity, packaging, D2C Shopify store, marketplace onboarding, and launch campaign.',
    href: '/us/services',
    badge: null,
  },
  {
    icon: '📈',
    title: 'US Performance Marketing',
    desc: 'Revenue-generating paid campaigns on Meta, Google, TikTok, and Amazon DSP. We target American consumers and deliver profitable ROAS from month one.',
    href: '/us/services',
    badge: '4–8x ROAS',
  },
  {
    icon: '📸',
    title: 'US-Format Product Photography',
    desc: 'Amazon-compliant, Walmart-ready, and Shopify-optimized product photography with white backgrounds, lifestyle images, and infographics tailored for US buyers.',
    href: '/us/services',
    badge: null,
  },
  {
    icon: '📋',
    title: 'US Compliance & Certifications',
    desc: 'We ensure your products meet CPSC, FCC, FDA, and ASTM requirements — with proper labeling, country-of-origin marking, and import documentation.',
    href: '/us/services',
    badge: 'USA Compliant',
  },
];

const whyUs = [
  { icon: '💰', title: 'Factory-Direct Pricing', desc: 'We own our manufacturing facility. You pay factory prices, not middleman markups — saving 35–60% vs US/EU manufacturing.' },
  { icon: '🇺🇸', title: 'US Market Expertise', desc: 'We understand American consumer preferences, sizing standards, marketplace compliance, and what drives US purchase decisions.' },
  { icon: '⚡', title: '45-Day Launch', desc: 'From your product idea to a live US marketplace listing — we complete manufacturing, photography, listing, and launch in 45 days.' },
  { icon: '🌐', title: '30+ US Platforms', desc: 'Amazon, Walmart, Etsy, Nordstrom, Target+, eBay, Sephora, Ulta, Faire, and 21 more — we onboard and manage them all.' },
  { icon: '📊', title: 'Data-Driven Growth', desc: 'Weekly performance reports, ROAS tracking, inventory forecasting, and marketplace ad optimization — everything in one dashboard.' },
  { icon: '🔒', title: 'Full IP Protection', desc: "Trademark registration, brand registry on Amazon and Walmart, and IP enforcement — your brand is protected from day one." },
];

const processSteps = [
  { step: '01', icon: '💡', title: 'Discovery Call', desc: 'We learn your product, target market, budget, and US market goals in a 30-minute strategy call.' },
  { step: '02', icon: '🏭', title: 'India Sourcing', desc: 'We source and manufacture your collection at our factory with strict US-compliance QA checks.' },
  { step: '03', icon: '📸', title: 'Content & Catalog', desc: 'US-format photography, A+ content, and listing copy optimized for American buyers.' },
  { step: '04', icon: '🛒', title: 'Marketplace Launch', desc: 'Go live on Amazon, Walmart, Etsy, and your D2C Shopify store with launch ads driving first sales.' },
  { step: '05', icon: '📈', title: 'Scale & Grow', desc: 'Ongoing performance marketing, marketplace management, and inventory scaling as you grow.' },
];

const usaMarketplaces = ['Amazon.com', 'Walmart', 'Etsy', 'Nordstrom', 'eBay', 'Target+', 'Sephora', 'TikTok Shop'];

export default function USHomePage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="py-24 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full mb-6">
            <span className="text-lg">🇺🇸</span>
            <span className="text-blue-300 text-sm font-medium">Serving US Brands & Entrepreneurs</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            India-Made. USA-Ready.
            <br />
            <span className="gradient-text italic">Built to Sell.</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-3xl mx-auto">
            We manufacture your fashion brand in India at factory-direct prices, then launch it on <strong className="text-gold">Amazon, Walmart, Etsy, Nordstrom</strong> and 30+ US marketplaces — fully compliant, catalog-ready, and ad-optimized for American consumers.
          </p>

          {/* Marketplace ticker */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {usaMarketplaces.map((m) => (
              <span key={m} className="px-3 py-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-sm font-medium">
                {m}
              </span>
            ))}
            <span className="text-cream/40 text-sm">+ 27 more</span>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold">Book a Free Strategy Call →</Link>
            <Link href="/us/services" className="btn-outline">See All Services</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
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
            <p className="section-label mb-4">What We Do For US Brands</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Everything You Need to <span className="gradient-text italic">Win in the US Market</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="glass-card p-7 group hover:border-gold/30 transition-all relative block">
                {s.badge && (
                  <span className="absolute top-5 right-5 px-2.5 py-0.5 bg-gold/15 border border-gold/30 rounded-full text-gold text-xs font-bold">
                    {s.badge}
                  </span>
                )}
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-serif text-xl font-bold text-cream mb-2 group-hover:text-gold transition-colors">{s.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-4 text-gold text-sm font-medium group-hover:underline">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-[#0d1b3e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <p className="section-label mb-4">The Heritage Advantage</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Why US Brands <span className="gradient-text italic">Choose Us</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="glass-card p-6 group">
                <div className="text-3xl mb-4">{w.icon}</div>
                <h3 className="font-serif text-lg font-bold text-cream mb-2 group-hover:text-gold transition-colors">{w.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">How It Works</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              From Idea to <span className="gradient-text italic">US Bestseller in 45 Days</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((p) => (
              <div key={p.step} className="glass-card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-3">
                  <span className="font-serif text-gold font-bold">{p.step}</span>
                </div>
                <div className="text-2xl mb-2">{p.icon}</div>
                <h3 className="font-serif text-base font-bold text-cream mb-1">{p.title}</h3>
                <p className="text-cream/50 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India Advantage */}
      <section className="py-20 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-4">The India Advantage</p>
              <h2 className="font-serif text-4xl font-bold text-cream mb-6 leading-tight">
                Source from India.
                <br />
                <span className="gradient-text italic">Sell Anywhere in the World.</span>
              </h2>
              <div className="gold-divider mb-8" style={{ margin: '24px 0' }} />
              <p className="text-cream/60 text-lg leading-relaxed mb-6">
                India is the world&apos;s second-largest textile producer. Our factory-direct access means you get premium quality clothing and accessories at 35–60% lower cost than US or European manufacturing — with faster sampling, flexible MOQs, and full export documentation handled by us.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: '💰', label: '35–60% Cost Saving', desc: 'vs US/EU manufacturing' },
                  { icon: '⚡', label: 'Low MOQs', desc: 'Start from 50 units per style' },
                  { icon: '🏷️', label: 'Private Label Ready', desc: 'Your brand, our factory' },
                  { icon: '🛃', label: 'Export Docs', desc: 'Full customs & compliance' },
                ].map((item) => (
                  <div key={item.label} className="glass-card p-4">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-cream font-semibold text-sm mb-0.5">{item.label}</div>
                    <div className="text-cream/50 text-xs">{item.desc}</div>
                  </div>
                ))}
              </div>
              <Link href="/us/contact" className="btn-gold inline-block">Get a Free Quote</Link>
            </div>
            <div className="space-y-4">
              <div className="glass-card p-8 border-l-4 border-gold">
                <div className="text-4xl mb-3">🏭</div>
                <h3 className="font-serif text-2xl font-bold text-cream mb-2">Own Clothing Factory</h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  No middlemen. We manufacture directly — fabric sourcing, cutting, stitching, finishing, QA, and US-compliant labeling. Factory-direct pricing, passed straight to you.
                </p>
              </div>
              <div className="glass-card p-8 border-l-4 border-blue-500">
                <div className="text-4xl mb-3">🇺🇸</div>
                <h3 className="font-serif text-2xl font-bold text-cream mb-2">US Market Expertise</h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  From CPSC compliance and US sizing to Amazon US listing best practices and American consumer psychology — we bridge the gap between Indian manufacturing and US retail success.
                </p>
              </div>
              <div className="bg-gold/10 border border-gold/20 rounded-xl p-6">
                <div className="font-serif text-3xl font-bold gradient-text mb-1">$0 Upfront Risk</div>
                <div className="text-cream/60 text-sm">Start with a sampling order. We produce, photograph, and list — you pay for production only after sample approval.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-cream mb-4">
            Ready to Launch Your Brand <span className="gradient-text italic">in the US?</span>
          </h2>
          <p className="text-cream/60 text-lg mb-10 leading-relaxed">
            Book a free 30-minute strategy call. We&apos;ll walk you through India sourcing costs, the right US marketplaces for your category, and a go-to-market plan with realistic timelines.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/us/contact" className="btn-gold px-10 py-4 text-base">
              Book Free Strategy Call →
            </Link>
            <Link href="/us/services/marketplace-onboarding" className="btn-outline px-8 py-4 text-base">
              See US Marketplaces
            </Link>
          </div>
          <p className="text-cream/30 text-sm mt-6">No obligations · Response within 12 hours · EST timezone support</p>
        </div>
      </section>
    </main>
  );
}
