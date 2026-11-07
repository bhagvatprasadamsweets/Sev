// Complete data specification for Bhagvat Prasadam Mix Chavanu
// Primary source: https://www.bhagvatprasadam.com/products/mix-chavanu-mixture-namkeen-gujarati-snacks?variant=45431482253461

export const GATHIYA_PRODUCT = {
  id: 'mix-chavanu',
  title: 'Mix Chavanu',
  subtitle: 'Mixture Namkeen | Authentic Gujarati Snacks',
  brand: 'Bhagvat Prasadam',
  origin: 'Nilkanthdham Poicha Tradition, Gujarat',
  tagline: 'Savor the Authentic Taste of Gujarat in Every Crunchy Bite',
  rating: 4.9,
  reviewsCount: 1890,
  verifiedBuyersCount: 15400,
  badge: 'Original Kathiyawadi Recipe',
  shelfLife: '60 Days Freshness Guaranteed in Resealable Zip Pouch',

  pricing: {
    basePrice: 85,
    mrp: 110,
    currency: '₹'
  },

  buyUrl: 'https://www.bhagvatprasadam.com/products/mix-chavanu-mixture-namkeen-gujarati-snacks?variant=45431482253461',

  bundles: [
    {
      id: 'pack-200g',
      name: 'Trial Pack',
      weight: '200gm',
      price: 85,
      originalPrice: 110,
      discountPercent: 23,
      badge: 'Chai Break Favorite',
      servings: '4-6 Tea Sessions',
      popular: false,
      freeShipping: false,
      buyUrl: 'https://www.bhagvatprasadam.com/products/mix-chavanu-mixture-namkeen-gujarati-snacks?variant=45385754345621',
      description: 'Ideal for personal evening tea cravings or first-time crunchers.'
    },
    {
      id: 'pack-400g',
      name: 'Classic Zipper Pouch',
      weight: '400gm',
      price: 170,
      originalPrice: 221,
      discountPercent: 23,
      badge: 'Most Popular Pouch',
      servings: '10-12 Tea Sessions',
      popular: false,
      freeShipping: false,
      buyUrl: 'https://www.bhagvatprasadam.com/products/mix-chavanu-mixture-namkeen-gujarati-snacks?variant=45385754312853',
      description: 'Our signature heavy-duty zip pouch. Perfect for daily family snacking.'
    },
    {
      id: 'pack-800g',
      name: 'Family Value Pack',
      weight: '800gm',
      price: 340,
      originalPrice: 440,
      discountPercent: 23,
      badge: 'Family Value',
      servings: '18-22 Tea Sessions',
      popular: false,
      freeShipping: false,
      buyUrl: 'https://www.bhagvatprasadam.com/products/mix-chavanu-mixture-namkeen-gujarati-snacks?variant=67610041188501',
      description: 'Generous pack for family gatherings and weekend gatherings.'
    },
    {
      id: 'pack-1kg',
      name: 'Mega Festive Box',
      weight: '1kg',
      price: 425,
      originalPrice: 550,
      discountPercent: 23,
      badge: 'BEST VALUE • USER CHOICE',
      servings: '25-30 Servings',
      popular: true,
      freeShipping: true,
      buyUrl: 'https://www.bhagvatprasadam.com/products/mix-chavanu-mixture-namkeen-gujarati-snacks?variant=45431482253461',
      description: 'The definitive 1kg celebration pack for Diwali, festivals, and gifting.'
    }
  ],

  images: {
    heroPack: '/mix-chavanu-pack-main.webp',
    freshBowl: '/mix-chavanu-crunch.webp',
    rawIngredients: '/mix-chavanu-authentic.webp',
    thaliServe: '/mix-chavanu-traditional.webp',
    details: [
      '/mix-chavanu-pack-main.webp',
      '/mix-chavanu-pack-secondary.webp',
      '/mix-chavanu-crunch.webp',
      '/mix-chavanu-traditional.webp',
      '/mix-chavanu-authentic.webp',
      '/mix-chavanu-snack.webp',
      '/mix-chavanu-heritage.webp',
      '/mix-chavanu-festive.webp'
    ]
  }
};
