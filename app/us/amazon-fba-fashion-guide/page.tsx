import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Amazon FBA Fashion Brand Guide USA 2025 | Heritage Apparels',
  description: 'Complete guide to selling fashion on Amazon FBA in the USA. Brand Registry, listing optimisation, PPC, A+ Content, reviews, and scaling your fashion brand on Amazon in 2025.',
  keywords: ['Amazon FBA fashion brand guide', 'sell fashion on Amazon USA', 'Amazon clothing brand guide 2025', 'Amazon fashion brand agency USA', 'Amazon FBA clothing brand'],
  alternates: { canonical: 'https://www.heritageapparels.com/us/amazon-fba-fashion-guide' },
};

const sections = [
  {
    title: 'Why Amazon for Fashion in 2025',
    icon: '🛒',
    content: '60% of US online shoppers start their product search on Amazon — before Google. The Amazon fashion category generates over $40 billion annually in the US. Fashion is the #1 category on Amazon by number of SKUs. Even if you have a Shopify store, Amazon is where your US customers are searching. The brands that dominate Amazon fashion are not the biggest — they\'re the ones with the best listings, best PPC, and best reviews.',
  },
  {
    title: 'Brand Registry: Why You Must Have It',
    icon: '™️',
    content: 'Amazon Brand Registry unlocks A+ Content, Sponsored Brand Ads, Brand Store, brand analytics, and counterfeit protection. Without Brand Registry, you\'re running at a significant disadvantage. Requirements: active trademark registration in the US (USPTO). Filing takes 8–12 months — start immediately. Heritage Apparels clients file their trademark on day 1 of our engagement. Brand Registry approval typically takes 1–2 weeks after trademark approval.',
  },
  {
    title: 'FBA vs FBM for Fashion Brands',
    icon: '📦',
    content: 'FBA (Fulfillment by Amazon): You send inventory to Amazon\'s warehouse. Amazon ships orders, handles returns. Prime badge = higher conversion. Better Buy Box win rate. Costs: $3.22–$6.10 per unit fulfilment fee + storage. FBM (Fulfillment by Merchant): You ship orders yourself. No fulfilment fees but you pay shipping. Lower conversion without Prime badge. For fashion brands, FBA wins for most categories — the Prime badge typically increases conversion rate by 25–30%. Only use FBM for very slow-moving SKUs or oversized items.',
  },
  {
    title: 'Listing Optimisation for Fashion',
    icon: '📝',
    content: 'Title: Lead with primary keyword, include size range, material, and brand. Example: "Heritage Floral Women\'s Midi Dress | 100% Cotton | Available XS–3XL | Casual Summer Beach Dress". Bullets: 5 bullets covering size/fit, material & care, occasions, features, and brand story. Backend keywords: Use all 250 bytes. Include misspellings, British spellings, and long-tail variations. Description: Tell the brand story and fabric story — human voice converts better than robot copy.',
  },
  {
    title: 'Amazon Images for Fashion: The Exact Requirements',
    icon: '📸',
    content: 'Main image: Pure white background (#FFFFFF), garment must fill 85% of frame, no props, no text, no mannequin (model preferred). Secondary images (6 recommended): Image 2: Back of garment on model. Image 3: Detail/texture close-up. Image 4: Size chart/measurements. Image 5: Lifestyle image. Image 6: Fabric composition + care label. Image 7: A+ Content infographic. Fashion listings with 7+ images consistently outperform those with fewer images in click-through and conversion rate.',
  },
  {
    title: 'Amazon PPC for Fashion: 3 Campaign Types',
    icon: '📈',
    content: 'Sponsored Products: The workhorse. Target keywords buyers search. Run broad match to discover, then move winners to exact match. Start with $30–50/day. Sponsored Brands: Shows your brand logo + 3 products at the top of search results. Requires Brand Registry. Strong for brand awareness and high-intent buyer capture. Sponsored Display: Retargets shoppers who viewed your product or competitors. Lower volume but high intent. Budget: Allocate 60% Sponsored Products / 25% Sponsored Brands / 15% Sponsored Display.',
  },
  {
    title: 'Getting Reviews: The Right Way',
    icon: '⭐',
    content: '4+ star average is required for meaningful organic ranking. Methods: (1) Amazon\'s "Request a Review" button — click it for every order. (2) Amazon Vine program — send 30 free units to top Amazon reviewers. (3) Insert cards in packaging (must comply with Amazon ToS — cannot offer incentives). (4) Email follow-up via buyer-seller messaging (one message per order max). Target: 25+ reviews in first 30 days. This requires a coordinated launch strategy.',
  },
  {
    title: 'Amazon Fashion Mistakes to Avoid',
    icon: '❌',
    content: '',
    mistakes: ['Using the same photos for Amazon as your Shopify store — Amazon has specific image requirements', 'Launching without Brand Registry — you\'re giving up A+ Content and Sponsored Brands', 'Setting PPC campaigns to exact match only — broad match finds keywords you\'d never think of', 'Ignoring the "Frequently Returned Items" badge — high return rate kills rankings', 'Not testing different main images — A/B test your main image using Amazon Manage Your Experiments', 'Launching in Q4 with zero reviews — the algorithm needs data to rank you'],
  },
];

const categories = [
  { cat: 'Women\'s Activewear', note: 'Fastest growing, highest repeat purchase' },
  { cat: 'Men\'s Basics & T-shirts', note: 'High volume, price-competitive' },
  { cat: 'Children\'s Clothing', note: 'CPSC compliance required, loyal buyers' },
  { cat: 'Swimwear & Beach', note: 'Seasonal but extremely high ROAS' },
  { cat: 'Sustainable Fashion', note: 'Climate Pledge Friendly badge available' },
  { cat: 'Plus Size Fashion', note: 'Underserved, less competition' },
];

export default function AmazonFBAFashionGuidePage() {
  return (
    <>
      <section className="py-28 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Complete Guide</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6 leading-tight">Amazon FBA Fashion Brand Guide <span className="gradient-text italic">USA 2025</span></h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl max-w-3xl mx-auto">Everything you need to launch and scale your fashion brand on Amazon — from Brand Registry and listing optimisation to PPC and reviews. Updated for 2025.</p>
          <div className="mt-8 flex gap-6 justify-center text-sm text-cream/50">
            <span>📖 12 min read</span><span>🗓 Updated 2025</span><span>✅ 200+ Amazon brands managed</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {sections.map((s) => (
            <div key={s.title} id={s.title.toLowerCase().replace(/\s+/g, '-')}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{s.icon}</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream">{s.title}</h2>
              </div>
              {s.content && <p className="text-cream/70 leading-relaxed text-lg">{s.content}</p>}
              {s.mistakes && (
                <ul className="space-y-3 mt-4">
                  {s.mistakes.map((m) => (<li key={m} className="flex items-start gap-3 bg-[#16213e] border border-red-900/20 rounded-xl p-4"><span className="text-red-400 flex-shrink-0">✗</span><span className="text-cream/70 text-sm leading-relaxed">{m}</span></li>))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#16213e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-cream mb-10 text-center">Fashion Categories That Sell Best on Amazon <span className="gradient-text italic">in 2025</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c) => (<div key={c.cat} className="bg-charcoal border border-gold/15 rounded-xl p-6"><div className="font-semibold text-cream mb-2">{c.cat}</div><div className="text-cream/50 text-sm">{c.note}</div></div>))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">Want Our Team to Manage <span className="gradient-text italic">Your Amazon Brand?</span></h2>
          <p className="text-cream/60 mb-8 text-lg">Heritage Apparels manages Amazon fashion brands from Brand Registry to scaling — average client achieves 4–8x ROAS.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/us/contact" className="btn-gold py-4 px-8">Get Free Amazon Audit →</Link>
            <Link href="/us/amazon-fashion-brand-agency" className="btn-outline py-4 px-8">Our Amazon Service</Link>
          </div>
        </div>
      </section>
    </>
  );
}
