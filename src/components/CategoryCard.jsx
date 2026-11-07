import { ArrowUpRight, Flame } from 'lucide-react';

export default function CategoryCard({ category, onSelectCategory }) {
  return (
    <div
      onClick={() => onSelectCategory(category.id)}
      className="group cursor-pointer rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl border border-[#681C22]/10 bg-white relative overflow-hidden flex flex-col justify-between"
    >
      {/* Top Details & Header */}
      <div className="relative z-10 mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#681C22]/70 bg-[#FFF7E9] px-3 py-1 rounded-full border border-[#681C22]/10">
            {category.itemCount}
          </span>
          <div className="w-10 h-10 rounded-full bg-[#FFF7E9] group-hover:bg-[#D83A2E] text-[#25221F] group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
            <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#25221F] group-hover:text-[#D83A2E] transition-colors leading-tight mb-2">
          {category.name}
        </h3>

        <p className="text-sm text-[#25221F]/75 leading-relaxed font-normal">
          {category.tagline}
        </p>
      </div>

      {/* Visually distinctive organic image container */}
      <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#FFF7E9] border border-[#681C22]/5">
        <img
          src={category.image}
          alt={category.alt}
          className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Gradient shadow overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Bottom Pill on Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="text-xs font-semibold text-white/90 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">
            {category.popularItem}
          </span>
          <span className="text-[11px] font-bold text-[#FFD66B] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1">
            <Flame className="w-3 h-3 text-[#D83A2E] fill-[#D83A2E]" />
            {category.spiceLevel}
          </span>
        </div>
      </div>
    </div>
  );
}
