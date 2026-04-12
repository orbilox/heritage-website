'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const indiaServices = [
  { name: 'Manufacturing & Sourcing',  href: '/services/manufacturing-sourcing',  icon: '🏭', desc: 'Own factory + accessories network' },
  { name: 'D2C Brand Launch',          href: '/services/brand-launch',            icon: '🚀', desc: 'Build your brand from scratch' },
  { name: 'Performance Marketing',     href: '/services/performance-marketing',   icon: '📈', desc: 'Meta, Google Ads — 4–8x ROAS' },
  { name: 'Brand Strategy & Identity', href: '/services/brand-strategy',          icon: '🎯', desc: 'Visual identity & brand positioning' },
  { name: 'Fashion Photoshoot',        href: '/services/fashion-photoshoot',      icon: '📸', desc: 'Studio & on-location fashion shoots' },
  { name: 'Digital Cataloging',        href: '/services/digital-cataloging',      icon: '📂', desc: '300+ SKUs/day, marketplace-ready' },
  { name: 'E-commerce Setup & Growth', href: '/services/ecommerce-content',       icon: '🛍️', desc: 'Shopify, SEO, CRO & full-funnel' },
  { name: 'Social Media & Reels',      href: '/services/social-media-reels',      icon: '🎬', desc: 'Reels, Stories & organic growth' },
  { name: 'Marketplace Onboarding',    href: '/services/marketplace-onboarding',  icon: '🌐', desc: '35+ platforms · Myntra, Amazon, Nykaa' },
];

const usServices = [
  { name: 'Manufacturing & Sourcing',  href: '/us/services/manufacturing-sourcing', icon: '🏭', desc: 'India factory · 35–60% cost saving' },
  { name: 'US Brand Launch',           href: '/us/services/brand-launch',           icon: '🚀', desc: 'Idea to first US sale in 45 days' },
  { name: 'Performance Marketing',     href: '/us/services/performance-marketing',  icon: '📈', desc: 'Meta, Google, TikTok · 4–8x ROAS' },
  { name: 'Brand Strategy & Identity', href: '/us/services/brand-strategy',         icon: '🎯', desc: 'US market positioning & visual identity' },
  { name: 'Product Photography',       href: '/us/services/fashion-photoshoot',     icon: '📸', desc: 'Amazon & Walmart compliant photos' },
  { name: 'Digital Cataloging',        href: '/us/services/digital-cataloging',     icon: '📂', desc: '300+ SKUs/day · US platform formats' },
  { name: 'Social Media & Content',    href: '/us/services/social-media-reels',     icon: '🎬', desc: 'TikTok, Instagram · US audience' },
  { name: 'Marketplace Onboarding',    href: '/us/services/marketplace-onboarding', icon: '🌐', desc: '35+ US platforms · Amazon, Walmart' },
  { name: 'US Compliance & Import',    href: '/us/services/compliance',             icon: '🛃', desc: 'CPSC, FDA, customs & import docs' },
];

export default function Header() {
  const [isScrolled,           setIsScrolled]           = useState(false);
  const [isMobileOpen,         setIsMobileOpen]         = useState(false);
  const [isServicesOpen,       setIsServicesOpen]       = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const pathname  = usePathname();
  const isUS      = pathname.startsWith('/us');
  const services  = isUS ? usServices : indiaServices;
  const homeHref  = isUS ? '/us' : '/';
  const contactHref  = isUS ? '/us/contact'  : '/contact';
  const servicesHref = isUS ? '/us/services' : '/services';

  const menuRef    = useRef<HTMLDivElement>(null);
  const touchFired = useRef(false);

  /* ── scroll detection ── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── body scroll lock when mobile menu is open ── */
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width    = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width    = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width    = '';
    };
  }, [isMobileOpen]);

  /* ── close mobile menu on route change ── */
  useEffect(() => {
    setIsMobileOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  const closeMobile = () => {
    setIsMobileOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════
          HEADER BAR
      ═══════════════════════════════════════════════ */}
      <header
        id="site-header"
        suppressHydrationWarning
        className={`fixed top-0 left-0 right-0 z-[10000] transition-all duration-500 ${
          isScrolled || isMobileOpen
            ? 'bg-[#1a1a2e] shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-b border-[#c9a84c]/10'
            : 'bg-[#1a1a2e]/20 lg:bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href={homeHref} className="flex items-center gap-3 group" onClick={closeMobile}>
              <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center font-serif font-bold text-[#1a1a2e] text-lg flex-shrink-0">
                H
              </div>
              <div className="hidden sm:block">
                <div className="font-serif font-bold text-[#f8f4ef] text-lg leading-tight group-hover:text-[#c9a84c] transition-colors">
                  Heritage Apparels
                </div>
                <div className="text-[#c9a84c] text-xs tracking-widest uppercase opacity-80">
                  {isUS ? '🇺🇸 USA · India Manufacturing' : '360° Fashion Brand Agency'}
                </div>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link href={homeHref} className="px-4 py-2 text-[#f8f4ef]/80 hover:text-[#c9a84c] text-sm font-medium transition-colors">
                Home
              </Link>
              {!isUS && (
                <Link href="/about" className="px-4 py-2 text-[#f8f4ef]/80 hover:text-[#c9a84c] text-sm font-medium transition-colors">
                  About
                </Link>
              )}

              {/* Services mega-menu (hover) */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="px-4 py-2 text-[#f8f4ef]/80 hover:text-[#c9a84c] text-sm font-medium transition-colors flex items-center gap-1">
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[740px] bg-[#1a1a2e] border border-[#c9a84c]/20 rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.6)] p-6 transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  {isUS && (
                    <div className="mb-4 pb-3 border-b border-[#c9a84c]/10 flex items-center gap-2">
                      <span className="text-base">🇺🇸</span>
                      <span className="text-blue-300 text-xs font-medium uppercase tracking-wider">United States Services</span>
                    </div>
                  )}
                  <div className="grid grid-cols-3 gap-3">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#c9a84c]/10 group transition-colors"
                      >
                        <span className="text-2xl">{s.icon}</span>
                        <div>
                          <div className="text-[#f8f4ef] font-medium text-sm group-hover:text-[#c9a84c] transition-colors">{s.name}</div>
                          <div className="text-[#f8f4ef]/50 text-xs mt-0.5">{s.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#c9a84c]/10">
                    <Link href={servicesHref} className="text-[#c9a84c] text-sm font-medium hover:underline">
                      View all services →
                    </Link>
                  </div>
                </div>
              </div>

              {isUS ? (
                <>
                  <Link href="/us/portfolio" className="px-4 py-2 text-[#f8f4ef]/80 hover:text-[#c9a84c] text-sm font-medium transition-colors">Portfolio</Link>
                  <Link href="/us/pricing"   className="px-4 py-2 text-[#f8f4ef]/80 hover:text-[#c9a84c] text-sm font-medium transition-colors">Pricing</Link>
                  <Link href="/us/blog"      className="px-4 py-2 text-[#f8f4ef]/80 hover:text-[#c9a84c] text-sm font-medium transition-colors">Blog</Link>
                </>
              ) : (
                <>
                  <Link href="/portfolio" className="px-4 py-2 text-[#f8f4ef]/80 hover:text-[#c9a84c] text-sm font-medium transition-colors">Portfolio</Link>
                  <Link href="/pricing"   className="px-4 py-2 text-[#f8f4ef]/80 hover:text-[#c9a84c] text-sm font-medium transition-colors">Pricing</Link>
                  <Link href="/blog"      className="px-4 py-2 text-[#f8f4ef]/80 hover:text-[#c9a84c] text-sm font-medium transition-colors">Blog</Link>
                </>
              )}
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              {isUS ? (
                <Link href="/" className="flex items-center gap-1.5 px-3 py-2 border border-[#c9a84c]/30 rounded-lg text-[#c9a84c]/70 text-xs font-medium hover:bg-[#c9a84c]/10 transition-colors">
                  <span className="text-base">🇮🇳</span> India
                </Link>
              ) : (
                <Link href="/us" className="flex items-center gap-1.5 px-3 py-2 border border-blue-400/30 rounded-lg text-blue-300 text-xs font-medium hover:bg-blue-500/10 transition-colors">
                  <span className="text-base">🇺🇸</span> USA
                </Link>
              )}
              <Link href={contactHref} className="btn-gold text-sm py-2.5 px-5">
                {isUS ? 'Book Free Call' : 'Get Started'}
              </Link>
            </div>

            {/* ── Hamburger Button (mobile only) ── */}
            <button
              type="button"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-nav"
              onClick={() => {
                if (touchFired.current) { touchFired.current = false; return; }
                setIsMobileOpen((prev) => !prev);
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
                touchFired.current = true;
                setIsMobileOpen((prev) => !prev);
              }}
              className="lg:hidden relative flex items-center justify-center rounded-lg"
              style={{
                minWidth: 48,
                minHeight: 48,
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
                background: isMobileOpen ? 'rgba(201,168,76,0.15)' : 'rgba(201,168,76,0.05)',
                border: '1.5px solid rgba(201,168,76,0.3)',
                zIndex: 200,
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <span className="sr-only">{isMobileOpen ? 'Close menu' : 'Open menu'}</span>
              <svg
                width="22" height="22"
                viewBox="0 0 22 22"
                fill="none"
                aria-hidden="true"
                style={{ display: 'block' }}
              >
                {/* Top bar */}
                <line
                  x1="3" y1="7" x2="19" y2="7"
                  stroke="#f8f4ef" strokeWidth="2" strokeLinecap="round"
                  style={{
                    transformOrigin: '11px 7px',
                    transform: isMobileOpen ? 'rotate(45deg) translate(0, 4px)' : 'none',
                    transition: 'transform 0.3s ease',
                  }}
                />
                {/* Middle bar */}
                <line
                  x1="3" y1="11" x2="19" y2="11"
                  stroke="#f8f4ef" strokeWidth="2" strokeLinecap="round"
                  style={{
                    opacity: isMobileOpen ? 0 : 1,
                    transition: 'opacity 0.2s ease',
                  }}
                />
                {/* Bottom bar */}
                <line
                  x1="3" y1="15" x2="19" y2="15"
                  stroke="#f8f4ef" strokeWidth="2" strokeLinecap="round"
                  style={{
                    transformOrigin: '11px 15px',
                    transform: isMobileOpen ? 'rotate(-45deg) translate(0, -4px)' : 'none',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </svg>
            </button>

          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════
          MOBILE MENU OVERLAY — rendered OUTSIDE <header>
          so it has its own stacking context at z-[99]
      ═══════════════════════════════════════════════ */}
      <div
        id="mobile-nav"
        ref={menuRef}
        aria-hidden={!isMobileOpen}
        className="lg:hidden"
        style={{
          position:   'fixed',
          top:        80,           /* sits below the 80px (h-20) header bar */
          left:       0,
          right:      0,
          bottom:     0,
          zIndex:     9999,
          background: '#1a1a2e',   /* solid — no backdrop-blur on mobile (perf) */
          overflowY:  'auto',
          overflowX:  'hidden',
          WebkitOverflowScrolling: 'touch',
          /* visibility + opacity for smooth open/close */
          opacity:    isMobileOpen ? 1 : 0,
          visibility: isMobileOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.25s ease, visibility 0.25s ease',
          pointerEvents: isMobileOpen ? 'auto' : 'none',
        }}
      >
        <nav className="flex flex-col px-5 py-6 gap-1">

          {/* ── Primary links ── */}
          <Link href={homeHref} onClick={closeMobile} style={linkStyle}>Home</Link>
          {!isUS && <Link href="/about" onClick={closeMobile} style={linkStyle}>About</Link>}

          {/* ── Services accordion ── */}
          <div>
            <button
              type="button"
              onClick={() => setIsMobileServicesOpen((prev) => !prev)}
              style={{
                ...linkStyle,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                background: 'none',
                cursor: 'pointer',
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
              } as React.CSSProperties}
            >
              <span>{isUS ? '🇺🇸 US Services' : 'Services'}</span>
              <svg
                width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                style={{ transform: isMobileServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease', flexShrink: 0 }}
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Service links */}
            <div style={{
              maxHeight: isMobileServicesOpen ? 600 : 0,
              overflow: 'hidden',
              transition: 'max-height 0.35s ease',
            }}>
              <div style={{ background: 'rgba(201,168,76,0.05)', borderRadius: 8, margin: '4px 0 4px 0', padding: '4px 0' }}>
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={closeMobile}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '12px 16px',
                      color: 'rgba(248,244,239,0.85)',
                      fontSize: 14,
                      borderBottom: '1px solid rgba(201,168,76,0.08)',
                      touchAction: 'manipulation',
                      WebkitTapHighlightColor: 'transparent',
                      textDecoration: 'none',
                    } as React.CSSProperties}
                  >
                    <span style={{ fontSize: 18 }}>{s.icon}</span>
                    <span>{s.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ── Secondary links ── */}
          {isUS ? (
            <>
              <Link href="/us/portfolio" onClick={closeMobile} style={linkStyle}>Portfolio</Link>
              <Link href="/us/pricing"   onClick={closeMobile} style={linkStyle}>Pricing</Link>
              <Link href="/us/blog"      onClick={closeMobile} style={linkStyle}>Blog</Link>
            </>
          ) : (
            <>
              <Link href="/portfolio" onClick={closeMobile} style={linkStyle}>Portfolio</Link>
              <Link href="/pricing"   onClick={closeMobile} style={linkStyle}>Pricing</Link>
              <Link href="/blog"      onClick={closeMobile} style={linkStyle}>Blog</Link>
            </>
          )}
          <Link href={contactHref} onClick={closeMobile} style={linkStyle}>Contact</Link>

          {/* ── CTA Buttons ── */}
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12, padding: '0 0' }}>
            <Link
              href={contactHref}
              onClick={closeMobile}
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '14px 24px',
                background: 'linear-gradient(135deg, #c9a84c 0%, #f5d98b 50%, #c9a84c 100%)',
                color: '#1a1a2e',
                fontWeight: 700,
                borderRadius: 8,
                fontSize: 15,
                textDecoration: 'none',
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
              } as React.CSSProperties}
            >
              {isUS ? 'Book a Free Strategy Call' : 'Get a Free Quote'}
            </Link>

            {isUS ? (
              <Link
                href="/"
                onClick={closeMobile}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: '13px 24px',
                  border: '1px solid rgba(201,168,76,0.3)',
                  borderRadius: 8,
                  color: 'rgba(201,168,76,0.8)',
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: 'none',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                } as React.CSSProperties}
              >
                🇮🇳 Switch to India Version
              </Link>
            ) : (
              <Link
                href="/us"
                onClick={closeMobile}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: '13px 24px',
                  border: '1px solid rgba(96,165,250,0.3)',
                  borderRadius: 8,
                  color: '#93c5fd',
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: 'none',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                } as React.CSSProperties}
              >
                🇺🇸 Switch to USA Version
              </Link>
            )}
          </div>

          {/* ── Contact info ── */}
          <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(201,168,76,0.1)' }}>
            <p style={{ color: 'rgba(248,244,239,0.4)', fontSize: 12, marginBottom: 8 }}>Get in touch</p>
            <a href="tel:+917889909135" style={{ color: '#c9a84c', fontWeight: 600, display: 'block', marginBottom: 6, fontSize: 15, textDecoration: 'none' }}>
              +91 78899 09135
            </a>
            <a href={`mailto:${isUS ? 'usa@heritageapparels.com' : 'hello@heritageapparels.com'}`} style={{ color: 'rgba(248,244,239,0.6)', fontSize: 13, textDecoration: 'none' }}>
              {isUS ? 'usa@heritageapparels.com' : 'hello@heritageapparels.com'}
            </a>
          </div>

          {/* Bottom spacer so content isn't hidden behind bottom bars */}
          <div style={{ height: 40 }} />
        </nav>
      </div>
    </>
  );
}

/* Shared style for mobile nav links */
const linkStyle: React.CSSProperties = {
  display: 'block',
  padding: '14px 16px',
  color: '#f8f4ef',
  fontWeight: 500,
  fontSize: 16,
  borderBottom: '1px solid rgba(201,168,76,0.08)',
  textDecoration: 'none',
  touchAction: 'manipulation',
  WebkitTapHighlightColor: 'transparent',
  minHeight: 48,
};
