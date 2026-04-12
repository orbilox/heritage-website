import type { Metadata } from 'next';
import Link from 'next/link';
import USContactForm from '@/components/USContactForm';

export const metadata: Metadata = {
  title: 'Contact Us — USA | Heritage Apparels',
  description:
    'Get in touch with Heritage Apparels for US market services — India manufacturing, US marketplace onboarding, brand launch, and performance marketing. Free strategy call available.',
};

export default function USContactPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="py-20 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">🇺🇸 Talk to Us — USA</p>
          <h1 className="font-serif text-5xl font-bold text-cream mb-6 leading-tight">
            Let&apos;s Build Your
            <br />
            <span className="gradient-text italic">US Market Strategy.</span>
          </h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-cream/70 text-lg">
            Book a free 30-minute call. We&apos;ll cover India sourcing costs for your product, the right US marketplaces to target, and a go-live timeline. No sales pressure — just clarity.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left — Details */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-cream mb-6">
                Get in <span className="gradient-text italic">Touch</span>
              </h2>

              <div className="space-y-5 mb-10">
                {[
                  { icon: '📧', label: 'Email (US Inquiries)', value: 'usa@heritageapparels.com', href: 'mailto:usa@heritageapparels.com' },
                  { icon: '📞', label: 'WhatsApp / Call (India)', value: '+91 78899 09135', href: 'tel:+917889909135' },
                  { icon: '⏰', label: 'Response Time', value: 'Within 12 hours · EST timezone support', href: null },
                  { icon: '🕐', label: 'Business Hours (IST)', value: 'Mon–Fri 9am–7pm · Sat 10am–5pm', href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-cream/40 text-xs uppercase tracking-wider mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-cream hover:text-gold transition-colors font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-cream/80 font-medium text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* What to expect */}
              <div className="glass-card p-6 mb-8">
                <h3 className="font-serif text-lg font-bold text-cream mb-4">What Happens After You Submit</h3>
                <div className="space-y-3">
                  {[
                    { step: '01', text: 'We review your brief and research your product category within 12 hours.' },
                    { step: '02', text: 'We send you a free US marketplace eligibility report + India sourcing cost estimate.' },
                    { step: '03', text: 'We schedule a 30-minute strategy call (Zoom / Google Meet) at your preferred time.' },
                    { step: '04', text: 'You receive a detailed proposal with timelines and USD pricing. No hidden fees.' },
                  ].map((s) => (
                    <div key={s.step} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold text-xs font-bold flex-shrink-0 mt-0.5">
                        {s.step}
                      </span>
                      <p className="text-cream/60 text-sm leading-relaxed">{s.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div>
                <p className="text-cream/40 text-xs uppercase tracking-widest mb-3">Explore US Services</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'US Marketplace Onboarding', href: '/us/services/marketplace-onboarding' },
                    { label: 'All US Services', href: '/us/services' },
                    { label: 'India Homepage', href: '/' },
                  ].map((link) => (
                    <Link key={link.label} href={link.href} className="px-3 py-1.5 bg-gold/10 border border-gold/20 rounded-lg text-gold text-xs font-medium hover:bg-gold/20 transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="glass-card p-8">
              <h3 className="font-serif text-2xl font-bold text-cream mb-2">Send Us Your Brief</h3>
              <p className="text-cream/50 text-sm mb-8">Tell us about your product, US market goals, and budget. We respond within 12 hours.</p>
              <USContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
