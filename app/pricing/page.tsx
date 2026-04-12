import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing | Fashion Photography & Digital Cataloging | Heritage Apparels',
  description:
    'Transparent pricing for fashion photography, digital cataloging, brand strategy, and social media content. Starting from ₹25,000. Custom packages available.',
  keywords: [
    'fashion photography pricing India',
    'digital cataloging cost India',
    'brand photography rates',
    'fashion content production cost',
  ],
};

const pricingTiers = [
  {
    category: 'Fashion Photoshoot',
    icon: '📸',
    tiers: [
      { name: 'Essential', price: '₹35,000', unit: 'half day', description: '1 photographer, 1 model, studio, 50-80 edited images, 48hr delivery' },
      { name: 'Professional', price: '₹75,000', unit: 'full day', description: '2 photographers, 2 models, studio + location, 150-200 images, styling', popular: true },
      { name: 'Premium', price: '₹1,50,000+', unit: '2 days', description: 'Full team, 3-5 models, multiple locations, 400+ images, creative direction' },
    ],
  },
  {
    category: 'Digital Cataloging',
    icon: '📂',
    tiers: [
      { name: '1-100 SKUs', price: '₹65', unit: 'per SKU', description: 'Multi-angle shots, basic post-production, 48hr delivery' },
      { name: '101-500 SKUs', price: '₹55', unit: 'per SKU', description: 'Volume pricing, dedicated account manager, 24hr delivery', popular: true },
      { name: '500+ SKUs', price: 'Custom', unit: '', description: 'Enterprise rates, dedicated studio days, white-glove service' },
    ],
  },
  {
    category: 'Social Media Reels',
    icon: '🎬',
    tiers: [
      { name: 'Single Reel', price: '₹25,000', unit: 'per reel', description: 'Concept, full day filming, editing, music license' },
      { name: 'Monthly Creator', price: '₹80,000', unit: 'per month', description: '4 Reels/month, content calendar, strategy call', popular: true },
      { name: 'Brand Accelerator', price: '₹1,80,000', unit: 'per month', description: '10 Reels, stories, influencer production, strategist' },
    ],
  },
  {
    category: 'Brand Strategy',
    icon: '🎯',
    tiers: [
      { name: 'Brand Audit', price: '₹25,000', unit: 'one-time', description: 'Visual competitor audit + actionable recommendations report' },
      { name: 'Brand Foundation', price: '₹85,000', unit: 'one-time', description: 'Full identity system, photography guide, brand guidelines', popular: true },
      { name: 'Brand Transformation', price: '₹1,50,000+', unit: 'one-time', description: 'Complete overhaul + 3 months advisory support' },
    ],
  },
];

const addOns = [
  { name: 'Model Day Rate (Additional)', price: 'From ₹8,000/day' },
  { name: 'Location Scout & Permissions', price: 'From ₹15,000' },
  { name: 'Ghost Mannequin Post-Production', price: '₹200/SKU' },
  { name: 'Express 24-Hour Delivery', price: '+25% surcharge' },
  { name: 'Animated GIF Export', price: '₹150/image' },
  { name: 'Social Media Template Design', price: '₹12,000/set of 10' },
  { name: 'Blog/Website Copywriting', price: '₹5,000/article' },
  { name: 'Influencer Coordination', price: '₹30,000 + influencer fees' },
];

export default function PricingPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Transparent Pricing</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Investment That
            <br />
            <span className="gradient-text italic">Delivers Returns</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Clear, honest pricing with no hidden costs. Every package is designed to deliver measurable ROI for your brand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 text-cream/60 text-sm">
              <span className="text-green-400">✓</span> No hidden costs
            </div>
            <div className="flex items-center gap-2 text-cream/60 text-sm">
              <span className="text-green-400">✓</span> Custom packages available
            </div>
            <div className="flex items-center gap-2 text-cream/60 text-sm">
              <span className="text-green-400">✓</span> NDA on request
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {pricingTiers.map((category) => (
              <div key={category.category}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="font-serif text-2xl font-bold text-cream">{category.category}</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-gold/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {category.tiers.map((tier) => (
                    <div
                      key={tier.name}
                      className={`rounded-xl p-7 border relative ${
                        tier.popular
                          ? 'border-gold bg-gold/8'
                          : 'border-gold/15 bg-white/3'
                      }`}
                    >
                      {tier.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-charcoal text-xs font-bold rounded-full">
                          Best Value
                        </div>
                      )}
                      <h3 className="font-serif text-lg font-bold text-cream mb-1">{tier.name}</h3>
                      <div className="flex items-end gap-1 mb-1">
                        <span className="text-3xl font-serif font-bold gradient-text">{tier.price}</span>
                        {tier.unit && <span className="text-cream/40 text-sm mb-1">/{tier.unit}</span>}
                      </div>
                      <p className="text-cream/60 text-sm leading-relaxed mb-6">{tier.description}</p>
                      <Link href="/contact" className={tier.popular ? 'btn-gold w-full text-center block text-sm' : 'btn-outline w-full text-center block text-sm'}>
                        Get Quote
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-[#0f0f1e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-cream mb-4">
              Add-Ons & <span className="gradient-text italic">Extras</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {addOns.map((addon) => (
              <div key={addon.name} className="flex items-center justify-between glass-card p-4">
                <span className="text-cream/70 text-sm">{addon.name}</span>
                <span className="text-gold font-medium text-sm">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle CTA */}
      <section className="py-16 bg-charcoal border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">
            Need a Custom <span className="gradient-text italic">Bundle?</span>
          </h2>
          <p className="text-cream/60 mb-8 text-lg leading-relaxed">
            Brands combining multiple services receive significant discounts. Share your full requirements and we&apos;ll build a custom package with the best possible pricing.
          </p>
          <Link href="/contact" className="btn-gold inline-block px-8 py-4 text-base">
            Request a Custom Quote
          </Link>
          <p className="text-cream/30 text-xs mt-4">Typical custom packages save 15-30% vs. individual service pricing</p>
        </div>
      </section>
    </main>
  );
}
