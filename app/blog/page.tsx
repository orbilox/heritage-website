import type { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import { getAllPublishedBlogPosts } from '@/lib/db';

export const metadata: Metadata = {
  title: 'Fashion Brand Growth Blog — Marketplace, Marketing & Manufacturing Insights | Heritage Apparels',
  description:
    'Expert articles on Myntra onboarding, Meta Ads for fashion brands, private label manufacturing, D2C brand strategy, and e-commerce growth in India. Published by Heritage Apparels.',
  keywords: [
    'Myntra seller onboarding guide',
    'Meta ads fashion brand India',
    'private label manufacturing India',
    'D2C fashion brand launch cost India',
    'Nykaa Fashion onboarding guide',
    'fashion ecommerce blog India',
    'marketplace management fashion brands India',
    'D2C brand strategy tips India',
  ],
  alternates: {
    canonical: 'https://www.heritageapparels.com/blog',
  },
};

const categories = ['All', 'Marketplace Strategy', 'Performance Marketing', 'Manufacturing & Sourcing', 'Fashion Photography', 'Digital Cataloging', 'Brand Strategy', 'Social Media', 'Business Strategy'];

export default async function BlogPage() {
  let posts: any[] = [];
  try {
    posts = getAllPublishedBlogPosts();
  } catch {
    posts = [];
  }

  // Fallback static posts if DB not ready
  if (posts.length === 0) {
    posts = [
      { title: '10 Fashion Photography Trends Dominating D2C Brands in 2025', slug: 'fashion-photography-trends-d2c-2025', excerpt: 'Discover the top fashion photography trends that are helping D2C brands achieve higher conversion rates and stronger brand identities in 2025.', category: 'Fashion Photography', author: 'Heritage Apparels', created_at: '2025-01-15' },
      { title: 'The Complete Guide to Digital Cataloging for Fashion E-commerce', slug: 'complete-guide-digital-cataloging-fashion-ecommerce', excerpt: 'A comprehensive guide to creating professional digital catalogs that convert browsers into buyers for fashion e-commerce brands.', category: 'Digital Cataloging', author: 'Heritage Apparels', created_at: '2025-01-10' },
      { title: 'How to Brief a Fashion Photographer: A D2C Brand\'s Complete Checklist', slug: 'how-to-brief-fashion-photographer-d2c-brand-checklist', excerpt: 'Get the most out of your fashion photoshoot investment with this comprehensive creative brief checklist.', category: 'Fashion Photography', author: 'Heritage Apparels', created_at: '2025-01-08' },
      { title: 'Instagram Reels for Fashion Brands: What\'s Working in 2025', slug: 'instagram-reels-fashion-brands-2025', excerpt: 'Proven Instagram Reels strategies that are driving massive growth for fashion D2C brands.', category: 'Social Media', author: 'Heritage Apparels', created_at: '2025-01-05' },
      { title: 'ROI of Professional Fashion Photography: The Numbers Don\'t Lie', slug: 'roi-professional-fashion-photography-data', excerpt: 'Hard data on how professional fashion photography impacts conversion rates, return rates, and brand perception.', category: 'Business Strategy', author: 'Heritage Apparels', created_at: '2025-01-02' },
      { title: 'Building a D2C Fashion Brand Visual Identity from Scratch', slug: 'building-d2c-fashion-brand-visual-identity', excerpt: 'A step-by-step guide to creating a cohesive, differentiated visual identity for your D2C fashion brand.', category: 'Brand Strategy', author: 'Heritage Apparels', created_at: '2024-12-28' },
      { title: 'How to Onboard Your Brand on Myntra in 2025: Complete Step-by-Step Guide', slug: 'myntra-seller-onboarding-guide-2025', excerpt: 'Everything you need to know about getting your fashion brand listed on Myntra — eligibility, documentation, catalogue standards, and how to fast-track your onboarding.', category: 'Marketplace Strategy', author: 'Heritage Apparels', created_at: '2025-04-08' },
      { title: 'How Much Does It Cost to Launch a D2C Fashion Brand in India? (2025 Reality)', slug: 'd2c-fashion-brand-launch-cost-india', excerpt: 'A realistic, itemised breakdown of what it costs to launch a D2C fashion brand in India — manufacturing, photography, website, marketplace onboarding, and marketing.', category: 'Business Strategy', author: 'Heritage Apparels', created_at: '2025-04-05' },
      { title: 'Myntra vs AJIO: Which Marketplace Is Better for New Fashion Brands in India?', slug: 'myntra-vs-ajio-fashion-brands-india', excerpt: 'A data-driven comparison of Myntra and AJIO for new fashion brands — traffic, commissions, buyer demographics, and which delivers faster ROI.', category: 'Marketplace Strategy', author: 'Heritage Apparels', created_at: '2025-04-02' },
      { title: 'How to Run Meta Ads for a Fashion Brand in India: Complete Step-by-Step Guide', slug: 'meta-ads-fashion-brand-india-guide', excerpt: 'A practical guide to running profitable Meta Ads for fashion and D2C brands in India — campaign structure, audiences, creatives, and ROAS benchmarks.', category: 'Performance Marketing', author: 'Heritage Apparels', created_at: '2025-03-28' },
      { title: 'Private Label Clothing Manufacturing in India: The Complete Sourcing Guide', slug: 'private-label-clothing-manufacturing-india', excerpt: 'Everything US and Indian brands need to know about private label clothing manufacturing in India — factories, MOQs, sampling, quality control, and timelines.', category: 'Manufacturing & Sourcing', author: 'Heritage Apparels', created_at: '2025-03-20' },
      { title: 'How to Sell on Nykaa Fashion: Brand Onboarding & Catalogue Guide (2025)', slug: 'nykaa-fashion-brand-onboarding-guide', excerpt: 'Step-by-step guide to getting your fashion brand listed on Nykaa Fashion — eligibility, onboarding, catalogue standards, pricing, and driving sales after launch.', category: 'Marketplace Strategy', author: 'Heritage Apparels', created_at: '2025-03-12' },
    ];
  }

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Heritage Apparels Blog',
    description: 'Expert insights on fashion photography, digital marketing, and D2C brand growth.',
    publisher: { '@type': 'Organization', name: 'Heritage Apparels' },
    blogPost: posts.slice(0, 6).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.created_at,
      author: { '@type': 'Organization', name: post.author || 'Heritage Apparels' },
      url: `https://www.heritageapparels.com/blog/${post.slug}`,
    })),
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      {/* Hero */}
      <section className="py-24 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Knowledge Hub</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Insights for
            <span className="gradient-text italic"> Fashion Brands</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Expert articles on fashion photography, digital marketing, brand building, and D2C growth strategies — written by the team that&apos;s built 500+ fashion brands.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-charcoal border-b border-gold/10 sticky top-20 z-30 backdrop-blur-lg bg-charcoal/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium border border-gold/20 text-cream/60 cursor-pointer hover:border-gold hover:text-gold transition-colors whitespace-nowrap"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post: any) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-cream/40 text-lg">No articles yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#0f0f1e] border-t border-gold/10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">
            Never Miss an <span className="gradient-text italic">Insight</span>
          </h2>
          <p className="text-cream/60 mb-8">
            Get our weekly fashion brand strategy newsletter delivered to your inbox. No spam. Unsubscribe anytime.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="form-input flex-1" />
            <button type="submit" className="btn-gold whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>
    </main>
  );
}
