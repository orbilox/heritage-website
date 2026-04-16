'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

const STORAGE_KEY = 'ha_exit_intent_shown';

export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '' });
  const triggered = useRef(false);
  const pathname = usePathname();
  const isUS = pathname?.startsWith('/us');

  useEffect(() => {
    // Don't show if already seen this session
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let timeout: ReturnType<typeof setTimeout>;

    const handleMouseLeave = (e: MouseEvent) => {
      if (triggered.current) return;
      // Only trigger when mouse exits from the top of the viewport
      if (e.clientY <= 10) {
        triggered.current = true;
        sessionStorage.setItem(STORAGE_KEY, '1');
        timeout = setTimeout(() => setOpen(true), 100);
      }
    };

    // Also trigger after 45s of page visit for mobile (no mouse events)
    const idleTimer = setTimeout(() => {
      if (!triggered.current && !sessionStorage.getItem(STORAGE_KEY)) {
        triggered.current = true;
        sessionStorage.setItem(STORAGE_KEY, '1');
        setOpen(true);
      }
    }, 45000);

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeout);
      clearTimeout(idleTimer);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          source: isUS ? 'exit-intent-us' : 'exit-intent-india',
          message: `Exit intent lead — ${isUS ? 'US' : 'India'} site`,
        }),
      });
    } catch {
      // Silent — don't block the user
    }
    setLoading(false);
    setSubmitted(true);
  };

  if (!open) return null;

  const services = isUS
    ? ['Performance Marketing', 'Marketplace Onboarding', 'Manufacturing & Sourcing', 'Brand Launch', 'Social Media', 'Compliance', 'Other']
    : ['Performance Marketing', 'Marketplace Onboarding', 'Manufacturing & Sourcing', 'Brand Launch', 'Fashion Photography', 'Digital Cataloging', 'Social Media & Reels', 'Other'];

  return (
    <>
      {/* Backdrop — must be above header (z-[10000]) and mobile menu (z-9999) */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[10001]"
        onClick={() => setOpen(false)}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[10002] flex items-center justify-center p-4 pointer-events-none">
        <div className="relative bg-[#13131f] border border-gold/20 rounded-2xl shadow-2xl w-full max-w-lg pointer-events-auto overflow-hidden">

          {/* Gold top bar */}
          <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500" />

          {/* Close button — positioned relative to modal card */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(201,168,76,0.2)',
              color: 'rgba(248,244,239,0.7)',
              fontSize: 20,
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
              zIndex: 10,
            }}
          >
            ×
          </button>

          <div className="p-8 pt-10">

            {submitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mx-auto mb-5 text-3xl">
                  ✓
                </div>
                <h3 className="font-serif text-2xl font-bold text-cream mb-3">
                  We&apos;ll be in touch <span className="gradient-text italic">within 2 hours</span>
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  Our team has received your details. Check your WhatsApp — we typically respond faster there.
                </p>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-6 btn-outline px-6 py-2 text-sm"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <p className="text-gold text-xs font-medium tracking-widest uppercase mb-2">
                    Wait — Before You Go
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream mb-3 leading-tight">
                    Get a Free{' '}
                    <span className="gradient-text italic">
                      {isUS ? 'US Market Audit' : 'Brand Growth Audit'}
                    </span>
                  </h2>
                  <p className="text-cream/60 text-sm leading-relaxed">
                    {isUS
                      ? 'Our US team reviews your brand and sends a free strategy — Amazon readiness, sourcing cost savings, and ROAS projections — within 48 hours.'
                      : 'Our team reviews your brand and sends a free report — marketplace potential, ad performance gaps, and growth opportunities — within 48 hours.'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your name *"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="col-span-2 sm:col-span-1 w-full bg-charcoal/60 border border-gold/20 rounded-lg px-4 py-3 text-cream text-sm placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="WhatsApp number *"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="col-span-2 sm:col-span-1 w-full bg-charcoal/60 border border-gold/20 rounded-lg px-4 py-3 text-cream text-sm placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email address *"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-charcoal/60 border border-gold/20 rounded-lg px-4 py-3 text-cream text-sm placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-colors"
                  />

                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-charcoal/60 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                    style={{ color: form.service ? '#f5f0e8' : 'rgba(245,240,232,0.3)' }}
                  >
                    <option value="" disabled>Which service are you interested in?</option>
                    {services.map((s) => (
                      <option key={s} value={s} style={{ color: '#1a1a2e', backgroundColor: '#f5f0e8' }}>
                        {s}
                      </option>
                    ))}
                  </select>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-3.5 text-sm font-semibold"
                  >
                    {loading ? 'Sending...' : isUS ? 'Get My Free US Audit →' : 'Get My Free Brand Audit →'}
                  </button>
                </form>

                <p className="text-cream/30 text-xs text-center mt-3">
                  No spam. No sales pitch. Just an honest assessment — delivered within 48 hours.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
