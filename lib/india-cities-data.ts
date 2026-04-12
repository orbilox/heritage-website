export interface IndiaCity {
  slug: string;
  name: string;
  state: string;
  tagline: string;
  description: string;
  fashionScene: string;
  topServices: string[];
  stats: { value: string; label: string }[];
  nearbyAreas: string[];
}

export const indiaCities: IndiaCity[] = [
  {
    slug: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    tagline: 'India\'s Fashion Capital — End-to-End Brand Services',
    description: 'Mumbai is India\'s undisputed fashion and commerce capital. Home to the Dharavi garment cluster, the Bhiwandi textile warehousing hub, Bandra\'s D2C brand offices, and India\'s largest concentration of fashion photographers and creative agencies. Heritage Apparels\' primary operations are headquartered in Mumbai.',
    fashionScene: 'Mumbai brands dominate Myntra and Nykaa Fashion listings. The city produces the largest volume of D2C fashion launches in India, driven by a concentrated pool of fashion entrepreneurs, venture capital, and manufacturing access.',
    topServices: ['Fashion Photoshoot & Digital Cataloging', 'Marketplace Onboarding (Myntra, Ajio, Amazon)', 'Brand Strategy & Identity', 'Performance Marketing (Meta & Google)', 'Manufacturing & Fabric Sourcing (Bhiwandi, Dharavi)'],
    stats: [
      { value: '200+', label: 'Mumbai Brands Served' },
      { value: '48hrs', label: 'Catalog Turnaround' },
      { value: '15+', label: 'Mumbai Studio Locations' },
      { value: '₹1Cr+', label: 'Revenue Generated Per Brand' },
    ],
    nearbyAreas: ['Bandra', 'Andheri', 'Lower Parel', 'Dharavi', 'Bhiwandi', 'Thane', 'Navi Mumbai'],
  },
  {
    slug: 'delhi',
    name: 'Delhi',
    state: 'Delhi NCR',
    tagline: 'India\'s Ethnic Wear & Export Hub — Fashion Brand Services',
    description: 'Delhi NCR is India\'s largest garment manufacturing region — home to Karol Bagh\'s wholesale fashion market, Lajpat Nagar\'s fabric hubs, and Noida\'s export garment factories. Heritage Apparels\' Delhi studio serves NCR brands with fashion photography, cataloging, and brand strategy services.',
    fashionScene: 'Delhi brands dominate ethnic wear, bridal, and export-oriented fashion categories. Noida\'s export garment cluster produces for international markets. Karol Bagh and Chandni Chowk are the trade epicentres of India\'s wholesale fashion market.',
    topServices: ['Ethnic Wear Photography & Cataloging', 'Marketplace Onboarding (Myntra, Amazon, Meesho)', 'Export-Oriented Brand Building', 'Brand Strategy for Bridal & Wedding Fashion', 'Manufacturing Sourcing (Noida, Faridabad Clusters)'],
    stats: [
      { value: '150+', label: 'Delhi Brands Served' },
      { value: '24hrs', label: 'Express Catalog Turnaround' },
      { value: '3', label: 'Delhi NCR Studio Locations' },
      { value: '500+', label: 'SKUs Photographed Daily' },
    ],
    nearbyAreas: ['Karol Bagh', 'Lajpat Nagar', 'Noida', 'Gurugram', 'Faridabad', 'Chandni Chowk', 'South Delhi'],
  },
  {
    slug: 'bangalore',
    name: 'Bangalore',
    state: 'Karnataka',
    tagline: 'South India\'s D2C Fashion Hub — Brand Building Services',
    description: 'Bangalore is India\'s startup capital and a rapidly growing hub for D2C fashion brands. The city\'s tech-savvy entrepreneur community has produced some of India\'s most innovative fashion D2C brands. Heritage Apparels serves Bangalore brands with photography, digital services, and marketplace onboarding.',
    fashionScene: 'Bangalore D2C brands lead in activewear, sustainable fashion, and tech-enabled personalized fashion. The city\'s concentration of VC funding and digital talent creates ideal conditions for D2C brand building.',
    topServices: ['D2C Brand Strategy & Identity', 'Fashion Photoshoot & Cataloging', 'Performance Marketing (Meta & Google)', 'Marketplace Onboarding (Amazon, Myntra)', 'Social Media & Reels Production'],
    stats: [
      { value: '80+', label: 'Bangalore Brands Served' },
      { value: '4.2x', label: 'Average ROAS Delivered' },
      { value: '1', label: 'Bangalore Studio Location' },
      { value: '48hrs', label: 'Brand Shoot Delivery' },
    ],
    nearbyAreas: ['Koramangala', 'HSR Layout', 'Indiranagar', 'Whitefield', 'Electronic City', 'Jayanagar', 'JP Nagar'],
  },
  {
    slug: 'tirupur',
    name: 'Tirupur',
    state: 'Tamil Nadu',
    tagline: 'India\'s Knitwear Capital — Manufacturing & Brand Services',
    description: 'Tirupur is the undisputed knitwear manufacturing capital of India, producing 90% of India\'s cotton knitwear exports. For D2C brands seeking T-shirts, activewear, innerwear, and knitwear production, Tirupur offers the lowest cost-per-unit in Asia outside of Bangladesh. Heritage Apparels manages manufacturing sourcing, quality control, and export documentation from Tirupur factories.',
    fashionScene: 'Tirupur factories produce for global fast fashion brands (H&M, Zara, C&A, Gap India sourcing), making manufacturing quality standards globally competitive. Local D2C brands are emerging with premium positioning built on Tirupur\'s manufacturing advantage.',
    topServices: ['Knitwear Manufacturing Sourcing', 'Factory Vetting & QC Management', 'Private Label Production', 'Export Documentation & Compliance', 'D2C Brand Launch (Tirupur-to-Marketplace)'],
    stats: [
      { value: '50+', label: 'Tirupur Factory Network' },
      { value: '35%', label: 'Cost Saving vs Mumbai' },
      { value: '₹80/unit', label: 'T-shirt Starting Price (FOB)' },
      { value: '21 Days', label: 'Sample Production Time' },
    ],
    nearbyAreas: ['Erode', 'Coimbatore', 'Salem', 'Karur', 'Avinashi'],
  },
  {
    slug: 'surat',
    name: 'Surat',
    state: 'Gujarat',
    tagline: 'India\'s Fabric & Saree Hub — Sourcing & Brand Services',
    description: 'Surat is India\'s largest textile manufacturing city — producing 65% of India\'s man-made fabric and a dominant share of sarees, dress materials, and polyester fashion. For D2C brands sourcing fabric, sarees, ethnic wear, or women\'s fashion, Surat\'s Ring Road textile market offers unmatched variety and pricing.',
    fashionScene: 'Surat\'s fashion ecosystem spans fabric production (polyester, georgette, chiffon, silk blends), saree manufacturing, and a rapidly growing D2C brand scene leveraging Meesho and Facebook Commerce for social commerce distribution.',
    topServices: ['Fabric Sourcing (Polyester, Georgette, Silk Blends)', 'Saree & Ethnic Wear Photography', 'Meesho & Marketplace Onboarding', 'Private Label Saree Brand Launch', 'Social Commerce Strategy (Facebook, Instagram, WhatsApp)'],
    stats: [
      { value: '65%', label: 'India\'s Fabric Produced Here' },
      { value: '₹120/metre', label: 'Premium Georgette FOB' },
      { value: '40+', label: 'Surat Fabric Mills Networked' },
      { value: '7 Days', label: 'Fabric Sample Turnaround' },
    ],
    nearbyAreas: ['Ring Road Market', 'Textile Market', 'Pandesara', 'Udhna', 'Bhagal', 'Katargam'],
  },
  {
    slug: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    tagline: 'India\'s Handcraft & Heritage Fashion Hub',
    description: 'Jaipur is the global epicentre for India\'s heritage textile traditions — block printing, Bandhani, Sanganeri prints, hand embroidery, and Rajasthani craft. For D2C brands building heritage fashion, artisan, or boho-ethnic collections, Jaipur\'s artisan clusters and fabric markets are unmatched. Jaipur products have strong export demand from the US, Europe, and Australia.',
    fashionScene: 'Jaipur\'s fashion ecosystem spans block print studios, hand-dye workshops, gemstone jewellery manufacturers, and a thriving export community. The Pink City\'s crafts are in high demand globally, particularly in the US and UK through Etsy, Anthropologie, and direct D2C channels.',
    topServices: ['Artisan Fashion Photography & Cataloging', 'Heritage Brand Strategy & Identity', 'Export-Ready Brand Building (US, UK, Australia)', 'Etsy & International Marketplace Onboarding', 'Manufacturing Sourcing (Block Print, Embroidery)'],
    stats: [
      { value: '500+', label: 'Artisan Workshops Networked' },
      { value: '$45', label: 'Block Print Dress Export Price (FOB)' },
      { value: '3x', label: 'US Export Price Premium' },
      { value: '21 Days', label: 'Custom Order Turnaround' },
    ],
    nearbyAreas: ['Sanganer', 'Bagru', 'Johari Bazaar', 'Bapu Bazaar', 'MI Road', 'Sitapura Industrial Area'],
  },
  {
    slug: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    tagline: 'East India\'s Fashion Hub — Jute, Ethnic & Wholesale',
    description: 'Kolkata is East India\'s fashion and textile centre — home to Burrabazar wholesale market, Tangra\'s leather goods manufacturers, and a thriving handloom and jute craft ecosystem. Heritage Apparels serves Kolkata brands with photography, cataloging, and marketplace onboarding services.',
    fashionScene: 'Kolkata brands lead in jute fashion, handloom sarees (Kantha, Jamdani), ethnic wear, and affordable women\'s fashion. The city\'s Burrabazar market is one of India\'s largest wholesale fashion hubs, serving retailers across East and North-East India.',
    topServices: ['Ethnic & Handloom Fashion Photography', 'Marketplace Onboarding (Meesho, Myntra, Amazon)', 'Jute & Sustainable Fashion Brand Building', 'Wholesale Brand Digitization', 'Social Commerce (Facebook, WhatsApp Commerce)'],
    stats: [
      { value: '60+', label: 'Kolkata Brands Served' },
      { value: '₹200Cr+', label: 'Kolkata Wholesale Market Size' },
      { value: '1', label: 'Studio Location' },
      { value: '48hrs', label: 'Delivery Turnaround' },
    ],
    nearbyAreas: ['Burrabazar', 'Gariahat', 'Park Street', 'Tangra', 'Howrah', 'Salt Lake', 'New Town'],
  },
  {
    slug: 'ahmedabad',
    name: 'Ahmedabad',
    state: 'Gujarat',
    tagline: 'Gujarat\'s Fashion & Textile Centre — Brand Services',
    description: 'Ahmedabad is Gujarat\'s commercial capital and a significant fashion manufacturing and wholesale hub. Home to the historic Sindhi Market textile bazaar and modern garment export factories, Ahmedabad serves as a key base for Gujarati D2C fashion brands entering digital channels.',
    fashionScene: 'Ahmedabad brands have traditionally dominated ethnic wear — bandhani, patola, and Gujarati embroidery. A new generation of D2C brands is now building premium positioning around these heritage crafts for Indian and global consumers.',
    topServices: ['Ethnic Fashion Photography & Cataloging', 'D2C Brand Launch (Myntra, Amazon, Nykaa)', 'Heritage Brand Strategy (Bandhani, Patola)', 'Performance Marketing', 'Manufacturing Sourcing'],
    stats: [
      { value: '50+', label: 'Ahmedabad Brands Served' },
      { value: '24hrs', label: 'Express Turnaround' },
      { value: '₹15,000', label: 'Photography Package Starting' },
      { value: '6', label: 'Marketplaces Managed' },
    ],
    nearbyAreas: ['Sindhi Market', 'CG Road', 'SG Highway', 'Gandhinagar', 'Anand', 'Nadiad', 'Rajkot'],
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    tagline: 'South India\'s Emerging Fashion Hub — Brand Services',
    description: 'Hyderabad is a rapidly growing D2C fashion market with a concentration of tech talent, fashion entrepreneurs, and a strong bridal and ethnic wear ecosystem. The city\'s Laad Bazaar is famous for its bangles and bridal accessories, while Uppada and Pochampally handlooms are world-renowned.',
    fashionScene: 'Hyderabad brands lead in bridal and ethnic fashion, with a growing contemporary fashion scene driven by the city\'s IT professional demographic. Hyderabad\'s pearl jewellery, Bidriware, and Kalamkari textiles are heritage products with strong global demand.',
    topServices: ['Bridal & Ethnic Fashion Photography', 'Jewellery Photography & Cataloging', 'Marketplace Onboarding (Myntra, Ajio, Amazon)', 'D2C Brand Strategy', 'Export Brand Building (US, UAE, UK)'],
    stats: [
      { value: '45+', label: 'Hyderabad Brands Served' },
      { value: '3x', label: 'Export Price Premium' },
      { value: '48hrs', label: 'Shoot Delivery Turnaround' },
      { value: '4', label: 'Marketplaces Managed Per Brand' },
    ],
    nearbyAreas: ['Laad Bazaar', 'Jubilee Hills', 'Banjara Hills', 'Secunderabad', 'Kukatpally', 'Kondapur'],
  },
  {
    slug: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    tagline: 'Pune\'s Growing D2C Fashion Scene — Brand Services',
    description: 'Pune is Maharashtra\'s second city and an increasingly important hub for D2C fashion brands — driven by a young, educated, fashion-conscious demographic and proximity to Mumbai\'s fashion infrastructure. Pune-based brands are growing rapidly on Myntra, Ajio, and social commerce channels.',
    fashionScene: 'Pune brands focus on contemporary western fashion, activewear, and sustainable fashion — categories that resonate strongly with the city\'s young professional and student demographic. Proximity to Mumbai makes Pune brands natural candidates for Mumbai-based photography and production services.',
    topServices: ['Fashion Photoshoot & Cataloging', 'D2C Brand Launch (Myntra, Ajio, Amazon)', 'Social Media & Reels Production', 'Performance Marketing', 'Brand Strategy & Identity'],
    stats: [
      { value: '40+', label: 'Pune Brands Served' },
      { value: '2–3 Days', label: 'Mumbai Studio Access Time' },
      { value: '₹25,000', label: 'Brand Shoot Starting Price' },
      { value: '5', label: 'Marketplaces Per Brand Average' },
    ],
    nearbyAreas: ['Koregaon Park', 'Baner', 'Viman Nagar', 'FC Road', 'Kothrud', 'Hinjewadi', 'Wakad'],
  },
];

export function getCityBySlug(slug: string): IndiaCity | undefined {
  return indiaCities.find((c) => c.slug === slug);
}
