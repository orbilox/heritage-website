import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'US Pricing — USD Packages for All Services | Heritage Apparels USA',
  description:
    'Transparent USD pricing for India manufacturing, US marketplace onboarding, brand launch, performance marketing, product photography, digital cataloging, and social media. Custom packages available.',
};

const pricingTiers = [
  {
    category: 'India Manufacturing & Sourcing',
    icon: '🏭',
    tiers: [
      { name: 'Sample Run', price: '$2,500', unit: 'one-time', description: 'Up to 5 styles, 10 units per style, DHL express to USA, US-compliant labeling' },
      { name: 'Starter Production', price: '$8,500', unit: 'one-time', description: '15 styles, 50–100 units/style, private label, CPSC check, export docs', popular: true },
      { name: 'Scale Production', price: 'Custom', unit: '', description: 'Unlimited styles, 500+ units, dedicated PM, FBA-ready packaging, quarterly schedule' },
    ],
  },
  {
    category: 'US Marketplace Onboarding',
    icon: '🛒',
    tiers: [
      { name: 'Starter', price: '$1,500', unit: 'one-time', description: '2 US marketplaces, 50 SKU listings, Brand Registry setup, 1 month monitoring' },
      { name: 'Growth', price: '$3,500', unit: 'one-time', description: '5 US platforms, 200 SKU listings, A+ content, Amazon ads setup, FBA setup', popular: true },
      { name: 'Enterprise', price: 'Custom', unit: '', description: '10+ platforms, unlimited SKUs, full A+ & brand store, dedicated US account manager' },
    ],
  },
  {
    category: 'US Brand Launch',
    icon: '🚀',
    tiers: [
      { name: 'Starter Brand', price: '$8,500', unit: 'one-time', description: 'Logo, packaging (1 item), 50 SKU photography, Shopify store, Amazon + Etsy onboarding' },
      { name: 'Growth Brand', price: '$18,500', unit: 'one-time', description: 'Full identity, 150 SKU shoot, 5 marketplace onboarding, 3-month performance marketing', popular: true },
      { name: 'Enterprise Brand', price: 'Custom', unit: '', description: 'Everything in Growth + India manufacturing managed, influencer campaign, US brand manager' },
    ],
  },
  {
    category: 'US Performance Marketing',
    icon: '📈',
    tiers: [
      { name: 'Starter', price: '$2,000', unit: 'per month', description: 'Meta Ads (IG + FB), up to $5K ad spend, 4 creatives/month, weekly report' },
      { name: 'Growth', price: '$4,000', unit: 'per month', description: 'Meta + Google + Amazon Ads, up to $15K spend, 10 creatives, TikTok setup', popular: true },
      { name: 'Enterprise', price: 'Custom', unit: '', description: 'All platforms + DSP, unlimited spend, 20+ creatives, dedicated US strategist' },
    ],
  },
  {
    category: 'US Product Photography',
    icon: '📸',
    tiers: [
      { name: 'Basic', price: '$3', unit: 'per SKU', description: 'White background, 4 angles, background removal, Amazon-compliant, 48hr delivery' },
      { name: 'Full Listing', price: '$8', unit: 'per SKU', description: '7 Amazon listing slots filled, lifestyle + infographic images, Walmart & Etsy formats', popular: true },
      { name: 'Premium', price: 'Custom', unit: '', description: 'Everything + model photography, A+ images, 30-sec product video, social cuts' },
    ],
  },
  {
    category: 'Digital Cataloging',
    icon: '📂',
    tiers: [
      { name: 'Basic Catalog', price: '$3', unit: 'per SKU', description: 'White background, 4 angles, background removal, 48hr delivery (min. 50 SKUs)' },
      { name: 'Full Catalog', price: '$6', unit: 'per SKU', description: 'White bg + lifestyle + detail close-up, all platforms formatted (min. 30 SKUs)', popular: true },
      { name: 'Enterprise', price: 'Custom', unit: '', description: 'Monthly retainer, priority 24hr turnaround, dedicated catalog manager' },
    ],
  },
  {
    category: 'US Brand Strategy & Identity',
    icon: '🎯',
    tiers: [
      { name: 'Identity Starter', price: '$3,500', unit: 'one-time', description: 'Logo, color palette, typography, brand guidelines PDF, 2 revision rounds' },
      { name: 'Full Brand System', price: '$7,500', unit: 'one-time', description: 'Full identity + US packaging + Amazon Brand Store + photography guide', popular: true },
      { name: 'Enterprise Brand', price: 'Custom', unit: '', description: 'Full rebrand + US market workshop + brand video + US retailer pitch deck' },
    ],
  },
  {
    category: 'US Social Media & Content',
    icon: '🎬',
    tiers: [
      { name: 'Starter', price: '$1,500', unit: 'per month', description: '8 TikTok or Reels/month, US content calendar, posting schedule, monthly report' },
      { name: 'Growth', price: '$3,000', unit: 'per month', description: '16 videos + 4 YouTube Shorts + 2 UGC videos, community management, strategy call', popular: true },
      { name: 'Full Presence', price: 'Custom', unit: '', description: '30+ videos, US influencer campaign, paid social creatives, dedicated US strategist' },
    ],
  },
  {
    category: 'US Compliance & Import',
    icon: '🛃',
    tiers: [
      { name: 'Compliance Audit', price: '$500', unit: 'one-time', description: 'Compliance review, required certifications checklist, HS code, import duty estimate' },
      { name: 'Full Compliance', price: '$1,800', unit: 'one-time', description: 'Audit + US label design + testing lab coordination + full customs documentation', popular: true },
      { name: 'Ongoing Support', price: '$500', unit: 'per month', description: 'Monthly compliance monitoring, customs docs per shipment, regulatory update alerts' },
    ],
  },
];

const addOns = [
  { name: 'Express 24-Hour Image Delivery', price: '+25% surcharge' },
  { name: 'Ghost Mannequin Post-Production', price: '$1.50/SKU' },
  { name: 'US Model Photography (additional day)', price: 'From $800/day' },
  { name: 'Amazon A+ Content (per ASIN)', price: 'From $150/ASIN' },
  { name: 'USPTO Trademark Search & Filing', price: 'From $500' },
  { name: 'US Influencer Coordination', price: '$800 + influencer fees' },
  { name: 'Blog / SEO Copywriting (US)', price: '$200/article' },
  { name: 'Animated GIF Product Export', price: '$2/image' },
];

export default function USPricingPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">🇺🇸 US Pricing — USD</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Transparent Pricing.
            <br />
            <span className="gradient-text italic">Maximum US ROI.</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Clear USD pricing across all 9 US services — no hidden costs, no currency conversion confusion. Every package designed to deliver measurable returns in the American market.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {['No hidden costs', 'Custom packages available', 'Response within 12 hours', 'NDA on request'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-cream/60 text-sm">
                <span className="text-green-400">✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {pricingTiers.map((category) => (
              <div key={category.category}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="font-serif text-2xl font-bold text-cream">{category.category}</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-gold/20 to-transparent" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {category.tiers.map((tier) => (
                    <div
                      key={tier.name}
                      className={`rounded-xl p-7 border relative ${tier.popular ? 'border-gold bg-gold/5' : 'border-gold/15 bg-white/3'}`}
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
                      <Link
                        href="/us/contact"
                        className={tier.popular ? 'btn-gold w-full text-center block text-sm' : 'btn-outline w-full text-center block text-sm'}
                      >
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
      <section className="py-16 bg-[#0d1b3e]">
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
            Need a Custom <span className="gradient-text italic">US Bundle?</span>
          </h2>
          <p className="text-cream/60 mb-8 text-lg leading-relaxed">
            Brands combining multiple services receive significant discounts. Share your full US requirements and we&apos;ll build a custom package — typically saving 15–30% vs individual service pricing.
          </p>
          <Link href="/us/contact" className="btn-gold inline-block px-8 py-4 text-base">
            Request a Custom US Quote
          </Link>
          <p className="text-cream/30 text-xs mt-4">All prices in USD · Response within 12 hours · EST timezone support</p>
        </div>
      </section>
    </main>
  );
}
