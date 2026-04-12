export interface USCity {
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

export const usCities: USCity[] = [
  {
    slug: 'new-york',
    name: 'New York',
    state: 'New York',
    tagline: 'US Fashion Capital — India Sourcing & Brand Services',
    description: 'New York City is the undisputed US fashion capital — home to Fashion Week, the Garment District, major department store buyers, and thousands of fashion brands. For India-based brands seeking US market entry, New York\'s buyer community and PR ecosystem make it the highest-value target market.',
    fashionScene: 'NYC fashion brands range from luxury (Tory Burch, Ralph Lauren HQ) to fast-fashion importers to independent D2C labels. The Garment District (38th Street area) remains a hub for pattern makers, sample rooms, and fashion industry professionals. NYC buyers set national fashion trends.',
    topServices: ['India Sourcing & Manufacturing (NYC Brand)', 'Amazon.com & Shopify US Setup', 'US Brand Identity for NYC Market', 'NYC Trade Show Preparation (MAGIC, Coterie)', 'US Compliance & Import Documentation'],
    stats: [
      { value: '30+', label: 'NYC Brands Served' },
      { value: '45 Days', label: 'India-to-NYC Brand Launch' },
      { value: '$8,500', label: 'US Brand Launch Starting Price' },
      { value: '35–60%', label: 'Cost Saving vs NYC Manufacturing' },
    ],
    nearbyAreas: ['Garment District', 'SoHo', 'Brooklyn', 'Lower Manhattan', 'Midtown', 'Long Island City', 'Hoboken NJ'],
  },
  {
    slug: 'los-angeles',
    name: 'Los Angeles',
    state: 'California',
    tagline: 'LA Fashion & Streetwear Hub — India Sourcing Services',
    description: 'Los Angeles is the US\'s second-largest fashion market and the global hub for streetwear, activewear, denim, and contemporary fashion. The LA Garment District (Downtown LA Fashion District) is the largest wholesale fashion market in the western US. For India-based brands, LA\'s fashion industry offers strong wholesale, boutique, and Amazon FBA distribution networks.',
    fashionScene: 'LA fashion brands dominate activewear (Alo Yoga, Reformation HQ), streetwear (Chrome Hearts, Fear of God), and contemporary women\'s fashion. The city\'s influencer and entertainment industry connection means visual marketing is especially important. India-made bohemian, resort wear, and yoga apparel sells particularly well in the LA market.',
    topServices: ['India Sourcing for LA Fashion Brands', 'Amazon FBA Setup (LA Warehouse)', 'US Photography (LA Studio Network)', 'California Prop 65 Compliance', 'TikTok & Instagram Content (LA Market)'],
    stats: [
      { value: '45+', label: 'LA Brands Served' },
      { value: '48hrs', label: 'US Photo Delivery' },
      { value: '100%', label: 'Prop 65 Compliant' },
      { value: '$3/SKU', label: 'Catalog Photography' },
    ],
    nearbyAreas: ['Downtown LA Fashion District', 'Venice Beach', 'Silver Lake', 'Melrose', 'Beverly Hills', 'Santa Monica', 'Culver City'],
  },
  {
    slug: 'chicago',
    name: 'Chicago',
    state: 'Illinois',
    tagline: 'Midwest Fashion Hub — India-to-Chicago Brand Services',
    description: 'Chicago is the Midwest\'s largest fashion market and a significant hub for retail brands with Midwest distribution. Chicago\'s diverse and large consumer market — the third-largest US metro — makes it a critical market for fashion brands scaling beyond coastal US cities. India-made fashion at competitive price points performs strongly with Chicago\'s value-conscious but quality-aware consumer base.',
    fashionScene: 'Chicago\'s fashion scene spans contemporary, athletic, and value retail. The city is home to major retail buyers (Nordstrom Midwest, Carson Pirie Scott buyers) and a large population of South Asian fashion entrepreneurs serving the Midwest diaspora market.',
    topServices: ['Amazon.com & Walmart Marketplace Setup', 'India Sourcing for Midwest Retail', 'US Compliance & Customs Documentation', 'Social Media Content (Midwest Audience)', 'Brand Strategy for Midwest Market Entry'],
    stats: [
      { value: '20+', label: 'Chicago Brands Served' },
      { value: '35%', label: 'Average Cost Saving vs US Mfg' },
      { value: '21 Days', label: 'India Sample Timeline' },
      { value: '3', label: 'US Platforms Launched Average' },
    ],
    nearbyAreas: ['River North', 'Wicker Park', 'Lincoln Park', 'Naperville', 'Evanston', 'Oak Park', 'Schaumburg'],
  },
  {
    slug: 'miami',
    name: 'Miami',
    state: 'Florida',
    tagline: 'Miami Fashion Week Hub — Latin Fashion & Beachwear Sourcing',
    description: 'Miami is the US fashion gateway to Latin America and the hub for beachwear, resort wear, and Latin-influenced fashion. The Miami International Merchandise Mart (MIAM) hosts major fashion trade shows. India\'s strength in resort wear, printed fabrics, and artisan beachwear creates natural alignment with Miami\'s fashion market demand.',
    fashionScene: 'Miami\'s fashion market is defined by beach, resort, and Latin-influenced aesthetic — vibrant prints, relaxed silhouettes, and tropical lifestyle. India-made block print resort wear, beachwear, and artisan accessories find strong market in Miami boutiques and Etsy-driven Miami-based brands.',
    topServices: ['Resort Wear Sourcing from India', 'Miami Boutique Wholesale (Faire Platform)', 'Amazon & Etsy Setup for Beach/Resort Fashion', 'Brand Photography (Miami Lifestyle)', 'Florida E-commerce Compliance'],
    stats: [
      { value: '15+', label: 'Miami Brands Served' },
      { value: '$45', label: 'Resort Dress India FOB Price' },
      { value: '3x', label: 'US Retail Markup Potential' },
      { value: '21 Days', label: 'India Sample Turnaround' },
    ],
    nearbyAreas: ['Wynwood', 'Brickell', 'South Beach', 'Coral Gables', 'Coconut Grove', 'Aventura', 'Fort Lauderdale'],
  },
  {
    slug: 'dallas',
    name: 'Dallas',
    state: 'Texas',
    tagline: 'Texas Fashion Hub — India Sourcing for US Retail Brands',
    description: 'Dallas is the fashion capital of the South and home to the Dallas Market Center — one of the largest wholesale apparel and merchandise trade centers in the world. Texas\'s large population, growing D2C community, and significant South Asian diaspora create strong demand for India-made fashion at all price points.',
    fashionScene: 'Dallas fashion spans Western wear, contemporary women\'s fashion, and a growing D2C scene. The Dallas Market Center\'s Apparel & Accessories Market runs 6 times per year — a critical trade show for brands targeting US boutique wholesale. Texas\'s no state income tax makes it attractive for e-commerce brands.',
    topServices: ['India Sourcing for Dallas Brands', 'Dallas Market Center Trade Show Prep', 'Amazon.com & Walmart Setup (TX Base)', 'Wholesale Brand Launch (Faire)', 'US Brand Identity for Texas Market'],
    stats: [
      { value: '20+', label: 'Texas Brands Served' },
      { value: '$8,500', label: 'Starter Brand Launch' },
      { value: '45 Days', label: 'India-to-Launch Timeline' },
      { value: '700K+', label: 'US Boutiques via Faire' },
    ],
    nearbyAreas: ['Deep Ellum', 'Uptown Dallas', 'Plano', 'Frisco', 'Irving', 'Fort Worth', 'Arlington'],
  },
  {
    slug: 'san-francisco',
    name: 'San Francisco',
    state: 'California',
    tagline: 'Bay Area Tech-Fashion Brands — India Sourcing & D2C Services',
    description: 'San Francisco and the broader Bay Area is the epicentre of US tech-enabled D2C fashion brands. From Allbirds to Rent the Runway (founded here), the Bay Area has produced some of the most innovative fashion D2C businesses. India-made sustainable, minimalist, and tech-forward fashion finds a natural audience among Bay Area\'s socially conscious, premium consumers.',
    fashionScene: 'Bay Area fashion buyers prioritize sustainability, quality, and brand values — making India\'s artisan and sustainable fashion credentials a competitive advantage. California\'s Prop 65 compliance is non-negotiable. South Asian diaspora population is one of the largest in the US, creating additional market opportunity.',
    topServices: ['Sustainable Fashion Sourcing from India', 'California Prop 65 Compliance', 'D2C Shopify Store Setup', 'Amazon FBA (Bay Area Distribution)', 'Tech-Integrated Brand Strategy'],
    stats: [
      { value: '25+', label: 'Bay Area Brands Served' },
      { value: '100%', label: 'Prop 65 Compliant' },
      { value: '$7,500', label: 'Full Brand System Starting' },
      { value: '3 Wks', label: 'Brand Identity Delivery' },
    ],
    nearbyAreas: ['SoMa', 'Mission District', 'Oakland', 'Palo Alto', 'San Jose', 'Berkeley', 'Marin County'],
  },
  {
    slug: 'houston',
    name: 'Houston',
    state: 'Texas',
    tagline: 'Houston\'s Fashion Market — South Asian & Multicultural Brand Services',
    description: 'Houston is the most diverse large city in the US and home to one of the largest South Asian communities in America. This creates a dual opportunity for India-based brands: the large Houston desi diaspora market (ethnic wear, sarees, salwar suits), and Houston\'s broader fashion market targeting multicultural American consumers.',
    fashionScene: 'Houston\'s fashion market spans ethnic wear (massive demand in Sugar Land and Katy South Asian communities), contemporary fashion, and westernwear. Houston-based South Asian entrepreneurs are among the most active importers of India-made fashion in the US.',
    topServices: ['India Ethnic Wear for US Diaspora Market', 'Amazon.com & Etsy Setup for Ethnic Fashion', 'US Compliance for India Imports', 'South Asian Community Marketing Strategy', 'Wholesale to Houston Boutiques'],
    stats: [
      { value: '30+', label: 'Houston Area Brands Served' },
      { value: '2.3M', label: 'Greater Houston Population' },
      { value: '500K+', label: 'South Asian Diaspora (TX)' },
      { value: '45 Days', label: 'India-to-Houston Launch' },
    ],
    nearbyAreas: ['Sugar Land', 'Katy', 'The Woodlands', 'Pearland', 'Galleria Area', 'Midtown Houston', 'Clear Lake'],
  },
  {
    slug: 'seattle',
    name: 'Seattle',
    state: 'Washington',
    tagline: 'Pacific Northwest Fashion — India Sourcing & Sustainable Brand Services',
    description: 'Seattle is the Pacific Northwest\'s fashion and technology hub, home to Nordstrom\'s global HQ and Amazon\'s Seattle campus (making it especially relevant for Amazon seller strategy). Seattle\'s fashion market heavily favors sustainable, ethical, and quality-forward brands — aligning naturally with India\'s artisan and sustainable fashion credentials.',
    fashionScene: 'Seattle\'s fashion buyers are educated, sustainability-conscious, and willing to pay premium for ethical sourcing. Nordstrom HQ in Seattle makes it a valuable relationship-building hub for Indian brands targeting US department store wholesale. Amazon\'s local presence makes Seattle-based brands natural early adopters of Amazon tools.',
    topServices: ['Amazon Seller Strategy (Seattle-Based)', 'Nordstrom Wholesale Approach Strategy', 'Sustainable India Fashion Sourcing', 'US Compliance & Ethical Trade Documentation', 'Brand Strategy for Pacific Northwest Market'],
    stats: [
      { value: '15+', label: 'Seattle Brands Served' },
      { value: '#1', label: 'Nordstrom HQ City' },
      { value: '$18,500', label: 'Growth Brand Launch Package' },
      { value: '3 Months', label: 'Amazon Brand Launch Timeline' },
    ],
    nearbyAreas: ['Capitol Hill', 'Fremont', 'Bellevue', 'Kirkland', 'Redmond', 'Tacoma', 'Edmonds'],
  },
  {
    slug: 'boston',
    name: 'Boston',
    state: 'Massachusetts',
    tagline: 'Boston Fashion — Academic & Premium Market Brand Services',
    description: 'Boston is one of the US\'s most educated and affluent metro areas — home to Harvard, MIT, and a thriving biotech/finance professional community. Boston fashion buyers skew toward premium, classic, and sustainable brands. The large South Asian student and professional community creates significant ethnic fashion demand.',
    fashionScene: 'Boston fashion is characterized by preppy-meets-contemporary aesthetics, sustainable fashion interest, and premium spending power. Boston\'s large South Asian population (especially concentrated in Cambridge, Waltham, and Newton) creates one of the strongest ethnic fashion markets in the Northeast outside NYC.',
    topServices: ['Premium India Fashion for Boston Market', 'Amazon & Shopify US Setup', 'Ethnic Fashion for South Asian Diaspora', 'Brand Strategy for Premium Positioning', 'US Compliance & Import Support'],
    stats: [
      { value: '10+', label: 'Boston Brands Served' },
      { value: '$7,500', label: 'Full Brand System' },
      { value: '300K+', label: 'South Asian Population (MA)' },
      { value: '2–3 Wks', label: 'Brand Identity Delivery' },
    ],
    nearbyAreas: ['Cambridge', 'Somerville', 'Waltham', 'Newton', 'Brookline', 'Quincy', 'Dedham'],
  },
  {
    slug: 'atlanta',
    name: 'Atlanta',
    state: 'Georgia',
    tagline: 'Southeast Fashion Hub — India Sourcing & US Market Entry',
    description: 'Atlanta is the Southeast US\'s business capital and a rapidly growing hub for fashion D2C brands. Home to America\'s MART (the Southeast\'s premier wholesale trade center) and a booming multicultural creative economy, Atlanta offers strong wholesale and D2C fashion opportunities for India-based brands.',
    fashionScene: 'Atlanta\'s fashion market spans streetwear, contemporary fashion, and a strong African American aesthetic and economic influence that drives fashion innovation. The city\'s film and music industry creates high fashion demand and influencer marketing opportunities. Atlanta\'s growing South Asian community adds an ethnic fashion market layer.',
    topServices: ['India Sourcing for Atlanta Fashion Brands', 'Americas MART Trade Show Preparation', 'Amazon & Walmart US Setup', 'Influencer & Social Media Strategy', 'Brand Strategy for Multicultural Market'],
    stats: [
      { value: '15+', label: 'Atlanta Brands Served' },
      { value: '35%', label: 'Cost Saving vs US Production' },
      { value: '45 Days', label: 'Brand Launch Timeline' },
      { value: '$1,500/mo', label: 'Social Media Starting Price' },
    ],
    nearbyAreas: ['Buckhead', 'Midtown Atlanta', 'Little Five Points', 'Decatur', 'Dunwoody', 'Alpharetta', 'Marietta'],
  },
];

export function getUSCityBySlug(slug: string): USCity | undefined {
  return usCities.find((c) => c.slug === slug);
}
