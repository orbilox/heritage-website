import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Heritage Apparels - Fashion Photography Agency',
  description:
    'Learn about Heritage Apparels — India\'s premier fashion photography and digital cataloging agency. Our story, team, values, and mission to elevate D2C fashion brands.',
  keywords: ['about Heritage Apparels', 'fashion photography team India', 'creative agency fashion'],
};

const team = [
  {
    name: 'Rajiv Kumar',
    role: 'Founder & CEO',
    bio: 'Visionary entrepreneur with deep roots in fashion manufacturing and brand building. Rajiv founded Heritage Apparels with a clear mission: to create India\'s only true factory-to-consumer fashion brand-building powerhouse. He oversees strategy, partnerships, and the company\'s 360° service vision.',
    avatar: 'RK',
    specialty: 'Strategy, Brand Building & Manufacturing',
  },
  {
    name: 'Kavita Nair',
    role: 'Head of Digital Strategy & Performance',
    bio: 'Ex-Nykaa growth team. Combines data science with creative intuition to build performance marketing strategies that deliver 4–8x ROAS for fashion brands across Meta, Google, and marketplaces.',
    avatar: 'KN',
    specialty: 'Performance Marketing & D2C Growth',
  },
  {
    name: 'Rohit Verma',
    role: 'Creative Director — Photography',
    bio: '12 years shooting for luxury and D2C fashion brands. Has led catalog and editorial shoots for 200+ brands across India. Master of studio lighting, on-location production, and fashion storytelling.',
    avatar: 'RV',
    specialty: 'Fashion & Catalog Photography',
  },
  {
    name: 'Sneha Pillai',
    role: 'Head of Brand Strategy',
    bio: 'Brand strategist and identity designer with 10 years building fashion labels from scratch. Has created visual identities, brand guidelines, and packaging systems for 100+ D2C and established fashion brands.',
    avatar: 'SP',
    specialty: 'Brand Identity & Visual Strategy',
  },
];

const values = [
  {
    icon: '🎨',
    title: 'Creative Integrity',
    description: 'We believe that great creative work requires honesty — about what works, what doesn\'t, and what truly serves your brand\'s long-term interests.',
  },
  {
    icon: '📊',
    title: 'Results Obsession',
    description: 'Beautiful photography is meaningless if it doesn\'t drive business outcomes. Every creative decision we make is anchored in measurable goals.',
  },
  {
    icon: '🤝',
    title: 'Partnership Mindset',
    description: 'We don\'t take briefs — we build partnerships. Your brand\'s success is our success, and we invest in understanding your business as deeply as our own.',
  },
  {
    icon: '⚡',
    title: 'Operational Excellence',
    description: 'World-class creative means nothing without reliable execution. We\'ve built systems that deliver consistent quality at any scale.',
  },
];

const milestones = [
  { year: '2019', event: 'Rajiv Kumar founds Heritage Apparels in Mumbai — starting with our own clothing factory and a 3-person core team' },
  { year: '2020', event: 'First 50 D2C brands onboarded. Fashion photoshoot and digital cataloging verticals launched' },
  { year: '2021', event: 'Opened Delhi and Bangalore operations. Accessories sourcing network established with 20+ partner factories' },
  { year: '2022', event: '200+ brand clients. Performance marketing and marketplace management divisions launched' },
  { year: '2023', event: 'Featured in Forbes India. D2C brand launch package introduced. Team grows to 50+ professionals' },
  { year: '2024', event: '500+ brands built. ₹500Cr+ in client revenue generated. Pan-India service fully operational' },
  { year: '2025', event: 'Rajiv Kumar leads expansion into export markets. International brand launches begin for Indian fashion labels' },
];

export default function AboutPage() {
  const organizationSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Heritage Apparels', url: 'https://www.heritageapparels.com', logo: 'https://www.heritageapparels.com/logo.png', description: 'India\'s leading end-to-end fashion brand-building agency — manufacturing, photography, brand strategy, marketplace onboarding, and performance marketing for D2C fashion brands.', foundingDate: '2019', numberOfEmployees: { '@type': 'QuantitativeValue', value: 50 }, areaServed: [{ '@type': 'Country', name: 'India' }, { '@type': 'Country', name: 'United States' }], address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', addressCountry: 'IN' }, sameAs: ['https://www.instagram.com/heritageapparels', 'https://www.linkedin.com/company/heritage-apparels'], founder: { '@type': 'Person', name: 'Rajiv Kumar', jobTitle: 'Founder & CEO', worksFor: { '@type': 'Organization', name: 'Heritage Apparels' } } };
  const founderSchema = { '@context': 'https://schema.org', '@type': 'Person', name: 'Rajiv Kumar', jobTitle: 'Founder & CEO', worksFor: { '@type': 'Organization', name: 'Heritage Apparels', url: 'https://www.heritageapparels.com' }, description: 'Rajiv Kumar is the Founder & CEO of Heritage Apparels, India\'s leading fashion brand-building agency. He has helped 500+ D2C fashion brands go from manufacturing to marketplace success, generating ₹500Cr+ in client revenue since 2019.', knowsAbout: ['Fashion Manufacturing', 'D2C Brand Building', 'Marketplace Onboarding', 'Fashion Photography', 'Performance Marketing', 'India Export'] };
  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }} />
      {/* Hero */}
      <section className="py-24 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Our Story</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            We Are Heritage
            <br />
            <span className="gradient-text italic">Apparels</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed">
            Founded by <strong className="text-gold">Rajiv Kumar</strong> with one bold vision: to build India&apos;s only true end-to-end fashion brand-building agency — from our own manufacturing factory all the way to performance marketing and marketplace dominance.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">The Beginning</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-6">
                Born from a Frustration,
                <br />
                <span className="gradient-text italic">Built on a Vision</span>
              </h2>
              <div className="space-y-4 text-cream/70 leading-relaxed">
                <p>
                  <strong className="text-gold">Rajiv Kumar</strong>, our Founder & CEO, spent years deep inside India&apos;s fashion manufacturing ecosystem — working with factories, fabric mills, accessories suppliers, and the brands that rely on them. What he saw frustrated him: D2C founders were being forced to juggle 8–10 vendors just to launch a single brand.
                </p>
                <p>
                  A manufacturer here, a photographer there, a marketing agency somewhere else, a marketplace consultant on the side. Every vendor working in isolation. No accountability. No unified vision. And brands paying a premium for the chaos.
                </p>
                <p>
                  Heritage Apparels was Rajiv&apos;s answer — a single, vertically integrated partner that owns the factory, builds the brand, shoots the catalog, runs the ads, and manages the marketplaces. One team, one vision, one accountable partner.
                </p>
                <p>
                  Today, we&apos;ve built over 500 fashion brands, generated ₹500Cr+ in client revenue, and are recognized as India&apos;s only true factory-to-consumer brand-building agency.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
              <div className="space-y-6">
                {milestones.map((milestone) => (
                  <div key={milestone.year} className="flex gap-6 pl-12 relative">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                    <div>
                      <div className="text-gold font-bold text-sm mb-1">{milestone.year}</div>
                      <p className="text-cream/70 text-sm leading-relaxed">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0f0f1e] relative">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <p className="section-label mb-4">What We Stand For</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">
              Our Core <span className="gradient-text italic">Values</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="glass-card p-8 group">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-serif text-xl font-bold text-cream mb-3 group-hover:text-gold transition-colors">
                  {value.title}
                </h3>
                <p className="text-cream/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-charcoal relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">The People Behind the Work</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">
              Meet Our <span className="gradient-text italic">Leadership Team</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="glass-card p-6 text-center group">
                <div className="w-20 h-20 rounded-full bg-gold/15 border-2 border-gold/30 flex items-center justify-center mx-auto mb-5 font-bold text-gold text-2xl">
                  {member.avatar}
                </div>
                <h3 className="font-serif font-bold text-cream text-lg mb-1 group-hover:text-gold transition-colors">
                  {member.name}
                </h3>
                <p className="text-gold text-sm mb-3">{member.role}</p>
                <p className="text-cream/60 text-xs leading-relaxed mb-3">{member.bio}</p>
                <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs">
                  {member.specialty}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-cream/40 text-sm mt-8">
            Plus 50+ photographers, stylists, editors, and creative professionals across India
          </p>
        </div>
      </section>

      {/* E-E-A-T Credentials & Trust Signals */}
      <section className="py-20 bg-[#0f0f1e] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Why Brands Trust Us</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">
              Our Credentials & <span className="gradient-text italic">Industry Recognition</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {[
              { icon: '🏆', title: 'Forbes India Featured', desc: 'Recognized by Forbes India as one of the most innovative fashion brand-building agencies transforming India\'s D2C ecosystem.' },
              { icon: '🏭', title: 'Own Manufacturing Facility', desc: 'We own and operate our clothing manufacturing facility in India — giving us direct quality control that no pure-service agency can match.' },
              { icon: '📊', title: '₹500Cr+ Client Revenue', desc: 'Over ₹500 crore in revenue generated for our client brands across Indian and international marketplaces since 2019.' },
              { icon: '🌐', title: 'Pan-India + USA Operations', desc: 'Operations in Mumbai, Delhi, and Bangalore for India clients. Dedicated US-market team for brands targeting American consumers.' },
              { icon: '🤝', title: 'Official Platform Partners', desc: 'Recognized agency partner with Myntra, Ajio, and Amazon India. US-side: enrolled in Amazon\'s Service Provider Network.' },
              { icon: '🎓', title: '50+ Industry Professionals', desc: 'Our team includes ex-Nykaa, ex-Myntra, and ex-Ajio professionals with deep domain expertise in India\'s fashion ecosystem.' },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 group">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-serif text-lg font-bold text-cream mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Numbers bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center py-10 border-t border-b border-gold/10">
            {[
              { value: '500+', label: 'Brands Built' },
              { value: '6', label: 'Years Operating' },
              { value: '50+', label: 'Team Members' },
              { value: '₹500Cr+', label: 'Client Revenue' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-3xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-cream/60 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#16213e] border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">
            Ready to Work <span className="gradient-text italic">Together?</span>
          </h2>
          <p className="text-cream/60 mb-8 text-lg leading-relaxed">
            Let&apos;s start with a conversation. Tell us about your brand, your goals, and your challenges — and we&apos;ll show you exactly how Heritage Apparels can help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold px-8 py-4">
              Schedule a Discovery Call
            </Link>
            <Link href="/portfolio" className="btn-outline px-8 py-4">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
