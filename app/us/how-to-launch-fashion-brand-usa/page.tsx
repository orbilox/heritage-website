import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Launch a Fashion Brand in the USA in 2025 | Heritage Apparels',
  description: 'Complete step-by-step guide to launching a fashion brand in the USA in 2025 — sourcing, branding, Shopify, Amazon, TikTok, and Meta Ads. From a team that has launched 500+ brands.',
  keywords: ['how to launch fashion brand USA 2025', 'start clothing brand USA', 'fashion brand launch guide USA', 'how to start fashion brand in USA', 'launch D2C fashion brand USA'],
  alternates: { canonical: 'https://www.heritageapparels.com/us/how-to-launch-fashion-brand-usa' },
};

const steps = [
  { num: '01', title: 'Define Your Niche & Target Customer', icon: '🎯', content: 'The most common mistake US fashion founders make is trying to appeal to everyone. The brands that win — especially on Amazon and TikTok — are laser-focused on a specific customer. Women\'s activewear for yoga moms aged 28–42. Sustainable kidswear for eco-conscious parents. Affordable luxury streetwear for Gen Z men in urban markets. Pick your niche before you do anything else. Research your top 10 Amazon competitors. Analyse their reviews — what do customers love, what are they missing? That gap is your opportunity.', budget: '$0' },
  { num: '02', title: 'Source Your Product', icon: '🏭', content: 'You have three main options: US manufacturing ($18–40/piece, no minimums, long lead times), China (low cost but high tariffs 25–145% and long MOQ), or India manufacturing ($6–12/piece, low MOQ of 50 pcs, CPSC compliant). For most US fashion startups in 2025, India manufacturing is the clear winner — 35–60% cheaper than US domestic, far lower MOQs than China, and significantly lower US import tariffs. Heritage Apparels\' own factory accepts 50-piece minimums across most categories.', budget: '$3,000–$8,000 for first production run' },
  { num: '03', title: 'Build Your Brand Identity', icon: '✏️', content: 'Your brand identity is everything in fashion. This means: a memorable name that works in the US market, a logo that looks great on packaging and social, a consistent color palette, and a brand story that resonates with your target customer. For US consumers, brand story matters — especially in sustainable fashion, luxury, and kidswear. Invest in good brand identity work. Cheap logo design is the most expensive mistake in fashion.', budget: '$500–$3,000' },
  { num: '04', title: 'Get Professional Photography', icon: '📸', content: 'Amazon requires white-background images for main product photos. US consumers expect lifestyle photography on Shopify and social media. TikTok needs video content. Budget for: white-background shots (all SKUs), lifestyle shots with US-market appropriate models, infographic images (for Amazon A+ Content), and video content. Photography is not optional — poor photography kills conversions regardless of product quality.', budget: '$1,500–$5,000' },
  { num: '05', title: 'Build Your Shopify Store', icon: '🛍️', content: 'Your Shopify store is your D2C headquarters. Build it with: US payment gateways (Stripe, PayPal, Shop Pay), US shipping zones, automatic tax calculation for all 50 states, email marketing integration (Klaviyo), and conversion-optimised product pages. Do not launch with a generic Shopify theme — invest in customisation that reflects your brand. Average D2C fashion conversion rate is 1.8%; optimised stores hit 3–5%.', budget: '$3,500–$7,500 (Heritage Apparels Shopify package)' },
  { num: '06', title: 'Launch on Amazon & Marketplaces', icon: '🌐', content: 'Amazon is non-negotiable for US fashion. 60% of US shoppers search Amazon before any other site. Get Brand Registry (requires a trademark — file one first), optimise your listings for Amazon SEO, shoot Amazon-compliant images, and set up Sponsored Products PPC. Also launch on Etsy (for handcrafted/unique), Walmart Marketplace (volume), and TikTok Shop (fastest growing). Heritage Apparels manages all marketplace onboarding as part of our launch packages.', budget: '$1,000–$2,000 for setup + $1,500/mo management' },
  { num: '07', title: 'Launch on TikTok & Instagram', icon: '📱', content: 'Start organic before paid. Post 3 TikTok videos per week for 4 weeks before launch. Use trending audio, behind-the-scenes factory content, and try-on videos. Instagram Reels drive strong fashion discovery. Build your following before launch so you have an audience on day one. TikTok creator partnerships (micro-influencers with 10K–100K followers) are the most cost-effective fashion marketing channel in 2025.', budget: '$500–$2,000 for influencer collabs' },
  { num: '08', title: 'Launch Meta & Google Ads', icon: '📊', content: 'Start Meta Ads at $100/day minimum — below this, the algorithm doesn\'t have enough data to optimise. Use broad targeting initially; let Meta\'s AI find your buyer. Test 3–5 ad creative variations. Video ads consistently outperform static for fashion. Google Shopping Ads capture high-intent buyers actively searching for your product. Budget $3,000/month minimum for meaningful traction. Expect month 1 to be learning — profitable ROAS typically arrives in month 2–3.', budget: '$3,000–$5,000/month' },
];

const budget = [
  { item: 'India manufacturing (500 pcs)', cost: '$3,500–$6,000' },
  { item: 'Brand identity', cost: '$500–$3,000' },
  { item: 'Photography', cost: '$1,500–$5,000' },
  { item: 'Shopify store build', cost: '$3,500–$7,500' },
  { item: 'Amazon + marketplace setup', cost: '$1,000–$2,000' },
  { item: 'First 3 months ads budget', cost: '$9,000–$15,000' },
  { item: 'Total', cost: '$19,000–$38,500' },
];

const mistakes = [
  'Choosing a niche that\'s too broad — "women\'s fashion" is not a niche',
  'Skipping brand identity and going straight to manufacturing',
  'Using cheap dropshipping product photos on Amazon',
  'Launching on Amazon without Brand Registry',
  'Running Meta Ads with less than $3,000/month budget',
  'Ignoring TikTok — it\'s the fastest-growing fashion discovery channel',
];

export default function HowToLaunchFashionBrandUSAPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Launch a Fashion Brand in the USA in 2025',
    description: 'Step-by-step guide to launching a fashion brand in the USA in 2025',
    step: steps.map((s) => ({ '@type': 'HowToStep', name: s.title, text: s.content })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className="py-28 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Complete Guide</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6 leading-tight">How to Launch a Fashion Brand in the USA in 2025 <span className="gradient-text italic">(Step-by-Step)</span></h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl max-w-3xl mx-auto">From a team that has launched 500+ fashion brands across India and the USA. Everything you need — no fluff, no theory, just what actually works.</p>
          <div className="mt-8 flex gap-6 justify-center text-sm text-cream/50">
            <span>📖 15 min read</span><span>🗓 Updated 2025</span><span>✅ 500+ brands launched</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {steps.map((step, i) => (
            <div key={step.num} className={`flex gap-8 mb-16 ${i % 2 === 0 ? '' : ''}`}>
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                <span className="font-serif text-gold font-bold text-xl">{step.num}</span>
              </div>
              <div className="flex-1">
                <div className="text-2xl mb-2">{step.icon}</div>
                <h2 className="font-serif text-2xl font-bold text-cream mb-4">{step.title}</h2>
                <p className="text-cream/70 leading-relaxed mb-4">{step.content}</p>
                <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-lg px-4 py-2">
                  <span className="text-gold text-xs font-semibold">Estimated Cost:</span>
                  <span className="text-cream/70 text-xs">{step.budget}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#16213e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-cream mb-8 text-center">Total Budget <span className="gradient-text italic">Breakdown</span></h2>
          <div className="bg-charcoal rounded-2xl border border-gold/20 overflow-hidden">
            {budget.map((b, i) => (
              <div key={b.item} className={`flex justify-between items-center px-6 py-4 ${i < budget.length - 1 ? 'border-b border-gold/10' : 'bg-gold/5 border-t border-gold/30'}`}>
                <span className={`text-sm ${i === budget.length - 1 ? 'text-cream font-bold' : 'text-cream/70'}`}>{b.item}</span>
                <span className={`font-semibold ${i === budget.length - 1 ? 'gradient-text text-lg' : 'text-gold'}`}>{b.cost}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-cream mb-8 text-center">6 Mistakes to <span className="gradient-text italic">Avoid</span></h2>
          <div className="space-y-4">
            {mistakes.map((m, i) => (<div key={i} className="flex items-start gap-4 bg-[#16213e] border border-red-900/30 rounded-xl p-5"><span className="text-red-400 font-bold text-lg flex-shrink-0">✗</span><p className="text-cream/70 text-sm leading-relaxed">{m}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#16213e]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">Want Us to <span className="gradient-text italic">Launch Your Brand</span> for You?</h2>
          <p className="text-cream/60 mb-8 text-lg">Heritage Apparels handles every step above — factory to first sale in 45 days. Get a free brand launch consultation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/us/contact" className="btn-gold py-4 px-8">Get Free Launch Plan →</Link>
            <Link href="/us/free-brand-audit" className="btn-outline py-4 px-8">Free Brand Audit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
