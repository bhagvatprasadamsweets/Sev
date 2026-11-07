// Centralized verified product data for Bhagvat Prasadam Sev Range:
// 1. Aaloo Sev: https://www.bhagvatprasadam.com/products/aaloo-sev-crispy-indian-namkeen-snack?variant=45431477829781
// 2. Ratlami Sev: https://www.bhagvatprasadam.com/products/ratlami-sev-authentic-indian-namkeen?variant=45431482515605
// 3. Special Besan Sev: https://www.bhagvatprasadam.com/products/special-besan-sev-traditional-indian-sev?variant=45385759096981

export const SEV_PRODUCTS = {
  aaloo: {
    id: 'aaloo-sev',
    key: 'aaloo',
    shopifyId: 8582892880021,
    title: 'Aaloo Sev',
    titleHindi: 'आलू सेव',
    titleGujarati: 'આલૂ સેવ (બટાકા સેવ)',
    subtitle: 'Crispy Potato Indian Namkeen Snack',
    tagline: 'Crispy, Savory Potato Crunch with Aromatic Spices',
    badge: 'Popular Tea-Time Crunch',
    badgeColor: 'bg-[#F28C28] text-white',
    brand: 'Bhagvat Prasadam',
    origin: 'Handcrafted with Devotion, Nilkanthdham Poicha Tradition, Gujarat',
    rating: 4.9,
    reviewsCount: 1620,
    availability: 'In Stock',
    shippingNote: 'Dispatched within 24 hours across India in stay-fresh protective packaging',
    spiceLevel: 'Mild & Tangy',
    spiceRating: 2, // out of 5
    defaultVariantId: '45431477829781',
    buyUrl: 'https://www.bhagvatprasadam.com/products/aaloo-sev-crispy-indian-namkeen-snack?variant=45431477829781',
    baseProductUrl: 'https://www.bhagvatprasadam.com/products/aaloo-sev-crispy-indian-namkeen-snack',
    
    heroPackImage: '/images/sev/aaloo/aaloo-1.webp',
    heroBowlImage: '/images/sev/aaloo/aaloo-3.webp',
    heroThumbImage: '/images/sev/aaloo/aaloo-4.webp',
    bannerImage: '/images/sev/aaloo/aaloo-banner.webp',
    
    description:
      'Relish the crispy, savory taste of Aloo Sev, a traditional Indian namkeen snack handcrafted by Bhagvat Prasadam. Made from premium quality potatoes and perfectly seasoned with aromatic spices, this spicy Indian snack delivers a satisfying crunch in every bite. Perfect as tea-time namkeen, mixture namkeen, Diwali snacks, or festive gifting, our Aloo Sev combines authentic flavor, tradition, and affordability.',

    variants: [
      {
        id: '45431477829781',
        weight: '1kg',
        title: '1kg',
        price: 425,
        compareAtPrice: 550,
        discountPercent: 23,
        sku: 'Aaloo Sev 1000 GM.',
        badge: 'Festive Mega Pack',
        servings: '25-30 Tea Sessions',
        popular: true,
        buyUrl: 'https://www.bhagvatprasadam.com/products/aaloo-sev-crispy-indian-namkeen-snack?variant=45431477829781'
      },
      {
        id: '45408677658773',
        weight: '800gm',
        title: '800gm',
        price: 340,
        compareAtPrice: 440,
        discountPercent: 23,
        sku: 'Aaloo Sev 800 GM.',
        badge: 'Family Value Pack',
        servings: '18-22 Tea Sessions',
        popular: false,
        buyUrl: 'https://www.bhagvatprasadam.com/products/aaloo-sev-crispy-indian-namkeen-snack?variant=45408677658773'
      },
      {
        id: '45317926944917',
        weight: '400gm',
        title: '400gm',
        price: 170,
        compareAtPrice: 221,
        discountPercent: 23,
        sku: 'Aaloo Sev 400 GM.',
        badge: 'Most Popular Pouch',
        servings: '10-12 Tea Sessions',
        popular: false,
        buyUrl: 'https://www.bhagvatprasadam.com/products/aaloo-sev-crispy-indian-namkeen-snack?variant=45317926944917'
      },
      {
        id: '67610041581717',
        weight: '200gm',
        title: '200gm',
        price: 85,
        compareAtPrice: 110,
        discountPercent: 23,
        sku: 'Aaloo Sev 200 GM.',
        badge: 'Trial Pack',
        servings: '4-6 Tea Sessions',
        popular: false,
        buyUrl: 'https://www.bhagvatprasadam.com/products/aaloo-sev-crispy-indian-namkeen-snack?variant=67610041581717'
      }
    ],

    images: [
      {
        id: 'aaloo-1',
        url: '/images/sev/aaloo/aaloo-1.webp',
        alt: 'Bhagvat Prasadam Aaloo Sev Sealed Packaging Pouch',
        caption: 'Original Bhagvat Prasadam Aaloo Sev Packaging'
      },
      {
        id: 'aaloo-2',
        url: '/images/sev/aaloo/aaloo-2.webp',
        alt: 'Bhagvat Prasadam Aaloo Sev Stand-Up Pouch',
        caption: 'Resealable Stay-Fresh Foil Barrier Pouch'
      },
      {
        id: 'aaloo-3',
        url: '/images/sev/aaloo/aaloo-3.webp',
        alt: 'Crispy Aaloo Sev and Authentic Savory Namkeen Bowl',
        caption: 'Authentic Prepared Ceramic Bowl'
      },
      {
        id: 'aaloo-4',
        url: '/images/sev/aaloo/aaloo-4.webp',
        alt: 'Aaloo Sev Table Arrangement and Serving Presentation',
        caption: 'Heritage Table Spread Presentation'
      }
    ],

    trustHighlights: [
      { id: 'potato', title: 'Real Potato Mash', desc: 'Crafted with premium potatoes and stone-milled gram flour' },
      { id: 'texture', title: 'Melt-in-Mouth Crisp', desc: 'Delicate fine strands with an addictive savory crunch' },
      { id: 'oil', title: '100% Pure Sing Tel', desc: 'Slow fried in pure groundnut oil with zero palm oil' }
    ],

    specs: [
      { label: 'Product Name', value: 'Aaloo Sev (आलू सेव / બટાકા સેવ)' },
      { label: 'Brand', value: 'Bhagvat Prasadam' },
      { label: 'Origin', value: 'Nilkanthdham Poicha, Gujarat' },
      { label: 'Base Ingredients', value: 'Farm Potatoes, Desi Chana Besan & Spices' },
      { label: 'Cooking Oil', value: '100% Pure Cold-Pressed Groundnut Oil (Sing Tel)' },
      { label: 'Spice Character', value: 'Mild Tangy Chaat Masala, Mint & Rock Salt' },
      { label: 'Dietary Standard', value: '100% Pure Vegetarian & Satvik Recipe' },
      { label: 'Shelf Life', value: '60 Days in Sealed Zipper Barrier Pouch' },
      { label: 'Purity Standard', value: 'Zero Palm Oil, Zero Dalda, Zero Artificial Additives' }
    ],

    ingredientsList: [
      'Dehydrated Farm Potatoes & Potato Flakes',
      'Stone-Milled Bengal Gram Flour (Pure Chana Besan)',
      '100% Pure Cold-Pressed Groundnut Oil (Sing Tel)',
      'Dry Mango Powder (Amchur) & Pudina Extracts',
      'Kashmiri Red Chilli Powder & Turmeric',
      'Sendha Namak (Rock Salt) & Black Salt (Kala Namak)',
      'Aromatic Compounded Asafoetida (Hing)'
    ],

    nutritionData: [
      { name: 'Energy', value: '555 kcal' },
      { name: 'Protein', value: '10.5 g' },
      { name: 'Total Carbohydrates', value: '47.2 g' },
      { name: 'Dietary Fiber', value: '5.2 g', isSub: true },
      { name: 'Natural Sugars', value: '1.8 g', isSub: true },
      { name: 'Total Fat', value: '36.0 g' },
      { name: 'Unsaturated Fats (MUFA + PUFA)', value: '28.5 g', isSub: true },
      { name: 'Saturated Fat', value: '7.1 g', isSub: true },
      { name: 'Trans Fat', value: '0.0 g', isSub: true },
      { name: 'Sodium', value: '490 mg' }
    ]
  },

  ratlami: {
    id: 'ratlami-sev',
    key: 'ratlami',
    shopifyId: 8609263714453,
    title: 'Ratlami Sev',
    titleHindi: 'रतलामी सेव',
    titleGujarati: 'રતલામી સેવ',
    subtitle: 'Authentic Indian Spicy Sev',
    tagline: 'Bold, Spicy & Aromatic Sev with Signature Clove & Hing Kick',
    badge: 'Iconic Spicy Bestseller',
    badgeColor: 'bg-[#B83220] text-white',
    brand: 'Bhagvat Prasadam',
    origin: 'Handcrafted with Devotion, Nilkanthdham Poicha Tradition, Gujarat',
    rating: 4.9,
    reviewsCount: 2180,
    availability: 'In Stock',
    shippingNote: 'Dispatched within 24 hours across India in stay-fresh protective packaging',
    spiceLevel: 'Bold & Spicy',
    spiceRating: 4.5, // out of 5
    defaultVariantId: '45431482515605',
    buyUrl: 'https://www.bhagvatprasadam.com/products/ratlami-sev-authentic-indian-namkeen?variant=45431482515605',
    baseProductUrl: 'https://www.bhagvatprasadam.com/products/ratlami-sev-authentic-indian-namkeen',

    heroPackImage: '/images/sev/ratlami/ratlami-1.webp',
    heroBowlImage: '/images/sev/ratlami/ratlami-3.webp',
    heroThumbImage: '/images/sev/ratlami/ratlami-4.webp',
    bannerImage: '/images/sev/ratlami/ratlami-banner.webp',

    description:
      'Experience the spicy, crunchy delight of Ratlami Sev, a traditional Indian namkeen snack handcrafted by Bhagvat Prasadam. Made using premium ingredients and authentic Ratlami spice blends including freshly crushed cloves (laung), black pepper, and hing, this mixture namkeen delivers an irresistible crunch and rich flavor with every bite. Ideal for prasad offerings, tea-time snacking, festive Diwali treats, or corporate gifting.',

    variants: [
      {
        id: '45431482515605',
        weight: '1kg',
        title: '1kg',
        price: 425,
        compareAtPrice: 550,
        discountPercent: 23,
        sku: 'Ratalami Sev 1000 GM.',
        badge: 'Festive Mega Pack',
        servings: '25-30 Tea Sessions',
        popular: true,
        buyUrl: 'https://www.bhagvatprasadam.com/products/ratlami-sev-authentic-indian-namkeen?variant=45431482515605'
      },
      {
        id: '67610037813397',
        weight: '800gm',
        title: '800gm',
        price: 340,
        compareAtPrice: 440,
        discountPercent: 23,
        sku: 'Ratalami Sev 800 GM.',
        badge: 'Family Value Pack',
        servings: '18-22 Tea Sessions',
        popular: false,
        buyUrl: 'https://www.bhagvatprasadam.com/products/ratlami-sev-authentic-indian-namkeen?variant=67610037813397'
      },
      {
        id: '45385758834837',
        weight: '400gm',
        title: '400gm',
        price: 170,
        compareAtPrice: 221,
        discountPercent: 23,
        sku: 'Ratalami Sev 400 GM.',
        badge: 'Most Popular Pouch',
        servings: '10-12 Tea Sessions',
        popular: false,
        buyUrl: 'https://www.bhagvatprasadam.com/products/ratlami-sev-authentic-indian-namkeen?variant=45385758834837'
      },
      {
        id: '45385758867605',
        weight: '200gm',
        title: '200gm',
        price: 85,
        compareAtPrice: 110,
        discountPercent: 23,
        sku: 'Ratalami Sev 200 GM.',
        badge: 'Trial Pack',
        servings: '4-6 Tea Sessions',
        popular: false,
        buyUrl: 'https://www.bhagvatprasadam.com/products/ratlami-sev-authentic-indian-namkeen?variant=45385758867605'
      }
    ],

    images: [
      {
        id: 'ratlami-1',
        url: '/images/sev/ratlami/ratlami-1.webp',
        alt: 'Bhagvat Prasadam Ratlami Sev, authentic spicy and crispy Indian namkeen snack',
        caption: 'Original Bhagvat Prasadam Ratlami Sev Packaging'
      },
      {
        id: 'ratlami-2',
        url: '/images/sev/ratlami/ratlami-2.webp',
        alt: 'Bhagvat Prasadam Ratlami Sev stand-up pouch packaging',
        caption: 'Resealable Heavy-Duty Freshness Zipper Pouch'
      },
      {
        id: 'ratlami-3',
        url: '/images/sev/ratlami/ratlami-3.webp',
        alt: 'Ratlami Sev Gujarati namkeen snack spicy served in bowl',
        caption: 'Signature Thick Golden Ribbons with Peppery Crunch'
      },
      {
        id: 'ratlami-4',
        url: '/images/sev/ratlami/ratlami-4.webp',
        alt: 'Traditional Gujarati Ratlami Sev snack closeup',
        caption: 'Infused with Fresh Crushed Cloves (Laung)'
      }
    ],

    trustHighlights: [
      { id: 'clove', title: 'Signature Laung Kick', desc: 'Tempered with whole cloves, black pepper, and hing' },
      { id: 'ribbon', title: 'Thick Crispy Ribbons', desc: 'Traditional coarse texture that holds maximum crunch' },
      { id: 'oil', title: '100% Pure Sing Tel', desc: 'Slow fried in pure cold-pressed groundnut oil' }
    ],

    specs: [
      { label: 'Product Name', value: 'Ratlami Sev (रतलामी सेव / રતલામી સેવ)' },
      { label: 'Brand', value: 'Bhagvat Prasadam' },
      { label: 'Origin', value: 'Nilkanthdham Poicha, Gujarat' },
      { label: 'Base Ingredients', value: '100% Pure Desi Chana Besan & Malwa Spices' },
      { label: 'Cooking Oil', value: '100% Pure Cold-Pressed Groundnut Oil (Sing Tel)' },
      { label: 'Key Spices', value: 'Freshly Crushed Cloves (Laung), Kali Mirch, Ajwain & Hing' },
      { label: 'Dietary Standard', value: '100% Pure Vegetarian & Satvik Recipe' },
      { label: 'Shelf Life', value: '60 Days in Sealed Zipper Barrier Pouch' },
      { label: 'Purity Standard', value: 'Zero Palm Oil, Zero Dalda, Zero Artificial Additives' }
    ],

    ingredientsList: [
      'Pure Bengal Gram Flour (Stone-Milled Desi Besan)',
      '100% Pure Cold-Pressed Groundnut Oil (Sing Tel)',
      'Freshly Crushed Whole Cloves (Laung)',
      'Coarsely Cracked Black Peppercorns (Kali Mirch)',
      'Aromatic Carom Seeds (Ajwain)',
      'Royal Compounded Asafoetida (Hing)',
      'Kashmiri Red Chilli Powder & Pure Haldi',
      'Iodized Salt & Rock Salt'
    ],

    nutritionData: [
      { name: 'Energy', value: '542 kcal' },
      { name: 'Protein', value: '13.5 g' },
      { name: 'Total Carbohydrates', value: '43.6 g' },
      { name: 'Dietary Fiber', value: '6.5 g', isSub: true },
      { name: 'Natural Sugars', value: '1.9 g', isSub: true },
      { name: 'Total Fat', value: '34.8 g' },
      { name: 'Unsaturated Fats (MUFA + PUFA)', value: '27.4 g', isSub: true },
      { name: 'Saturated Fat', value: '6.8 g', isSub: true },
      { name: 'Trans Fat', value: '0.0 g', isSub: true },
      { name: 'Sodium', value: '540 mg' }
    ]
  },

  besan: {
    id: 'special-besan-sev',
    key: 'besan',
    shopifyId: 8609263943829,
    title: 'Special Besan Sev',
    titleHindi: 'स्पेशल बेसन सेव',
    titleGujarati: 'સ્પેશિયલ બેસન સેવ (ઝીણી સેવ)',
    subtitle: 'Traditional Indian Besan Sev',
    tagline: 'Delicate, Golden & Crispy Sev Handcrafted from 100% Pure Chana Besan',
    badge: 'Traditional Heritage Classic',
    badgeColor: 'bg-[#E5A323] text-[#3B2418]',
    brand: 'Bhagvat Prasadam',
    origin: 'Handcrafted with Devotion, Nilkanthdham Poicha Tradition, Gujarat',
    rating: 4.9,
    reviewsCount: 1840,
    availability: 'In Stock',
    shippingNote: 'Dispatched within 24 hours across India in stay-fresh protective packaging',
    spiceLevel: 'Mild & Savory Classic',
    spiceRating: 1.5, // out of 5
    defaultVariantId: '45385759096981',
    buyUrl: 'https://www.bhagvatprasadam.com/products/special-besan-sev-traditional-indian-sev?variant=45385759096981',
    baseProductUrl: 'https://www.bhagvatprasadam.com/products/special-besan-sev-traditional-indian-sev',

    heroPackImage: '/images/sev/besan/besan-1.webp',
    heroBowlImage: '/images/sev/besan/besan-3.webp',
    heroThumbImage: '/images/sev/besan/besan-4.webp',
    bannerImage: '/images/sev/besan/besan-banner.webp',

    description:
      'Savor the crispy, flavorful delight of Special Besan Sev, a traditional Indian namkeen snack handcrafted by Bhagvat Prasadam. Made from premium quality besan (gram flour) and seasoned with authentic spices, this mixture namkeen delivers a perfect crunch and rich taste in every bite. Ideal for prasad offerings, tea-time snacking, festive Diwali treats, or corporate gifting, our Special Besan Sev combines freshness, tradition, and authentic Indian flavors.',

    variants: [
      {
        id: '45385759096981',
        weight: '1kg',
        title: '1kg',
        price: 425,
        compareAtPrice: 550,
        discountPercent: 23,
        sku: 'Sp. Sev 1000 GM.',
        badge: 'Festive Mega Pack',
        servings: '25-30 Tea Sessions',
        popular: true,
        buyUrl: 'https://www.bhagvatprasadam.com/products/special-besan-sev-traditional-indian-sev?variant=45385759096981'
      },
      {
        id: '67610037059733',
        weight: '800gm',
        title: '800gm',
        price: 340,
        compareAtPrice: 440,
        discountPercent: 23,
        sku: 'Sp. Sev 800 GM.',
        badge: 'Family Value Pack',
        servings: '18-22 Tea Sessions',
        popular: false,
        buyUrl: 'https://www.bhagvatprasadam.com/products/special-besan-sev-traditional-indian-sev?variant=67610037059733'
      },
      {
        id: '45385759162517',
        weight: '400gm',
        title: '400gm',
        price: 170,
        compareAtPrice: 221,
        discountPercent: 23,
        sku: 'Sp. Sev 400 GM.',
        badge: 'Most Popular Pouch',
        servings: '10-12 Tea Sessions',
        popular: false,
        buyUrl: 'https://www.bhagvatprasadam.com/products/special-besan-sev-traditional-indian-sev?variant=45385759162517'
      },
      {
        id: '45385759195285',
        weight: '200gm',
        title: '200gm',
        price: 85,
        compareAtPrice: 110,
        discountPercent: 23,
        sku: 'Sp. Sev 200 GM.',
        badge: 'Trial Pack',
        servings: '4-6 Tea Sessions',
        popular: false,
        buyUrl: 'https://www.bhagvatprasadam.com/products/special-besan-sev-traditional-indian-sev?variant=45385759195285'
      }
    ],

    images: [
      {
        id: 'besan-1',
        url: '/images/sev/besan/besan-1.webp',
        alt: 'Bhagvat Prasadam Special Besan Sev, traditional Indian crispy gram flour snack',
        caption: 'Original Bhagvat Prasadam Special Besan Sev Packaging'
      },
      {
        id: 'besan-2',
        url: '/images/sev/besan/besan-2.webp',
        alt: 'Bhagvat Prasadam Special Besan Sev stand-up pouch packaging',
        caption: 'Resealable Heavy-Duty Freshness Zipper Pouch'
      },
      {
        id: 'besan-3',
        url: '/images/sev/besan/besan-3.webp',
        alt: 'Special Besan Sev Gujarati namkeen snack served in bowl',
        caption: 'Golden Delicate Threads with Crisp Savory Bite'
      },
      {
        id: 'besan-4',
        url: '/images/sev/besan/besan-4.webp',
        alt: 'Premium Besan Sev Indian snack mix closeup',
        caption: '100% Pure Desi Chana Besan Extrusion'
      }
    ],

    trustHighlights: [
      { id: 'besan', title: '100% Chana Besan', desc: 'Finely milled premium Bengal gram flour with zero adulteration' },
      { id: 'texture', title: 'Feather-Light Crisp', desc: 'Fine golden strands that melt gently with every bite' },
      { id: 'oil', title: '100% Pure Sing Tel', desc: 'Slow fried in pure groundnut oil with zero palm oil' }
    ],

    specs: [
      { label: 'Product Name', value: 'Special Besan Sev (स्पेशल बेसन सेव / સ્પેશિયલ બેસન સેવ)' },
      { label: 'Brand', value: 'Bhagvat Prasadam' },
      { label: 'Origin', value: 'Nilkanthdham Poicha, Gujarat' },
      { label: 'Base Ingredients', value: 'Stone-Milled Desi Chana Besan' },
      { label: 'Cooking Oil', value: '100% Pure Cold-Pressed Groundnut Oil (Sing Tel)' },
      { label: 'Subtle Seasoning', value: 'Ajwain (Carom Seeds), Turmeric, Compounded Hing & Salt' },
      { label: 'Dietary Standard', value: '100% Pure Vegetarian & Satvik Recipe' },
      { label: 'Shelf Life', value: '60 Days in Sealed Zipper Barrier Pouch' },
      { label: 'Purity Standard', value: 'Zero Palm Oil, Zero Dalda, Zero Artificial Additives' }
    ],

    ingredientsList: [
      'Stone-Milled Bengal Gram Flour (100% Pure Desi Chana Besan)',
      '100% Pure Cold-Pressed Groundnut Oil (Sing Tel)',
      'Carom Seeds (Ajwain)',
      'Golden Turmeric (Haldi)',
      'Royal Compounded Asafoetida (Hing)',
      'Iodized Salt & Rock Salt'
    ],

    nutritionData: [
      { name: 'Energy', value: '538 kcal' },
      { name: 'Protein', value: '14.1 g' },
      { name: 'Total Carbohydrates', value: '45.2 g' },
      { name: 'Dietary Fiber', value: '6.8 g', isSub: true },
      { name: 'Natural Sugars', value: '2.0 g', isSub: true },
      { name: 'Total Fat', value: '33.2 g' },
      { name: 'Unsaturated Fats (MUFA + PUFA)', value: '26.8 g', isSub: true },
      { name: 'Saturated Fat', value: '6.4 g', isSub: true },
      { name: 'Trans Fat', value: '0.0 g', isSub: true },
      { name: 'Sodium', value: '480 mg' }
    ]
  }
};

export const SEV_KEYS = ['aaloo', 'ratlami', 'besan'];
export const DEFAULT_SEV_KEY = 'aaloo';

// Compatibility aliases
export const PRODUCT_BUY_URL = SEV_PRODUCTS.aaloo.buyUrl;
export const BASE_PRODUCT_URL = SEV_PRODUCTS.aaloo.baseProductUrl;
export const MIX_CHAVANU_PRODUCT = SEV_PRODUCTS.aaloo;
export const BHAVNAGRI_PRODUCT = SEV_PRODUCTS.aaloo;

