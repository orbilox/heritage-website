import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Brand Strategy & Visual Identity for Fashion Brands | Heritage Apparels',
  description:
    'Build a distinctive visual identity for your D2C fashion brand. Brand positioning, visual identity systems, photography direction, and brand guidelines by Heritage Apparels.',
  keywords: [
    'fashion brand strategy agency',
    'D2C visual identity design',
    'fashion brand identity India',
    'brand guidelines fashion',
    'fashion brand positioning',
  ],
};

const faqs = [
  { q: 'What does brand strategy include for a fashion brand?', a: 'Our brand strategy service covers: brand positioning and differentiation, target customer persona development, brand naming (if needed), visual identity system (logo, colour palette, typography), tone of voice guidelines, and a complete brand guidelines document. We also define your pricing architecture and market positioning relative to competitors.' },
  { q: 'Do I need brand strategy before launching on Myntra or Amazon?', a: "Yes — your brand's positioning directly determines which marketplace you qualify for, at what price tier, and which audience you target. Brands that skip strategy end up repositioning 12–18 months in, which is far more expensive. We recommend brand strategy as the first investment before any launch activity." },
  { q: 'How is Heritage Apparels brand strategy different from a generic design agency?', a: "We combine brand strategy with manufacturing and marketplace expertise. When we define your brand positioning, we know exactly what price points are achievable given your manufacturing cost, which marketplaces your positioning qualifies for, and what photography and marketing budget your margin can support. Generic agencies don't have this commercial lens." },
  { q: 'How long does the brand strategy process take?', a: 'Our Essentials brand strategy package takes 3–4 weeks. The Growth package (including full identity design) takes 5–7 weeks. The Premium package with custom research and full brand guidelines takes 8–10 weeks. All packages include revision rounds and a final brand presentation call.' },
  { q: 'Can you also execute the strategy — photography, marketing, marketplace — after the strategy is complete?', a: 'Yes. This is our key advantage. Most brands move directly from brand strategy into our photography, marketplace onboarding, and performance marketing services — all under the same team that built the strategy. No briefing handoff, no interpretation loss.' },
];

export default function BrandStrategyPage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'Brand Strategy & Visual Identity for Fashion Brands India', serviceType: 'Brand Strategy & Identity Design', provider: { '@type': 'LocalBusiness', name: 'Heritage Apparels', url: 'https://www.heritageapparels.com', address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', addressCountry: 'IN' } }, description: 'Brand strategy, positioning, and visual identity design for D2C fashion brands in India. Market research, brand naming, logo, and brand guidelines.', areaServed: { '@type': 'Country', name: 'India' } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero */}
      <section className="py-24 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Link href="/services" className="text-gold/70 text-sm hover:text-gold mb-4 block">← Back to Services</Link>
          <p className="section-label mb-4">Brand Strategy & Identity</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            A Brand That
            <br />
            <span className="gradient-text italic">Commands Attention</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            We help fashion founders build visual brand systems that create immediate recognition, communicate premium value, and build genuine customer loyalty.
          </p>
        </div>
      </section>

      {/* What we deliver */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl font-bold text-cream mb-4">
              The Brand Strategy <span className="gradient-text italic">Framework</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🔍',
                title: 'Brand Discovery Workshop',
                desc: 'A facilitated 3-hour workshop with your founding team to surface your brand\'s core values, positioning, target persona, and competitive differentiation.',
              },
              {
                icon: '🎨',
                title: 'Visual Identity System',
                desc: 'Logo design (primary, secondary, icon), color palette with usage rules, typography system, graphic element library, and pattern/texture assets.',
              },
              {
                icon: '📸',
                title: 'Photography Style Guide',
                desc: 'Detailed direction for all future photography: lighting mood, color temperature, composition preferences, model casting, styling direction, and set dressing.',
              },
              {
                icon: '📋',
                title: 'Brand Guidelines Document',
                desc: 'A comprehensive 50+ page brand bible covering every application of your visual identity — from Instagram posts to packaging to OOH advertising.',
              },
              {
                icon: '📊',
                title: 'Competitor Visual Audit',
                desc: 'A detailed analysis of your top 5 competitors\' visual strategies, identifying gaps and opportunities for meaningful differentiation.',
              },
              {
                icon: '🚀',
                title: 'Launch Content Package',
                desc: 'A starter pack of brand-aligned content: hero images, social media templates, email templates, and website photography direction.',
              },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 group">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-serif text-lg font-bold text-cream mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-[#0f0f1e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-cream mb-4">
              What a Strong Brand Identity <span className="gradient-text italic">Achieves</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { stat: '+30%', desc: 'Average price premium achieved by brands with a strong visual identity vs. competitors' },
              { stat: '-42%', desc: 'Reduction in customer acquisition cost when brand identity clearly communicates value' },
              { stat: '+65%', desc: 'Increase in brand recall among target customers within 6 months of identity launch' },
              { stat: '3.2x', desc: 'Higher engagement on social content when visual identity is consistent and distinctive' },
            ].map((item) => (
              <div key={item.stat} className="glass-card p-6 flex items-start gap-5">
                <div className="font-serif text-3xl font-bold gradient-text flex-shrink-0">{item.stat}</div>
                <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-cream mb-4">
              Brand Strategy <span className="gradient-text italic">Investment</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                name: 'Brand Foundation',
                price: '₹85,000',
                desc: 'For emerging brands building their identity from scratch',
                includes: ['Brand discovery workshop', 'Visual identity system', 'Photography style guide', '25-page brand guidelines', 'Competitor audit'],
              },
              {
                name: 'Brand Transformation',
                price: '₹1,50,000+',
                desc: 'For established brands ready to level up',
                includes: ['Everything in Foundation', 'Full brand guidelines (50+ pages)', 'Launch content package', 'Social media templates', '3 strategy sessions', '3 months advisory support'],
              },
            ].map((pkg) => (
              <div key={pkg.name} className="glass-card p-8">
                <h3 className="font-serif text-xl font-bold text-cream mb-1">{pkg.name}</h3>
                <p className="text-cream/50 text-sm mb-4">{pkg.desc}</p>
                <div className="text-3xl font-bold gradient-text font-serif mb-6">{pkg.price}</div>
                <ul className="space-y-2.5 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-cream/70">
                      <span className="text-gold text-xs">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-gold w-full text-center block">Start Your Brand Journey</Link>
              </div>
            ))}
          </div>

          <div className="glass-card p-8">
            <h3 className="font-serif text-2xl font-bold text-cream mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4 mb-8">{faqs.slice(0,3).map(f => (<div key={f.q} className="border-b border-gold/10 pb-4"><h4 className="font-semibold text-cream text-sm mb-2">{f.q}</h4><p className="text-cream/60 text-xs leading-relaxed">{f.a}</p></div>))}</div>
            <h3 className="font-serif text-2xl font-bold text-cream mb-4">Ready to Build Your Brand?</h3>
            <p className="text-cream/60 mb-6">Tell us about your brand, your goals, and where you are in your journey.</p>
            <ContactForm compact />
          </div>
        </div>
      </section>
    </main>
  );
}
