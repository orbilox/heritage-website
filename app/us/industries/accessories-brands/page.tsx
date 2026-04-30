import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fashion Accessories Brand Agency USA | Bags, Jewelry & More | Heritage Apparels',
  description: 'Launch your fashion accessories brand in the US market. India manufacturing for handbags, jewelry, scarves, belts, and more. Amazon, Etsy & Shopify launch included.',
  keywords: ['fashion accessories brand agency USA', 'handbag brand agency USA', 'jewelry brand launch USA', 'accessories brand manufacturing India', 'Etsy accessories brand agency'],
  alternates: { canonical: 'https://www.heritageapparels.com/us/industries/accessories-brands' },
};

const services = [
  { icon: '🏭', title: 'India Accessories Manufacturing', desc: 'Leather bags, fabric accessories, jewelry, scarves, belts — sourced from India\'s top accessories factories at 40-60% lower cost.' },
  { icon: '🛍️', title: 'Etsy + Amazon Launch', desc: 'Etsy is the #1 US marketplace for accessories. We set up your shop, optimise listings, and manage Etsy Ads alongside Amazon.' },
  { icon: '📸', title: 'Accessories Photography', desc: 'Flat lays, on-model shots, lifestyle images, and detail close-ups — optimised for Etsy, Amazon, and Shopify.' },
  { icon: '📦', title: 'Custom Packaging', desc: 'Branded boxes, dust bags, tissue paper, ribbon, and thank-you cards — creating an unboxing experience customers share.' },
  { icon: '📈', title: 'Performance Marketing', desc: 'Pinterest, Instagram, and Meta Ads — the highest-converting channels for fashion accessories in the US market.' },
  { icon: '🎨', title: 'Brand Identity', desc: 'Logo, colour palette, brand story, and packaging design — built for the US accessories buyer who values craft and quality.' },
];

const categories = ['Handbags & Totes', 'Clutches & Evening Bags', 'Scarves & Stoles', 'Belts & Leather Goods', 'Jewellery & Beaded Accessories', 'Hats & Headwear', 'Sunglasses & Cases', 'Wallets & Small Leather Goods'];

const faqs = [
  { q: 'What accessories can you manufacture in India?', a: 'We manufacture leather handbags, fabric totes, scarves, stoles, belts, wallets, coin purses, jewellery, beaded accessories, hats, and embroidered accessories. India is particularly known for leather goods from Kanpur and handcrafted textiles from Rajasthan and Gujarat.' },
  { q: 'Is Etsy or Amazon better for fashion accessories?', a: 'Both serve different purposes. Etsy buyers seek handcrafted and unique pieces — perfect for artisan accessories from India. Amazon drives higher volume for more commercial categories. We recommend launching on both simultaneously for maximum reach.' },
  { q: 'What is the MOQ for accessories manufacturing in India?', a: 'MOQ is typically 25–50 pieces per style for fabric accessories, 50–100 for leather goods. Lower than clothing MOQs, making accessories an excellent category for testing before scaling.' },
  { q: 'Do accessories from India meet US customs requirements?', a: 'Yes. We handle CPSC compliance for applicable accessories, country-of-origin labelling, and all US customs documentation. Leather goods have specific import requirements that our team manages end-to-end.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function AccessoriesBrandsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="py-28 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Fashion Accessories</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight">
            Launch Your Accessories Brand<br /><span className="gradient-text italic">in the US Market</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl max-w-3xl mx-auto mb-10">India is the world&apos;s finest source of handcrafted accessories. We connect US brand founders with the best factories — then launch them on Etsy, Amazon, and Shopify.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/us/contact" className="btn-gold py-4 px-8">Start Your Accessories Brand →</Link>
            <Link href="/us/free-brand-audit" className="btn-outline py-4 px-8">Free Brand Audit</Link>
          </div>
        </div>
      </section>

      <section className="py-14 bg-charcoal border-b border-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[{ v: '25 pcs', l: 'Minimum MOQ', s: 'per accessories style' }, { v: '40–60%', l: 'Cost Saving', s: 'vs US suppliers' }, { v: 'Etsy #1', l: 'Marketplace', s: 'for accessories' }, { v: '21 days', l: 'Production', s: 'average lead time' }].map((s) => (
            <div key={s.v}><div className="font-serif text-4xl font-bold gradient-text mb-1">{s.v}</div><div className="text-cream font-semibold text-sm mb-0.5">{s.l}</div><div className="text-cream/40 text-xs">{s.s}</div></div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14"><h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">What We Do for <span className="gradient-text italic">Accessories Brands</span></h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-[#16213e] border border-gold/10 rounded-xl p-6 hover:border-gold/30 transition-colors">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-semibold text-cream mb-2">{s.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#16213e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="font-serif text-3xl font-bold text-cream">Accessories Categories We <span className="gradient-text italic">Manufacture</span></h2></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((c) => (<div key={c} className="bg-charcoal border border-gold/10 rounded-xl p-4 text-center text-cream/80 text-sm font-medium hover:border-gold/30 transition-colors">{c}</div>))}
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
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">Ready to Launch Your <span className="gradient-text italic">Accessories Brand?</span></h2>
          <p className="text-cream/60 mb-8">Tell us your product idea — we&apos;ll send a custom sourcing and launch plan within 24 hours.</p>
          <Link href="/us/contact" className="btn-gold py-4 px-10">Get Started →</Link>
        </div>
      </section>
    </>
  );
}
