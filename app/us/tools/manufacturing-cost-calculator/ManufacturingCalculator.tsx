'use client';

import { useState } from 'react';
import Link from 'next/link';

const productCosts: Record<string, number> = {
  'T-Shirt': 7,
  'Hoodie / Sweatshirt': 10,
  'Dress': 9,
  'Activewear Set': 8,
  'Jacket / Outerwear': 14,
  'Jeans / Denim': 12,
  'Kids Clothing': 6,
  'Accessories / Bags': 8,
};

export default function ManufacturingCalculator() {
  const [product, setProduct] = useState('T-Shirt');
  const [qty, setQty] = useState(500);
  const [currentCost, setCurrentCost] = useState(22);

  const indiaCost = productCosts[product] || 8;
  const saving = Math.max(0, currentCost - indiaCost);
  const monthlySaving = saving * qty;
  const annualSaving = monthlySaving * 12;
  const threeYearSaving = annualSaving * 3;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-[#16213e] border border-gold/20 rounded-2xl p-8 mb-8">
        <h2 className="font-serif text-2xl font-bold text-cream mb-8">Enter Your Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-cream/60 text-sm mb-2">Product Type</label>
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full bg-charcoal border border-gold/20 rounded-lg px-4 py-3 text-cream text-sm focus:outline-none focus:border-gold/50"
            >
              {Object.keys(productCosts).map((p) => (<option key={p} value={p}>{p}</option>))}
            </select>
          </div>
          <div>
            <label className="block text-cream/60 text-sm mb-2">Monthly Quantity (pcs)</label>
            <input
              type="number"
              value={qty}
              onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 0))}
              className="w-full bg-charcoal border border-gold/20 rounded-lg px-4 py-3 text-cream text-sm focus:outline-none focus:border-gold/50"
            />
          </div>
          <div>
            <label className="block text-cream/60 text-sm mb-2">Your Current Cost/Piece ($)</label>
            <input
              type="number"
              value={currentCost}
              onChange={(e) => setCurrentCost(Math.max(1, parseFloat(e.target.value) || 0))}
              className="w-full bg-charcoal border border-gold/20 rounded-lg px-4 py-3 text-cream text-sm focus:outline-none focus:border-gold/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-6 bg-charcoal rounded-xl border border-gold/10 mb-6">
          <div className="text-center">
            <div className="text-cream/50 text-xs mb-1">Your Current Cost</div>
            <div className="text-cream font-bold text-2xl">${currentCost.toFixed(2)}<span className="text-sm text-cream/40">/piece</span></div>
          </div>
          <div className="text-center">
            <div className="text-gold text-xs mb-1 font-semibold">Heritage India Cost</div>
            <div className="gradient-text font-bold text-2xl">${indiaCost.toFixed(2)}<span className="text-sm text-cream/40">/piece</span></div>
          </div>
        </div>
      </div>

      {saving > 0 ? (
        <div className="bg-gradient-to-br from-amber-900/20 to-charcoal border border-gold/30 rounded-2xl p-8 mb-8">
          <h3 className="font-serif text-2xl font-bold text-cream mb-6 text-center">
            Your Estimated <span className="gradient-text">Savings with Heritage Apparels</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'Monthly Saving', value: `$${monthlySaving.toLocaleString()}`, sub: `${qty.toLocaleString()} pieces × $${saving.toFixed(2)} saving` },
              { label: 'Annual Saving', value: `$${annualSaving.toLocaleString()}`, sub: 'Every year you manufacture with us' },
              { label: '3-Year Saving', value: `$${threeYearSaving.toLocaleString()}`, sub: 'Long-term manufacturing advantage' },
            ].map((item) => (
              <div key={item.label} className="text-center bg-charcoal/50 rounded-xl p-5 border border-gold/10">
                <div className="text-cream/50 text-xs mb-1">{item.label}</div>
                <div className="gradient-text font-bold text-2xl mb-1">{item.value}</div>
                <div className="text-cream/40 text-xs">{item.sub}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-cream/60 text-sm">
            By switching to Heritage Apparels India manufacturing, you could save{' '}
            <strong className="text-gold">${annualSaving.toLocaleString()}/year</strong> on your manufacturing costs.
          </p>
        </div>
      ) : (
        <div className="bg-[#16213e] border border-gold/20 rounded-2xl p-8 mb-8 text-center">
          <p className="text-cream/60">Your current cost appears to already be competitive. Enter a higher current cost to see savings potential.</p>
        </div>
      )}

      <div className="text-center">
        <p className="text-cream/60 text-sm mb-6">Ready to get an exact quote for your product?</p>
        <Link href="/us/contact" className="btn-gold py-4 px-8 inline-block">Get Free India Manufacturing Quote →</Link>
        <p className="text-cream/30 text-xs mt-4">* Estimates based on typical India factory pricing. Exact quotes depend on fabric, quantity, and product complexity.</p>
      </div>
    </div>
  );
}
