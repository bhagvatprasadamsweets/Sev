import { ExternalLink } from 'lucide-react';
import { PRODUCT_BUY_URL } from '../data/bhavnagriProduct';

export default function FoodShowcase() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden my-2 sm:my-4 border-y border-[#E8DCC8]">
      {/* Background Banner Image with Gradient Tint (Clickable to Buy) */}
      <a
        href={PRODUCT_BUY_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="Click to Buy Bhavnagri Gathiya on Bhagvat Prasadam"
        className="absolute inset-0 block group cursor-pointer"
      >
        <img
          src="/bhavnagari-banner.jpg"
          alt="Appetizing close-up of Bhavnagri Gathiya, cutting chai, and papaya sambharo - Click to Buy"
          className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
        />
        {/* Warm food-inspired dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#201007]/95 via-[#201007]/80 to-black/45" />
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white pointer-events-none">
        <div className="max-w-2xl">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E5A323] text-[11px] font-black tracking-widest uppercase mb-3 pointer-events-auto">
            CHAI &amp; FARSAN PERFECTION • BHAVNAGRIGATHIYA
          </div>

          {/* Heading */}
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl tracking-tight leading-[1.08] mb-3 text-white">
            Small Bites. Big Flavour: <br />
            <span className="text-[#E5A323]">Authentic Bhavnagri Gathiya.</span>
          </h2>

          {/* Short Supporting Description */}
          <p className="text-xs sm:text-base text-white/85 leading-relaxed mb-4 font-normal">
            Whether paired with steaming cutting masala chai, spicy fried green chillies (tarela marcha), or tangy raw papaya sambharo, authentic Bhavnagri Gathiya (bhavnagrigathiya) brings that irreplaceable warm, peppery crunch to every snack break and Gujarati family gathering.
          </p>

          {/* Features Strip */}
          <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs text-amber-100 font-medium max-w-md">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E5A323]" />
              <span>Small-batch fried daily</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E5A323]" />
              <span>100% Pure Sing Tel</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E5A323]" />
              <span>Cracked Tellicherry Pepper</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E5A323]" />
              <span>Zero Artificial Additives</span>
            </div>
          </div>

          {/* Direct Buy Now CTA */}
          <div className="pointer-events-auto">
            <a
              href={PRODUCT_BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Buy Now on Bhagvat Prasadam</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-75" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
