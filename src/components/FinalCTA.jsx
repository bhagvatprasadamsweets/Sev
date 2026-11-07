import { Zap, ExternalLink } from 'lucide-react';
import { PRODUCT_BUY_URL } from '../data/bhavnagriProduct';

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-[#FFF8E9] relative overflow-hidden border-b border-[#E8DCC8]">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#E5A323]/20 to-[#F28C28]/15 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Pack Thumbnail Inset (Clickable with Buy Link) */}
        <a
          href={PRODUCT_BUY_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="Click to Buy Bhavnagri Gathiya on Bhagvat Prasadam"
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden bg-white shadow-xl border border-white/80 mx-auto mb-6 p-2 block hover:scale-105 transition-transform cursor-pointer group"
        >
          <img
            src="/gathiya-pack-main.webp"
            alt="Bhagvat Prasadam Bhavnagri Gathiya Pack - Click to Buy"
            className="w-full h-full object-contain"
          />
        </a>

        {/* Heading */}
        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#3B2418] tracking-tight leading-[1.08] mb-4">
          Your Next Favourite <br />
          <span className="text-[#F28C28]">Snack Awaits.</span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#3B2418]/80 max-w-xl mx-auto mb-8 leading-relaxed">
          Bring home the familiar crunch and flavour of Bhavnagri Gathiya. Handcrafted in 100% pure cold-pressed groundnut oil and shipped fresh to your door.
        </p>

        {/* Primary Action Button (Direct Buy Now) */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={PRODUCT_BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 px-10 rounded-2xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-sm tracking-wider uppercase transition-all shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Zap className="w-5 h-5 fill-current" />
            <span>Buy Now on Bhagvat Prasadam</span>
            <ExternalLink className="w-4 h-4 ml-1 opacity-75" />
          </a>
        </div>

        {/* Micro Guarantee */}
        <p className="text-xs text-[#7A5F4F] mt-4 font-medium">
          ✓ Handcrafted in pure sing tel • Dispatched in 24 hours across India
        </p>

      </div>
    </section>
  );
}
