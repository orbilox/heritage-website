import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shopify Fashion Brand Agency USA | D2C Store Build & Growth | Heritage Apparels',
  description: 'We build and scale Shopify stores for US fashion brands. Custom design, US payment setup, Meta Ads integration, email flows, and full conversion optimization. Average 3x revenue in 90 days.',
  keywords: ['Shopify fashion brand agency USA', 'Shopify fashion store setup', 'D2C fashion Shopify agency', 'Shopify clothing brand agency', 'fashion brand Shopify store USA'],
  alternates: { canonical: 'https://www.heritageapparels.com/us/shopify-fashion-agency' },
  openGraph: { title: 'Shopify Fashion Brand Agency USA | Heritage Apparels', description: 'We build high-converting Shopify stores for US fashion brands — from design to Meta Ads. Average client sees 3x revenue in 90 days.', type: 'website', locale: 'en_US' },
};

const deliverables = [
  { icon: '🎨', title: 'Custom Shopify Theme', desc: 'Mobile-first, conversion-optimised design built around your brand identity. No generic templates.' },
  { icon: '🛒', title: 'US Payment Setup', desc: 'Stripe, PayPal, Shop Pay, Afterpay — configured for all 50 states with automatic tax calculation.' },
  { icon: '📦', title: 'Shipping & Fulfilment', desc: 'US shipping zones, carrier-calculated rates, FBA integration, and returns portal setup.' },
  { icon: '📧', title: 'Klaviyo Email Flows', desc: 'Welcome series, abandoned cart, post-purchase, win-back — all automated and brand-matched.' },
  { icon: '📊', title: 'Analytics Stack', desc: 'Meta Pixel, Google Analytics 4, Clarity heatmaps, and conversion tracking from day one.' },
  { icon: '⚡', title: 'App Stack', desc: 'Reviews (Okendo), upsells (ReConvert), loyalty (Smile.io), and subscriptions — installed and tuned.' },
  { icon: '🔍', title: 'Shopify SEO', desc: 'Title tags, meta descriptions, schema markup, sitemap, and collection page optimisation.' },
  { icon: '📱', title: 'Social Commerce', desc: 'TikTok Shop, Instagram Shopping, and Pinterest catalogue connected and synced.' },
];

const packages = [
  {
    name: 'Launch Store',
    price: '$3,500',
    timeline: '2 weeks',
    ideal: 'New brands launching for the first time',
    features: ['Custom Shopify theme (premium template customised)', 'Up to 50 products uploaded', 'US payment & shipping setup', 'Meta Pixel + GA4 installed', 'Basic Klaviyo welcome flow', 'Mobile optimised'],
  },
  {
    name: 'Growth Store',
    price: '$7,500',
    timeline: '3–4 weeks',
    ideal: 'Scaling brands wanting full stack',
    popular: true,
    features: ['Everything in Launch', 'Fully custom Shopify design', 'Up to 200 products', 'Complete Klaviyo flows (5 automations)', 'Upsell + loyalty app setup', 'Shopify SEO optimisation', 'TikTok & Instagram shopping', '30-day post-launch support'],
  },
  {
    name: 'Enterprise Store',
    price: 'From $15,000',
    timeline: '6–8 weeks',
    ideal: 'Large catalogues, B2B + D2C, custom features',
    features: ['Everything in Growth', '500+ products', 'Custom Shopify app development', 'Wholesale / B2B portal', 'Multi-currency & international', 'Dedicated project manager', '90-day post-launch retainer'],
  },
];

const stats = [
  { value: '3x', label: 'Average Revenue Lift', sub: 'within 90 days of launch' },
  { value: '4.2%', label: 'Average CVR', sub: 'vs 1.8% industry avg' },
  { value: '200+', label: 'Shopify Stores Built', sub: 'across US fashion brands' },
  { value: '48 hrs', label: 'First Sale Guaranteed', sub: 'or we fix it free' },
];

const faqs = [
  { q: 'How long does it take to build a Shopify fashion store?', a: 'Our Launch Store takes 2 weeks. Growth Store takes 3–4 weeks. Enterprise is 6–8 weeks. Timeline starts after brand assets (logo, product photos) are received from you.' },
  { q: 'Do you use custom themes or premium templates?', a: 'Launch Store uses a premium Shopify theme (like Dawn or Prestige) that we heavily customise to your brand. Growth and Enterprise stores are custom-designed from scratch in Figma, then developed in Shopify.' },
  { q: 'Can you connect my Shopify store to Amazon and TikTok Shop?', a: 'Yes. We connect Shopify to Amazon via the Amazon Sales Channel app, TikTok Shop via the TikTok Shopify app, and Instagram/Facebook Shopping via the Meta Sales Channel. Your inventory syncs across all channels.' },
  { q: 'Do you handle ongoing Shopify management after launch?', a: 'Yes. Our monthly Shopify management retainer ($1,200/mo) includes CRO testing, email campaign management, app management, and monthly performance reporting. Most Growth clients add this.' },
  { q: 'Can you migrate my existing store to Shopify?', a: 'Yes. We migrate from WooCommerce, Wix, BigCommerce, Squarespace, or any other platform — preserving your product data, customer records, and SEO URLs.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function ShopifyFashionAgencyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-28 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute left-0 top-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Shopify Fashion Agency</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight">
            Build a Shopify Store That<br />
            <span className="gradient-text italic">Actually Sells Fashion</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            We design, build, and scale Shopify stores for US fashion brands — with US payment gateways, Meta Ads integration, email flows, and conversion optimisation baked in from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/us/contact" className="btn-gold text-base py-4 px-8">Start Your Shopify Store →</Link>
            <Link href="/us/free-brand-audit" className="btn-outline text-base py-4 px-8">Get Free Store Audit</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-charcoal border-b border-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.value}>
                <div className="font-serif text-4xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-cream font-semibold text-sm mb-0.5">{s.label}</div>
                <div className="text-cream/40 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What's Included</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">
              Everything Your Shopify Store <span className="gradient-text italic">Needs to Convert</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((d) => (
              <div key={d.title} className="bg-[#16213e] border border-gold/10 rounded-xl p-6 hover:border-gold/30 transition-colors">
                <div className="text-3xl mb-4">{d.icon}</div>
                <h3 className="font-semibold text-cream mb-2">{d.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Pricing</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">
              Shopify Store <span className="gradient-text italic">Packages</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`relative bg-charcoal rounded-2xl p-8 border ${pkg.popular ? 'border-gold' : 'border-gold/20'}`}>
                {pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-[#1a1a2e] text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>}
                <div className="text-sm text-cream/50 mb-1">{pkg.ideal}</div>
                <div className="font-serif text-2xl font-bold text-cream mb-1">{pkg.name}</div>
                <div className="gradient-text font-bold text-3xl mb-1">{pkg.price}</div>
                <div className="text-cream/40 text-xs mb-6">Delivered in {pkg.timeline}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-cream/70">
                      <span className="text-gold mt-0.5 flex-shrink-0">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="/us/contact" className={pkg.popular ? 'btn-gold w-full block text-center py-3' : 'btn-outline w-full block text-center py-3'}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-cream/40 text-sm mt-8">All prices in USD. Monthly management retainer $1,200/mo available for all packages.</p>
        </div>
      </section>

      {/* Why Shopify for Fashion */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-cream">Why Shopify for US Fashion Brands?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🏆', title: 'Full Brand Control', desc: 'Unlike Amazon or Walmart, your Shopify store is 100% yours. Your branding, your customer data, your pricing — no marketplace rules.' },
              { icon: '💰', title: 'Higher Profit Margins', desc: 'No marketplace fees (Amazon charges 15–17% referral). Shopify fees are $0.30 + 2.9% per transaction — significantly better margins at scale.' },
              { icon: '👥', title: 'Own Your Customers', desc: 'Build an email list, loyalty programme, and customer relationship that compounds over time. Marketplace customers belong to the marketplace — Shopify customers belong to you.' },
            ].map((r) => (
              <div key={r.title} className="text-center p-8 bg-[#16213e] rounded-2xl border border-gold/10">
                <div className="text-4xl mb-4">{r.icon}</div>
                <h3 className="font-semibold text-cream text-lg mb-3">{r.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-cream">Frequently Asked <span className="gradient-text italic">Questions</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-charcoal border border-gold/15 rounded-xl p-6">
                <h3 className="font-semibold text-cream mb-2">{f.q}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">Ready to Build Your <span className="gradient-text italic">Shopify Fashion Store?</span></h2>
          <p className="text-cream/60 mb-8 text-lg">Tell us about your brand and we'll send you a custom store proposal within 24 hours.</p>
          <Link href="/us/contact" className="btn-gold text-base py-4 px-10">Start Your Store →</Link>
        </div>
      </section>
    </>
  );
}
