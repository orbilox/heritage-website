import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { usMarketplaces, getUSMarketplaceBySlug } from '@/lib/us-marketplace-data';

export async function generateStaticParams() {
  return usMarketplaces.map((m) => ({ platform: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ platform: string }> }): Promise<Metadata> {
  const { platform } = await params;
  const marketplace = getUSMarketplaceBySlug(platform);
  if (!marketplace) return { title: 'Not Found' };
  return {
    title: `${marketplace.name} Onboarding for India Fashion Brands | Heritage Apparels USA`,
    description: `We onboard India-made fashion brands on ${marketplace.name} — listings, US compliance, catalog upload, and marketplace management. ${marketplace.strength}`,
    alternates: { canonical: `https://www.heritageapparels.com/us/services/marketplace/${marketplace.slug}` },
  };
}

export default async function USMarketplacePage({ params }: { params: Promise<{ platform: string }> }) {
  const { platform } = await params;
  const marketplace = getUSMarketplaceBySlug(platform);
  if (!marketplace) notFound();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${marketplace.name} Onboarding for India-Made Fashion Brands`,
    serviceType: 'US Marketplace Onboarding',
    provider: { '@type': 'Organization', name: 'Heritage Apparels', url: 'https://www.heritageapparels.com/us' },
    description: `Heritage Apparels onboards India-made fashion brands on ${marketplace.name} — US-compliant listings, catalog upload, Brand Registry, and ongoing marketplace management.`,
    areaServed: { '@type': 'Country', name: 'United States' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: `How do I sell India-made fashion on ${marketplace.name}?`, acceptedAnswer: { '@type': 'Answer', text: `To sell India-made fashion on ${marketplace.name}, you need: ${marketplace.requirements.join(', ')}. Heritage Apparels handles the full setup — account registration, catalog formatting, US compliance documentation, and listing optimization — typically in ${marketplace.onboardingTime}.` } },
      { '@type': 'Question', name: `What does ${marketplace.name} charge in commissions?`, acceptedAnswer: { '@type': 'Answer', text: `${marketplace.name} charges ${marketplace.commission}. This is deducted from each sale before payout.` } },
      { '@type': 'Question', name: `How long does it take to start selling on ${marketplace.name}?`, acceptedAnswer: { '@type': 'Answer', text: `${marketplace.onboardingTime} from application to first live listing, when Heritage Apparels manages the process.` } },
    ],
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-24 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Link href="/us/services/marketplace-onboarding" className="text-gold/70 text-sm hover:text-gold mb-4 block">← Back to US Marketplace Onboarding</Link>
          <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium mb-4">{marketplace.category}</span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Sell India Fashion on
            <br />
            <span className="gradient-text italic">{marketplace.name}</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            {marketplace.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold">Get Listed on {marketplace.name} →</Link>
            <Link href="/us/services/marketplace-onboarding" className="btn-outline">All US Marketplaces</Link>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-charcoal border-y border-gold/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Category', value: marketplace.category },
              { label: 'Commission', value: marketplace.commission },
              { label: 'Onboarding Time', value: marketplace.onboardingTime },
              { label: 'Seller Type', value: marketplace.sellerType },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-lg font-bold gradient-text mb-1 leading-tight">{s.value}</div>
                <div className="text-cream/40 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Details */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-cream mb-6">
                Why Sell India Fashion on <span className="gradient-text italic">{marketplace.name}?</span>
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-cream/70 leading-relaxed">{marketplace.description}</p>
                <div className="glass-card p-4">
                  <div className="text-gold text-sm font-medium mb-2">US Target Audience</div>
                  <p className="text-cream/70 text-sm">{marketplace.audience}</p>
                </div>
                <div className="glass-card p-4">
                  <div className="text-gold text-sm font-medium mb-2">Platform Strength</div>
                  <p className="text-cream/70 text-sm">{marketplace.strength}</p>
                </div>
                <div className="glass-card p-4">
                  <div className="text-gold text-sm font-medium mb-2">Ideal For</div>
                  <p className="text-cream/70 text-sm">{marketplace.ideal}</p>
                </div>
                <div className="glass-card p-4">
                  <div className="text-gold text-sm font-medium mb-2">Minimum Order</div>
                  <p className="text-cream/70 text-sm">{marketplace.moq}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-cream mb-6">
                Requirements to <span className="gradient-text italic">Start Selling</span>
              </h3>
              <ul className="space-y-3 mb-8">
                {marketplace.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3 text-cream/70 text-sm">
                    <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    {req}
                  </li>
                ))}
              </ul>

              <h3 className="font-serif text-xl font-bold text-cream mb-4">
                Expert Tips for <span className="gradient-text italic">{marketplace.name}</span>
              </h3>
              <ul className="space-y-3">
                {marketplace.tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3 glass-card p-4 text-sm text-cream/70">
                    <span className="text-gold text-xs mt-1">💡</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#0d1b3e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-cream mb-4">Frequently Asked <span className="gradient-text italic">Questions</span></h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="space-y-4">
            {[
              { q: `How do I sell India-made fashion on ${marketplace.name}?`, a: `To sell India-made fashion on ${marketplace.name}, you need: ${marketplace.requirements.join(', ')}. Heritage Apparels handles the full setup — account registration, catalog formatting, US compliance documentation, and listing optimization — typically in ${marketplace.onboardingTime}.` },
              { q: `What does ${marketplace.name} charge in commissions?`, a: `${marketplace.name} charges ${marketplace.commission}. This is deducted from each sale before payout. Additional fees may apply for optional services like fulfillment (FBA/WFS).` },
              { q: `How long does it take to start selling on ${marketplace.name}?`, a: `${marketplace.onboardingTime} from application to first live listing, when Heritage Apparels manages the full process. We prepare all required documentation in parallel to minimize wait time.` },
              { q: `Do I need a US entity to sell on ${marketplace.name}?`, a: `Requirements vary by platform. ${marketplace.sellerType}. Heritage Apparels advises on the optimal seller structure for your situation during onboarding.` },
            ].map(f => (
              <div key={f.q} className="glass-card p-6">
                <h3 className="font-semibold text-cream mb-3 leading-snug">{f.q}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other US Marketplaces */}
      <section className="py-16 bg-charcoal border-t border-gold/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-cream mb-8 text-center">
            Also Onboard on These <span className="gradient-text italic">US Marketplaces</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {usMarketplaces.filter(m => m.slug !== marketplace.slug).slice(0, 8).map(m => (
              <Link key={m.slug} href={`/us/services/marketplace/${m.slug}`} className="px-4 py-2 bg-white/5 border border-gold/15 rounded-lg text-cream/70 text-sm hover:border-gold/40 hover:text-cream transition-all">
                {m.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0d1b3e] border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">Ready to Sell on <span className="gradient-text italic">{marketplace.name}?</span></h2>
          <p className="text-cream/60 mb-8 leading-relaxed">We handle the full onboarding — account setup, US compliance, catalog formatting, listing optimization, and launch. Tell us about your brand and products and we&apos;ll send a free eligibility assessment.</p>
          <Link href="/us/contact" className="btn-gold inline-block px-8 py-4">Start {marketplace.name} Onboarding →</Link>
        </div>
      </section>
    </main>
  );
}
