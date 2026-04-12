import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Fashion Photoshoot Services | Studio & On-Location | Heritage Apparels',
  description:
    'Professional fashion photography for D2C brands. Studio and on-location shoots across India. Creative direction, model coordination, and 48-hour delivery. Starting ₹35,000.',
  keywords: [
    'fashion photoshoot agency India',
    'D2C brand photoshoot',
    'fashion photography studio Mumbai',
    'on-location fashion shoot India',
    'fashion photographer for ecommerce',
  ],
};

const packages = [
  {
    name: 'Essential',
    price: '₹35,000',
    duration: 'Half Day (4 hrs)',
    includes: ['1 photographer', '1 model', 'Studio space included', '50-80 edited images', '48-hour delivery', '1 round of revisions'],
    best: false,
  },
  {
    name: 'Professional',
    price: '₹75,000',
    duration: 'Full Day (8 hrs)',
    includes: ['2 photographers', '2 models', 'Studio + 1 location', '150-200 edited images', '48-hour delivery', '2 rounds of revisions', 'Styling coordination', 'Creative direction'],
    best: true,
  },
  {
    name: 'Premium',
    price: '₹1,50,000+',
    duration: '2 Days',
    includes: ['Lead photographer + team', '3-5 models', 'Multiple locations', '400+ edited images', 'Express 24-hour delivery', 'Unlimited revisions', 'Full styling team', 'Creative director on-set', 'Post-production extras'],
    best: false,
  },
];

const faqs = [
  { q: 'Where do you conduct fashion photoshoots — studio or on-location?', a: 'Both. Our in-house studio in Mumbai handles catalogue shoots, white-background, and lifestyle shots. We also shoot on-location across Mumbai, Delhi, Bangalore, Jaipur, and Goa for editorial and campaign shoots. Studio shoots are faster; on-location shoots deliver richer storytelling.' },
  { q: 'How many images will I receive from a fashion photoshoot?', a: 'Essential package: 50–80 edited images (half day). Professional package: 150–200 edited images (full day). Premium package: 400+ images over 2 days. All images are delivered edited and retouched with no additional post-production charge.' },
  { q: 'Do you provide models, stylists, and creative direction?', a: 'Yes. All packages include model coordination. The Professional and Premium packages include a stylist and creative director. We maintain a network of professional models across Mumbai and Delhi — your brand brief informs model selection.' },
  { q: 'How long does it take to receive edited images after the shoot?', a: '48-hour delivery for Essential and Professional packages; 24-hour express delivery for Premium. If you need same-day delivery for an urgent campaign, contact us in advance and we can arrange it at an additional charge.' },
  { q: 'Do you shoot for Myntra, Nykaa, Amazon catalogue standards?', a: 'Yes — this is our core specialty. We know the exact image specifications for Myntra, AJIO, Nykaa Fashion, Amazon India, and Flipkart. Every catalogue shoot we produce is platform-compliant and ready for upload without additional processing.' },
];

export default function FashionPhotoshootPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Fashion Photoshoot Services',
    provider: { '@type': 'Organization', name: 'Heritage Apparels' },
    description: 'Professional fashion photography for D2C brands, including studio and on-location shoots across India.',
    areaServed: 'India',
    offers: packages.map((pkg) => ({
      '@type': 'Offer',
      name: pkg.name,
      price: pkg.price,
      priceCurrency: 'INR',
    })),
  };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-24 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Link href="/services" className="text-gold/70 text-sm hover:text-gold mb-4 block">← Back to Services</Link>
          <p className="section-label mb-4">Fashion Photoshoot</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Photography That
            <br />
            <span className="gradient-text italic">Sells Your Brand</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Studio and on-location fashion shoots designed to capture the identity of your brand, communicate the quality of your products, and convert browsers into buyers.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="section-label mb-4">What We Deliver</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-6">
                More Than Photography.
                <br />
                <span className="gradient-text italic">Visual Brand Building.</span>
              </h2>
              <div className="space-y-4 text-cream/70 leading-relaxed">
                <p>
                  Every fashion shoot we execute begins with a deep understanding of your brand story, your target customer, and your sales objectives. We don&apos;t just point cameras at clothes — we craft visual narratives that make your ideal customer stop scrolling and start shopping.
                </p>
                <p>
                  Our team includes experienced fashion photographers, creative directors who understand trend, stylists who know how to make garments read perfectly on camera, and production managers who ensure everything runs smoothly on the day.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🏛️', title: 'In-Studio Shoots', desc: 'Our 3,000 sq ft Mumbai studio with 6 cyclorama bays and professional lighting infrastructure' },
                { icon: '🌍', title: 'On-Location', desc: 'Pan-India location scouting and shoot coordination — from heritage havelis to urban rooftops' },
                { icon: '👗', title: 'Editorial Style', desc: 'Fashion-forward, publication-quality imagery that elevates brand perception' },
                { icon: '📱', title: 'Social-First', desc: 'Compositions and formats optimized for Instagram, Pinterest, and digital-first brands' },
              ].map((item) => (
                <div key={item.title} className="glass-card p-5">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="text-cream font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-cream/50 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-cream mb-4">
              Shoot <span className="gradient-text italic">Packages</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-xl p-8 border ${
                  pkg.best
                    ? 'border-gold bg-gold/10 relative'
                    : 'border-gold/15 bg-white/3'
                }`}
              >
                {pkg.best && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-charcoal text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="font-serif text-xl font-bold text-cream mb-1">{pkg.name}</h3>
                <p className="text-cream/50 text-sm mb-4">{pkg.duration}</p>
                <div className="text-3xl font-bold gradient-text font-serif mb-6">{pkg.price}</div>
                <ul className="space-y-2.5 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-cream/70">
                      <span className="text-gold text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={pkg.best ? 'btn-gold w-full text-center block' : 'btn-outline w-full text-center block'}>
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#0f0f1e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-cream mb-4">
              Our Shoot <span className="gradient-text italic">Process</span>
            </h2>
          </div>
          <div className="space-y-6">
            {[
              { step: '01', title: 'Creative Brief & Mood Board', desc: 'We work with you to develop a detailed creative brief and visual references that align with your brand and objectives.' },
              { step: '02', title: 'Pre-Production', desc: 'Model casting, styling preparation, location scouting, prop sourcing, and shoot schedule — all managed by our production team.' },
              { step: '03', title: 'Shoot Day', desc: 'Our team executes with precision and creativity. You\'re invited to be present or provide remote approvals throughout the day.' },
              { step: '04', title: 'Post-Production & Delivery', desc: 'Expert retouching, color grading, and format optimization. Delivered via our private client portal within 48 hours.' },
            ].map((step) => (
              <div key={step.step} className="glass-card p-6 flex gap-6">
                <div className="text-gold font-serif font-bold text-3xl opacity-40 flex-shrink-0 w-12">{step.step}</div>
                <div>
                  <h3 className="font-semibold text-cream mb-1">{step.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
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

      {/* CTA + Form */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-cream mb-4">
              Book Your <span className="gradient-text italic">Fashion Shoot</span>
            </h2>
            <p className="text-cream/60">Tell us about your brand and we&apos;ll send a tailored quote within 24 hours.</p>
          </div>
          <div className="glass-card p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
