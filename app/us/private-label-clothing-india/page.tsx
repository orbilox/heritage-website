import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Private Label Clothing from India for US Brands | Heritage Apparels',
  description:
    'Create your own private label clothing brand with India manufacturing. Custom designs, your brand labels, MOQ from 50 pieces. We handle production, QC, and US shipping.',
};

const stats = [
  { value: '50 pcs', label: 'Minimum Order', sub: 'per style per color' },
  { value: 'Custom', label: 'Brand Labels', sub: 'woven & printed' },
  { value: '21 Days', label: 'Production', sub: 'bulk turnaround' },
  { value: '$6–$12', label: 'Per Piece', sub: 'ex-factory India' },
];

const categories = [
  { icon: '👕', label: "T-Shirts & Tops" },
  { icon: '🧥', label: "Hoodies & Sweatshirts" },
  { icon: '👗', label: "Dresses" },
  { icon: '🏋️', label: "Activewear" },
  { icon: '👖', label: "Denim" },
  { icon: '🧤', label: "Outerwear" },
  { icon: '👜', label: "Accessories" },
];

const steps = [
  { num: '01', icon: '✏️', title: 'Share Your Design', desc: 'Send us your tech pack, sketch, or reference samples. No design files? Our in-house team can develop the spec from a brief.' },
  { num: '02', icon: '🧵', title: 'Sample Production', desc: 'We produce your first physical sample in 7 business days using your exact fabric, color, and construction specs.' },
  { num: '03', icon: '✅', title: 'Sample Approval', desc: 'Review the sample, request any fit or finish changes, and sign off on the final spec before we proceed to bulk.' },
  { num: '04', icon: '🏭', title: 'Bulk Production', desc: 'Once approved, bulk production runs in 14 days. Your brand labels, hangtags, and packaging are applied on the line.' },
  { num: '05', icon: '🔍', title: 'Quality Check', desc: 'Every order goes through AQL inspection — measurements, stitching, color, and label placement checked against your approved sample.' },
  { num: '06', icon: '✈️', title: 'Shipped to Your US Warehouse', desc: 'We ship via sea or air freight to your US address or Amazon FBA fulfillment center — with all customs documentation handled.' },
];

const costComparison = [
  {
    label: 'Private Label from India',
    range: '$6–$12 / piece',
    notes: 'Custom labels, QC included, direct-to-FBA',
    highlight: true,
  },
  {
    label: 'US Domestic Manufacturers',
    range: '$18–$40 / piece',
    notes: 'Higher cost, longer lead times for custom',
    highlight: false,
  },
  {
    label: 'Alibaba (No QC)',
    range: '$3–$8 / piece',
    notes: 'Quality risk, no brand support, inconsistent output',
    highlight: false,
  },
];

const packaging = [
  { icon: '🏷️', label: 'Custom Woven Labels' },
  { icon: '🎫', label: 'Brand Hangtags' },
  { icon: '🛍️', label: 'Poly Bags' },
  { icon: '📦', label: 'Custom Boxes' },
];

const compliance = [
  { icon: '🧪', title: 'CPSC Testing', desc: 'Products tested for CPSC compliance — required for children\'s apparel and regulated categories.' },
  { icon: '🌍', title: 'Country-of-Origin Labeling', desc: 'All garments carry accurate "Made in India" content labels as required by US FTC regulations.' },
  { icon: '📦', title: 'FBA-Ready Packaging', desc: 'FNSKU barcode labeling, poly bagging, carton dimensions, and weight per Amazon\'s FBA prep requirements.' },
];

const faqs = [
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'Our MOQ is 50 pieces per style per color. For example, if you are ordering a T-shirt in 3 colors, that is 50 pieces per color (150 pieces total). This low MOQ makes private label viable for startups and small US brands testing new styles before scaling.',
  },
  {
    q: 'Can I see a sample before committing to bulk production?',
    a: 'Yes — and we strongly recommend it. We produce a physical sample of your product in 7 business days. Sample cost is $50–$150 depending on complexity, which is credited back to your bulk order. You approve the sample before we produce a single bulk unit.',
  },
  {
    q: 'Do you work with custom designs or only existing styles?',
    a: 'Both. You can share your own tech pack, CAD drawing, or reference garment and we will manufacture to your exact spec. If you do not have design files, our in-house product development team can create them from a detailed brief or a reference photo for a small fee.',
  },
  {
    q: 'How do you handle quality control?',
    a: 'Every order undergoes AQL (Acceptable Quality Limit) inspection before shipping. Our QC team checks measurements against your approved sample, stitching quality, color consistency, and label placement. We share a full QC report with photos before the shipment leaves our warehouse.',
  },
  {
    q: 'Can you ship directly to Amazon FBA?',
    a: 'Yes. We prepare your shipment to Amazon FBA standards — FNSKU barcodes applied, poly bagged per Amazon requirements, and carton labels formatted correctly. We create the shipment plan in Seller Central on your behalf and ship directly to the assigned fulfillment center, saving you an extra warehousing step.',
  },
];

export default function PrivateLabelClothingIndiaPage() {
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
    name: 'Private Label Clothing from India for US Brands',
    serviceType: 'Private Label Manufacturing & Sourcing',
    provider: {
      '@type': 'Organization',
      name: 'Heritage Apparels',
      url: 'https://www.heritageapparels.com/us',
    },
    description:
      'Custom private label clothing manufactured in India for US fashion brands. MOQ 50 pieces, custom labels, 21-day production, QC, and US shipping included.',
    areaServed: { '@type': 'Country', name: 'United States' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        minPrice: '6',
        maxPrice: '12',
        unitText: 'PIECE',
      },
    },
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-24 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Private Label Clothing from India</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Create Your Private Label Brand
            <br />
            <span className="gradient-text italic">Made in India, Sold in the USA</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            You own the brand. We manufacture to your exact specifications — custom designs, your labels, starting at just 50 pieces. Production, quality control, and US shipping all handled.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold">Start My Private Label →</Link>
            <Link href="/us/contact" className="btn-outline">Request a Sample</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#1a1a2e] border-y border-gold/10">
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

      {/* What is Private Label */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">What is Private Label?</p>
              <h2 className="font-serif text-4xl font-bold text-cream mb-6">
                Your Brand. <span className="gradient-text italic">Our Manufacturing.</span>
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-cream/70 leading-relaxed mb-4">
                Private label means you own the brand — the name, the logo, the label — and we manufacture the garments to your specifications. Unlike buying wholesale or white-label products, private label gives you a unique product that no competitor can copy.
              </p>
              <p className="text-cream/70 leading-relaxed mb-4">
                You define the style, fabric, fit, color, and packaging. We produce it in India at a fraction of US manufacturing cost, apply your custom labels, and ship it ready to sell on Amazon, Shopify, TikTok Shop, or any US marketplace.
              </p>
              <p className="text-cream/70 leading-relaxed">
                The result: a fashion brand that is genuinely yours, at a cost structure that supports strong US margins from day one.
              </p>
            </div>
            <div className="glass-card p-8">
              <h3 className="font-serif text-xl font-bold text-cream mb-6">You Get Full Ownership Of:</h3>
              <ul className="space-y-4">
                {['Your brand name and trademark', 'Unique product design and spec', 'Custom woven or printed labels', 'Branded packaging and hangtags', 'The intellectual property rights'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-cream/80 text-sm">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What You Can Private Label</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Fashion <span className="gradient-text italic">Categories We Produce</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {categories.map((cat) => (
              <div key={cat.label} className="glass-card p-5 text-center group hover:border-gold/40 transition-colors">
                <div className="text-3xl mb-3">{cat.icon}</div>
                <p className="text-cream/80 text-xs font-medium leading-tight group-hover:text-gold transition-colors">
                  {cat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">How It Works</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              From Design to <span className="gradient-text italic">Your US Warehouse</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="glass-card p-6 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{step.icon}</span>
                  </div>
                  <span className="font-serif text-3xl font-bold text-gold/30">{step.num}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-cream mb-2 group-hover:text-gold transition-colors">
                  {step.title}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Why India?</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Cost <span className="gradient-text italic">Comparison</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="space-y-4">
            {costComparison.map((row) => (
              <div
                key={row.label}
                className={`glass-card p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${row.highlight ? 'border-gold/40' : ''}`}
              >
                <div className="flex items-center gap-3">
                  {row.highlight && (
                    <span className="px-2 py-0.5 bg-gold text-charcoal text-xs font-bold rounded">Best Value</span>
                  )}
                  <span className="text-cream font-medium">{row.label}</span>
                </div>
                <div className="text-right">
                  <div className={`font-serif text-xl font-bold ${row.highlight ? 'gradient-text' : 'text-cream/60'}`}>
                    {row.range}
                  </div>
                  <div className="text-cream/40 text-xs mt-1">{row.notes}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Labels & Packaging */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Brand Packaging</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Labels & Packaging <span className="gradient-text italic">Included</span>
            </h2>
            <div className="gold-divider mx-auto mb-6" />
            <p className="text-cream/60 max-w-2xl mx-auto">
              Your product ships with full branded packaging — no extra suppliers, no extra coordination.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {packaging.map((item) => (
              <div key={item.label} className="glass-card p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-cream/80 text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* US Compliance */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">US Market Ready</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Built for <span className="gradient-text italic">US Compliance</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {compliance.map((item) => (
              <div key={item.title} className="glass-card p-8 text-center group">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-bold text-cream mb-3 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Frequently Asked <span className="gradient-text italic">Questions</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="glass-card p-6">
                <h3 className="font-semibold text-cream mb-3 leading-snug">{f.q}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#16213e] border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">
            Ready to Build Your <span className="gradient-text italic">Private Label Brand?</span>
          </h2>
          <p className="text-cream/60 mb-8 leading-relaxed">
            Share your product idea and we will send you a full quote — fabric options, pricing, timeline, and sample cost — within 24 hours.
          </p>
          <Link href="/us/contact" className="btn-gold inline-block px-8 py-4">
            Get a Free Private Label Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
