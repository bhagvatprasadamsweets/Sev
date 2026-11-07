import { Sparkles, ShieldCheck, Flame } from 'lucide-react';

export default function GathiyaPackshot({
  weight = '500g',
  size = 'large', // 'large', 'normal', 'small'
  className = ''
}) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  return (
    <div
      className={`relative select-none transition-transform duration-500 ${className}`}
      style={{
        width: isLarge ? '360px' : isSmall ? '200px' : '280px',
        maxWidth: '100%',
        aspectRatio: '3 / 4.5'
      }}
    >
      {/* Soft Saffron Ambient Drop Glow */}
      <div className="absolute inset-x-6 -bottom-8 h-12 rounded-full bg-[#F49A24]/30 blur-2xl pointer-events-none" />

      {/* Main Foil Pouch Body */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden flex flex-col justify-between shadow-2xl border-2 border-white/25 bg-gradient-to-b from-[#681C22] via-[#52151A] to-[#250a0d]">
        
        {/* Top Gold Zipper Seal Bar */}
        <div className="relative h-7 w-full bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 border-b border-amber-600/30 flex items-center justify-between px-3.5 shadow-sm">
          <div className="flex gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-900/50"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-900/50"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-900/50"></span>
          </div>
          <span className="text-[9px] font-mono font-black tracking-widest text-amber-950 uppercase">
            60-DAY FRESHNESS ZIP-LOCK
          </span>
          <div className="w-2 h-2 rounded-full border border-amber-950/50"></div>
        </div>

        {/* Glossy Foil Highlights */}
        <div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-l from-white/10 via-white/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />

        {/* Pouch Header: Sacred Nilkanthdham Brand Seal & Title */}
        <div className="p-4 pt-3 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-300/30 mb-2">
            <Sparkles className="w-3 h-3 text-[#FFD66B]" />
            <span className="text-[9px] uppercase tracking-widest font-black text-amber-200">
              BHAGVAT PRASADAM
            </span>
          </div>

          <p className="text-[10px] uppercase tracking-wider text-amber-200/90 font-medium">
            Nilkanthdham Poicha Tradition
          </p>

          <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white mt-0.5 leading-none">
            Bhavnagari <span className="text-[#FFD66B]">Gathiya</span>
          </h3>

          <p className="text-[10px] text-white/80 font-semibold tracking-wide mt-1">
            Crunchy &amp; Soft Gujarati Namkeen Snack
          </p>
        </div>

        {/* Center: Window Displaying Crisp Golden Gathiya Texture */}
        <div className="px-5 my-auto relative z-10">
          <div className="relative rounded-2xl p-2.5 bg-black/50 backdrop-blur-md border border-amber-400/30 shadow-inner overflow-hidden">
            
            {/* Real Gathiya / Besan Crisp Texture Background */}
            <div
              className="w-full h-28 rounded-xl relative overflow-hidden flex flex-col items-center justify-between p-2 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80')`,
                backgroundColor: '#b45309'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

              {/* Top pill inside peek window */}
              <div className="relative z-10 bg-black/70 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-amber-300/50">
                <span className="text-[9px] font-black text-[#FFD66B] uppercase tracking-wider">
                  Pure Besan • Whole Mari (Black Pepper)
                </span>
              </div>

              {/* Bottom pill inside peek window */}
              <div className="relative z-10 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/20 text-center">
                <span className="text-[10px] font-bold text-white uppercase block leading-tight">
                  Crispy Outside • Pillowy Soft Inside
                </span>
              </div>
            </div>

            {/* Sub-label under window */}
            <div className="mt-2 text-center flex items-center justify-center gap-2 text-[10px] font-bold text-amber-200">
              <span>✓ 100% Sing Tel (Groundnut Oil)</span>
              <span>•</span>
              <span>✓ 0% Palm Oil</span>
            </div>
          </div>
        </div>

        {/* Pouch Bottom: Weight, Certification Badges */}
        <div className="p-4 pt-2 relative z-10 bg-black/40 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-[#D83A2E] flex items-center justify-center text-white">
                <Flame className="w-3 h-3 fill-current text-white" />
              </div>
              <div className="text-left">
                <span className="text-[9px] uppercase tracking-wider text-white/60 block leading-none">Flavour</span>
                <span className="text-[10px] font-bold text-white leading-tight">Peppery Mild</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] text-white/90 font-medium">Satvik &amp; Pure</span>
            </div>

            <div className="bg-[#F49A24] px-2.5 py-1 rounded-lg border border-amber-200/50 shadow-sm">
              <span className="text-xs font-black text-amber-950 font-mono">{weight}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
