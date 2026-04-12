import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'US Social Media & Content — TikTok, Instagram, YouTube | Heritage Apparels USA',
  description:
    'Short-form video and social media content for US fashion brands on TikTok, Instagram, and YouTube. Monthly retainers with US-audience targeting, UGC-style content, and community management.',
};

const whatWeDeliver = [
  { icon: '🎵', title: 'TikTok Content (US)', desc: 'Trend-led, algorithm-optimized TikTok videos targeting US Gen Z and millennial consumers — organic and dark-post ready.' },
  { icon: '📱', title: 'Instagram Reels & Stories', desc: 'Branded Reels, Stories, and carousel posts engineered for US audience engagement — with trending audio and platform-native creative direction.' },
  { icon: '▶️', title: 'YouTube Shorts', desc: 'Product showcase, lifestyle, and educational YouTube Shorts designed for US consumer discovery and channel growth.' },
  { icon: '🎬', title: 'UGC-Style Videos', desc: 'User-generated content style videos that feel native and authentic — perfect for TikTok Shop, Instagram, and Meta ad creative.' },
  { icon: '📅', title: 'US Content Calendar', desc: 'Monthly content plan aligned with US seasonal events, holidays, and shopping moments — Black Friday, 4th of July, Back-to-School, and more.' },
  { icon: '🤝', title: 'US Influencer Coordination', desc: 'Micro and mid-tier US influencer outreach, briefing, and content coordination — for organic reach and authentic brand endorsements.' },
  { icon: '💬', title: 'Community Management', desc: 'Daily comment management, DM responses, and US audience engagement — building a loyal following that converts to customers.' },
  { icon: '📊', title: 'Monthly Analytics Report', desc: 'Platform-specific performance reports — reach, engagement, follower growth, and content ROI — delivered monthly with actionable insights.' },
];

const packages = [
  {
    name: 'Starter',
    price: '$1,500/mo',
    ideal: 'New US brands · 1 platform',
    includes: [
      '8 TikTok or Instagram Reels/month',
      'US-focused content calendar',
      'Trending audio & hashtag research',
      'Captions & posting schedule',
      'Monthly performance report',
    ],
  },
  {
    name: 'Growth',
    price: '$3,000/mo',
    ideal: 'Scaling brands · Multi-platform',
    includes: [
      '16 videos/month (TikTok + Reels)',
      'YouTube Shorts (4/month)',
      'US content calendar',
      '2 UGC-style videos/month',
      'Community management (daily)',
      'Monthly analytics & strategy call',
    ],
    popular: true,
  },
  {
    name: 'Full Presence',
    price: 'Custom',
    ideal: 'Established US brands · Full social',
    includes: [
      '30+ videos/month across all platforms',
      'US influencer campaign (2/month)',
      'Paid social creative production',
      'Full community management',
      'Weekly strategy & content calls',
      'Dedicated US content strategist',
    ],
  },
];

const stats = [
  { value: '30+', label: 'Videos Per Month', sub: 'at full-presence tier' },
  { value: '3', label: 'US Platforms', sub: 'TikTok, Instagram, YouTube' },
  { value: '24hrs', label: 'Content Turnaround', sub: 'brief to final edit' },
  { value: '$1,500', label: 'Starting From', sub: 'per month (USD)' },
];

const faqs = [
  { q: 'What US social media platforms do you manage content for?', a: 'Our primary platforms are TikTok (US audience targeting), Instagram (Reels, Stories, and Feed), and YouTube Shorts. We also produce content for Pinterest and can repurpose assets for LinkedIn (for B2B wholesale brands). All content is produced and formatted natively for each platform — not just resized from one master format.' },
  { q: 'Do you produce TikTok Shop content specifically for US product listings?', a: 'Yes. TikTok Shop content is a specialized format — shoppable short-form videos that link directly to your TikTok Shop product listing. We produce native TikTok Shop videos that feel authentic rather than promotional, integrate product tags correctly, and are optimized for the TikTok Shop algorithm. This is included in our Growth and Full Presence packages.' },
  { q: 'How do you target US audiences rather than Indian audiences in content?', a: 'US audience targeting starts at the content level: US cultural references, US seasonal moments (Black Friday, 4th of July, Back-to-School), US trending audio and sounds, and US consumer psychology. At the account level, we set your TikTok and Instagram audience targeting to US-only, use US phone SIMs for account management where required, and build US-based follower audiences from day one.' },
  { q: 'Can you coordinate with US influencers for our brand?', a: 'Yes. Our Growth and Full Presence packages include US influencer outreach — micro (10K–100K followers) and mid-tier (100K–1M) influencers in your niche. We handle outreach, negotiation, briefing, and content approval. We do not charge commission on top of influencer fees. Influencer gifting or payment is quoted separately from the content management retainer.' },
  { q: 'Is there a minimum monthly commitment for social media management?', a: 'We recommend a minimum 3-month engagement to see meaningful organic growth results — social algorithms reward consistent posting over time. There is no lock-in contract beyond 30-day cancellation notice. All packages are month-to-month after the initial 3-month period. Content calendar and strategy work is done in month 1, so results typically accelerate from month 2 onward.' },
];

export default function USSocialMediaPage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'US Social Media Content & TikTok Management for Fashion Brands', serviceType: 'Social Media Marketing & Content Production', provider: { '@type': 'Organization', name: 'Heritage Apparels', url: 'https://www.heritageapparels.com/us' }, description: 'Monthly TikTok, Instagram, and YouTube content for US fashion brands. US audience targeting, UGC-style videos, influencer coordination, and community management.', areaServed: { '@type': 'Country', name: 'United States' }, offers: { '@type': 'Offer', priceCurrency: 'USD', price: '1500', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: '1500', unitText: 'MONTH' } } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="py-24 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">🎬 US Social Media & Content</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Content That Converts
            <br />
            <span className="gradient-text italic">American Scrollers into Buyers.</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed">
            Short-form video and social content engineered for US audiences on TikTok, Instagram, and YouTube — monthly retainers with content calendars, UGC-style production, US influencer coordination, and community management.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold">Start US Social Media →</Link>
            <Link href="/us/services" className="btn-outline">All US Services</Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-charcoal border-y border-gold/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-3xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-cream text-sm font-medium">{s.label}</div>
                <div className="text-cream/40 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">What We <span className="gradient-text italic">Create & Manage</span></h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDeliver.map((item) => (
              <div key={item.title} className="glass-card p-6 group">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-lg font-bold text-cream mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d1b3e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-cream mb-4">Social Media <span className="gradient-text italic">Packages</span></h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-cream/50">Monthly retainer in USD · No lock-in contracts · Cancel anytime with 30-day notice</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`glass-card p-8 relative ${pkg.popular ? 'border-gold/40' : ''}`}>
                {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-charcoal text-xs font-bold rounded-full">Most Popular</span>}
                <h3 className="font-serif text-2xl font-bold text-cream mb-1">{pkg.name}</h3>
                <p className="text-cream/40 text-sm mb-4">{pkg.ideal}</p>
                <div className="font-serif text-3xl font-bold gradient-text mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-cream/70">
                      <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/us/contact" className={`block text-center py-3 rounded-lg font-medium text-sm transition-all ${pkg.popular ? 'btn-gold' : 'btn-outline'}`}>Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="font-serif text-4xl font-bold text-cream mb-4">Frequently Asked <span className="gradient-text italic">Questions</span></h2><div className="gold-divider mx-auto" /></div>
          <div className="space-y-4">{faqs.map(f => (<div key={f.q} className="glass-card p-6"><h3 className="font-semibold text-cream mb-3 leading-snug">{f.q}</h3><p className="text-cream/60 text-sm leading-relaxed">{f.a}</p></div>))}</div>
        </div>
      </section>

      <section className="py-16 bg-[#0d1b3e] border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">Build Your US <span className="gradient-text italic">Social Presence Today.</span></h2>
          <p className="text-cream/60 mb-8 leading-relaxed">Tell us your brand, US target audience, and which platforms you want to grow — we&apos;ll send a free content strategy outline within 24 hours.</p>
          <Link href="/us/contact" className="btn-gold inline-block px-8 py-4">Get a Free US Content Strategy</Link>
        </div>
      </section>
    </main>
  );
}
