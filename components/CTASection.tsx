'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name: 'Newsletter Subscriber', source: 'cta_section' }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg opacity-80" />
      <div className="absolute inset-0 pattern-overlay opacity-20" />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Decorative orbs */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-burgundy/15 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-gold/30 bg-gold/10">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-gold text-sm font-medium tracking-wider uppercase">
            Limited Slots Available This Month
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight">
          Ready to Elevate
          <br />
          <span className="gradient-text italic">Your Brand&apos;s Visual Story?</span>
        </h2>

        <p className="text-cream/70 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Join 500+ fashion brands that trust Heritage Apparels to create visuals that don&apos;t just look stunning — they drive conversions, reduce returns, and build lasting brand equity.
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
          {[
            { icon: '⚡', text: '48-Hour Turnaround' },
            { icon: '🔄', text: 'Unlimited Revisions' },
            { icon: '📋', text: 'Free Strategy Call' },
          ].map((benefit) => (
            <div key={benefit.text} className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-gold/15">
              <span className="text-lg">{benefit.icon}</span>
              <span className="text-cream/80 text-sm font-medium">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Email Form */}
        {status === 'success' ? (
          <div className="max-w-md mx-auto bg-gold/10 border border-gold/30 rounded-xl p-6 mb-8">
            <div className="text-3xl mb-3">🎉</div>
            <h3 className="font-serif text-xl text-gold font-bold mb-2">You&apos;re on the list!</h3>
            <p className="text-cream/70 text-sm">
              Our team will be in touch within 24 hours. Check your inbox for a confirmation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your business email"
                required
                className="form-input flex-1 text-base py-4"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-gold py-4 px-6 whitespace-nowrap flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <span className="spinner" />
                    Sending...
                  </>
                ) : (
                  'Get Free Quote'
                )}
              </button>
            </div>
            {status === 'error' && (
              <p className="text-red-400 text-sm mt-2">Something went wrong. Please try again or email us directly.</p>
            )}
          </form>
        )}

        {/* Alternative CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-outline text-base px-8 py-3.5">
            Book a Discovery Call
          </Link>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-cream/60 hover:text-gold transition-colors text-sm">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Trust line */}
        <p className="text-cream/30 text-xs mt-8">
          No spam, no commitment. Get a custom quote within 24 hours. NDA available.
        </p>
      </div>
    </section>
  );
}
