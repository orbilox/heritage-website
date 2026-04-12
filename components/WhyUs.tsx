const reasons = [
  {
    icon: '🏭',
    title: 'We Own the Factory',
    description:
      'Unlike any other agency, we have our own clothing manufacturing unit and deep-rooted connections with India\'s top accessories, textile, and footwear factories. No middlemen — pure cost advantage and speed for your brand.',
    stats: 'Own Manufacturing Unit',
  },
  {
    icon: '🚀',
    title: 'We BUILD Big Brands',
    description:
      'We don\'t just shoot photos or run ads. We have taken hundreds of raw D2C ideas and turned them into recognized fashion brands on Myntra, Nykaa, Amazon, and globally. Brand building is our core DNA.',
    stats: '500+ Brands Launched',
  },
  {
    icon: '🔄',
    title: 'True Factory-to-Consumer Journey',
    description:
      'We cover every single step of the brand journey — sourcing & manufacturing, brand identity, fashion shoots, digital cataloging, e-commerce setup, marketplace management, and performance marketing. One partner. Zero gaps.',
    stats: '9 Integrated Services',
  },
  {
    icon: '📈',
    title: 'Performance-First Mindset',
    description:
      'Every creative decision, every catalog image, every ad we run is tied to a revenue outcome. Our clients average 4–8x ROAS on paid campaigns and consistently achieve lower CAC with higher LTV because every touchpoint is optimized.',
    stats: '4–8x Average ROAS',
  },
  {
    icon: '⚡',
    title: 'Speed at Scale',
    description:
      'From concept to launch in as little as 30 days. Our integrated production pipeline — factory, studio, post-production, and marketing — all under one roof means faster turnarounds with no quality compromise.',
    stats: 'Brand Live in 30 Days',
  },
  {
    icon: '🌐',
    title: 'Omnichannel Expertise',
    description:
      'D2C website, Myntra, Nykaa, Amazon, Flipkart, AJIO, Instagram, WhatsApp commerce — we know the rules, algorithms, and best practices of every platform that matters for Indian fashion and accessories brands.',
    stats: '10+ Platform Expertise',
  },
];

const stats = [
  { value: '500+', label: 'Fashion Brands Built', icon: '🏆' },
  { value: '₹500Cr+', label: 'Client Revenue Generated', icon: '💰' },
  { value: '30 Days', label: 'Brand Launch Timeline', icon: '🚀' },
  { value: '4–8x', label: 'Average ROAS on Ads', icon: '📈' },
  { value: '10K+', label: 'SKUs Catalogued', icon: '📂' },
  { value: '98%', label: 'Client Retention Rate', icon: '💫' },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-gold/30 to-transparent" />
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Why Heritage Apparels</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6">
            We Are Not an Agency.
            <br />
            <span className="gradient-text italic">We Are Your Brand-Building Partner.</span>
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="text-cream/60 text-lg max-w-3xl mx-auto mt-6">
            Any agency can take photos or run ads. We do something far more powerful — we take your fashion or accessories brand from a factory floor all the way to consumer shelves, marketplace listings, and viral social feeds. This is what 360° truly means.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map((reason) => (
            <div key={reason.title} className="glass-card p-8 group">
              <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-gold/20 transition-colors mb-5">
                {reason.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-cream mb-2 group-hover:text-gold transition-colors">
                {reason.title}
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed mb-4">
                {reason.description}
              </p>
              <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium">
                {reason.stats}
              </span>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="bg-gradient-to-r from-charcoal via-[#16213e] to-charcoal border border-gold/10 rounded-2xl p-8 sm:p-12">
          <h3 className="font-serif text-2xl font-bold text-center text-cream mb-10">
            Numbers That Prove Our Impact
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center ${
                  index < stats.length - 1
                    ? 'border-b sm:border-b-0 lg:border-r border-gold/10 pb-6 sm:pb-0 lg:pb-0'
                    : ''
                }`}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="font-serif text-2xl sm:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-cream/50 text-xs leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {[
            '🏭 Own Manufacturing Factory',
            '🏅 ISO-Quality Certified Studio',
            '📋 100% Transparent Pricing',
            '🔒 NDA-Backed Confidentiality',
            '🌐 Pan-India + Global Reach',
          ].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 text-cream/70 text-sm"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
