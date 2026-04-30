import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Activewear & Athleisure Brand Agency USA | Heritage Apparels',
  description:
    'Launch your activewear or athleisure brand in the USA with India manufacturing. Moisture-wicking fabrics, custom sublimation, Amazon & Shopify launch included.',
  keywords: ['activewear brand agency USA', 'athleisure brand launch USA', 'gym wear India manufacturing', 'custom sublimation activewear'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you manufacture moisture-wicking and performance activewear in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our India partner factories specialize in performance fabrics including moisture-wicking polyester, nylon spandex blends, and recycled performance textiles. All materials are OEKO-TEX certified and meet US quality standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer custom sublimation printing for activewear?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We offer all-over custom sublimation printing with unlimited color options and no color fees. Perfect for yoga pants, sports bras, rashguards, and athleisure sets. Minimum order is 50 pieces per design.',
      },
    },
    {
      '@type': 'Question',
      name: 'What certifications do your activewear fabrics carry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our performance fabrics are OEKO-TEX Standard 100 certified, meaning they are tested for harmful substances and safe for skin contact. We also source recycled polyester (rPET) fabrics for eco-conscious brands.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which marketing channels work best for activewear brands in the USA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TikTok and Instagram are the primary growth channels for activewear, driven by fitness influencers and UGC content. We complement this with Amazon Sponsored Ads for search-driven purchases and Meta retargeting for D2C Shopify conversion.',
      },
    },
  ],
};

const stats = [
  { value: '50+', label: 'Activewear Brands Launched', sub: 'in the US market' },
  { value: 'Custom', label: 'Sublimation Available', sub: 'unlimited colors, MOQ 50' },
  { value: '50 pcs', label: 'Minimum Order Quantity', sub: 'per style / per design' },
  { value: 'TikTok', label: '& Instagram Marketing', sub: 'fitness influencer campaigns' },
];

const challenges = [
  {
    icon: '🧪',
    title: 'Sourcing the Right Performance Fabrics',
    desc: 'Generic fabrics won\'t cut it in the activewear market. Brands struggle to find moisture-wicking, four-way stretch, and UV-protective fabrics that meet US consumer expectations.',
  },
  {
    icon: '🎨',
    title: 'Differentiating in a Crowded Market',
    desc: 'The athleisure space is dominated by Lululemon, Nike, and Gymshark. New brands need unique designs and custom sublimation prints to carve out their niche.',
  },
  {
    icon: '📱',
    title: 'Building a Fitness Community Online',
    desc: 'Activewear is sold through lifestyle content — workout videos, influencer collabs, and TikTok UGC. Most founders don\'t know how to build this from zero.',
  },
  {
    icon: '🏷️',
    title: 'Low MOQs for Testing Designs',
    desc: 'Large manufacturers demand 500+ piece MOQs, making it impossible for startups to test colorways and designs before committing to inventory.',
  },
];

const solutions = [
  {
    icon: '🧵',
    title: 'OEKO-TEX Performance Fabric Sourcing',
    desc: 'We source moisture-wicking, four-way stretch, anti-odor, and UV-protective fabrics from certified Indian mills — all at significantly lower cost than US suppliers.',
  },
  {
    icon: '🎨',
    title: 'Custom Sublimation & Print Development',
    desc: 'All-over sublimation printing with your custom artwork. We handle tech packs, color matching, and sample approval before any bulk production.',
  },
  {
    icon: '📱',
    title: 'TikTok & Instagram Launch Campaigns',
    desc: 'Fitness influencer seeding, UGC video production, and paid TikTok and Instagram campaigns designed specifically for the activewear buyer.',
  },
  {
    icon: '📦',
    title: 'Low MOQ Sampling & Production',
    desc: 'Start with as few as 50 pieces per style. Test your designs with real customers before scaling to full production runs.',
  },
];

const services = [
  { icon: '🧵', title: 'Performance Fabric Sourcing', desc: 'OEKO-TEX certified moisture-wicking, four-way stretch, and recycled performance fabrics sourced from India\'s top certified mills.' },
  { icon: '🎨', title: 'Custom Sublimation Printing', desc: 'All-over sublimation with unlimited color options. From yoga pants to rashguards — any print, any design, MOQ 50 pieces.' },
  { icon: '✏️', title: 'Activewear Brand Development', desc: 'Brand name, logo, product line design, and fitness-market positioning — built to compete with premium athleisure brands.' },
  { icon: '🛒', title: 'Amazon & Shopify Launch', desc: 'Amazon sporting goods category setup, Shopify D2C store, size-chart optimized listings, and FBA logistics.' },
  { icon: '📱', title: 'Fitness Influencer Marketing', desc: 'TikTok and Instagram influencer seeding, UGC campaign management, and paid social ads targeting fitness audiences in the USA.' },
  { icon: '📸', title: 'Activewear Photography', desc: 'In-motion lifestyle photography with US fitness models — gym, outdoor, and studio settings optimized for Amazon and social media.' },
];

const indiaAdvantages = [
  { icon: '🏭', title: 'Specialized Activewear Factories', desc: 'India\'s sportswear manufacturing cluster in Ludhiana and Tirupur produces for global brands including Decathlon and Under Armour.' },
  { icon: '🧪', title: 'OEKO-TEX Certified Materials', desc: 'Access to certified performance fabrics that pass US safety and quality standards — essential for direct skin contact activewear.' },
  { icon: '💰', title: '50%+ Cost Advantage', desc: 'Indian activewear manufacturing is 50–65% cheaper than comparable US production, enabling competitive retail pricing and healthy margins.' },
  { icon: '⚡', title: 'Fast Sample Turnaround', desc: 'Samples in 10–14 days. Bulk sublimation orders fulfilled in 25–35 days — fast enough for seasonal activewear drops.' },
];

export default function ActivewearBrandsPage() {
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
          <p className="section-label mb-4">Activewear Brand Agency USA</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Launch Your <span className="gradient-text">Activewear Brand</span> in the USA — Performance Fabrics, Custom Prints
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl">
            OEKO-TEX certified moisture-wicking fabrics, custom sublimation printing, and a full US launch on Amazon and Shopify — built for gym wear, yoga, and athleisure brands.
          </p>
          <div className="flex flex-wrap gap-4 mb-16">
            <Link href="/us/contact" className="btn-gold">Launch Your Activewear Brand</Link>
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">Challenges Activewear Brands Face</h2>
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">Our Services for Activewear Brands</h2>
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Why India Manufacturing for Activewear Brands</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">India has a mature, certified sportswear manufacturing ecosystem producing for global athletic brands. Here's why smart activewear founders choose India.</p>
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">Activewear Brand Questions Answered</h2>
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
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready to Build Your Activewear Brand?</h2>
          <p className="text-gray-400 mb-10 text-lg">Book a free strategy call. We'll map your fabric sourcing, custom print options, and US launch plan — at no cost.</p>
          <Link href="/us/contact" className="btn-gold text-lg px-10 py-4">Book Free Strategy Call</Link>
        </div>
      </section>
    </>
  );
}
