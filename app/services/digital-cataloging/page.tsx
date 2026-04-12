import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Digital Cataloging Services for Fashion Brands | Heritage Apparels',
  description:
    'High-volume fashion product photography and digital cataloging services. 300 SKUs/day, 48-hour delivery, marketplace-ready formats for Myntra, Amazon, Nykaa, and D2C websites.',
  keywords: [
    'digital cataloging fashion',
    'product photography catalog India',
    'fashion catalog photography agency',
    'Myntra product photography',
    'SKU photography service',
    'fashion ecommerce catalog',
  ],
};

const capabilities = [
  { icon: '⚡', title: 'Volume', stat: '300 SKUs/day', desc: 'Our optimized studio workflows handle high-volume shoots without compromising quality.' },
  { icon: '🎨', title: 'Accuracy', stat: '99.8% Color Accuracy', desc: 'Proprietary color calibration ensures what customers see online matches what arrives.' },
  { icon: '⏰', title: 'Speed', stat: '24-48 Hours', desc: 'From shoot to delivery. Fastest turnaround in the industry for fashion catalogs.' },
  { icon: '📐', title: 'Formats', stat: '20+ Formats', desc: 'Myntra, Nykaa, Amazon, Flipkart, D2C website — every platform, every spec.' },
];

const faqs = [
  { q: 'How many SKUs can you photograph per day for digital cataloging?', a: 'Our studio handles up to 300 SKUs per day for flat-lay catalogue shoots. For model-on-mannequin and on-model catalogue shoots, our throughput is 80–120 SKUs/day. We operate parallel setups for high-volume brands to maintain speed without compromising quality.' },
  { q: 'Do you provide platform-specific image formats for Myntra, Amazon, Nykaa, and Flipkart?', a: 'Yes — this is our specialty. We deliver images in every platform-specific format simultaneously: Myntra (white background, 1000×1500px), Amazon (white background, 1000×1000px minimum), Nykaa (portrait white + lifestyle), Flipkart, and your D2C website. No separate processing needed.' },
  { q: 'What is your colour accuracy guarantee for digital catalogue images?', a: 'We achieve 99.8% colour accuracy using a proprietary calibration process. Our colour-managed workflow means the garment colour on screen matches the physical product. This directly reduces return rates caused by colour discrepancy — typically by 40–60%.' },
  { q: 'How soon do I receive my catalogue images after the shoot?', a: '24–48 hours from shoot completion. For brands with weekly catalogue cycles, we offer express same-day delivery for an additional fee. All images are delivered via a shared cloud folder in both web-optimized and high-resolution formats.' },
  { q: 'What is your pricing for digital cataloging?', a: 'We charge per SKU: ₹250/SKU for basic flat-lay catalogue photography (edited, white background), ₹450/SKU for on-model or on-mannequin shots, and ₹750+/SKU for lifestyle photography. Volume discounts apply from 500+ SKUs. Custom pricing for ongoing monthly retainer arrangements.' },
];

export default function DigitalCatalogingPage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'Digital Cataloging Services for Fashion Brands India', serviceType: 'Fashion Product Photography & Digital Cataloging', provider: { '@type': 'LocalBusiness', name: 'Heritage Apparels', url: 'https://www.heritageapparels.com', address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', addressCountry: 'IN' } }, description: 'High-volume fashion product photography and digital cataloging — 300 SKUs/day, 48-hour delivery, marketplace-ready formats for Myntra, Amazon, Nykaa, and D2C websites.', areaServed: { '@type': 'Country', name: 'India' }, offers: { '@type': 'Offer', priceCurrency: 'INR', price: '250', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'INR', minPrice: '250', unitText: 'PIECE' } } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero */}
      <section className="py-24 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Link href="/services" className="text-gold/70 text-sm hover:text-gold mb-4 block">← Back to Services</Link>
          <p className="section-label mb-4">Digital Cataloging</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Your Entire Inventory,
            <br />
            <span className="gradient-text italic">Perfectly Catalogued</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            High-volume, high-quality product photography for fashion e-commerce. We handle scale without sacrificing consistency, color accuracy, or speed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link href="/contact" className="btn-gold px-8 py-4">Get a Catalog Quote</Link>
            <span className="text-cream/50 text-sm">Starting at ₹45 per SKU</span>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {capabilities.map((cap) => (
              <div key={cap.title} className="glass-card p-6 text-center group">
                <div className="text-3xl mb-3">{cap.icon}</div>
                <div className="text-2xl font-serif font-bold gradient-text mb-1">{cap.stat}</div>
                <div className="text-cream font-semibold text-sm mb-2">{cap.title}</div>
                <p className="text-cream/50 text-xs leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          {/* What's included */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold text-cream mb-6">
                What&apos;s Included in Every
                <br />
                <span className="gradient-text italic">Catalog Project</span>
              </h2>
              <div className="space-y-4">
                {[
                  { title: 'Pre-Production Planning', desc: 'SKU list review, shoot schedule, background selection, format specification mapping.' },
                  { title: 'Multiple Angles Per SKU', desc: 'Front, back, side, detail shots, and lifestyle angles based on your brief.' },
                  { title: 'Model & Flat Lay Options', desc: 'On-model, flat lay, mannequin, and ghost mannequin options for every category.' },
                  { title: 'Professional Post-Production', desc: 'Background removal, color correction, dust removal, shadow creation, and format export.' },
                  { title: 'Quality Control', desc: '3-stage QC process ensures every image meets our consistency and accuracy standards.' },
                  { title: 'Platform-Ready Delivery', desc: 'Delivered in all required formats via our secure client portal with organized folder structure.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-cream font-semibold text-sm mb-0.5">{item.title}</div>
                      <div className="text-cream/60 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="glass-card p-8">
              <h3 className="font-serif text-2xl font-bold text-cream mb-6">Catalog Pricing</h3>
              <div className="space-y-4 mb-6">
                {[
                  { tier: 'Small Catalog', range: '1–100 SKUs', price: '₹65 per SKU', note: '' },
                  { tier: 'Medium Catalog', range: '101–500 SKUs', price: '₹55 per SKU', note: '15% savings' },
                  { tier: 'Large Catalog', range: '501–2,000 SKUs', price: '₹48 per SKU', note: '26% savings' },
                  { tier: 'Enterprise', range: '2,000+ SKUs', price: 'Custom Quote', note: 'Best rates' },
                ].map((tier) => (
                  <div key={tier.tier} className="flex items-center justify-between p-4 rounded-lg bg-white/3 border border-gold/10">
                    <div>
                      <div className="text-cream font-medium text-sm">{tier.tier}</div>
                      <div className="text-cream/50 text-xs">{tier.range}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-gold font-bold">{tier.price}</div>
                      {tier.note && <div className="text-green-400 text-xs">{tier.note}</div>}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-cream/40 text-xs mb-6">
                * Prices above are for standard white/grey background catalog shots. Add-ons available for lifestyle, video, and complex categories.
              </p>
              <Link href="/contact" className="btn-gold w-full text-center block">
                Request a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 bg-[#0f0f1e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-cream mb-6">
            We Know Every <span className="gradient-text italic">Platform&apos;s Requirements</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['Myntra', 'Nykaa', 'Amazon India', 'Flipkart', 'Meesho', 'Ajio', 'Shopify', 'WooCommerce', 'Custom D2C'].map((platform) => (
              <span key={platform} className="px-4 py-2 border border-gold/20 rounded-full text-cream/70 text-sm hover:border-gold hover:text-gold transition-colors">
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#16213e] relative"><div className="absolute inset-0 pattern-overlay opacity-10" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12"><h2 className="font-serif text-4xl font-bold text-cream mb-4">Frequently Asked <span className="gradient-text italic">Questions</span></h2><div className="gold-divider mx-auto" /></div>
          <div className="space-y-4">{faqs.map(f => (<div key={f.q} className="glass-card p-6"><h3 className="font-semibold text-cream mb-3 leading-snug">{f.q}</h3><p className="text-cream/60 text-sm leading-relaxed">{f.a}</p></div>))}</div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-cream mb-4">
              Get Your <span className="gradient-text italic">Catalog Quote</span>
            </h2>
            <p className="text-cream/60">Tell us about your catalog size and timeline and we&apos;ll send a custom proposal.</p>
          </div>
          <div className="glass-card p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
