import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fashion Manufacturing & Accessories Sourcing | Heritage Apparels',
  description:
    'Heritage Apparels owns a clothing manufacturing facility and maintains India\'s finest accessories, footwear, and textile factory network. Private label, OEM, and custom collection production for D2C fashion brands.',
  keywords: [
    'fashion manufacturing India',
    'clothing factory India',
    'fashion accessories sourcing',
    'private label fashion India',
    'OEM clothing manufacturer',
    'D2C brand manufacturing',
    'fashion factory to consumer',
  ],
};

const capabilities = [
  {
    icon: '👗',
    title: 'Clothing Manufacturing',
    description: 'Our own facility handles apparel production end-to-end — fabric sourcing, cutting, stitching, finishing, and QA. Casuals, formals, ethnic, activewear, and more.',
    specs: ['MOQ from 100 pieces', 'All fabric types', 'Custom patterns & cuts', 'Wash, print & embroidery'],
  },
  {
    icon: '👜',
    title: 'Bags & Accessories',
    description: 'Handbags, clutches, totes, backpacks, and travel accessories from our vetted partner factories in Delhi, Mumbai, and Kolkata — all with full customization.',
    specs: ['Leather, canvas & vegan options', 'Hardware customization', 'Logo embossing & printing', 'All price tiers available'],
  },
  {
    icon: '💍',
    title: 'Fashion Jewellery',
    description: 'Imitation, semi-precious, and designer jewellery manufactured to your specification — necklaces, earrings, bangles, rings, and complete accessory sets.',
    specs: ['Gold, silver & oxidized finishes', 'Kundan, meenakari, enamel', 'Custom packaging available', 'Pan-India delivery'],
  },
  {
    icon: '👠',
    title: 'Footwear',
    description: 'Heels, flats, sneakers, sandals, and ethnic footwear from Agra, Mumbai, and Kolkata\'s finest shoe manufacturers — fully customizable soles, materials, and branding.',
    specs: ['Leather, synthetic & vegan', 'Custom sole & upper design', 'Brand insole & box', 'Size runs 4–11 UK'],
  },
  {
    icon: '🧣',
    title: 'Textiles & Fabric',
    description: 'Direct access to Surat, Bhilwara, and Tirupur fabric mills — cotton, silk, georgette, crepe, linen, denim, and technical fabrics at mill-direct pricing.',
    specs: ['Direct mill pricing', 'Custom prints & dyeing', 'Sampling in 5–7 days', 'MOQ from 50 metres'],
  },
  {
    icon: '🏷️',
    title: 'Private Label & OEM',
    description: 'Complete white-label and private label services — your brand name, your labels, your packaging, manufactured and fulfilled by our partner network.',
    specs: ['Woven & printed labels', 'Custom hang tags', 'Branded packaging boxes', 'Full NDA confidentiality'],
  },
];

const process = [
  { step: '01', title: 'Requirement Brief', desc: 'Share your product requirement — category, style, quantity, target price, and timeline. We review and send you options within 48 hours.' },
  { step: '02', title: 'Factory Matching', desc: 'We match your requirement with the most suitable factory from our vetted network, considering capacity, specialization, and price.' },
  { step: '03', title: 'Sampling', desc: 'Factory produces physical samples within 7–15 days. You review, approve, or request revisions — all coordinated by your dedicated sourcing manager.' },
  { step: '04', title: 'Production & QA', desc: 'Bulk production with milestone photos at each stage. Our QA team inspects every shipment before it leaves the factory floor.' },
  { step: '05', title: 'Delivery & Fulfillment', desc: 'Products delivered to your warehouse or directly to marketplace fulfillment centers. We handle documentation and logistics.' },
];

const faqs = [
  { q: 'What is the minimum order quantity (MOQ) for clothing manufacturing?', a: 'Our own facility accepts MOQs from 100 pieces per style per colour. For partner factories, MOQs range from 50–200 units depending on product complexity. We help new brands negotiate lower MOQs by consolidating orders across multiple styles.' },
  { q: 'How long does a full production run take from concept to delivery?', a: 'For first-time orders: fabric sourcing (1–2 weeks) + sampling (3–4 weeks) + production run (4–8 weeks) + QC and dispatch (1 week) = approximately 10–15 weeks total. Reorders of approved styles take 4–6 weeks.' },
  { q: 'Do you help with accessories sourcing or only clothing?', a: 'We cover the full product range — clothing (our own facility), bags & handbags, footwear, jewellery, scarves, belts, and fashion accessories through our vetted partner factory network across Delhi, Mumbai, Jaipur, and Kolkata.' },
  { q: 'Can you manufacture products for export to the USA or other countries?', a: 'Yes. We produce export-quality garments with international compliance documentation — GST invoice, packing list, certificate of origin. For US exports we also coordinate CPSC compliance testing, fibre content and care labelling per US requirements.' },
  { q: 'What quality control process do you follow during manufacturing?', a: 'Our QC process includes: pre-production fabric inspection, inline inspection during stitching (checking 10–20% of units), and a final pre-shipment AQL inspection. We reject and replace any units below our quality threshold before delivery.' },
];

export default function ManufacturingPage() {
  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service',
    name: 'Fashion Manufacturing & Accessories Sourcing India',
    serviceType: 'Clothing Manufacturing & Accessories Sourcing',
    provider: { '@type': 'LocalBusiness', name: 'Heritage Apparels', url: 'https://www.heritageapparels.com', address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', addressCountry: 'IN' } },
    description: 'End-to-end clothing manufacturing and accessories sourcing for D2C fashion brands in India. Own factory, MOQ from 100 pieces, full QC.',
    areaServed: { '@type': 'Country', name: 'India' },
    offers: { '@type': 'Offer', priceCurrency: 'INR', price: '150', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'INR', minPrice: '150', unitText: 'PIECE' } },
  };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Fashion Manufacturing & Accessories Sourcing',
    provider: { '@type': 'Organization', name: 'Heritage Apparels' },
    description: 'Own clothing factory and accessories sourcing network for D2C fashion brands in India.',
    areaServed: 'India',
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-24 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Our Unfair Advantage</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            We Own the Factory.
            <br />
            <span className="gradient-text italic">You Own the Brand.</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed">
            No other marketing agency in India can offer what we do — our own clothing manufacturing unit plus an exclusive network of vetted accessories, footwear, jewellery, and textile factories. Source, produce, brand, and sell — all through one partner.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold">Start Manufacturing →</Link>
            <Link href="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="py-12 bg-charcoal border-y border-gold/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: 'Own', label: 'Clothing Factory', sub: 'in-house production' },
              { value: '50+', label: 'Partner Factories', sub: 'vetted & audited' },
              { value: '30 Days', label: 'Avg. Launch Timeline', sub: 'concept to shelf' },
              { value: 'MOQ 100', label: 'Minimum Order', sub: 'clothing apparel' },
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

      {/* Capabilities */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What We Produce</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Complete Fashion <span className="gradient-text italic">Manufacturing Capabilities</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="glass-card p-8 group">
                <div className="text-4xl mb-4">{cap.icon}</div>
                <h3 className="font-serif text-xl font-bold text-cream mb-3 group-hover:text-gold transition-colors">{cap.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed mb-5">{cap.description}</p>
                <ul className="space-y-2">
                  {cap.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs text-cream/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#16213e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              How the <span className="gradient-text italic">Sourcing Process Works</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="space-y-6">
            {process.map((p) => (
              <div key={p.step} className="glass-card p-6 flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold font-bold font-serif text-lg flex-shrink-0">
                  {p.step}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-cream mb-2">{p.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{p.desc}</p>
                </div>
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

      {/* CTA */}
      <section className="py-16 bg-[#16213e] border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">
            Ready to Start <span className="gradient-text italic">Manufacturing Your Brand?</span>
          </h2>
          <p className="text-cream/60 mb-8 leading-relaxed">
            Share your product requirements and we&apos;ll connect you with the right factory, handle sampling, production, and QA — and then take care of everything else from brand identity to performance marketing.
          </p>
          <Link href="/contact" className="btn-gold inline-block px-8 py-4">
            Request a Manufacturing Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
