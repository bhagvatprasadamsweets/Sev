import { useState } from 'react';
import { ExternalLink, CheckCircle2, ShoppingBag } from 'lucide-react';
import { useSevProduct } from '../context/SevProductContext';

export default function ProductShowcase() {
  const { activeProduct, activeSevKey } = useSevProduct();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [prevSevKey, setPrevSevKey] = useState(activeSevKey);

  // Synchronously reset active image when product changes (React 19 pattern)
  if (prevSevKey !== activeSevKey) {
    setPrevSevKey(activeSevKey);
    setActiveImageIndex(0);
  }

  const selectedVariant = activeProduct.variants[0];
  const activeImage = activeProduct.images[activeImageIndex] || activeProduct.images[0];

  return (
    <section id="product-showcase" className="py-10 sm:py-14 md:py-16 bg-white relative border-b border-[#E8DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#3B2418] tracking-tight mt-2.5">
            Authentic <span className="text-[#F28C28]">{activeProduct.title}</span> Showcase  
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-1.5">
            Handcrafted in 100% pure Sing Tel (cold-pressed groundnut oil) and nitrogen-sealed in stay-fresh zipper barrier packaging.
          </p>
        </div>

        {/* 2-Column Split: Gallery Left, Details Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* LEFT: Product Gallery (All Clickable with Buy Links) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Preview with Direct Buy Link */}
            <a
              href={selectedVariant.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`Click to Buy ${activeProduct.title} on Bhagvat Prasadam`}
              className="relative aspect-square w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#FFF8E9] border border-[#E8DCC8]/60 shadow-sm group cursor-pointer block"
            >
              <img
                src={activeImage.url}
                alt={activeImage.alt}
                className="w-full h-full object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105"
              />
            </a>

            {/* Thumbnail Strip (Limited to 4 images with Slim 1px Borders) */}
            <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
              {activeProduct.images.slice(0, 4).map((img, idx) => {
                const isActive = activeImageIndex === idx;
                return (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    title={img.caption}
                    className={`aspect-square rounded-xl overflow-hidden bg-[#FFF8E9] border transition-all cursor-pointer p-1 relative group ${
                      isActive
                        ? 'border-[#E5A323] shadow-xs scale-102 bg-white ring-1 ring-[#E5A323]/30'
                        : 'border-[#E8DCC8]/70 opacity-75 hover:opacity-100 hover:border-[#3B2418]/30'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Product Information & Direct Buy */}
          <div className="lg:col-span-6 flex flex-col justify-start text-left space-y-4">

            {/* Brand & Gujarati / Hindi Title */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-black text-[#F28C28] uppercase tracking-wider">
                  {activeProduct.brand}
                </span>
                <span className="text-xs font-bold text-[#A8681E]">
                  ({activeProduct.titleGujarati} / {activeProduct.titleHindi})
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display font-black text-3xl sm:text-4xl text-[#3B2418] tracking-tight leading-tight">
                {activeProduct.title}{' '}
                <span className="text-xl sm:text-2xl text-[#A8681E] font-normal">
                  ({activeProduct.titleGujarati})
                </span>
              </h1>
            </div>

            {/* Description Excerpt */}
            <p className="text-xs sm:text-sm text-[#5A3B2B] leading-relaxed">
              {activeProduct.description}
            </p>

            {/* Direct Buy CTA */}
            <div className="pt-2 space-y-2">
              <a
                href={selectedVariant.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Buy {activeProduct.title}</span>
                <ExternalLink className="w-4 h-4 opacity-75" />
              </a>
              <p className="text-center text-[11px] text-[#7A5F4F]">
                Redirects securely to Bhagvat Prasadam official Shopify checkout
              </p>
            </div>

            {/* Purity Guarantee Checklist */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#E8DCC8]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#3B2418]">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                <span>100% Cold-Pressed Sing Tel</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#3B2418]">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                <span>Zero Palm Oil &amp; Zero Dalda</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#3B2418]">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                <span>Nilkanthdham Poicha Satvik</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#3B2418]">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                <span>60 Days Freshness Zipper</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
