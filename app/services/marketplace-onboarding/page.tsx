import type { Metadata } from 'next';
import Link from 'next/link';
import { indiaMarketplaces } from '@/lib/india-marketplace-data';

export const metadata: Metadata = {
  title: 'Marketplace Onboarding & Management | Heritage Apparels',
  description:
    'Heritage Apparels onboards and manages your brand across 35+ marketplaces — Myntra, Nykaa, Amazon, Flipkart, AJIO, Tata Cliq, Blinkit, Zepto, Tira, Purplle, Meesho, JioMart & more. 98% approval rate, 4200+ brands onboarded.',
  keywords: [
    'marketplace onboarding India',
    'Myntra seller onboarding',
    'Nykaa brand registration',
    'Amazon seller India',
    'Flipkart seller onboarding',
    'AJIO brand onboarding',
    'Tata Cliq onboarding',
    'marketplace management agency India',
    'ecommerce marketplace listing India',
    'Meesho seller registration',
    'JioMart onboarding',
    'Blinkit seller',
  ],
};

const marketplaces = [
  {
    category: 'Fashion & Lifestyle',
    icon: '👗',
    color: 'from-pink-900/30 to-rose-900/20',
    border: 'border-pink-500/20',
    platforms: [
      { name: 'Myntra', desc: "India's largest fashion platform · 50M+ active users", logo: 'M' },
      { name: 'AJIO', desc: "Reliance Retail's curated fashion destination", logo: 'A' },
      { name: 'Tata Cliq', desc: 'Premium & luxury fashion marketplace', logo: 'T' },
      { name: "Pernia's Pop-Up Shop", desc: 'Designer & luxury fashion marketplace', logo: 'P' },
      { name: 'Limeroad', desc: 'Fashion & lifestyle discovery platform', logo: 'L' },
      { name: 'Meesho', desc: '150M+ users · Value fashion & resellers', logo: 'Me' },
      { name: 'Clovia', desc: 'Lingerie & innerwear specialist marketplace', logo: 'C' },
      { name: 'Craftsvilla', desc: 'Ethnic wear & handcrafted products', logo: 'Cr' },
      { name: 'GlowRoad', desc: 'Social commerce & reseller network', logo: 'G' },
    ],
  },
  {
    category: 'Beauty & Wellness',
    icon: '💄',
    color: 'from-purple-900/30 to-violet-900/20',
    border: 'border-purple-500/20',
    platforms: [
      { name: 'Nykaa', desc: '15M+ monthly active users · Beauty leader', logo: 'N' },
      { name: 'Tira Beauty', desc: "Reliance's premium beauty-tech platform", logo: 'Ti' },
      { name: 'Purplle', desc: 'Beauty & personal care marketplace', logo: 'Pu' },
      { name: '1mg', desc: 'Health, wellness & pharma marketplace', logo: '1m' },
      { name: 'Netmeds', desc: 'Reliance-owned health & medicine platform', logo: 'Nm' },
    ],
  },
  {
    category: 'Horizontal Marketplaces',
    icon: '🛒',
    color: 'from-blue-900/30 to-indigo-900/20',
    border: 'border-blue-500/20',
    platforms: [
      { name: 'Amazon India', desc: "India's largest e-commerce marketplace", logo: 'Az' },
      { name: 'Flipkart', desc: "India's homegrown e-commerce giant", logo: 'Fk' },
      { name: 'Snapdeal', desc: 'Value commerce with 50M+ buyers', logo: 'Sd' },
      { name: 'JioMart', desc: "Reliance's hyperlocal commerce platform", logo: 'Ji' },
      { name: 'Paytm Mall', desc: 'Paytm-powered shopping marketplace', logo: 'Pm' },
      { name: 'ShopClues', desc: 'Tier 2/3 city focused marketplace', logo: 'Sc' },
    ],
  },
  {
    category: 'Quick Commerce',
    icon: '⚡',
    color: 'from-orange-900/30 to-amber-900/20',
    border: 'border-orange-500/20',
    platforms: [
      { name: 'Blinkit', desc: '10-minute delivery · Grocery & lifestyle', logo: 'Bl' },
      { name: 'Zepto', desc: 'Ultra-fast delivery marketplace', logo: 'Ze' },
      { name: 'Swiggy Instamart', desc: 'Instant commerce by Swiggy', logo: 'Si' },
      { name: 'BigBasket Now', desc: 'Tata-owned rapid grocery delivery', logo: 'Bb' },
    ],
  },
  {
    category: 'Kids & Baby',
    icon: '🧒',
    color: 'from-teal-900/30 to-cyan-900/20',
    border: 'border-teal-500/20',
    platforms: [
      { name: 'FirstCry', desc: "Asia's largest baby & kids products platform", logo: 'Fc' },
      { name: 'Hopscotch', desc: 'Premium kids fashion & lifestyle', logo: 'Hs' },
    ],
  },
  {
    category: 'Pet Care',
    icon: '🐾',
    color: 'from-green-900/30 to-emerald-900/20',
    border: 'border-green-500/20',
    platforms: [
      { name: 'Supertails', desc: "India's leading pet care marketplace", logo: 'St' },
      { name: 'Heads Up For Tails', desc: 'Premium pet products platform', logo: 'Hu' },
      { name: 'PetSutra', desc: 'Comprehensive pet care & accessories', logo: 'Ps' },
    ],
  },
  {
    category: 'Premium & D2C',
    icon: '💎',
    color: 'from-yellow-900/30 to-amber-900/20',
    border: 'border-yellow-500/20',
    platforms: [
      { name: 'Tata Cliq Luxury', desc: 'Luxury & premium lifestyle platform', logo: 'Tl' },
      { name: 'Nykaa Fashion', desc: "Nykaa's dedicated fashion vertical", logo: 'Nf' },
      { name: 'The Label Life', desc: 'Curated premium lifestyle & fashion', logo: 'Ll' },
      { name: 'Pepperfry', desc: 'Home, lifestyle & fashion accessories', logo: 'Pf' },
    ],
  },
  {
    category: 'B2B & Wholesale',
    icon: '🏭',
    color: 'from-slate-900/30 to-gray-900/20',
    border: 'border-slate-500/20',
    platforms: [
      { name: 'IndiaMART', desc: "India's largest B2B marketplace", logo: 'Im' },
      { name: 'TradeIndia', desc: 'B2B trade & wholesale platform', logo: 'Ti' },
    ],
  },
];

const totalMarketplaces = marketplaces.reduce((acc, cat) => acc + cat.platforms.length, 0);

const whatWeDeliver = [
  { icon: '📋', title: 'Documentation & Brand Evaluation', desc: 'We audit your brand eligibility, prepare all required documents — GST, trademark, FSSAI, brand authorization letters — and ensure a clean first submission.' },
  { icon: '🗂️', title: 'Catalog Creation & Upload', desc: 'Platform-specific catalog creation with optimized titles, bullet points, descriptions, size charts, and all required attributes for each marketplace.' },
  { icon: '🖼️', title: 'Image Formatting & A+ Content', desc: 'Marketplace-compliant product images (white background, lifestyle, infographics) and A+ / Enhanced Brand Content for Amazon, Myntra, and Nykaa.' },
  { icon: '✅', title: 'Quality Audit & Approval', desc: 'We handle rejections, fix QC flags, and resubmit — our 98% first-attempt approval rate is the result of meticulous pre-submission audits.' },
  { icon: '🚀', title: 'Account Activation', desc: 'End-to-end account setup — seller profile, bank details, GST linking, return address configuration, and first product listing going live.' },
  { icon: '📊', title: 'Ongoing Performance Management', desc: 'Pricing strategy, promotional campaigns, inventory monitoring, returns management, and monthly performance reports post-launch.' },
  { icon: '🎯', title: 'Marketplace Ads', desc: 'Sponsored product & brand campaigns on Amazon, Myntra, and Nykaa — keyword research, bid management, and weekly ROAS optimization.' },
  { icon: '🔄', title: 'Inventory & Order Management', desc: 'FBA/FBM setup on Amazon, stock replenishment alerts, order SLA tracking, and returns reconciliation across all active platforms.' },
];

const process = [
  { step: '01', title: 'Brand Audit', desc: 'We evaluate your brand docs, product category, and marketplace eligibility in 24 hours.' },
  { step: '02', title: 'Platform Selection', desc: 'We recommend the right mix of marketplaces based on your category, margin, and target audience.' },
  { step: '03', title: 'Catalog & Content', desc: 'Full catalog shoot (if needed), listing creation, and A+ content production.' },
  { step: '04', title: 'Submission & Approval', desc: 'We submit and manage the approval process — handling rejections and resubmissions until live.' },
  { step: '05', title: 'Go Live & Optimize', desc: 'Account activation, first-sale campaign, and ongoing performance management.' },
];

const packages = [
  {
    name: 'Starter',
    price: '₹30,000',
    ideal: 'New brands · 1–3 marketplaces',
    includes: [
      'Onboarding on 2 marketplaces',
      'Up to 50 SKU listing',
      'Image formatting & upload',
      'Account activation support',
      '1 month post-launch monitoring',
    ],
  },
  {
    name: 'Growth',
    price: '₹75,000',
    ideal: 'Scaling brands · 4–6 marketplaces',
    includes: [
      'Onboarding on up to 5 marketplaces',
      'Up to 200 SKU listing',
      'A+ content / Enhanced Brand Content',
      'Catalog photography (100 SKUs)',
      'Marketplace ads setup (1 platform)',
      '3 months performance management',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    ideal: 'Established brands · 10+ platforms',
    includes: [
      'Onboarding on 10+ marketplaces',
      'Unlimited SKU management',
      'Full A+ content & brand store',
      'Multi-platform ads management',
      'Dedicated account manager',
      '6 months performance management',
    ],
  },
];

const stats = [
  { value: '35+', label: 'Marketplaces', sub: 'we onboard & manage' },
  { value: '4200+', label: 'Brands Onboarded', sub: 'and counting' },
  { value: '98%', label: 'Approval Rate', sub: 'first-attempt success' },
  { value: '7 Days', label: 'Go-Live Time', sub: 'from document submission' },
];

const faqs = [
  { q: 'How many marketplaces can you onboard our brand on simultaneously?', a: 'We can onboard your brand on all 35 platforms simultaneously. Our team manages the documentation, catalogue formatting, QC preparation, and go-live process for each platform in parallel — reducing your total time to live from 6–9 months (sequential DIY) to 6–10 weeks across all platforms at once.' },
  { q: 'What documents are required for marketplace onboarding in India?', a: 'Core requirements across all major platforms: GST certificate, PAN card, cancelled cheque or bank statement, trademark certificate (preferred), brand authorization letter (for multi-brand sellers), and catalogue images meeting each platform\'s specifications. Additional documents vary by platform — Myntra requires quality compliance paperwork; Nykaa requires physical product samples for curation review.' },
  { q: 'How long does Myntra onboarding take?', a: 'Myntra is the most time-intensive of the major platforms. From account application to first sale typically takes 6–12 weeks: account verification (1–2 weeks), catalogue approval (2–4 weeks if standards are met first time), QC inspection (1–2 weeks), and go-live (1 week). Our team\'s Myntra-specific catalogue experience achieves 95% first-attempt catalogue approval — significantly faster than DIY brands.' },
  { q: 'Do you manage the marketplace accounts after onboarding or just set them up?', a: 'Both options are available. Our onboarding service sets up accounts, uploads catalogues, and gets you live. Our ongoing management retainer then handles inventory, pricing, sponsored ads, campaign participation, and performance reporting on a monthly basis. Most brands move to monthly management after successful onboarding.' },
  { q: 'What is your pricing for marketplace onboarding?', a: 'Onboarding fees depend on the number of platforms and SKUs. Single-platform onboarding (e.g., Myntra only) starts at ₹25,000. Our comprehensive 5-platform package (Myntra + AJIO + Amazon + Flipkart + Nykaa) starts at ₹85,000. Ongoing management retainers start at ₹20,000/month per platform. Contact us for a customized quote based on your specific platforms and catalogue size.' },
];

export default function MarketplaceOnboardingPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketplace Onboarding & Management India — Myntra, AJIO, Nykaa, Amazon, Flipkart',
    provider: { '@type': 'LocalBusiness', name: 'Heritage Apparels', url: 'https://www.heritageapparels.com', address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', addressCountry: 'IN' } },
    description: 'End-to-end marketplace onboarding and management across 35+ Indian platforms including Myntra, Nykaa, Amazon India, Flipkart, AJIO, Tata Cliq, Blinkit, and more.',
    areaServed: { '@type': 'Country', name: 'India' },
    offers: { '@type': 'Offer', priceCurrency: 'INR', price: '25000', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'INR', minPrice: '25000', unitText: 'PROJECT' } },
  };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-24 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-burgundy/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Marketplace Onboarding & Management</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Your Brand. Every
            <br />
            <span className="gradient-text italic">Major Marketplace.</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed">
            We onboard and manage your brand across <strong className="text-gold">{totalMarketplaces}+ marketplaces</strong> — Myntra, Nykaa, Amazon, Flipkart, AJIO, Tata Cliq, Blinkit, Zepto, Meesho, JioMart, Purplle, Tira, and more. Documentation, cataloging, approvals, ads, and monthly management — all handled by us.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {['Fashion', 'Beauty', 'Quick Commerce', 'Kids & Baby', 'Pet Care', 'B2B', 'Premium D2C'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold">Onboard My Brand →</Link>
            <Link href="/pricing" className="btn-outline">View Packages</Link>
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

      {/* All Marketplaces */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              All <span className="gradient-text italic">{totalMarketplaces}+ Marketplaces</span> We Cover
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50 text-lg">Every major platform across fashion, beauty, FMCG, quick commerce, kids, pet care, and B2B.</p>
          </div>

          <div className="space-y-10">
            {marketplaces.map((cat) => (
              <div key={cat.category}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-serif text-xl font-bold text-cream">{cat.category}</h3>
                  <span className="px-2.5 py-0.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium">
                    {cat.platforms.length} platforms
                  </span>
                  <div className="flex-1 h-px bg-gold/10" />
                </div>

                {/* Platform Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                  {cat.platforms.map((platform) => (
                    <div
                      key={platform.name}
                      className={`glass-card p-4 bg-gradient-to-br ${cat.color} border ${cat.border} group hover:border-gold/40 transition-all flex items-center gap-3`}
                    >
                      {/* Logo Placeholder */}
                      <div className="w-10 h-10 rounded-lg bg-charcoal/60 border border-gold/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-gold font-serif font-bold text-sm">{platform.logo}</span>
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
      <section className="py-20 bg-[#16213e] relative">
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
              How We <span className="gradient-text italic">Onboard Your Brand</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {process.map((p) => (
              <div key={p.step} className="glass-card p-6 text-center relative">
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
      <section className="py-20 bg-[#16213e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Onboarding <span className="gradient-text italic">Packages</span>
            </h2>
            <div className="gold-divider mx-auto" />
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
                  href="/contact"
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
      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="font-serif text-4xl font-bold text-cream mb-4">Frequently Asked <span className="gradient-text italic">Questions</span></h2><div className="gold-divider mx-auto" /></div>
          <div className="space-y-4">{faqs.map(f => (<div key={f.q} className="glass-card p-6"><h3 className="font-semibold text-cream mb-3 leading-snug">{f.q}</h3><p className="text-cream/60 text-sm leading-relaxed">{f.a}</p></div>))}</div>
        </div>
      </section>

      {/* Browse by Platform */}
      <section className="py-16 bg-charcoal border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-cream mb-3">Browse by <span className="gradient-text italic">Marketplace Platform</span></h2>
            <p className="text-cream/50 text-sm">Each page has platform-specific onboarding guide, requirements, commission rates, and expert tips</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {indiaMarketplaces.map((m) => (
              <Link key={m.slug} href={`/services/marketplace/${m.slug}`} className="glass-card p-4 text-center group hover:border-gold/40 transition-all">
                <div className="font-serif font-bold text-cream text-sm mb-1 group-hover:text-gold transition-colors">{m.name}</div>
                <div className="text-cream/40 text-xs">{m.category.split('(')[0].trim()}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#16213e] border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">
            Ready to Sell on Every <span className="gradient-text italic">Top Marketplace?</span>
          </h2>
          <p className="text-cream/60 mb-8 leading-relaxed">
            Share your brand details and we&apos;ll send you a free marketplace eligibility report — which platforms you qualify for, what documents are needed, and a timeline to go live. No obligations.
          </p>
          <Link href="/contact" className="btn-gold inline-block px-8 py-4">
            Get Free Eligibility Report
          </Link>
        </div>
      </section>
    </main>
  );
}
