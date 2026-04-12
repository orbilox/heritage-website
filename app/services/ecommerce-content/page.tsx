import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'E-commerce Content Production for Fashion Brands | Heritage Apparels',
  description:
    'Complete e-commerce content production for D2C fashion brands. Product + lifestyle photography, A/B test variants, marketplace-ready formats. Conversion-optimized visual content.',
  keywords: [
    'ecommerce content production fashion',
    'D2C content agency India',
    'fashion product photography ecommerce',
    'conversion optimized fashion content',
    'fashion brand content production',
  ],
};

const faqs = [
  { q: 'What does the e-commerce content setup service include?', a: 'We set up your complete Shopify or WooCommerce store — theme customization, product listing, payment gateway integration, shipping configuration, and conversion optimization. We also write product descriptions, set up email flows, and configure analytics. You receive a fully operational store, not just a template.' },
  { q: 'Do you write product descriptions as part of the cataloging service?', a: 'Yes. All our marketplace onboarding and e-commerce content packages include SEO-optimized product description writing. We write descriptions that are platform-compliant, keyword-rich, and conversion-focused. For Myntra and Amazon, we also optimize all backend search terms and attributes.' },
  { q: 'Can you migrate our existing store to a new platform?', a: 'Yes — we handle platform migrations from WooCommerce to Shopify, from Magento to Shopify, and from other platforms. Migration includes product data, customer data, order history, and SEO redirect mapping to preserve your search rankings.' },
  { q: 'Do you handle ongoing store management after the initial setup?', a: 'Yes. Our ongoing e-commerce management retainer covers new product listing, content updates, A/B testing of product pages, conversion rate optimization, and monthly performance reporting. This is available as a standalone service or bundled with our performance marketing service.' },
  { q: 'How long does a full Shopify store setup take?', a: 'A standard Shopify store (theme setup, 50 product listings, payment gateway, and email flows) takes 3–5 weeks. Complex stores with custom features, subscription models, or large catalogues take 6–10 weeks. We provide a project timeline with milestones before work begins.' },
];

export default function EcommerceContentPage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'E-commerce Store Setup & Content for Fashion Brands India', serviceType: 'E-commerce Development & Content', provider: { '@type': 'LocalBusiness', name: 'Heritage Apparels', url: 'https://www.heritageapparels.com', address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', addressCountry: 'IN' } }, description: 'Complete e-commerce store setup, product listing, content writing, and ongoing management for D2C fashion brands in India.', areaServed: { '@type': 'Country', name: 'India' } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="py-24 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Link href="/services" className="text-gold/70 text-sm hover:text-gold mb-4 block">← Back to Services</Link>
          <p className="section-label mb-4">E-commerce Content Production</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Content That
            <br />
            <span className="gradient-text italic">Converts Customers</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Every pixel of your e-commerce content should be working to reduce returns, increase conversions, and grow average order value. We build it with that mindset from day one.
          </p>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-serif text-3xl font-bold text-cream mb-6">
                The Science Behind
                <br />
                <span className="gradient-text italic">Conversion-First Content</span>
              </h2>
              <div className="space-y-4 text-cream/70 leading-relaxed">
                <p>
                  Most fashion photography agencies focus on making things look beautiful. We obsess over making things <em>sell</em>. Every creative decision is anchored in consumer psychology, platform algorithms, and performance data.
                </p>
                <p>
                  Our e-commerce content team includes not just photographers and editors, but D2C specialists who understand product pages, marketplace algorithms, and conversion optimization.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { stat: '94%', label: 'Higher conversion vs. amateur photography' },
                  { stat: '42%', label: 'Reduction in returns with accurate product imagery' },
                  { stat: '18%', label: 'AOV increase with lifestyle + product combination' },
                  { stat: '3.7x', label: 'More saves on social with professional content' },
                ].map((item) => (
                  <div key={item.label} className="glass-card p-4 text-center">
                    <div className="font-serif text-2xl font-bold gradient-text mb-1">{item.stat}</div>
                    <div className="text-cream/50 text-xs leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-cream/40 text-xs uppercase tracking-widest mb-4">Content Types We Produce</h3>
              {[
                { icon: '🖼️', title: 'Hero Product Shots', desc: 'Clean, consistent product photography that presents each item in its best light.' },
                { icon: '🌿', title: 'Lifestyle Imagery', desc: 'Aspirational photography placing products in contexts your customer connects with.' },
                { icon: '🔍', title: 'Detail & Texture Shots', desc: 'Close-up photography addressing quality questions before they become returns.' },
                { icon: '👥', title: 'Size-Inclusive Content', desc: 'Diverse model casting that speaks to your entire customer base.' },
                { icon: '📱', title: 'UGC-Style Content', desc: 'Professional content with an authentic, organic aesthetic for paid social.' },
                { icon: '🎥', title: 'Product Demo Videos', desc: 'Short-form videos showing fit, fabric movement, and styling versatility.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 glass-card p-4">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="text-cream font-medium text-sm">{item.title}</div>
                    <div className="text-cream/50 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="font-serif text-2xl font-bold text-cream mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4 mb-8">{faqs.slice(0,3).map(f => (<div key={f.q} className="border-b border-gold/10 pb-4"><h4 className="font-semibold text-cream text-sm mb-2">{f.q}</h4><p className="text-cream/60 text-xs leading-relaxed">{f.a}</p></div>))}</div>
            <h2 className="font-serif text-2xl font-bold text-cream mb-4">Start Your E-commerce Content Project</h2>
            <p className="text-cream/60 mb-6">Tell us about your brand and content needs and we&apos;ll prepare a custom proposal.</p>
            <ContactForm compact />
          </div>
        </div>
      </section>
    </main>
  );
}
