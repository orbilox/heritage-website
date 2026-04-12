import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'US Product Photography — Amazon, Walmart & Shopify Ready | Heritage Apparels USA',
  description:
    'Amazon-compliant, Walmart-ready, and Shopify-optimized product photography for US brands. Pure white backgrounds, lifestyle shots, infographics, and model images — all US marketplace specs met.',
};

const whatWeDeliver = [
  { icon: '⬜', title: 'Amazon Main Images', desc: 'Pure white background shots meeting Amazon\'s strict image requirements — 85% product fill, no props, no text. Guaranteed to pass.' },
  { icon: '🏠', title: 'Lifestyle Photography', desc: 'Studio and on-location lifestyle images showing products in real-life American settings — for Shopify, social media, and A+ content.' },
  { icon: '📋', title: 'Infographic Images', desc: 'Feature call-out and benefit highlight images designed for Amazon listing slots 2–7 — proven to increase conversion by 15–30%.' },
  { icon: '👤', title: 'Model Photography', desc: 'On-model shots with US sizing standards. Male, female, and kids models — styled, lit, and directed by our fashion creative team.' },
  { icon: '🔍', title: 'Detail & Texture Shots', desc: 'Macro and close-up product images showing fabric texture, stitching detail, hardware, and finish — for high-consideration buyers.' },
  { icon: '📐', title: 'Flat Lay Photography', desc: 'Editorial flat-lay shots for Etsy, Pinterest, and Instagram — styled with props and composed for maximum visual impact.' },
  { icon: '🎬', title: 'Product Video', desc: '15–30 second product videos for Amazon listings, TikTok Shop, and Instagram Reels — shot, edited, and formatted for each platform.' },
  { icon: '✂️', title: 'Background Removal & Editing', desc: 'Professional retouching, background removal, color correction, and shadow work — delivered in all required formats and sizes.' },
];

const packages = [
  {
    name: 'Basic',
    price: '$3/SKU',
    ideal: 'Amazon main image · White background only',
    includes: [
      'Pure white background shots',
      '4 angles per product',
      'Amazon-compliant specs',
      'Background removal included',
      '48-hour turnaround',
    ],
  },
  {
    name: 'Full Listing',
    price: '$8/SKU',
    ideal: 'Complete Amazon / Walmart listing',
    includes: [
      'White background (4 angles)',
      '3 lifestyle / infographic images',
      '1 detail/texture close-up',
      'All 7 Amazon listing image slots filled',
      'Walmart & Etsy formats included',
      '48-hour turnaround',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: 'Custom',
    ideal: 'Full brand shoot with models',
    includes: [
      'Everything in Full Listing',
      'On-model photography (US sizing)',
      'Lifestyle & editorial shots',
      '30-second product video',
      'A+ content images',
      'Social media cuts included',
    ],
  },
];

const stats = [
  { value: '300+', label: 'SKUs Per Day', sub: 'studio throughput' },
  { value: '48hrs', label: 'Delivery', sub: 'edited & delivered' },
  { value: '100%', label: 'Amazon Pass Rate', sub: 'first-submission guarantee' },
  { value: '$3', label: 'Starting At', sub: 'per SKU (white bg)' },
];

const faqs = [
  { q: 'What are Amazon\'s image requirements for product photography?', a: 'Amazon requires main images on a pure white background (RGB 255,255,255), with the product filling at least 85% of the frame. No props, text, or watermarks are allowed on the main image. Additional images (slots 2–7) can include lifestyle, infographic, and model shots. We guarantee all our images pass Amazon\'s automated image checker on first submission.' },
  { q: 'Do you shoot with US-size models for apparel?', a: 'Yes. We work with male and female models in standard US sizing (XS through 3XL). Our model roster includes diverse ethnicities and body types appropriate for US marketplace audiences. On-model shots are included in our Premium package and available as an add-on to the Full Listing package.' },
  { q: 'How quickly can you deliver product photos for an Amazon launch?', a: 'Standard turnaround is 48 hours from the shoot date — all images edited, background-removed, and delivered in Amazon-compliant formats. For urgent launches, we offer 24-hour rush delivery at a 30% premium. You receive images via a shared Google Drive folder organized by SKU and image type.' },
  { q: 'Can you photograph products we ship from India?', a: 'Yes — most of our US brand clients ship products directly from their India manufacturer to our studio. We provide a US shipping address (California). Once received, we confirm inventory, schedule the shoot, and deliver edited images within 48 hours of shoot completion. Typical studio-to-delivery cycle is 3–5 business days after product receipt.' },
  { q: 'What image formats and sizes do you deliver for US marketplaces?', a: 'We deliver JPEG and PNG (with transparent background where needed) at 2000×2000px for Amazon. Walmart requires 2000px minimum on the longest side. Etsy, Shopify, and Pinterest images are delivered at 2000×2000px or 2:3 ratio as required. All platforms are formatted and labelled in separate folders in your delivery package.' },
];

export default function USPhotoshootPage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'Amazon & US Marketplace Product Photography for Fashion Brands', serviceType: 'Product Photography & E-commerce Imaging', provider: { '@type': 'Organization', name: 'Heritage Apparels', url: 'https://www.heritageapparels.com/us' }, description: 'Amazon-compliant product photography for US brands — white background, lifestyle, infographic, and on-model shots. Starting at $3/SKU, delivered in 48 hours.', areaServed: { '@type': 'Country', name: 'United States' }, offers: { '@type': 'Offer', priceCurrency: 'USD', price: '3', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: '3', unitText: 'SKU' } } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="py-24 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">📸 US Product Photography</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Amazon-Compliant.
            <br />
            <span className="gradient-text italic">Built to Convert US Buyers.</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed">
            Professional product photography for Amazon, Walmart, Etsy, and Shopify — pure white backgrounds, lifestyle shots, infographics, and model images, all formatted to US marketplace specs and delivered in 48 hours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold">Book a Shoot →</Link>
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
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">Every Shot <span className="gradient-text italic">Your US Listings Need</span></h2>
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
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">Photography <span className="gradient-text italic">Packages</span></h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50">All prices in USD · Bulk discounts available · Ship products to our studio</p>
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
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">Great Images = <span className="gradient-text italic">More US Sales.</span></h2>
          <p className="text-cream/60 mb-8 leading-relaxed">Tell us your SKU count and platforms — we&apos;ll send a custom quote within 12 hours. Ship us your products, we&apos;ll handle the rest.</p>
          <Link href="/us/contact" className="btn-gold inline-block px-8 py-4">Get a Photography Quote</Link>
        </div>
      </section>
    </main>
  );
}
