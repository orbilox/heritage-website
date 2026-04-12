import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'US Fashion Brand Blog — India Sourcing, Amazon Strategy & US Market Insights | Heritage Apparels USA',
  description:
    'Expert articles on India manufacturing for US brands, Amazon vs Walmart strategy, CPSC compliance, TikTok Shop, private label launch, and D2C brand growth in the American market.',
  keywords: [
    'India sourcing for US brands blog',
    'Amazon fashion brand strategy USA',
    'CPSC compliance apparel guide',
    'private label fashion Amazon USA',
    'TikTok Shop fashion brand USA',
    'India to USA import guide fashion',
    'Walmart marketplace fashion brands',
    'US performance marketing fashion blog',
  ],
  alternates: {
    canonical: 'https://www.heritageapparels.com/us/blog',
  },
};

const posts = [
  {
    title: 'How to Source Fashion Products from India for the US Market in 2025',
    slug: 'source-fashion-india-us-market-2025',
    excerpt: 'A complete guide for US entrepreneurs on sourcing apparel and accessories from India — factories, MOQs, quality control, CPSC compliance, and shipping to Amazon FBA.',
    category: 'India Sourcing',
    author: 'Heritage Apparels USA',
    date: 'March 15, 2025',
    readTime: '8 min read',
    icon: '🏭',
    color: 'from-amber-900/30 to-orange-900/20',
    border: 'border-amber-500/20',
  },
  {
    title: 'Amazon.com vs Walmart Marketplace: Where Should Your Brand Launch First?',
    slug: 'amazon-vs-walmart-marketplace-us-brands',
    excerpt: 'A data-driven comparison of Amazon and Walmart Marketplace for new US fashion brands — fees, traffic, competition, and which platform delivers faster ROI.',
    category: 'US Marketplaces',
    author: 'Heritage Apparels USA',
    date: 'March 10, 2025',
    readTime: '6 min read',
    icon: '🛒',
    color: 'from-blue-900/30 to-indigo-900/20',
    border: 'border-blue-500/20',
  },
  {
    title: 'TikTok Shop vs Instagram Shopping: Which Converts Better for US Fashion Brands?',
    slug: 'tiktok-shop-vs-instagram-shopping-fashion',
    excerpt: 'Real performance data comparing TikTok Shop and Instagram Shopping for fashion brands targeting US Gen Z and millennial consumers — ROAS, conversion, and creative strategy.',
    category: 'Social Commerce',
    author: 'Heritage Apparels USA',
    date: 'March 5, 2025',
    readTime: '7 min read',
    icon: '📱',
    color: 'from-pink-900/30 to-rose-900/20',
    border: 'border-pink-500/20',
  },
  {
    title: 'CPSC Compliance for Apparel Imported from India: The Complete Checklist',
    slug: 'cpsc-compliance-apparel-india-import-checklist',
    excerpt: 'Everything US brands need to know about CPSC compliance when importing fashion products from India — required tests, labels, certifications, and how to avoid customs holds.',
    category: 'US Compliance',
    author: 'Heritage Apparels USA',
    date: 'February 28, 2025',
    readTime: '10 min read',
    icon: '🛃',
    color: 'from-green-900/30 to-emerald-900/20',
    border: 'border-green-500/20',
  },
  {
    title: 'Amazon Product Photography Guide for US Fashion Brands (2025 Standards)',
    slug: 'amazon-product-photography-us-fashion-2025',
    excerpt: 'A complete guide to Amazon\'s 2025 image requirements for apparel and accessories — main image specs, A+ content best practices, and what drives CTR in US fashion categories.',
    category: 'Product Photography',
    author: 'Heritage Apparels USA',
    date: 'February 20, 2025',
    readTime: '6 min read',
    icon: '📸',
    color: 'from-purple-900/30 to-violet-900/20',
    border: 'border-purple-500/20',
  },
  {
    title: 'How to Launch a Private Label Fashion Brand on Amazon USA from India',
    slug: 'private-label-fashion-amazon-usa-india',
    excerpt: 'Step-by-step guide to launching a private label fashion brand on Amazon.com — India factory selection, sampling, CPSC compliance, Brand Registry, listing optimization, and launch ads.',
    category: 'US Brand Launch',
    author: 'Heritage Apparels USA',
    date: 'February 12, 2025',
    readTime: '12 min read',
    icon: '🚀',
    color: 'from-cyan-900/30 to-sky-900/20',
    border: 'border-cyan-500/20',
  },
  {
    title: 'Meta Ads vs Google Shopping for US Fashion Brands: 2025 ROAS Comparison',
    slug: 'meta-ads-vs-google-shopping-fashion-usa-2025',
    excerpt: 'Performance benchmarks for Meta and Google Shopping campaigns targeting US fashion consumers — ROAS by category, creative format winners, and budget allocation strategy.',
    category: 'Performance Marketing',
    author: 'Heritage Apparels USA',
    date: 'February 5, 2025',
    readTime: '8 min read',
    icon: '📈',
    color: 'from-orange-900/30 to-amber-900/20',
    border: 'border-orange-500/20',
  },
  {
    title: 'Etsy vs Shopify for Handmade Fashion: Which Platform Scales Better in the US?',
    slug: 'etsy-vs-shopify-handmade-fashion-us',
    excerpt: 'A practical comparison for US makers and India-sourced brands — Etsy\'s built-in traffic vs Shopify\'s brand ownership, with fee breakdowns and growth ceiling analysis.',
    category: 'US Marketplaces',
    author: 'Heritage Apparels USA',
    date: 'January 28, 2025',
    readTime: '7 min read',
    icon: '🎨',
    color: 'from-yellow-900/30 to-amber-900/20',
    border: 'border-yellow-500/20',
  },
  {
    title: 'India to USA: Complete Import & Shipping Guide for Fashion Brands (2025)',
    slug: 'india-to-usa-import-shipping-fashion-2025',
    excerpt: 'Everything about importing fashion products from India to the USA — sea vs air freight, HS codes, import duties, customs brokers, FBA prep, and duty drawback programs.',
    category: 'India Sourcing',
    author: 'Heritage Apparels USA',
    date: 'January 20, 2025',
    readTime: '11 min read',
    icon: '🚢',
    color: 'from-slate-900/30 to-gray-900/20',
    border: 'border-slate-500/20',
  },
];

const categories = ['All', 'India Sourcing', 'US Marketplaces', 'Social Commerce', 'US Compliance', 'Product Photography', 'US Brand Launch', 'Performance Marketing'];

export default function USBlogPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">🇺🇸 US Knowledge Hub</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Insights for
            <span className="gradient-text italic"> US-Market Brands</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Expert articles on India sourcing, US marketplace strategy, CPSC compliance, performance marketing, and D2C brand growth in the American market — by the team that&apos;s launched 500+ brands.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-charcoal border-b border-gold/10 sticky top-20 z-30 backdrop-blur-lg bg-charcoal/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <span key={cat} className="px-4 py-2 rounded-full text-sm font-medium border border-gold/20 text-cream/60 cursor-pointer hover:border-gold hover:text-gold transition-colors whitespace-nowrap">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className={`glass-card overflow-hidden group hover:border-gold/30 transition-all bg-gradient-to-br ${post.color} border ${post.border}`}>
                {/* Top */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{post.icon}</span>
                    <span className="px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="font-serif text-lg font-bold text-cream mb-3 leading-snug group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-cream/60 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                {/* Bottom */}
                <div className="px-6 pb-6 flex items-center justify-between">
                  <div>
                    <div className="text-cream/40 text-xs">{post.date}</div>
                    <div className="text-cream/30 text-xs">{post.readTime}</div>
                  </div>
                  <Link
                    href={`/us/blog/${post.slug}`}
                    className="text-gold text-sm font-medium hover:underline flex items-center gap-1"
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#0d1b3e] border-t border-gold/10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">
            Get US Market <span className="gradient-text italic">Insights Weekly</span>
          </h2>
          <p className="text-cream/60 mb-8">
            India sourcing tips, US marketplace updates, and brand growth strategies — delivered to your inbox every week. No spam. Unsubscribe anytime.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-charcoal/60 border border-gold/20 rounded-lg px-4 py-3 text-cream text-sm placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button type="submit" className="btn-gold whitespace-nowrap px-6">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
