import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'US Digital Cataloging — Amazon, Walmart, Etsy & Shopify | Heritage Apparels USA',
  description:
    'High-volume digital catalog photography for US brands — up to 300 SKUs per day, formatted for Amazon, Walmart, Etsy, and Shopify. 24–48 hour delivery. Starting at $3/SKU.',
};

const whatWeDeliver = [
  { icon: '⬜', title: 'White Background Shots', desc: 'Pure white or off-white background product photography across all angles — fully compliant with Amazon, Walmart, and Target+ image requirements.' },
  { icon: '🌅', title: 'Lifestyle Backgrounds', desc: 'Contextual and lifestyle background shots for Etsy, Shopify, and Pinterest — showcasing products in aspirational real-life settings.' },
  { icon: '📐', title: 'Flat Lay Images', desc: 'Styled overhead flat-lay shots ideal for apparel, accessories, and beauty products — perfect for Etsy and Instagram Shopping.' },
  { icon: '🔍', title: 'Detail Close-Ups', desc: 'Macro shots of fabric texture, hardware, stitching, labels, and product details — for high-consideration buyers who zoom in before purchasing.' },
  { icon: '📏', title: 'US Size Standards', desc: 'All catalog images shot with US sizing (S/M/L/XL) and size chart images formatted to Amazon and Walmart\'s apparel listing requirements.' },
  { icon: '✂️', title: 'Background Removal', desc: 'Professional clipping path and background removal for every image — delivered as transparent PNG or pure white JPEG as required.' },
  { icon: '🎨', title: 'Color Correction', desc: 'Accurate color calibration ensuring product colors match exactly on screen — reducing returns and increasing buyer trust.' },
  { icon: '📁', title: 'Platform-Ready Formats', desc: 'All images delivered in correct dimensions and file formats for Amazon (2000×2000), Walmart (2000px+), Etsy (2000px+), and Shopify.' },
];

const packages = [
  {
    name: 'Basic Catalog',
    price: '$3/SKU',
    ideal: 'White background · Amazon-ready',
    includes: [
      'White background photography',
      '4 angles per SKU',
      'Background removal',
      'Amazon-spec sizing',
      '48-hour delivery',
      'Min. 50 SKUs',
    ],
  },
  {
    name: 'Full Catalog',
    price: '$6/SKU',
    ideal: 'Multi-platform · Complete listing images',
    includes: [
      'White background (4 angles)',
      '2 lifestyle / styled shots',
      '1 detail close-up',
      'All platforms formatted',
      'Color correction',
      '48-hour delivery',
      'Min. 30 SKUs',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    ideal: 'High-volume · Ongoing catalog',
    includes: [
      'Everything in Full Catalog',
      'Dedicated shoot days',
      'Priority turnaround (24hr)',
      'Model shots available',
      'Monthly retainer pricing',
      'Dedicated catalog manager',
    ],
  },
];

const stats = [
  { value: '300+', label: 'SKUs Per Day', sub: 'studio capacity' },
  { value: '$3', label: 'Starting Price', sub: 'per SKU (white background)' },
  { value: '24–48hrs', label: 'Delivery Time', sub: 'edited & formatted' },
  { value: '6', label: 'US Platforms', sub: 'Amazon, Walmart, Etsy & more' },
];

const faqs = [
  { q: 'What is the minimum SKU quantity for US catalog photography?', a: 'Our Basic Catalog package has a minimum of 50 SKUs at $3/SKU. The Full Catalog package starts at 30 SKUs at $6/SKU. For smaller quantities (under 30 SKUs), we recommend our product photography package which has no minimum order. Enterprise clients with 500+ SKUs receive custom per-unit pricing with dedicated shoot days.' },
  { q: 'How do we ship products to your studio for catalog photography?', a: 'We provide a US studio address (California) where you ship products directly from your US warehouse, Amazon FBA prep center, or India factory. Once received, we confirm inventory against your SKU list, schedule shoot dates, and begin photography within 2 business days. Products are returned after shooting if requested, or held for your next shipment.' },
  { q: 'Do you format catalog images for Walmart and Etsy in addition to Amazon?', a: 'Yes. All catalog packages include platform-ready formatting for Amazon (2000×2000px, JPEG), Walmart (2000px+ longest side), Etsy (2000×2000px or 2:3 ratio), and Shopify. Images are organized by platform in your delivery folder. Target+ and TikTok Shop formats are included in Full Catalog and Enterprise packages at no additional cost.' },
  { q: 'How do you handle product color variants in the catalog?', a: 'Each color variant is photographed as a separate SKU at the standard per-SKU rate. For apparel with multiple colors, we shoot the hero angle for all colorways, then secondary angles for the main color only — reducing cost while giving each variant a complete main image. Size variants do not require additional photography if they are the same color.' },
  { q: 'What is included in background removal for catalog images?', a: 'All catalog packages include professional clipping path background removal — every image is delivered as a pure white JPEG (RGB 255,255,255) and as a transparent PNG. Color correction is included in Full Catalog and Enterprise packages to ensure on-screen color accuracy matches the physical product, reducing return rates.' },
];

export default function USDigitalCatalogingPage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'US Digital Catalog Photography — Amazon, Walmart & Etsy', serviceType: 'Digital Catalog Photography', provider: { '@type': 'Organization', name: 'Heritage Apparels', url: 'https://www.heritageapparels.com/us' }, description: 'High-volume catalog photography for US brands — 300 SKUs/day, formatted for Amazon, Walmart, Etsy, and Shopify. Starting at $3/SKU, delivered in 24–48 hours.', areaServed: { '@type': 'Country', name: 'United States' }, offers: { '@type': 'Offer', priceCurrency: 'USD', price: '3', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: '3', unitText: 'SKU' } } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="py-24 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">📂 US Digital Cataloging</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            300 SKUs a Day.
            <br />
            <span className="gradient-text italic">Every US Platform, Ready.</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed">
            High-volume catalog photography formatted for Amazon, Walmart, Etsy, Target+, and Shopify — white backgrounds, lifestyle shots, detail close-ups, and platform-ready image files. Starting at $3/SKU, delivered in 24–48 hours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold">Get a Catalog Quote →</Link>
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
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">Every Image Type <span className="gradient-text italic">Your US Listings Need</span></h2>
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
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">Catalog <span className="gradient-text italic">Packages</span></h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50">Per-SKU pricing in USD · Volume discounts from 100+ SKUs · Ship products to our studio</p>
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
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">Ship Your Products. <span className="gradient-text italic">We Handle the Rest.</span></h2>
          <p className="text-cream/60 mb-8 leading-relaxed">Tell us your SKU count and which platforms you sell on — we&apos;ll send a custom catalog quote within 12 hours.</p>
          <Link href="/us/contact" className="btn-gold inline-block px-8 py-4">Get Your Catalog Quote</Link>
        </div>
      </section>
    </main>
  );
}
