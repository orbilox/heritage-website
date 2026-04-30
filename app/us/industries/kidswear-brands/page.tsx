import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kidswear Brand Agency USA | CPSC Compliant India Manufacturing | Heritage Apparels',
  description: 'Launch your kidswear brand in the USA with CPSC-compliant India manufacturing. Children\'s clothing, Amazon Kids, Walmart Baby, and D2C Shopify launch. MOQ from 50 pieces.',
  keywords: ['kidswear brand agency USA', 'children clothing brand launch USA', 'CPSC compliant kids clothing India', 'baby clothing brand USA', 'kids fashion brand agency'],
  alternates: { canonical: 'https://www.heritageapparels.com/us/industries/kidswear-brands' },
};

const compliance = [
  { std: 'CPSC', desc: 'Consumer Product Safety Commission — all children\'s products must meet CPSC standards for safety.' },
  { std: 'Lead & Phthalates', desc: 'Lead content max 100 ppm, phthalates limits for children\'s products under 12.' },
  { std: 'Flammability', desc: '16 CFR 1610 for general children\'s clothing, 1615/1616 for sleepwear — mandatory testing.' },
  { std: 'CPC', desc: 'Children\'s Product Certificate required from CPSC-accepted laboratory for all children\'s items.' },
];

const services = [
  { icon: '🧪', title: 'CPSC Compliance Testing', desc: 'We coordinate all required safety testing with CPSC-accepted labs. CPC documentation included.' },
  { icon: '🏭', title: 'India Manufacturing', desc: 'Soft cotton, organic options, and safe dyes — all tested and compliant for children\'s wear.' },
  { icon: '👶', title: 'Amazon Kids Launch', desc: 'Amazon Kids & Baby category specialists. Brand Registry, A+ Content, and PPC for kidswear.' },
  { icon: '🛒', title: 'Walmart Baby Onboarding', desc: 'Walmart Kids & Baby marketplace setup, compliance documentation, and catalogue management.' },
  { icon: '📸', title: 'Kidswear Photography', desc: 'Child-model photography compliant with US advertising standards for children\'s products.' },
  { icon: '🏪', title: 'Shopify D2C Store', desc: 'Parent-focused D2C store with subscription options, gift sets, and size-guide tools.' },
];

const faqs = [
  { q: 'What CPSC testing is required for children\'s clothing?', a: 'All children\'s apparel sold in the US requires CPSC compliance. Specifically: lead content testing (<100ppm), phthalates limits for accessories, flammability testing (16 CFR 1610), and a Children\'s Product Certificate (CPC) from a CPSC-accepted lab. Children\'s sleepwear has additional requirements under 16 CFR 1615/1616. We coordinate all testing.' },
  { q: 'Is India manufacturing safe for children\'s clothing?', a: 'Yes, when you work with compliant factories. We use factories that are CPSC-aware, use azo-free and lead-free dyes, and produce in facilities audited for child safety standards. Every production run includes CPSC testing before US shipment.' },
  { q: 'What age range do you manufacture for?', a: 'We manufacture newborn (0–3 months) through size 14/16 (big kids). Each size range has specific labelling and compliance requirements which we manage. We also do maternity and nursing wear.' },
  { q: 'What\'s the MOQ for kidswear from India?', a: 'MOQ is typically 50 pieces per style per size run. For a basic kids\' tee in 5 sizes (2T–6T), that\'s 10 pieces per size. We can accommodate smaller test runs of 25 pieces for hero products.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function KidswearBrandsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="py-28 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Kidswear Brands</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight">
            Launch Your Kidswear Brand in the USA<br /><span className="gradient-text italic">CPSC Compliant. India Made.</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl max-w-3xl mx-auto mb-10">Children&apos;s clothing in the US requires strict safety compliance. We manufacture CPSC-compliant kidswear in India and launch brands on Amazon Kids, Walmart Baby, and D2C Shopify.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/us/contact" className="btn-gold py-4 px-8">Launch Kidswear Brand →</Link>
            <Link href="/us/free-brand-audit" className="btn-outline py-4 px-8">Free Brand Audit</Link>
          </div>
        </div>
      </section>

      <section className="py-14 bg-charcoal border-b border-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[{ v: 'CPSC', l: 'Fully Compliant', s: 'all required testing' }, { v: '50 pcs', l: 'Min MOQ', s: 'per style' }, { v: 'Amazon Kids', l: 'Specialists', s: 'category experts' }, { v: 'Lead-Free', l: 'Materials', s: 'safe for children' }].map((s) => (
            <div key={s.v}><div className="font-serif text-4xl font-bold gradient-text mb-1">{s.v}</div><div className="text-cream font-semibold text-sm mb-0.5">{s.l}</div><div className="text-cream/40 text-xs">{s.s}</div></div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14"><h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">Our <span className="gradient-text italic">Kidswear Services</span></h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (<div key={s.title} className="bg-[#16213e] border border-gold/10 rounded-xl p-6 hover:border-gold/30 transition-colors"><div className="text-3xl mb-4">{s.icon}</div><h3 className="font-semibold text-cream mb-2">{s.title}</h3><p className="text-cream/60 text-sm leading-relaxed">{s.desc}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#16213e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="font-serif text-3xl font-bold text-cream">US Compliance <span className="gradient-text italic">Standards We Meet</span></h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {compliance.map((c) => (<div key={c.std} className="bg-charcoal border border-gold/15 rounded-xl p-6 flex gap-4"><div className="w-16 h-16 flex-shrink-0 bg-gold/10 rounded-lg flex items-center justify-center text-gold font-bold text-xs text-center">{c.std}</div><p className="text-cream/70 text-sm leading-relaxed self-center">{c.desc}</p></div>))}
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
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">Launch Your <span className="gradient-text italic">Kidswear Brand</span> with Confidence</h2>
          <p className="text-cream/60 mb-8">CPSC compliant. Beautifully made in India. Sold across America.</p>
          <Link href="/us/contact" className="btn-gold py-4 px-10">Get Started →</Link>
        </div>
      </section>
    </>
  );
}
