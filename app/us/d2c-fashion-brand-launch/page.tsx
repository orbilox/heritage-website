import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'D2C Fashion Brand Launch Agency USA | 0 to First Sale in 45 Days | Heritage Apparels',
  description: 'We launch D2C fashion brands in the US market — from India sourcing and brand identity to Shopify store and performance marketing. Zero to first sale in 45 days.',
  keywords: ['D2C fashion brand launch USA', 'direct to consumer fashion brand agency', 'fashion brand launch agency USA', 'start D2C clothing brand USA', 'fashion brand launch from scratch USA'],
  alternates: { canonical: 'https://www.heritageapparels.com/us/d2c-fashion-brand-launch' },
  openGraph: { title: 'D2C Fashion Brand Launch Agency USA | Heritage Apparels', description: 'Launch your D2C fashion brand in the USA in 45 days. India manufacturing + brand identity + Shopify + performance marketing.', type: 'website', locale: 'en_US' },
};

const included = [
  { icon: '🔍', title: 'Market Research & Niche', desc: 'We identify your ideal US customer, map competitors, and define a positioning that commands premium pricing.' },
  { icon: '✏️', title: 'Brand Name & Logo', desc: 'A memorable US-market brand name, logo system, color palette, and typography — designed for American consumers.' },
  { icon: '📦', title: 'India Manufacturing', desc: 'Factory sourcing, sampling, bulk production, and QC at 35–60% lower cost than US manufacturing.' },
  { icon: '📸', title: 'Product Photography', desc: 'White-background Amazon-compliant shots, lifestyle photos with US models, and infographic images.' },
  { icon: '🛍️', title: 'Shopify D2C Store', desc: 'Custom-designed, conversion-optimised Shopify store with US payments, shipping, and email flows.' },
  { icon: '🌐', title: 'Marketplace Onboarding', desc: 'Amazon, Walmart, Etsy, and TikTok Shop — accounts registered, catalogues uploaded, listings optimised.' },
  { icon: '📣', title: 'Launch Campaign', desc: 'Meta + Google Ads timed for launch day. Pre-launch Instagram & TikTok organic build-up.' },
  { icon: '📊', title: '90-Day Growth Roadmap', desc: 'A week-by-week US growth plan with KPIs, ad budgets, reorder timelines, and scaling milestones.' },
];

const timeline = [
  { week: 'Week 1–2', phase: 'Brand Identity', tasks: ['Market research & positioning', 'Brand naming & logo', 'Color palette & typography', 'Packaging design'] },
  { week: 'Week 2–3', phase: 'Product & Photography', tasks: ['India factory setup', 'Sample review & approval', 'Photography session', 'A+ Content creation'] },
  { week: 'Week 3–4', phase: 'Store & Marketplaces', tasks: ['Shopify store build', 'Amazon Brand Registry', 'Walmart & Etsy setup', 'TikTok Shop connection'] },
  { week: 'Week 4–6', phase: 'Marketing & Launch', tasks: ['Meta & Google Ads launch', 'TikTok organic content', 'Email list build', 'PR & influencer outreach'] },
];

const packages = [
  { name: 'Seed', price: '$12,000', ideal: 'First-time brand founders', features: ['Brand identity (name, logo, palette)', '50-piece India production run', '50-SKU product photography', 'Shopify Launch Store', 'Amazon + Etsy onboarding', '30-day Meta Ads launch'] },
  { name: 'Scale', price: '$22,000', ideal: 'Serious market entry', popular: true, features: ['Everything in Seed', 'Full brand identity system', '150-piece production run', '150-SKU full photography', 'Amazon + Walmart + Etsy + TikTok', 'Meta + Google Ads (3 months)', 'Klaviyo email flows', '90-day growth roadmap'] },
  { name: 'Enterprise', price: 'Custom', ideal: 'Multi-product, multi-channel launch', features: ['Everything in Scale', '500+ piece production', '5+ marketplace onboarding', 'Performance marketing (6 months)', 'Influencer + UGC campaign', 'Dedicated brand manager', 'Quarterly strategy reviews'] },
];

const stats = [
  { value: '45 Days', label: 'Idea to First Sale', sub: 'guaranteed timeline' },
  { value: '500+', label: 'Brands Launched', sub: 'India & USA combined' },
  { value: '4–8x', label: 'Average ROAS', sub: 'on launch campaigns' },
  { value: '$0', label: 'Hidden Fees', sub: 'fixed-price packages' },
];

const faqs = [
  { q: 'What do I need to provide to get started?', a: 'We need your product idea or concept, a rough budget, and your target US customer in mind. We handle everything else — from brand naming and manufacturing to store build and ads launch.' },
  { q: 'Do I need a US LLC to launch a D2C brand?', a: 'You do not need a US LLC to sell on most US marketplaces or run a Shopify store. However, for Walmart Marketplace and US banking, a US EIN is required. We guide you through the exact setup needed for your specific channels.' },
  { q: 'Does the package include India manufacturing?', a: 'Our Scale and Enterprise packages include India manufacturing coordination. Seed package covers photography, store, and ads — manufacturing is quoted separately based on your product and volume.' },
  { q: 'How much should I budget for ads after launch?', a: 'We recommend a minimum $3,000/month ad budget for meaningful D2C traction. Meta Ads typically deliver the fastest D2C results for fashion. Our launch campaigns are designed to find winning ad sets in the first 30 days.' },
  { q: 'What if I already have a brand but want to enter the US market?', a: 'We have a US Market Entry package specifically for established India brands wanting US expansion. This covers US brand registry, Amazon/Walmart onboarding, photography compliance, and US ad campaigns. Ask us about this when you contact us.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function D2CFashionBrandLaunchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-28 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">D2C Brand Launch</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight">
            Launch Your D2C Fashion Brand<br /><span className="gradient-text italic">Zero to First Sale in 45 Days</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            We handle everything — India manufacturing, brand identity, Shopify store, Amazon onboarding, and your launch marketing campaign. You focus on the vision. We build the brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/us/contact" className="btn-gold text-base py-4 px-8">Launch My Brand →</Link>
            <Link href="/us/free-brand-audit" className="btn-outline text-base py-4 px-8">Get Free Brand Audit</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-charcoal border-b border-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.value}>
              <div className="font-serif text-4xl font-bold gradient-text mb-1">{s.value}</div>
              <div className="text-cream font-semibold text-sm mb-0.5">{s.label}</div>
              <div className="text-cream/40 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What's Included</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">
              Everything to Launch a <span className="gradient-text italic">Winning D2C Brand</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {included.map((item) => (
              <div key={item.title} className="bg-[#16213e] border border-gold/10 rounded-xl p-6 hover:border-gold/30 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-cream mb-2">{item.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">45-Day Launch Timeline</p>
            <h2 className="font-serif text-3xl font-bold text-cream">From Idea to <span className="gradient-text italic">First Sale</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((t, i) => (
              <div key={t.week} className="relative">
                {i < timeline.length - 1 && <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gold/20 z-0" />}
                <div className="bg-charcoal border border-gold/20 rounded-xl p-6 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold font-bold text-sm mb-4">{i + 1}</div>
                  <div className="text-gold text-xs font-semibold mb-1">{t.week}</div>
                  <div className="font-semibold text-cream mb-3">{t.phase}</div>
                  <ul className="space-y-1">
                    {t.tasks.map((task) => (<li key={task} className="text-cream/50 text-xs flex items-start gap-1"><span className="text-gold/60">·</span>{task}</li>))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">D2C Launch <span className="gradient-text italic">Packages</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`relative bg-[#16213e] rounded-2xl p-8 border ${pkg.popular ? 'border-gold' : 'border-gold/20'}`}>
                {pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-[#1a1a2e] text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>}
                <div className="text-sm text-cream/50 mb-1">{pkg.ideal}</div>
                <div className="font-serif text-2xl font-bold text-cream mb-1">{pkg.name}</div>
                <div className="gradient-text font-bold text-3xl mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (<li key={f} className="flex items-start gap-2 text-sm text-cream/70"><span className="text-gold mt-0.5">✓</span>{f}</li>))}
                </ul>
                <Link href="/us/contact" className={pkg.popular ? 'btn-gold w-full block text-center py-3' : 'btn-outline w-full block text-center py-3'}>Get Started</Link>
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
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">Ready to Launch Your <span className="gradient-text italic">D2C Fashion Brand?</span></h2>
          <p className="text-cream/60 mb-8 text-lg">Tell us your idea — we'll send a custom launch plan within 24 hours.</p>
          <Link href="/us/contact" className="btn-gold text-base py-4 px-10">Start My Brand Launch →</Link>
        </div>
      </section>
    </>
  );
}
