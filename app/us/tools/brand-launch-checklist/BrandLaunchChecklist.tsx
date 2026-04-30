'use client';

import { useState } from 'react';
import Link from 'next/link';

const sections = [
  {
    title: '1. Brand Foundation',
    icon: '🎯',
    items: [
      'Define your target customer (age, location, income, lifestyle)',
      'Choose your niche (activewear, sustainable, luxury, kidswear…)',
      'Research top 10 Amazon competitors in your niche',
      'Choose your brand name (US market appropriate)',
      'Design your logo and colour palette',
      'Write your brand story (why you exist)',
      'Define your pricing strategy (cost × 5–8 = retail)',
      'Register your trademark (USPTO — start now, takes 8–12 months)',
    ],
  },
  {
    title: '2. Product & Manufacturing',
    icon: '🏭',
    items: [
      'Create tech pack for each product style',
      'Select India manufacturer (or use Heritage Apparels)',
      'Request samples from 2–3 factories',
      'Approve final production sample',
      'Place bulk production order',
      'Arrange 3rd-party QC inspection',
      'Complete CPSC compliance testing (if children\'s wear)',
      'Design custom labels and packaging',
    ],
  },
  {
    title: '3. Photography & Content',
    icon: '📸',
    items: [
      'White-background product shots (Amazon main image)',
      'Lifestyle photography with US-market models',
      'Size chart graphic created',
      'Infographic images for Amazon A+ Content',
      'Brand video (15–30 seconds) for ads',
      'TikTok content batch (10 videos pre-launch)',
    ],
  },
  {
    title: '4. Shopify Store',
    icon: '🛍️',
    items: [
      'Domain name purchased',
      'Shopify theme installed and customised',
      'Products uploaded with optimised descriptions',
      'US payment setup (Stripe, PayPal, Shop Pay)',
      'US shipping zones configured',
      'Automatic tax calculation enabled',
      'Klaviyo email flows installed (welcome, abandoned cart)',
      'Meta Pixel and Google Analytics installed',
    ],
  },
  {
    title: '5. Marketplace Setup',
    icon: '🌐',
    items: [
      'Amazon seller account created',
      'Amazon Brand Registry applied',
      'Amazon listings live with 7 images',
      'Amazon A+ Content published',
      'Walmart Marketplace application submitted',
      'TikTok Shop account setup',
    ],
  },
  {
    title: '6. Marketing Launch',
    icon: '📣',
    items: [
      'Meta Ads account setup with Pixel verified',
      'Google Ads account created',
      'First Meta campaign launched ($100/day min)',
      'Instagram profile optimised (bio, link, highlights)',
      'TikTok profile optimised',
      'Email welcome flow tested and live',
      'Influencer / creator outreach sent (20 micro-influencers)',
    ],
  },
];

export default function BrandLaunchChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const totalItems = sections.reduce((acc, s) => acc + s.items.length, 0);
  const completedItems = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((completedItems / totalItems) * 100);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress */}
      <div className="bg-[#16213e] border border-gold/20 rounded-2xl p-6 mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-cream font-semibold">{completedItems} of {totalItems} items complete</span>
          <span className="gradient-text font-bold text-xl">{progress}%</span>
        </div>
        <div className="w-full bg-charcoal rounded-full h-3 overflow-hidden">
          <div
            className="h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #c9a84c, #f5d98b)' }}
          />
        </div>
        {progress === 100 && (
          <p className="text-gold text-sm mt-3 text-center font-semibold">🎉 You&apos;re launch-ready! Time to go live.</p>
        )}
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {sections.map((section) => {
          const sectionCompleted = section.items.filter((item) => checked[`${section.title}:${item}`]).length;
          return (
            <div key={section.title} className="bg-[#16213e] border border-gold/15 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gold/10">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{section.icon}</span>
                  <h3 className="font-semibold text-cream">{section.title}</h3>
                </div>
                <span className="text-gold text-sm font-medium">{sectionCompleted}/{section.items.length}</span>
              </div>
              <div className="divide-y divide-gold/5">
                {section.items.map((item) => {
                  const key = `${section.title}:${item}`;
                  const isChecked = checked[key];
                  return (
                    <button
                      key={item}
                      onClick={() => toggle(key)}
                      className="w-full flex items-start gap-4 px-6 py-4 text-left hover:bg-charcoal/30 transition-colors"
                    >
                      <div className={`mt-0.5 w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border transition-all ${isChecked ? 'bg-gold border-gold' : 'border-gold/30 bg-transparent'}`}>
                        {isChecked && <span className="text-[#1a1a2e] text-xs font-bold">✓</span>}
                      </div>
                      <span className={`text-sm leading-relaxed transition-colors ${isChecked ? 'text-cream/40 line-through' : 'text-cream/80'}`}>{item}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <p className="text-cream/60 text-sm mb-6">Need help completing these steps? Our team handles everything on this checklist.</p>
        <Link href="/us/contact" className="btn-gold py-4 px-8 inline-block">Get Help Launching Your Brand →</Link>
      </div>
    </div>
  );
}
