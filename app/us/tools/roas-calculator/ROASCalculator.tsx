'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Results {
  roas: number;
  grossProfit: number;
  netProfitMargin: number;
  monthlyProfit: number;
}

interface BenchmarkInfo {
  label: string;
  color: string;
  bg: string;
  border: string;
  icon: string;
  message: string;
}

function getBenchmark(roas: number): BenchmarkInfo {
  if (roas < 2) {
    return {
      label: 'Below Average',
      color: 'text-red-400',
      bg: 'bg-red-500/10',
      border: 'border-red-500/30',
      icon: '⚠️',
      message: 'Your ROAS needs serious attention. Ads are likely losing money after COGS and operating expenses.',
    };
  }
  if (roas < 4) {
    return {
      label: 'Average',
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/30',
      icon: '📊',
      message: "You're in the average range. There's significant room to grow through better targeting, creatives, and funnel optimization.",
    };
  }
  if (roas < 8) {
    return {
      label: 'Good — Heritage Apparels Average',
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      border: 'border-green-500/30',
      icon: '✅',
      message: "Great performance! This is the typical range for Heritage Apparels clients. Let's push it to 8x+.",
    };
  }
  return {
    label: 'Excellent — Top 10% of Fashion Brands',
    color: 'text-[#c9a84c]',
    bg: 'bg-[#c9a84c]/10',
    border: 'border-[#c9a84c]/30',
    icon: '🏆',
    message: "You're in the elite tier. Your ad efficiency puts you among the top fashion brands in the US market.",
  };
}

const benchmarks = [
  { range: 'Under 2x', label: 'Below average — needs optimization', color: 'text-red-400', bar: 'bg-red-500', width: 'w-1/4' },
  { range: '2–4x', label: 'Average — room to grow', color: 'text-yellow-400', bar: 'bg-yellow-500', width: 'w-2/4' },
  { range: '4–8x', label: 'Good — Heritage Apparels average', color: 'text-green-400', bar: 'bg-green-500', width: 'w-3/4' },
  { range: '8x+', label: 'Excellent — top 10% of fashion brands', color: 'text-[#c9a84c]', bar: 'bg-[#c9a84c]', width: 'w-full' },
];

export default function ROASCalculator() {
  const [adSpend, setAdSpend] = useState<string>('5000');
  const [revenue, setRevenue] = useState<string>('20000');
  const [aov, setAov] = useState<string>('85');
  const [cogs, setCogs] = useState<string>('35');

  const adSpendNum = parseFloat(adSpend) || 0;
  const revenueNum = parseFloat(revenue) || 0;
  const cogsNum = parseFloat(cogs) || 0;

  const results: Results | null =
    adSpendNum > 0 && revenueNum > 0
      ? {
          roas: revenueNum / adSpendNum,
          grossProfit: revenueNum * (1 - cogsNum / 100) - adSpendNum,
          netProfitMargin: ((revenueNum * (1 - cogsNum / 100) - adSpendNum) / revenueNum) * 100,
          monthlyProfit: revenueNum * (1 - cogsNum / 100) - adSpendNum,
        }
      : null;

  const benchmark = results ? getBenchmark(results.roas) : null;

  const fmt = (n: number) =>
    n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <main className="pt-20 min-h-screen bg-[#1a1a2e]">
      {/* Hero */}
      <section className="py-16 bg-[#0d1b3e] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-[#c9a84c]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-full mb-6">
            <span className="text-[#c9a84c] text-sm font-medium tracking-wider uppercase">Free Tool</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#f8f4ef] mb-4 leading-tight">
            ROAS Calculator for{' '}
            <span className="gradient-text italic">Fashion Brands</span>
          </h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-[#f8f4ef]/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Calculate your Return on Ad Spend for Meta Ads, Google Ads, and TikTok Ads — and benchmark yourself against top US fashion brands.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Inputs */}
            <div className="bg-[#16213e] border border-[#c9a84c]/20 rounded-2xl p-8">
              <h2 className="font-serif text-2xl font-bold text-[#f8f4ef] mb-2">Your Ad Performance</h2>
              <p className="text-[#f8f4ef]/50 text-sm mb-8">Enter your monthly ad data below</p>

              <div className="space-y-6">
                <div>
                  <label className="block text-[#f8f4ef]/80 text-sm font-medium mb-2">
                    Ad Spend per Month
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a84c] font-semibold">$</span>
                    <input
                      type="number"
                      value={adSpend}
                      onChange={(e) => setAdSpend(e.target.value)}
                      placeholder="5000"
                      className="w-full bg-[#1a1a2e] border border-[#c9a84c]/20 rounded-xl pl-8 pr-4 py-3 text-[#f8f4ef] focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#f8f4ef]/80 text-sm font-medium mb-2">
                    Revenue Generated
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a84c] font-semibold">$</span>
                    <input
                      type="number"
                      value={revenue}
                      onChange={(e) => setRevenue(e.target.value)}
                      placeholder="20000"
                      className="w-full bg-[#1a1a2e] border border-[#c9a84c]/20 rounded-xl pl-8 pr-4 py-3 text-[#f8f4ef] focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#f8f4ef]/80 text-sm font-medium mb-2">
                    Average Order Value (AOV)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a84c] font-semibold">$</span>
                    <input
                      type="number"
                      value={aov}
                      onChange={(e) => setAov(e.target.value)}
                      placeholder="85"
                      className="w-full bg-[#1a1a2e] border border-[#c9a84c]/20 rounded-xl pl-8 pr-4 py-3 text-[#f8f4ef] focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#f8f4ef]/80 text-sm font-medium mb-2">
                    Cost of Goods (COGS) %
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={cogs}
                      onChange={(e) => setCogs(e.target.value)}
                      placeholder="35"
                      min="0"
                      max="100"
                      className="w-full bg-[#1a1a2e] border border-[#c9a84c]/20 rounded-xl pl-4 pr-8 py-3 text-[#f8f4ef] focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#c9a84c] font-semibold">%</span>
                  </div>
                  <p className="text-[#f8f4ef]/40 text-xs mt-1">Typical fashion: 25–45%. India manufacturing: 15–30%.</p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              {results ? (
                <>
                  {/* ROAS Card */}
                  <div className="bg-[#16213e] border border-[#c9a84c]/30 rounded-2xl p-6">
                    <div className="text-center">
                      <p className="text-[#f8f4ef]/60 text-sm font-medium uppercase tracking-wider mb-2">Your ROAS</p>
                      <p className="font-serif text-6xl font-bold gradient-text mb-1">
                        {results.roas.toFixed(2)}x
                      </p>
                      <p className="text-[#f8f4ef]/50 text-sm">Return on Ad Spend</p>
                    </div>
                  </div>

                  {/* Benchmark badge */}
                  {benchmark && (
                    <div className={`${benchmark.bg} border ${benchmark.border} rounded-2xl p-4 flex items-start gap-3`}>
                      <span className="text-2xl flex-shrink-0">{benchmark.icon}</span>
                      <div>
                        <p className={`font-semibold ${benchmark.color} mb-1`}>{benchmark.label}</p>
                        <p className="text-[#f8f4ef]/70 text-sm">{benchmark.message}</p>
                      </div>
                    </div>
                  )}

                  {/* Profit metrics */}
                  <div className="bg-[#16213e] border border-[#c9a84c]/20 rounded-2xl p-6 grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-[#1a1a2e] rounded-xl">
                      <p className="text-[#f8f4ef]/50 text-xs mb-1">Profit After COGS</p>
                      <p className={`font-bold text-lg ${results.grossProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {fmt(results.grossProfit)}
                      </p>
                    </div>
                    <div className="text-center p-3 bg-[#1a1a2e] rounded-xl">
                      <p className="text-[#f8f4ef]/50 text-xs mb-1">Net Profit Margin</p>
                      <p className={`font-bold text-lg ${results.netProfitMargin >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {results.netProfitMargin.toFixed(1)}%
                      </p>
                    </div>
                    <div className="text-center p-3 bg-[#1a1a2e] rounded-xl col-span-2">
                      <p className="text-[#f8f4ef]/50 text-xs mb-1">Monthly Profit</p>
                      <p className={`font-bold text-xl ${results.monthlyProfit >= 0 ? 'text-[#c9a84c]' : 'text-red-400'}`}>
                        {fmt(results.monthlyProfit)}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-[#16213e] border border-[#c9a84c]/20 rounded-2xl p-8 flex items-center justify-center h-full min-h-[200px]">
                  <p className="text-[#f8f4ef]/40 text-center">Enter your ad spend and revenue to see your results</p>
                </div>
              )}
            </div>
          </div>

          {/* Industry Benchmarks */}
          <div className="mt-12 bg-[#16213e] border border-[#c9a84c]/20 rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-bold text-[#f8f4ef] mb-2 text-center">
              Your ROAS vs Industry Benchmarks
            </h2>
            <div className="gold-divider mx-auto mb-8" />
            <div className="space-y-5">
              {benchmarks.map((b) => {
                const isActive =
                  results &&
                  ((b.range === 'Under 2x' && results.roas < 2) ||
                    (b.range === '2–4x' && results.roas >= 2 && results.roas < 4) ||
                    (b.range === '4–8x' && results.roas >= 4 && results.roas < 8) ||
                    (b.range === '8x+' && results.roas >= 8));
                return (
                  <div
                    key={b.range}
                    className={`p-4 rounded-xl transition-all ${isActive ? 'bg-[#c9a84c]/10 border border-[#c9a84c]/30' : 'bg-[#1a1a2e]'}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {isActive && <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />}
                        <span className={`font-bold ${b.color}`}>{b.range}</span>
                        {isActive && <span className="text-[#c9a84c] text-xs font-medium">&larr; You are here</span>}
                      </div>
                      <span className="text-[#f8f4ef]/60 text-sm">{b.label}</span>
                    </div>
                    <div className="w-full bg-[#1a1a2e] rounded-full h-2">
                      <div className={`${b.bar} ${b.width} h-2 rounded-full transition-all`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0d1b3e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label block mb-4">Free Ad Account Audit</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#f8f4ef] mb-4">
            Want our team to audit your ad account for free?
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-[#f8f4ef]/70 text-lg mb-8 max-w-xl mx-auto">
            Our performance marketing team will review your Meta, Google, or TikTok ad account and identify exactly where you&apos;re leaving ROAS on the table — no cost, no commitment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/us/contact" className="btn-gold">
              Get My Free Ad Audit →
            </Link>
            <Link href="/us/services" className="btn-outline">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
