import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Footwear Brand Agency USA | India Manufacturing & US Market Launch',
  description:
    'Launch your footwear brand in the USA with Heritage Apparels. India manufacturing for shoes, sandals, and accessories at 40-60% lower cost. Amazon & Shopify launch included.',
  keywords: ['footwear brand agency USA', 'shoe brand India manufacturing', 'CPSC footwear compliance', 'Amazon shoe brand launch USA'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does India manufacture quality footwear for the US market?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. India is one of the world\'s top footwear exporters, with established manufacturing clusters in Agra, Chennai, and Kolkata. Indian factories produce leather shoes, sandals, boots, and synthetic footwear for US and European brands at 40–60% lower cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'What CPSC compliance requirements apply to footwear sold in the USA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Footwear sold in the USA must comply with CPSC general conformity requirements, including country-of-origin labeling and, for children\'s footwear, lead content restrictions. We handle all compliance documentation, testing coordination, and labeling for your footwear line.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help list my footwear on Amazon\'s shoe category?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We are specialists in Amazon\'s footwear category, which has specific image requirements (including multiple angle shots), size chart standards, and variant listing structures. We handle full catalog setup, A+ Content, and Brand Store creation for footwear brands.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the typical cost saving when manufacturing footwear in India vs the USA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our clients typically save 40–60% on manufacturing costs when sourcing from India versus US or EU production. For example, a leather sandal that costs $35 to produce in the US can often be manufactured in India at $12–$18 with comparable quality.',
      },
    },
  ],
};

const stats = [
  { value: '40–60%', label: 'Manufacturing Cost Saving', sub: 'vs US & EU production' },
  { value: 'CPSC', label: 'Compliant Products', sub: 'full US regulatory support' },
  { value: 'Amazon', label: 'Shoe Category Specialists', sub: 'catalog, A+, Brand Store' },
  { value: '45 Days', label: 'To First US Sale', sub: 'average launch timeline' },
];

const challenges = [
  {
    icon: '💸',
    title: 'Prohibitive US Manufacturing Costs',
    desc: 'Domestic footwear manufacturing is among the most expensive in the world. Most US shoe brands are priced out of competitive retail before they even launch.',
  },
  {
    icon: '📋',
    title: 'Complex CPSC & Import Compliance',
    desc: 'Footwear imports require country-of-origin marking, CPSC general conformity documentation, and for children\'s shoes, additional safety testing. Mistakes lead to CBP holds and marketplace suspensions.',
  },
  {
    icon: '🛒',
    title: 'Amazon Footwear Category Complexity',
    desc: 'Amazon\'s shoe category has strict image requirements, multi-angle photo standards, and complex variation listing structures that trip up new sellers constantly.',
  },
  {
    icon: '🔍',
    title: 'Finding Reliable Footwear Factories',
    desc: 'Footwear manufacturing requires specialized equipment and skills. Generic sourcing agents rarely have access to quality shoe factories with US export experience.',
  },
];

const solutions = [
  {
    icon: '🏭',
    title: 'Vetted India Footwear Factory Network',
    desc: 'Direct relationships with Agra, Chennai, and Kolkata shoe factories with proven US export records — leather, synthetic, and athleisure footwear specialists.',
  },
  {
    icon: '📋',
    title: 'Full CPSC & Import Compliance',
    desc: 'We manage all compliance documentation, coordinate safety testing, handle CBP entry paperwork, and ensure every shipment clears US customs without delays.',
  },
  {
    icon: '🛒',
    title: 'Amazon Shoe Category Expertise',
    desc: 'Multi-angle photography, variation listing structures, size-chart optimization, and A+ Content — built by specialists who know Amazon footwear inside out.',
  },
  {
    icon: '✏️',
    title: 'Footwear Brand Development',
    desc: 'Brand identity, shoebox packaging, hangtags, and insole branding — every touchpoint designed to position your footwear brand at the right US price point.',
  },
];

const services = [
  { icon: '🏭', title: 'India Footwear Manufacturing', desc: 'Factory-direct shoe, sandal, and boot production in India at 40–60% lower cost. Leather, synthetic, and vegan materials available.' },
  { icon: '📋', title: 'CPSC Compliance & Import Docs', desc: 'Full compliance management — CPSC documentation, country-of-origin labeling, CBP entry, and children\'s safety testing coordination.' },
  { icon: '✏️', title: 'Footwear Brand Identity', desc: 'Brand name, logo, shoebox design, tissue paper, hang tags, and insole branding — crafted for the US retail market.' },
  { icon: '📸', title: 'Amazon-Compliant Footwear Photography', desc: 'Multi-angle shots, lifestyle images with US models, size-chart infographics — all meeting Amazon shoe category requirements.' },
  { icon: '🛒', title: 'Amazon & Shopify Launch', desc: 'Amazon shoe category listing, variation setup, A+ Content, Brand Store, and conversion-optimized Shopify store build.' },
  { icon: '📈', title: 'US Performance Marketing', desc: 'Targeted Meta, Google Shopping, and Amazon Sponsored Products campaigns for footwear — driving profitable US sales from day one.' },
];

const indiaAdvantages = [
  { icon: '👟', title: 'World-Class Shoe Manufacturing Clusters', desc: 'Agra (leather shoes), Chennai (formal & exports), and Kolkata (premium leather) are established global footwear hubs with US export experience.' },
  { icon: '🐄', title: 'Premium Leather Access', desc: 'India is the world\'s second-largest leather producer — giving your brand direct access to high-quality hides at far lower cost than European alternatives.' },
  { icon: '💰', title: '40–60% Cost Advantage', desc: 'Lower labor costs and vertically integrated leather supply chains make India the most cost-effective footwear sourcing destination for US brands.' },
  { icon: '🌿', title: 'Vegan & Sustainable Options', desc: 'Indian factories increasingly offer vegan leather, recycled rubber soles, and sustainable footwear materials for eco-conscious US brands.' },
];

export default function FootwearBrandsPage() {
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
          <p className="section-label mb-4">Footwear Brand Agency USA</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Launch Your <span className="gradient-text">Footwear Brand</span> in the USA — India-Made, 40–60% Lower Cost
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl">
            From leather shoes and sandals manufactured in India to CPSC compliance, Amazon shoe category launch, and Shopify — Heritage Apparels is your end-to-end footwear brand agency.
          </p>
          <div className="flex flex-wrap gap-4 mb-16">
            <Link href="/us/contact" className="btn-gold">Start Your Footwear Brand</Link>
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">Challenges Footwear Brands Face</h2>
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">Our Services for Footwear Brands</h2>
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Why India Manufacturing for Footwear Brands</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">India is one of the world's largest footwear exporters with deep leather expertise and competitive manufacturing costs. Here's why top footwear brands source from India.</p>
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">Footwear Brand Questions Answered</h2>
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
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready to Launch Your Footwear Brand?</h2>
          <p className="text-gray-400 mb-10 text-lg">Get a free strategy call. We'll design your India sourcing plan, compliance roadmap, and US launch strategy — at no cost.</p>
          <Link href="/us/contact" className="btn-gold text-lg px-10 py-4">Book Free Strategy Call</Link>
        </div>
      </section>
    </>
  );
}
