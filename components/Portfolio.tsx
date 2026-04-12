'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = ['All', 'Fashion Shoot', 'Digital Catalog', 'Reels & Video', 'Brand Campaign', 'Brand Launch'];

const portfolioItems = [
  {
    id: 1,
    title: 'Silk Heritage Collection',
    brand: 'Raga by Tanishq',
    category: 'Fashion Shoot',
    description: 'Luxury silk saree collection shot at a heritage palace in Rajasthan. 3-day production with 8 models.',
    result: '340% sales uplift',
    tags: ['Saree', 'Heritage', 'Luxury'],
    accent: '#c9a84c',
    bg: 'linear-gradient(135deg, #2d1a00 0%, #5c3a10 40%, #8b5e1a 100%)',
    pattern: 'diamonds',
    icon: '👗',
    stat1: '3 Days', stat1label: 'Production',
    stat2: '8 Models', stat2label: 'Cast',
  },
  {
    id: 2,
    title: 'Urban Streetwear Catalog',
    brand: 'FabIndia Urban',
    category: 'Digital Catalog',
    description: '2,400 SKUs catalogued for Myntra launch. Consistent lighting, 4 angles per product, 48-hr delivery.',
    result: '2,400 SKUs in 8 days',
    tags: ['Catalog', 'Scale', 'Myntra'],
    accent: '#60a5fa',
    bg: 'linear-gradient(135deg, #0a1628 0%, #0f2444 50%, #1a3a6e 100%)',
    pattern: 'grid',
    icon: '📂',
    stat1: '2,400', stat1label: 'SKUs Shot',
    stat2: '48 hrs', stat2label: 'Delivered',
  },
  {
    id: 3,
    title: 'Monsoon Reels Campaign',
    brand: 'W for Woman',
    category: 'Reels & Video',
    description: 'Viral Instagram Reels series shot across Mumbai & Goa. 12 reels, 2.3M organic views in 30 days.',
    result: '2.3M organic views',
    tags: ['Reels', 'Viral', 'Instagram'],
    accent: '#34d399',
    bg: 'linear-gradient(135deg, #062019 0%, #0d3d2e 50%, #135740 100%)',
    pattern: 'waves',
    icon: '🎬',
    stat1: '2.3M', stat1label: 'Views',
    stat2: '12 Reels', stat2label: 'Produced',
  },
  {
    id: 4,
    title: 'Festive Diwali Campaign',
    brand: 'Manyavar',
    category: 'Brand Campaign',
    description: 'Pan-India Diwali campaign across Delhi, Mumbai, Jaipur, Kolkata & Bangalore simultaneously.',
    result: '₹12Cr campaign revenue',
    tags: ['Festive', 'Ethnic', 'Pan-India'],
    accent: '#f97316',
    bg: 'linear-gradient(135deg, #2d0a00 0%, #5c1a00 50%, #8b2800 100%)',
    pattern: 'dots',
    icon: '🪔',
    stat1: '5 Cities', stat1label: 'Covered',
    stat2: '₹12Cr', stat2label: 'Revenue',
  },
  {
    id: 5,
    title: 'Luxury Handbag Editorial',
    brand: 'Da Milano',
    category: 'Fashion Shoot',
    description: 'Editorial-style luxury handbag photography for Vogue India print feature and digital campaign.',
    result: 'Vogue India featured',
    tags: ['Luxury', 'Accessories', 'Editorial'],
    accent: '#a78bfa',
    bg: 'linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #3d1a80 100%)',
    pattern: 'lines',
    icon: '👜',
    stat1: 'Vogue', stat1label: 'India Feature',
    stat2: '3 Looks', stat2label: 'Editorial',
  },
  {
    id: 6,
    title: 'Athleisure Brand Launch',
    brand: 'FlexCore (D2C)',
    category: 'Brand Launch',
    description: 'Complete brand built from scratch — naming, identity, 800 SKU catalog, website, and launch ads. Live in 28 days.',
    result: '₹80L revenue in month 1',
    tags: ['Brand Launch', 'D2C', 'Athleisure'],
    accent: '#22d3ee',
    bg: 'linear-gradient(135deg, #051520 0%, #082540 50%, #0e3a5c 100%)',
    pattern: 'hexagons',
    icon: '🏃',
    stat1: '28 Days', stat1label: 'To Launch',
    stat2: '₹80L', stat2label: 'Month 1',
  },
  {
    id: 7,
    title: 'Summer Reels Series',
    brand: 'Libas',
    category: 'Reels & Video',
    description: '24-reel monthly content package for Libas. Strategy, scripting, shoot, and editing with music licensing.',
    result: '180K new followers',
    tags: ['Content', 'Monthly', 'Strategy'],
    accent: '#fb923c',
    bg: 'linear-gradient(135deg, #2d1500 0%, #5c2e00 50%, #8b4500 100%)',
    pattern: 'circles',
    icon: '🎥',
    stat1: '24 Reels', stat1label: 'Per Month',
    stat2: '180K', stat2label: 'New Followers',
  },
  {
    id: 8,
    title: 'Ethnic Wear Mega Catalog',
    brand: 'Biba',
    category: 'Digital Catalog',
    description: 'Seasonal catalog of 4,500 ethnic wear SKUs across kurtas, dupattas, and sets — all Myntra & Nykaa ready.',
    result: '4,500 SKUs in 15 days',
    tags: ['Ethnic', 'Scale', 'Nykaa'],
    accent: '#f472b6',
    bg: 'linear-gradient(135deg, #2d002a 0%, #5c005a 50%, #800070 100%)',
    pattern: 'dots',
    icon: '🥻',
    stat1: '4,500', stat1label: 'SKUs',
    stat2: '15 Days', stat2label: 'Delivered',
  },
  {
    id: 9,
    title: 'Jewellery Brand Identity',
    brand: 'Aarna Jewels (D2C)',
    category: 'Brand Launch',
    description: 'End-to-end brand build for a premium D2C jewellery brand — logo, packaging, photography, Shopify store, and Meta ads.',
    result: '6x ROAS in 60 days',
    tags: ['Jewellery', 'D2C', 'Identity'],
    accent: '#fbbf24',
    bg: 'linear-gradient(135deg, #1a1500 0%, #3d3000 50%, #5c4800 100%)',
    pattern: 'grid',
    icon: '💍',
    stat1: '6x ROAS', stat1label: 'On Ads',
    stat2: '60 Days', stat2label: 'To Profit',
  },
];

const patternStyles: Record<string, string> = {
  diamonds: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3C/svg%3E")`,
  grid: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 30 0 L 0 0 0 30' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3C/svg%3E")`,
  dots: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(255,255,255,0.08)'/%3E%3C/svg%3E")`,
  lines: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3C/svg%3E")`,
  waves: `url("data:image/svg+xml,%3Csvg width='60' height='20' viewBox='0 0 60 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q15 0 30 10 Q45 20 60 10' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3C/svg%3E")`,
  hexagons: `url("data:image/svg+xml,%3Csvg width='50' height='43' viewBox='0 0 50 43' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='25,1 49,14 49,29 25,42 1,29 1,14' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3C/svg%3E")`,
  circles: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='18' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3C/svg%3E")`,
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-24 bg-[#0f0f1e] relative overflow-hidden">
      <div className="absolute inset-0 pattern-overlay opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-4">Our Work</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6">
            Portfolio of
            <span className="gradient-text italic"> Excellence</span>
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="text-cream/60 text-lg max-w-2xl mx-auto mt-6">
            A curated selection of our work across brand launches, fashion shoots, digital catalogs, and performance campaigns.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gold text-charcoal font-semibold'
                  : 'border border-gold/20 text-cream/60 hover:border-gold/50 hover:text-cream'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card visual */}
              <div
                className="relative w-full rounded-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ background: item.bg, minHeight: '280px' }}
              >
                {/* Pattern overlay */}
                <div
                  className="absolute inset-0"
                  style={{ backgroundImage: patternStyles[item.pattern], backgroundSize: 'auto' }}
                />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }} />

                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className="px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm border"
                    style={{ color: item.accent, borderColor: `${item.accent}40`, background: `${item.accent}15` }}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Large icon — visible always */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl transition-all duration-500"
                  style={{ opacity: hoveredId === item.id ? 0.08 : 0.18, transform: hoveredId === item.id ? 'translate(-50%, -50%) scale(1.3)' : 'translate(-50%, -50%) scale(1)' }}
                >
                  {item.icon}
                </div>

                {/* Stats — visible by default, fade on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-400"
                  style={{ opacity: hoveredId === item.id ? 0 : 1 }}
                >
                  {/* Result pill */}
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4 backdrop-blur-sm"
                    style={{ background: `${item.accent}25`, color: item.accent, border: `1px solid ${item.accent}40` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.accent }} />
                    {item.result}
                  </div>

                  {/* Mini stats row */}
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-white font-bold text-lg leading-none" style={{ color: item.accent }}>{item.stat1}</div>
                      <div className="text-white/40 text-xs mt-0.5">{item.stat1label}</div>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div>
                      <div className="text-white font-bold text-lg leading-none" style={{ color: item.accent }}>{item.stat2}</div>
                      <div className="text-white/40 text-xs mt-0.5">{item.stat2label}</div>
                    </div>
                  </div>
                </div>

                {/* Hover overlay with description */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-400"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,10,20,0.97) 0%, rgba(10,10,20,0.6) 50%, transparent 100%)',
                    opacity: hoveredId === item.id ? 1 : 0,
                  }}
                >
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3 w-fit"
                    style={{ background: `${item.accent}25`, color: item.accent, border: `1px solid ${item.accent}40` }}
                  >
                    {item.result}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="font-medium text-sm mb-2" style={{ color: item.accent }}>{item.brand}</p>
                  <p className="text-white/65 text-xs leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-full"
                        style={{ background: `${item.accent}20`, color: item.accent, border: `1px solid ${item.accent}30` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Below card label */}
              <div className="pt-3 px-1 pb-1">
                <h3 className="font-serif text-base font-semibold text-cream group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-cream/45 text-sm">{item.brand}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link href="/portfolio" className="btn-gold inline-block">
            View Full Portfolio
          </Link>
          <p className="text-cream/35 text-sm mt-4">
            500+ projects completed across fashion, lifestyle, D2C brand launches & performance campaigns
          </p>
        </div>
      </div>
    </section>
  );
}
