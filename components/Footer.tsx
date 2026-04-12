'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const indiaCityLinks = [
  { name: 'Mumbai', href: '/cities/mumbai' },
  { name: 'Delhi', href: '/cities/delhi' },
  { name: 'Bangalore', href: '/cities/bangalore' },
  { name: 'Tirupur', href: '/cities/tirupur' },
  { name: 'Surat', href: '/cities/surat' },
  { name: 'Jaipur', href: '/cities/jaipur' },
  { name: 'Kolkata', href: '/cities/kolkata' },
  { name: 'Ahmedabad', href: '/cities/ahmedabad' },
  { name: 'Hyderabad', href: '/cities/hyderabad' },
  { name: 'Pune', href: '/cities/pune' },
];

const usCityLinks = [
  { name: 'New York', href: '/us/cities/new-york' },
  { name: 'Los Angeles', href: '/us/cities/los-angeles' },
  { name: 'Chicago', href: '/us/cities/chicago' },
  { name: 'Miami', href: '/us/cities/miami' },
  { name: 'Dallas', href: '/us/cities/dallas' },
  { name: 'San Francisco', href: '/us/cities/san-francisco' },
  { name: 'Houston', href: '/us/cities/houston' },
  { name: 'Seattle', href: '/us/cities/seattle' },
  { name: 'Boston', href: '/us/cities/boston' },
  { name: 'Atlanta', href: '/us/cities/atlanta' },
];

const indiaMarketplaceLinks = [
  { name: 'Myntra', href: '/services/marketplace/myntra' },
  { name: 'Ajio', href: '/services/marketplace/ajio' },
  { name: 'Amazon India', href: '/services/marketplace/amazon-india' },
  { name: 'Flipkart', href: '/services/marketplace/flipkart' },
  { name: 'Nykaa Fashion', href: '/services/marketplace/nykaa-fashion' },
  { name: 'Meesho', href: '/services/marketplace/meesho' },
  { name: 'Tata CLiQ', href: '/services/marketplace/tata-cliq' },
  { name: 'Craftsvilla', href: '/services/marketplace/craftsvilla' },
];

const usMarketplaceLinks = [
  { name: 'Amazon.com', href: '/us/services/marketplace/amazon' },
  { name: 'Walmart', href: '/us/services/marketplace/walmart' },
  { name: 'Etsy', href: '/us/services/marketplace/etsy' },
  { name: 'TikTok Shop', href: '/us/services/marketplace/tiktok-shop' },
  { name: 'Shopify D2C', href: '/us/services/marketplace/shopify' },
  { name: 'Faire (B2B)', href: '/us/services/marketplace/faire' },
  { name: 'Nordstrom', href: '/us/services/marketplace/nordstrom' },
  { name: 'Poshmark', href: '/us/services/marketplace/poshmark' },
];

const services = [
  { name: 'Manufacturing & Sourcing', href: '/services/manufacturing-sourcing' },
  { name: 'D2C Brand Launch', href: '/services/brand-launch' },
  { name: 'Performance Marketing', href: '/services/performance-marketing' },
  { name: 'Brand Strategy & Identity', href: '/services/brand-strategy' },
  { name: 'Fashion Photoshoot', href: '/services/fashion-photoshoot' },
  { name: 'Digital Cataloging', href: '/services/digital-cataloging' },
  { name: 'E-commerce Setup & Growth', href: '/services/ecommerce-content' },
  { name: 'Social Media & Reels', href: '/services/social-media-reels' },
  { name: 'Marketplace Management', href: '/services' },
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Sitemap', href: '/sitemap-html' },
  { name: 'Privacy Policy', href: '/privacy' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const pathname = usePathname();
  const isUS = pathname?.startsWith('/us');
  const cityLinks = isUS ? usCityLinks : indiaCityLinks;
  const marketplaceLinks = isUS ? usMarketplaceLinks : indiaMarketplaceLinks;
  const cityLabel = isUS ? 'US Markets We Serve' : 'Cities We Serve';
  const marketplaceLabel = isUS ? 'US Marketplaces' : 'Marketplaces';

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribeStatus('loading');
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));
    setSubscribeStatus('success');
    setEmail('');
  };

  return (
    <footer className="bg-[#0d0d1a] border-t border-gold/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center font-serif font-bold text-charcoal text-lg">
                H
              </div>
              <div>
                <div className="font-serif font-bold text-cream text-lg leading-tight">
                  Heritage Apparels
                </div>
                <div className="text-gold text-xs tracking-widest uppercase opacity-80">
                  360° Fashion Brand Agency
                </div>
              </div>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              India&apos;s only end-to-end fashion brand-building agency — from our own manufacturing factory to performance marketing. We build D2C brands that dominate markets.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/heritageapparels"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all group"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-cream/60 group-hover:text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/heritageapparels"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all group"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 text-cream/60 group-hover:text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://behance.net/heritageapparels"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all group"
                aria-label="Behance"
              >
                <svg className="w-4 h-4 text-cream/60 group-hover:text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.836 1.9 2.101 1.9.73 0 1.447-.39 1.655-1.02h3zM16.108 12c-.025-.858-.418-1.665-1.65-1.665-.964 0-1.6.533-1.795 1.665h3.445zm-9.85-4h-4v8H6.3c2.4 0 3.7-1.1 3.7-4 0-2.5-1.35-4-3.842-4zm-.158 6H4.26V10h1.84c1.14 0 1.74.5 1.74 2 0 1.5-.6 2-1.74 2zm.108-10H2v2h4.208c.946 0 1.554-.506 1.554-1.252C7.762 4.506 7.154 4 6.108 4z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-bold text-cream text-lg mb-6 gold-border-left">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-cream/60 hover:text-gold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-cream text-lg mb-6 gold-border-left">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/60 hover:text-gold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-8">
              <h4 className="text-cream/40 text-xs uppercase tracking-wider mb-3">Contact</h4>
              <a href="tel:+919876543210" className="text-gold text-sm block mb-1 hover:underline">
                +91 98765 43210
              </a>
              <a href="mailto:hello@heritageapparels.com" className="text-cream/60 text-sm hover:text-gold transition-colors">
                hello@heritageapparels.com
              </a>
              <p className="text-cream/40 text-xs mt-2 leading-relaxed">
                Studio 12, Creative Hub<br />
                Andheri West, Mumbai 400053
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif font-bold text-cream text-lg mb-6 gold-border-left">Newsletter</h3>
            <p className="text-cream/60 text-sm mb-4 leading-relaxed">
              Get weekly insights on fashion photography, brand strategy, and D2C growth delivered to your inbox.
            </p>
            {subscribeStatus === 'success' ? (
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 text-gold text-sm text-center">
                ✓ You&apos;re subscribed! Welcome to the Heritage community.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="form-input text-sm py-3"
                />
                <button
                  type="submit"
                  disabled={subscribeStatus === 'loading'}
                  className="btn-gold w-full text-sm py-3 flex items-center justify-center gap-2"
                >
                  {subscribeStatus === 'loading' ? (
                    <>
                      <span className="spinner" />
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe to Insights'
                  )}
                </button>
              </form>
            )}

            <div className="mt-6 p-4 bg-gold/5 rounded-lg border border-gold/10">
              <p className="text-cream/50 text-xs leading-relaxed">
                🏭 Own factory + 360° services. <strong className="text-gold">500+ brands built</strong> across India. Your brand journey starts here.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cities + Marketplaces Internal Links */}
      <div className="border-t border-gold/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-cream/40 text-xs uppercase tracking-wider mb-4">{cityLabel}</h4>
              <div className="flex flex-wrap gap-2">
                {cityLinks.map((c) => (
                  <Link key={c.href} href={c.href} className="text-cream/50 hover:text-gold text-xs border border-gold/10 hover:border-gold/30 px-3 py-1.5 rounded-full transition-all">
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-cream/40 text-xs uppercase tracking-wider mb-4">{marketplaceLabel}</h4>
              <div className="flex flex-wrap gap-2">
                {marketplaceLinks.map((m) => (
                  <Link key={m.href} href={m.href} className="text-cream/50 hover:text-gold text-xs border border-gold/10 hover:border-gold/30 px-3 py-1.5 rounded-full transition-all">
                    {m.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Heritage Apparels. All rights reserved. Founded by <span className="text-cream/60">Rajiv Kumar</span>.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
            <span className="text-cream/30 text-xs">Pan-India Service</span>
            <span className="text-gold/30">|</span>
            <span className="text-cream/30 text-xs">Mumbai · Delhi · Bangalore</span>
            <span className="text-gold/30">|</span>
            <Link href="/sitemap-html" className="text-cream/40 hover:text-gold text-xs transition-colors">
              Sitemap
            </Link>
            <Link href="/robots.txt" className="text-cream/40 hover:text-gold text-xs transition-colors">
              robots.txt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
