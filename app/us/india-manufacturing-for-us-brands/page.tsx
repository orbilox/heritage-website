import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'India Clothing Manufacturing for US Brands | 35% Cost Saving | Heritage Apparels',
  description:
    'Source private-label clothing from India for your US brand. Heritage Apparels owns a factory in India — quality garments at 35–60% lower cost than US manufacturing. MOQ from 50 pieces.',
  keywords: [
    'clothing manufacturer India for US brands',
    'India clothing manufacturer USA',
    'private label clothing India',
    'source clothing from India USA',
    'India apparel manufacturing US brands',
    'MOQ 50 pieces clothing India',
    'CPSC compliant clothing manufacturer India',
    'fashion sourcing India US entrepreneurs',
  ],
  alternates: {
    canonical: 'https://www.heritageapparels.com/us/india-manufacturing-for-us-brands',
  },
  openGraph: {
    title: 'India Clothing Manufacturing for US Brands | Heritage Apparels',
    description: 'Source private-label clothing from India. 35–60% lower cost than US manufacturing. MOQ from 50 pieces. CPSC compliant.',
    type: 'website',
    locale: 'en_US',
  },
};

const stats = [
  { value: '50 pcs', label: 'Minimum MOQ', sub: 'per style to start' },
  { value: '21 Days', label: 'Avg Production', sub: 'sample to finished goods' },
  { value: '35–60%', label: 'Cost Saving', sub: 'vs US domestic manufacturing' },
  { value: '100%', label: 'CPSC Compliant', sub: 'US import-ready shipments' },
];

const categories = [
  { icon: '👕', title: 'Tops & T-Shirts', desc: 'Basic tees, graphic tees, crop tops, blouses, shirts — cotton, poly, blends, and performance fabrics from Tirupur.' },
  { icon: '👖', title: 'Bottoms & Denim', desc: 'Jeans, trousers, joggers, shorts, skirts — woven and knit constructions from Ahmedabad and Bengaluru.' },
  { icon: '👗', title: 'Dresses & Jumpsuits', desc: 'Casual, maxi, midi, bodycon, wrap dresses and jumpsuits — all silhouettes, all fabrications.' },
  { icon: '🏃', title: 'Activewear & Athleisure', desc: 'Leggings, sports bras, bike shorts, hoodies — moisture-wicking and compression fabrications for US fitness brands.' },
  { icon: '🧥', title: 'Outerwear & Jackets', desc: 'Bomber jackets, denim jackets, windbreakers, blazers, and coats — structured and casual outerwear.' },
  { icon: '👜', title: 'Accessories & Bags', desc: 'Tote bags, crossbody bags, backpacks, scarves, and belts — from our vetted leather goods and accessory factories.' },
];

const processSteps = [
  { num: '01', title: 'Design Brief', desc: 'Share your tech pack, sketch, or inspiration. We review feasibility and assign a production manager to your brand.' },
  { num: '02', title: 'Sample', desc: 'We produce a physical sample at our India factory. Typical sample turnaround: 7–10 business days.' },
  { num: '03', title: 'Approval', desc: 'You review and approve the sample — or request revisions. We iterate until the product is exactly right.' },
  { num: '04', title: 'Production', desc: 'Full production run begins at our factory. Average 21-day production cycle for standard styles.' },
  { num: '05', title: 'QC Inspection', desc: 'Every shipment undergoes quality control inspection against your spec — measurements, stitching, trims, and packaging.' },
  { num: '06', title: 'US Shipping', desc: 'Air or sea freight to your US warehouse, Amazon FBA, or direct to customer. All customs docs handled.' },
];

const certifications = [
  { icon: '✅', title: 'CPSC Compliance', desc: 'Consumer Product Safety Commission standards met for all product categories — flammability, fiber content, and children\'s products.' },
  { icon: '🌿', title: 'OEKO-TEX Certified', desc: 'Fabrics tested and certified free from harmful substances under OEKO-TEX Standard 100.' },
  { icon: '♻️', title: 'GOTS Certified', desc: 'Global Organic Textile Standard certification available for organic cotton product lines.' },
  { icon: '🏷️', title: 'Country-of-Origin Labels', desc: 'All garments labeled "Made in India" per US FTC regulations — care content labels and fiber content included.' },
  { icon: '📄', title: 'US Customs Documentation', desc: 'Commercial invoices, packing lists, certificates of origin, HS code classification — all prepared for smooth US clearance.' },
];

const costComparison = [
  { item: 'Basic T-Shirt (100% cotton)', us: '$18–28', india: '$4–8' },
  { item: 'Dress (woven, mid-complexity)', us: '$25–45', india: '$8–14' },
  { item: 'Denim Jeans (5-pocket)', us: '$35–60', india: '$10–18' },
  { item: 'Activewear Leggings', us: '$22–38', india: '$7–12' },
  { item: 'Bomber Jacket (polyester)', us: '$55–90', india: '$18–30' },
  { item: 'Tote Bag (canvas)', us: '$12–20', india: '$3–7' },
];

const faqs = [
  {
    q: 'What is the minimum order quantity (MOQ) for US brands sourcing from your India factory?',
    a: 'Our MOQ starts at 50 pieces per style, per color. For new brands testing a market, we accommodate sample runs of 10–20 units per style at a premium. Once you scale to 200+ units per style, per-unit pricing drops significantly. We are one of the few India manufacturers offering sub-100 MOQs for US startups.',
  },
  {
    q: 'How long does shipping from India to the USA take?',
    a: 'Air freight from India to the US takes 5–8 business days (door to door). Sea freight takes 25–35 days. We coordinate both and manage all customs documentation. Most brands use air for initial orders and switch to sea for bulk production to optimize cost.',
  },
  {
    q: 'Do your products meet US safety and import standards?',
    a: 'Yes. All products are manufactured to CPSC standards. We coordinate lab testing at Bureau Veritas and SGS India for flammability, fiber content labeling, and children\'s product requirements. All shipments include country-of-origin labels (Made in India), care labels, and fiber content labels as required by US FTC regulations.',
  },
  {
    q: 'Can I visit your India factory before placing an order?',
    a: 'Absolutely. We welcome factory visits. Our primary manufacturing facility is located in India and we can arrange a guided tour of the cutting, sewing, finishing, and QC departments. For brands unable to visit in person, we provide a full factory video walkthrough and detailed compliance documentation.',
  },
  {
    q: 'Do you handle US customs clearance and Amazon FBA prep?',
    a: 'Yes. We prepare all export documentation — commercial invoice, packing list, certificate of origin, and HS code classification. We also offer FBA-prep services: poly bagging, individual labeling, FNSKU stickering, and carton labeling to Amazon\'s exact specifications. You can ship directly from our India factory to your Amazon FBA warehouse.',
  },
];

export default function IndiaManufacturingPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'India Clothing Manufacturing for US Brands',
    serviceType: 'Apparel Manufacturing & Sourcing',
    provider: {
      '@type': 'Organization',
      name: 'Heritage Apparels',
      url: 'https://www.heritageapparels.com/us',
    },
    description:
      'Private-label clothing manufacturing in India for US fashion brands. MOQ from 50 pieces, 21-day production, 35–60% cost saving vs US manufacturing, CPSC compliant.',
    areaServed: { '@type': 'Country', name: 'United States' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '4',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        minPrice: '4',
        unitText: 'PIECE',
      },
    },
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-24 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">🏭 India Manufacturing for US Brands</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Source Fashion from India.
            <br />
            <span className="gradient-text italic">Save 35–60% vs US Manufacturing.</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-3xl mx-auto">
            Heritage Apparels owns a factory in India. We manufacture private-label clothing for US brands at 35–60% lower cost than domestic production — CPSC compliant, FBA-ready, MOQ from 50 pieces.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold">Get a Free Manufacturing Quote →</Link>
            <Link href="/us/services" className="btn-outline">All US Services</Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
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

      {/* Cost comparison table */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Cost Comparison</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              India vs US Manufacturing: <span className="gradient-text italic">Real Numbers</span>
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50">Per-unit production cost (ex-factory). Does not include shipping.</p>
          </div>
          <div className="glass-card overflow-hidden">
            <div className="grid grid-cols-3 bg-gold/10 px-6 py-4 text-sm font-semibold text-cream/70">
              <div>Product</div>
              <div className="text-center">US Factory</div>
              <div className="text-center gradient-text">India Factory</div>
            </div>
            {costComparison.map((row, i) => (
              <div key={row.item} className={`grid grid-cols-3 px-6 py-4 text-sm border-t border-gold/5 ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}>
                <div className="text-cream/80">{row.item}</div>
                <div className="text-center text-cream/50">{row.us}</div>
                <div className="text-center font-semibold text-gold">{row.india}</div>
              </div>
            ))}
            <div className="px-6 py-4 bg-gold/5 border-t border-gold/10 text-center text-cream/40 text-xs">
              Prices are indicative ex-factory FOB India. Exact quotes provided after reviewing your tech pack.
            </div>
          </div>

          {/* Cost calculator teaser */}
          <div className="mt-10 glass-card p-8 border-gold/20 text-center">
            <p className="section-label mb-3">Savings Calculator</p>
            <p className="font-serif text-2xl font-bold text-cream mb-3">
              A brand doing <span className="gradient-text">500 pieces/month</span> saves
            </p>
            <p className="font-serif text-4xl font-bold gradient-text mb-4">$6,000–$11,500/month</p>
            <p className="text-cream/50 text-sm mb-6">by sourcing from our India factory instead of a US manufacturer.</p>
            <Link href="/us/contact" className="btn-gold">Calculate My Savings →</Link>
          </div>
        </div>
      </section>

      {/* What we manufacture */}
      <section className="py-20 bg-[#0d1b3e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Product Categories</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              What We <span className="gradient-text italic">Manufacture</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((item) => (
              <div key={item.title} className="glass-card p-6 group">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-lg font-bold text-cream mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our process */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">How It Works</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Our 6-Step <span className="gradient-text italic">Production Process</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.num} className="glass-card p-6 relative">
                <div className="font-serif text-4xl font-bold gradient-text mb-4 opacity-50">{step.num}</div>
                <h3 className="font-serif text-xl font-bold text-cream mb-2">{step.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & certifications */}
      <section className="py-20 bg-[#0d1b3e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Compliance</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              US Compliance &amp; <span className="gradient-text italic">Certifications</span>
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50 max-w-xl mx-auto">Every shipment leaves India with complete US import documentation — no surprises at customs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((item) => (
              <div key={item.title} className="glass-card p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-serif text-base font-bold text-cream mb-2">{item.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Frequently Asked <span className="gradient-text italic">Questions</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card p-6">
                <h3 className="font-semibold text-cream mb-3 leading-snug">{faq.q}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0d1b3e] border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">
            Ready to Source from <span className="gradient-text italic">India?</span>
          </h2>
          <p className="text-cream/60 mb-8 leading-relaxed">
            Tell us your product category and we&apos;ll send a free cost comparison — India manufacturing vs US manufacturing — with realistic timelines and MOQs for your brand.
          </p>
          <Link href="/us/contact" className="btn-gold inline-block px-8 py-4">Get Free Manufacturing Quote</Link>
        </div>
      </section>
    </main>
  );
}
