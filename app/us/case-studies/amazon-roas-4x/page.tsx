import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '481% ROAS in 90 Days on Amazon | Fashion Brand Case Study | Heritage Apparels',
  description: 'How Heritage Apparels achieved 481% ROAS for UrbanBlock streetwear on Amazon in 90 days — full Amazon PPC, Brand Registry, A+ Content, and listing optimisation case study.',
  keywords: ['Amazon fashion brand ROAS case study', 'Amazon streetwear brand USA', 'Amazon PPC fashion 481% ROAS', 'Heritage Apparels Amazon case study'],
  alternates: { canonical: 'https://www.heritageapparels.com/us/case-studies/amazon-roas-4x' },
};

const monthlyBreakdown = [
  { month: 'Month 1', revenue: '$9,200', adSpend: '$8,000', roas: '1.15x', note: 'Building phase — ranking improving, keywords finding traction' },
  { month: 'Month 2', revenue: '$16,400', adSpend: '$1,200', roas: '13.7x', note: 'Organic ranking kicking in — most revenue now organic' },
  { month: 'Month 3', revenue: '$22,500', adSpend: '$800', roas: '28x', note: 'Primarily organic. PPC now used for new keyword expansion only' },
  { month: 'Total', revenue: '$48,100', adSpend: '$10,000', roas: '481%', note: '90-day combined ROAS' },
];

export default function AmazonROAS4xPage() {
  return (
    <>
      <section className="py-28 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/us/case-studies" className="inline-flex items-center gap-2 text-gold/70 hover:text-gold text-sm mb-8 transition-colors">← Back to Case Studies</Link>
          <p className="section-label mb-4">Case Study</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6 leading-tight"><span className="gradient-text italic">481% ROAS</span> in 90 Days on Amazon<br />Men&apos;s Streetwear Brand, New York</h1>
          <div className="gold-divider mb-8" />
          <div className="flex flex-wrap gap-3">
            {['Amazon PPC', 'Brand Registry', 'A+ Content', 'Sponsored Products', 'Listing Optimisation'].map((tag) => (<span key={tag} className="bg-gold/10 text-gold text-xs px-3 py-1 rounded-full border border-gold/20">{tag}</span>))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-charcoal border-b border-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[{ v: '$48,100', l: 'Total Revenue' }, { v: '$10,000', l: 'Total Ad Spend' }, { v: '481%', l: 'Total ROAS' }, { v: '90 Days', l: 'Campaign Duration' }].map((s) => (<div key={s.v}><div className="font-serif text-4xl font-bold gradient-text mb-1">{s.v}</div><div className="text-cream/70 text-sm">{s.l}</div></div>))}
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="font-serif text-3xl font-bold text-cream mb-6">The Challenge</h2>
            <p className="text-cream/70 leading-relaxed text-lg">James Rivera had been selling his UrbanBlock streetwear brand on Shopify for 18 months, consistently doing $8,000–$12,000/month. Amazon felt &ldquo;too expensive and competitive.&rdquo; He had tried Amazon once with another agency — spent $3,000 in ads, made $2,400 in revenue, and quit. When he came to Heritage Apparels, he was sceptical but desperate to unlock the Amazon channel. His listing had: a generic title, 3 bullet points, no A+ Content, no Brand Registry, and photos that were clearly taken on a phone.</p>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold text-cream mb-6">The Heritage Apparels Amazon Strategy</h2>
            <div className="space-y-4">
              {[
                { title: 'Week 1: Complete Account Audit + Brand Registry', detail: 'Full Amazon account audit. Filed for Brand Registry (James had a pending trademark we fast-tracked through Amazon\'s appeal process). Competitor keyword research using Helium 10 — identified 847 relevant keywords with purchase intent. Identified 3 core competitor ASINs to target.' },
                { title: 'Week 2: Listing Rewrite + Image Refresh', detail: 'Rewrote all 6 product titles with primary keywords in first 80 characters. Rewrote 5-bullet structure with benefit-focused copy. Created A+ Content (Brand Story + enhanced product module). Shot new lifestyle imagery with urban male models, added size chart infographic. Uploaded 7 images per listing.' },
                { title: 'Week 3–4: PPC Campaign Launch', detail: 'Launched 5 ad groups: (1) Broad brand keywords, (2) Competitor targeting, (3) Category keywords, (4) Automatic campaign for keyword discovery, (5) Sponsored Brands headline ad. Total initial budget: $300/day across all campaigns. Bid strategy: Dynamic bids — down only.' },
                { title: 'Month 2: Optimisation + Organic Ranking', detail: 'Paused underperforming keywords (ACoS > 40%). Scaled bids on winners. Added negative keywords (300+ irrelevant search terms). Organic ranking improved — 12 keywords reached page 1. Sponsored Brands video ad launched. PPC budget reduced to $40/day as organics took over.' },
                { title: 'Month 3: Scale on Autopilot', detail: 'Primarily organic by month 3. Brand Store launched with 4 product collections. Sponsored Display retargeting added ($800 spend, $8,200 attributed revenue from retargeting). Review count grew from 3 to 67 using Amazon\'s Request a Review button and Vine Program.' },
              ].map((item) => (
                <div key={item.title} className="bg-[#16213e] border border-gold/15 rounded-xl p-6">
                  <div className="text-gold font-semibold text-sm mb-2">{item.title}</div>
                  <p className="text-cream/70 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold text-cream mb-6">Month-by-Month Results</h2>
            <div className="bg-[#16213e] rounded-2xl border border-gold/20 overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-gold/10 border-b border-gold/20 px-6 py-3 text-xs font-semibold text-gold">
                <span>Month</span><span>Revenue</span><span>Ad Spend</span><span>ROAS</span>
              </div>
              {monthlyBreakdown.map((row) => (
                <div key={row.month} className={`grid grid-cols-4 gap-0 border-b border-gold/10 px-6 py-4 last:border-0 last:bg-gold/5 ${row.month === 'Total' ? 'bg-gold/5' : ''}`}>
                  <span className="text-cream/80 text-sm font-medium">{row.month}</span>
                  <span className={`text-sm font-semibold ${row.month === 'Total' ? 'gradient-text' : 'text-gold'}`}>{row.revenue}</span>
                  <span className="text-cream/60 text-sm">{row.adSpend}</span>
                  <span className="text-cream/80 text-sm">{row.roas}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold text-cream mb-6">3 Things That Made the Difference</h2>
            <div className="space-y-4">
              {[
                { num: '1', title: 'Brand Registry Unlocked Everything', detail: 'A+ Content alone increased conversion rate from 8.2% to 14.7% — that\'s nearly double. Without Brand Registry, this wasn\'t possible.' },
                { num: '2', title: 'The Month 1 Learning Investment', detail: 'The first month\'s $8,000 spend was intentionally high — buying data. We discovered 34 high-intent keywords that now drive organic revenue without any ad spend.' },
                { num: '3', title: 'Organic Ranking as the Goal, Not PPC', detail: 'Most Amazon agencies optimise for PPC. We optimise for organic rank. PPC is the tool to earn ranking; organic is the actual business model.' },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 bg-[#16213e] border border-gold/15 rounded-xl p-6">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold flex-shrink-0">{item.num}</div>
                  <div><div className="text-cream font-semibold mb-1">{item.title}</div><p className="text-cream/60 text-sm leading-relaxed">{item.detail}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#16213e] border border-gold/30 rounded-2xl p-8">
            <div className="text-4xl mb-4">&ldquo;</div>
            <p className="text-cream/80 text-lg leading-relaxed italic mb-6">I almost gave up on Amazon after wasting $3,000 with another agency. Heritage Apparels turned it around in 30 days — and by month 3, Amazon was running itself. I now make more on Amazon than Shopify with a fraction of the effort.</p>
            <div className="text-gold font-semibold">James R.</div>
            <div className="text-cream/50 text-sm">Founder, UrbanBlock Streetwear — New York, NY</div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#16213e]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">Want Results Like <span className="gradient-text italic">This on Amazon?</span></h2>
          <p className="text-cream/60 mb-8 text-lg">Get a free Amazon account audit — we&apos;ll show you exactly what&apos;s holding your brand back.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/us/contact" className="btn-gold py-4 px-8">Get Free Amazon Audit →</Link>
            <Link href="/us/amazon-fashion-brand-agency" className="btn-outline py-4 px-8">Our Amazon Service</Link>
          </div>
        </div>
      </section>
    </>
  );
}
