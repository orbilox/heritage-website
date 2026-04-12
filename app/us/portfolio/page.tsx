'use client';

import Link from 'next/link';
import { useState } from 'react';

const categories = [
  'All',
  'Manufacturing & Sourcing',
  'US Brand Launch',
  'Performance Marketing',
  'Brand Strategy',
  'Product Photography',
  'Digital Cataloging',
  'Social Media & Content',
  'Marketplace Onboarding',
  'US Compliance',
];

const patternStyles: Record<string, string> = {
  diamonds: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3C/svg%3E")`,
  grid: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 30 0 L 0 0 0 30' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3C/svg%3E")`,
  dots: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.2' fill='rgba(255,255,255,0.08)'/%3E%3C/svg%3E")`,
  lines: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3C/svg%3E")`,
  waves: `url("data:image/svg+xml,%3Csvg width='60' height='20' viewBox='0 0 60 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q15 0 30 10 Q45 20 60 10' fill='none' stroke='rgba(255,255,255,0.07)' stroke-width='1'/%3E%3C/svg%3E")`,
  hexagons: `url("data:image/svg+xml,%3Csvg width='50' height='43' viewBox='0 0 50 43' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='25,1 49,14 49,29 25,42 1,29 1,14' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3C/svg%3E")`,
  circles: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='18' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3C/svg%3E")`,
  cross: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 5 V25 M5 15 H25' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3C/svg%3E")`,
};

const portfolioItems = [
  {
    id: 1, title: 'BohoBliss Apparel Launch', brand: 'BohoBliss (D2C USA)',
    category: 'US Brand Launch',
    description: 'Full US brand build — India manufacturing, brand identity, Shopify USA store, Amazon.com and Etsy onboarding, and Meta launch campaign. Live in 42 days.',
    result: '$120K revenue in Month 1', tags: ['Brand Launch', 'Amazon USA', 'Etsy'],
    accent: '#f59e0b', bg: 'linear-gradient(135deg, #1a0e00 0%, #3d2200 50%, #5c3600 100%)',
    pattern: 'hexagons', icon: '🚀',
    stat1: '42 Days', stat1label: 'To First US Sale', stat2: '$120K', stat2label: 'Month 1 Revenue',
  },
  {
    id: 2, title: 'PureLeaf Wellness Brand', brand: 'PureLeaf (D2C USA)',
    category: 'US Brand Launch',
    description: 'Zero-to-launch for a wellness apparel brand targeting US yoga and athleisure consumers. India manufacturing, FDA compliance, Shopify + Amazon setup.',
    result: '4.2x ROAS in 45 days', tags: ['Wellness', 'Athleisure', 'Shopify'],
    accent: '#4ade80', bg: 'linear-gradient(135deg, #021a08 0%, #073d14 50%, #0d5c1e 100%)',
    pattern: 'waves', icon: '🌿',
    stat1: '45 Days', stat1label: 'To Launch', stat2: '4.2x', stat2label: 'ROAS',
  },
  {
    id: 3, title: 'Private Label Activewear Run', brand: 'FlexForm USA',
    category: 'Manufacturing & Sourcing',
    description: 'Manufactured 800 units of private-label activewear at our India factory — fabric sourcing, OEM production, US-compliant CPSC testing, and FBA-ready packaging.',
    result: '42% cost saving vs US mfg', tags: ['Activewear', 'Private Label', 'CPSC'],
    accent: '#22d3ee', bg: 'linear-gradient(135deg, #051520 0%, #082540 50%, #0e3a5c 100%)',
    pattern: 'grid', icon: '🏭',
    stat1: '800 Units', stat1label: 'Manufactured', stat2: '42%', stat2label: 'Cost Saving',
  },
  {
    id: 4, title: 'Leather Bag Collection', brand: 'Harlow & Co. (USA)',
    category: 'Manufacturing & Sourcing',
    description: 'Sourced and quality-controlled 300 premium leather handbags from our Kolkata network — custom hardware, US sizing, branded packaging, and export documentation.',
    result: '$0 duty surprises', tags: ['Leather', 'Handbags', 'Export'],
    accent: '#d97706', bg: 'linear-gradient(135deg, #1c1200 0%, #3d2800 50%, #5c3c00 100%)',
    pattern: 'cross', icon: '👜',
    stat1: '300 Units', stat1label: 'Delivered', stat2: '$0', stat2label: 'Duty Surprises',
  },
  {
    id: 5, title: 'Meta & TikTok Ads Campaign', brand: 'UrbanEthnics USA',
    category: 'Performance Marketing',
    description: 'Full-funnel US paid campaign on Meta and TikTok — 25+ creatives, US audience segmentation, daily optimization. $18K ad spend managed over 4 weeks.',
    result: '6.8x ROAS on $18K spend', tags: ['Meta Ads', 'TikTok Ads', 'ROAS'],
    accent: '#f97316', bg: 'linear-gradient(135deg, #2d0e00 0%, #5c1c00 50%, #8b2a00 100%)',
    pattern: 'dots', icon: '📈',
    stat1: '6.8x', stat1label: 'ROAS', stat2: '$18K', stat2label: 'Ad Spend Managed',
  },
  {
    id: 6, title: 'Amazon DSP Scale-Up', brand: 'NovaThreads (USA)',
    category: 'Performance Marketing',
    description: 'Rebuilt Amazon Sponsored Products, launched DSP retargeting, and restructured campaigns by margin tier. ACoS reduced from 38% to 17% in 60 days.',
    result: 'ACoS from 38% → 17%', tags: ['Amazon DSP', 'ACoS', 'Scale'],
    accent: '#34d399', bg: 'linear-gradient(135deg, #021a10 0%, #073d24 50%, #0d5c38 100%)',
    pattern: 'lines', icon: '📦',
    stat1: '17% ACoS', stat1label: 'Down from 38%', stat2: '3.5x', stat2label: 'Revenue Growth',
  },
  {
    id: 7, title: 'US Market Brand Identity', brand: 'Soleil Collective (USA)',
    category: 'Brand Strategy',
    description: 'Complete US-market visual identity — logo, palette, retail packaging for Target, photography direction, Amazon Brand Store, and full brand guidelines.',
    result: 'Onboarded to Nordstrom', tags: ['Identity', 'Nordstrom', 'Packaging'],
    accent: '#c084fc', bg: 'linear-gradient(135deg, #1a0030 0%, #3d0060 50%, #5c0090 100%)',
    pattern: 'diamonds', icon: '🎯',
    stat1: 'Nordstrom', stat1label: 'Onboarded', stat2: '2 Weeks', stat2label: 'Delivered',
  },
  {
    id: 8, title: 'Wellness Brand Repositioning', brand: 'RootCraft USA',
    category: 'Brand Strategy',
    description: 'Full brand audit and repositioning for a wellness accessories brand targeting premium US millennial buyers. New visual system, US retail packaging, and Sephora pitch deck.',
    result: '+35% AOV increase', tags: ['Repositioning', 'Sephora', 'Wellness'],
    accent: '#60a5fa', bg: 'linear-gradient(135deg, #020d1a 0%, #051e3d 50%, #08305c 100%)',
    pattern: 'hexagons', icon: '✏️',
    stat1: '+35%', stat1label: 'Avg Order Value', stat2: '3 Weeks', stat2label: 'Delivered',
  },
  {
    id: 9, title: 'Amazon-Ready Apparel Shoot', brand: 'DriftWear USA',
    category: 'Product Photography',
    description: 'Amazon-compliant product photography for 180 SKUs — pure white backgrounds, lifestyle shots, and infographic images. All 7 Amazon listing slots filled per SKU.',
    result: '+28% listing CTR', tags: ['Amazon', 'White Background', 'Lifestyle'],
    accent: '#fbbf24', bg: 'linear-gradient(135deg, #1a1400 0%, #3d3000 50%, #5c4800 100%)',
    pattern: 'grid', icon: '📸',
    stat1: '180 SKUs', stat1label: 'Shot & Delivered', stat2: '+28%', stat2label: 'Listing CTR',
  },
  {
    id: 10, title: 'Etsy Shop Lifestyle Shoot', brand: 'ThreadStory (USA)',
    category: 'Product Photography',
    description: 'Editorial lifestyle photography for an Etsy handmade apparel shop — flat lays, on-model shots, and detail close-ups styled for Pinterest and Instagram Shopping.',
    result: '3x Etsy conversion rate', tags: ['Etsy', 'Lifestyle', 'Flat Lay'],
    accent: '#a78bfa', bg: 'linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #3d1a80 100%)',
    pattern: 'lines', icon: '🎨',
    stat1: '3x', stat1label: 'Etsy Conversion', stat2: '48hrs', stat2label: 'Delivery',
  },
  {
    id: 11, title: 'Walmart Seller Catalog', brand: 'PacificGear USA',
    category: 'Digital Cataloging',
    description: '1,200 SKUs catalogued for Walmart Marketplace launch — white background, multiple angles, Walmart-spec image sizing, background removal, and color correction.',
    result: '1,200 SKUs in 5 days', tags: ['Walmart', 'Volume', 'Catalog'],
    accent: '#60a5fa', bg: 'linear-gradient(135deg, #0a1628 0%, #0f2444 50%, #1a3a6e 100%)',
    pattern: 'dots', icon: '📂',
    stat1: '1,200 SKUs', stat1label: 'Catalogued', stat2: '5 Days', stat2label: 'Delivered',
  },
  {
    id: 12, title: 'Amazon FBA Mega Catalog', brand: 'SunState Apparel',
    category: 'Digital Cataloging',
    description: '3,500 SKU catalog for Amazon FBA launch — all primary images, secondary angles, and lifestyle images optimized for US apparel category search ranking.',
    result: '3,500 SKUs in 12 days', tags: ['Amazon FBA', 'Scale', 'Apparel'],
    accent: '#f472b6', bg: 'linear-gradient(135deg, #2d002a 0%, #5c005a 50%, #800070 100%)',
    pattern: 'waves', icon: '🛒',
    stat1: '3,500 SKUs', stat1label: 'Shot', stat2: '12 Days', stat2label: 'End-to-End',
  },
  {
    id: 13, title: 'TikTok Shop Launch Content', brand: 'GlowCraft USA',
    category: 'Social Media & Content',
    description: '20 TikTok videos for a US beauty accessories brand — UGC-style, trend-led, and algorithm-optimized. Generated 1.8M organic views in first 30 days.',
    result: '1.8M TikTok views', tags: ['TikTok Shop', 'UGC', 'Beauty'],
    accent: '#4ade80', bg: 'linear-gradient(135deg, #062019 0%, #0d3d2e 50%, #135740 100%)',
    pattern: 'hexagons', icon: '🎬',
    stat1: '1.8M', stat1label: 'TikTok Views', stat2: '20 Videos', stat2label: 'In 30 Days',
  },
  {
    id: 14, title: 'Instagram Reels US Retainer', brand: 'CanyonCraft Apparel',
    category: 'Social Media & Content',
    description: 'Monthly Instagram Reels retainer — 16 videos/month, US content calendar, trending audio, community management. Grew US followers by 85K in 3 months.',
    result: '85K US followers gained', tags: ['Instagram', 'Reels', 'Monthly'],
    accent: '#fb923c', bg: 'linear-gradient(135deg, #2d1500 0%, #5c2e00 50%, #8b4500 100%)',
    pattern: 'circles', icon: '📱',
    stat1: '85K', stat1label: 'New Followers', stat2: '3 Months', stat2label: 'Timeline',
  },
  {
    id: 15, title: 'Amazon + Etsy US Onboarding', brand: 'Desi Luxe USA',
    category: 'Marketplace Onboarding',
    description: 'Onboarded an India-origin fashion brand onto Amazon.com, Etsy, and Walmart Marketplace — brand registry, A+ content, listing optimization, and launch ads.',
    result: '$45K sales in Month 2', tags: ['Amazon', 'Etsy', 'Walmart'],
    accent: '#e879f9', bg: 'linear-gradient(135deg, #25003d 0%, #4a0075 50%, #6a00a8 100%)',
    pattern: 'grid', icon: '🌐',
    stat1: '$45K', stat1label: 'Month 2 Sales', stat2: '3 Platforms', stat2label: 'Launched',
  },
  {
    id: 16, title: 'CPSC & Prop 65 Compliance', brand: 'SafeStitch Kids USA',
    category: 'US Compliance',
    description: 'Full CPSC and California Prop 65 compliance for a children\'s apparel brand — testing coordination, label redesign, HS code classification, and customs documentation.',
    result: '0 customs delays', tags: ['CPSC', 'Prop 65', 'Childrens Wear'],
    accent: '#f59e0b', bg: 'linear-gradient(135deg, #1a1000 0%, #3d2600 50%, #5c3c00 100%)',
    pattern: 'cross', icon: '🛃',
    stat1: '0 Delays', stat1label: 'Customs Clearance', stat2: '7 Days', stat2label: 'Audit Delivered',
  },
];

const stats = [
  { value: '500+', label: 'Brands Served', sub: 'India & USA combined' },
  { value: '$2.5B+', label: 'Client Revenue', sub: 'generated globally' },
  { value: '35+', label: 'US Platforms', sub: 'we onboard & manage' },
  { value: '9', label: 'Service Verticals', sub: 'end-to-end US coverage' },
];

export default function USPortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">🇺🇸 US Portfolio</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Real US Brands.
            <br />
            <span className="gradient-text italic">Real Results.</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-3xl mx-auto">
            Case studies across all 9 US service verticals — India manufacturing, brand launches, performance marketing, marketplace onboarding, and more. Every project backed by measurable outcomes.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-charcoal border-b border-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
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

      {/* Filter + Grid */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gold text-charcoal font-semibold'
                    : 'border border-gold/20 text-cream/60 hover:border-gold/50 hover:text-cream'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="text-cream/30 text-sm text-center mb-8">
            Showing {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' ? ` in ${activeCategory}` : ' across all US services'}
          </p>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className="relative w-full rounded-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ background: item.bg, minHeight: '260px' }}
                >
                  <div className="absolute inset-0" style={{ backgroundImage: patternStyles[item.pattern] }} />
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }} />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full backdrop-blur-sm border" style={{ color: item.accent, borderColor: `${item.accent}40`, background: `${item.accent}18` }}>
                      {item.category}
                    </span>
                  </div>
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl transition-all duration-500 select-none"
                    style={{ opacity: hoveredId === item.id ? 0.06 : 0.16, transform: hoveredId === item.id ? 'translate(-50%, -50%) scale(1.4)' : 'translate(-50%, -50%) scale(1)' }}
                  >
                    {item.icon}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 transition-opacity duration-300" style={{ opacity: hoveredId === item.id ? 0 : 1 }}>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4 backdrop-blur-sm" style={{ background: `${item.accent}22`, color: item.accent, border: `1px solid ${item.accent}40` }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.accent }} />
                      {item.result}
                    </div>
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="font-bold text-lg leading-none" style={{ color: item.accent }}>{item.stat1}</div>
                        <div className="text-white/40 text-xs mt-0.5">{item.stat1label}</div>
                      </div>
                      <div className="w-px h-8 bg-white/10" />
                      <div>
                        <div className="font-bold text-lg leading-none" style={{ color: item.accent }}>{item.stat2}</div>
                        <div className="text-white/40 text-xs mt-0.5">{item.stat2label}</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to top, rgba(8,8,18,0.97) 0%, rgba(8,8,18,0.55) 55%, transparent 100%)', opacity: hoveredId === item.id ? 1 : 0 }}
                  >
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold mb-2 w-fit" style={{ background: `${item.accent}22`, color: item.accent, border: `1px solid ${item.accent}40` }}>
                      {item.result}
                    </div>
                    <h3 className="font-serif text-base font-bold text-white mb-0.5">{item.title}</h3>
                    <p className="text-sm font-medium mb-2" style={{ color: item.accent }}>{item.brand}</p>
                    <p className="text-white/60 text-xs leading-relaxed mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-xs rounded-full" style={{ background: `${item.accent}18`, color: item.accent, border: `1px solid ${item.accent}30` }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="pt-3 px-1 pb-2">
                  <h3 className="font-serif text-sm font-semibold text-cream group-hover:text-gold transition-colors leading-snug">{item.title}</h3>
                  <p className="text-cream/40 text-xs mt-0.5">{item.brand}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d1b3e] border-t border-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">
            Ready to Be Our Next <span className="gradient-text italic">US Success Story?</span>
          </h2>
          <p className="text-cream/60 mb-8 text-lg leading-relaxed">
            Every brand in our portfolio was once a new client conversation. Whether you need India manufacturing, a US brand launch, or marketplace management — let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold px-8 py-4">Start a US Project</Link>
            <Link href="/us/pricing" className="btn-outline px-8 py-4">View US Pricing</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
