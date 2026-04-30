import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Client Reviews & Testimonials | US Fashion Brands | Heritage Apparels',
  description: 'What US fashion brand founders say about Heritage Apparels. Reviews from 500+ brands we\'ve launched and scaled — from India sourcing to Amazon, Shopify & performance marketing.',
  keywords: ['Heritage Apparels reviews', 'fashion brand agency testimonials USA', 'Heritage Apparels client reviews', 'fashion brand agency results USA'],
  alternates: { canonical: 'https://www.heritageapparels.com/us/testimonials' },
};

const testimonials = [
  { name: 'Sarah M.', brand: 'FlowForm Activewear', location: 'Los Angeles, CA', service: 'D2C Brand Launch + India Manufacturing', stars: 5, quote: 'Heritage Apparels didn\'t just help me launch a brand — they built me a real business. The India manufacturing alone saved me $17 per piece. We hit $103K in month four. I couldn\'t have done this without them.' },
  { name: 'James R.', brand: 'UrbanBlock Streetwear', location: 'New York, NY', service: 'Amazon Brand Management', stars: 5, quote: 'I wasted $3,000 with another Amazon agency before finding Heritage. They turned our account around in 30 days — 481% ROAS in the first 90 days. They actually know Amazon fashion.' },
  { name: 'Emma K.', brand: 'PureThread Co.', location: 'Austin, TX', service: 'Sustainable Fashion Sourcing', stars: 5, quote: 'Finding GOTS-certified manufacturing in India felt impossible until Heritage Apparels. They found us a factory, handled samples, QC, and US customs. Completely hands-off for us.' },
  { name: 'David L.', brand: 'KidsBright', location: 'Chicago, IL', service: 'Kidswear Brand Launch', stars: 5, quote: 'CPSC compliance was our biggest fear. Heritage walked us through every requirement, coordinated testing, and got us live on Amazon Kids in 6 weeks. Revenue hit $45K in month 2.' },
  { name: 'Priya S.', brand: 'GoldenThread Luxury', location: 'San Francisco, CA', service: 'Luxury Brand Strategy + Manufacturing', stars: 5, quote: 'The level of craftsmanship they sourced from their India partners is genuinely luxury. Our pieces are hand-embroidered, perfectly finished, and our customers keep asking where we manufacture. The answer is always India.' },
  { name: 'Mike T.', brand: 'SwiftGear Athletics', location: 'Miami, FL', service: 'TikTok Shop + India Sourcing', stars: 5, quote: 'TikTok Shop was intimidating until Heritage set everything up. They connected us with creators, built our shop, and the first viral video drove $22K in 48 hours. Now TikTok is our #1 channel.' },
  { name: 'Rachel B.', brand: 'BloomDress', location: 'Seattle, WA', service: 'Shopify Store + Meta Ads', stars: 5, quote: 'Heritage built our Shopify store in 3 weeks and launched our Meta Ads campaign immediately after. We got our first 50 orders before we even had inventory in Amazon. The store converts at 4.1%.' },
  { name: 'Carlos M.', brand: 'StreetEdge Brand', location: 'Dallas, TX', service: 'Private Label Manufacturing', stars: 5, quote: 'I was paying $24/piece from a domestic supplier. Heritage switched us to India manufacturing at $9/piece — same quality, CPSC compliant, and delivered to our Amazon FBA warehouse. Saving $7,500/month.' },
  { name: 'Jennifer W.', brand: 'NatureFiber', location: 'Portland, OR', service: 'Sustainable Brand Launch', stars: 5, quote: 'Heritage helped us build an authentic sustainability story backed by real certifications — GOTS, OEKO-TEX. Our brand story resonates with US eco-consumers and our return rate is under 8%.' },
  { name: 'Alex P.', brand: 'SprintWear', location: 'Boston, MA', service: 'Activewear D2C Launch', stars: 5, quote: 'From concept to $85K in revenue in 5 months. Heritage handled manufacturing, photography, Shopify, and ads. I\'m a solo founder and they felt like a full team working for my brand.' },
  { name: 'Lisa K.', brand: 'LittleStars Kids', location: 'Houston, TX', service: 'Kidswear Amazon Launch', stars: 5, quote: 'We reached #1 bestseller in kids\' pajamas within 45 days. Heritage managed the entire Amazon launch — Brand Registry, A+ Content, listing SEO, and PPC. Truly remarkable results.' },
  { name: 'Tom H.', brand: 'ModernCraft Accessories', location: 'Atlanta, GA', service: 'Accessories + Etsy + Amazon', stars: 5, quote: 'Our leather bag brand needed both Etsy (for the handmade feel) and Amazon (for volume). Heritage set up both channels, got us Brand Registry, and now we\'re doing $65K/month across both.' },
];

const stats = [
  { value: '500+', label: 'US Brands Served' },
  { value: '4.9/5', label: 'Average Client Rating' },
  { value: '92%', label: 'Client Retention Rate' },
  { value: '$250M+', label: 'Client Revenue Generated' },
];

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Heritage Apparels',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', bestRating: '5', ratingCount: '500' },
};

export default function TestimonialsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <section className="py-28 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Client Reviews</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6">What US Fashion Founders Say <span className="gradient-text italic">About Us</span></h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">500+ US fashion brands built. Here's what founders say about working with Heritage Apparels.</p>
        </div>
      </section>

      <section className="py-14 bg-charcoal border-b border-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.value}>
              <div className="font-serif text-4xl font-bold gradient-text mb-1">{s.value}</div>
              <div className="text-cream/70 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#16213e] border border-gold/10 rounded-2xl p-8 hover:border-gold/30 transition-colors">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (<span key={i} className="text-gold text-lg">★</span>))}
                </div>
                <p className="text-cream/80 text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-gold/10 pt-4">
                  <div className="font-semibold text-cream text-sm">{t.name}</div>
                  <div className="text-gold text-xs">{t.brand}</div>
                  <div className="text-cream/40 text-xs">{t.location}</div>
                  <div className="mt-2 inline-block bg-gold/10 text-gold text-xs px-2 py-0.5 rounded">{t.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#16213e]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">Ready to Be Our Next <span className="gradient-text italic">Success Story?</span></h2>
          <p className="text-cream/60 mb-8 text-lg">Join 500+ US fashion brands who chose Heritage Apparels to launch and scale.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/us/contact" className="btn-gold text-base py-4 px-8">Start Your Brand →</Link>
            <Link href="/us/case-studies" className="btn-outline text-base py-4 px-8">View Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
