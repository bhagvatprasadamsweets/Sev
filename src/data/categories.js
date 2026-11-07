import { IMAGES } from './images';

export const CATEGORIES = [
  {
    id: 'bhujia-sev',
    name: 'Bhujia & Sev',
    tagline: 'Classic crunch. Unforgettable flavour.',
    itemCount: '6 Varieties',
    image: IMAGES.catBhujia,
    alt: 'Golden crispy Bikaneri sev and traditional bhujia in copper bowl',
    colorTheme: {
      bg: 'bg-[#FFF2D8]',
      badge: 'bg-[#D83A2E]',
      border: 'border-[#F49A24]/30',
      accent: '#F49A24'
    },
    popularItem: 'Classic Moth Bean Bhujia',
    spiceLevel: 'Medium'
  },
  {
    id: 'spicy-mixtures',
    name: 'Spicy Mixtures',
    tagline: 'A little spice. A lot of excitement.',
    itemCount: '8 Blends',
    image: IMAGES.catMixture,
    alt: 'Colourful Indian namkeen mixture with peanuts, boondi and crunchy sev',
    colorTheme: {
      bg: 'bg-[#FEEAE8]',
      badge: 'bg-[#681C22]',
      border: 'border-[#D83A2E]/30',
      accent: '#D83A2E'
    },
    popularItem: 'Khatta Meetha & Navratan',
    spiceLevel: 'Zesty & Fiery'
  },
  {
    id: 'traditional-snacks',
    name: 'Traditional Snacks',
    tagline: 'Old-school favourites, always in style.',
    itemCount: '7 Classics',
    image: IMAGES.catTraditional,
    alt: 'Traditional Indian snacks and gathiya presented in authentic brass bowls',
    colorTheme: {
      bg: 'bg-[#FFF8E7]',
      badge: 'bg-[#F49A24]',
      border: 'border-[#FFD66B]/60',
      accent: '#681C22'
    },
    popularItem: 'Bhavnagri Gathiya & Mathri',
    spiceLevel: 'Aromatic & Mild'
  },
  {
    id: 'chivda-farsan',
    name: 'Chivda & Farsan',
    tagline: 'Light, crispy and full of desi flavour.',
    itemCount: '5 Specialties',
    image: IMAGES.catChivda,
    alt: 'Poha chivda and Gujarati farsan varieties garnished with roasted nuts',
    colorTheme: {
      bg: 'bg-[#F9F0E1]',
      badge: 'bg-[#52151A]',
      border: 'border-[#D98216]/30',
      accent: '#D98216'
    },
    popularItem: 'Roasted Poha & Corn Chivda',
    spiceLevel: 'Light & Crisp'
  }
];

