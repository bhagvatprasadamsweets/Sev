import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, ArrowRight, ShoppingBag, RotateCw, Sparkles } from 'lucide-react';
import { useSevProduct } from '../context/SevProductContext';
import HeroBackgroundAnimation from './HeroBackgroundAnimation';
import HeroOrbitalAnimation from './HeroOrbitalAnimation';

export default function HeroSection() {
  const { activeProduct, activeSevKey, setActiveSevKey, products, keys } = useSevProduct();
  const [viewMode, setViewMode] = useState('bowl'); // 'bowl' | 'pack'
  const [prevSevKey, setPrevSevKey] = useState(activeSevKey);

  // Synchronously reset selection during render when active product key changes (React 19 pattern)
  if (prevSevKey !== activeSevKey) {
    setPrevSevKey(activeSevKey);
    setViewMode('bowl');
  }

  const selectedVariant = activeProduct.variants[0];
  const productBuyUrl = activeProduct.buyUrl || selectedVariant?.buyUrl || activeProduct.baseProductUrl;
  
  // Hero images: Authentic Prepared Bowl (matches reference) vs Sealed Pouch
  const currentBowlImage = activeProduct.heroBowlImage || activeProduct.images[0]?.url || '/images/sev/aaloo/aaloo-3.webp';
  const currentThumbImage = activeProduct.heroThumbImage || '/images/sev/aaloo/aaloo-4.webp';
  const currentPackImage = activeProduct.heroPackImage || activeProduct.images[2]?.url || activeProduct.images[0]?.url;

  const isBowlView = viewMode === 'bowl';
  const displayedMainImage = isBowlView ? currentBowlImage : currentPackImage;
  const displayedThumbImage = isBowlView ? currentThumbImage : currentBowlImage;

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === 'bowl' ? 'pack' : 'bowl'));
  };

  const scrollTo = (id) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative pt-6 pb-10 sm:pt-10 sm:pb-14 md:pb-16 bg-[#FFF8E9] bg-subtle-pattern overflow-hidden border-b border-[#E8DCC8]"
    >
      {/* Fully Responsive Multi-Layer Background Animation */}
      <HeroBackgroundAnimation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT COLUMN: Title, Subtitle, Description, Variety Selector Thumbnails & CTAs */}
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >


            {/* 1. Main Heading (e.g. "Kesar Chandan" Style) */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#4A2612] leading-[1.08] mb-1.5">
              {activeProduct.title}
            </h1>

            {/* 2. Subtitle (e.g. "The Essence of Serenity" Style) */}
            <p className="font-display font-medium text-lg sm:text-2xl text-[#C49A58] tracking-wide mb-3">
              {activeProduct.subtitle}
            </p>

            {/* 3. Description Paragraph */}
            <p className="text-sm sm:text-base text-[#5A3B2B]/90 leading-relaxed max-w-xl mb-5">
              {activeProduct.description}
            </p>

            {/* 4. SEV VARIETY SELECTOR (EXACT MATCH TO REFERENCE DESIGN WITH NAMES) */}
            {/* Horizontal Row of Rounded Square Thumbnails with Product Name and Active Brown/Golden Border */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-xs font-black uppercase tracking-wider text-[#4A2612]">
                  Select Variety:
                </span>
                <span className="text-xs font-extrabold text-[#8B4513] bg-[#FFF3DF] px-2.5 py-0.5 rounded-full border border-[#E8DCC8]">
                  {activeProduct.title} ({activeProduct.titleHindi})
                </span>
                
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4 flex-wrap">
                {keys.map((k) => {
                  const prod = products[k];
                  const isSelected = activeSevKey === k;
                  return (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setActiveSevKey(k)}
                      title={`${prod.title} ${prod.titleHindi} ${prod.subtitle}`}
                      className="flex flex-col items-center gap-1.5 cursor-pointer group focus:outline-none"
                    >
                      {/* Image Thumbnail Box */}
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden transition-all duration-300 p-1.5 flex items-center justify-center ${
                          isSelected
                            ? 'border border-[#8B4513] shadow-sm scale-105 ring-1 ring-[#8B4513]/25 bg-white'
                            : 'border border-[#E8DCC8] opacity-80 hover:opacity-100 hover:border-[#8B4513]/50 hover:scale-102 bg-white/70'
                        }`}
                      >
                        <img
                          src={prod.heroPackImage}
                          alt={prod.title}
                          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-xs"
                        />
                      </div>

                      {/* Variety Name */}
                      <span
                        className={`text-xs text-center font-bold tracking-tight max-w-[85px] leading-tight transition-colors ${
                          isSelected
                            ? 'text-[#4A2612] font-black'
                            : 'text-[#7A5F4F] group-hover:text-[#4A2612]'
                        }`}
                      >
                        {prod.title}
                      </span>
                      <span className="text-[10px] text-[#A8681E] text-center -mt-1 leading-none font-medium">
                        {prod.titleHindi}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href={selectedVariant.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-7 rounded-2xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Buy {activeProduct.title}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-75" />
              </a>

              <button
                type="button"
                onClick={() => scrollTo('product-showcase')}
                className="py-3.5 px-6 rounded-2xl bg-white hover:bg-[#E8DCC8]/50 text-[#3B2418] border border-[#E8DCC8] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-sm hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Showcase</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: Product Presentation with Orbital Background Animation & Floating Thumbnail */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative my-6 sm:my-10 lg:my-0 py-4 sm:py-6 w-full"
          >
            {/* 1. Concentric Dashed Orbital Animation with Planetary Spice Nodes (Exact Match to User Reference) */}
            <HeroOrbitalAnimation />

            {/* 2. Main Product Showcase Card with Gentle Levitation & Overlapping Floating Thumbnail */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-20 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[390px]"
            >
              {/* Main Card Frame with Slim, Refined White Border */}
              <div className="rounded-2xl sm:rounded-3xl p-1 sm:p-1.5 bg-white border border-white/80 shadow-[0_20px_50px_-15px_rgba(74,38,18,0.2)] relative">
                
                {/* Main Image Container */}
                <div className="relative aspect-square w-full rounded-xl sm:rounded-2xl overflow-hidden group bg-gradient-to-b from-[#FFF8E9] to-[#FFF3DF]">
                  <a
                    href={productBuyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Click to Buy ${activeProduct.title} on Bhagvat Prasadam Official Store`}
                    aria-label={`Buy ${activeProduct.title} on Bhagvat Prasadam Official Store`}
                    className="block w-full h-full cursor-pointer relative"
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={displayedMainImage}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        src={displayedMainImage}
                        alt={activeProduct.title}
                        className={`w-full h-full transform group-hover:scale-105 transition-transform duration-700 ${
                          isBowlView ? 'object-cover' : 'object-contain p-4 drop-shadow-md'
                        }`}
                        loading="eager"
                      />
                    </AnimatePresence>

                    {/* Interactive Product Link Indicator Pill on Hover */}
                    <div className="absolute top-2.5 right-2.5 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-md border border-[#E8DCC8] flex items-center gap-1.5 text-[11px] font-extrabold text-[#4A2612] pointer-events-none">
                      <ShoppingBag className="w-3 h-3 text-[#E5A323]" />
                      <span>Buy Online</span>
                      <ExternalLink className="w-2.5 h-2.5 text-[#8B4513]" />
                    </div>
                  </a>
                </div>

                {/* 3. OVERLAPPING FLOATING THUMBNAIL CARD with Slim Border */}
                {/* Positioned at bottom-left corner of the card, clicks to swap views */}
                <motion.button
                  type="button"
                  onClick={toggleViewMode}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  title={isBowlView ? "Click to switch to Sealed Packshot View" : "Click to switch to Authentic Served Bowl View"}
                  className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-5 z-30 w-16 h-16 sm:w-22 sm:h-22 rounded-xl sm:rounded-2xl p-0.5 sm:p-1 bg-white border border-white shadow-xl overflow-hidden cursor-pointer group text-left focus:outline-none"
                >
                  <div className="w-full h-full rounded-lg sm:rounded-xl overflow-hidden relative bg-gradient-to-b from-[#FFF8E9] to-[#FFF3DF]">
                    <img
                      src={displayedThumbImage}
                      alt="Alternate Angle Preview"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Interactive Swap Hint Overlay */}
                    <div className="absolute inset-0 bg-[#4A2612]/35 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-1">
                      <RotateCw className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFF8E9] animate-spin" />
                      <span className="text-[8px] font-black uppercase tracking-wider mt-0.5">Swap</span>
                    </div>
                  </div>
                </motion.button>

              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
