import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { usBlogPosts, getUSBlogPostBySlug } from '@/lib/us-blog-data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.heritageapparels.com';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return usBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getUSBlogPostBySlug(params.slug);
  if (!post) return { title: 'Article Not Found | Heritage Apparels USA' };

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `${siteUrl}/us/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      locale: 'en_US',
      url: `${siteUrl}/us/blog/${post.slug}`,
    },
  };
}

export default function USBlogPostPage({ params }: Props) {
  const post = getUSBlogPostBySlug(params.slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Heritage Apparels USA',
      url: `${siteUrl}/us`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Heritage Apparels',
      logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.png` },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/us/blog/${post.slug}`,
    },
    keywords: post.keywords.join(', '),
    inLanguage: 'en-US',
    about: {
      '@type': 'Thing',
      name: post.category,
    },
  };

  // Related posts (other 2 from same category, or random)
  const related = usBlogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2)
    .concat(
      usBlogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category).slice(0, 2)
    )
    .slice(0, 2);

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="py-16 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            href="/us/blog"
            className="text-gold/70 text-sm hover:text-gold mb-6 block transition-colors"
          >
            ← Back to US Knowledge Hub
          </Link>

          <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium mb-4">
            {post.icon} {post.category}
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-cream/70 text-lg leading-relaxed mb-6">{post.excerpt}</p>

          <div className="flex items-center gap-4 text-cream/50 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-xs font-bold text-gold">
                H
              </div>
              <span>{post.author}</span>
            </div>
            <span>{post.date}</span>
            <span className="px-2 py-0.5 bg-gold/10 rounded text-gold text-xs">{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-cream
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-cream/70 prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-gold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-cream
              prose-li:text-cream/70 prose-ul:my-4 prose-li:my-1
              prose-ol:my-4
              prose-table:text-sm prose-th:text-cream prose-td:text-cream/70
              prose-blockquote:border-l-4 prose-blockquote:border-gold prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-cream/60"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-gold/10">
            <p className="text-cream/40 text-sm mb-4">Share this article</p>
            <div className="flex items-center gap-3">
              {[
                {
                  name: 'LinkedIn',
                  icon: 'in',
                  href: `https://www.linkedin.com/sharing/share-offsite/?url=${siteUrl}/us/blog/${post.slug}`,
                },
                {
                  name: 'Twitter/X',
                  icon: 'X',
                  href: `https://twitter.com/intent/tweet?url=${siteUrl}/us/blog/${post.slug}&text=${encodeURIComponent(post.title)}`,
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-colors text-xs font-bold"
                  title={`Share on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-16 bg-[#0d1b3e] border-t border-gold/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-cream mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/us/blog/${rel.slug}`}
                  className={`glass-card p-6 group hover:border-gold/30 transition-all bg-gradient-to-br ${rel.color} border ${rel.border}`}
                >
                  <div className="text-2xl mb-3">{rel.icon}</div>
                  <span className="text-gold text-xs font-medium">{rel.category}</span>
                  <h3 className="font-serif text-lg font-bold text-cream mt-2 mb-2 leading-snug group-hover:text-gold transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-cream/50 text-sm line-clamp-2">{rel.excerpt}</p>
                  <span className="text-gold text-sm mt-4 block font-medium">Read article →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-charcoal border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">
            Ready to Apply These <span className="gradient-text italic">Insights?</span>
          </h2>
          <p className="text-cream/60 mb-8 leading-relaxed">
            Talk to our US market team about sourcing from India, launching on US marketplaces, or scaling your US brand with performance marketing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/us/contact" className="btn-gold px-8 py-4">
              Book a Free US Strategy Call
            </Link>
            <Link href="/us/blog" className="btn-outline px-8 py-4">
              Read More Articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
