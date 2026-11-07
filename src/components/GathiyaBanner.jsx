import { ArrowRight, Sparkles, Coffee } from 'lucide-react';
import { GATHIYA_PRODUCT } from '../data/gathiyaProduct';

export default function GathiyaBanner({ onExploreClick }) {
  return (
    <section id="banner" className="relative py-20 sm:py-28 overflow-hidden my-4 sm:my-8">
      {/* Background Banner Image with Gradient Lighting */}
      <div className="absolute inset-0">
        <img
          src={GATHIYA_PRODUCT.images.banner}
          alt="Bhavnagari Gathiya with cutting chai, fried green chillies, and papaya sambharo"
          className="w-full h-full object-cover object-center"
        />
        {/* Editorial Dark Overlay with Warm Tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#200709]/92 via-[#200709]/75 to-black/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="max-w-2xl">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFD66B] text-xs font-black tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            THE CHAI TIME RITUAL
          </div>

          {/* Headline */}
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[1.0] mb-4 text-white">
            EVERY MORNING <br />
            <span className="text-[#FFD66B]">NEEDS GATHIYA &amp; CHAI.</span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-lg text-white/85 leading-relaxed mb-6 font-normal">
            Crispy golden strands, blistered mustard green chillies, and sweet-sour papaya sambharo paired with steaming masala tea. Taste Gujarat's most celebrated snacking ritual, handcrafted in our sacred Nilkanthdham kitchens.
          </p>

          {/* Feature Bullets */}
          <div className="grid grid-cols-2 gap-3 mb-8 text-xs text-amber-100/90 font-medium max-w-md">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD66B]" />
              <span>Small-batch fried daily</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD66B]" />
              <span>100% Pure Groundnut Oil</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD66B]" />
              <span>Fresh Tellicherry Black Pepper</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD66B]" />
              <span>Delicate Crisp &amp; Soft Core</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onExploreClick}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#D83A2E] hover:bg-[#B92B20] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-xl shadow-black/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Explore The Texture &amp; Craft</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-[#FFD66B] font-bold bg-white/10 px-3.5 py-2.5 rounded-xl border border-white/15 flex items-center gap-1.5">
              <Coffee className="w-3.5 h-3.5" />
              Traditional Kathiyawadi Breakfast
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
