import { Star, Flame, Heart, Sparkles, Coffee, ShieldCheck, ArrowRight } from 'lucide-react';
import { GATHIYA_PRODUCT } from '../data/gathiyaProduct';

export default function GathiyaHero() {
  const scrollTo = (id) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative pt-6 pb-16 md:pt-12 md:pb-24 bg-[#FFF7E9] bg-subtle-pattern overflow-hidden border-b border-[#681C22]/10"
    >
      {/* Background Soft Atmospheric Glows */}
      <div className="absolute top-10 right-0 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#F49A24]/20 to-[#D83A2E]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-0 w-[450px] h-[450px] rounded-full bg-[#FFD66B]/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Editorial Presentation */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Top Eyebrow Tag */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#681C22] text-[#FFD66B] text-[11px] font-black tracking-widest uppercase shadow-sm">
                <Flame className="w-3.5 h-3.5 text-[#F49A24] fill-[#F49A24]" />
                BHAGVAT PRASADAM • NILKANTHDHAM
              </span>
              <span className="text-xs font-bold text-[#681C22]/80 uppercase tracking-wider">
                Authentic Gujarati Farsan
              </span>
            </div>

            {/* Oversized Dribbble-Style Headline */}
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tighter text-[#25221F] mb-4">
              BHAVNAGARI <br />
              <span className="text-[#D83A2E] inline-block relative">
                GATHIYA.
                <svg
                  className="absolute -bottom-2 left-0 w-full text-[#F49A24]"
                  height="10"
                  viewBox="0 0 240 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 7C65 2 175 2 237 7"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="text-lg sm:text-2xl font-bold text-[#681C22] leading-snug mb-3">
              Crispy Delicate Crust Outside. Pillowy Soft Inside.
            </p>

            <p className="text-sm sm:text-base text-[#25221F]/80 leading-relaxed max-w-xl mb-6">
              Handcrafted in 100% pure cold-pressed groundnut oil (<em>sing tel</em>) with double-sifted desi besan, whole cracked Tellicherry black pepper (<em>mari</em>), and aromatic carom seeds (<em>ajwain</em>). Zero palm oil, zero artificial preservatives.
            </p>

            {/* Social Proof & Rating Bar */}
            <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-[#681C22]/10 mb-6">
              <div className="flex items-center text-amber-500 gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-black text-[#25221F]">
                4.9 / 5.0
              </span>
              <span className="text-xs text-[#25221F]/60">
                (2,480+ Verified Reviews)
              </span>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100/90 px-2.5 py-0.5 rounded-full">
                ✓ 18,500+ Households Served
              </span>
            </div>

            {/* AVAILABLE PACK FORMATS SHOWCASE (Clean, no price) */}
            <div className="mb-6 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#681C22]">
                  Available Pack Formats:
                </span>
                <span className="text-xs text-[#681C22]/70 font-semibold">
                  Sealed Fresh Daily
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-2xl p-4 border border-[#681C22]/15 bg-white shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D83A2E] block mb-0.5">
                      Personal Pouch
                    </span>
                    <h3 className="font-display font-black text-base text-[#25221F]">
                      250g Pack
                    </h3>
                    <p className="text-xs text-[#25221F]/70 mt-1">
                      Ideal for personal evening tea cravings &amp; solo snacking.
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-[#681C22] mt-3 pt-2 border-t border-gray-100 block">
                    5-6 Chai Sessions
                  </span>
                </div>

                <div className="rounded-2xl p-4 border-2 border-[#D83A2E] bg-white shadow-md relative flex flex-col justify-between">
                  <span className="absolute -top-2.5 right-3 text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-[#D83A2E] text-white tracking-wider">
                    SIGNATURE
                  </span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D83A2E] block mb-0.5">
                      Family Favorite
                    </span>
                    <h3 className="font-display font-black text-base text-[#25221F]">
                      500g Zipper Pouch
                    </h3>
                    <p className="text-xs text-[#25221F]/70 mt-1">
                      Our signature stay-fresh resealable pouch for the pantry.
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-[#681C22] mt-3 pt-2 border-t border-gray-100 block">
                    12-14 Chai Sessions
                  </span>
                </div>

                <div className="rounded-2xl p-4 border border-[#681C22]/15 bg-white shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#681C22] block mb-0.5">
                      Celebration Box
                    </span>
                    <h3 className="font-display font-black text-base text-[#25221F]">
                      1kg Value Box
                    </h3>
                    <p className="text-xs text-[#25221F]/70 mt-1">
                      Twin-sealed (2 × 500g) packs for gatherings &amp; festivals.
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-[#681C22] mt-3 pt-2 border-t border-gray-100 block">
                    25+ Tea Sessions
                  </span>
                </div>
              </div>
            </div>

            {/* EDITORIAL CTAs & ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => scrollTo('ingredients')}
                className="py-4 px-8 rounded-2xl bg-[#D83A2E] text-white hover:bg-[#B92B20] font-bold text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore The Craft</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('banner')}
                className="py-4 px-8 rounded-2xl bg-[#681C22] text-[#FFD66B] hover:bg-[#52151A] font-bold text-sm tracking-wider uppercase transition-all shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Coffee className="w-4 h-4" />
                <span>The Chai Ritual</span>
              </button>
            </div>

            {/* Trust Micro-Bullets */}
            <div className="pt-6 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#25221F]/75 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                100% Pure Sing Tel
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                Zero Palm Oil
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#F49A24] shrink-0" />
                60-Day Stay-Fresh Zipper
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                Poicha Nilkanthdham Kitchens
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: Authentic High-Res Product Photography */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Background Decorative Concentric Ring */}
            <div className="absolute w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full border-2 border-dashed border-[#F49A24]/40 animate-[spin_90s_linear_infinite] pointer-events-none" />

            {/* Rotating 100% Desi Taste Stamp */}
            <div className="absolute -top-4 -right-2 sm:right-4 z-30 w-24 h-24 rounded-full bg-[#681C22] text-white p-2 shadow-2xl border-2 border-[#FFD66B] flex items-center justify-center">
              <div className="w-full h-full rounded-full border border-dashed border-[#FFD66B]/50 flex flex-col items-center justify-center text-center">
                <Heart className="w-3.5 h-3.5 text-[#D83A2E] fill-[#D83A2E] mb-0.5" />
                <span className="text-[9px] font-black tracking-widest text-[#FFD66B] uppercase leading-tight font-display">
                  100% PURE
                </span>
                <span className="text-[8px] font-bold text-white uppercase leading-tight">
                  SING TEL
                </span>
              </div>
            </div>

            {/* Main Authentic Product Image (Uploaded by user) */}
            <div className="relative z-20 w-full max-w-[440px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500 bg-white">
              <img
                src={GATHIYA_PRODUCT.images.freshBowl}
                alt="Authentic Bhavnagari Gathiya with gram flour, black pepper, and ajwain"
                className="w-full aspect-square object-cover"
                loading="eager"
              />
              {/* Bottom Subtle Overlay Ribbon */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5 text-white">
                <span className="text-xs font-black uppercase tracking-wider text-[#FFD66B] block">
                  Original Bhavnagar Recipe
                </span>
                <span className="text-xs font-semibold text-white/95">
                  Desi Besan • Whole Cracked Mari • Ajwain • Sing Tel
                </span>
              </div>
            </div>

            {/* Thali Inset Floating Badge */}
            <div className="absolute -bottom-6 -left-3 sm:-left-6 z-25 w-28 sm:w-36 h-28 sm:h-36 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src={GATHIYA_PRODUCT.images.thali}
                alt="Bhavnagari Gathiya served on brass thali"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
