import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fashion & Clothing Brand Agency USA | Heritage Apparels',
  description:
    'We help clothing brands launch and scale in the US market — from India sourcing and private-label manufacturing to Amazon, Shopify, and performance marketing.',
  keywords: ['clothing brand agency USA', 'private label clothing USA', 'apparel startup India sourcing', 'Amazon clothing brand launch'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to manufacture clothing in India for the US market?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'India manufacturing typically costs $6–$12 per piece for standard apparel, which is 40–60% lower than US or EU manufacturing. Exact pricing depends on fabric, construction complexity, and order quantity. Heritage Apparels provides factory-direct pricing with no middlemen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help me launch my clothing brand on Amazon without any prior experience?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We handle everything — Amazon Brand Registry, catalog creation, keyword-optimized listings, A+ Content, and your first ad campaigns. Most of our clients go from zero to first Amazon sale within 45 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order quantity (MOQ) for clothing brands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our India manufacturing partners accept MOQs starting at 50–100 pieces per style. This makes us ideal for clothing startups who want to test the market before committing to large production runs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide US compliance support for clothing products?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We ensure all clothing products meet US labeling requirements including fiber content, country of origin, care instructions, and RN numbers. We also assist with CPSC compliance for applicable garments.',
      },
    },
  ],
};

const stats = [
  { value: '300+', label: 'Clothing Brands Launched', sub: 'across Amazon & Shopify' },
  { value: '$6–$12', label: 'Per Piece Manufacturing', sub: 'India factory-direct pricing' },
  { value: '45 Days', label: 'Idea to First Sale', sub: 'average launch timeline' },
  { value: '4–8x', label: 'ROAS Delivered', sub: 'on Meta & Amazon Ads' },
];

const challenges = [
  {
    icon: '💸',
    title: 'High Manufacturing Costs in the US',
    desc: 'US domestic manufacturing often runs $25–$60 per garment, making it impossible for new brands to price competitively on Amazon and Shopify without razor-thin margins.',
  },
  {
    icon: '🔍',
    title: 'Finding Reliable Overseas Factories',
    desc: 'Sourcing blindly from Alibaba leads to quality failures, missed shipments, and wasted capital. Most founders lack the network and vetting process to find trustworthy Indian manufacturers.',
  },
  {
    icon: '📦',
    title: 'Amazon & Shopify Launch Complexity',
    desc: 'Brand Registry, listing optimization, A+ Content, FBA logistics, and running profitable ad campaigns simultaneously is overwhelming for first-time brand founders.',
  },
  {
    icon: '📋',
    title: 'US Compliance & Labeling Requirements',
    desc: 'US clothing must meet FTC labeling rules, fiber content disclosure, and country-of-origin marking. Non-compliance can result in marketplace suspensions and legal penalties.',
  },
];

const solutions = [
  {
    icon: '🏭',
    title: 'Vetted India Manufacturer Network',
    desc: 'Access our curated network of 200+ verified Indian garment factories with quality audits, compliance records, and proven US export experience.',
  },
  {
    icon: '✏️',
    title: 'Private-Label Brand Development',
    desc: 'We build your brand identity — name, logo, packaging, and hangtags — designed specifically to appeal to US consumers and stand out on Amazon.',
  },
  {
    icon: '🛒',
    title: 'Amazon & Shopify Launch',
    desc: 'Full-service setup: Amazon Brand Registry, SEO-optimized listings, A+ Content, Shopify store build, and first-month ad campaign management.',
  },
  {
    icon: '📋',
    title: 'US Compliance Management',
    desc: 'FTC-compliant labels, CPSC documentation, fiber content declarations, and RN number registration — handled end to end.',
  },
];

const services = [
  { icon: '🏭', title: 'India Sourcing & Manufacturing', desc: 'Factory-direct clothing production at $6–$12/piece. We source fabrics, manage production, and handle quality inspection before shipment.' },
  { icon: '✏️', title: 'Private-Label Branding', desc: 'Custom brand name, logo, hangtags, poly bags, and retail-ready packaging designed for the US market.' },
  { icon: '📸', title: 'US-Format Photography', desc: 'Amazon-compliant white-background images, lifestyle shots with US models, and infographic images for every SKU.' },
  { icon: '🛒', title: 'Amazon & Shopify Launch', desc: 'Complete marketplace onboarding — listings, A+ Content, Brand Store, FBA setup, and conversion-optimized Shopify store.' },
  { icon: '📈', title: 'Performance Marketing', desc: 'Profitable Meta, Google, TikTok, and Amazon Sponsored Ads campaigns delivering 4–8x ROAS from launch day.' },
  { icon: '📋', title: 'Compliance & Labeling', desc: 'Full US clothing compliance — FTC labels, fiber content, care instructions, country of origin, and CPSC support.' },
];

const indiaAdvantages = [
  { icon: '💰', title: '40–60% Lower Cost', desc: 'India offers significantly lower labor and production costs versus the US, EU, or even China for fashion apparel.' },
  { icon: '🧵', title: 'Superior Fabric Selection', desc: 'India is the world\'s second-largest textile producer with unmatched access to cotton, linen, silk, and blended fabrics.' },
  { icon: '🏆', title: 'Established Export Track Record', desc: 'Indian garment factories have decades of experience exporting to US retailers like Walmart, Target, and Macy\'s.' },
  { icon: '⚡', title: 'Fast Turnaround', desc: 'Our partner factories deliver samples in 7–10 days and bulk orders in 21–35 days — competitive with any global sourcing hub.' },
];

export default function ClothingBrandsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="py-24 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-[#c9a84c] to-transparent" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <p className="section-label mb-4">Clothing Brand Agency USA</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Launch Your <span className="gradient-text">Clothing Brand</span> in the USA — India-Made, America-Ready
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl">
            From private-label manufacturing in India at $6–$12/piece to Amazon, Shopify, and performance marketing — Heritage Apparels is the only agency your clothing brand needs.
          </p>
          <div className="flex flex-wrap gap-4 mb-16">
            <Link href="/us/contact" className="btn-gold">Start Your Brand</Link>
            <Link href="/us/pricing" className="btn-outline">View Pricing</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="text-3xl font-bold text-[#c9a84c] mb-1">{s.value}</div>
                <div className="text-white font-semibold text-sm">{s.label}</div>
                <div className="text-gray-400 text-xs mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-3">Pain Points</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">Challenges Clothing Brands Face</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((c) => (
              <div key={c.title} className="bg-[#16213e] rounded-xl p-6 border border-white/10">
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-3">Our Approach</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">How Heritage Apparels Solves Them</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((s) => (
              <div key={s.title} className="flex gap-4 bg-white/5 rounded-xl p-6 border border-[#c9a84c]/20">
                <div className="text-3xl shrink-0">{s.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">Our Services for Clothing Brands</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-[#16213e] rounded-xl p-6 border border-white/10 hover:border-[#c9a84c]/40 transition-colors">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India Advantage */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-3">Why India</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Why India Manufacturing for Clothing Brands</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">India is the world's second-largest textile and apparel exporter, supplying to US retailers for over 40 years. Here's why smart clothing brands choose India.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {indiaAdvantages.map((a) => (
              <div key={a.title} className="flex gap-4 bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-3xl shrink-0">{a.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{a.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">Clothing Brand Questions Answered</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="bg-[#16213e] rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-bold mb-3">{faq.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="gold-divider mb-8" />
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready to Launch Your Clothing Brand?</h2>
          <p className="text-gray-400 mb-10 text-lg">Get a free strategy call. We'll map out your India sourcing, brand build, and US launch plan — at no cost.</p>
          <Link href="/us/contact" className="btn-gold text-lg px-10 py-4">Book Free Strategy Call</Link>
        </div>
      </section>
    </>
  );
}
