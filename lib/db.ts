/**
 * Heritage Apparels — Database Layer
 * Uses a JSON file as a simple persistent store.
 * Zero native dependencies — works on any Node version.
 * For production scale, swap this for a real DB (Postgres/SQLite via Prisma).
 */

import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'heritage_app_reels_data.json');

export interface Lead {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message?: string;
  source?: string;
  status?: string;
  created_at?: string;
}

export interface BlogPost {
  id?: number;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  category?: string;
  author?: string;
  featured_image?: string;
  meta_title?: string;
  meta_description?: string;
  published?: number;
  created_at?: string;
}

interface DBStore {
  leads: Lead[];
  blog_posts: BlogPost[];
  _nextLeadId: number;
  _nextPostId: number;
}

function loadStore(): DBStore {
  try {
    if (fs.existsSync(DB_PATH)) {
      const raw = fs.readFileSync(DB_PATH, 'utf-8');
      return JSON.parse(raw) as DBStore;
    }
  } catch (e) {
    console.error('DB load error:', e);
  }
  return { leads: [], blog_posts: [], _nextLeadId: 1, _nextPostId: 1 };
}

function saveStore(store: DBStore): void {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(store, null, 2), 'utf-8');
  } catch (e) {
    console.error('DB save error:', e);
  }
}

// Blog posts seed data — add new posts here; getStore() upserts missing slugs automatically
const SEED_POSTS: BlogPost[] = [
  // ── NEW SEO POSTS ───────────────────────────────────────────────────────────
  {
    title: 'How to Onboard Your Brand on Myntra in 2025: Complete Step-by-Step Guide',
    slug: 'myntra-seller-onboarding-guide-2025',
    excerpt: 'Everything you need to know about getting your fashion brand listed on Myntra — eligibility criteria, documentation, catalogue standards, brand approval timeline, and how to fast-track your onboarding.',
    content: `<p>Myntra is India's largest fashion e-commerce platform with over 60 million active users and more than 6,000 brands. For any D2C fashion brand, getting listed on Myntra is a milestone that can dramatically accelerate revenue. But the onboarding process is notoriously selective — Myntra rejects 60–70% of first applications. This guide walks you through exactly how to get approved.</p>

<h2>Step 1: Check If Your Brand Qualifies for Myntra</h2>
<p>Myntra has specific eligibility criteria. Before applying, confirm the following:</p>
<ul>
<li><strong>GST registration</strong> is mandatory. Myntra does not list unregistered sellers.</li>
<li><strong>Trademark registration</strong> is strongly preferred. A registered brand mark demonstrates seriousness and speeds approval.</li>
<li><strong>Minimum catalogue depth:</strong> Myntra requires at least 20–30 unique SKUs across 3+ categories for most fashion segments. Brands with fewer SKUs should build out their catalogue before applying.</li>
<li><strong>Product quality benchmark:</strong> Your products will be physically inspected. Fabric quality, finishing, and labelling must meet Myntra's quality index standards.</li>
<li><strong>MRP labelling:</strong> Every product must carry an MRP tag with HSN code, fabric composition, care instructions, and country of origin.</li>
</ul>

<h2>Step 2: Register on the Myntra Seller Portal</h2>
<p>Go to <strong>partner.myntra.com</strong> and create a seller account. You'll need:</p>
<ul>
<li>GST certificate</li>
<li>PAN card of the business</li>
<li>Cancelled cheque / bank statement for payment setup</li>
<li>Trademark certificate (if available)</li>
<li>Brand authorization letter (if you're selling another brand's products)</li>
<li>Company incorporation documents (for Pvt Ltd / LLP structures)</li>
</ul>
<p>Complete the profile with your company's address, contact details, and return warehouse address. Myntra uses a hub-and-spoke model for fulfilment — make sure your return address is accurate.</p>

<h2>Step 3: Catalogue Submission — This Is Where Most Brands Fail</h2>
<p>Myntra's catalogue standards are among the strictest on any Indian marketplace. Your product images must meet these exact specifications:</p>
<ul>
<li><strong>White background only</strong> for product shots (catalogue images)</li>
<li><strong>Minimum 1000×1000 pixels</strong>, recommended 1500×1500px</li>
<li><strong>Model shots mandatory</strong> for clothing, kurtas, dresses, and co-ords</li>
<li><strong>Multiple angles:</strong> Front, back, and close-up detail images</li>
<li><strong>No watermarks, logos, or borders</strong> on product images</li>
<li><strong>Accurate product attributes</strong>: colour, size, fabric, fit, occasion, wash care</li>
</ul>
<p>Catalogue rejection is the #1 reason brands stall at the Myntra onboarding stage. Poorly lit images, incorrect size charts, or missing attributes will result in rejection and restart the clock.</p>
<p>At Heritage Apparels, our <a href="/services/digital-cataloging">digital cataloging service</a> is specifically calibrated to Myntra's standards. We've successfully onboarded 40+ brands on Myntra with a 95% first-attempt catalogue approval rate.</p>

<h2>Step 4: Quality Check (QC) at Myntra Warehouse</h2>
<p>After catalogue approval, Myntra requests a physical sample of each SKU for QC inspection at their warehouse. The QC team checks:</p>
<ul>
<li>Fabric quality and composition matches what was listed</li>
<li>Colour accuracy matches images</li>
<li>Stitching quality and finishing</li>
<li>Label compliance (MRP, care symbols, fabric content)</li>
<li>Packing standards (polybag with barcode)</li>
</ul>
<p>Products failing QC are returned. Repeated QC failures can result in account suspension.</p>

<h2>Step 5: Pricing & Commission Structure</h2>
<p>Myntra charges category-specific commission rates ranging from 18–35% of the selling price. Fashion categories typically see:</p>
<ul>
<li>Ethnic wear: 22–27%</li>
<li>Western wear: 20–25%</li>
<li>Accessories: 25–30%</li>
<li>Premium/luxury: 18–22%</li>
</ul>
<p>Factor these commissions into your MRP strategy before listing. A product with ₹599 MRP and a 25% commission leaves ₹449 before GST, packaging, and returns costs.</p>

<h2>Step 6: Myntra Sponsored Ads — Essential After Onboarding</h2>
<p>Going live on Myntra is just the start. Without paid visibility, new brands are buried under thousands of established sellers. Myntra Sponsored Ads (keyword-based product promotion) are essential for driving initial sales velocity — which in turn improves your organic ranking.</p>
<p>Our <a href="/services/performance-marketing">performance marketing team</a> manages Myntra Sponsored Ads for brands at all stages, with a target of keeping ACoS (Advertising Cost of Sales) under 20%.</p>

<h2>How Long Does Myntra Onboarding Take?</h2>
<p>The typical timeline from application to first sale is 6–12 weeks:</p>
<ul>
<li>Account verification: 1–2 weeks</li>
<li>Catalogue approval: 2–4 weeks (if standards are met first time)</li>
<li>QC inspection: 1–2 weeks</li>
<li>Go live: 1 week after QC clearance</li>
</ul>

<h2>Working with a Myntra Onboarding Agency</h2>
<p>Brands that work with an experienced Myntra onboarding partner significantly reduce their time-to-live and avoid the common pitfalls that cause application rejections. Heritage Apparels's <a href="/services/marketplace-onboarding">marketplace onboarding service</a> covers the entire process — documentation, catalogue production, QC preparation, and post-launch advertising — so you can focus on your product while we handle the platform.</p>
<p>We currently manage brands across Myntra, AJIO, Nykaa Fashion, Flipkart, Amazon India, and 30+ other platforms. <a href="/contact">Book a free consultation</a> to discuss your Myntra listing strategy.</p>`,
    category: 'Marketplace Strategy',
    author: 'Heritage Apparels',
    meta_title: 'How to Onboard Your Brand on Myntra in 2025 — Complete Guide | Heritage Apparels',
    meta_description: 'Step-by-step guide to getting your fashion brand listed on Myntra — eligibility, documentation, catalogue standards, QC process, and how to fast-track approval.',
    published: 1,
    created_at: '2025-04-08T10:00:00Z',
  },
  {
    title: 'How Much Does It Cost to Launch a D2C Fashion Brand in India? (2025 Reality)',
    slug: 'd2c-fashion-brand-launch-cost-india',
    excerpt: 'A realistic, itemised breakdown of what it actually costs to launch a D2C fashion brand in India in 2025 — from manufacturing and photography to website, marketing, and marketplace onboarding.',
    content: `<p>The number one question from aspiring D2C fashion founders in India is: "How much money do I need to launch?" The honest answer is: it depends. But most founders significantly underestimate the actual cost — and that gap between expectation and reality kills more fashion startups than anything else. Here's the complete, realistic cost breakdown for 2025.</p>

<h2>The Two Models: Lean Launch vs Full Brand Launch</h2>
<p>Before listing costs, understand there are two distinct launch strategies:</p>
<ul>
<li><strong>Lean Launch:</strong> Start small, test demand, reinvest. Lower upfront risk, slower growth, limited brand building. Total cost: ₹3–8 lakhs.</li>
<li><strong>Full Brand Launch:</strong> Proper brand identity, photography, marketing, and multi-channel distribution from day one. Higher upfront investment, faster scale, stronger brand equity. Total cost: ₹15–40 lakhs.</li>
</ul>
<p>This guide covers the full brand launch because lean launches often create false economies — brands save on photography and branding early, then spend 3x more correcting it 12 months later.</p>

<h2>1. Product Manufacturing & Inventory (₹3–12 Lakhs)</h2>
<p>Your first inventory run is the largest single cost. Factors that determine this:</p>
<ul>
<li><strong>MOQ (Minimum Order Quantity):</strong> Most Indian factories require 50–200 units per style per size-colour. A 10-style collection at 100 units each = 1,000 units minimum.</li>
<li><strong>Fabric cost:</strong> Cotton basics ₹80–200/metre; premium fabrics ₹300–800/metre</li>
<li><strong>Stitching + finishing:</strong> ₹150–600 per unit depending on complexity</li>
<li><strong>Trims, labels, packaging:</strong> ₹30–80 per unit</li>
</ul>
<p>Realistic first inventory investment for a 10-style ethnic wear brand: <strong>₹4–7 lakhs</strong>.</p>
<p>Heritage Apparels's <a href="/services/manufacturing-sourcing">manufacturing and sourcing service</a> helps brands access factory-direct pricing, often 30–40% below what you'd pay going direct to a factory without industry relationships.</p>

<h2>2. Brand Identity & Strategy (₹1.5–5 Lakhs)</h2>
<ul>
<li>Brand naming and trademark filing: ₹15,000–40,000</li>
<li>Logo + visual identity design: ₹30,000–1.5 lakhs (freelancer vs agency)</li>
<li>Brand strategy (positioning, tone of voice, customer persona): ₹50,000–2 lakhs</li>
<li>Packaging design (boxes, tissue, tags, bags): ₹30,000–1 lakh</li>
</ul>

<h2>3. Fashion Photography & Digital Catalogue (₹1–4 Lakhs)</h2>
<p>This is the cost most new founders underestimate most severely. You need:</p>
<ul>
<li>Professional studio/lifestyle photoshoot: ₹50,000–2 lakhs (depends on number of looks)</li>
<li>Model fees: ₹15,000–50,000/day</li>
<li>Photo editing and retouching: ₹50–200 per image</li>
<li>Video content for Instagram Reels: ₹30,000–1.5 lakhs for a reel package</li>
</ul>
<p>Our <a href="/services/fashion-photoshoot">fashion photography service</a> starts at ₹250/SKU for catalogue shots and includes editing. A 100-SKU shoot with model shots runs ₹60,000–1.2 lakhs depending on complexity.</p>

<h2>4. E-Commerce Website / D2C Store (₹50,000–3 Lakhs)</h2>
<ul>
<li>Shopify subscription: ₹2,500–7,500/month</li>
<li>Theme + customization: ₹15,000–1.5 lakhs</li>
<li>Payment gateway setup (Razorpay/PayU): Free to set up, 2% per transaction</li>
<li>Custom domain: ₹1,000–3,000/year</li>
</ul>
<p>A lean Shopify store can be live for ₹50,000. A branded, custom-designed D2C site costs ₹1.5–3 lakhs.</p>

<h2>5. Marketplace Onboarding (₹30,000–1.5 Lakhs)</h2>
<p>Launching on Myntra, AJIO, Amazon, Nykaa, and Flipkart simultaneously requires:</p>
<ul>
<li>Catalogue reformatting for each platform's specs</li>
<li>Keyword research and listing optimization</li>
<li>Account management setup</li>
</ul>
<p>Going DIY takes 3–6 months per platform. Working with our <a href="/services/marketplace-onboarding">marketplace onboarding team</a> compresses this to 6–10 weeks across all platforms simultaneously.</p>

<h2>6. Performance Marketing — Launch Budget (₹2–8 Lakhs for First 3 Months)</h2>
<p>This is where most brands underspend and wonder why they're not seeing results. Realistic launch marketing budget:</p>
<ul>
<li>Meta Ads (Facebook + Instagram): ₹50,000–2 lakhs/month</li>
<li>Google Shopping: ₹30,000–1 lakh/month</li>
<li>Influencer collaborations: ₹50,000–3 lakhs for launch campaign</li>
<li>Performance marketing management fee: ₹40,000–1 lakh/month</li>
</ul>

<h2>Total Investment Summary</h2>
<table>
<tr><th>Category</th><th>Lean Launch</th><th>Full Brand Launch</th></tr>
<tr><td>Manufacturing & Inventory</td><td>₹2–4L</td><td>₹5–12L</td></tr>
<tr><td>Brand Identity & Strategy</td><td>₹30,000</td><td>₹2–5L</td></tr>
<tr><td>Photography & Content</td><td>₹30,000</td><td>₹1.5–4L</td></tr>
<tr><td>Website / D2C Store</td><td>₹50,000</td><td>₹1–3L</td></tr>
<tr><td>Marketplace Onboarding</td><td>DIY</td><td>₹50,000–1.5L</td></tr>
<tr><td>Marketing (3 months)</td><td>₹1–2L</td><td>₹3–8L</td></tr>
<tr><td><strong>Total</strong></td><td><strong>₹4–8L</strong></td><td><strong>₹13–33L</strong></td></tr>
</table>

<h2>What Most Brands Get Wrong</h2>
<p>The biggest mistake is treating photography and marketing as optional early-stage costs. Brands that launch with poor visuals spend 18 months building an audience only to discover their content is the reason for low conversion. Investing properly upfront — in manufacturing quality, brand photography, and performance marketing — delivers dramatically better economics over a 2–3 year horizon.</p>
<p><a href="/contact">Talk to our team</a> about planning your D2C fashion launch with realistic budgets and a phased investment strategy.</p>`,
    category: 'Business Strategy',
    author: 'Heritage Apparels',
    meta_title: 'Cost to Launch a D2C Fashion Brand India 2025 — Complete Budget Guide | Heritage Apparels',
    meta_description: 'Realistic, itemised cost breakdown to launch a D2C fashion brand in India in 2025. Manufacturing, photography, website, marketplace onboarding, and marketing budgets.',
    published: 1,
    created_at: '2025-04-05T10:00:00Z',
  },
  {
    title: 'Myntra vs AJIO: Which Marketplace Is Better for New Fashion Brands in India?',
    slug: 'myntra-vs-ajio-fashion-brands-india',
    excerpt: 'A data-driven comparison of Myntra and AJIO for new fashion brands — traffic, commission rates, catalogue requirements, buyer demographics, and which platform delivers faster ROI.',
    content: `<p>Both Myntra and AJIO are premium fashion marketplaces in India. Both have stringent onboarding criteria. Both can be transformative for the right brand. But they serve different buyer demographics and have meaningfully different business models — and choosing the wrong one first can waste 6–12 months. Here's the full comparison.</p>

<h2>Platform Overview</h2>
<p><strong>Myntra</strong> is India's largest fashion e-commerce platform, owned by Flipkart (Walmart). Founded in 2007, it has 60M+ active users, with a primary demographic of 18–35 year olds in metro and Tier 1 cities. It's the go-to platform for fast fashion, ethnic wear, western wear, and accessories at ₹500–₹3,000 price points.</p>
<p><strong>AJIO</strong> is Reliance Retail's fashion marketplace, launched in 2016. It positions itself as a curated fashion destination with a slightly older, more premium demographic. AJIO is particularly strong in ethnic wear, fusion fashion, and branded segments with ₹800–₹5,000 price points. Its integration with JioMart and Reliance's offline retail network gives it unique omnichannel reach.</p>

<h2>Traffic & Market Share</h2>
<ul>
<li><strong>Myntra:</strong> ~60M monthly active users, 6,000+ brands, market leader in online fashion</li>
<li><strong>AJIO:</strong> ~25M monthly active users, 3,500+ brands, fast-growing with Reliance's backing</li>
</ul>
<p><strong>Verdict:</strong> Myntra wins on volume. But AJIO's smaller catalogue means less competition per brand — new brands often find it easier to build visibility on AJIO initially.</p>

<h2>Commission Rates</h2>
<ul>
<li><strong>Myntra:</strong> 20–30% commission + 18% GST on commission. Returns are charged back to the seller at a fulfilment fee.</li>
<li><strong>AJIO:</strong> 25–35% commission. AJIO's commission is slightly higher but includes more backend support for onboarding.</li>
</ul>
<p><strong>Verdict:</strong> Myntra is marginally cheaper in commission for most categories.</p>

<h2>Onboarding Difficulty</h2>
<p><strong>Myntra onboarding</strong> is notoriously strict. Catalogue standards are exacting — white background, model mandatory, specific image dimensions. The QC process is rigorous. Timeline: 6–12 weeks for approval.</p>
<p><strong>AJIO onboarding</strong> is also selective but AJIO's team is more willing to work with new brands that show potential. AJIO actively scouts new labels through their AJIO Luxe and AJIO Business divisions. Timeline: 4–8 weeks for eligible brands.</p>
<p><strong>Verdict:</strong> AJIO is marginally more accessible for new brands. But both require professional catalogue content and proper documentation.</p>

<h2>Catalogue & Photography Requirements</h2>
<p>Both platforms require:</p>
<ul>
<li>White background for primary product image</li>
<li>Model shots for apparel</li>
<li>Minimum 1000×1000px resolution</li>
<li>Detailed size charts and fabric descriptions</li>
</ul>
<p>AJIO's quality bar is actually higher in terms of model photography quality — they prefer editorial-style images for premium categories. Our <a href="/services/digital-cataloging">digital cataloging service</a> produces images meeting both platforms' exact specifications simultaneously, saving you the cost of two separate shoots.</p>

<h2>Buyer Demographics</h2>
<p><strong>Myntra buyers:</strong> Younger (18–30), trend-conscious, value-aware, frequent buyers. Heavy metro concentration. Strong in women's western wear, streetwear, athleisure, fast fashion.</p>
<p><strong>AJIO buyers:</strong> Slightly older (25–40), brand-conscious, higher average spend, more ethnic wear purchases. Strong Tier 1 + Tier 2 presence due to Reliance's offline reach.</p>
<p><strong>Verdict:</strong> For western fashion and accessories targeting millennials, Myntra wins. For premium ethnic wear and fusion fashion with a Tier 2 reach goal, AJIO is stronger.</p>

<h2>Brand Visibility & Advertising</h2>
<p><strong>Myntra Sponsored Ads</strong> are keyword-based and work similarly to Amazon Ads. Budget requirements: minimum ₹10,000/month to see meaningful visibility. Myntra also offers Brand Store pages and Editorial features for established brands.</p>
<p><strong>AJIO Ads</strong> are less self-serve and more curated. AJIO often features new brands in their editorial newsletters and app banners at lower cost than Myntra's equivalent placements.</p>
<p><strong>Verdict:</strong> Myntra offers more control; AJIO offers more editorial opportunity for new brands.</p>

<h2>Which Should You Launch on First?</h2>
<p>The honest answer depends on your brand positioning:</p>
<ul>
<li><strong>Women's western wear / casual / streetwear → Launch on Myntra first.</strong> The traffic volume justifies the investment.</li>
<li><strong>Premium ethnic wear / fusion fashion → Launch on AJIO first.</strong> Less competition, higher AOV buyers, editorial opportunities.</li>
<li><strong>Accessories / jewellery → Launch on both simultaneously.</strong> Both platforms have strong accessories categories with lower competition than apparel.</li>
</ul>
<p>Most established brands should be on both platforms within 6 months. The incremental revenue from dual-platform presence consistently exceeds the additional management cost.</p>
<p>Our <a href="/services/marketplace-onboarding">marketplace onboarding team</a> manages simultaneous onboarding on Myntra, AJIO, and 30+ other Indian platforms. <a href="/contact">Book a free strategy call</a> to plan your multi-platform launch.</p>`,
    category: 'Marketplace Strategy',
    author: 'Heritage Apparels',
    meta_title: 'Myntra vs AJIO: Which Is Better for New Fashion Brands in India? | Heritage Apparels',
    meta_description: 'Data-driven comparison of Myntra and AJIO for new fashion brands — traffic, commission rates, catalogue requirements, buyer demographics, and which delivers faster ROI.',
    published: 1,
    created_at: '2025-04-02T10:00:00Z',
  },
  {
    title: 'How to Run Meta Ads for a Fashion Brand in India: Complete Step-by-Step Guide',
    slug: 'meta-ads-fashion-brand-india-guide',
    excerpt: 'A practical, step-by-step guide to running profitable Meta Ads (Facebook and Instagram) for fashion and D2C brands in India — audiences, creatives, campaign structure, and ROAS benchmarks.',
    content: `<p>Meta Ads (Facebook and Instagram Ads) remain the single most powerful paid acquisition channel for D2C fashion brands in India. When done right, they deliver 4–8x ROAS consistently. When done wrong — which is how 80% of brands run them — they burn budget with nothing to show. Here's exactly how to do it right.</p>

<h2>Step 1: Get Your Foundation Right Before Spending</h2>
<p>Most brands rush to create ads before their foundation is solid. This guarantees poor results. Before running a single rupee of ads, confirm:</p>
<ul>
<li><strong>Meta Pixel is properly installed</strong> on your website or Shopify store and firing correctly. Test using Meta Pixel Helper Chrome extension.</li>
<li><strong>Standard events are configured:</strong> ViewContent, AddToCart, InitiateCheckout, Purchase must all be firing with correct parameters (value, currency, content_type).</li>
<li><strong>Catalogue is uploaded</strong> and syncing with your product feed if running Dynamic Product Ads.</li>
<li><strong>Landing pages convert:</strong> No point driving traffic to a page that converts at under 1%. Benchmark: 1.5–3% conversion is the baseline for fashion in India.</li>
</ul>

<h2>Step 2: Understand Campaign Objectives</h2>
<p>Choose the wrong objective and Meta will show your ads to completely the wrong people:</p>
<ul>
<li><strong>Awareness:</strong> Maximise reach. Used for new brand launches before purchase data exists.</li>
<li><strong>Traffic:</strong> Drive clicks to website. Use with caution — optimises for clickers, not buyers.</li>
<li><strong>Engagement:</strong> Used for social proof building. Not for direct revenue.</li>
<li><strong>Leads:</strong> Collect contact forms. Use for high-ticket items or service-based businesses.</li>
<li><strong>Sales (Conversions):</strong> This is what D2C brands should primarily use. Meta optimises for people who are likely to purchase. <strong>Use this once you have 50+ purchase events/month.</strong></li>
</ul>

<h2>Step 3: Full-Funnel Campaign Structure</h2>
<p>The biggest mistake Indian fashion brands make is running only one campaign type. A profitable Meta setup requires three campaign layers working together:</p>

<h3>Top of Funnel (TOFU) — 40% of budget</h3>
<p>Goal: Reach new potential customers who don't know your brand.</p>
<ul>
<li>Objective: Sales (Conversions) → Purchase event</li>
<li>Audience: Interest-based (fashion, specific brands, lifestyle interests) + Broad (let Meta find buyers)</li>
<li>Creative: Video ads showing the brand story and product lifestyle shots. 15–30 second Reels-format.</li>
<li>Budget: Start at ₹500–1,000/day per ad set</li>
</ul>

<h3>Middle of Funnel (MOFU) — 35% of budget</h3>
<p>Goal: Re-engage people who showed interest but didn't buy.</p>
<ul>
<li>Objective: Sales (Conversions) → AddToCart or InitiateCheckout</li>
<li>Audience: Website visitors (last 30 days), Video viewers (50%+), Instagram engagers (last 60 days)</li>
<li>Creative: Product-focused carousels, testimonials, "Why choose us" content</li>
</ul>

<h3>Bottom of Funnel (BOFU) — 25% of budget</h3>
<p>Goal: Convert cart abandoners and close warm prospects.</p>
<ul>
<li>Objective: Sales (Conversions) → Purchase</li>
<li>Audience: Add to Cart but not Purchase (last 14 days), Checkout initiated but not purchased</li>
<li>Creative: Dynamic Product Ads (DPA) showing exact products they viewed, urgency messaging, offer if applicable</li>
</ul>

<h2>Step 4: Creative Strategy That Works for Indian Fashion</h2>
<p>Creative is 70% of your ad performance. These formats consistently outperform for Indian fashion brands:</p>
<ul>
<li><strong>Reel-format video (9:16):</strong> Show the product being worn, styled, and described in Hindi or a mix of Hindi-English. Authenticity outperforms polished production in TOFU.</li>
<li><strong>UGC-style testimonials:</strong> Real customer reviews delivered to camera. Dramatically lowers CPM and improves ROAS.</li>
<li><strong>Carousel with lifestyle + product:</strong> First card = lifestyle/emotion, subsequent cards = product details + price. Used in MOFU.</li>
<li><strong>Offer-led static ads:</strong> Clear discount messaging with product imagery. Used in BOFU.</li>
</ul>
<p>Our <a href="/services/performance-marketing">performance marketing team</a> produces all ad creatives in-house — static, video, and carousel — as part of our management retainer. No separate creative production fee.</p>

<h2>Step 5: Audience Targeting for Indian Fashion</h2>
<p>The best-performing audience segments for Indian fashion brands on Meta:</p>
<ul>
<li>Women 22–38, Mumbai/Delhi/Bengaluru/Hyderabad/Chennai + Tier 2 cities</li>
<li>Interest in: Myntra, AJIO, Nykaa, Zara India, H&M India, fashion magazines</li>
<li>Behaviour: Online shoppers, frequent travellers, fashion enthusiasts</li>
<li>Lookalike: 1–3% lookalike of your Purchase customers (most powerful audience once you have 500+ purchases)</li>
</ul>

<h2>Step 6: ROAS Benchmarks for Indian Fashion</h2>
<ul>
<li>Learning phase (Month 1): 1.5–2.5x ROAS is normal while Meta learns</li>
<li>Optimisation phase (Months 2–3): 3–5x ROAS as winning audiences and creatives are identified</li>
<li>Scaled performance (Month 4+): 4–8x ROAS consistently with proper budget management</li>
</ul>
<p>Brands that see under 2x ROAS after 3 months typically have one of three problems: landing page conversion issues, poor creative quality, or targeting that's too narrow or too broad.</p>

<h2>Common Mistakes That Destroy ROAS</h2>
<ul>
<li>Changing budgets more than 20% in 7 days (resets the learning phase)</li>
<li>Running too many ad sets with too little budget each (budget fragmentation)</li>
<li>Not running retargeting campaigns (leaving 60% of potential revenue on the table)</li>
<li>Using Traffic objective instead of Conversions (Meta sends wrong people)</li>
<li>Pausing campaigns during slow days instead of adjusting bids</li>
</ul>
<p>Want a free audit of your current Meta Ads account? Our <a href="/contact">team reviews your account</a> and provides a detailed ROAS improvement plan within 48 hours — no commitment required.</p>`,
    category: 'Performance Marketing',
    author: 'Heritage Apparels',
    meta_title: 'How to Run Meta Ads for a Fashion Brand in India — Complete Guide | Heritage Apparels',
    meta_description: 'Step-by-step guide to running profitable Meta Ads for D2C fashion brands in India — campaign structure, audiences, creatives, and ROAS benchmarks.',
    published: 1,
    created_at: '2025-03-28T10:00:00Z',
  },
  {
    title: 'Private Label Clothing Manufacturing in India: The Complete Sourcing Guide',
    slug: 'private-label-clothing-manufacturing-india',
    excerpt: 'Everything US and Indian brands need to know about private label clothing manufacturing in India — how to find factories, negotiate MOQs, manage quality, and get production-ready.',
    content: `<p>India is the world's second-largest textile producer and one of the most competitive sourcing destinations for private label clothing brands globally. Whether you're a US brand looking to source from India or an Indian entrepreneur building a D2C label, this guide walks you through the complete manufacturing process.</p>

<h2>Why India for Private Label Clothing Manufacturing?</h2>
<ul>
<li><strong>Cost advantage:</strong> Indian manufacturing is typically 35–60% cheaper than comparable quality from China or Bangladesh for MOQs under 1,000 units per style</li>
<li><strong>Fabric breadth:</strong> India produces 70% of the world's hand-woven fabric and is a global leader in cotton, silk, and technical textiles</li>
<li><strong>Craftsmanship:</strong> Hand embroidery, block printing, batik, and traditional techniques unavailable at competitive rates elsewhere</li>
<li><strong>English-speaking industry:</strong> Unlike many Asian manufacturing hubs, most Indian garment factories operate in English, making communication significantly easier for US brands</li>
<li><strong>Established export infrastructure:</strong> India has dedicated garment export clusters in Mumbai, Delhi, Jaipur, Tirupur, Surat, and Bengaluru with established customs and shipping infrastructure</li>
</ul>

<h2>The 5 Main Garment Manufacturing Clusters in India</h2>
<p>Different cities specialise in different product categories:</p>
<ul>
<li><strong>Tirupur, Tamil Nadu:</strong> India's knitwear capital. Specialises in t-shirts, polo shirts, activewear, hoodies, and cotton knit garments. Home to 8,000+ factories.</li>
<li><strong>Surat, Gujarat:</strong> Synthetic fabrics, sarees, lehengas, and party wear. Home to the largest polyester textile market in Asia.</li>
<li><strong>Jaipur, Rajasthan:</strong> Block print, tie-dye, hand embroidery, ethnic wear, and artisan fashion. Ideal for boho and global craft-influenced aesthetics.</li>
<li><strong>Delhi NCR:</strong> Full-service fashion manufacturing. Western wear, premium ethnic, denim, and export-quality garments. Largest concentration of export houses.</li>
<li><strong>Mumbai:</strong> Premium fashion, designer wear, and high-end manufacturing. Hub for luxury brand manufacturing and certified sustainable production.</li>
</ul>

<h2>Step 1: Define Your Product Requirements Before Approaching Factories</h2>
<p>Factories waste enormous time with brands that haven't clarified their requirements. Before making your first call, prepare:</p>
<ul>
<li><strong>Tech packs</strong> (technical specifications) for each style — including measurements, fabric specs, construction details, and trims</li>
<li><strong>Target FOB price</strong> (the price you need the factory to meet for your business to work)</li>
<li><strong>Order quantity per style per colour</strong> — be realistic about this; inflating quantities to negotiate then ordering less destroys factory relationships</li>
<li><strong>Timeline requirements</strong> — sample development typically takes 3–6 weeks; production run takes 4–10 weeks depending on complexity</li>
<li><strong>Quality certifications required</strong> — for US export: CPSC compliance, OEKO-TEX, or specific chemical safety standards</li>
</ul>

<h2>Step 2: Finding the Right Factory</h2>
<p>There are three ways to find garment factories in India:</p>
<ol>
<li><strong>Trade directories:</strong> IndiaMART, TradeIndia, Alibaba India. These surface a wide range of factories but require significant vetting — many listings are from middlemen, not actual factories.</li>
<li><strong>Trade shows:</strong> Texworld India, IFFS (India International Fashion Fair), and sourcing events in Tirupur and Delhi. Excellent for meeting multiple factories in person.</li>
<li><strong>Sourcing agents / agencies:</strong> The fastest and most reliable path for brands that don't have India-based resources. A good sourcing partner has pre-vetted factory relationships and knows which factories deliver on quality and timelines.</li>
</ol>
<p>Heritage Apparels operates our own manufacturing facility and has direct relationships with 50+ vetted partner factories across all major Indian garment clusters. Our <a href="/services/manufacturing-sourcing">manufacturing and sourcing service</a> gives brands factory-direct access without the typical 6–12 month relationship-building period.</p>

<h2>Step 3: Sampling — The Most Critical Stage</h2>
<p>Never skip the sampling stage. Every private label manufacturer will tell you their factory is capable of your product. The sample tells you the truth.</p>
<ul>
<li>Request a <strong>counter sample</strong> (factory replicates your tech pack exactly) before paying any development charges</li>
<li>Evaluate: measurement accuracy vs spec, fabric quality and hand feel, construction quality (seam strength, allowances), colour matching to your pantone/swatch</li>
<li>Expect 2–3 sampling rounds before production-ready approval</li>
<li>Get samples from at least 3 factories before committing to a production order</li>
</ul>

<h2>Step 4: Negotiate MOQ Realistically</h2>
<p>MOQ (Minimum Order Quantity) negotiation tips:</p>
<ul>
<li>Factories quote high MOQs for new relationships — 200–500 units/style is typical opening position</li>
<li>For startups, negotiate down to 50–100 units/style by offering premium per-unit pricing</li>
<li>Once you have 2–3 successful orders with a factory, MOQs become negotiable</li>
<li>Consolidating multiple styles in one order (e.g., 10 styles at 60 units each) gives you negotiating leverage on per-unit pricing</li>
</ul>

<h2>Step 5: Quality Control</h2>
<p>For private label manufacturing, in-process quality checks are non-negotiable:</p>
<ul>
<li><strong>Inline inspection:</strong> Check 10–20% of production during manufacturing</li>
<li><strong>Pre-shipment inspection:</strong> Full AQL (Acceptable Quality Level) inspection before dispatch</li>
<li>For US-bound products: Third-party lab testing for CPSC, REACH, and California Prop 65 compliance</li>
</ul>

<h2>What Are Realistic Manufacturing Timelines?</h2>
<ul>
<li>Factory research + shortlisting: 2–4 weeks</li>
<li>Counter sample development: 3–6 weeks</li>
<li>Sample approval rounds: 2–4 weeks</li>
<li>Production run: 4–10 weeks</li>
<li>QC + export documentation: 1–2 weeks</li>
<li><strong>Total from start to shipment: 12–26 weeks for first order</strong></li>
</ul>
<p>Subsequent reorders run much faster (4–8 weeks) once the factory relationship and production process are established.</p>
<p><a href="/contact">Talk to our sourcing team</a> about accessing India's best garment factories for your private label brand.</p>`,
    category: 'Manufacturing & Sourcing',
    author: 'Heritage Apparels',
    meta_title: 'Private Label Clothing Manufacturing India — Complete Sourcing Guide | Heritage Apparels',
    meta_description: 'Complete guide to private label clothing manufacturing in India — factories, MOQs, sampling, quality control, and timelines for Indian and US brands.',
    published: 1,
    created_at: '2025-03-20T10:00:00Z',
  },
  {
    title: 'How to Sell on Nykaa Fashion: Brand Onboarding & Catalogue Guide (2025)',
    slug: 'nykaa-fashion-brand-onboarding-guide',
    excerpt: 'A step-by-step guide to getting your fashion brand listed on Nykaa Fashion — eligibility requirements, onboarding process, catalogue standards, pricing strategy, and how to drive sales after launch.',
    content: `<p>Nykaa Fashion has grown into one of India's leading premium fashion marketplaces, particularly dominant in women's western wear, ethnic fusion, and fashion accessories. With 40M+ users and a curated, premium positioning, Nykaa Fashion attracts high-intent, fashion-forward buyers willing to spend ₹1,000–₹10,000 per purchase. Here's exactly how to get your brand listed and selling.</p>

<h2>Nykaa Fashion vs Nykaa Beauty — Key Difference</h2>
<p>Nykaa operates two separate marketplace platforms: <strong>Nykaa Beauty</strong> (cosmetics, skincare, wellness) and <strong>Nykaa Fashion</strong> (clothing, accessories, footwear). If you're a fashion or accessories brand, you apply exclusively through the Nykaa Fashion seller portal. The two platforms have separate onboarding processes, cataloguing systems, and account managers.</p>

<h2>Who Can Sell on Nykaa Fashion?</h2>
<p>Nykaa Fashion is a curated marketplace — not every brand gets listed. Eligibility requirements:</p>
<ul>
<li><strong>GST registration</strong> is mandatory</li>
<li><strong>Minimum catalogue size:</strong> 15–20 unique SKUs for fashion; 10+ for accessories</li>
<li><strong>Price point alignment:</strong> Nykaa Fashion targets ₹799–₹8,000 range. Mass-market products below ₹499 MRP are rarely approved.</li>
<li><strong>Brand identity:</strong> Nykaa prefers brands with a distinct aesthetic identity — they want their marketplace to feel curated, not like a general bazaar</li>
<li><strong>Product quality:</strong> Physical samples are reviewed by the Nykaa curation team</li>
</ul>

<h2>Step 1: Apply via the Nykaa Fashion Seller Portal</h2>
<p>Go to <strong>nykaafashion.com/seller</strong> or reach out directly to Nykaa's brand acquisition team (they actively scout brands on Instagram). Required documents:</p>
<ul>
<li>GST certificate</li>
<li>PAN card</li>
<li>Bank account details for payment setup</li>
<li>Brand logo and basic brand brief</li>
<li>Trademark certificate (preferred but not always mandatory)</li>
<li>Physical product samples for curation review</li>
</ul>

<h2>Step 2: The Curation Review Process</h2>
<p>Unlike Myntra's more bureaucratic process, Nykaa's onboarding is more relationship and aesthetic-driven. The curation team reviews your:</p>
<ul>
<li>Instagram profile and content quality</li>
<li>Brand aesthetic and positioning</li>
<li>Physical product samples (quality, packaging, price-to-quality ratio)</li>
<li>Brand story and founder background</li>
</ul>
<p>Nykaa actively promotes brands with a strong social media presence. Brands with 10,000+ Instagram followers and quality content get prioritised. If your Instagram isn't strong, work on that before applying.</p>

<h2>Step 3: Catalogue Standards for Nykaa Fashion</h2>
<p>Nykaa's photography requirements are high but slightly more flexible than Myntra's for lifestyle imagery:</p>
<ul>
<li><strong>Hero image:</strong> White or off-white background, model mandatory for clothing and footwear</li>
<li><strong>Secondary images:</strong> Lifestyle shots allowed and encouraged — Nykaa's aesthetic leans editorial</li>
<li><strong>Image resolution:</strong> Minimum 1000×1500px (portrait orientation preferred)</li>
<li><strong>Colour accuracy:</strong> Images must accurately represent the true colour of the product</li>
<li><strong>Required attributes:</strong> Fabric composition, care instructions, occasion, fit description, size guide</li>
</ul>
<p>Nykaa Fashion's platform particularly favours editorial lifestyle imagery in their homepage and campaign features — brands with strong lifestyle photography get more editorial placements. Our <a href="/services/fashion-photoshoot">fashion photography service</a> produces both Nykaa-compliant catalogue images and editorial lifestyle shots in a single shoot session.</p>

<h2>Step 4: Pricing Strategy on Nykaa Fashion</h2>
<p>Nykaa Fashion's commission structure:</p>
<ul>
<li>Western wear: 22–27%</li>
<li>Ethnic wear: 20–25%</li>
<li>Accessories and jewellery: 25–32%</li>
<li>Footwear: 22–28%</li>
</ul>
<p>Nykaa also runs frequent sale events — Big Beauty Sale, Nykaa Fashion Week, End of Season Sale — where brands are expected to participate with 20–50% discounts. Factor this into your MRP planning. A ₹1,499 MRP product with 25% commission leaves ₹1,124 before any promotional discount. During a 30% off sale, your effective revenue is ₹787. Make sure this still covers manufacturing cost, returns, and shipping.</p>

<h2>Step 5: Driving Sales After Launch</h2>
<p>Going live on Nykaa Fashion doesn't automatically mean sales. Three strategies that work:</p>
<ol>
<li><strong>Nykaa Ads:</strong> Sponsored placements within the Nykaa Fashion app. Budget: minimum ₹5,000–10,000/month. Essential during your first 60 days to build sales velocity.</li>
<li><strong>Editorial features:</strong> Pitch your brand to Nykaa's editorial team for inclusion in "New Arrivals", "Brand of the Month", or occasion-based collections. Brands with strong aesthetics and responsive account managers get these placements.</li>
<li><strong>Campaign participation:</strong> Register for every Nykaa campaign (Monsoon Edit, Festive Collection, etc.) with fresh catalogue uploads and offer pricing. Campaign periods drive 3–5x normal daily sales.</li>
</ol>

<h2>Common Reasons for Nykaa Fashion Rejection</h2>
<ul>
<li>Price point too low (below ₹699 MRP for clothing)</li>
<li>Generic aesthetic with no distinct brand identity</li>
<li>Poor Instagram presence or content quality</li>
<li>Catalogue images not meeting quality standards</li>
<li>Product quality below Nykaa's curation threshold</li>
</ul>

<h2>Nykaa Fashion + Myntra: Should You Be on Both?</h2>
<p>Yes — the buyer demographics don't overlap as much as you might think. Myntra has stronger western wear and fast fashion traffic; Nykaa Fashion has stronger premium ethnic and accessories buyers. Brands on both platforms consistently generate 40–70% more marketplace revenue than single-platform brands.</p>
<p>Our <a href="/services/marketplace-onboarding">marketplace onboarding team</a> handles simultaneous Nykaa Fashion + Myntra + AJIO onboarding so you go live on all platforms at the same time instead of sequentially. <a href="/contact">Get in touch</a> to discuss your multi-platform strategy.</p>`,
    category: 'Marketplace Strategy',
    author: 'Heritage Apparels',
    meta_title: 'How to Sell on Nykaa Fashion — Brand Onboarding Guide 2025 | Heritage Apparels',
    meta_description: 'Complete guide to getting your fashion brand listed on Nykaa Fashion — eligibility, onboarding process, catalogue standards, pricing strategy, and driving sales after launch.',
    published: 1,
    created_at: '2025-03-12T10:00:00Z',
  },
  // ── EXISTING SEED POSTS (kept for continuity) ────────────────────────────
  {
    title: '10 Fashion Photography Trends Dominating D2C Brands in 2025',
    slug: 'fashion-photography-trends-d2c-2025',
    excerpt: 'Discover the top fashion photography trends that are helping D2C brands achieve higher conversion rates and stronger brand identities in 2025.',
    content: `<p>The fashion photography landscape is evolving rapidly, and D2C brands that adapt quickly are seeing dramatic improvements in their conversion rates and brand perception. Here are the 10 trends you need to know about.</p>
<h2>1. Authentic Lifestyle Integration</h2>
<p>Gone are the days of sterile white-background product shots dominating every touchpoint. Today's consumers crave authenticity. D2C brands are investing in lifestyle photography that places their products in real, aspirational settings that resonate with their target demographic.</p>
<h2>2. Micro-Expression Close-Ups</h2>
<p>Macro photography of fabric textures, stitching details, and material quality is becoming a cornerstone of premium fashion brands. This trend directly addresses the consumer's inability to physically touch products online.</p>
<h2>3. Inclusive Model Casting</h2>
<p>Progressive D2C brands are embracing diversity not just as a moral imperative but as a business strategy. Shoots featuring models across body types, skin tones, and age groups consistently outperform homogeneous campaigns in both engagement and conversion.</p>
<h2>4. Behind-the-Scenes Content Integration</h2>
<p>Consumers increasingly want to understand the story behind their purchases. Weaving BTS content into your photography strategy builds trust and elevates perceived brand value.</p>
<h2>5. Motion Photography & Cinemagraphs</h2>
<p>Static images are being enhanced with subtle motion elements. Cinemagraphs—photographs with one looping element—create thumb-stopping content that outperforms both static images and full video in many contexts.</p>
<h2>6. Color Psychology-Driven Palettes</h2>
<p>Strategic use of color in backgrounds, props, and styling to trigger specific emotional responses is becoming more sophisticated. Leading brands are commissioning custom color research to inform their visual direction.</p>
<h2>7. Seasonal Storytelling</h2>
<p>Rather than one-off product shots, forward-thinking brands are creating cohesive seasonal narratives that build on each other, creating a recognizable visual identity that builds over time.</p>
<h2>8. User-Generated Content (UGC) Aesthetic</h2>
<p>Professional photography that mimics the authentic feel of UGC is proving highly effective, particularly for paid social campaigns.</p>
<h2>9. Sustainability Storytelling</h2>
<p>As consumers become more eco-conscious, photography that tells the story of sustainable materials, ethical production, and environmental responsibility is becoming a powerful differentiator.</p>
<h2>10. Data-Driven Creative Decisions</h2>
<p>The most sophisticated brands are using A/B testing data to inform creative decisions, from model positioning to background colors, creating a feedback loop between performance data and creative direction.</p>
<p>At Heritage Apparels, we stay ahead of these trends to deliver photography that not only looks exceptional but drives measurable results for your brand.</p>`,
    category: 'Fashion Photography',
    author: 'Heritage Apparels',
    featured_image: '/blog/fashion-trends-2025.jpg',
    meta_title: '10 Fashion Photography Trends for D2C Brands in 2025 | Heritage Apparels',
    meta_description: 'Discover top fashion photography trends helping D2C brands boost conversions and build stronger brand identities in 2025.',
    published: 1,
    created_at: '2025-01-15T10:00:00Z',
  },
  {
    title: 'The Complete Guide to Digital Cataloging for Fashion E-commerce',
    slug: 'complete-guide-digital-cataloging-fashion-ecommerce',
    excerpt: 'A comprehensive guide to creating professional digital catalogs that convert browsers into buyers for fashion e-commerce brands.',
    content: `<p>A well-executed digital catalog is one of the highest-ROI investments a fashion e-commerce brand can make. This guide breaks down everything you need to know.</p>
<h2>What Is Digital Cataloging?</h2>
<p>Digital cataloging is the systematic process of professionally photographing, editing, organizing, and presenting your product inventory in a format optimized for online shopping.</p>
<h2>Why Digital Cataloging Matters for Fashion Brands</h2>
<p>Fashion products rely almost entirely on visual appeal to drive purchase decisions. When consumers can't touch, try on, or physically examine a garment, your photography must do all that heavy lifting.</p>
<h2>The 8 Elements of a High-Converting Fashion Catalog</h2>
<h3>1. Consistent Lighting Setup</h3>
<p>Consistency across your catalog builds brand credibility. Establish a lighting setup and maintain it throughout your shoot.</p>
<h3>2. Multiple Angles Per Product</h3>
<p>Industry data shows that products with 8+ images convert at significantly higher rates than those with 1-3 images.</p>
<h3>3. True-to-Color Accuracy</h3>
<p>Color discrepancy between catalog images and delivered products is the #1 driver of fashion returns.</p>
<h3>4. Proper Sizing Context</h3>
<p>Include model measurements and the size they're wearing for every garment.</p>
<h3>5. Detail & Texture Shots</h3>
<p>Close-up shots of fabric texture, embroidery, buttons, zippers, and other details address quality questions before they become return reasons.</p>
<h3>6. Size Inclusive Model Shots</h3>
<p>Showing garments on multiple body types dramatically reduces return rates and increases conversion.</p>
<h3>7. Optimized Image Formats</h3>
<p>Use WebP format for web display, maintain original RAW files for future use.</p>
<h3>8. Systematic File Organization</h3>
<p>Implement a consistent naming convention and folder structure from day one.</p>
<p>Contact us today to learn how our digital cataloging service can transform your fashion e-commerce performance.</p>`,
    category: 'Digital Cataloging',
    author: 'Heritage Apparels',
    featured_image: '/blog/digital-cataloging-guide.jpg',
    meta_title: 'Complete Guide to Digital Cataloging for Fashion E-commerce | Heritage Apparels',
    meta_description: 'Learn how to create professional digital catalogs that convert browsers into buyers. Complete guide from India\'s leading fashion photography agency.',
    published: 1,
    created_at: '2025-01-10T10:00:00Z',
  },
  {
    title: 'How to Brief a Fashion Photographer: A D2C Brand\'s Complete Checklist',
    slug: 'how-to-brief-fashion-photographer-d2c-brand-checklist',
    excerpt: 'Get the most out of your fashion photoshoot investment with this comprehensive creative brief checklist used by leading D2C brands.',
    content: `<p>A well-prepared creative brief is the difference between a photoshoot that delivers exceptional results and one that requires expensive reshoots. Here's the comprehensive checklist.</p>
<h2>Why the Brief Matters</h2>
<p>Professional fashion photographers are visual storytellers, not mind readers. The more clearly you communicate your vision, target audience, and specific requirements upfront, the better your final images will be.</p>
<h2>The Complete Fashion Photography Brief Checklist</h2>
<h3>Brand Identity Section</h3>
<ul>
<li>Brand positioning statement (luxury, contemporary, accessible, etc.)</li>
<li>Brand color palette with hex codes</li>
<li>Typography preferences for any graphic overlays</li>
<li>3-5 visual references that capture your brand aesthetic</li>
<li>3-5 references of what you explicitly want to avoid</li>
</ul>
<h3>Target Audience Section</h3>
<ul>
<li>Primary customer demographics (age, gender, income, lifestyle)</li>
<li>What platforms does your audience primarily shop on?</li>
<li>What content resonates most with your audience?</li>
</ul>
<h3>Product & Technical Requirements</h3>
<ul>
<li>Complete SKU list with product descriptions</li>
<li>Preferred shot types per product category</li>
<li>Platform specifications (Instagram, website, Myntra, Amazon, etc.)</li>
<li>Background preferences (white, colored, lifestyle, outdoor)</li>
</ul>
<h2>Working with Heritage Apparels</h2>
<p>When you partner with Heritage Apparels, our creative directors guide you through the briefing process with our proprietary Brand Vision Framework.</p>`,
    category: 'Fashion Photography',
    author: 'Heritage Apparels',
    featured_image: '/blog/fashion-photographer-brief.jpg',
    meta_title: 'How to Brief a Fashion Photographer: D2C Brand Checklist | Heritage Apparels',
    meta_description: 'Get the most from your fashion photoshoot with our comprehensive creative brief checklist. Used by leading D2C brands across India.',
    published: 1,
    created_at: '2025-01-08T10:00:00Z',
  },
  {
    title: 'Instagram Reels for Fashion Brands: What\'s Working in 2025',
    slug: 'instagram-reels-fashion-brands-2025',
    excerpt: 'Proven Instagram Reels strategies that are driving massive growth for fashion D2C brands. Real data, real results.',
    content: `<p>Instagram Reels have fundamentally changed how fashion brands build audiences and drive sales. Here's what the data shows is actually working in 2025.</p>
<h2>The State of Fashion Reels in 2025</h2>
<p>Reels now drive 67% more organic reach than static posts for fashion brands. The algorithm heavily favors Reels content, making it the single most important format for brands looking to grow without paid advertising.</p>
<h2>7 Reel Formats That Are Crushing It Right Now</h2>
<h3>1. The "Transition Reveal"</h3>
<p>These Reels showcase an outfit transformation through creative camera transitions. The satisfaction of a perfectly executed transition keeps viewers watching to the end, boosting completion rates.</p>
<h3>2. Behind-the-Scenes Production Content</h3>
<p>BTS content from photoshoots, design studios, and production facilities consistently generates high engagement.</p>
<h3>3. "Get Ready With Me" (GRWM) Collaborations</h3>
<p>Partnering with micro-influencers (10K-100K followers) for authentic GRWM content featuring your products delivers exceptional ROI.</p>
<h3>4. Styling Tutorials</h3>
<p>"3 Ways to Wear [Product]" and similar styling tutorials provide genuine value while showcasing product versatility.</p>
<h2>Technical Specifications for Maximum Reach</h2>
<ul>
<li>Duration: 15-30 seconds performs best for fashion content</li>
<li>Aspect ratio: 9:16 (vertical) for full-screen immersion</li>
<li>Resolution: 1080 x 1920 pixels minimum</li>
<li>Captions: Always add captions — 85% of Reels are watched without sound</li>
</ul>
<h2>Heritage Apparels: Your Reels Production Partner</h2>
<p>Our Social Media Content team specializes in creating Reels that combine exceptional production quality with platform-native authenticity.</p>`,
    category: 'Social Media',
    author: 'Heritage Apparels',
    featured_image: '/blog/instagram-reels-fashion.jpg',
    meta_title: 'Instagram Reels for Fashion Brands: What\'s Working in 2025 | Heritage Apparels',
    meta_description: 'Proven Instagram Reels strategies driving massive growth for fashion D2C brands in 2025.',
    published: 1,
    created_at: '2025-01-05T10:00:00Z',
  },
  {
    title: 'ROI of Professional Fashion Photography: The Numbers Don\'t Lie',
    slug: 'roi-professional-fashion-photography-data',
    excerpt: 'Hard data on how professional fashion photography impacts conversion rates, return rates, and brand perception for D2C brands.',
    content: `<p>Every rupee invested in professional fashion photography should generate a measurable return. Here's the data that proves it does.</p>
<h2>The Business Case for Professional Fashion Photography</h2>
<p>Many emerging D2C brands treat photography as a cost to minimize rather than an investment to optimize. The data tells a very different story.</p>
<h2>Conversion Rate Impact</h2>
<p>A study of 1,000 fashion e-commerce brands showed that those with professional photography achieved an average 94% higher conversion rate compared to those using smartphone or amateur photography.</p>
<h2>Return Rate Reduction</h2>
<p>The average fashion return rate in India is 28-35%. Brands with high-quality, accurate photography consistently achieve return rates 40-60% lower than the industry average.</p>
<h2>Average Order Value (AOV) Increase</h2>
<p>Brands that invest in lifestyle photography alongside product shots see AOV increases of 12-18% on average.</p>
<h2>Social Media Performance</h2>
<p>Professional fashion photography generates 3.7x more shares, 4.2x more saves, and 2.9x more comments than amateur photography across Instagram and Pinterest.</p>
<h2>Calculating Your Photography ROI</h2>
<p>Use this simple formula:</p>
<p><strong>ROI = ((Revenue Increase from Improved Photography) - (Photography Investment)) / (Photography Investment) × 100</strong></p>
<p>Contact our team for a personalized ROI projection based on your specific metrics.</p>`,
    category: 'Business Strategy',
    author: 'Heritage Apparels',
    featured_image: '/blog/photography-roi-data.jpg',
    meta_title: 'ROI of Professional Fashion Photography: Real Data | Heritage Apparels',
    meta_description: 'Hard data on how professional fashion photography impacts conversion rates, return rates, and brand value for D2C brands.',
    published: 1,
    created_at: '2025-01-02T10:00:00Z',
  },
  {
    title: 'Building a D2C Fashion Brand Visual Identity from Scratch',
    slug: 'building-d2c-fashion-brand-visual-identity',
    excerpt: 'A step-by-step guide to creating a cohesive, differentiated visual identity for your D2C fashion brand that resonates with your target customer.',
    content: `<p>Your visual identity is the visual language your brand speaks to the world. For D2C fashion brands, it's often the primary basis on which consumers decide whether to explore further or scroll past.</p>
<h2>What Is a Fashion Brand Visual Identity?</h2>
<p>Your visual identity encompasses every visual element your brand produces: logo, color palette, typography, photography style, graphic elements, video aesthetics.</p>
<h2>Step 1: Define Your Brand Positioning</h2>
<p>Before opening any design software, you need crystal clarity on who your primary customer is, what emotional promise your brand makes, and what adjectives should describe your brand's visual personality.</p>
<h2>Step 2: Develop Your Color Strategy</h2>
<p>Color is one of the most powerful tools in your visual identity toolkit. Humans process color before text or shape, making your color choices critically important.</p>
<h2>Step 3: Establish Your Typography System</h2>
<p>Typography communicates personality even before the reader processes the words. A luxury brand's typography will feel different from a contemporary brand's.</p>
<h2>Step 4: Create Your Photography Direction</h2>
<p>For a fashion brand, photography direction is arguably your most important visual identity element. It should address shooting environment preferences, lighting mood, model casting direction, and color temperature.</p>
<h2>Step 5: Document Everything in a Brand Guide</h2>
<p>Your visual identity only delivers value if it's applied consistently.</p>
<h2>Heritage Apparels Brand Strategy Service</h2>
<p>Our Brand Strategy team has built visual identities for over 50 D2C fashion brands across India.</p>`,
    category: 'Brand Strategy',
    author: 'Heritage Apparels',
    featured_image: '/blog/brand-visual-identity.jpg',
    meta_title: 'Building a D2C Fashion Brand Visual Identity | Heritage Apparels',
    meta_description: 'Step-by-step guide to creating a cohesive visual identity for your D2C fashion brand.',
    published: 1,
    created_at: '2024-12-28T10:00:00Z',
  },
];

function getStore(): DBStore {
  const store = loadStore();
  // Upsert seed posts — add any new slugs that don't exist yet
  let changed = false;
  for (const seed of SEED_POSTS) {
    const exists = store.blog_posts.some((p) => p.slug === seed.slug);
    if (!exists) {
      store.blog_posts.push({ ...seed, id: store._nextPostId++ });
      changed = true;
    }
  }
  if (changed) saveStore(store);
  return store;
}

// ── Leads ──────────────────────────────────────────────────────────────────

export function insertLead(lead: Lead): number {
  const store = getStore();
  const id = store._nextLeadId++;
  const newLead: Lead = {
    ...lead,
    id,
    status: lead.status || 'new',
    source: lead.source || 'website',
    created_at: new Date().toISOString(),
  };
  store.leads.push(newLead);
  saveStore(store);
  return id;
}

export function getAllLeads(): Lead[] {
  const store = getStore();
  return [...store.leads].sort(
    (a, b) => new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime()
  );
}

export function getLeadById(id: number): Lead | undefined {
  const store = getStore();
  return store.leads.find((l) => l.id === id);
}

export function updateLeadStatus(id: number, status: string): void {
  const store = getStore();
  const lead = store.leads.find((l) => l.id === id);
  if (lead) {
    lead.status = status;
    saveStore(store);
  }
}

// ── Blog Posts ─────────────────────────────────────────────────────────────

export function getAllPublishedBlogPosts(): BlogPost[] {
  const store = getStore();
  return store.blog_posts
    .filter((p) => p.published === 1)
    .sort((a, b) => new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const store = getStore();
  return store.blog_posts.find((p) => p.slug === slug && p.published === 1);
}

export function getRecentBlogPosts(limit: number = 3): BlogPost[] {
  return getAllPublishedBlogPosts().slice(0, limit);
}
