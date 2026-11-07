import { ShieldCheck, Heart, ExternalLink, Sparkles } from 'lucide-react';
import { useSevProduct } from '../context/SevProductContext';

export default function BrandStory() {
  const { activeProduct } = useSevProduct();

  const scrollTo = (id) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="story" className="py-10 sm:py-14 md:py-16 bg-[#FFF8E9] relative overflow-hidden border-b border-[#E8DCC8]">
      {/* Background Subtle Ambient Shape */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E5A323]/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Asymmetrical Editorial 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* LEFT: Large Lifestyle Food Image with Sev (Clickable Buy Links) */}
          <div className="lg:col-span-6 relative">
            <a
              href={activeProduct.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Click to Buy Authentic Sev on Bhagvat Prasadam"
              className="relative rounded-3xl overflow-hidden shadow-xl border border-white/90 aspect-[4/3] w-full max-w-lg bg-white block group cursor-pointer"
            >
              <img
                src="/images/sev/ratlami/ratlami-3.webp"
                alt="Authentic Ratlami Sev and Sev Platter Bhagvat Prasadam Poicha"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </a>

            {/* Inset Plate */}
            <a
              href="https://www.bhagvatprasadam.com/products/aaloo-sev-crispy-indian-namkeen-snack?variant=45431477829781"
              target="_blank"
              rel="noopener noreferrer"
              title="Click to Buy Aaloo Sev"
              className="absolute -bottom-4 -right-2 sm:-right-4 w-36 sm:w-48 aspect-square rounded-2xl overflow-hidden shadow-lg border border-white/90 hidden sm:block bg-white hover:scale-105 transition-transform cursor-pointer"
            >
              <img
                src="/images/sev/aaloo/aaloo-3.webp"
                alt="Crispy Golden Aaloo Sev"
                className="w-full h-full object-cover"
              />
            </a>
          </div>

          {/* RIGHT: Heading, Description & Supporting Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">

            <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-[#3B2418] tracking-tight leading-[1.1] mb-3.5">
              The Sacred Heritage of <br />
              <span className="text-[#F28C28]">Authentic Indian Sev.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#3B2418]/85 leading-relaxed mb-3 font-normal">
              From lively evening cutting chai sessions to festive Diwali thalis and everyday Kathiyawadi cuisine, <strong>Sev</strong> is the very heartbeat of authentic Indian snacking.
            </p>

            <p className="text-xs sm:text-sm text-[#3B2418]/70 leading-relaxed mb-5">
              Handcrafted in the sacred tradition of <strong>Nilkanthdham Poicha, Gujarat</strong>, Bhagvat Prasadam master karigars bring you three legendary Sev varieties: melt-in-mouth <strong>Aaloo Sev</strong>, fiery clove-infused <strong>Ratlami Sev</strong>, and delicate golden <strong>Special Besan Sev</strong>. Every strand is slow-fried strictly in <strong>pure cold-pressed groundnut oil (Sing Tel)</strong> with zero palm oil, zero preservatives, and pure Satvik devotion.
            </p>

            {/* 2 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E8DCC8] flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#E5A323]/15 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#E5A323]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-[#3B2418]">
                    100% Pure Sing Tel
                  </h4>
                  <p className="text-[11px] text-[#7A5F4F] mt-0.5 leading-snug">
                    Zero palm oil, zero vanaspati dalda. Light, fragrant, and heart-friendly crunch.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E8DCC8] flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#F28C28]/15 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-[#F28C28]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-[#3B2418]">
                    Poicha Satvik Tradition
                  </h4>
                  <p className="text-[11px] text-[#7A5F4F] mt-0.5 leading-snug">
                    Made with utmost purity, sacred dedication, and premium grade natural spices.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={activeProduct.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <span>Buy Authentic Sev</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-75" />
              </a>

              <button
                type="button"
                onClick={() => scrollTo('product-showcase')}
                className="py-3 px-5 rounded-xl bg-white hover:bg-[#E8DCC8]/40 text-[#3B2418] border border-[#E8DCC8] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Explore Sev Showcase
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
