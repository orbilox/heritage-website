import type { Metadata } from 'next';
import ManufacturingCalculator from './ManufacturingCalculator';

export const metadata: Metadata = {
  title: 'India vs US Manufacturing Cost Calculator | Fashion Brands | Heritage Apparels',
  description: 'Calculate how much you save by manufacturing your fashion products in India vs USA or China. Free cost calculator for US fashion brand founders — see your annual savings instantly.',
  keywords: ['fashion manufacturing cost calculator', 'India vs US manufacturing cost', 'clothing manufacturing cost calculator', 'save on fashion manufacturing', 'India factory cost calculator'],
  alternates: { canonical: 'https://www.heritageapparels.com/us/tools/manufacturing-cost-calculator' },
};

export default function ManufacturingCostCalculatorPage() {
  return (
    <>
      <section className="py-28 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Free Tool</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6">India vs US Manufacturing <span className="gradient-text italic">Cost Calculator</span></h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl max-w-2xl mx-auto">See exactly how much you could save by switching to India manufacturing. Enter your product type, quantity, and current cost to get your savings estimate instantly.</p>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ManufacturingCalculator />
        </div>
      </section>

      <section className="py-16 bg-[#16213e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-cream mb-8 text-center">Typical India vs US Manufacturing <span className="gradient-text italic">Cost Comparison</span></h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gold/20">
                  <th className="text-left text-gold py-3 px-4">Product</th>
                  <th className="text-center text-cream/60 py-3 px-4">US Manufacturing</th>
                  <th className="text-center text-cream/60 py-3 px-4">China</th>
                  <th className="text-center text-gold py-3 px-4">Heritage India</th>
                  <th className="text-center text-green-400 py-3 px-4">Saving vs US</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { p: 'T-Shirt', us: '$18–22', cn: '$3–5', india: '$6–8', save: '64–73%' },
                  { p: 'Hoodie', us: '$28–38', cn: '$7–10', india: '$9–12', save: '68–76%' },
                  { p: 'Dress', us: '$22–35', cn: '$6–9', india: '$8–11', save: '69–75%' },
                  { p: 'Activewear Set', us: '$25–40', cn: '$6–10', india: '$7–10', save: '75–80%' },
                  { p: 'Kids Clothing', us: '$15–22', cn: '$4–7', india: '$5–8', save: '64–73%' },
                ].map((row) => (
                  <tr key={row.p} className="border-b border-gold/10 hover:bg-charcoal/50">
                    <td className="text-cream py-3 px-4 font-medium">{row.p}</td>
                    <td className="text-cream/60 py-3 px-4 text-center">{row.us}</td>
                    <td className="text-cream/60 py-3 px-4 text-center">{row.cn}</td>
                    <td className="text-gold py-3 px-4 text-center font-semibold">{row.india}</td>
                    <td className="text-green-400 py-3 px-4 text-center font-semibold">{row.save}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-cream/30 text-xs mt-4 text-center">Prices are indicative. Exact pricing depends on fabric, quantity, and complexity.</p>
        </div>
      </section>
    </>
  );
}
