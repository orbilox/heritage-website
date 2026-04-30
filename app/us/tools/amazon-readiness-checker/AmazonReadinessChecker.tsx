'use client';

import { useState } from 'react';
import Link from 'next/link';

const questions = [
  { id: 'trademark', text: 'Do you have a registered US trademark or active Brand Registry?', points: 2, tip: 'Brand Registry unlocks A+ Content, Sponsored Brands, and counterfeit protection. File with USPTO now — takes 8–12 months.' },
  { id: 'photos', text: 'Do you have professional white-background product photos?', points: 2, tip: 'Amazon requires pure white background (#FFFFFF) for main images. No mannequin (human model preferred). Garment fills 85% of frame.' },
  { id: 'cpsc', text: 'Have your products been tested for US compliance (CPSC/safety)?', points: 2, tip: 'Required for all US market apparel. Children\'s clothing requires CPSC testing + Children\'s Product Certificate from an accredited lab.' },
  { id: 'upc', text: 'Do you have UPC barcodes for all your products?', points: 2, tip: 'Required for all Amazon listings. Purchase from GS1 US (official source). One UPC per parent ASIN + one per variation (size/colour).' },
  { id: 'pricing', text: 'Is your pricing competitive with similar Amazon listings?', points: 1, tip: 'Search your main keyword on Amazon and check the top 10 results. Your price should be within 20% of the bestsellers in your category.' },
  { id: 'reviews', text: 'Do you have a plan to generate your first 25+ reviews?', points: 1, tip: 'Use Amazon Vine Program (30 free units) + Request a Review button for every order + friends/family initial purchases (different addresses).' },
  { id: 'aplus', text: 'Have you created A+ Content (Enhanced Brand Content) for your listings?', points: 2, tip: 'Requires Brand Registry. A+ Content increases conversion rate by 30–40%. Includes brand story module + comparison chart + lifestyle images.' },
  { id: 'fba', text: 'Do you have FBA inventory ready or a fulfilment plan?', points: 2, tip: 'FBA gives Prime badge which increases conversion 25–30%. Ship inventory to Amazon fulfilment centre before launch for immediate Prime availability.' },
  { id: 'ppc', text: 'Do you have a PPC budget of $1,500+/month for launch?', points: 1, tip: 'Launch phase PPC is an investment in organic ranking. Budget $50–100/day for first 30 days. After organic ranking improves, PPC spend can drop significantly.' },
  { id: 'lifestyle', text: 'Do you have lifestyle photos with human models (not just white-background)?', points: 1, tip: 'Secondary images with models increase click-through rate significantly. Amazon allows 6 secondary images — use all 6. Include: back view, detail shot, size chart, lifestyle, infographic.' },
];

type Answers = Record<string, boolean | null>;

export default function AmazonReadinessChecker() {
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);

  const setAnswer = (id: string, val: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: val }));
  };

  const totalAnswered = Object.values(answers).filter((v) => v !== null).length;
  const score = questions.reduce((acc, q) => acc + (answers[q.id] === true ? q.points : 0), 0);
  const maxScore = questions.reduce((acc, q) => acc + q.points, 0);

  const getResult = () => {
    if (score >= 13) return { label: 'Amazon Ready 🚀', color: 'text-green-400', desc: 'Your brand has what it takes to launch on Amazon. Let\'s optimise your listings and scale with PPC.' };
    if (score >= 7) return { label: 'Almost Ready ⚡', color: 'text-yellow-400', desc: 'You\'re close. Fix the gaps below and you\'ll be launch-ready within 2–4 weeks.' };
    return { label: 'Not Ready Yet 🛠', color: 'text-red-400', desc: 'Several critical gaps need to be addressed before launching on Amazon. Start with Brand Registry and photography.' };
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-4">
        {questions.map((q, i) => (
          <div key={q.id} className="bg-[#16213e] border border-gold/15 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm font-bold flex-shrink-0">{i + 1}</div>
              <div className="flex-1">
                <p className="text-cream font-medium mb-4">{q.text}</p>
                <div className="flex gap-3 mb-3">
                  <button
                    onClick={() => setAnswer(q.id, true)}
                    className={`px-6 py-2 rounded-lg text-sm font-semibold border transition-all ${answers[q.id] === true ? 'bg-green-500/20 border-green-500/50 text-green-300' : 'border-gold/20 text-cream/60 hover:border-gold/40'}`}
                  >
                    ✓ Yes
                  </button>
                  <button
                    onClick={() => setAnswer(q.id, false)}
                    className={`px-6 py-2 rounded-lg text-sm font-semibold border transition-all ${answers[q.id] === false ? 'bg-red-500/10 border-red-500/30 text-red-400' : 'border-gold/20 text-cream/60 hover:border-gold/40'}`}
                  >
                    ✗ No
                  </button>
                </div>
                {answers[q.id] === false && (
                  <div className="bg-charcoal/50 border border-gold/10 rounded-lg p-3 mt-2">
                    <p className="text-cream/60 text-xs leading-relaxed"><span className="text-gold font-semibold">What to do: </span>{q.tip}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalAnswered >= 5 && (
        <div className="mt-8 bg-gradient-to-br from-amber-900/20 to-charcoal border border-gold/30 rounded-2xl p-8">
          <div className="text-center mb-6">
            <div className="text-cream/60 text-sm mb-2">Your Amazon Readiness Score</div>
            <div className="font-serif text-5xl font-bold gradient-text mb-2">{score}<span className="text-2xl text-cream/30">/{maxScore}</span></div>
            <div className={`text-xl font-bold ${getResult().color}`}>{getResult().label}</div>
            <p className="text-cream/60 text-sm mt-3 max-w-xl mx-auto">{getResult().desc}</p>
          </div>

          <div className="w-full bg-charcoal rounded-full h-3 overflow-hidden mb-8">
            <div
              className="h-3 rounded-full transition-all duration-700"
              style={{ width: `${(score / maxScore) * 100}%`, background: score >= 13 ? '#22c55e' : score >= 7 ? '#eab308' : '#ef4444' }}
            />
          </div>

          <div className="text-center">
            <p className="text-cream/60 text-sm mb-4">Get a personalised Amazon launch plan from our team — free.</p>
            <Link href="/us/contact" className="btn-gold py-3 px-8 inline-block">Get My Free Amazon Plan →</Link>
          </div>
        </div>
      )}

      {totalAnswered < 5 && (
        <div className="mt-6 text-center text-cream/40 text-sm">Answer at least 5 questions to see your readiness score</div>
      )}
    </div>
  );
}
