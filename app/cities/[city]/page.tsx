import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { indiaCities, getCityBySlug } from '@/lib/india-cities-data';

export async function generateStaticParams() {
  return indiaCities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) return { title: 'Not Found' };
  return {
    title: `Fashion Brand Services in ${cityData.name} | Heritage Apparels`,
    description: `Fashion photography, marketplace onboarding, brand strategy, and performance marketing for ${cityData.name} D2C fashion brands. ${cityData.tagline}`,
    alternates: { canonical: `https://www.heritageapparels.com/cities/${cityData.slug}` },
  };
}

export default async function IndiaCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) notFound();

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Heritage Apparels — ${cityData.name}`,
    description: `Fashion photography, digital cataloging, marketplace onboarding, and brand strategy for ${cityData.name} D2C fashion brands.`,
    url: `https://www.heritageapparels.com/cities/${cityData.slug}`,
    areaServed: { '@type': 'City', name: cityData.name },
    serviceArea: { '@type': 'State', name: cityData.state },
    address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', addressCountry: 'IN' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: `Does Heritage Apparels serve fashion brands in ${cityData.name}?`, acceptedAnswer: { '@type': 'Answer', text: `Yes. Heritage Apparels serves fashion brands across ${cityData.name} and ${cityData.state}. Services include ${cityData.topServices.join(', ')}.` } },
      { '@type': 'Question', name: `What fashion services are available in ${cityData.name}?`, acceptedAnswer: { '@type': 'Answer', text: `In ${cityData.name}, we offer: ${cityData.topServices.join(', ')}. Our ${cityData.name} clients benefit from our pan-India studio network and Mumbai headquarters.` } },
    ],
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-24 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">📍 {cityData.name}, {cityData.state}</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Fashion Brand Services
            <br />
            <span className="gradient-text italic">in {cityData.name}</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            {cityData.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold">Talk to a {cityData.name} Specialist →</Link>
            <Link href="/services" className="btn-outline">All Services</Link>
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
                {cityData.name}&apos;s <span className="gradient-text italic">Fashion Ecosystem</span>
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

      {/* All India Services Grid */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-cream mb-4">
              Complete Service Suite for <span className="gradient-text italic">{cityData.name} Fashion Brands</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '📸', title: 'Fashion Photoshoot', desc: 'Studio and on-location fashion photography — model, flat-lay, lifestyle, and product shots.', href: '/services/fashion-photoshoot' },
              { icon: '📂', title: 'Digital Cataloging', desc: 'High-volume catalog photography at 200+ SKUs per day — marketplace-ready in 48 hours.', href: '/services/digital-cataloging' },
              { icon: '🛍️', title: 'Marketplace Onboarding', desc: 'Myntra, Ajio, Amazon, Nykaa — full onboarding, listing, and ongoing management.', href: '/services/marketplace-onboarding' },
              { icon: '🎯', title: 'Brand Strategy', desc: 'Brand naming, logo, visual identity, and brand guidelines for D2C fashion launches.', href: '/services/brand-strategy' },
              { icon: '📣', title: 'Performance Marketing', desc: 'Meta and Google Ads with 4–8x ROAS for fashion D2C brands.', href: '/services/performance-marketing' },
              { icon: '📱', title: 'Social Media & Reels', desc: 'Instagram Reels and social content engineered for fashion brand growth.', href: '/services/social-media-reels' },
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
              { q: `Does Heritage Apparels serve fashion brands in ${cityData.name}?`, a: `Yes. Heritage Apparels serves fashion brands across ${cityData.name} and ${cityData.state}. Our pan-India studio network and digital services mean ${cityData.name} brands get the same quality as our Mumbai headquarters clients. Services include ${cityData.topServices.join(', ')}.` },
              { q: `What fashion services are available for ${cityData.name} brands?`, a: `${cityData.name} brands can access our full service suite — fashion photography and digital cataloging, marketplace onboarding (Myntra, Ajio, Amazon, Nykaa), brand strategy and identity, performance marketing, social media and Reels production, and manufacturing sourcing.` },
              { q: `Do you have a studio in ${cityData.name}?`, a: `We serve ${cityData.name} brands through our pan-India network. For photography and cataloging, ${cityData.name} brands can ship products to our studio or we can coordinate a location shoot. For digital services (marketplace onboarding, performance marketing, brand strategy), everything is handled remotely with no location constraints.` },
              { q: `How do I start as a ${cityData.name}-based fashion brand?`, a: `Start with a free brand consultation. Tell us about your product, your target marketplace, and your budget — we\'ll recommend the right entry package for a ${cityData.name}-based brand. Most clients start with marketplace onboarding or a photography package and expand from there.` },
            ].map(f => (
              <div key={f.q} className="glass-card p-6">
                <h3 className="font-semibold text-cream mb-3 leading-snug">{f.q}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="py-12 bg-[#16213e] border-t border-gold/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl font-bold text-cream mb-6 text-center">We Also Serve These <span className="gradient-text italic">Fashion Hubs</span></h2>
          <div className="flex flex-wrap justify-center gap-3">
            {indiaCities.filter(c => c.slug !== cityData.slug).map(c => (
              <Link key={c.slug} href={`/cities/${c.slug}`} className="px-4 py-2 bg-white/5 border border-gold/15 rounded-lg text-cream/70 text-sm hover:border-gold/40 hover:text-cream transition-all">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">Start Growing Your <span className="gradient-text italic">{cityData.name} Brand</span></h2>
          <p className="text-cream/60 mb-8 leading-relaxed">Tell us about your {cityData.name}-based brand and we&apos;ll send a free service recommendation — what to do first, what it costs, and what results to expect.</p>
          <Link href="/contact" className="btn-gold inline-block px-8 py-4">Get a Free {cityData.name} Brand Consultation</Link>
        </div>
      </section>
    </main>
  );
}
