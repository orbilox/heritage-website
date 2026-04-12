'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const services = [
  'Manufacturing & Sourcing',
  '360° Brand Building',
  'D2C Brand Launches',
  'Performance Marketing',
  'Digital Cataloging',
  'Marketplace Management',
];

export default function Hero() {
  const [currentService, setCurrentService] = useState(0);
  const [fade, setFade] = useState(true);

  // Only controls the rotating service text — NOT page visibility
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentService((prev) => (prev + 1) % services.length);
        setFade(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ minHeight: '100svh' }}>
      {/* Background — always visible, no JS needed */}
      <div className="absolute inset-0 animated-bg" style={{ pointerEvents: 'none' }} />
      <div className="absolute inset-0 pattern-overlay opacity-40" style={{ pointerEvents: 'none' }} />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float" style={{ pointerEvents: 'none' }} />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-burgundy/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '2s', pointerEvents: 'none' }}
      />

      {/* Vertical accent lines — desktop only */}
      <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block" style={{ pointerEvents: 'none' }} />
      <div className="absolute right-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block" style={{ pointerEvents: 'none' }} />

      {/* ── Main Content ── */}
      <div
        className="hero-content-wrap relative z-10 flex flex-col items-center text-center px-4 sm:px-6 pb-24 max-w-6xl mx-auto w-full"
        style={{ paddingTop: '9rem' }}
      >

        {/* Badge */}
        <div
          className="hero-animate inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm"
          style={{ animationDelay: '0ms' }}
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse flex-shrink-0" />
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase">
            India&apos;s #1 End-to-End Fashion Brand Building Agency
          </span>
        </div>

        {/* Brand name */}
        <div
          className="hero-animate mb-5"
          style={{ animationDelay: '100ms' }}
        >
          <h1 className="font-serif font-bold text-cream leading-none tracking-tight">
            <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-[7rem]">Heritage</span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-cream/90">
              App Reels
            </span>
          </h1>
        </div>

        {/* Gold divider */}
        <div
          className="hero-animate flex items-center justify-center gap-4 mb-7"
          style={{ animationDelay: '180ms' }}
        >
          <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-gold/60" />
          <span className="text-gold/70 text-xs tracking-[0.35em] uppercase font-medium whitespace-nowrap">
            Factory to Consumer
          </span>
          <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* Rotating service pill */}
        <div
          className="hero-animate flex justify-center mb-8"
          style={{ animationDelay: '260ms' }}
        >
          <div className="flex items-center gap-3 px-5 py-2.5 bg-charcoal/60 border border-gold/25 rounded-lg backdrop-blur-sm">
            <span className="text-cream/50 text-sm">Specialising in</span>
            <span
              className="text-gold font-semibold text-sm sm:text-base w-52 text-left transition-opacity duration-300"
              style={{ opacity: fade ? 1 : 0 }}
            >
              {services[currentService]}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse flex-shrink-0" />
          </div>
        </div>

        {/* Value proposition */}
        <div
          className="hero-animate"
          style={{ animationDelay: '340ms' }}
        >
          <p className="text-cream/80 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto mb-3 leading-relaxed font-medium">
            We build fashion brands from your factory floor
            <br className="hidden sm:block" /> to market-dominating labels.
          </p>
          <p className="text-cream/50 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Manufacturing · Brand Identity · Digital Catalogs · Performance Marketing ·
            Marketplace Management — all under one roof. 500+ brands built across India.
          </p>
        </div>

        {/* CTAs */}
        <div
          className="hero-animate flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ animationDelay: '420ms' }}
        >
          <Link
            href="/contact"
            className="btn-gold text-sm sm:text-base px-8 py-4 min-w-[200px] text-center"
          >
            Build My Brand Now
          </Link>
          <Link
            href="/services"
            className="btn-outline text-sm sm:text-base px-8 py-4 min-w-[200px] text-center"
          >
            Explore 360° Services →
          </Link>
        </div>

        {/* Stats row */}
        <div
          className="hero-animate grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-2xl mx-auto w-full pt-8 border-t border-gold/10"
          style={{ animationDelay: '560ms' }}
        >
          {[
            { value: '500+', label: 'Brands Built' },
            { value: '4–8x', label: 'Avg ROAS' },
            { value: '30 Days', label: 'Brand Launch' },
            { value: '98%', label: 'Client Retention' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold font-serif mb-1"
                style={{
                  background: 'linear-gradient(135deg, #c9a84c 0%, #e8d08a 50%, #c9a84c 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </div>
              <div className="text-cream/50 text-xs uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ pointerEvents: 'none' }}>
        <span className="text-cream/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border border-gold/30 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent" style={{ pointerEvents: 'none' }} />
    </section>
  );
}
