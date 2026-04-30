import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Luxury Fashion Brand Agency USA | Premium India Manufacturing | Heritage Apparels',
  description: 'Launch your luxury fashion brand in the USA with premium India manufacturing. Hand-crafted garments, artisan embroidery, luxury packaging, and US boutique distribution.',
  keywords: ['luxury fashion brand agency USA', 'premium fashion brand launch USA', 'luxury clothing manufacturer India', 'artisan fashion brand USA', 'luxury D2C fashion brand'],
  alternates: { canonical: 'https://www.heritageapparels.com/us/industries/luxury-fashion' },
};

const differentiators = [
  { icon: '✋', title: 'Artisan Craftsmanship', desc: 'Hand embroidery, zardozi, mirror work, block printing, and hand-stitching — techniques that no fast-fashion factory can replicate.' },
  { icon: '🪡', title: 'Premium Fabric Sourcing', desc: 'Handwoven silks, cashmere blends, sea island cotton, and natural luxury fibres sourced directly from India\'s finest mills.' },
  { icon: '📦', title: 'Luxury Packaging', desc: 'Rigid gift boxes, satin ribbons, tissue paper, dust bags, and wax seals — unboxing experiences that justify premium pricing.' },
  { icon: '📖', title: 'Brand Storytelling', desc: 'Heritage, craft, and artisan narrative — the story every luxury buyer wants to hear. We build it authentically.' },
  { icon: '🏪', title: 'US Boutique Distribution', desc: 'Connections with US boutique buyers, Nordstrom, Saks Fifth Avenue, and premium department store onboarding.' },
  { icon: '📸', title: 'Luxury Photography', desc: 'Editorial-quality photography with luxury models, high-end locations, and production values that match your price point.' },
];

const faqs = [
  { q: 'Can India produce genuine luxury quality for the US market?', a: 'Absolutely. India is one of the world\'s oldest luxury textile producers — Varanasi silk, Kashmiri pashmina, Jaipur block printing, and Lucknowi chikankari are globally recognised luxury crafts. The key is working with the right artisan suppliers, which is our core expertise.' },
  { q: 'What price points do your luxury clients sell at?', a: 'Our luxury clients typically sell at $150–$2,500 per piece in the US market. India manufacturing costs at this tier run $25–$150/piece depending on craftsmanship intensity. The margin structure is excellent — typically 6–10x landed cost.' },
  { q: 'How do you get into Nordstrom or luxury boutiques?', a: 'We have established relationships with US boutique buyers and understand the Nordstrom vendor onboarding process. Requirements include EDI compliance, specific labelling standards, insurance, and quality documentation — all of which we handle.' },
  { q: 'How is luxury brand positioning different from mass market?', a: 'Luxury positioning is about scarcity, story, and craftsmanship — not price alone. We build limited-edition drops, artisan narratives, and heritage stories that create genuine luxury perception. This is brand building, not just product selling.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function LuxuryFashionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="py-28 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Luxury Fashion</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight">
            Launch a Luxury Fashion Brand<br /><span className="gradient-text italic">Crafted in India. Sold in the USA.</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl max-w-3xl mx-auto mb-10">India&apos;s artisan heritage — zardozi, block print, hand embroidery — is the foundation of genuinely luxury fashion. We connect US brand founders with master craftsmen and build premium brands that command $300–$2,500 per piece.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/us/contact" className="btn-gold py-4 px-8">Launch Luxury Brand →</Link>
            <Link href="/us/free-brand-audit" className="btn-outline py-4 px-8">Free Brand Audit</Link>
          </div>
        </div>
      </section>

      <section className="py-14 bg-charcoal border-b border-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[{ v: '6–10x', l: 'Avg Margin', s: 'on luxury pieces' }, { v: '$300+', l: 'Per Piece Retail', s: 'achievable price point' }, { v: 'Artisan', l: 'Craftsmanship', s: 'hand-made in India' }, { v: 'Nordstrom', l: 'Distribution', s: 'onboarding available' }].map((s) => (
            <div key={s.v}><div className="font-serif text-4xl font-bold gradient-text mb-1">{s.v}</div><div className="text-cream font-semibold text-sm mb-0.5">{s.l}</div><div className="text-cream/40 text-xs">{s.s}</div></div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14"><h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">What Makes Our Luxury Brands <span className="gradient-text italic">Different</span></h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d) => (<div key={d.title} className="bg-[#16213e] border border-gold/20 rounded-xl p-6 hover:border-gold/40 transition-colors"><div className="text-3xl mb-4">{d.icon}</div><h3 className="font-semibold text-cream mb-2">{d.title}</h3><p className="text-cream/60 text-sm leading-relaxed">{d.desc}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#16213e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="font-serif text-3xl font-bold text-cream">Frequently Asked <span className="gradient-text italic">Questions</span></h2></div>
          <div className="space-y-4">
            {faqs.map((f) => (<div key={f.q} className="bg-charcoal border border-gold/15 rounded-xl p-6"><h3 className="font-semibold text-cream mb-2">{f.q}</h3><p className="text-cream/60 text-sm leading-relaxed">{f.a}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">Build a <span className="gradient-text italic">True Luxury Brand</span> from India</h2>
          <p className="text-cream/60 mb-8">Artisan craftsmanship. Premium positioning. US luxury market entry.</p>
          <Link href="/us/contact" className="btn-gold py-4 px-10">Start Your Luxury Brand →</Link>
        </div>
      </section>
    </>
  );
}
