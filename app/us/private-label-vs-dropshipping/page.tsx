import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Private Label vs Dropshipping for Fashion Brands USA | Heritage Apparels',
  description:
    'Private label or dropshipping for your US fashion brand? Honest comparison of margins, brand control, scalability, and long-term value. Make the right choice for 2025.',
  keywords: [
    'private label vs dropshipping fashion USA',
    'private label clothing USA',
    'dropshipping fashion brand',
    'start fashion brand private label',
    'private label vs dropshipping margins',
    'fashion brand business model 2025',
  ],
  alternates: {
    canonical: 'https://www.heritageapparels.com/us/private-label-vs-dropshipping',
  },
  openGraph: {
    title: 'Private Label vs Dropshipping for Fashion Brands USA | Heritage Apparels',
    description:
      'Honest comparison of private label vs dropshipping margins, brand control, scalability, and long-term value for US fashion entrepreneurs.',
    type: 'website',
    locale: 'en_US',
  },
};

const comparisonRows = [
  { factor: 'Profit margins', privatLabel: '60–80%', dropshipping: '15–30%' },
  { factor: 'Brand control', privatLabel: '100%', dropshipping: 'None' },
  { factor: 'Upfront investment', privatLabel: '$3,000–$10,000', dropshipping: '$0–$500' },
  { factor: 'Quality control', privatLabel: 'Full control', dropshipping: 'No control' },
  { factor: 'Scalability', privatLabel: 'Unlimited', dropshipping: 'Limited' },
  { factor: 'Brand value / exit potential', privatLabel: 'High', dropshipping: 'Very low' },
  { factor: 'Speed to first sale', privatLabel: '6–8 weeks', dropshipping: '1–2 weeks' },
  { factor: 'Long-term viability', privatLabel: 'Very high', dropshipping: 'Declining' },
];

const dropshippingMakesSense = [
  {
    title: 'Validating a Niche Before Committing Capital',
    desc: 'If you are genuinely unsure whether a specific niche has demand, running a short dropshipping test to gauge customer interest is a legitimate strategy. Spend $500–$1,000 on ads, test 3–5 products, and see what converts before committing to private label inventory.',
  },
  {
    title: 'Zero Available Capital',
    desc: 'If you have no starting capital, dropshipping can get you into the game. But treat it as a stepping stone, not a destination. Every dollar you make dropshipping should go toward funding your first private label run as soon as possible.',
  },
  {
    title: 'Building Ad & Marketing Skills',
    desc: 'Dropshipping forces you to learn Meta Ads, Google Ads, and product marketing with real money on the line. The skills you build running a dropshipping store are directly transferable to a private label brand — making you a better brand builder when you switch.',
  },
];

const privateLabelIsRight = [
  {
    icon: '📈',
    title: 'You Are Building a Real Brand',
    desc: "If your goal is a recognizable brand with loyal customers and real exit value, private label is the only path. Dropshipping brands cannot be sold for meaningful multiples — private label brands with strong revenue can sell for 3–5x annual profit.",
  },
  {
    icon: '💰',
    title: 'You Want 60–80% Margins',
    desc: "Private label margins of 60–80% are the norm when you source from India at $6–12/piece and sell at $35–80 retail. Dropshipping margins of 15–30% leave almost no room for paid acquisition, returns, and growth reinvestment.",
  },
  {
    icon: '🎯',
    title: 'You Have a 6–12 Month Horizon',
    desc: "Private label is not overnight. Plan for 6–8 weeks to first sale, and 6–12 months to build real momentum. If you have that runway and commitment, private label is almost always the right choice over dropshipping.",
  },
  {
    icon: '🏆',
    title: 'You Want Amazon Brand Registry',
    desc: "Amazon Brand Registry, A+ Content, and Sponsored Brand Ads are all locked behind having a registered trademark on your own private label brand. Dropshippers cannot access these tools — and they are critical for competing on Amazon long-term.",
  },
];

const switchReasons = [
  'Dropshipping margins get squeezed every year as more sellers compete on the same products from the same suppliers.',
  'Ad costs rise while margins stay flat — making dropshipping math increasingly difficult to sustain profitably.',
  "Customers don't build loyalty to a brand they don't recognize — repeat purchase rates are near zero in most dropshipping models.",
  'Platform risk is extreme: one product ban, supplier issue, or algorithm change can kill revenue overnight.',
  'Private label creates a defensible moat — your product, your brand, your customer list.',
];

const faqs = [
  {
    q: 'Can I test with dropshipping and then switch to private label?',
    a: "Yes — and this is a common and sensible path. Use dropshipping to validate demand in your niche, learn your target customer, and build your marketing skills. Once you have confidence in a product and niche, transition to private label. The key is not staying in dropshipping indefinitely. Most successful private label founders started with dropshipping or a side hustle and reinvested into their first real brand.",
  },
  {
    q: 'What is the real margin difference between private label and dropshipping?',
    a: "On a $45 product sold on Shopify: dropshipping typically means a $28–35 supplier cost, leaving $10–17 gross margin before ads and platform fees. Private label from India at $8/piece leaves $37 gross margin on the same $45 sale — a 4x difference. Once you factor in Meta Ads CPCs, the private label brand is almost always profitable; the dropshipping model often barely breaks even or loses money after acquisition costs.",
  },
  {
    q: 'How much do I need to start private label from India?',
    a: "Heritage Apparels works with manufacturers who accept 50-piece minimums. At $6–12/piece, your first production run is $300–$600 in product cost. Add $500–$1,500 for shipping, import duty, and FBA prep, and you can realistically launch your first private label product for $1,000–$2,500 all-in. A full brand launch with 3–5 SKUs and a proper marketing budget is more like $10,000–$25,000.",
  },
  {
    q: 'Can I private label clothing from India?',
    a: "Absolutely — this is exactly what Heritage Apparels specializes in. We connect US brand founders with vetted Indian manufacturers, manage sampling and QC, handle US import, and can deliver FBA-ready inventory to Amazon. India is ideal for private label: low MOQs (50–100 pieces), strong English communication, GOTS-certified sustainable options, and import tariffs of 12–27% versus China's 25–145%.",
  },
];

export default function PrivateLabelVsDropshippingPage() {
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
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Business Model Comparison</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Private Label vs Dropshipping:
            <br />
            <span className="gradient-text italic">Which Is Right for Your Fashion Brand?</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-3xl mx-auto">
            An honest breakdown of margins, brand control, scalability, and long-term value — so you can choose the right model for where you are right now.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold">Start Your Private Label Brand →</Link>
            <Link href="/us/services" className="btn-outline">All US Services</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#1a1a2e] border-y border-gold/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '60–80%', label: 'Private Label Margins', sub: 'vs 15–30% dropshipping' },
              { value: '50 pcs', label: 'Minimum from India', sub: '$300–600 to start' },
              { value: '6–8 wks', label: 'Private Label Lead Time', sub: 'from design to first sale' },
              { value: '3–5x', label: 'Exit Multiple', sub: 'private label brand value' },
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
            <p className="section-label mb-4">The Full Comparison</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Private Label vs Dropshipping:
              <span className="gradient-text italic"> Every Factor That Matters</span>
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50 max-w-2xl mx-auto">No hype. No agenda. Just the numbers so you can make the right call.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gold/20">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gold/10 border-b border-gold/20">
                  <th className="px-6 py-4 text-left font-serif font-bold text-gold text-base">Factor</th>
                  <th className="px-6 py-4 text-center font-serif font-bold text-gold text-base">Private Label</th>
                  <th className="px-6 py-4 text-center font-serif font-bold text-cream/60 text-base">Dropshipping</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.factor} className={`border-b border-gold/10 ${i % 2 === 0 ? 'bg-[#16213e]/60' : 'bg-[#1a1a2e]'}`}>
                    <td className="px-6 py-4 font-medium text-cream/80">{row.factor}</td>
                    <td className="px-6 py-4 text-center text-gold font-semibold">{row.privatLabel}</td>
                    <td className="px-6 py-4 text-center text-cream/50">{row.dropshipping}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When dropshipping makes sense */}
      <section className="py-20 bg-[#16213e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Being Honest About Dropshipping</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              When Dropshipping
              <span className="gradient-text italic"> Actually Makes Sense</span>
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50 max-w-2xl mx-auto">
              We are a private label agency — but we will be honest. There are legitimate reasons to start with dropshipping.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dropshippingMakesSense.map((item) => (
              <div key={item.title} className="glass-card p-6">
                <h3 className="font-serif text-lg font-bold text-cream mb-3">{item.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When private label is right */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">The Right Move</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              When Private Label Is
              <span className="gradient-text italic"> Clearly the Answer</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {privateLabelIsRight.map((item) => (
              <div key={item.title} className="glass-card p-6 flex gap-4 items-start">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-cream mb-2">{item.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why dropshippers switch */}
      <section className="py-20 bg-[#16213e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <p className="section-label mb-4">The Pattern We See</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Why Most Dropshippers Eventually
              <span className="gradient-text italic"> Switch to Private Label</span>
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50 max-w-2xl mx-auto">
              We have worked with hundreds of US fashion entrepreneurs. The story is almost always the same.
            </p>
          </div>
          <div className="glass-card p-8">
            <ul className="space-y-4">
              {switchReasons.map((reason) => (
                <li key={reason} className="flex items-start gap-4 text-cream/70">
                  <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0 mt-2" />
                  <span className="text-sm leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-gold/10">
              <p className="text-cream/50 text-sm italic">
                "We started dropshipping activewear in 2022. Margins got crushed by 2023. We switched to India private label in Q1 2024 — first month at 68% margin." — Heritage Apparels client, Austin TX
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* India Private Label Minimum */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Our India Private Label Minimum</p>
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">
              Start Private Label for
              <span className="gradient-text italic"> $300–600</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="font-serif text-4xl font-bold gradient-text mb-2">50 pcs</div>
                <div className="text-cream text-sm font-medium">Minimum Order</div>
                <div className="text-cream/40 text-xs">per style from India</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl font-bold gradient-text mb-2">$6–12</div>
                <div className="text-cream text-sm font-medium">Cost per Piece</div>
                <div className="text-cream/40 text-xs">depending on product type</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl font-bold gradient-text mb-2">$300–600</div>
                <div className="text-cream text-sm font-medium">First Production Run</div>
                <div className="text-cream/40 text-xs">for 50 units of one style</div>
              </div>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed mb-6 text-center">
              Add $500–$1,500 for shipping, import duty (12–27%), and FBA prep — and you can have your first private label product on Amazon for $1,000–$2,500 total investment. A proper multi-SKU brand launch is $10,000–$25,000.
            </p>
            <div className="text-center">
              <Link href="/us/contact" className="btn-gold inline-block px-8 py-4">Get a Private Label Quote from India →</Link>
            </div>
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
            Ready to Build a Real <span className="gradient-text italic">Fashion Brand?</span>
          </h2>
          <p className="text-cream/60 mb-8 leading-relaxed">
            Heritage Apparels helps US entrepreneurs launch private label fashion brands from India — low MOQ, quality manufacturing, and full sourcing support from idea to Amazon.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/us/contact" className="btn-gold px-8 py-4">Start Your Private Label Brand</Link>
            <Link href="/us/how-to-launch-fashion-brand-usa" className="btn-outline">Full Brand Launch Guide →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
