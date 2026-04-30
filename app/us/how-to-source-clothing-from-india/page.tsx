import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Source Clothing from India for Your US Brand (2025 Guide) | Heritage Apparels',
  description: 'Complete guide to sourcing clothing from India for US fashion brands. Finding manufacturers, samples, quality control, US import, customs duties — step by step for 2025.',
  keywords: ['how to source clothing from India USA', 'India clothing sourcing guide', 'find clothing manufacturer India', 'import clothing from India to USA', 'India fashion sourcing for US brands'],
  alternates: { canonical: 'https://www.heritageapparels.com/us/how-to-source-clothing-from-india' },
};

const steps = [
  { num: '01', title: 'Define Your Product Specifications (Tech Pack)', content: 'Before contacting a single factory, you need a tech pack — the technical document that tells manufacturers exactly what to make. A complete tech pack includes: sketch or CAD illustration of each style, fabric specifications (weight, composition, finish), colour specifications (Pantone codes), measurement chart for all sizes, construction details (seam type, stitch count), trim specifications (buttons, zippers, labels), and packaging requirements. Without a tech pack, every factory will quote differently, and you\'ll get inconsistent samples. Tools: Adobe Illustrator for sketches, or use a freelance tech pack designer ($100–$300 per style on Fiverr or Upwork).' },
  { num: '02', title: 'Identify the Right India Manufacturing Cluster', content: 'India\'s garment industry is geographically specialised. Match your product to the right region: Tirupur (Tamil Nadu) — knitwear, t-shirts, activewear, hoodies. 8,000+ factories. Best for cotton knit. Jaipur (Rajasthan) — artisan and heritage fashion, block print, hand embroidery, boho. Delhi NCR — full-service fashion manufacturing, western wear, denim, premium export quality. Surat (Gujarat) — synthetic fabrics, party wear, women\'s fashion. Mumbai/Dharavi — premium fashion, designer manufacturing, high craftsmanship. Matching your product type to the right cluster is critical — a Jaipur factory cannot make activewear. A Tirupur factory cannot do hand embroidery.' },
  { num: '03', title: 'Find and Vet Factories', content: 'Options: (1) Alibaba India / IndiaMART — many listings are agents not factories. Requires heavy vetting. (2) Trade shows — IFFS, Texworld India. Good for pre-screened factories but requires India travel. (3) Sourcing agents — fastest path. An India-based agent vets factories, negotiates pricing, and manages production on your behalf. (4) Full-service agency (Heritage Apparels) — we own a factory and have 50+ vetted partner factories. Vetting checklist: Is it a factory or agent? Do they export to the US? What is their minimum order quantity? Can you visit or have someone inspect? Do they have compliance testing capabilities?' },
  { num: '04', title: 'Request and Evaluate Samples', content: 'Never commit to bulk production without approving samples. Process: Submit tech pack → Factory produces counter sample (7–14 days) → Evaluate: measurements, fabric quality, stitching, colour matching → Request corrections if needed → Approve production sample. Budget $50–$200 per sample + courier. Always get samples from at least 2–3 factories before choosing. The sample stage typically takes 3–5 weeks including revisions. Do not rush this — poor sample approval leads to expensive production corrections.' },
  { num: '05', title: 'Negotiate Pricing and Payment Terms', content: 'India factory pricing is negotiable — especially on MOQ and payment terms. Standard payment: 30–50% deposit before production, balance before shipment. Never pay 100% upfront. Price factors: fabric cost (typically 45–60% of garment cost), MOQ (higher quantity = lower per-piece cost), complexity (embroidery adds $2–8/piece), and trim quality. Get 3 factory quotes for every style. Request FOB (Free On Board) pricing — this is the standard for international trade and means the factory is responsible until goods are loaded on the ship.' },
  { num: '06', title: 'Quality Control During Production', content: 'QC options: Factory QC (free, but they\'re checking their own work), third-party inspection company (Intertek, SGS, Bureau Veritas — $300–600 per inspection visit), Heritage Apparels in-house QC team (included in our sourcing service). Standard inspection: Pre-production (before fabric cutting), inline (during production at 20% completion), final random inspection (after production, before shipment). AQL (Acceptable Quality Level) 2.5 is the standard for apparel — meaning less than 2.5% of units can have major defects.' },
  { num: '07', title: 'US Import, Customs, and Compliance', content: 'Import duties from India: Most apparel HS codes attract 12–27% duty. Children\'s clothing: 12–16.5%. Women\'s knit: 16.5–32%. Men\'s woven: 9.5–27%. CPSC compliance: Required for all US market apparel. For children\'s wear, this means CPSC testing + Children\'s Product Certificate. US Customs: You need an Importer of Record (IOR) number (your EIN), a customs broker (recommended for first imports), and a Commercial Invoice, Packing List, Bill of Lading, and Certificate of Origin. Shipping options: Sea freight (21–35 days, $1,500–$3,500 per container) or Air freight (5–7 days, $3–6/kg — only for urgent or small shipments).' },
];

const selfVsHeritage = [
  { aspect: 'Factory Finding', self: '3–6 months of vetting', heritage: '1 week — we own the factory' },
  { aspect: 'Language Barrier', self: 'Frequent miscommunication', heritage: 'English-speaking team on ground' },
  { aspect: 'QC', self: 'Need to hire 3rd party', heritage: 'In-house QC team included' },
  { aspect: 'Compliance', self: 'Navigate CPSC yourself', heritage: 'We handle all compliance docs' },
  { aspect: 'First visit required', self: 'Usually yes ($3,000+ trip)', heritage: 'Never — remote management' },
  { aspect: 'Risk of bad batch', self: 'High without experience', heritage: 'Protected by our QC process' },
];

export default function HowToSourceClothingFromIndiaPage() {
  return (
    <>
      <section className="py-28 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Sourcing Guide</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6 leading-tight">How to Source Clothing from India for Your US Brand <span className="gradient-text italic">(2025 Guide)</span></h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl max-w-3xl mx-auto">7 steps to successfully source private-label clothing from India — from tech packs to US customs. Everything a US brand founder needs to know.</p>
          <div className="mt-8 flex gap-6 justify-center text-sm text-cream/50">
            <span>📖 14 min read</span><span>🗓 Updated 2025</span><span>✅ Factory-to-USA specialists</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                <span className="font-serif text-gold font-bold text-xl">{step.num}</span>
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-cream mb-4">{step.title}</h2>
                <p className="text-cream/70 leading-relaxed">{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#16213e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-cream mb-10 text-center">DIY Sourcing vs <span className="gradient-text italic">Heritage Apparels</span></h2>
          <div className="bg-charcoal rounded-2xl border border-gold/20 overflow-hidden">
            <div className="grid grid-cols-3 gap-0 bg-gold/10 border-b border-gold/20 px-6 py-3">
              <span className="text-gold font-semibold text-sm">Aspect</span>
              <span className="text-cream/60 font-semibold text-sm">Sourcing Yourself</span>
              <span className="text-gold font-semibold text-sm">Heritage Apparels</span>
            </div>
            {selfVsHeritage.map((row) => (
              <div key={row.aspect} className="grid grid-cols-3 gap-0 border-b border-gold/10 px-6 py-4 last:border-0">
                <span className="text-cream/80 text-sm font-medium">{row.aspect}</span>
                <span className="text-cream/50 text-sm">{row.self}</span>
                <span className="text-gold text-sm font-medium">{row.heritage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">Let Us Handle <span className="gradient-text italic">Your India Sourcing</span></h2>
          <p className="text-cream/60 mb-8 text-lg">We own a factory in India, manage QC in-house, and ship directly to your US warehouse or Amazon FBA. Get a free sourcing quote in 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/us/contact" className="btn-gold py-4 px-8">Get Free Sourcing Quote →</Link>
            <Link href="/us/india-manufacturing-for-us-brands" className="btn-outline py-4 px-8">Our Manufacturing Service</Link>
          </div>
        </div>
      </section>
    </>
  );
}
