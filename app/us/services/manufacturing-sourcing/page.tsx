import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'India Manufacturing & Sourcing for US Brands | Heritage Apparels USA',
  description:
    'Source and manufacture apparel, accessories, footwear, and lifestyle products from India at 35–60% lower cost than US production. Private label, OEM, custom designs — US-compliant and export-ready.',
};

const whatWeDeliver = [
  { icon: '👗', title: 'Apparel Manufacturing', desc: 'T-shirts, dresses, activewear, ethnic wear, outerwear — cut, sew, and finish at our own clothing manufacturing facility with strict QA.' },
  { icon: '👜', title: 'Bags & Accessories', desc: 'Handbags, totes, clutches, belts, and fashion accessories from our vetted network of Indian leather and fabric goods factories.' },
  { icon: '💍', title: 'Jewellery & Accessories', desc: 'Fashion jewellery, semi-precious stone pieces, statement accessories — designed to your spec and produced at India\'s artisan jewellery clusters.' },
  { icon: '👟', title: 'Footwear', desc: 'Casual, fashion, and athletic footwear manufactured through our Agra and Chennai factory network — all US sizing standards.' },
  { icon: '🏷️', title: 'Private Label & OEM', desc: 'Your brand, our factory. Full private-label production from hang tags and care labels to poly bags, boxes, and export cartons.' },
  { icon: '🧵', title: 'Fabric Sourcing', desc: 'Cotton, linen, silk, polyester, blends — we source fabrics from Surat, Tirupur, and Bhiwandi at wholesale prices.' },
  { icon: '✅', title: 'US-Compliance QA', desc: 'CPSC, ASTM, and California Prop 65 checks built into our QA process — every shipment inspected before it leaves India.' },
  { icon: '🛃', title: 'Export & Customs Docs', desc: 'HS code classification, commercial invoices, packing lists, certificates of origin, and all paperwork for smooth US customs clearance.' },
];

const packages = [
  {
    name: 'Sample Run',
    price: '$2,500',
    ideal: 'First-time buyers · Validate before scaling',
    includes: [
      'Up to 5 styles / designs',
      'Minimum 10 units per style',
      'Fabric sourcing & selection',
      'Sample production & QA',
      'US-compliant care labels',
      'DHL express shipping to USA',
    ],
  },
  {
    name: 'Starter Production',
    price: '$8,500',
    ideal: 'New brands · First production run',
    includes: [
      'Up to 15 styles',
      '50–100 units per style',
      'Full private labeling',
      'CPSC compliance check',
      'Barcode & UPC labeling',
      'Export documentation',
      'Sea or air freight to USA',
    ],
    popular: true,
  },
  {
    name: 'Scale Production',
    price: 'Custom',
    ideal: 'Growing brands · Repeat orders',
    includes: [
      'Unlimited styles & SKUs',
      '500+ units per style',
      'Dedicated production manager',
      'Full compliance certification',
      'FBA-ready packaging',
      'Quarterly production schedule',
      'Priority manufacturing slots',
    ],
  },
];

const stats = [
  { value: '35–60%', label: 'Cost Saving', sub: 'vs US/EU manufacturing' },
  { value: '50 Units', label: 'Minimum MOQ', sub: 'per style to start' },
  { value: '21–35 Days', label: 'Sample Timeline', sub: 'design to your door' },
  { value: '100%', label: 'US Compliant', sub: 'CPSC & ASTM standards' },
];

const faqs = [
  { q: 'What is the minimum order quantity (MOQ) for sourcing from India as a US brand?', a: 'MOQs for US brands sourcing from India typically start at 50–200 units per style per colour. Our direct factory relationships allow us to negotiate lower MOQs for new brands — often 50–100 units per style for sampling runs. Once you have an established relationship and are ordering at scale, MOQs become fully negotiable.' },
  { q: 'How much cheaper is India manufacturing compared to US domestic production?', a: 'India manufacturing is typically 35–60% cheaper than US domestic production for comparable quality. For example, a garment that costs $18–25 to manufacture in the US can often be sourced from India at $6–12 FOB, including all trims and custom labelling. The exact saving depends on fabric, complexity, and order volume.' },
  { q: 'How long does it take from first contact to receiving products in the US?', a: 'For a first order: factory selection and vetting (2–3 weeks) + sampling and approval (3–5 weeks) + production (4–8 weeks) + sea freight to US (25–35 days) + customs clearance and FBA prep (1–2 weeks) = approximately 16–22 weeks total. Reorders of approved styles run 8–12 weeks.' },
  { q: 'Do your India factories meet CPSC compliance requirements for the US market?', a: 'Yes. All our partner factories produce garments to US compliance standards. We coordinate lab testing at CPSC-accepted laboratories (Bureau Veritas, SGS, Intertek India) for flammability, fibre content, and children\'s product requirements. All compliance documentation is prepared before your shipment leaves India.' },
  { q: 'Do you handle the full supply chain or just factory sourcing?', a: 'We provide full supply chain management — factory selection, sampling, production oversight, QC inspection, export documentation, sea freight coordination, US customs clearance, and Amazon FBA prep. You can engage us for the full chain or specific stages depending on your needs.' },
];

export default function USManufacturingPage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'India Manufacturing & Sourcing for US Fashion Brands', serviceType: 'Fashion Manufacturing & Sourcing', provider: { '@type': 'Organization', name: 'Heritage Apparels', url: 'https://www.heritageapparels.com/us' }, description: 'Factory-direct clothing manufacturing and accessories sourcing from India for US fashion brands. 35–60% cost savings, CPSC compliance, FBA-ready shipments.', areaServed: { '@type': 'Country', name: 'United States' }, offers: { '@type': 'Offer', priceCurrency: 'USD', price: '2500', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: '2500', unitText: 'PROJECT' } } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="py-24 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">🏭 India Manufacturing & Sourcing</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Factory-Direct from India.
            <br />
            <span className="gradient-text italic">35–60% Less Than US Production.</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed">
            We manufacture your apparel, accessories, jewellery, and footwear at our own India factory and vetted supplier network — with full US compliance, private labeling, and export documentation handled end-to-end.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold">Get a Free Manufacturing Quote →</Link>
            <Link href="/us/services" className="btn-outline">All US Services</Link>
          </div>
        </div>
      </section>

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

      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">What We <span className="gradient-text italic">Manufacture & Source</span></h2>
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

      <section className="py-20 bg-[#0d1b3e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">Manufacturing <span className="gradient-text italic">Packages</span></h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50">All prices in USD · Shipping & duties quoted separately</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`glass-card p-8 relative ${pkg.popular ? 'border-gold/40' : ''}`}>
                {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-charcoal text-xs font-bold rounded-full">Most Popular</span>}
                <h3 className="font-serif text-2xl font-bold text-cream mb-1">{pkg.name}</h3>
                <p className="text-cream/40 text-sm mb-4">{pkg.ideal}</p>
                <div className="font-serif text-3xl font-bold gradient-text mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-cream/70">
                      <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/us/contact" className={`block text-center py-3 rounded-lg font-medium text-sm transition-all ${pkg.popular ? 'btn-gold' : 'btn-outline'}`}>Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="font-serif text-4xl font-bold text-cream mb-4">Frequently Asked <span className="gradient-text italic">Questions</span></h2><div className="gold-divider mx-auto" /></div>
          <div className="space-y-4">{faqs.map(f => (<div key={f.q} className="glass-card p-6"><h3 className="font-semibold text-cream mb-3 leading-snug">{f.q}</h3><p className="text-cream/60 text-sm leading-relaxed">{f.a}</p></div>))}</div>
        </div>
      </section>

      <section className="py-16 bg-[#0d1b3e] border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">Ready to Source from <span className="gradient-text italic">India?</span></h2>
          <p className="text-cream/60 mb-8 leading-relaxed">Tell us your product category and we&apos;ll send a free cost comparison — India manufacturing vs US manufacturing — with realistic timelines and MOQs.</p>
          <Link href="/us/contact" className="btn-gold inline-block px-8 py-4">Get Free Cost Estimate</Link>
        </div>
      </section>
    </main>
  );
}
