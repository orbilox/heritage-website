'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Founder & CEO',
    company: 'Ziva Fashion House',
    avatar: 'PS',
    rating: 5,
    text: 'Heritage Apparels completely transformed how our brand looks online. Our Myntra conversion rate jumped from 1.8% to 4.2% within two months of using their catalog photography. The team understands fashion business — not just photography.',
    metric: '133% conversion increase',
    category: 'Digital Cataloging',
  },
  {
    id: 2,
    name: 'Rahul Mehra',
    role: 'Head of E-commerce',
    company: 'StyleCraft India',
    avatar: 'RM',
    rating: 5,
    text: 'We\'ve worked with 5 different photography agencies before Heritage Apparels. None came close to their combination of creative quality, turnaround speed, and genuine understanding of what drives D2C performance. They\'re not vendors — they\'re partners.',
    metric: '48-hour delivery on 500 SKUs',
    category: 'E-commerce Content',
  },
  {
    id: 3,
    name: 'Aisha Kapoor',
    role: 'Marketing Director',
    company: 'Bloom Ethnic Wear',
    avatar: 'AK',
    rating: 5,
    text: 'The Instagram Reels they created for our Diwali collection generated ₹40 lakhs in sales in the first week. Their team understands what hooks people on social media and how to translate that into actual purchase intent. Absolutely brilliant work.',
    metric: '₹40L sales in first week',
    category: 'Social Media Reels',
  },
  {
    id: 4,
    name: 'Vikram Patel',
    role: 'Co-founder',
    company: 'Krish Denim Co.',
    avatar: 'VP',
    rating: 5,
    text: 'Heritage Apparels built our entire brand visual identity from scratch. The brand guidelines they created have become our north star — every piece of content we create is measured against it. Our brand now looks premium enough to justify a 30% price increase.',
    metric: '30% price premium achieved',
    category: 'Brand Strategy',
  },
  {
    id: 5,
    name: 'Neha Joshi',
    role: 'D2C Business Lead',
    company: 'Anaya Luxe',
    avatar: 'NJ',
    rating: 5,
    text: 'What sets Heritage apart is their obsession with business outcomes, not just beautiful images. They asked us about our return rates, our average order value, our customer demographics — and built a photography strategy designed to address each metric.',
    metric: '42% reduction in return rate',
    category: 'Fashion Photoshoot',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setCurrent(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prev = () => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    goTo((current + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#16213e] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-overlay opacity-15" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-burgundy/8 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Client Stories</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6">
            Brands That
            <span className="gradient-text italic"> Trust Us</span>
          </h2>
          <div className="gold-divider mx-auto" />
        </div>

        {/* Main Testimonial */}
        <div className="relative">
          <div className="testimonial-card text-center relative">
            {/* Quote Icon */}
            <div className="text-gold/20 text-8xl font-serif absolute -top-4 left-8 select-none leading-none">&ldquo;</div>

            {/* Category Badge */}
            <div className="inline-block mb-6">
              <span className="px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-wider">
                {testimonials[current].category}
              </span>
            </div>

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <span key={i} className="text-gold text-xl">★</span>
              ))}
            </div>

            {/* Text */}
            <blockquote className="text-cream/80 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-8 relative z-10 italic font-serif">
              &ldquo;{testimonials[current].text}&rdquo;
            </blockquote>

            {/* Metric */}
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-gold/10 border border-gold/25 rounded-full">
              <span className="text-gold font-bold text-sm">📈 Result:</span>
              <span className="text-cream/80 text-sm font-medium">{testimonials[current].metric}</span>
            </div>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gold/20 border-2 border-gold/40 flex items-center justify-center font-bold text-gold text-lg">
                {testimonials[current].avatar}
              </div>
              <div className="text-left">
                <div className="font-serif font-bold text-cream text-lg">
                  {testimonials[current].name}
                </div>
                <div className="text-gold text-sm">{testimonials[current].role}</div>
                <div className="text-cream/50 text-xs">{testimonials[current].company}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all group"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 text-cream/60 group-hover:text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === current
                      ? 'w-8 h-2 bg-gold'
                      : 'w-2 h-2 bg-cream/20 hover:bg-cream/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all group"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 text-cream/60 group-hover:text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mini testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
          {testimonials.slice(0, 3).map((t, index) => (
            <button
              key={t.id}
              onClick={() => goTo(index)}
              className={`p-4 rounded-xl border text-left transition-all ${
                index === current % 3
                  ? 'border-gold/40 bg-gold/10'
                  : 'border-gold/10 bg-white/3 hover:border-gold/25'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-xs font-bold text-gold">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-cream text-xs font-semibold">{t.name}</div>
                  <div className="text-cream/50 text-xs">{t.company}</div>
                </div>
              </div>
              <p className="text-cream/60 text-xs leading-relaxed line-clamp-2">{t.text}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
