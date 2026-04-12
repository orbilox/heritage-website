import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import WhyUs from '@/components/WhyUs';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import BlogCard from '@/components/BlogCard';
import ContactForm from '@/components/ContactForm';
import { getRecentBlogPosts, type BlogPost } from '@/lib/db';

export const metadata: Metadata = {
  title: 'Heritage Apparels | 360° Fashion Brand Building Agency India',
  description:
    'Heritage Apparels — India\'s only end-to-end fashion brand-building agency. Own manufacturing factory, D2C brand launches, performance marketing, digital cataloging, and marketplace management. Factory to consumer. 500+ brands built.',
  keywords: [
    'fashion brand building agency India',
    'D2C brand launch agency',
    'fashion manufacturing sourcing India',
    '360 degree fashion agency',
    'performance marketing fashion brands',
    'digital catalog services India',
    'Myntra Nykaa brand management',
    'fashion ecommerce agency',
    'factory to consumer fashion',
    'fashion accessories sourcing India',
  ],
};

const processSteps = [
  {
    step: '01',
    title: 'Factory & Product',
    description: 'We source and manufacture your collection from our own factory and accessories network. Private label, custom design, or OEM — we handle it all with strict QA.',
    icon: '🏭',
  },
  {
    step: '02',
    title: 'Brand & Strategy',
    description: 'We build your brand identity from the ground up — naming, logo, positioning, packaging, and a complete visual bible that sets you apart in a crowded market.',
    icon: '🎯',
  },
  {
    step: '03',
    title: 'Content & Catalog',
    description: 'Fashion photoshoots, digital catalogs, Reels, and ad creatives — all produced in our state-of-the-art studio or on location across India.',
    icon: '📸',
  },
  {
    step: '04',
    title: 'Launch & Scale',
    description: 'We launch your brand on D2C website, Myntra, Nykaa, Amazon, and beyond — then scale with performance marketing, SEO, and marketplace management.',
    icon: '🚀',
  },
];

const clientLogos = [
  { name: 'FABINDIA', category: 'Ethnic Wear' },
  { name: 'W FOR WOMAN', category: 'Women\'s Fashion' },
  { name: 'MANYAVAR', category: 'Men\'s Ethnic' },
  { name: 'DA MILANO', category: 'Luxury Accessories' },
  { name: 'HRX', category: 'Athleisure' },
  { name: 'LIBAS', category: 'Ethnic Fashion' },
  { name: 'BIBA', category: 'Women\'s Ethnic' },
  { name: 'AURELIA', category: 'Contemporary Ethnic' },
];

export default async function HomePage() {
  let recentPosts: BlogPost[] = [];
  try {
    recentPosts = getRecentBlogPosts(3);
  } catch {
    recentPosts = [];
  }

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Heritage Apparels - Fashion Photography & Digital Cataloging Agency',
    description: 'India\'s premier fashion photography and digital cataloging agency for D2C brands.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.heritageapparels.com',
    mainEntity: {
      '@type': 'Organization',
      name: 'Heritage Apparels',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.heritageapparels.com',
      logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.heritageapparels.com'}/logo.png`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* 1. Hero Section */}
      <Hero />

      {/* 3. Services Overview */}
      <ServicesSection />

      {/* 4. Why Heritage Apparels */}
      <WhyUs />

      {/* 4b. Factory Advantage Section */}
      <section className="py-20 bg-[#0f0f1e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-10" />
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left Text */}
            <div>
              <p className="section-label mb-4">Our Unfair Advantage</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6 leading-tight">
                We Own the Factory.
                <br />
                <span className="gradient-text italic">You Own the Brand.</span>
              </h2>
              <div className="gold-divider mb-8" style={{ margin: '24px 0' }} />
              <p className="text-cream/60 text-lg leading-relaxed mb-6">
                Most agencies outsource production. We don&apos;t. Heritage Apparels operates its own clothing manufacturing facility and maintains an exclusive network of India&apos;s finest accessories, footwear, and textile factories — giving your brand a cost, speed, and quality advantage that no competitor can match.
              </p>
              <p className="text-cream/60 text-lg leading-relaxed mb-8">
                Whether you need private-label clothing, custom accessories, or a full product range designed from scratch, we produce it, brand it, shoot it, and sell it — all under one roof.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: '👗', label: 'Clothing Factory', desc: 'Own manufacturing unit for apparel' },
                  { icon: '👜', label: 'Accessories Network', desc: 'Bags, jewellery, footwear & more' },
                  { icon: '🏷️', label: 'Private Labeling', desc: 'Full white-label & OEM services' },
                  { icon: '✅', label: 'Quality Control', desc: 'Strict QA before every delivery' },
                ].map((item) => (
                  <div key={item.label} className="glass-card p-4">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-cream font-semibold text-sm mb-1">{item.label}</div>
                    <div className="text-cream/50 text-xs">{item.desc}</div>
                  </div>
                ))}
              </div>
              <Link href="/services/manufacturing-sourcing" className="btn-gold inline-block">
                Explore Manufacturing Services
              </Link>
            </div>
            {/* Right Visual */}
            <div className="space-y-4">
              <div className="glass-card p-8 border-l-4 border-gold">
                <div className="text-4xl mb-3">🏭</div>
                <h3 className="font-serif text-2xl font-bold text-cream mb-2">Own Clothing Factory</h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  Our in-house manufacturing facility handles everything from fabric sourcing and cutting to stitching, finishing, and QA — giving you premium quality at factory-direct prices.
                </p>
              </div>
              <div className="glass-card p-8 border-l-4 border-burgundy">
                <div className="text-4xl mb-3">🌐</div>
                <h3 className="font-serif text-2xl font-bold text-cream mb-2">Accessories Partner Network</h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  Access our curated network of vetted factories across India producing fashion accessories, jewellery, footwear, bags, and lifestyle products — all under strict quality standards.
                </p>
              </div>
              <div className="bg-gold/10 border border-gold/20 rounded-xl p-6">
                <div className="font-serif text-3xl font-bold gradient-text mb-1">30 Days</div>
                <div className="text-cream/60 text-sm">Average time from product idea to brand launch with our integrated factory + marketing pipeline.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Section */}
      <section className="py-24 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-15" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <p className="section-label mb-4">How We Work</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6">
              Factory to Consumer —
              <span className="gradient-text italic"> Our 4-Phase Journey</span>
            </h2>
            <div className="gold-divider mx-auto" />
            <p className="text-cream/60 text-lg max-w-2xl mx-auto mt-6">
              We are the only agency that can take you from raw product manufacturing all the way to a fully scaled brand with paying customers. Here is exactly how we do it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-gold/30 to-transparent z-0" />
                )}

                <div className="glass-card p-8 text-center relative z-10 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold text-xs font-bold">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4 mt-2">{step.icon}</div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-cream mb-3 group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-cream/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-gold inline-block">
              Start Your Brand Journey
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Portfolio Preview */}
      <Portfolio />

      {/* 7. Client Logos */}
      <section className="py-16 bg-charcoal border-y border-gold/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-cream/40 text-sm uppercase tracking-widest mb-10">
            Trusted by India&apos;s Leading Fashion Brands
          </p>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-charcoal to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-charcoal to-transparent z-10" />
            <div className="flex items-center gap-16 overflow-hidden">
              <div className="logo-ticker">
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className="flex-shrink-0 text-center"
                  >
                    <div className="text-cream/30 font-serif font-bold text-xl tracking-widest hover:text-gold transition-colors cursor-default">
                      {logo.name}
                    </div>
                    <div className="text-cream/20 text-xs tracking-wider mt-1">{logo.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Blog Preview */}
      <section className="py-24 bg-charcoal relative">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Knowledge Hub</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6">
              Insights for
              <span className="gradient-text italic"> Fashion Brands</span>
            </h2>
            <div className="gold-divider mx-auto" />
            <p className="text-cream/60 text-lg max-w-2xl mx-auto mt-6">
              Expert articles on fashion photography, digital marketing, brand strategy, and D2C growth.
            </p>
          </div>

          {recentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: '10 Fashion Photography Trends Dominating D2C Brands in 2025',
                  slug: 'fashion-photography-trends-d2c-2025',
                  excerpt: 'Discover the top fashion photography trends that are helping D2C brands achieve higher conversion rates and stronger brand identities.',
                  category: 'Fashion Photography',
                  author: 'Heritage Apparels',
                  created_at: new Date().toISOString(),
                },
                {
                  title: 'The Complete Guide to Digital Cataloging for Fashion E-commerce',
                  slug: 'complete-guide-digital-cataloging-fashion-ecommerce',
                  excerpt: 'A comprehensive guide to creating professional digital catalogs that convert browsers into buyers for fashion e-commerce brands.',
                  category: 'Digital Cataloging',
                  author: 'Heritage Apparels',
                  created_at: new Date().toISOString(),
                },
                {
                  title: 'ROI of Professional Fashion Photography: The Numbers Don\'t Lie',
                  slug: 'roi-professional-fashion-photography-data',
                  excerpt: 'Hard data on how professional fashion photography impacts conversion rates, return rates, and brand perception for D2C brands.',
                  category: 'Business Strategy',
                  author: 'Heritage Apparels',
                  created_at: new Date().toISOString(),
                },
              ].map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <Link href="/blog" className="btn-outline inline-block">
              Read All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Lead CTA */}
      <CTASection />

      {/* 11. Contact Quick Form */}
      <section className="py-24 bg-[#0f0f1e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <p className="section-label mb-4">Get In Touch</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6 leading-tight">
                Let&apos;s Build Your
                <br />
                <span className="gradient-text italic">Brand Vision Together</span>
              </h2>
              <div className="gold-divider mb-6" style={{ margin: '24px 0' }} />
              <p className="text-cream/60 text-lg leading-relaxed mb-8">
                Ready to build a brand that dominates the fashion market? Whether you need manufacturing, a brand launch, digital catalogs, or full-scale performance marketing — share your vision and we&apos;ll craft a 360° roadmap tailored to your goals.
              </p>

              {/* Contact details */}
              <div className="space-y-4">
                {[
                  { icon: '📞', label: 'Call Us', value: '+91 98765 43210', href: 'tel:+919876543210' },
                  { icon: '📧', label: 'Email Us', value: 'hello@heritageapparels.com', href: 'mailto:hello@heritageapparels.com' },
                  { icon: '📍', label: 'Studio', value: 'Andheri West, Mumbai — Pan-India Service', href: null },
                  { icon: '⏰', label: 'Hours', value: 'Mon–Fri: 9am–7pm | Sat: 10am–5pm', href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-cream/40 text-xs uppercase tracking-wider mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-cream hover:text-gold transition-colors font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-cream/80 font-medium">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div className="glass-card p-8">
              <h3 className="font-serif text-2xl font-bold text-cream mb-2">Send Us a Brief</h3>
              <p className="text-cream/50 text-sm mb-6">We respond within 24 business hours.</p>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
