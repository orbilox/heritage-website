import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPostBySlug, getAllPublishedBlogPosts } from '@/lib/db';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  try {
    const posts = getAllPublishedBlogPosts();
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = getBlogPostBySlug(params.slug);
    if (!post) return { title: 'Article Not Found | Heritage Apparels' };

    return {
      title: post.meta_title || `${post.title} | Heritage Apparels`,
      description: post.meta_description || post.excerpt,
      keywords: [post.category || '', 'fashion photography', 'Heritage Apparels'],
      openGraph: {
        title: post.meta_title || post.title,
        description: post.meta_description || post.excerpt,
        type: 'article',
        publishedTime: post.created_at,
        authors: [post.author || 'Heritage Apparels'],
      },
    };
  } catch {
    return { title: 'Article | Heritage Apparels' };
  }
}

export default async function BlogPostPage({ params }: Props) {
  let post;
  try {
    post = getBlogPostBySlug(params.slug);
  } catch {
    post = null;
  }

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.created_at,
    author: {
      '@type': 'Organization',
      name: post.author || 'Heritage Apparels',
      url: 'https://www.heritageapparels.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Heritage Apparels',
      logo: { '@type': 'ImageObject', url: 'https://www.heritageapparels.com/logo.png' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.heritageapparels.com/blog/${post.slug}`,
    },
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="py-16 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/blog" className="text-gold/70 text-sm hover:text-gold mb-6 block">← Back to Blog</Link>

          {post.category && (
            <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium mb-4">
              {post.category}
            </span>
          )}

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6 leading-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-cream/70 text-lg leading-relaxed mb-6">{post.excerpt}</p>
          )}

          <div className="flex items-center gap-4 text-cream/50 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-xs font-bold text-gold">
                H
              </div>
              <span>{post.author || 'Heritage Apparels'}</span>
            </div>
            {post.created_at && (
              <span>
                {new Date(post.created_at).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
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
              prose-blockquote:border-l-4 prose-blockquote:border-gold prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-cream/60"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />

          {/* Share section */}
          <div className="mt-12 pt-8 border-t border-gold/10">
            <p className="text-cream/40 text-sm mb-4">Share this article</p>
            <div className="flex items-center gap-3">
              {[
                { name: 'LinkedIn', icon: 'in', href: `https://www.linkedin.com/sharing/share-offsite/?url=https://www.heritageapparels.com/blog/${post.slug}` },
                { name: 'Twitter/X', icon: 'X', href: `https://twitter.com/intent/tweet?url=https://www.heritageapparels.com/blog/${post.slug}&text=${encodeURIComponent(post.title)}` },
                { name: 'WhatsApp', icon: 'W', href: `https://wa.me/?text=${encodeURIComponent(post.title + ' - https://www.heritageapparels.com/blog/' + post.slug)}` },
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

      {/* CTA */}
      <section className="py-16 bg-[#0f0f1e] border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">
            Ready to Apply These <span className="gradient-text italic">Insights?</span>
          </h2>
          <p className="text-cream/60 mb-8 leading-relaxed">
            Talk to our team about how we can implement these strategies for your brand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold px-8 py-4">Book a Discovery Call</Link>
            <Link href="/blog" className="btn-outline px-8 py-4">Read More Articles</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
