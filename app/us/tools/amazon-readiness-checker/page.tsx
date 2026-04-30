import type { Metadata } from 'next';
import AmazonReadinessChecker from './AmazonReadinessChecker';

export const metadata: Metadata = {
  title: 'Amazon Fashion Brand Readiness Checker | Free Tool | Heritage Apparels',
  description: 'Is your fashion brand ready for Amazon.com? Take our free 10-question readiness checker and get a custom Amazon launch plan from Heritage Apparels.',
  keywords: ['Amazon fashion brand readiness', 'Amazon brand launch checker', 'is my brand ready for Amazon', 'Amazon fashion brand tool', 'Amazon brand readiness quiz'],
  alternates: { canonical: 'https://www.heritageapparels.com/us/tools/amazon-readiness-checker' },
};

export default function AmazonReadinessCheckerPage() {
  return (
    <>
      <section className="py-28 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Free Tool</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6">Amazon Fashion Brand <span className="gradient-text italic">Readiness Checker</span></h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl max-w-2xl mx-auto">10 questions. 3 minutes. Find out exactly what gaps to fix before launching your fashion brand on Amazon.com.</p>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AmazonReadinessChecker />
        </div>
      </section>
    </>
  );
}
