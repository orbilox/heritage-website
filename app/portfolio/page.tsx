'use client';

import Link from 'next/link';
import { useState } from 'react';

const categories = [
  'All',
  'Manufacturing & Sourcing',
  'Brand Launch',
  'Performance Marketing',
  'Brand Strategy',
  'Fashion Shoot',
  'Digital Catalog',
  'E-commerce Setup',
  'Social Media & Reels',
  'Marketplace Management',
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
  // ── MANUFACTURING & SOURCING (2 items) ──
  {
    id: 1,
    title: 'Private Label Kurta Collection',
    brand: 'Zara India (OEM Partner)',
    category: 'Manufacturing & Sourcing',
    description: 'Designed and manufactured a 120-piece private label kurta range — fabric sourcing from Surat, cutting, stitching, embroidery, and QA — all in-house within 22 days.',
    result: '22-day factory-to-shipment',
    tags: ['Private Label', 'Kurtas', 'OEM'],
    accent: '#f59e0b',
    bg: 'linear-gradient(135deg, #1a0e00 0%, #3d2200 50%, #5c3600 100%)',
    pattern: 'diamonds',
    icon: '🏭',
    stat1: '120 Pcs', stat1label: 'Produced',
    stat2: '22 Days', stat2label: 'End-to-End',
  },
  {
    id: 2,
    title: 'Leather Handbag Sourcing',
    brand: 'Miraggio (D2C)',
    category: 'Manufacturing & Sourcing',
    description: 'Sourced and quality-controlled a 400-piece premium leather handbag line from our Kolkata factory network. Custom hardware, lining, and branded packaging included.',
    result: '400 units, zero rejections',
    tags: ['Leather', 'Handbags', 'QA'],
    accent: '#d97706',
    bg: 'linear-gradient(135deg, #1c1200 0%, #3d2800 50%, #5c3c00 100%)',
    pattern: 'cross',
    icon: '👜',
    stat1: '400 Units', stat1label: 'Delivered',
    stat2: '0 Rejects', stat2label: 'QA Pass Rate',
  },

  // ── BRAND LAUNCH (3 items) ──
  {
    id: 3,
    title: 'FlexCore Athleisure Launch',
    brand: 'FlexCore (D2C)',
    category: 'Brand Launch',
    description: 'Zero-to-launch for a D2C athleisure brand — naming, logo, packaging, 800 SKU catalog, Shopify store, marketplace onboarding, and Meta launch campaign. Live in 28 days.',
    result: '₹80L revenue in Month 1',
    tags: ['Athleisure', 'D2C', 'Full-Build'],
    accent: '#22d3ee',
    bg: 'linear-gradient(135deg, #051520 0%, #082540 50%, #0e3a5c 100%)',
    pattern: 'hexagons',
    icon: '🚀',
    stat1: '28 Days', stat1label: 'To Launch',
    stat2: '₹80L', stat2label: 'Month 1 Revenue',
  },
  {
    id: 4,
    title: 'Aarna Jewels Brand Build',
    brand: 'Aarna Jewels (D2C)',
    category: 'Brand Launch',
    description: 'Complete brand creation — name, identity, jewellery photography, Shopify store, Myntra onboarding, and performance ads. From concept to first sale in 35 days.',
    result: '6x ROAS in 60 days',
    tags: ['Jewellery', 'D2C', 'Identity'],
    accent: '#fbbf24',
    bg: 'linear-gradient(135deg, #1a1400 0%, #3d3000 50%, #5c4800 100%)',
    pattern: 'grid',
    icon: '💍',
    stat1: '35 Days', stat1label: 'To First Sale',
    stat2: '6x ROAS', stat2label: 'Within 60 Days',
  },
  {
    id: 5,
    title: 'TerraWear Sustainable Fashion',
    brand: 'TerraWear (D2C)',
    category: 'Brand Launch',
    description: 'Launched a sustainable D2C fashion label from scratch — sourcing organic fabrics, brand identity, complete catalog, D2C website, and influencer seed campaign.',
    result: '10K orders in 90 days',
    tags: ['Sustainable', 'D2C', 'Organic'],
    accent: '#4ade80',
    bg: 'linear-gradient(135deg, #021a08 0%, #073d14 50%, #0d5c1e 100%)',
    pattern: 'waves',
    icon: '🌿',
    stat1: '10K Orders', stat1label: 'In 90 Days',
    stat2: '₹1.2Cr', stat2label: 'GMV Generated',
  },

  // ── PERFORMANCE MARKETING (2 items) ──
  {
    id: 6,
    title: 'Diwali Meta Ads Blitz',
    brand: 'Libas',
    category: 'Performance Marketing',
    description: 'Full-funnel Diwali Meta campaign with 40+ creatives, audience segmentation across 8 interests, daily optimization. ₹25L ad spend managed over 3 weeks.',
    result: '7.2x ROAS on ₹25L spend',
    tags: ['Meta Ads', 'Festive', 'ROAS'],
    accent: '#f97316',
    bg: 'linear-gradient(135deg, #2d0e00 0%, #5c1c00 50%, #8b2a00 100%)',
    pattern: 'dots',
    icon: '📈',
    stat1: '7.2x', stat1label: 'ROAS',
    stat2: '₹25L', stat2label: 'Ad Spend',
  },
  {
    id: 7,
    title: 'Google Shopping Scale-Up',
    brand: 'Aurelia',
    category: 'Performance Marketing',
    description: 'Rebuilt Google Shopping feed from scratch, restructured campaigns by category and margin, implemented smart bidding. Scaled from ₹3L to ₹18L/month spend with positive ROAS.',
    result: '5.4x ROAS, 6x scale',
    tags: ['Google Ads', 'Shopping', 'Scale'],
    accent: '#34d399',
    bg: 'linear-gradient(135deg, #021a10 0%, #073d24 50%, #0d5c38 100%)',
    pattern: 'lines',
    icon: '🔍',
    stat1: '5.4x', stat1label: 'ROAS',
    stat2: '6x', stat2label: 'Spend Scale',
  },

  // ── BRAND STRATEGY (2 items) ──
  {
    id: 8,
    title: 'Ethnic Luxe Repositioning',
    brand: 'Ritu Kumar',
    category: 'Brand Strategy',
    description: 'Full brand audit, competitor mapping, and repositioning strategy for a heritage ethnic brand targeting premium millennial buyers. New visual system, photography direction, and brand guidelines.',
    result: '28% AOV increase',
    tags: ['Repositioning', 'Premium', 'Guidelines'],
    accent: '#c084fc',
    bg: 'linear-gradient(135deg, #1a0030 0%, #3d0060 50%, #5c0090 100%)',
    pattern: 'diamonds',
    icon: '🎯',
    stat1: '+28%', stat1label: 'Avg Order Value',
    stat2: '3 Weeks', stat2label: 'Delivered In',
  },
  {
    id: 9,
    title: 'Men\'s Ethnic Identity System',
    brand: 'Kisah (D2C)',
    category: 'Brand Strategy',
    description: 'Created a complete visual identity for a men\'s ethnic D2C brand — logo, colour palette, packaging design, photography style guide, and brand tone of voice document.',
    result: 'Brand live on 4 platforms',
    tags: ['Identity', 'Menswear', 'Ethnic'],
    accent: '#60a5fa',
    bg: 'linear-gradient(135deg, #020d1a 0%, #051e3d 50%, #08305c 100%)',
    pattern: 'hexagons',
    icon: '✏️',
    stat1: '4 Platforms', stat1label: 'Launched On',
    stat2: '₹85K', stat2label: 'Identity Package',
  },

  // ── FASHION SHOOT (3 items) ──
  {
    id: 10,
    title: 'Silk Heritage Collection',
    brand: 'Raga by Tanishq',
    category: 'Fashion Shoot',
    description: 'Luxury silk saree editorial shot at a heritage palace in Rajasthan. 3-day production, 8 models, creative direction by our senior fashion director.',
    result: '340% sales uplift post-shoot',
    tags: ['Saree', 'Heritage', 'Luxury'],
    accent: '#c9a84c',
    bg: 'linear-gradient(135deg, #2d1a00 0%, #5c3a10 50%, #8b5e1a 100%)',
    pattern: 'diamonds',
    icon: '👗',
    stat1: '3 Days', stat1label: 'Production',
    stat2: '+340%', stat2label: 'Sales Uplift',
  },
  {
    id: 11,
    title: 'Luxury Handbag Editorial',
    brand: 'Da Milano',
    category: 'Fashion Shoot',
    description: 'Editorial-style luxury handbag shoot for Vogue India print feature. 3 complete looks, studio and outdoor locations, shot and retouched to global print standards.',
    result: 'Vogue India feature',
    tags: ['Luxury', 'Accessories', 'Editorial'],
    accent: '#a78bfa',
    bg: 'linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #3d1a80 100%)',
    pattern: 'lines',
    icon: '👜',
    stat1: 'Vogue India', stat1label: 'Featured In',
    stat2: '3 Looks', stat2label: 'Editorial Sets',
  },
  {
    id: 12,
    title: 'Bridal Couture Campaign',
    brand: 'Mohey by Manyavar',
    category: 'Fashion Shoot',
    description: 'Full bridal campaign shoot — 12 models, 5 lehenga collections, heritage haveli location in Jaipur. Used for pan-India OOH, digital, and in-store.',
    result: '₹8Cr campaign coverage',
    tags: ['Bridal', 'Couture', 'Campaign'],
    accent: '#fb7185',
    bg: 'linear-gradient(135deg, #2d0014 0%, #5c0028 50%, #8b003c 100%)',
    pattern: 'circles',
    icon: '👰',
    stat1: '12 Models', stat1label: 'Cast',
    stat2: '₹8Cr', stat2label: 'Campaign Value',
  },

  // ── DIGITAL CATALOG (2 items) ──
  {
    id: 13,
    title: 'Urban Streetwear Catalog',
    brand: 'FabIndia Urban',
    category: 'Digital Catalog',
    description: '2,400 SKUs catalogued for Myntra launch — consistent lighting, 4 angles per SKU, white background and lifestyle variants. All delivered in 8 days.',
    result: '2,400 SKUs in 8 days',
    tags: ['Scale', 'Myntra', 'Streetwear'],
    accent: '#60a5fa',
    bg: 'linear-gradient(135deg, #0a1628 0%, #0f2444 50%, #1a3a6e 100%)',
    pattern: 'grid',
    icon: '📂',
    stat1: '2,400 SKUs', stat1label: 'Catalogued',
    stat2: '8 Days', stat2label: 'Delivered',
  },
  {
    id: 14,
    title: 'Ethnic Wear Mega Catalog',
    brand: 'Biba',
    category: 'Digital Catalog',
    description: 'Seasonal catalog of 4,500 ethnic wear SKUs — kurtas, dupattas, sets, and co-ords. Fully Myntra, Nykaa Fashion, and AJIO compliant image specs.',
    result: '4,500 SKUs in 15 days',
    tags: ['Ethnic', 'Volume', 'Nykaa'],
    accent: '#f472b6',
    bg: 'linear-gradient(135deg, #2d002a 0%, #5c005a 50%, #800070 100%)',
    pattern: 'dots',
    icon: '🥻',
    stat1: '4,500 SKUs', stat1label: 'Shot',
    stat2: '15 Days', stat2label: 'Delivered',
  },

  // ── E-COMMERCE SETUP (2 items) ──
  {
    id: 15,
    title: 'D2C Shopify Store Build',
    brand: 'The Label Life',
    category: 'E-commerce Setup',
    description: 'Full Shopify store design and development — product pages, collection pages, checkout optimisation, upsell flows, email automation, and SEO setup. Launched in 12 days.',
    result: '3.8% store conversion rate',
    tags: ['Shopify', 'CRO', 'D2C'],
    accent: '#34d399',
    bg: 'linear-gradient(135deg, #041a10 0%, #083d24 50%, #0d5c38 100%)',
    pattern: 'hexagons',
    icon: '🛍️',
    stat1: '3.8%', stat1label: 'Conversion Rate',
    stat2: '12 Days', stat2label: 'Live In',
  },
  {
    id: 16,
    title: 'Marketplace SEO & CRO',
    brand: 'Aurelia',
    category: 'E-commerce Setup',
    description: 'Complete Myntra and Amazon listing optimisation — keyword-rich titles, A+ content, bullet points, and enhanced brand store. Organic rank improved 3x in 45 days.',
    result: '3x organic rank uplift',
    tags: ['SEO', 'Amazon', 'CRO'],
    accent: '#fbbf24',
    bg: 'linear-gradient(135deg, #1a1200 0%, #3d2c00 50%, #5c4400 100%)',
    pattern: 'waves',
    icon: '📊',
    stat1: '3x', stat1label: 'Organic Rank',
    stat2: '45 Days', stat2label: 'Timeline',
  },

  // ── SOCIAL MEDIA & REELS (2 items) ──
  {
    id: 17,
    title: 'Monsoon Reels Campaign',
    brand: 'W for Woman',
    category: 'Social Media & Reels',
    description: 'Viral Instagram Reels series shot across Mumbai and Goa. 12 reels, shot in 2 days, achieving 2.3M organic views and 180K profile visits in 30 days.',
    result: '2.3M organic views',
    tags: ['Reels', 'Viral', 'Instagram'],
    accent: '#4ade80',
    bg: 'linear-gradient(135deg, #062019 0%, #0d3d2e 50%, #135740 100%)',
    pattern: 'waves',
    icon: '🎬',
    stat1: '2.3M', stat1label: 'Views',
    stat2: '180K', stat2label: 'Profile Visits',
  },
  {
    id: 18,
    title: 'Monthly Reels Retainer',
    brand: 'Libas',
    category: 'Social Media & Reels',
    description: '24-reel monthly content package — dedicated content calendar, on-location & studio filming, editing, licensed music, and captions. Grew followers by 180K in 4 months.',
    result: '180K new followers',
    tags: ['Content', 'Monthly', 'Growth'],
    accent: '#fb923c',
    bg: 'linear-gradient(135deg, #2d1500 0%, #5c2e00 50%, #8b4500 100%)',
    pattern: 'circles',
    icon: '🎥',
    stat1: '24 Reels', stat1label: 'Per Month',
    stat2: '180K', stat2label: 'New Followers',
  },

  // ── MARKETPLACE MANAGEMENT (2 items) ──
  {
    id: 19,
    title: 'Myntra Full Account Management',
    brand: 'Kisah Menswear',
    category: 'Marketplace Management',
    description: 'End-to-end Myntra management — catalog uploads, pricing strategy, promotion planning, A+ content, weekly performance reviews, and festive sale preparation.',
    result: '#3 category rank on Myntra',
    tags: ['Myntra', 'Management', 'Ethnic'],
    accent: '#e879f9',
    bg: 'linear-gradient(135deg, #25003d 0%, #4a0075 50%, #6a00a8 100%)',
    pattern: 'grid',
    icon: '🌐',
    stat1: '#3 Rank', stat1label: 'Myntra Category',
    stat2: '4 Months', stat2label: 'To Achieve',
  },
  {
    id: 20,
    title: 'Amazon FBA Scale-Up',
    brand: 'TerraWear',
    category: 'Marketplace Management',
    description: 'Migrated TerraWear from FBM to FBA, rebuilt all listings with keyword-optimised copy, launched Sponsored Products and Brand campaigns. ACoS reduced from 42% to 18%.',
    result: 'ACoS from 42% → 18%',
    tags: ['Amazon FBA', 'ACoS', 'Scale'],
    accent: '#f59e0b',
    bg: 'linear-gradient(135deg, #1a1000 0%, #3d2600 50%, #5c3c00 100%)',
    pattern: 'cross',
    icon: '📦',
    stat1: '18% ACoS', stat1label: 'Down from 42%',
    stat2: '3.2x', stat2label: 'Revenue Growth',
  },
];

const serviceStats = [
  { value: '500+', label: 'Brands Served' },
  { value: '₹500Cr+', label: 'Client Revenue' },
  { value: '20K+', label: 'SKUs Catalogued' },
  { value: '9', label: 'Service Verticals' },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-burgundy/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Our Work</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            360° Portfolio of
            <br />
            <span className="gradient-text italic">Real Results</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-3xl mx-auto">
            20 case studies across all 9 service verticals — from factory floor to performance campaigns. Every project backed by measurable outcomes.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 bg-charcoal border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {serviceStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-cream/50 text-xs uppercase tracking-wider">{stat.label}</div>
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

          {/* Results count */}
          <p className="text-cream/30 text-sm text-center mb-8">
            Showing {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' ? ` in ${activeCategory}` : ' across all services'}
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
                {/* Visual card */}
                <div
                  className="relative w-full rounded-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ background: item.bg, minHeight: '260px' }}
                >
                  {/* Pattern */}
                  <div
                    className="absolute inset-0"
                    style={{ backgroundImage: patternStyles[item.pattern] }}
                  />

                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
                  />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className="px-2.5 py-1 text-xs font-semibold rounded-full backdrop-blur-sm border"
                      style={{ color: item.accent, borderColor: `${item.accent}40`, background: `${item.accent}18` }}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Large background icon */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl transition-all duration-500 select-none"
                    style={{
                      opacity: hoveredId === item.id ? 0.06 : 0.16,
                      transform: hoveredId === item.id
                        ? 'translate(-50%, -50%) scale(1.4)'
                        : 'translate(-50%, -50%) scale(1)',
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Default visible: result + stats */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-5 transition-opacity duration-300"
                    style={{ opacity: hoveredId === item.id ? 0 : 1 }}
                  >
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4 backdrop-blur-sm"
                      style={{ background: `${item.accent}22`, color: item.accent, border: `1px solid ${item.accent}40` }}
                    >
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

                  {/* Hover: full description */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(to top, rgba(8,8,18,0.97) 0%, rgba(8,8,18,0.55) 55%, transparent 100%)',
                      opacity: hoveredId === item.id ? 1 : 0,
                    }}
                  >
                    <div
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold mb-2 w-fit"
                      style={{ background: `${item.accent}22`, color: item.accent, border: `1px solid ${item.accent}40` }}
                    >
                      {item.result}
                    </div>
                    <h3 className="font-serif text-base font-bold text-white mb-0.5">{item.title}</h3>
                    <p className="text-sm font-medium mb-2" style={{ color: item.accent }}>{item.brand}</p>
                    <p className="text-white/60 text-xs leading-relaxed mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs rounded-full"
                          style={{ background: `${item.accent}18`, color: item.accent, border: `1px solid ${item.accent}30` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Below card label */}
                <div className="pt-3 px-1 pb-2">
                  <h3 className="font-serif text-sm font-semibold text-cream group-hover:text-gold transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-cream/40 text-xs mt-0.5">{item.brand}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <div className="text-4xl mb-4">🔍</div>
              <p className="text-cream/50 text-lg">No projects found in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#16213e] border-t border-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">
            Ready to Be Our Next <span className="gradient-text italic">Success Story?</span>
          </h2>
          <p className="text-cream/60 mb-8 text-lg leading-relaxed">
            Every brand in our portfolio was once a new client conversation. Whether you need manufacturing, a brand launch, or performance marketing — let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold px-8 py-4">Start a Project</Link>
            <Link href="/pricing" className="btn-outline px-8 py-4">View Pricing</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
