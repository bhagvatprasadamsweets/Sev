import { Flame, Sparkles, Award } from 'lucide-react';

export default function PackshotGraphic({
  productName = 'Classic Bhujia',
  tagline = 'Moth Bean Crispy Crunch',
  themeColor = '#681C22',
  accentColor = '#FFD66B',
  weight = '200g',
  spiceLevel = 'Medium',
  className = '',
  size = 'normal' // 'normal', 'large', 'small'
}) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  return (
    <div
      className={`relative select-none transition-transform duration-500 ${className}`}
      style={{
        width: isLarge ? '340px' : isSmall ? '180px' : '260px',
        maxWidth: '100%',
        aspectRatio: '3 / 4.4'
      }}
    >
      {/* Soft Ambient Shadow */}
      <div
        className="absolute inset-x-4 -bottom-6 h-10 rounded-full blur-xl opacity-40 transition-opacity"
        style={{ backgroundColor: themeColor }}
      />

      {/* Main Pouch Body */}
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col justify-between shadow-2xl border border-white/20"
        style={{
          background: `linear-gradient(155deg, ${themeColor} 0%, #1e090b 100%)`
        }}
      >
        {/* Metallic Top Seal Bar */}
        <div className="relative h-6 w-full bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 border-b border-amber-500/30 flex items-center justify-between px-3">
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-800/40"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-800/40"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-800/40"></span>
          </div>
          <span className="text-[9px] font-mono font-bold tracking-widest text-amber-950 uppercase">
            FRESH RESEALABLE ZIPPER
          </span>
          <div className="w-2 h-2 rounded-full border border-amber-900/40"></div>
        </div>

        {/* Subtle Pouch Highlights / Foil Glare */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 via-white/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black/25 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black/25 to-transparent pointer-events-none" />

        {/* Pouch Header: Brand Logo & Tagline */}
        <div className="p-4 pt-3 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-2">
            <Sparkles className="w-3 h-3 text-[#FFD66B]" />
            <span className="text-[10px] uppercase tracking-widest font-semibold text-white/90">
              DESI HERITAGE
            </span>
          </div>

          <div className="flex items-center justify-center gap-1.5">
            <h3 className="font-extrabold text-2xl tracking-tighter text-white font-display">
              Crunch<span style={{ color: accentColor }}>Katha</span>
            </h3>
          </div>
          <p className="text-[9px] uppercase tracking-wider text-amber-200/80 font-medium">
            Har Bite Mein Desi Swag
          </p>
        </div>

        {/* Center: Window displaying Golden Crispy Sev / Namkeen Texture */}
        <div className="px-5 my-auto relative z-10">
          <div className="relative rounded-2xl p-2.5 bg-black/40 backdrop-blur-md border border-white/20 shadow-inner overflow-hidden">
            {/* Background texture representing crispy golden namkeen */}
            <div
              className="w-full h-24 rounded-xl relative overflow-hidden flex items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=400&q=80')`,
                backgroundColor: '#b45309'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              
              {/* Crunchy Stamp Over Texture */}
              <div className="relative z-10 px-3 py-1 rounded-md bg-black/60 backdrop-blur-sm border border-amber-300/40 text-center">
                <span className="text-[11px] font-bold text-amber-300 tracking-wider uppercase block">
                  100% Besan
                </span>
                <span className="text-[9px] text-white/80 block">
                  Groundnut Oil Fried
                </span>
              </div>
            </div>

            {/* Product Name Label on Pack */}
            <div className="mt-2 text-center">
              <h4 className="text-white font-bold text-base tracking-tight font-display leading-tight">
                {productName}
              </h4>
              <p className="text-[10px] text-white/70 line-clamp-1 mt-0.5">
                {tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Pouch Bottom: Badges, Spice Rating, Weight Seal */}
        <div className="p-4 pt-1 relative z-10 bg-gradient-to-t from-black/60 to-transparent">
          <div className="flex items-center justify-between border-t border-white/10 pt-2.5">
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 rounded-full bg-[#D83A2E] flex items-center justify-center">
                <Flame className="w-3 h-3 text-white" />
              </div>
              <div className="text-left">
                <span className="text-[9px] uppercase tracking-wider text-white/60 block leading-none">Spice</span>
                <span className="text-[11px] font-bold text-white leading-tight">{spiceLevel}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-[10px] text-amber-200/90 font-medium">0% Trans Fat</span>
            </div>

            <div className="bg-white/15 px-2 py-0.5 rounded border border-white/20">
              <span className="text-xs font-bold text-white font-mono">{weight}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
