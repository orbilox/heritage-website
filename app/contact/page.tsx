import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Heritage Apparels | Fashion Photography Agency',
  description:
    'Get in touch with Heritage Apparels for fashion photography, digital cataloging, brand strategy, and social media content. Request a free quote for your brand.',
  keywords: ['contact fashion photography agency', 'Heritage Apparels contact', 'fashion photoshoot inquiry India'],
};

const contactInfo = [
  { icon: '📞', label: 'Call Us', primary: '+91 78899 09135', secondary: 'Mon–Sat, 9am–7pm IST', href: 'tel:+917889909135' },
  { icon: '📧', label: 'Email Us', primary: 'hello@heritageapparels.com', secondary: 'Response within 24 hours', href: 'mailto:hello@heritageapparels.com' },
  { icon: '💬', label: 'WhatsApp', primary: '+91 78899 09135', secondary: 'Quick responses, chat with our team', href: 'https://wa.me/917889909135' },
  { icon: '📍', label: 'Studio', primary: 'Andheri West, Mumbai 400053', secondary: 'By appointment only', href: null },
];

const officeLocations = [
  { city: 'Mumbai', address: 'Studio 12, Creative Hub, Andheri West, Mumbai 400053', phone: '+91 78899 09135', type: 'HQ & Primary Studio' },
  { city: 'Delhi', address: 'Level 4, Worldmark 1, Aerocity, New Delhi 110037', phone: '+91 11 4567 8900', type: 'North India Operations' },
  { city: 'Bangalore', address: 'Indiqube Edge, Whitefield, Bangalore 560066', phone: '+91 80 4567 8900', type: 'South India Operations' },
];

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Heritage Apparels',
    url: 'https://www.heritageapparels.com/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'Heritage Apparels',
      telephone: '+91-78899-09135',
      email: 'hello@heritageapparels.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Studio 12, Creative Hub, Andheri West',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400053',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* Hero */}
      <section className="py-24 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Get In Touch</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Let&apos;s Create Something
            <br />
            <span className="gradient-text italic">Extraordinary Together</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Whether you have a detailed brief or just a vision in your head, we&apos;d love to hear about your brand and explore how we can help.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {contactInfo.map((info) => (
              <div key={info.label} className="glass-card p-6 text-center group">
                <div className="text-3xl mb-3">{info.icon}</div>
                <div className="text-cream/40 text-xs uppercase tracking-widest mb-2">{info.label}</div>
                {info.href ? (
                  <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    className="text-cream font-semibold text-sm block mb-1 hover:text-gold transition-colors">
                    {info.primary}
                  </a>
                ) : (
                  <div className="text-cream font-semibold text-sm mb-1">{info.primary}</div>
                )}
                <div className="text-cream/40 text-xs">{info.secondary}</div>
              </div>
            ))}
          </div>

          {/* Main contact grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-cream mb-2">
                Send Us Your Brief
              </h2>
              <p className="text-cream/60 mb-6 leading-relaxed">
                Tell us about your brand, the services you need, and your timeline. The more detail you share, the more tailored our response will be.
              </p>
              <div className="glass-card p-8">
                <ContactForm />
              </div>
            </div>

            {/* Additional info */}
            <div>
              {/* What to expect */}
              <div className="glass-card p-8 mb-6">
                <h3 className="font-serif text-xl font-bold text-cream mb-5">What to Expect After You Submit</h3>
                <div className="space-y-4">
                  {[
                    { time: 'Within 2 hours', action: 'Automatic confirmation email with your enquiry details' },
                    { time: 'Within 24 hours', action: 'A member of our team reviews your brief and may ask clarifying questions' },
                    { time: 'Within 48 hours', action: 'Custom proposal with creative approach, timeline, and investment details' },
                    { time: 'At your convenience', action: 'Discovery call to align on vision and answer any questions' },
                  ].map((step) => (
                    <div key={step.time} className="flex items-start gap-4">
                      <div className="w-20 text-right flex-shrink-0">
                        <span className="text-gold text-xs font-medium">{step.time}</span>
                      </div>
                      <div className="flex-1">
                        <div className="w-px h-full bg-gold/20 absolute" />
                        <p className="text-cream/70 text-sm leading-relaxed">{step.action}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Offices */}
              <div className="glass-card p-8">
                <h3 className="font-serif text-xl font-bold text-cream mb-5">Our Studios</h3>
                <div className="space-y-5">
                  {officeLocations.map((office) => (
                    <div key={office.city} className="border-b border-gold/10 pb-5 last:border-0 last:pb-0">
                      <div className="flex items-start justify-between mb-1">
                        <div className="font-serif font-bold text-cream">{office.city}</div>
                        <span className="px-2 py-0.5 bg-gold/10 text-gold text-xs rounded-full border border-gold/20">
                          {office.type}
                        </span>
                      </div>
                      <p className="text-cream/60 text-sm mb-1">{office.address}</p>
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-gold text-sm hover:underline">
                        {office.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#0f0f1e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-cream mb-4">
              Frequently Asked <span className="gradient-text italic">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'How quickly can you start my project?',
                a: 'We typically can schedule shoots within 1-2 weeks of brief approval. For urgent requirements, we have a priority service with 48-hour notice. Contact us to discuss your timeline.'
              },
              {
                q: 'Do you work with brands outside Mumbai?',
                a: 'Yes! We offer pan-India service with studios in Mumbai, Delhi, and Bangalore. Our location scouting and on-location shoot teams operate across India. International projects are considered on a case-by-case basis.'
              },
              {
                q: 'What is your minimum project size?',
                a: 'Our minimum project value is ₹25,000. For digital cataloging, we typically work with a minimum of 50 SKUs to achieve the workflow efficiency that enables our competitive pricing.'
              },
              {
                q: 'Do you offer NDAs for sensitive projects?',
                a: 'Absolutely. We sign NDAs on request for all projects. We understand that new product launches and brand refreshes are confidential, and we take data security seriously.'
              },
            ].map((faq) => (
              <details key={faq.q} className="glass-card p-6 group">
                <summary className="text-cream font-semibold cursor-pointer list-none flex items-center justify-between hover:text-gold transition-colors">
                  {faq.q}
                  <span className="text-gold ml-4 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-cream/60 text-sm leading-relaxed mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
