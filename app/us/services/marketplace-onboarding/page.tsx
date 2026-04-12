import type { Metadata } from 'next';
import Link from 'next/link';
import { usMarketplaces } from '@/lib/us-marketplace-data';

export const metadata: Metadata = {
  title: 'US Marketplace Onboarding & Management | Heritage Apparels USA',
  description:
    'We onboard and manage your brand on Amazon.com, Walmart, Etsy, Nordstrom, Target+, eBay, Sephora, Ulta, TikTok Shop, Faire & 25+ US marketplaces. Fully compliant listings, A+ content, and marketplace ads.',
};

const marketplaces = [
  {
    category: 'Fashion & Apparel',
    icon: '👗',
    color: 'from-pink-900/30 to-rose-900/20',
    border: 'border-pink-500/20',
    platforms: [
      { name: 'Amazon Fashion', desc: 'Largest US fashion marketplace · Prime eligible listings', logo: 'AF' },
      { name: 'Walmart Fashion', desc: "US's second-largest retailer · 120M+ monthly visitors", logo: 'WF' },
      { name: 'Nordstrom', desc: 'Premium department store · Luxury & designer brands', logo: 'No' },
      { name: "Macy's", desc: 'Iconic US department store marketplace', logo: 'Mc' },
      { name: 'ASOS US', desc: 'UK-born global fashion for US millennials', logo: 'AS' },
      { name: 'Revolve', desc: 'Premium fashion for US Gen Z & millennials', logo: 'Rv' },
      { name: 'Anthropologie', desc: 'Bohemian lifestyle & apparel marketplace', logo: 'An' },
      { name: 'Free People', desc: 'Boho-chic fashion & lifestyle brand platform', logo: 'FP' },
    ],
  },
  {
    category: 'General Marketplaces',
    icon: '🛒',
    color: 'from-blue-900/30 to-indigo-900/20',
    border: 'border-blue-500/20',
    platforms: [
      { name: 'Amazon.com', desc: "US's largest e-commerce marketplace · 200M+ Prime members", logo: 'Az' },
      { name: 'Walmart Marketplace', desc: '3rd-party seller platform · 500M+ monthly visits', logo: 'Wm' },
      { name: 'eBay', desc: '135M+ active buyers · New & resale market', logo: 'Eb' },
      { name: 'Target+', desc: "Target's curated 3rd-party marketplace", logo: 'T+' },
      { name: 'Kroger Ship', desc: "US's largest grocery chain marketplace", logo: 'Kr' },
      { name: 'Overstock', desc: 'Home goods & lifestyle at discounted prices', logo: 'Os' },
    ],
  },
  {
    category: 'Beauty & Wellness',
    icon: '💄',
    color: 'from-purple-900/30 to-violet-900/20',
    border: 'border-purple-500/20',
    platforms: [
      { name: 'Sephora', desc: 'Premium beauty retail · US & Canada markets', logo: 'Se' },
      { name: 'Ulta Beauty', desc: "US's largest beauty retailer · 40M+ loyalty members", logo: 'Ul' },
      { name: 'Amazon Beauty', desc: 'Amazon dedicated beauty & personal care', logo: 'Ab' },
      { name: 'Dermstore', desc: 'Professional skincare & beauty marketplace', logo: 'Ds' },
    ],
  },
  {
    category: 'Handmade & Specialty',
    icon: '🎨',
    color: 'from-orange-900/30 to-amber-900/20',
    border: 'border-orange-500/20',
    platforms: [
      { name: 'Etsy', desc: 'Handmade, vintage & unique goods · 90M+ buyers', logo: 'Et' },
      { name: 'Artisan & Craft', desc: 'Premium handcrafted goods marketplace', logo: 'Ac' },
      { name: 'Zulily', desc: 'Flash sale platform for families & lifestyle', logo: 'Zu' },
    ],
  },
  {
    category: 'Social Commerce',
    icon: '📱',
    color: 'from-cyan-900/30 to-sky-900/20',
    border: 'border-cyan-500/20',
    platforms: [
      { name: 'TikTok Shop US', desc: 'In-app commerce · Fastest growing US platform', logo: 'TT' },
      { name: 'Instagram Shopping', desc: 'Meta-powered social commerce for US brands', logo: 'IS' },
      { name: 'Pinterest Shopping', desc: 'Visual discovery to purchase for lifestyle brands', logo: 'Pi' },
    ],
  },
  {
    category: 'Resale & Pre-Loved',
    icon: '♻️',
    color: 'from-green-900/30 to-emerald-900/20',
    border: 'border-green-500/20',
    platforms: [
      { name: 'Poshmark', desc: 'Peer-to-peer fashion resale · 80M+ community', logo: 'Po' },
      { name: 'Depop', desc: 'Gen Z resale & vintage platform', logo: 'De' },
      { name: 'ThredUp', desc: "US's largest online consignment store", logo: 'Tr' },
      { name: 'The RealReal', desc: 'Authenticated luxury consignment', logo: 'RR' },
    ],
  },
  {
    category: 'Home & Lifestyle',
    icon: '🏠',
    color: 'from-yellow-900/30 to-amber-900/20',
    border: 'border-yellow-500/20',
    platforms: [
      { name: 'Wayfair', desc: "US's largest home goods & decor marketplace", logo: 'Wf' },
      { name: 'Houzz', desc: 'Home design & improvement marketplace', logo: 'Hz' },
      { name: 'Chairish', desc: 'Vintage & antique home decor marketplace', logo: 'Ch' },
    ],
  },
  {
    category: 'B2B & Wholesale',
    icon: '🏭',
    color: 'from-slate-900/30 to-gray-900/20',
    border: 'border-slate-500/20',
    platforms: [
      { name: 'Faire', desc: 'Leading US wholesale marketplace for indie retailers', logo: 'Fa' },
      { name: 'RangeMe', desc: 'Connect with US retail buyers (Target, Walmart)', logo: 'Rm' },
      { name: 'Tundra', desc: 'Zero-commission B2B wholesale platform', logo: 'Tu' },
      { name: 'Wholesale Central', desc: 'US wholesale trade directory & marketplace', logo: 'Wc' },
    ],
  },
];

const totalPlatforms = marketplaces.reduce((acc, cat) => acc + cat.platforms.length, 0);

const whatWeDeliver = [
  { icon: '📋', title: 'Account Setup & Brand Registry', desc: 'We set up your Amazon Brand Registry, Walmart Seller Central, Etsy shop, and all other platform accounts — including trademark linkage and brand protection tools.' },
  { icon: '🗂️', title: 'US-Optimized Listing Creation', desc: 'Keyword-rich titles, bullet points, and product descriptions written for American search behavior and conversion — fully compliant with each platform\'s content guidelines.' },
  { icon: '🖼️', title: 'A+ Content & Brand Stores', desc: 'Amazon A+ / Premium A+ content, Walmart enhanced content, and branded brand store pages that increase conversion by 3–10% vs standard listings.' },
  { icon: '✅', title: 'Compliance & Approval Management', desc: 'We handle category ungating, brand approvals, and compliance documentation — navigating platform-specific requirements so you don\'t hit walls.' },
  { icon: '🎯', title: 'Marketplace Advertising', desc: 'Amazon Sponsored Products, Sponsored Brands, and DSP campaigns — plus Walmart Connect ads and Etsy ads — managed for maximum ROAS.' },
  { icon: '📊', title: 'Monthly Performance Reports', desc: 'Clear monthly dashboards covering sales, traffic, conversion, ad spend, ROAS, and marketplace rankings across all your active platforms.' },
  { icon: '🔄', title: 'Inventory & FBA Management', desc: 'Amazon FBA shipment planning, inventory forecasting, stranded inventory fixes, and Walmart WFS setup — keeping you in-stock and Prime-eligible.' },
  { icon: '⭐', title: 'Review & Reputation Management', desc: 'Early reviewer programs, product insert strategies, and review monitoring — helping you build social proof that accelerates US sales velocity.' },
];

const process = [
  { step: '01', title: 'Platform Audit', desc: 'We assess which US platforms fit your category, margin, and audience — with a priority roadmap.' },
  { step: '02', title: 'Account Setup', desc: 'Brand registry, seller account creation, and category/brand approvals handled end-to-end.' },
  { step: '03', title: 'Content & Listing', desc: 'A+ content, photography, keyword-optimized copy and full listing creation for each platform.' },
  { step: '04', title: 'Launch & Ads', desc: 'Inventory sent to FBA (or your 3PL), listings go live, and launch ad campaigns start driving traffic.' },
  { step: '05', title: 'Manage & Scale', desc: 'Ongoing platform management, ad optimization, and expansion to new marketplaces as you grow.' },
];

const packages = [
  {
    name: 'Starter',
    price: '$1,500',
    ideal: 'New US brands · 1–3 platforms',
    includes: [
      'Onboarding on 2 US marketplaces',
      'Up to 50 SKU listing creation',
      'Amazon Brand Registry setup',
      'US-compliant image formatting',
      '1 month post-launch monitoring',
    ],
  },
  {
    name: 'Growth',
    price: '$3,500',
    ideal: 'Scaling brands · 4–6 platforms',
    includes: [
      'Onboarding on up to 5 US platforms',
      'Up to 200 SKU listing creation',
      'Amazon A+ content (10 ASINs)',
      'Amazon & Walmart ads setup',
      'FBA shipment plan & setup',
      '3 months marketplace management',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    ideal: 'Established brands · 10+ platforms',
    includes: [
      'Onboarding on 10+ US platforms',
      'Unlimited SKU management',
      'Premium A+ & brand store creation',
      'Full multi-platform ads management',
      'Dedicated US account manager',
      '6 months full marketplace management',
    ],
  },
];

const faqs = [
  { q: 'Which US marketplaces do you onboard fashion brands onto?', a: 'We onboard brands onto 25+ US marketplaces across categories — Amazon.com, Walmart Marketplace, Etsy, Nordstrom, Macy\'s, ASOS US, Revolve, TikTok Shop, Instagram Shopping, eBay, Poshmark, Depop, Pinterest Shopping, Google Shopping, Shopify (D2C), and niche platforms including Faire (B2B wholesale), Sephora, Ulta, and Target+. Platform eligibility depends on your product category and brand positioning.' },
  { q: 'How long does Amazon seller account setup and brand registry take?', a: 'Amazon seller account setup takes 3–7 business days for approval, assuming all required documents are in order (business registration, bank account, tax ID or W-9, and identity verification). Amazon Brand Registry (required for A+ content and sponsored brand ads) takes an additional 2–4 weeks after trademark registration is verified. We manage the full process and handle any document requests from Amazon.' },
  { q: 'Do you handle Amazon Brand Registry for Indian brands selling in the US?', a: 'Yes. We assist Indian brands in completing Amazon Brand Registry for the US marketplace (Amazon.com). This requires a registered trademark in the US (USPTO) or in India (with recognition under Amazon\'s Global Trademark Acceptance program). We coordinate with your trademark attorney, prepare the Brand Registry application, and manage follow-up with Amazon\'s brand protection team.' },
  { q: 'What is Amazon A+ content and do I need it for US marketplace success?', a: 'Amazon A+ content (formerly Enhanced Brand Content) replaces the standard product description with rich media — comparison charts, lifestyle images, brand story modules, and custom layouts. Brands with A+ content see an average 3–10% increase in conversion rate. It requires Brand Registry and is available for all registered brands at no additional Amazon fee. We design and upload A+ content as part of our Growth and Enterprise packages.' },
  { q: 'How do you manage marketplace ads across multiple US platforms simultaneously?', a: 'Multi-platform ads management requires separate campaign structures for each platform — Amazon Sponsored Products/Brands, Walmart Connect, and TikTok Shop ads each have different auction mechanics and audience targeting. We build and manage campaigns on each platform independently, with a unified reporting dashboard showing ROAS, ad spend, and sales contribution by platform. Monthly strategy calls review performance across all channels.' },
];

export default function USMarketplaceOnboardingPage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'US Marketplace Onboarding — Amazon, Walmart, Etsy & 25+ Platforms', serviceType: 'Marketplace Onboarding & Management', provider: { '@type': 'Organization', name: 'Heritage Apparels', url: 'https://www.heritageapparels.com/us' }, description: 'We onboard and manage your brand on Amazon, Walmart, Etsy, Nordstrom, TikTok Shop, and 25+ US marketplaces. Compliant listings, A+ content, and marketplace ads managed for you.', areaServed: { '@type': 'Country', name: 'United States' }, offers: { '@type': 'Offer', priceCurrency: 'USD', price: '1800', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: '1800', unitText: 'PROJECT' } } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-24 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">🇺🇸 US Marketplace Onboarding</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Sell on Every Major
            <br />
            <span className="gradient-text italic">US Marketplace.</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed">
            We onboard and manage your brand on <strong className="text-gold">{totalPlatforms}+ US marketplaces</strong> — Amazon, Walmart, Etsy, Nordstrom, Target+, Sephora, TikTok Shop, Faire, and more. Compliant listings, A+ content, marketplace ads, and ongoing management — all handled by us.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {['Fashion', 'Beauty', 'General', 'Social Commerce', 'Resale', 'Home', 'B2B Wholesale'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold">Onboard My Brand →</Link>
            <Link href="/us/services" className="btn-outline">See All US Services</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-charcoal border-y border-gold/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: `${totalPlatforms}+`, label: 'US Marketplaces', sub: 'we onboard & manage' },
              { value: '4200+', label: 'Brands Onboarded', sub: 'globally' },
              { value: '98%', label: 'Approval Rate', sub: 'first-attempt success' },
              { value: '10 Days', label: 'Go-Live Time', sub: 'from account submission' },
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

      {/* All US Marketplaces */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              All <span className="gradient-text italic">{totalPlatforms}+ US Marketplaces</span> We Cover
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50 text-lg">Every major US platform across fashion, beauty, general, social commerce, resale, home, and B2B wholesale.</p>
          </div>

          <div className="space-y-10">
            {marketplaces.map((cat) => (
              <div key={cat.category}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-serif text-xl font-bold text-cream">{cat.category}</h3>
                  <span className="px-2.5 py-0.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium">
                    {cat.platforms.length} platforms
                  </span>
                  <div className="flex-1 h-px bg-gold/10" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {cat.platforms.map((platform) => (
                    <div
                      key={platform.name}
                      className={`glass-card p-4 bg-gradient-to-br ${cat.color} border ${cat.border} group hover:border-gold/40 transition-all flex items-center gap-3`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-charcoal/60 border border-gold/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-gold font-serif font-bold text-xs">{platform.logo}</span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-serif text-sm font-bold text-cream group-hover:text-gold transition-colors leading-tight truncate">
                          {platform.name}
                        </h4>
                        <p className="text-cream/45 text-xs leading-snug mt-0.5 line-clamp-2">{platform.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 bg-[#0d1b3e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Everything We <span className="gradient-text italic">Handle For You</span>
            </h2>
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

      {/* Process */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              How We <span className="gradient-text italic">Launch Your Brand in the US</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {process.map((p) => (
              <div key={p.step} className="glass-card p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-gold font-bold text-lg">{p.step}</span>
                </div>
                <h3 className="font-serif text-base font-bold text-cream mb-2">{p.title}</h3>
                <p className="text-cream/50 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-[#0d1b3e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              US Onboarding <span className="gradient-text italic">Packages</span>
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50">All prices in USD · One-time onboarding fee · Monthly management billed separately</p>
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

      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="font-serif text-4xl font-bold text-cream mb-4">Frequently Asked <span className="gradient-text italic">Questions</span></h2><div className="gold-divider mx-auto" /></div>
          <div className="space-y-4">{faqs.map(f => (<div key={f.q} className="glass-card p-6"><h3 className="font-semibold text-cream mb-3 leading-snug">{f.q}</h3><p className="text-cream/60 text-sm leading-relaxed">{f.a}</p></div>))}</div>
        </div>
      </section>

      {/* Browse by US Platform */}
      <section className="py-16 bg-[#0d1b3e] border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-cream mb-3">Browse by <span className="gradient-text italic">US Platform</span></h2>
            <p className="text-cream/50 text-sm">Platform-specific onboarding guides — requirements, commissions, timeline, and expert tips for each US marketplace</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {usMarketplaces.map((m) => (
              <Link key={m.slug} href={`/us/services/marketplace/${m.slug}`} className="glass-card p-4 text-center group hover:border-gold/40 transition-all">
                <div className="font-serif font-bold text-cream text-sm mb-1 group-hover:text-gold transition-colors">{m.name}</div>
                <div className="text-cream/40 text-xs">{m.category.split('(')[0].trim()}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0d1b3e] border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">
            Ready to Sell on Every <span className="gradient-text italic">Top US Platform?</span>
          </h2>
          <p className="text-cream/60 mb-8 leading-relaxed">
            Share your brand details and we&apos;ll send you a free US marketplace eligibility report — which platforms fit your category, what compliance docs you need, and a realistic timeline to go live.
          </p>
          <Link href="/us/contact" className="btn-gold inline-block px-8 py-4">
            Get Free US Eligibility Report
          </Link>
          <p className="text-cream/30 text-sm mt-4">No obligations · Free report within 24 hours · EST timezone support</p>
        </div>
      </section>
    </main>
  );
}
