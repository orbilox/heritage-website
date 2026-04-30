import type { Metadata } from 'next';
import BrandLaunchChecklist from './BrandLaunchChecklist';

export const metadata: Metadata = {
  title: 'Fashion Brand Launch Checklist USA 2025 | Free Tool | Heritage Apparels',
  description: 'Complete 47-point checklist for launching a fashion brand in the USA. Brand identity, manufacturing, Shopify, Amazon, and marketing — track your progress interactively.',
  keywords: ['fashion brand launch checklist USA', 'clothing brand launch checklist', 'fashion brand startup checklist USA', 'how to launch fashion brand checklist'],
  alternates: { canonical: 'https://www.heritageapparels.com/us/tools/brand-launch-checklist' },
};

export default function BrandLaunchChecklistPage() {
  return (
    <>
      <section className="py-28 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Free Tool</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6">Fashion Brand Launch <span className="gradient-text italic">Checklist USA 2025</span></h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl max-w-2xl mx-auto">47 items across 6 stages — brand foundation, manufacturing, photography, Shopify, marketplaces, and launch marketing. Check items off as you complete them.</p>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BrandLaunchChecklist />
        </div>
      </section>
    </>
  );
}
