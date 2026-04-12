import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Social Media Reels & Video Production for Fashion Brands | Heritage Apparels',
  description:
    'Professional Instagram Reels, YouTube Shorts, and social media video production for fashion D2C brands. Concept, production, editing, and strategy. Starting ₹25,000 per Reel.',
  keywords: [
    'Instagram reels production fashion',
    'social media video fashion brand India',
    'fashion brand reels agency',
    'YouTube shorts fashion brand',
    'social content production agency',
  ],
};

const reelFormats = [
  { icon: '✂️', title: 'Transition Reels', desc: 'Smooth outfit transition reveals that drive massive watch-through rates', platform: 'Instagram' },
  { icon: '🎬', title: 'Behind-the-Scenes', desc: 'Authentic production content that builds brand story and trust', platform: 'Instagram/YouTube' },
  { icon: '💃', title: 'Styling Tutorials', desc: '"3 Ways to Style" format that showcases product versatility', platform: 'Instagram' },
  { icon: '🌟', title: 'Brand Campaigns', desc: 'Cinematic brand films for awareness and premium positioning', platform: 'Multi-platform' },
  { icon: '🛍️', title: 'Product Launches', desc: 'Teaser sequences building anticipation for new collection drops', platform: 'Instagram/YouTube' },
  { icon: '👥', title: 'UGC-Style Content', desc: 'Professionally produced content with an authentic, organic feel', platform: 'Instagram/TikTok' },
];

const packages = [
  {
    name: 'Starter',
    price: '₹25,000',
    unit: 'per Reel',
    includes: ['1 professional Reel', 'Concept development', 'Full day of filming', 'Professional editing', 'Music licensing', '3 caption variations'],
    best: false,
  },
  {
    name: 'Monthly Creator',
    price: '₹80,000',
    unit: 'per month',
    includes: ['4 Reels per month', 'Ongoing content calendar', 'Full filming for each Reel', 'Professional editing & grading', 'Trend-aware concepts', 'Monthly strategy call', 'Caption + hashtag strategy'],
    best: true,
  },
  {
    name: 'Brand Accelerator',
    price: '₹1,80,000',
    unit: 'per month',
    includes: ['10 Reels per month', 'Full content calendar management', 'Influencer collaboration production', 'Story content included', 'Performance reporting', 'Dedicated content strategist', 'Priority 24-hour edits'],
    best: false,
  },
];

const faqs = [
  { q: 'How many Instagram Reels do you produce per month?', a: 'Our Starter package includes 4 Reels/month, Growth includes 10 Reels/month, and our Brand Authority package includes 20 Reels plus Stories and carousels. We script, shoot, edit, caption, and schedule all content — you simply approve before posting.' },
  { q: 'Do you shoot at our location or work with footage we provide?', a: 'Both options are available. Our production team comes to your location for a scheduled monthly shoot day. Alternatively, you can send raw footage and we script, edit, caption, and add music. Most brands use a combination of monthly shoots plus user-generated content integration.' },
  { q: 'Can you grow our Instagram followers as part of this service?', a: 'Our focus is on content quality and engagement — saves, shares, comments. Content that drives genuine engagement signals algorithmic distribution. Brands consistently see 30–80% organic reach increases within 3 months. For accelerated follower growth, pair content with our Meta Ads service.' },
  { q: 'Do you write captions and handle hashtag strategy?', a: 'Yes. Every piece of content includes caption copy, hashtag strategy, and a posting schedule optimized for your audience\'s peak engagement windows. Hashtag sets are researched and updated monthly as platform algorithms evolve.' },
  { q: 'Which social media platforms do you cover?', a: 'Our primary focus is Instagram (Reels, Stories, Feed) and YouTube Shorts. We also repurpose content for TikTok and Pinterest. LinkedIn content for B2B fashion brands is available as an add-on. All content is formatted for each platform\'s specific requirements.' },
];

export default function SocialMediaReelsPage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'Social Media Content & Instagram Reels for Fashion Brands India', serviceType: 'Social Media Marketing & Content Production', provider: { '@type': 'LocalBusiness', name: 'Heritage Apparels', url: 'https://www.heritageapparels.com', address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', addressCountry: 'IN' } }, description: 'Monthly Instagram Reels, Stories, and social media content production for D2C fashion brands. Script, shoot, edit, caption, and schedule — all included.', areaServed: { '@type': 'Country', name: 'India' } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="py-24 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Link href="/services" className="text-gold/70 text-sm hover:text-gold mb-4 block">← Back to Services</Link>
          <p className="section-label mb-4">Social Media Reels</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Reels That Stop
            <br />
            <span className="gradient-text italic">Scrolls & Drive Sales</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Short-form video content engineered for maximum reach, engagement, and conversion. We combine creative excellence with deep platform knowledge to grow your fashion brand on social.
          </p>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl font-bold text-cream mb-4">
              Reel Formats We <span className="gradient-text italic">Produce</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {reelFormats.map((format) => (
              <div key={format.title} className="glass-card p-6 group">
                <div className="text-3xl mb-3">{format.icon}</div>
                <h3 className="font-serif text-lg font-bold text-cream mb-2 group-hover:text-gold transition-colors">{format.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed mb-3">{format.desc}</p>
                <span className="text-xs text-gold/70 border border-gold/20 px-2 py-0.5 rounded-full">{format.platform}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-gold/5 border border-gold/15 rounded-2xl p-8 mb-20">
            <h3 className="font-serif text-xl font-bold text-center text-cream mb-8">Why Reels Matter for Fashion Brands</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { stat: '67%', desc: 'More organic reach than static posts on Instagram' },
                { stat: '2.3M', desc: 'Average views for our viral client Reel campaigns' },
                { stat: '85%', desc: 'Of Reels viewed without sound — captions are critical' },
                { stat: '15-30s', desc: 'Optimal Reel duration for fashion content engagement' },
              ].map((item) => (
                <div key={item.desc}>
                  <div className="font-serif text-2xl font-bold gradient-text mb-1">{item.stat}</div>
                  <p className="text-cream/50 text-xs leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-cream mb-4">
              Reels <span className="gradient-text italic">Packages</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`rounded-xl p-8 border ${pkg.best ? 'border-gold bg-gold/10 relative' : 'border-gold/15 bg-white/3'}`}>
                {pkg.best && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-charcoal text-xs font-bold rounded-full">Most Popular</div>
                )}
                <h3 className="font-serif text-xl font-bold text-cream mb-1">{pkg.name}</h3>
                <div className="text-3xl font-bold gradient-text font-serif mt-3 mb-1">{pkg.price}</div>
                <p className="text-cream/40 text-xs mb-6">{pkg.unit}</p>
                <ul className="space-y-2.5 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-cream/70">
                      <span className="text-gold text-xs">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={pkg.best ? 'btn-gold w-full text-center block' : 'btn-outline w-full text-center block'}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="glass-card p-8">
            <h2 className="font-serif text-2xl font-bold text-cream mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4 mb-8">{faqs.slice(0,3).map(f => (<div key={f.q} className="border-b border-gold/10 pb-4"><h4 className="font-semibold text-cream text-sm mb-2">{f.q}</h4><p className="text-cream/60 text-xs leading-relaxed">{f.a}</p></div>))}</div>
            <h2 className="font-serif text-2xl font-bold text-cream mb-4">Start Your Reels Journey</h2>
            <ContactForm compact />
          </div>
        </div>
      </section>
    </main>
  );
}
