import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fashion Brand Consultant USA | Strategy, Sourcing & Growth | Heritage Apparels',
  description: 'Work with a dedicated US fashion brand consultant — brand strategy, India sourcing, marketplace growth, and performance marketing. One expert. Full-stack fashion execution.',
  keywords: ['fashion brand consultant USA', 'clothing brand consultant', 'fashion brand advisor USA', 'fashion brand strategy consultant', 'D2C fashion consultant USA'],
  alternates: { canonical: 'https://www.heritageapparels.com/us/fashion-brand-consultant' },
};

const expertise = [
  { icon: '🎯', title: 'Brand Strategy & Positioning', desc: 'Define your niche, target customer, price point, and competitive positioning for the US market.' },
  { icon: '🏭', title: 'India Sourcing & Manufacturing', desc: 'Source the right factory, negotiate pricing, manage samples, oversee QC, and handle US import.' },
  { icon: '🌐', title: 'Marketplace Management', desc: 'Amazon, Walmart, Etsy, TikTok Shop — listing strategy, PPC management, ranking growth.' },
  { icon: '📈', title: 'Performance Marketing', desc: 'Meta Ads, Google Ads, and TikTok Ads — strategy, creative direction, and budget allocation.' },
  { icon: '🎨', title: 'Creative & Content Direction', desc: 'Photography briefs, ad creative strategy, social media content calendar, brand voice.' },
  { icon: '📊', title: 'Growth Planning & KPIs', desc: 'Monthly reporting, revenue forecasting, inventory planning, and 90-day growth roadmaps.' },
];

const personas = [
  { icon: '🚀', title: 'The Startup Founder', desc: 'You have a fashion idea but don\'t know where to start. Your consultant builds your roadmap — from product sourcing to first sale — and guides you through every decision.' },
  { icon: '📈', title: 'The Scaling Brand', desc: 'You\'re doing $50K–$500K/month but hitting a growth ceiling. Your consultant audits your brand, identifies what\'s holding you back, and builds the plan to break through.' },
  { icon: '💼', title: 'The Investor/Entrepreneur', desc: 'You\'re entering fashion as a new venture. Your consultant de-risks the launch — validating the niche, sourcing strategy, and go-to-market before you commit capital.' },
];

const engagements = [
  { name: 'Brand Audit', price: '$500', duration: 'One-time', desc: 'A comprehensive review of your brand, marketplace presence, sourcing costs, and ad performance with a written action plan.', features: ['2-hour video session', 'Written audit report', 'Top 5 priority actions', 'Resource & tool recommendations'] },
  { name: 'Monthly Advisory', price: '$2,500/mo', duration: 'Monthly retainer', popular: true, desc: 'Ongoing strategic guidance — bi-weekly calls, unlimited async Q&A, and monthly strategy reviews.', features: ['2x bi-weekly calls/month', 'Unlimited WhatsApp/email', 'Monthly growth report', 'Priority response (24 hrs)', 'Ad account access & feedback'] },
  { name: 'Embedded Consultant', price: '$6,000/mo', duration: 'Full engagement', desc: 'Your consultant acts as your fractional CMO/COO — attending team calls, managing vendors, and executing alongside you.', features: ['Weekly team calls', 'Vendor management', 'Campaign execution oversight', 'Dedicated Slack channel', 'Weekly performance reports', 'Direct factory & agency coordination'] },
];

const faqs = [
  { q: 'What makes Heritage Apparels consultants different from regular fashion consultants?', a: 'Most consultants advise but don\'t execute. Our consultants come from operational backgrounds — they\'ve managed India factories, run Amazon PPC accounts, and built Shopify stores. When we advise you to do something, we know exactly how to do it and can execute it through our team if needed.' },
  { q: 'Do you work with fashion startups that have no revenue yet?', a: 'Yes. Many of our clients are pre-revenue founders. The Brand Audit is a great starting point — it helps you avoid the most expensive mistakes before committing capital to manufacturing or ads.' },
  { q: 'Can the consultant also execute (not just advise)?', a: 'Yes. Our Monthly Advisory clients can add execution services — India manufacturing, Shopify build, Amazon management, or Meta Ads — at package rates. Your consultant becomes the central coordinator across all services.' },
  { q: 'What is the minimum commitment for monthly advisory?', a: 'We require a minimum 3-month commitment for Monthly Advisory. This gives enough time to implement strategies and see measurable results. After 3 months, you continue month-to-month or upgrade to Embedded.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function FashionBrandConsultantPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="py-28 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Fashion Brand Consultant</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight">
            Your Dedicated US <span className="gradient-text italic">Fashion Brand Consultant</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            One expert. Full-stack expertise in brand strategy, India sourcing, marketplace growth, and performance marketing. We don&apos;t just advise — we execute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/us/contact" className="btn-gold text-base py-4 px-8">Book a Free Intro Call →</Link>
            <Link href="/us/free-brand-audit" className="btn-outline text-base py-4 px-8">Get Free Brand Audit</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Areas of Expertise</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">What Your Consultant <span className="gradient-text italic">Handles</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((e) => (
              <div key={e.title} className="bg-[#16213e] border border-gold/10 rounded-xl p-6 hover:border-gold/30 transition-colors">
                <div className="text-3xl mb-4">{e.icon}</div>
                <h3 className="font-semibold text-cream mb-2">{e.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#16213e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Who We Work With</p>
            <h2 className="font-serif text-3xl font-bold text-cream">Which Founder <span className="gradient-text italic">Are You?</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personas.map((p) => (
              <div key={p.title} className="text-center bg-charcoal rounded-2xl p-8 border border-gold/10">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-semibold text-cream text-lg mb-3">{p.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">Engagement <span className="gradient-text italic">Options</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {engagements.map((eng) => (
              <div key={eng.name} className={`relative bg-[#16213e] rounded-2xl p-8 border ${eng.popular ? 'border-gold' : 'border-gold/20'}`}>
                {eng.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-[#1a1a2e] text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>}
                <div className="text-xs text-cream/40 mb-1">{eng.duration}</div>
                <div className="font-serif text-2xl font-bold text-cream mb-1">{eng.name}</div>
                <div className="gradient-text font-bold text-2xl mb-3">{eng.price}</div>
                <p className="text-cream/50 text-sm mb-6">{eng.desc}</p>
                <ul className="space-y-2 mb-8">
                  {eng.features.map((f) => (<li key={f} className="flex items-start gap-2 text-sm text-cream/70"><span className="text-gold">✓</span>{f}</li>))}
                </ul>
                <Link href="/us/contact" className={eng.popular ? 'btn-gold w-full block text-center py-3' : 'btn-outline w-full block text-center py-3'}>Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#16213e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-cream">Frequently Asked <span className="gradient-text italic">Questions</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-charcoal border border-gold/15 rounded-xl p-6">
                <h3 className="font-semibold text-cream mb-2">{f.q}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">Book a Free <span className="gradient-text italic">Intro Call</span></h2>
          <p className="text-cream/60 mb-8 text-lg">30 minutes. No pitch. Just an honest look at your brand and what it would take to grow it.</p>
          <Link href="/us/contact" className="btn-gold text-base py-4 px-10">Book Free Intro Call →</Link>
        </div>
      </section>
    </>
  );
}
