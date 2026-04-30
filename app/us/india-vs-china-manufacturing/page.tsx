import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'India vs China Clothing Manufacturing for US Brands | Heritage Apparels',
  description:
    'Comparing India vs China for clothing manufacturing? Read our honest breakdown of cost, quality, MOQ, lead times, tariffs, and compliance for US fashion brands.',
  keywords: [
    'India vs China clothing manufacturing USA',
    'India vs China manufacturing comparison',
    'clothing manufacturing India USA brands',
    'China tariffs Section 301 fashion',
    'India manufacturing low MOQ',
    'sourcing from India vs China',
  ],
  alternates: {
    canonical: 'https://www.heritageapparels.com/us/india-vs-china-manufacturing',
  },
  openGraph: {
    title: 'India vs China Clothing Manufacturing for US Brands | Heritage Apparels',
    description:
      'Honest breakdown of India vs China for US fashion brands — cost, MOQ, tariffs, quality, and lead times compared.',
    type: 'website',
    locale: 'en_US',
  },
};

const comparisonRows = [
  { factor: 'Cost per piece', india: '$6–12', china: '$4–9' },
  { factor: 'Minimum Order Quantity', india: '50–100 pieces', china: '300–1,000 pieces' },
  { factor: 'Lead time', india: '21–30 days', china: '45–90 days' },
  { factor: 'US import tariffs', india: '12–27%', china: '25–145% (Section 301)' },
  { factor: 'English communication', india: 'Excellent', china: 'Limited' },
  { factor: 'IP protection', india: 'Better', china: 'Higher risk' },
  { factor: 'Sustainable options', india: 'Growing — GOTS certified', china: 'Limited' },
  { factor: 'Quality consistency', india: 'High', china: 'Variable' },
];

const indiaWins = [
  {
    num: '01',
    title: 'Lower Tariffs Post-Trade War',
    desc: "India faces 12–27% US import tariffs. China faces 25–145% under Section 301. On a $10 garment, that is a $1.20–$2.70 duty vs $2.50–$14.50. For brands doing serious volume, India's tariff advantage is a meaningful margin difference — not a minor footnote.",
  },
  {
    num: '02',
    title: 'Better English Communication',
    desc: 'Indian manufacturers communicate in English natively. You can send a tech pack by email and get a costed quote back the same day. In China, communication often goes through translators or middlemen, introducing errors and delays that compound across a full production cycle.',
  },
  {
    num: '03',
    title: 'Lower MOQ — Ideal for Startups',
    desc: 'Indian manufacturers routinely accept 50–100 piece minimums. Chinese factories typically require 300–1,000 pieces per colorway. For a brand launching with 3–5 SKUs, that is the difference between a $5,000 pilot run and a $50,000 commitment you cannot afford to get wrong.',
  },
  {
    num: '04',
    title: 'Growing Sustainable Fabric Options',
    desc: "India is the world's largest producer of organic cotton and is rapidly expanding GOTS-certified manufacturing. Sustainable sourcing is no longer a premium add-on in India — it is becoming standard. China lags significantly in certified sustainable textile production.",
  },
  {
    num: '05',
    title: 'Artisan & Hand-Crafted Capabilities',
    desc: 'India has centuries of hand-craft textile heritage — block printing, hand embroidery, khadi weaving, and artisan dyeing techniques that simply cannot be replicated at scale in China. For brands building a story around craft, authenticity, or heritage, India is the only logical source.',
  },
];

const chinaScenarios = [
  {
    title: 'Ultra-High Volume Commodity Items',
    desc: 'If you are ordering 10,000+ units of a basic, commodity SKU (plain T-shirts, basic socks, standard activewear) and your margin math works even after 145% tariffs, China can still win on raw unit cost. But very few startup brands are in this position.',
  },
  {
    title: 'Highly Automated Technical Garments',
    desc: 'For complex technical products — performance activewear with multi-component construction, highly engineered sports gear — China has more automated factories with specialized machinery that India has not yet fully replicated at competitive pricing.',
  },
  {
    title: 'You Already Have a Verified Supply Chain',
    desc: 'If you have years of trust built with a specific Chinese factory, have solved QC, and your product margin absorbs tariffs, switching purely for switching sake can introduce new risk. But you should still be evaluating India as a parallel option or contingency.',
  },
];

const faqs = [
  {
    q: 'What are the current US tariffs on Chinese clothing imports?',
    a: 'Under Section 301, China faces 25–145% tariffs on most clothing categories exported to the USA as of 2025. The exact rate depends on the HTS code. Most apparel falls in the 25–35% range, but escalation lists have pushed some categories higher. India, by contrast, faces 12–27% Most Favored Nation (MFN) tariffs — significantly lower.',
  },
  {
    q: 'What is a typical MOQ when manufacturing in India?',
    a: "Most Indian manufacturers accept orders of 50–100 pieces per style. Heritage Apparels works with factories that will start at 50 pieces, making India accessible to brand founders who are not yet ready for large capital commitments. China factories typically require 300–1,000 pieces minimum.",
  },
  {
    q: 'Is the quality from India as good as China?',
    a: "Yes — for most fashion categories, Indian manufacturing quality is equivalent to or better than China, particularly in wovens, knitwear, artisan textiles, and sustainable fabrics. India's strength is hand-finishing and consistency at small-to-mid runs. China's advantage is in high-volume automated production, where quality can be very consistent but also very difficult to QC remotely.",
  },
  {
    q: 'Can I switch my manufacturing from China to India?',
    a: "Yes. The transition typically takes 60–90 days to find a manufacturer, develop samples, approve them, and complete your first production run. Heritage Apparels manages the full transition — from tech pack review to FBA-ready delivery — so you are not starting from scratch. Most brands see lower all-in costs after the switch even at slightly higher unit prices, due to tariff savings.",
  },
  {
    q: 'How long does shipping from India to the USA take?',
    a: 'Sea freight from India to the US East Coast takes 21–28 days. To the West Coast, 18–22 days. Air freight takes 3–5 days but costs significantly more per kg. Most brands use sea freight for replenishment and air freight for launch quantities or urgent restocks. Total lead time from production to FBA check-in is typically 45–60 days by sea.',
  },
];

export default function IndiaVsChinaPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-24 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Manufacturing Comparison 2025</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            India vs China: Which is Better for Your
            <br />
            <span className="gradient-text italic">US Fashion Brand?</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-3xl mx-auto">
            An honest, data-driven comparison of cost, MOQ, tariffs, quality, and communication — so you can make the right sourcing decision for your US brand in 2025.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold">Talk to Our India Sourcing Team →</Link>
            <Link href="/us/services" className="btn-outline">All US Services</Link>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="py-12 bg-[#1a1a2e] border-y border-gold/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '12–27%', label: 'India US Tariff', sub: 'vs China 25–145%' },
              { value: '50 pcs', label: 'India MOQ', sub: 'vs China 300–1,000' },
              { value: '21–30 days', label: 'India Lead Time', sub: 'vs China 45–90 days' },
              { value: 'GOTS', label: 'Sustainable Certified', sub: 'India organic cotton' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-3xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-cream text-sm font-medium">{s.label}</div>
                <div className="text-cream/40 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Side-by-Side Comparison</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              India vs China: <span className="gradient-text italic">Full Breakdown</span>
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50 max-w-2xl mx-auto">Every factor that matters for a US fashion brand — compared honestly. No marketing spin.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gold/20">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gold/10 border-b border-gold/20">
                  <th className="px-6 py-4 text-left font-serif font-bold text-gold text-base">Factor</th>
                  <th className="px-6 py-4 text-center font-serif font-bold text-gold text-base">India</th>
                  <th className="px-6 py-4 text-center font-serif font-bold text-cream/60 text-base">China</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.factor} className={`border-b border-gold/10 ${i % 2 === 0 ? 'bg-[#16213e]/60' : 'bg-[#1a1a2e]'}`}>
                    <td className="px-6 py-4 font-medium text-cream/80">{row.factor}</td>
                    <td className="px-6 py-4 text-center text-gold font-semibold">{row.india}</td>
                    <td className="px-6 py-4 text-center text-cream/50">{row.china}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-cream/30 text-xs text-center mt-4">Data reflects 2025 market conditions. Tariffs subject to change. Contact us for a current quote.</p>
        </div>
      </section>

      {/* 5 reasons India wins */}
      <section className="py-20 bg-[#16213e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Why India Wins</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              5 Reasons India is the Right Choice for
              <span className="gradient-text italic"> US Brands in 2025</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="space-y-6">
            {indiaWins.map((item) => (
              <div key={item.num} className="glass-card p-8 flex gap-6 items-start">
                <div className="font-serif text-4xl font-bold gradient-text opacity-60 flex-shrink-0 w-12">{item.num}</div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-cream mb-3">{item.title}</h3>
                  <p className="text-cream/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 301 Tariffs Explained */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Tariff Reality Check</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Section 301 Tariffs: What They
              <span className="gradient-text italic"> Actually Cost You</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="glass-card p-8">
            <p className="text-cream/70 leading-relaxed mb-6">
              Section 301 tariffs were introduced in 2018 as part of the US-China trade war and remain in effect in 2025. They add 25–145% to the declared customs value of most Chinese apparel and textile imports — on top of the existing MFN tariff rates.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-5">
                <h3 className="font-serif font-bold text-cream mb-2">China Example</h3>
                <p className="text-cream/60 text-sm">$10 garment at 35% Section 301 = <span className="text-red-400 font-bold">$3.50 duty</span> per piece. At 100% tariff on some categories = <span className="text-red-400 font-bold">$10.00 duty</span> — you double the cost.</p>
              </div>
              <div className="bg-green-900/20 border border-green-500/20 rounded-lg p-5">
                <h3 className="font-serif font-bold text-cream mb-2">India Example</h3>
                <p className="text-cream/60 text-sm">$10 garment at 12–27% MFN = <span className="text-gold font-bold">$1.20–$2.70 duty</span> per piece. India is not subject to Section 301 — only standard MFN rates apply.</p>
              </div>
            </div>
            <p className="text-cream/50 text-sm">
              The practical result: even if an Indian garment costs $2–3 more per unit to produce, the tariff savings on import often make India cheaper all-in. For brands doing 500+ units per month, this is tens of thousands of dollars annually.
            </p>
          </div>
        </div>
      </section>

      {/* When China still makes sense */}
      <section className="py-20 bg-[#16213e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Being Honest</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              3 Scenarios Where China
              <span className="gradient-text italic"> Might Still Make Sense</span>
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50 max-w-2xl mx-auto">
              We believe India is the better choice for most US brands in 2025 — but we will be honest about when it is not.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chinaScenarios.map((item) => (
              <div key={item.title} className="glass-card p-6">
                <h3 className="font-serif text-lg font-bold text-cream mb-3">{item.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 glass-card p-6 text-center">
            <p className="text-cream/70 text-sm">
              Even in these scenarios, we recommend sourcing a portion from India as a tariff hedge and supply chain diversification strategy. Most brands should not be 100% dependent on any single country.
            </p>
          </div>
        </div>
      </section>

      {/* CTA — Our Services */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Our India Manufacturing Services</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              We Handle the Entire India
              <span className="gradient-text italic"> Sourcing Process</span>
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50 max-w-2xl mx-auto">
              From tech pack to FBA-ready delivery — Heritage Apparels manages every step so you never have to navigate Indian manufacturing alone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              'Factory matching based on your product and MOQ',
              'Tech pack development and specification review',
              'Sample development and revision cycles',
              'Price negotiation and payment terms',
              'In-line quality control during production',
              'US import documentation and customs support',
              'FBA prep or US warehouse delivery',
              'Ongoing reorder management',
            ].map((item) => (
              <div key={item} className="glass-card p-4 flex items-center gap-3">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-cream/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/us/contact" className="btn-gold inline-block px-8 py-4">Start Your India Sourcing Conversation →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Frequently Asked <span className="gradient-text italic">Questions</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card p-6">
                <h3 className="font-semibold text-cream mb-3 leading-snug">{faq.q}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#1a1a2e] border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">
            Ready to Source from <span className="gradient-text italic">India?</span>
          </h2>
          <p className="text-cream/60 mb-8 leading-relaxed">
            Get a free sourcing consultation — we will review your product, estimate costs, and tell you honestly whether India is the right move for your brand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/us/contact" className="btn-gold px-8 py-4">Book a Free Sourcing Consultation</Link>
            <Link href="/us/how-to-source-clothing-from-india" className="btn-outline">How to Source from India →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
