import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { usCities, getUSCityBySlug } from '@/lib/us-cities-data';

export async function generateStaticParams() {
  return usCities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const cityData = getUSCityBySlug(city);
  if (!cityData) return { title: 'Not Found' };
  return {
    title: `India Fashion Sourcing & Brand Services for ${cityData.name} Brands | Heritage Apparels USA`,
    description: `India manufacturing, US marketplace onboarding, brand strategy, and photography for ${cityData.name} fashion brands. ${cityData.tagline}`,
    alternates: { canonical: `https://www.heritageapparels.com/us/cities/${cityData.slug}` },
  };
}

export default async function USCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityData = getUSCityBySlug(city);
  if (!cityData) notFound();

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `India Fashion Sourcing & Brand Services for ${cityData.name} Brands`,
    description: `Heritage Apparels helps ${cityData.name}-based fashion brands source from India, launch on US marketplaces, and build their US brand identity.`,
    provider: { '@type': 'Organization', name: 'Heritage Apparels', url: 'https://www.heritageapparels.com/us' },
    areaServed: { '@type': 'City', name: cityData.name },
    serviceType: 'Fashion Brand Services',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: `Can Heritage Apparels help ${cityData.name}-based fashion brands source from India?`, acceptedAnswer: { '@type': 'Answer', text: `Yes. Heritage Apparels serves ${cityData.name}-based fashion brands with India manufacturing sourcing, US marketplace onboarding, brand strategy, and photography. Services include ${cityData.topServices.join(', ')}.` } },
      { '@type': 'Question', name: `What does it cost for a ${cityData.name} brand to manufacture in India?`, acceptedAnswer: { '@type': 'Answer', text: 'India manufacturing is typically 35–60% cheaper than US domestic production for comparable quality. Our Sample Run package starts at $2,500 for up to 5 styles. Contact us for a free cost comparison specific to your product category.' } },
    ],
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-24 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">📍 {cityData.name}, {cityData.state}</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            India Fashion Services
            <br />
            <span className="gradient-text italic">for {cityData.name} Brands</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            {cityData.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold">Talk to a {cityData.name} Specialist →</Link>
            <Link href="/us/services" className="btn-outline">All US Services</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-charcoal border-y border-gold/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {cityData.stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-3xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-cream/60 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fashion Scene + Services */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-cream mb-6">
                {cityData.name}&apos;s <span className="gradient-text italic">Fashion Market</span>
              </h2>
              <p className="text-cream/70 leading-relaxed mb-6">{cityData.description}</p>
              <p className="text-cream/70 leading-relaxed mb-8">{cityData.fashionScene}</p>
              <h3 className="font-serif text-xl font-bold text-cream mb-4">Key Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {cityData.nearbyAreas.map((area) => (
                  <span key={area} className="px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs">{area}</span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-cream mb-6">
                Services for <span className="gradient-text italic">{cityData.name} Brands</span>
              </h2>
              <ul className="space-y-4">
                {cityData.topServices.map((service) => (
                  <li key={service} className="flex items-start gap-3 glass-card p-4">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-cream/70 text-sm leading-relaxed">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* US Services Grid */}
      <section className="py-20 bg-[#0d1b3e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-cream mb-4">
              Complete Service Suite for <span className="gradient-text italic">{cityData.name} Fashion Brands</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🏭', title: 'India Manufacturing', desc: '35–60% cost savings vs US production. Private label, OEM, and custom designs — US-compliant.', href: '/us/services/manufacturing-sourcing' },
              { icon: '🛍️', title: 'US Marketplace Onboarding', desc: 'Amazon, Walmart, Etsy, TikTok Shop — full onboarding, compliance, and management.', href: '/us/services/marketplace-onboarding' },
              { icon: '🚀', title: 'US Brand Launch', desc: 'From idea to first US sale in 45 days — brand, photography, store, and launch campaign.', href: '/us/services/brand-launch' },
              { icon: '📸', title: 'US Product Photography', desc: 'Amazon-compliant photography — white background, lifestyle, and model shots. $3/SKU.', href: '/us/services/fashion-photoshoot' },
              { icon: '🎯', title: 'US Brand Strategy', desc: 'Logo, visual identity, US packaging, and Amazon Brand Store — built for American buyers.', href: '/us/services/brand-strategy' },
              { icon: '🛃', title: 'US Compliance', desc: 'CPSC, FDA, Prop 65, HS codes, and customs documentation for smooth US import.', href: '/us/services/compliance' },
            ].map((s) => (
              <Link key={s.title} href={s.href} className="glass-card p-6 group hover:border-gold/30 transition-all">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-serif text-lg font-bold text-cream mb-2 group-hover:text-gold transition-colors">{s.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-cream mb-4">Frequently Asked <span className="gradient-text italic">Questions</span></h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="space-y-4">
            {[
              { q: `Can Heritage Apparels help ${cityData.name}-based fashion brands source from India?`, a: `Yes. Heritage Apparels serves ${cityData.name}-based fashion brands with India manufacturing sourcing, US marketplace onboarding, brand strategy, and photography. Our services cover ${cityData.topServices.join(', ')}.` },
              { q: `What does it cost for a ${cityData.name} brand to manufacture in India?`, a: 'India manufacturing is typically 35–60% cheaper than US domestic production for comparable quality. A garment that costs $18–25 to produce in the US can often be sourced from India at $6–12 FOB. Our Sample Run package starts at $2,500 for up to 5 styles and 10 units per style.' },
              { q: `How do you get India-made products to ${cityData.name} customers?`, a: 'Products manufactured in India are shipped by sea freight (25–35 days) or air freight (5–7 days) to a US warehouse or Amazon FBA center. From there, US marketplace fulfillment (Amazon FBA, Walmart WFS) or your own 3PL delivers to customers across the US including ' + cityData.name + '.' },
              { q: `Do ${cityData.name} brands need a US LLC to work with Heritage Apparels?`, a: 'No US LLC is required to begin. You can work with us on brand strategy, photography, and India manufacturing sourcing as an individual or any business entity. For Amazon and Walmart seller accounts, we advise on the optimal seller structure during onboarding.' },
            ].map(f => (
              <div key={f.q} className="glass-card p-6">
                <h3 className="font-semibold text-cream mb-3 leading-snug">{f.q}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other US Cities */}
      <section className="py-12 bg-[#0d1b3e] border-t border-gold/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl font-bold text-cream mb-6 text-center">We Also Serve These <span className="gradient-text italic">US Fashion Markets</span></h2>
          <div className="flex flex-wrap justify-center gap-3">
            {usCities.filter(c => c.slug !== cityData.slug).map(c => (
              <Link key={c.slug} href={`/us/cities/${c.slug}`} className="px-4 py-2 bg-white/5 border border-gold/15 rounded-lg text-cream/70 text-sm hover:border-gold/40 hover:text-cream transition-all">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">Ready to Build Your <span className="gradient-text italic">{cityData.name} Fashion Brand?</span></h2>
          <p className="text-cream/60 mb-8 leading-relaxed">Tell us about your {cityData.name}-based brand and we&apos;ll send a free cost comparison — India manufacturing vs US manufacturing — with realistic timelines and a market entry roadmap.</p>
          <Link href="/us/contact" className="btn-gold inline-block px-8 py-4">Get a Free {cityData.name} Market Assessment</Link>
        </div>
      </section>
    </main>
  );
}
