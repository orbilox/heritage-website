import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '0 to $100K Fashion Brand in 4 Months | Case Study | Heritage Apparels',
  description: 'How Heritage Apparels helped LA activewear founder Sarah Mitchell go from idea to $103,000 revenue in 4 months — with India manufacturing, Shopify, and Meta Ads.',
  keywords: ['fashion brand launch case study USA', 'D2C fashion brand success story', 'activewear brand launch USA', 'Heritage Apparels case study', 'fashion brand 0 to 100k'],
  alternates: { canonical: 'https://www.heritageapparels.com/us/case-studies/brand-launch-0-to-100k' },
};

const stats = [
  { value: '$103,000', label: 'Revenue in Month 4' },
  { value: '6.2x', label: 'ROAS on Meta Ads' },
  { value: '4 Months', label: 'Idea to $100K' },
  { value: '$8/piece', label: 'India Manufacturing Cost' },
];

const timeline = [
  { month: 'Month 1', revenue: '$3,200', note: 'Launch week. Viral Instagram reel drove first 47 orders.' },
  { month: 'Month 2', revenue: '$18,400', note: 'Meta Ads scaling. Amazon ranking improving. TikTok growth.' },
  { month: 'Month 3', revenue: '$41,000', note: 'TikTok organic viral. Repeat customers driving 28% of revenue.' },
  { month: 'Month 4', revenue: '$103,000', note: 'Full channel momentum. Amazon #12 in women\'s activewear.' },
];

export default function BrandLaunch0to100kPage() {
  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '0 to $100K Fashion Brand Launch in 4 Months',
    description: 'How Heritage Apparels helped LA activewear brand FlowForm go from idea to $103,000 in revenue in 4 months',
    author: { '@type': 'Organization', name: 'Heritage Apparels' },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />

      <section className="py-28 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/us/case-studies" className="inline-flex items-center gap-2 text-gold/70 hover:text-gold text-sm mb-8 transition-colors">← Back to Case Studies</Link>
          <p className="section-label mb-4">Case Study</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6 leading-tight">0 to <span className="gradient-text italic">$103,000</span> in 4 Months<br />Women&apos;s Activewear Brand, Los Angeles</h1>
          <div className="gold-divider mb-8" />
          <div className="flex flex-wrap gap-3">
            {['D2C Brand Launch', 'India Manufacturing', 'Shopify Store', 'Meta Ads', 'Amazon'].map((tag) => (<span key={tag} className="bg-gold/10 text-gold text-xs px-3 py-1 rounded-full border border-gold/20">{tag}</span>))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-charcoal border-b border-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (<div key={s.value}><div className="font-serif text-4xl font-bold gradient-text mb-1">{s.value}</div><div className="text-cream/70 text-sm">{s.label}</div></div>))}
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="font-serif text-3xl font-bold text-cream mb-6">The Challenge</h2>
            <p className="text-cream/70 leading-relaxed text-lg">Sarah Mitchell, a yoga instructor and fitness entrepreneur based in Los Angeles, had a clear vision for a premium women&apos;s activewear brand — pieces that were both performance-grade and Instagram-worthy. But she faced three hard realities: US manufacturing quotes came in at $22–$28 per piece (making retail pricing uncompetitive), she had no brand identity, no photography, and no idea how to launch on Amazon. Her initial supplier quotes would have required $40,000+ in capital just for a first production run.</p>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold text-cream mb-6">The Heritage Apparels Solution</h2>
            <div className="space-y-6">
              {[
                { week: 'Week 1–2: Brand Identity', detail: 'We created the brand name "FlowForm", designed a minimal but premium logo system, built a gold-and-ivory color palette, and developed packaging that communicated premium quality at a sustainable price point.' },
                { week: 'Week 2–3: India Manufacturing', detail: 'Our India factory produced premium moisture-wicking activewear sets at $8/piece — compared to Sarah\'s $22–$28 US quotes. We sourced OEKO-TEX certified fabric, produced 120-piece initial run (4 styles × 3 sizes × 10 pieces each), and coordinated US-compliant labelling.' },
                { week: 'Week 3–4: Photography & Store', detail: 'Shot 4 complete activewear sets with US fitness models in a Los Angeles studio. Built a custom Shopify store with Klaviyo email flows, Afterpay integration, and Meta Pixel from day one. Launched Amazon listing with Brand Registry pending.' },
                { week: 'Week 4–6: Marketing Launch', detail: 'Launched Meta Ads at $150/day across 3 creative concepts (lifestyle video, try-on video, before/after comparison). Pre-launch Instagram organic content (12 posts) built 840 followers before first sale. TikTok organic content began immediately after launch.' },
              ].map((item) => (
                <div key={item.week} className="bg-[#16213e] border border-gold/15 rounded-xl p-6">
                  <div className="text-gold font-semibold text-sm mb-2">{item.week}</div>
                  <p className="text-cream/70 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold text-cream mb-6">Revenue by Month</h2>
            <div className="space-y-4">
              {timeline.map((t) => (
                <div key={t.month} className="flex items-center gap-6 bg-[#16213e] border border-gold/10 rounded-xl p-5">
                  <div className="w-24 flex-shrink-0 text-gold font-semibold text-sm">{t.month}</div>
                  <div className="w-28 flex-shrink-0 font-serif text-xl font-bold gradient-text">{t.revenue}</div>
                  <div className="text-cream/60 text-sm">{t.note}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold text-cream mb-6">Key Metrics</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { label: 'Meta Ads ROAS', value: '6.2x' },
                { label: 'Amazon Ranking', value: '#12 women\'s activewear' },
                { label: 'Repeat Purchase Rate', value: '47%' },
                { label: 'Avg Order Value', value: '$84' },
                { label: 'Cost per Acquisition', value: '$13.40' },
                { label: 'Monthly saving vs US mfg', value: '$8,400' },
              ].map((m) => (
                <div key={m.label} className="bg-[#16213e] border border-gold/15 rounded-xl p-4 text-center">
                  <div className="gradient-text font-bold text-xl mb-1">{m.value}</div>
                  <div className="text-cream/50 text-xs">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#16213e] border border-gold/30 rounded-2xl p-8">
            <div className="text-4xl mb-4">&ldquo;</div>
            <p className="text-cream/80 text-lg leading-relaxed italic mb-6">Heritage Apparels didn&apos;t just help me launch a brand — they built me a real business. The India manufacturing alone saved me $17 per piece, which is why our margins are strong enough to scale. We hit $103K in month four. I couldn&apos;t have done this without them.</p>
            <div className="text-gold font-semibold">Sarah M.</div>
            <div className="text-cream/50 text-sm">Founder, FlowForm Activewear — Los Angeles, CA</div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#16213e]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">Ready to <span className="gradient-text italic">Write Your Story?</span></h2>
          <p className="text-cream/60 mb-8 text-lg">Every success story starts with a single conversation. Tell us about your brand idea.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/us/contact" className="btn-gold py-4 px-8">Start My Brand →</Link>
            <Link href="/us/case-studies" className="btn-outline py-4 px-8">More Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
