import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sustainable Fashion Brand Agency USA | Eco Clothing from India | Heritage Apparels',
  description: 'Launch your sustainable fashion brand in the USA. GOTS-certified organic cotton, recycled fabrics, eco packaging from India. Full US market launch included.',
  keywords: ['sustainable fashion brand agency USA', 'eco clothing brand USA', 'organic fashion brand launch', 'sustainable clothing manufacturer India', 'GOTS certified fashion brand USA'],
  alternates: { canonical: 'https://www.heritageapparels.com/us/industries/sustainable-fashion' },
};

const certifications = [
  { cert: 'GOTS', full: 'Global Organic Textile Standard', desc: 'For organic cotton and natural fibre garments. Required by most US eco retailers.' },
  { cert: 'OEKO-TEX', full: 'OEKO-TEX Standard 100', desc: 'Tests for 100+ harmful substances. Trusted by US consumers as a safety standard.' },
  { cert: 'Recycled Claim Standard', full: 'RCS / GRS', desc: 'Verifies recycled content claims for polyester, nylon, and blended fabrics.' },
  { cert: 'Fair Trade', full: 'Fair Trade Certified', desc: 'Ensures fair wages and safe conditions. Increasingly demanded by US conscious consumers.' },
];

const services = [
  { icon: '🌿', title: 'Certified Organic Sourcing', desc: 'GOTS and OEKO-TEX certified organic cotton, linen, and hemp fabrics from vetted India mills.' },
  { icon: '♻️', title: 'Recycled Fabric Options', desc: 'rPET (recycled plastic bottles), recycled nylon, and post-consumer waste blends for activewear and outerwear.' },
  { icon: '📦', title: 'Eco Packaging', desc: 'Compostable mailers, recycled cardboard, soy-based inks, and plastic-free packaging for your brand.' },
  { icon: '📜', title: 'Certification Management', desc: 'We handle GOTS, OEKO-TEX, and RCS certification paperwork and factory audits.' },
  { icon: '📣', title: 'Sustainability Marketing', desc: 'Brand storytelling, impact metrics, and content strategy that resonates with US eco-conscious buyers.' },
  { icon: '🌐', title: 'Marketplace Launch', desc: 'Amazon Climate Pledge Friendly badge, Etsy\'s eco seller badge, and Shopify sustainability features.' },
];

const faqs = [
  { q: 'What sustainable fabrics can you source from India?', a: 'We source GOTS-certified organic cotton, organic linen, organic hemp, recycled polyester (rPET), recycled nylon, Tencel/lyocell, bamboo blends, and upcycled deadstock fabrics. India is one of the world\'s largest producers of organic cotton.' },
  { q: 'Is GOTS certification expensive for small brands?', a: 'GOTS certification applies to the factory, not the brand. When you manufacture in a GOTS-certified factory through Heritage Apparels, you can claim GOTS certification on your products. We handle the transaction certificate documentation at no extra cost.' },
  { q: 'How do I market sustainability to US consumers authentically?', a: 'US consumers are increasingly skeptical of greenwashing. We help you build authentic claims — specific certifications, real numbers (water saved, CO2 reduced), and factory transparency. Our brand team creates sustainability content that converts.' },
  { q: 'Is sustainable manufacturing from India price-competitive?', a: 'Certified organic and sustainable fabrics cost 20–40% more than conventional fabrics, but India manufacturing is still 35–60% cheaper than US manufacturing even for certified organic. Your final landed cost is typically well below US sustainable alternatives.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function SustainableFashionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="py-28 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Sustainable Fashion</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight">
            Launch a Sustainable Fashion Brand<br /><span className="gradient-text italic">Built on Real Certifications</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl max-w-3xl mx-auto mb-10">GOTS-certified organic cotton, recycled fabrics, eco packaging — all from India. We help you build an authentically sustainable US fashion brand that converts eco-conscious buyers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/us/contact" className="btn-gold py-4 px-8">Launch Sustainable Brand →</Link>
            <Link href="/us/free-brand-audit" className="btn-outline py-4 px-8">Free Brand Audit</Link>
          </div>
        </div>
      </section>

      <section className="py-14 bg-charcoal border-b border-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[{ v: 'GOTS', l: 'Certified Factories', s: 'organic textile standard' }, { v: '40+', l: 'Eco Brands', s: 'launched in USA' }, { v: '$0', l: 'Greenwashing Risk', s: 'real certifications only' }, { v: '35–60%', l: 'Cost Saving', s: 'vs US eco brands' }].map((s) => (
            <div key={s.v}><div className="font-serif text-4xl font-bold gradient-text mb-1">{s.v}</div><div className="text-cream font-semibold text-sm mb-0.5">{s.l}</div><div className="text-cream/40 text-xs">{s.s}</div></div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14"><h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">Our <span className="gradient-text italic">Sustainability Services</span></h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (<div key={s.title} className="bg-[#16213e] border border-gold/10 rounded-xl p-6 hover:border-gold/30 transition-colors"><div className="text-3xl mb-4">{s.icon}</div><h3 className="font-semibold text-cream mb-2">{s.title}</h3><p className="text-cream/60 text-sm leading-relaxed">{s.desc}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#16213e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="font-serif text-3xl font-bold text-cream">Certifications We <span className="gradient-text italic">Support</span></h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certifications.map((c) => (<div key={c.cert} className="bg-charcoal border border-gold/15 rounded-xl p-6 flex gap-4"><div className="w-16 h-16 flex-shrink-0 bg-gold/10 rounded-lg flex items-center justify-center text-gold font-bold text-sm text-center">{c.cert}</div><div><div className="font-semibold text-cream mb-1">{c.full}</div><p className="text-cream/60 text-sm">{c.desc}</p></div></div>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="font-serif text-3xl font-bold text-cream">Frequently Asked <span className="gradient-text italic">Questions</span></h2></div>
          <div className="space-y-4">
            {faqs.map((f) => (<div key={f.q} className="bg-[#16213e] border border-gold/15 rounded-xl p-6"><h3 className="font-semibold text-cream mb-2">{f.q}</h3><p className="text-cream/60 text-sm leading-relaxed">{f.a}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#16213e]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">Build a <span className="gradient-text italic">Genuinely Sustainable</span> Fashion Brand</h2>
          <p className="text-cream/60 mb-8">Real certifications. Real eco credentials. Real US market success.</p>
          <Link href="/us/contact" className="btn-gold py-4 px-10">Get Started →</Link>
        </div>
      </section>
    </>
  );
}
