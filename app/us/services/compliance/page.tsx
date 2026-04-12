import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'US Compliance & Import Support — CPSC, FDA, Customs | Heritage Apparels USA',
  description:
    'We ensure your India-manufactured products meet all US federal requirements — CPSC, FDA, ASTM, California Prop 65 — with proper labeling, HS code classification, and import documentation for smooth US customs clearance.',
};

const whatWeDeliver = [
  { icon: '🛡️', title: 'CPSC Compliance', desc: 'Consumer Product Safety Commission requirements for apparel, accessories, and children\'s products — testing coordination, certification, and documentation.' },
  { icon: '🧪', title: 'ASTM & AATCC Testing', desc: 'Coordination with US-accredited testing labs for fabric safety, flammability, colorfastness, and chemical compliance testing.' },
  { icon: '🌿', title: 'California Prop 65', desc: 'Review and compliance for California\'s strict chemical safety law — essential for any brand selling in California (the 5th largest economy globally).' },
  { icon: '💊', title: 'FDA Compliance', desc: 'FDA registration and compliance for beauty, cosmetic, and wellness products — required for selling on Amazon, Walmart, Sephora, and Ulta.' },
  { icon: '🏷️', title: 'US Labeling Standards', desc: 'Correct fiber content, country of origin ("Made in India"), RN number, care instruction symbols, and flammability warnings — per FTC and CPSC rules.' },
  { icon: '📦', title: 'HS Code Classification', desc: 'Accurate Harmonized Tariff Schedule classification for all product categories — minimizing import duties and avoiding customs delays.' },
  { icon: '🛃', title: 'Customs Documentation', desc: 'Commercial invoices, packing lists, bills of lading, certificates of origin, and ISF (Importer Security Filing) — all prepared and reviewed.' },
  { icon: '💵', title: 'Import Duty Estimation', desc: 'Pre-shipment duty and tariff calculation under HTS codes — so you know your landed cost before placing production orders.' },
];

const packages = [
  {
    name: 'Compliance Audit',
    price: '$500',
    ideal: 'Pre-production · Know your requirements',
    includes: [
      'Product category compliance review',
      'Required certifications checklist',
      'US labeling requirements report',
      'HS code classification',
      'Import duty estimate',
    ],
  },
  {
    name: 'Full Compliance',
    price: '$1,800',
    ideal: 'Production-ready · All documents handled',
    includes: [
      'Everything in Compliance Audit',
      'US label design & review',
      'Testing lab coordination (CPSC/ASTM)',
      'Customs documentation package',
      'ISF filing support',
      'California Prop 65 review',
    ],
    popular: true,
  },
  {
    name: 'Ongoing Support',
    price: '$500/mo',
    ideal: 'Active importers · Monthly shipments',
    includes: [
      'Monthly compliance monitoring',
      'Customs docs for all shipments',
      'Regulatory update alerts',
      'Label updates as regulations change',
      'Dedicated compliance advisor',
    ],
  },
];

const stats = [
  { value: '100%', label: 'Customs Clearance', sub: 'no seized shipments' },
  { value: '15+', label: 'Regulations Covered', sub: 'CPSC, FDA, ASTM & more' },
  { value: '5–7 Days', label: 'Audit Turnaround', sub: 'from product brief' },
  { value: '$500', label: 'Starting From', sub: 'compliance audit (USD)' },
];

const faqs = [
  { q: 'What certifications do I need to import apparel from India to the US?', a: 'For adult apparel: you need fiber content labeling (FTC Textile Act), care instruction labels, country of origin ("Made in India"), and an RN number. For children\'s apparel (under 12): CPSC testing is mandatory — flammability testing (16 CFR 1610), lead content testing, and a Children\'s Product Certificate (CPC) are required. We audit your specific product category and provide a full certification checklist.' },
  { q: 'How much does CPSC compliance testing cost for Indian-made apparel?', a: 'CPSC testing costs depend on product category and test suite. Typical costs at CPSC-accepted labs (Bureau Veritas, SGS, Intertek): flammability testing ($150–$300 per style), fiber content testing ($50–$100 per style), children\'s product lead testing ($200–$400 per product. Full compliance testing for a children\'s apparel line typically runs $800–$2,500 depending on styles and colors. Lab fees are quoted separately from our compliance management fee.' },
  { q: 'What is California Prop 65 and do I need to comply if selling on Amazon?', a: 'California Proposition 65 requires businesses to warn consumers about significant exposure to chemicals that cause cancer, birth defects, or reproductive harm. It applies if you sell in California — which, if selling on Amazon.com, you almost certainly do. Non-compliance can result in lawsuits from private enforcers (not just state regulators). We review your product materials and manufacturing process for Prop 65 chemicals and advise on labeling or reformulation.' },
  { q: 'How do I find the correct HS tariff code for my India-manufactured products?', a: 'HS code (Harmonized Tariff Schedule code) classification for Indian apparel and accessories is based on material, construction method, and end use. Incorrect classification is one of the top causes of US Customs delays and unexpected duty bills. We classify your products under the correct HTS code, calculate the applicable duty rate (which varies from 0% to 32% for fashion items), and document the classification rationale for your Customs broker.' },
  { q: 'What documents do I need for US customs clearance on India shipments?', a: 'For standard commercial imports from India: commercial invoice (with correct HS codes, declared values, and shipper/consignee details), packing list, bill of lading or airway bill, certificate of origin (for GSP duty preference if applicable), and ISF (Importer Security Filing, submitted 24 hours before vessel departure). For regulated products: compliance certificates, test reports, and FDA documentation as required. We prepare and review all of these.' },
];

export default function USCompliancePage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'US Compliance & Import Support for India-Manufactured Products', serviceType: 'Import Compliance & Regulatory Services', provider: { '@type': 'Organization', name: 'Heritage Apparels', url: 'https://www.heritageapparels.com/us' }, description: 'CPSC, FDA, ASTM, and California Prop 65 compliance for India-manufactured fashion products. HS code classification, customs documentation, and US import support.', areaServed: { '@type': 'Country', name: 'United States' }, offers: { '@type': 'Offer', priceCurrency: 'USD', price: '500', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: '500', unitText: 'PROJECT' } } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="py-24 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">🛃 US Compliance & Import Support</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            India-Made. Fully
            <br />
            <span className="gradient-text italic">US Compliant.</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed">
            We handle every US federal and state compliance requirement for your India-manufactured products — CPSC, FDA, ASTM, California Prop 65, HS codes, customs documentation, and import duty estimation — so your shipments clear US customs without delays.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {['CPSC', 'FDA', 'ASTM', 'Prop 65', 'FTC Labeling', 'HTS Codes', 'ISF Filing'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium">{tag}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold">Get a Compliance Audit →</Link>
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
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">Everything We <span className="gradient-text italic">Handle For You</span></h2>
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
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">Compliance <span className="gradient-text italic">Packages</span></h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50">Fixed USD pricing · Lab testing fees quoted separately · Results in 5–7 days</p>
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
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">Don&apos;t Risk a <span className="gradient-text italic">Customs Hold.</span></h2>
          <p className="text-cream/60 mb-8 leading-relaxed">Tell us your product category and we&apos;ll send a free compliance checklist — what certifications you need, estimated testing costs, and timeline to clear US customs. Takes 10 minutes to fill out.</p>
          <Link href="/us/contact" className="btn-gold inline-block px-8 py-4">Get Free Compliance Checklist</Link>
        </div>
      </section>
    </main>
  );
}
