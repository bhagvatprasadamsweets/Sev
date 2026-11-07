import { ExternalLink, Flame, Check, ArrowRight } from 'lucide-react';
import { useSevProduct } from '../context/SevProductContext';

export default function SevTrioSection() {
  const { activeSevKey, setActiveSevKey, products, keys } = useSevProduct();

  const scrollTo = (id) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const selectAndScroll = (key) => {
    setActiveSevKey(key);
    scrollTo('product-showcase');
  };

  return (
    <section id="sev-trio" className="py-12 sm:py-16 md:py-20 bg-white border-b border-[#E8DCC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#B83220] bg-red-50 px-3.5 py-1 rounded-full border border-red-200">
            The Iconic Trio
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#3B2418] tracking-tight mt-3">
            Explore Our Authentic <span className="text-[#F28C28]">Sev Collection</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-2">
            Three handcrafted master recipes from Nilkanthdham Poicha, slow-fried in 100% pure Sing Tel with zero palm oil.
          </p>
        </div>

        {/* 3-Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {keys.map((k) => {
            const prod = products[k];
            const isSelected = activeSevKey === k;

            return (
              <div
                key={prod.id}
                className={`rounded-3xl bg-[#FFF8E9] border-2 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-sm hover:shadow-xl hover:-translate-y-1 ${
                  isSelected ? 'border-[#E5A323] ring-2 ring-[#E5A323]/50' : 'border-[#E8DCC8]'
                }`}
              >
                <div>
                  {/* Card Header & Image */}
                  <div className="relative p-6 bg-gradient-to-b from-white to-[#FFF8E9] border-b border-[#E8DCC8]/70 text-center">
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${prod.badgeColor}`}>
                        {prod.badge}
                      </span>
                    </div>

                    {/* Spice Rating */}
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1 text-[11px] font-bold text-[#B83220] bg-white/90 px-2 py-0.5 rounded-full border border-[#E8DCC8]">
                      <Flame className="w-3.5 h-3.5 fill-[#B83220]" />
                      <span>{prod.spiceLevel}</span>
                    </div>

                    {/* Product Pack Image */}
                    <a
                      href={prod.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block aspect-square max-w-[220px] mx-auto overflow-hidden group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                      title={`Buy ${prod.title} on Bhagvat Prasadam`}
                    >
                      <img
                        src={prod.heroPackImage}
                        alt={prod.title}
                        className="w-full h-full object-contain drop-shadow-md"
                        loading="lazy"
                      />
                    </a>

                    {/* Quick Inset Bowl Thumbnail */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-white shadow-md absolute -bottom-3 right-6 bg-white">
                      <img src={prod.heroBowlImage} alt={prod.title} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 text-left space-y-3">
                    <div>
                      <div className="text-[11px] font-black uppercase tracking-wider text-[#A8681E]">
                        {prod.titleGujarati}
                      </div>
                      <h3 className="font-display font-black text-xl sm:text-2xl text-[#3B2418]">
                        {prod.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#F28C28]">
                        {prod.subtitle}
                      </p>
                    </div>

                    {/* Price Range */}
                    <div className="bg-white p-3 rounded-2xl border border-[#E8DCC8] flex items-baseline justify-between">
                      <div>
                        <span className="text-[11px] font-medium text-[#7A5F4F]">1kg Festive Pack</span>
                        <div className="flex items-baseline gap-2">
                          <span className="font-display font-black text-xl text-[#3B2418]">₹425</span>
                          <span className="text-xs text-[#7A5F4F] line-through">₹550</span>
                          <span className="text-[10px] font-black text-[#2E7D32] bg-emerald-100 px-1.5 py-0.5 rounded">
                            23% OFF
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-[#A8681E] bg-[#FFF8E9] px-2 py-1 rounded-lg border border-[#E8DCC8]">
                        From ₹85
                      </span>
                    </div>

                    {/* Description Excerpt */}
                    <p className="text-xs text-[#5A3B2B] leading-relaxed line-clamp-3">
                      {prod.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-1.5 text-xs text-[#3B2418]">
                      {prod.trustHighlights.map((th) => (
                        <li key={th.id} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-[#E5A323]/20 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-[#A8681E]" />
                          </div>
                          <span><strong>{th.title}:</strong> {th.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 space-y-2">
                  <a
                    href={prod.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Buy {prod.title} (₹425)</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>

                  <button
                    type="button"
                    onClick={() => selectAndScroll(k)}
                    className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-[#3B2418] text-[#FFF8E9]'
                        : 'bg-white hover:bg-amber-100/50 text-[#3B2418] border border-[#E8DCC8]'
                    }`}
                  >
                    <span>{isSelected ? '✓ Currently Viewing' : 'View Full Details & Gallery'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

